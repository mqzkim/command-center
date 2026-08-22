// L1 헤드리스 검증: dump-dom으로 body[data-errors]·cosState·KB·검색결과 추출. 사용: node gates/l1-check.mjs [url]
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const url = process.argv[2] || "http://localhost:7766/dashboard.html?brief=1&q=nailmap";
const ch = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ud = mkdtempSync(join(tmpdir(), "cc-l1-"));
// virtual-time-budget: 펜딩 fetch(8051 search-all ~8s 실측)가 끝날 때까지 가상시간 정지 → 라이브 렌더 후 DOM 덤프. chrome 종료가 느려 timeout으로 회수(stdout은 보존).
let dom = "";
try { dom = execFileSync(ch, ["--headless=new", "--disable-gpu", "--no-first-run", `--user-data-dir=${ud}`, "--virtual-time-budget=10000", "--dump-dom", url], { encoding: "utf8", maxBuffer: 64 << 20, stdio: ["ignore", "pipe", "ignore"], timeout: 90000 }); }
catch (e) { dom = String(e.stdout || ""); }
const body = (dom.match(/<body[^>]*>/) || [""])[0];
const errs = (body.match(/data-errors="(\d+)"/) || [, "0"])[1];
const grab = (id, n) => { const i = dom.indexOf(`id="${id}"`); return i < 0 ? "(none)" : dom.slice(i, i + n).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); };
console.log("URL", url);
console.log("BODY", body, "ERRORS", errs);
console.log("STATE", grab("cosState", 200));
console.log("KB", grab("cosKb", 700));
console.log("MEM", grab("cosMem", 400));
console.log("RES", grab("cosRes", 1500));
console.log("EXTRA", grab("detail", 4000).slice(0, 900));
console.log(errs === "0" ? "ERRORS_OK" : "ERRORS_BAD");
