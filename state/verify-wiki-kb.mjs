// 검증 스크립트 (L3-2 count, L3-4 search). 사용: node state/verify-wiki-kb.mjs [count|search]
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
const API = 'http://127.0.0.1:8051', KB = 'command-center-knowledge_docs';
const mode = process.argv[2] || 'count';

function countMd(d) {
  let n = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) { if (e.name !== 'node_modules' && !e.name.startsWith('.')) n += countMd(path.join(d, e.name)); }
    else if (e.name.endsWith('.md')) n++;
  }
  return n;
}

if (mode === 'count') {
  const disk = countMd(path.join(os.homedir(), '.wiki'));
  const j = await (await fetch(`${API}/api/kb/${KB}/documents`)).json();
  const docs = j.documents || j;
  const st = await (await fetch(`${API}/api/kb/${KB}/stats`)).json();
  console.log(`kb_docs=${docs.length} disk_md=${disk} chunks=${st.total_chunks} ${docs.length === disk ? 'COUNT_OK' : 'MISMATCH'}`);
  if (docs.length !== disk) {
    const state = JSON.parse(fs.readFileSync(new URL('./wiki-kb-sync.json', import.meta.url)));
    const kbNames = new Set(docs.map((d) => d.filename || d.metadata?.filename || d.name));
    const missing = Object.keys(state).map((r) => r.replace(/\//g, '__')).filter((f) => !kbNames.has(f));
    console.log('missing_in_kb=', missing.slice(0, 20), 'sample_doc=', JSON.stringify(docs[0]).slice(0, 300));
  }
} else {
  const queries = [
    ['Ralph Wiggum Loop', 'concepts__', 1],
    ['apps in toss launch contract', 'apps-in-toss-front-loaded-launch-contract', 3],
  ];
  for (const [q, expect, topN] of queries) {
    const r = await fetch(`${API}/api/kb/search-all`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ query: q, top_k: 5, kb_filter: KB }) });
    const j = await r.json();
    const names = (j.results || []).map((x) => `${x.kb_name}:${x.metadata?.filename}:${x.score?.toFixed(3)}`);
    const hit = names.slice(0, topN).some((n) => n.includes(expect));
    console.log(`Q="${q}" kbs_searched=${j.kbs_searched} ${hit ? 'PASS' : 'FAIL'} top${topN} must include "${expect}"`);
    names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));
  }
}
