#!/usr/bin/env node
// sync-wiki-kb.mjs — ~/.wiki/**/*.md → Claude OS KB `command-center-knowledge_docs` (읽기 전용 미러, 증분)
// 상태 파일: state/wiki-kb-sync.json {relpath: mtimeMs}
// ~/.wiki는 절대 수정하지 않음. truth는 ~/.wiki, KB는 파생물.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

// 127.0.0.1 고정: Node의 localhost는 ::1 우선 → 서버(IPv4)에 ~50s 폴백 지연 실측
const API = process.env.CLAUDE_OS_API || 'http://127.0.0.1:8051';
const KB = 'command-center-knowledge_docs';
const WIKI = process.env.WIKI_DIR || path.join(os.homedir(), '.wiki');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATE_FILE = path.join(HERE, 'state', 'wiki-kb-sync.json');
const CONCURRENCY = Number(process.env.WIKI_KB_CONCURRENCY || 2); // 4→2: Windows claude-os는 ingest가 이벤트루프를 동기 차단 → accept 실패(WinError 64)로 리스너 종료 사례 2회 실측
const PROGRESS_EVERY = 50;

function scan(dir, base = dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      scan(path.join(dir, e.name), base, out);
    } else if (e.isFile() && e.name.endsWith('.md')) {
      const abs = path.join(dir, e.name);
      const rel = path.relative(base, abs).split(path.sep).join('/');
      out.push({ rel, abs, mtimeMs: fs.statSync(abs).mtimeMs });
    }
  }
  return out;
}

const toFilename = (rel) => rel.replace(/\//g, '__');
const categoryOf = (rel) => (rel.includes('/') ? rel.split('/')[0] : '(root)');
function titleOf(text, rel) {
  const m = text.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : path.basename(rel, '.md');
}

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return {}; }
}
function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  const sorted = Object.fromEntries(Object.keys(state).sort().map((k) => [k, state[k]]));
  fs.writeFileSync(STATE_FILE, JSON.stringify(sorted, null, 2) + '\n');
}

async function health() {
  try {
    const r = await fetch(`${API}/health`, { signal: AbortSignal.timeout(15000) });
    return r.ok;
  } catch { return false; }
}

// 일시적 연결 오류(fetch failed / ECONNRESET 등) 재시도: 3회, 백오프 1s·3s·6s
async function fetchRetry(url, opts, tries = 4) {
  for (let i = 0; ; i++) {
    try { return await fetch(url, opts); }
    catch (e) {
      const code = e.cause?.code || e.cause?.message || e.message;
      if (i >= tries - 1) throw new Error(`${opts?.method || 'GET'} network error after ${tries} tries: ${code}`);
      await new Promise((r) => setTimeout(r, [1000, 3000, 6000][i] || 6000));
    }
  }
}

async function del(filename) {
  const r = await fetchRetry(`${API}/api/kb/${KB}/documents/${encodeURIComponent(filename)}`, { method: 'DELETE' });
  if (r.ok || r.status === 404) return;
  throw new Error(`DELETE ${r.status}: ${(await r.text()).slice(0, 200)}`);
}

async function upsert(f) {
  const content = fs.readFileSync(f.abs, 'utf8');
  const filename = toFilename(f.rel);
  await del(filename);
  if (!content.trim()) throw new Error('empty file (server rejects empty content)');
  const body = JSON.stringify({
    content,
    filename,
    metadata: { path: f.rel, category: categoryOf(f.rel), title: titleOf(content, f.rel), mtime: new Date(f.mtimeMs).toISOString(), source: 'wiki-mirror' },
  });
  const r = await fetchRetry(`${API}/api/kb/${KB}/documents/content`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body,
  });
  if (!r.ok) throw new Error(`POST ${r.status} (${content.length} chars): ${(await r.text()).slice(0, 300)}`);
  return r.json();
}

async function pool(items, worker) {
  let i = 0, done = 0;
  const results = [];
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
      done++;
      if (done % PROGRESS_EVERY === 0) console.log(`progress ${done}/${items.length}`);
    }
  }));
  return results;
}

async function main() {
  const t0 = Date.now();
  if (!fs.existsSync(WIKI)) { console.log(`skipped: ${WIKI} missing`); console.log('scanned=0 upserted=0 deleted=0 unchanged=0 errors=0'); return; }
  if (!(await health())) { console.log('skipped: claude-os offline'); console.log('scanned=0 upserted=0 deleted=0 unchanged=0 errors=0'); return; }

  const files = scan(WIKI);
  const state = loadState();
  const current = new Set(files.map((f) => f.rel));
  const changed = files.filter((f) => state[f.rel] !== f.mtimeMs);
  const removed = Object.keys(state).filter((rel) => !current.has(rel));
  const unchanged = files.length - changed.length;
  console.log(`wiki=${WIKI} scanned=${files.length} to_upsert=${changed.length} to_delete=${removed.length} unchanged=${unchanged}`);

  const errors = [];
  let upserted = 0, deleted = 0;

  await pool(changed, async (f) => {
    try { await upsert(f); state[f.rel] = f.mtimeMs; upserted++; }
    catch (e) { const sz = fs.statSync(f.abs).size; errors.push({ rel: f.rel, bytes: sz, error: String(e.message) }); console.error(`ERROR upsert ${f.rel} (${sz} bytes): ${e.message}`); }
  });
  await pool(removed, async (rel) => {
    try { await del(toFilename(rel)); delete state[rel]; deleted++; }
    catch (e) { errors.push({ rel, error: String(e.message) }); console.error(`ERROR delete ${rel}: ${e.message}`); }
  });

  saveState(state);
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  if (errors.length) console.log(`failed: ${JSON.stringify(errors)}`);
  console.log(`elapsed=${secs}s`);
  console.log(`scanned=${files.length} upserted=${upserted} deleted=${deleted} unchanged=${unchanged} errors=${errors.length}`);
  process.exitCode = 0;
}

main().catch((e) => { console.error(e); console.log('scanned=0 upserted=0 deleted=0 unchanged=0 errors=1'); process.exitCode = 1; });
