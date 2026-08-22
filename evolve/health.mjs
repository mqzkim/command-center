// 자가치유 헬스체크 — 체크 9종, 자동 복구 4종. 미해결은 state.openFindings로 escalation.
// 사용: node evolve/health.mjs   (종료코드 0 = 전부 정상/복구됨, 1 = 미해결 존재)
import { readFileSync, writeFileSync, existsSync, statSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";
import { execFileSync, execSync } from "node:child_process";
import vm from "node:vm";
import { createRequire } from "node:module";

const HERE = dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const ROOT = dirname(HERE);
const require2 = createRequire(join(ROOT, "x.js"));
const STATE_P = join(HERE, "state.json");
const URLBASE = "http://127.0.0.1:7766";
const results = [];
let healedAny = false;

const sh = (cmd) => execSync(cmd, { cwd: ROOT, encoding: "utf8", timeout: 30000, stdio: ["ignore", "pipe", "pipe"] });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function http(path) {
  try { const r = await fetch(URLBASE + path, { signal: AbortSignal.timeout(5000) }); return r.status; }
  catch { return 0; }
}
function record(name, ok, heal, note = "") {
  results.push({ name, ok, healed: heal, note });
  const tag = ok ? (heal ? "HEALED" : "ok") : "FAIL";
  console.log(`${tag.padEnd(6)} ${name}${note ? " — " + note : ""}`);
}
function freshRequire(p) { delete require2.cache[require2.resolve(p)]; return require2(p); }

/* C1. dashboard.html 인라인 JS 문법 */
try {
  const html = readFileSync(join(ROOT, "dashboard.html"), "utf8");
  new vm.Script([...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join("\n"));
  record("dashboard-js-syntax", true, false);
} catch (e) { record("dashboard-js-syntax", false, false, String(e.message).slice(0, 100)); }

/* C2. data.js 파싱 + 필수 키 */
try {
  const d = freshRequire(join(ROOT, "data.js"));
  const ok = ["meta", "calendar", "inbox", "projects", "knowledge", "artifacts", "galaxy"].every(k => k in d);
  record("data-js", ok, false, ok ? "" : "필수 키 누락");
} catch (e) { record("data-js", false, false, String(e.message).slice(0, 100)); }

/* C3. galaxy-data.js — 파싱 실패/부재/전건 무명 시 재빌드로 복구 */
{
  let ok = false, heal = false, note = "";
  const check = () => { const I = freshRequire(join(ROOT, "galaxy-data.js")); const n = Object.values(I).flat(); return n.length > 100 && n.every(x => x.t && x.p); };
  try { ok = check(); } catch (e) { note = String(e.message).slice(0, 80); }
  if (!ok) {
    try { sh("node build-galaxy.mjs"); ok = check(); heal = ok; healedAny ||= heal; note = "재빌드"; } catch (e) { note += " 재빌드 실패 " + String(e.message).slice(0, 80); }
  }
  record("galaxy-data", ok, heal, note);
}

/* C4. projects-data.js 파싱 (있을 때만; 재빌드는 로컬 스캔 기반이라 안전) */
{
  let ok = false, heal = false, note = "";
  const p = join(ROOT, "projects-data.js");
  if (!existsSync(p)) { record("projects-data", true, false, "부재 — 선택 구성요소"); }
  else {
    try { ok = !!freshRequire(p).items; } catch (e) { note = String(e.message).slice(0, 80); }
    if (!ok) { try { sh("node build-projects.mjs"); ok = !!freshRequire(p).items; heal = ok; healedAny ||= heal; note = "재빌드"; } catch (e) { note += " 재빌드 실패"; } }
    record("projects-data", ok, heal, note);
  }
}

/* C5. wiki junction — 끊겼으면 재생성 */
{
  let ok = existsSync(join(ROOT, "wiki", "index.md"));
  let heal = false;
  if (!ok) {
    try {
      execFileSync("powershell", ["-NoProfile", "-Command",
        `New-Item -ItemType Junction -Path "${join(ROOT, "wiki")}" -Target "${join(homedir(), ".wiki")}" -Force`],
        { timeout: 20000 });
      ok = existsSync(join(ROOT, "wiki", "index.md")); heal = ok; healedAny ||= heal;
    } catch {}
  }
  record("wiki-junction", ok, heal);
}

/* C6+C7. 서버 응답 — 죽었으면 run-server.vbs로 재기동 */
{
  let code = await http("/dashboard.html");
  let heal = false;
  if (code !== 200) {
    try { execFileSync("wscript.exe", [join(ROOT, "run-server.vbs")], { timeout: 15000 }); } catch {}
    await sleep(2500);
    code = await http("/dashboard.html");
    heal = code === 200; healedAny ||= heal;
  }
  record("server-dashboard", code === 200, heal, `HTTP ${code}`);
  const wcode = await http("/wiki/index.md");
  record("server-wiki", wcode === 200, false, `HTTP ${wcode}`);
}

/* C8. 로그온 자동시작 vbs — 없으면 재복사 */
{
  const startup = join(homedir(), "AppData", "Roaming", "Microsoft", "Windows", "Start Menu", "Programs", "Startup", "CommandCenterServe.vbs");
  let ok = existsSync(startup), heal = false;
  if (!ok) { try { copyFileSync(join(ROOT, "run-server.vbs"), startup); ok = existsSync(startup); heal = ok; healedAny ||= heal; } catch {} }
  record("startup-vbs", ok, heal);
}

/* C9. evolve 스크립트 자체 문법 (자기수정 가드) */
{
  let ok = true, note = "";
  for (const f of ["trends.mjs", "health.mjs"]) {
    try { execFileSync("node", ["--check", join(HERE, f)], { timeout: 15000 }); }
    catch (e) { ok = false; note += f + " "; }
  }
  record("evolve-scripts-syntax", ok, false, note);
}

/* 결과 저장 + escalation */
const fails = results.filter(r => !r.ok);
const report = { at: new Date().toISOString(), results, unresolved: fails.map(f => f.name) };
writeFileSync(join(HERE, "health-latest.json"), JSON.stringify(report, null, 1));
try {
  const state = JSON.parse(readFileSync(STATE_P, "utf8"));
  state.openFindings = fails.map(f => ({ check: f.name, note: f.note, at: report.at }));
  writeFileSync(STATE_P, JSON.stringify(state, null, 1));
} catch {}

if (fails.length) { console.log(`UNRESOLVED ${fails.length}: ${fails.map(f => f.name).join(", ")}`); process.exit(1); }
console.log(healedAny ? "HEALED — 전 항목 정상 (자동 복구 수행됨)" : "ALL_HEALTHY");
