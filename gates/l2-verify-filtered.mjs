// search-all 을 kb_filter=command-center-project_index 로 한정한 변형 (wiki KB 혼합 결과와 대비용)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const P = require('C:/workspace/command-center/projects-data.js');
const BASE = 'http://localhost:8051';
async function search(query, kb_filter, top_k = 5) {
  const r = await (await fetch(`${BASE}/api/kb/search-all`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ query, top_k, kb_filter }) })).json();
  const results = r.results || r;
  console.log(`\nsearch "${query}" kb_filter=${kb_filter || '(none)'} top_k=${top_k}`);
  results.forEach((x, i) => console.log(`  ${i + 1}. kb=${x.kb_name} file=${(x.filename||x.metadata?.filename)} score=${(x.score ?? 0).toFixed(3)}`));
  return results;
}
const KB = 'command-center-project_index';
const r1 = await search('nailmap 블로커', KB);
console.log(`TOP1=${(r1[0]?.filename||r1[0]?.metadata?.filename)} ${(r1[0]?.filename||r1[0]?.metadata?.filename) === 'project-nailmap.md' ? 'TOP1_OK' : 'TOP1_FAIL'}`);
const r2 = await search('앱인토스 샌드박스 QA 단계', KB);
const sq = new Set(P.items.filter((p) => !p.hidden && p.toss?.stage === 'sandbox_qa').map((p) => `project-${p.name}.md`));
const uniq = [...new Set(r2.map((x) => (x.filename||x.metadata?.filename)))];
const hits = uniq.filter((f) => sq.has(f)).length;
console.log(`sandbox_qa distinct hits in top5=${hits} ${hits >= 3 ? 'SQ_OK' : 'SQ_FAIL'}`);
