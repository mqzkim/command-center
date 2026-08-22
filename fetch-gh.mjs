// gh 메타 스냅샷 수집기 — mqzkim 비아카이브 레포를 gh GraphQL로 조사해 projects-raw.json 재생성.
// 사용: node fetch-gh.mjs   (command-center 디렉토리에서; gh auth 필요)
// 스키마는 기존 projects-raw.json과 동일. stageEstimate는 기록하지 않는다(단계 추정 금지 — 빌더가 launch-status.json 없으면 "미확정").
// 실패 시 기존 파일을 건드리지 않고 exit 1.
import { readFileSync, writeFileSync, renameSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "projects-raw.json");
const OWNER = "mqzkim";
const BATCH = 10;
const t0 = Date.now();
let apiCalls = 0;


function gql(query, variables = {}) {
  apiCalls++;
  const args = ["api", "graphql", "-f", `query=${query}`];
  for (const [k, v] of Object.entries(variables)) args.push(typeof v === "number" ? "-F" : "-f", `${k}=${v}`);
  const out = execFileSync("gh", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 120000, maxBuffer: 64 * 1024 * 1024 });
  const j = JSON.parse(out);
  if (j.errors?.length) throw new Error("GraphQL: " + JSON.stringify(j.errors).slice(0, 500));
  return j.data;
}

/* ---------- 1. 레포 목록 ---------- */
const list = [];
let cursor = null;
do {
  const q = `query($after:String){ repositoryOwner(login:"${OWNER}"){ repositories(first:100, after:$after, ownerAffiliations:OWNER, orderBy:{field:PUSHED_AT, direction:DESC}){
    pageInfo{hasNextPage endCursor}
    nodes{ name url description isPrivate isFork isArchived pushedAt createdAt stargazerCount
      primaryLanguage{name} defaultBranchRef{name} issues(states:OPEN){totalCount} } } } }`;
  const d = gql(q, cursor ? { after: cursor } : {});
  const page = d.repositoryOwner.repositories;
  list.push(...page.nodes.filter(n => !n.isArchived));
  cursor = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
} while (cursor);

const forks = list.filter(r => r.isFork);
const real = list.filter(r => !r.isFork);

/* ---------- 2. 상세 (10개씩 배치) ---------- */
const since = new Date(Date.now() - 30 * 864e5).toISOString();
const detail = {};
for (let i = 0; i < real.length; i += BATCH) {
  const chunk = real.slice(i, i + BATCH);
  const parts = chunk.map((r, k) => `r${k}: repository(owner:"${OWNER}", name:"${r.name}"){
    root: object(expression:"HEAD:"){ ... on Tree { entries { name type } } }
    docs: object(expression:"HEAD:docs"){ ... on Tree { entries { name type } } }
    granite: object(expression:"HEAD:granite.config.ts"){ ... on Blob { text } }
    ait: object(expression:"HEAD:apps-in-toss.config.ts"){ ... on Blob { text } }
    pkg: object(expression:"HEAD:package.json"){ ... on Blob { text } }
    readme: object(expression:"HEAD:README.md"){ ... on Blob { text } }
    issues(first:10, states:OPEN, orderBy:{field:CREATED_AT, direction:DESC}){ nodes { title } }
    defaultBranchRef { target { ... on Commit {
      recent: history(first:5){ nodes { committedDate messageHeadline } }
      last30: history(since:"${since}"){ totalCount } } } }
  }`);
  const d = gql(`{ ${parts.join("\n")} }`);
  chunk.forEach((r, k) => { detail[r.name] = d[`r${k}`]; });
}

