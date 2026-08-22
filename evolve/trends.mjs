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

function ghSearch(q) {
  try {
    const out = execFileSync("gh", ["search", "repos", q, "--stars", `>=${MIN_STARS}`,
      "--sort", "stars", "--limit", "15",
      "--json", "fullName,stargazersCount,description,updatedAt,url"],
      { encoding: "utf8", timeout: 60000 });
    return JSON.parse(out);
  } catch (e) {
    console.error("SEARCH_FAIL", q, String(e.message).slice(0, 120));
    return [];
  }
}

const found = new Map();
for (const { q, label } of QUERIES) {
  for (const r of ghSearch(q)) {
    const key = r.fullName.toLowerCase();
    if (!found.has(key)) found.set(key, { ...r, labels: [label], query: q });
    else if (!found.get(key).labels.includes(label)) found.get(key).labels.push(label);
  }
}

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
  queries: QUERIES.map(x => x.q),
  scanned: found.size,
  dedup: { wikiCatalog: dupWiki, alreadySeen: dupSeen },
  candidates: fresh.slice(0, 60),
};
writeFileSync(join(HERE, "trends-latest.json"), JSON.stringify(out, null, 1));

console.log(`TRENDS_OK scanned=${found.size} new=${fresh.length} dup_wiki=${dupWiki} dup_seen=${dupSeen}`);
if (found.size && !fresh.length) console.log("CANDIDATES_EXHAUSTED — 스캔 전건이 검토됨. 쿼리 확장 또는 MIN_STARS 하향 검토 (evolve.md §6)");
if (fresh.length) console.log("top:", fresh.slice(0, 5).map(r => `${r.fullName}(${r.stargazersCount}★)`).join(", "));
