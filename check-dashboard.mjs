// 대시보드 게이트 체크 — 자족성·스크립트 문법·서빙(200)·프로젝트 레지스트리 정합. 사용: node check-dashboard.mjs
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const s = readFileSync(new URL("./dashboard.html", import.meta.url), "utf8");
const ext = (s.match(/(src|href)=["']https?:\/\//g) || []).length;
let syntax = "SYNTAX_OK";
try { new Function(s.split("<script>").pop().split("</script>")[0]); } catch (e) { syntax = "SYNTAX_FAIL " + e.message; }
const code = async u => { try { return (await fetch(u)).status; } catch { return "ERR"; } };
const a = await code("http://localhost:7766/dashboard.html"), b = await code("http://localhost:7766/projects-data.js");
const P = require("./projects-data.js");
const t = P.items.filter(p => p.category === "apps-in-toss" && !p.hidden);
const tossOk = t.every(p => p.toss && p.toss.stage && "source" in p.toss && "blockersOpen" in p.toss);
console.log(ext === 0 && syntax === "SYNTAX_OK" ? "SELF_CONTAINED_SYNTAX_OK" : `EXT ${ext} ${syntax}`, a, b);
console.log("TOSS", t.length, t.filter(p => p.toss.source).length, tossOk ? "TOSS_OK" : "TOSS_BAD");