/* ---------- 3. 판정 ---------- */
const now = Date.now();
// 레포 이름만으로 결정론적 분류 (description은 보지 않음 — 오분류 방지). 미매치 시 side-project.
const CATEGORY_RULES = [
  ["harness-ai-infra", /(hermes|agent|harness|helix|briefme|trading|llm-lean|sena|orchestrat|infra)/i],
  ["knowledge-wiki", /(wiki|growth-hacker)/i],
  ["landing-docs", /(\.github\.io$|-support$|-setup$|landing|docs-site)/i],
];
function classify(r, det) {
  const pkg = det?.pkg?.text || "";
  const hasGranite = !!det?.granite, hasAitCfg = !!det?.ait;
  let hasDep = false;
  try { const p = JSON.parse(pkg); hasDep = Object.keys({ ...p.dependencies, ...p.devDependencies }).some(k => k.startsWith("@apps-in-toss")); }
  catch { hasDep = /@apps-in-toss\//.test(pkg); }
  const rootNames = (det?.root?.entries || []).map(e => e.name);
  const aitBundle = rootNames.filter(n => n.endsWith(".ait"));
  const readmeToss = /toss/i.test(det?.readme?.text || "");
  const isToss = hasGranite || hasAitCfg || hasDep || aitBundle.length > 0;
  const ev = [];
  if (hasGranite) ev.push("granite.config.ts exists");
  if (hasAitCfg) ev.push("apps-in-toss.config.ts exists" + (hasGranite ? "" : " (granite.config.ts 대신)"));
  if (hasDep) ev.push("package.json has @apps-in-toss dependency");
  if (aitBundle.length) ev.push("root has " + aitBundle.join(", "));
  if (readmeToss) ev.push("README mentions toss");
  const aitEvidence = ev.length ? ev.join("; ") : "no granite.config.ts, no @apps-in-toss dep, no toss mention";
  let appName;
  for (const t of [det?.granite?.text, det?.ait?.text]) { const m = t && t.match(/appName:\s*["']([^"']+)["']/); if (m) { appName = m[1]; break; } }

  const days = Math.floor((now - new Date(r.pushedAt)) / 864e5);
  const c30 = det ? (det.defaultBranchRef?.target?.last30?.totalCount ?? 0) : 0;
  const hasDesc = !!r.description;
  const parts = []; let sig;
  if (r.isFork) { parts.push("포크, 자체 커밋 없음"); sig = 1; }
  else if (days <= 7) { parts.push("최근 7일 내 푸시"); sig = 4; }
  else if (days <= 30) { parts.push("최근 30일 내 푸시"); sig = 3 + ((isToss || c30 >= 5) ? 1 : 0); }
  else if (days <= 60) { parts.push("60일 내 푸시"); sig = 2; }
  else { parts.push(`마지막 푸시 ${days}일 전`); sig = 1 + (hasDesc ? 1 : 0) + (isToss ? 1 : 0); }
  if (!r.isFork) {
    if (c30 >= 5) parts.push(`30일 커밋 ${c30}`);
    if (isToss) parts.push("앱인토스");
    else if (hasDesc) parts.push("설명 있음");
    if ((r.issues?.totalCount ?? 0) >= 10) parts.push(`오픈 이슈 ${r.issues.totalCount}`);
  }
  sig = Math.min(4, Math.max(1, sig));

  let category;
  if (r.isFork) category = "fork";
  else if (isToss) category = "apps-in-toss";
  else {
    category = (CATEGORY_RULES.find(([, re]) => re.test(r.name)) || [])[0] || "side-project";
  }
  return { isToss, aitEvidence, appName, category, sig, reason: parts.join(", "), c30, rootNames, hasDep };
}

const STAGE_FILES = /^(PRD\.md|docs|store-assets|plans|\.launch|vitest\.config\.[cm]?[jt]s|RELEASE.*\.md|.*\.ait)$/i;
const repos = [];
for (const r of list) {
  const det = r.isFork ? null : detail[r.name];
  const c = classify(r, det);
  const base = {
    name: r.name, url: r.url, description: r.description, isPrivate: r.isPrivate, isFork: r.isFork,
    primaryLanguage: r.primaryLanguage?.name || null, pushedAt: r.pushedAt, createdAt: r.createdAt,
    stargazerCount: r.stargazerCount,
  };
  if (r.isFork) {
    repos.push({ ...base, defaultBranch: r.defaultBranchRef?.name || null, isAppsInToss: false, aitEvidence: c.aitEvidence,
      category: "fork", significance: c.sig, significanceReason: c.reason, note: "포크: 간단 메타만" });
    continue;
  }
  const hist = det?.defaultBranchRef?.target;
  const item = { ...base, openIssues: r.issues?.totalCount ?? 0, defaultBranch: r.defaultBranchRef?.name || null,
    recentCommits: (hist?.recent?.nodes || []).map(n => ({ date: n.committedDate.slice(0, 10), message: n.messageHeadline })),
    commitsLast30d: c.c30, isAppsInToss: c.isToss, aitEvidence: c.aitEvidence, category: c.category };
  if (c.isToss) {
    if (c.appName) item.appName = c.appName;
    const ev = c.rootNames.filter(n => STAGE_FILES.test(n));
    for (const e of det?.docs?.entries || []) ev.push("docs/" + e.name);
    item.stageEvidence = ev;
    const titles = (det?.issues?.nodes || []).map(n => n.title);
    if (titles.length) item.openIssueTitles = titles;
    item.stageNote = "단계 추정 없음 — stageEvidence는 gh 파일 트리 관찰값. 단계의 진실은 .launch/launch-status.json";
  }
  item.significance = c.sig; item.significanceReason = c.reason;
  repos.push(item);
}

/* ---------- 4. 출력 (원자적 교체) ---------- */
if (repos.length === 0) { console.error("no repos fetched — keeping existing file"); process.exit(1); }
const out = { generatedAt: new Date().toISOString(), source: `gh api graphql (${apiCalls} calls, ${repos.length} repos: ${real.length} non-fork + ${forks.length} fork; fetch-gh.mjs)`, repos };
const tmp = OUT + ".tmp";
writeFileSync(tmp, JSON.stringify(out, null, 2) + "\n");
renameSync(tmp, OUT);
const toss = repos.filter(r => r.isAppsInToss).map(r => r.name);
console.log(`repos ${repos.length} (non-fork ${real.length}, fork ${forks.length}) | apps-in-toss ${toss.length}: ${toss.join(", ")}`);
console.log(`api calls ${apiCalls} | elapsed ${((Date.now() - t0) / 1000).toFixed(1)}s | WROTE projects-raw.json`);
