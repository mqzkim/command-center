// L2 검증 스크립트: 문서 수 정합 + search-all 정합 (Windows cmd 인용 문제 회피용)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const P = require('C:/workspace/command-center/projects-data.js');
const BASE = 'http://localhost:8051';
const KB = 'command-center-project_index';

const docs = (await (await fetch(`${BASE}/api/kb/${KB}/documents`)).json()).documents;
const names = docs.map((d) => d.filename);
const dupes = names.filter((n, i) => names.indexOf(n) !== i);
console.log(`docs=${docs.length} summary.total=${P.summary.total} dupes=${dupes.length} ${docs.length === P.summary.total && dupes.length === 0 ? 'COUNT_OK' : 'MISMATCH'}`);

async function search(query, top_k = 5) {
  const r = await (await fetch(`${BASE}/api/kb/search-all`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ query, top_k }) })).json();
  const results = r.results || r;
  console.log(`\nsearch "${query}" top_k=${top_k}`);
  results.forEach((x, i) => console.log(`  ${i + 1}. kb=${x.kb_name || x.kb} file=${x.filename || x.metadata?.filename || x.source} score=${(x.score ?? x.similarity ?? 0).toFixed?.(3)}`));
  return results;
}
const r1 = await search('nailmap 블로커');
const top1 = r1[0]?.filename || r1[0]?.metadata?.filename;
console.log(`TOP1=${top1} ${top1 === 'project-nailmap.md' ? 'TOP1_OK' : 'TOP1_FAIL'}`);

const r2 = await search('앱인토스 샌드박스 QA 단계');
const sq = new Set(P.items.filter((p) => !p.hidden && p.toss?.stage === 'sandbox_qa').map((p) => `project-${p.name}.md`));
const hits = r2.filter((x) => sq.has(x.filename || x.metadata?.filename)).length;
console.log(`sandbox_qa hits in top5=${hits} (sandbox_qa projects: ${[...sq].join(', ')}) ${hits >= 3 ? 'SQ_OK' : 'SQ_FAIL'}`);
