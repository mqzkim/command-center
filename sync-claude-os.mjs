// sync-claude-os.mjs — projects-data.js(가시 항목) → claude-os KB `command-center-project_index` 업서트
// 실행: node sync-claude-os.mjs   (claude-os 8051 오프라인이면 "skipped: claude-os offline" + exit 0)
// 업서트 = DELETE /api/kb/{kb}/documents/{filename}(404 무시) → POST /api/kb/{kb}/documents/content
// 마지막 줄: upserted=N deleted=N skipped=N errors=N
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const BASE = process.env.CLAUDE_OS_URL || 'http://localhost:8051';
const KB = 'command-center-project_index';
const CONCURRENCY = 4;
const PREFIX = 'project-';

const P = require(path.join(__dirname, 'projects-data.js'));
const stageKo = P.stageKo || {};
const generatedAt = new Date().toISOString();

function docFor(p) {
  const t = p.toss;
  const stage = t?.stage || (p.legacy ? 'legacy' : 'n/a');
  const L = [];
  const ko = (s) => stageKo[s] || s;
  L.push(`# ${p.name}`);
  if (p.displayName || t?.displayName) L.push(`displayName: ${p.displayName || t.displayName}`);
  // 검색 품질용: 대시보드가 던지는 질의 형태("<name> 블로커", "<name> 단계")를 키워드 줄로 첫 청크에 포함
  const kw = [`${p.name} 프로젝트`, `${p.name} 상태`];
  if (t) kw.push(`${p.name} 블로커`, `${p.name} 단계`, `${p.name} 앱인토스`, `앱인토스 ${ko(t.stage)} 단계`, `apps-in-toss ${t.stage}`);
  if (p.displayName || t?.displayName) kw.push(`${p.displayName || t.displayName} 블로커`);
  L.push(`keywords: ${kw.join(', ')}`);
  // 한 줄 요약(한국어): 프로젝트명 + 현재 단계 + 블로커 수
  if (t) {
    const nb = t.blockersOpen ?? t.blockers?.length ?? 0;
    L.push(`summary: ${p.name}은(는) 앱인토스(Apps in Toss) 앱, 현재 ${ko(t.stage)}(${t.stage}) 단계. ${nb ? `${p.name} 블로커 ${nb}건 열림.` : '블로커 없음.'}${t.nextCheck ? ` 다음 점검: ${ko(t.nextCheck)}(${t.nextCheck}).` : ''}`);
  } else {
    L.push(`summary: ${p.name} — ${p.category}${p.legacy ? ' (legacy)' : ''}. 마지막 활동 ${p.lastActivity || 'unknown'}.`);
  }
  L.push(`category: ${p.category}`);
  L.push(`stage: ${stage}${stageKo[stage] ? ` (${stageKo[stage]})` : ''}`);
  L.push(`nextCheck: ${t?.nextCheck ? `${t.nextCheck}${stageKo[t.nextCheck] ? ` (${stageKo[t.nextCheck]})` : ''}` : 'n/a'}`);
  L.push(`blockers: ${t?.blockers?.length ? `${t.blockersOpen ?? t.blockers.length} open / ${t.blockersTotal ?? t.blockers.length} total — ${t.blockers.join(' | ')}` : 'none'}`);
  L.push(''); // 청크 경계: 첫 청크는 이름·요약·단계·블로커만 담아 검색 신호를 집중
  L.push(`lastActivity: ${p.lastActivity || 'unknown'}`);
  L.push(`lastCommit: ${p.lastCommit || 'unknown'}`);
  L.push(`branch: ${p.branch || 'n/a'} (dirty files: ${p.dirty ?? 0})`);
  L.push(`lang: ${p.lang || 'n/a'}`);
  L.push(`local: ${p.links?.local || 'n/a'}`);
  L.push(`github: ${p.links?.github || p.remote || 'n/a'}`);
  L.push(`wiki: ${p.links?.wiki?.length ? p.links.wiki.map((w) => `~/.wiki/${w}`).join(', ') : 'none'}`);
  if (p.links?.launch) L.push(`launch: ${p.links.launch}`);

  if (t) {
    L.push('');
    L.push(`## 앱인토스 파이프라인 (Apps in Toss pipeline) — ${t.appName || p.name}`);
    L.push(`classification: ${t.classification || 'unknown'} · finalReleaseApproved: ${t.finalReleaseApproved ? 'yes' : 'no'} · updatedAt: ${t.updatedAt || 'unknown'}`);
    if (t.goal) L.push(`goal: ${t.goal}`);
    for (const s of t.pipeline || []) L.push(`- ${s.s} (${stageKo[s.s] || s.s}): ${s.st}`);
    if (t.blockers?.length) {
      L.push('');
      L.push(`## 블로커 (blockers) — ${p.name} 블로커 ${t.blockersOpen ?? t.blockers.length}건`);
      for (const b of t.blockers) L.push(`- ${b}`);
    }
  }

  if (p.gh) {
    L.push('');
    L.push(`## GitHub`);
    L.push(`openIssues: ${p.gh.openIssues ?? 0} · commits30d: ${p.gh.commits30d ?? 0} · pushedAt: ${p.gh.pushedAt || 'unknown'} · private: ${p.gh.private ? 'yes' : 'no'}`);
    if (p.gh.recent?.length) {
      L.push(`### 최근 커밋 (recent commits)`);
      for (const c of p.gh.recent) L.push(`- ${c.date}: ${c.message}`);
    }
    if (p.gh.issueTitles?.length) {
      L.push(`### 오픈 이슈 (open issues)`);
      for (const i of p.gh.issueTitles) L.push(`- ${i}`);
    }
  }

  L.push('');
  L.push(`desc: ${p.desc || t?.goal || '(no description)'}`);
  return L.join('\n');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// 연결 실패(ECONNREFUSED 등, 예: claude-os 재기동 중)만 최대 5회 백오프 재시도. HTTP 에러는 그대로 반환.
async function api(method, url, body, retries = 5) {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fetch(BASE + url, {
        method,
        headers: body ? { 'content-type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (e) {
      if (attempt >= retries) throw e;
      await sleep(2000 * (attempt + 1));
    }
  }
}

async function upsert(p) {
  const filename = `${PREFIX}${p.name}.md`;
  const del = await api('DELETE', `/api/kb/${KB}/documents/${encodeURIComponent(filename)}`);
  if (!del.ok && del.status !== 404) throw new Error(`DELETE ${filename} -> ${del.status}`);
  const res = await api('POST', `/api/kb/${KB}/documents/content`, {
    content: docFor(p),
    filename,
    metadata: {
      name: p.name,
      category: p.category,
      stage: p.toss?.stage || (p.legacy ? 'legacy' : 'n/a'),
      source: 'projects-data.js',
      generatedAt,
    },
  });
  if (!res.ok) throw new Error(`POST ${filename} -> ${res.status} ${await res.text()}`);
  const j = await res.json();
  if (j.success === false) throw new Error(`POST ${filename} -> ${JSON.stringify(j)}`);
  return filename;
}

async function pool(items, fn) {
  let i = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (i < items.length) {
      const item = items[i++];
      await fn(item);
    }
  });
  await Promise.all(workers);
}

