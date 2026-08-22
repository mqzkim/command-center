// L5-2 검증: projects-data.js 의 sandbox_qa 프로젝트 집합 == search-all(metadata_filter stage=sandbox_qa) unique filename 집합
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const P = require('C:/workspace/command-center/projects-data.js');
const BASE = process.env.CLAUDE_OS_URL || 'http://localhost:8051';
const KB = 'command-center-project_index';
const expected = new Set(P.items.filter((p) => !p.hidden && p.toss?.stage === 'sandbox_qa').map((p) => `project-${p.name}.md`));
const r = await (await fetch(`${BASE}/api/kb/search-all`, {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ query: '앱인토스 샌드박스 QA 단계', top_k: 20, kb_filter: KB, metadata_filter: { stage: 'sandbox_qa' } }),
})).json();
const results = r.results || [];
const got = new Set(results.map((x) => x.metadata?.filename));
const badStage = results.filter((x) => String(x.metadata?.stage) !== 'sandbox_qa').length;
const missing = [...expected].filter((f) => !got.has(f));
const extra = [...got].filter((f) => !expected.has(f));
console.log(`results=${results.length} unique=${got.size} expected=${expected.size} echo_filter=${JSON.stringify(r.metadata_filter)} badStage=${badStage}`);
if (!missing.length && !extra.length && !badStage) console.log(`STAGE_FILTER_OK n=${got.size}`);
else { console.log(`STAGE_FILTER_FAIL missing=${JSON.stringify(missing)} extra=${JSON.stringify(extra)}`); process.exit(1); }
