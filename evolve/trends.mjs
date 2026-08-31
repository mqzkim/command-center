// 트렌드 스캐너 — gh search로 star 상위 AI 스킬/오케스트레이션/하네스/MCP repo를 수집하고
// (1) ~/.wiki/entities/ai-benchmark-repos 카탈로그 (2) state.seenRepos(플레이북이 검토 완료한 repo)
// (3) state.appliedImprovements의 repo 대비 중복 제거한다.
// 출력: evolve/trends-latest.json (미검토 후보 전량, ≤60). state.json은 읽기만 한다 —
// seenRepos 추가는 플레이북(evolve.md §3)이 검토(채택/기각) 시점에 수행한다.
// (2026-08-23 수정: 스캔 시점에 seenRepos를 소비하던 구조가 후보 57건을 유실하고 매일 new=0을 만들었음)
// 사용: node evolve/trends.mjs   (command-center 루트 어디서 실행해도 동작)
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";
import { execFileSync } from "node:child_process";

const HERE = dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const STATE_P = join(HERE, "state.json");
const MIN_STARS = 500;
const QUERIES = [
  // 오너 요구 범위: AI 스킬 / 오케스트레이션 / 하네스 — 전부 커버
  { q: "claude code skills", label: "skills" },
  { q: "ai agent skills", label: "skills" },
  { q: "llm agent orchestration", label: "orchestration" },
  { q: "multi-agent framework", label: "orchestration" },
  { q: "ai agent harness", label: "harness" },
  { q: "coding agent harness", label: "harness" },
  { q: "mcp server", label: "mcp" },
  { q: "claude code plugin", label: "skills" },
  // 2026-08-23 §6 확장: 1차 8쿼리 풀(84건)이 10차 실행 만에 전량 검토되어 CANDIDATES_EXHAUSTED 직전.
  // 오너 워크플로 직결 축(훅·서브에이전트·메모리·컨텍스트 엔지니어링·평가 하네스·지식 관리)을 추가.
  { q: "claude code hooks", label: "harness" },
  { q: "claude code subagents", label: "orchestration" },
  { q: "llm agent memory", label: "harness" },
  { q: "context engineering llm", label: "harness" },
  { q: "llm evaluation harness", label: "harness" },
  { q: "agentic workflow automation", label: "orchestration" },
  { q: "llm knowledge base wiki", label: "knowledge" },
  // 2026-09-01 §6 재충전: 15쿼리 풀(153건)이 재소진(alreadySeen 150 → candidates 0, CANDIDATES_EXHAUSTED).
  // 어제 원장 이월안대로 신규 축 4종 추가.
  { q: "agent skills marketplace", label: "skills" },
  { q: "claude code plugin marketplace", label: "skills" },
  { q: "llm coding agent benchmark", label: "harness" },
  { q: "spec-driven development agent", label: "harness" },
];
const PER_QUERY_LIMIT = 30; // 15→30 (2026-08-23): star 상위 15건은 쿼리 간 중복이 커서 순증이 적음

// 2026-09-01 §6: --sort stars는 정적 상위권만 반복 스캔해 풀이 고갈된다(minStars 하향만으로는
// star-sort 상위 30이 안 바뀌어 무효). 핵심 축을 --sort updated·별점 문턱 300으로 재스캔해
// "최근 활발한 중견 repo"를 매일 유입시키는 재충전 경로.
const MIN_STARS_RECENT = 300;
const RECENT_QUERIES = [
  { q: "claude code skills", label: "skills" },
  { q: "claude code plugin", label: "skills" },
  { q: "claude code hooks", label: "harness" },
  { q: "ai agent harness", label: "harness" },
  { q: "llm agent orchestration", label: "orchestration" },
  { q: "mcp server", label: "mcp" },
];

const state = JSON.parse(readFileSync(STATE_P, "utf8"));
const seen = new Set((state.seenRepos || []).map(s => s.toLowerCase()));
for (const a of state.appliedImprovements || []) if (a.repo) seen.add(String(a.repo).toLowerCase());

/* wiki 카탈로그(owner__repo.md) — 이미 지식화된 repo는 중복 */
const catDir = join(homedir(), ".wiki", "entities", "ai-benchmark-repos");
const catalog = new Set(
  existsSync(catDir)
    ? readdirSync(catDir).filter(f => f.endsWith(".md")).map(f => f.replace(/\.md$/, "").replace("__", "/").toLowerCase())
    : []
);

function ghSearch(q, { sort = "stars", minStars = MIN_STARS } = {}) {
  try {
    const out = execFileSync("gh", ["search", "repos", q, "--stars", `>=${minStars}`,
      "--sort", sort, "--limit", String(PER_QUERY_LIMIT),
      "--json", "fullName,stargazersCount,description,updatedAt,url"],
      { encoding: "utf8", timeout: 60000 });
    return JSON.parse(out);
  } catch (e) {
    console.error("SEARCH_FAIL", q, String(e.message).slice(0, 120));
    return [];
  }
}

const found = new Map();
function collect(results, label, q) {
  for (const r of results) {
    const key = r.fullName.toLowerCase();
    if (!found.has(key)) found.set(key, { ...r, labels: [label], query: q });
    else if (!found.get(key).labels.includes(label)) found.get(key).labels.push(label);
  }
}
for (const { q, label } of QUERIES) collect(ghSearch(q), label, q);
for (const { q, label } of RECENT_QUERIES)
  collect(ghSearch(q, { sort: "updated", minStars: MIN_STARS_RECENT }), label, `${q} (updated)`);

let dupWiki = 0, dupSeen = 0;
const fresh = [];
for (const [key, r] of found) {
  if (catalog.has(key)) { dupWiki++; continue; }
  if (seen.has(key)) { dupSeen++; continue; }
  fresh.push(r);
}
fresh.sort((a, b) => b.stargazersCount - a.stargazersCount);

const out = {
  generatedAt: new Date().toISOString(),
  minStars: MIN_STARS,
  minStarsRecent: MIN_STARS_RECENT,
  queries: QUERIES.map(x => x.q),
  recentQueries: RECENT_QUERIES.map(x => x.q),
  scanned: found.size,
  dedup: { wikiCatalog: dupWiki, alreadySeen: dupSeen },
  candidates: fresh.slice(0, 60),
};
writeFileSync(join(HERE, "trends-latest.json"), JSON.stringify(out, null, 1));

console.log(`TRENDS_OK scanned=${found.size} new=${fresh.length} dup_wiki=${dupWiki} dup_seen=${dupSeen}`);
if (found.size && !fresh.length) console.log("CANDIDATES_EXHAUSTED — 스캔 전건이 검토됨. 쿼리 확장 또는 MIN_STARS 하향 검토 (evolve.md §6)");
if (fresh.length) console.log("top:", fresh.slice(0, 5).map(r => `${r.fullName}(${r.stargazersCount}★)`).join(", "));