async function main() {
  let upserted = 0, deleted = 0, skipped = 0, errors = 0;
  // 1) online?
  try {
    const h = await api('GET', '/health', undefined, 0);
    if (!h.ok) throw new Error(`health ${h.status}`);
  } catch (e) {
    console.log(`skipped: claude-os offline (${BASE}: ${e.cause?.code || e.message})`);
    console.log(`upserted=0 deleted=0 skipped=${P.items.length} errors=0`);
    return 0;
  }
  // 2) KB 존재 확인
  const kbs = await (await api('GET', '/api/kb')).json();
  if (!(kbs.knowledge_bases || []).some((k) => k.name === KB)) {
    console.log(`error: KB ${KB} not found — 부모가 프로젝트 command-center 를 먼저 생성해야 함`);
    console.log(`upserted=0 deleted=0 skipped=0 errors=1`);
    return 1;
  }
  // 3) 현재 문서 목록
  const existing = (await (await api('GET', `/api/kb/${KB}/documents`)).json()).documents || [];
  const existingNames = new Set(existing.map((d) => d.filename));

  const visible = P.items.filter((p) => !p.hidden);
  skipped = P.items.length - visible.length;
  const wanted = new Set(visible.map((p) => `${PREFIX}${p.name}.md`));

  // 4) upsert (동시 4)
  await pool(visible, async (p) => {
    try {
      const f = await upsert(p);
      upserted++;
      console.log(`upsert ${f} [${p.category}/${p.toss?.stage || '-'}]`);
    } catch (e) {
      errors++;
      console.log(`ERROR ${p.name}: ${e.message}`);
    }
  });

  // 5) stale 삭제 — project-*.md 중 wanted 에 없는 것만 (그 외 문서는 건드리지 않음)
  const stale = [...existingNames].filter((f) => f.startsWith(PREFIX) && f.endsWith('.md') && !wanted.has(f));
  await pool(stale, async (f) => {
    try {
      const r = await api('DELETE', `/api/kb/${KB}/documents/${encodeURIComponent(f)}`);
      if (!r.ok && r.status !== 404) throw new Error(`status ${r.status}`);
      deleted++;
      console.log(`delete ${f} (stale)`);
    } catch (e) {
      errors++;
      console.log(`ERROR delete ${f}: ${e.message}`);
    }
  });

  console.log(`upserted=${upserted} deleted=${deleted} skipped=${skipped} errors=${errors}`);
  return errors ? 1 : 0;
}

main().then((c) => process.exit(c), (e) => { console.log(`fatal: ${e.message}`); console.log('upserted=0 deleted=0 skipped=0 errors=1'); process.exit(1); });
