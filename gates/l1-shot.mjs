// L1 헤드리스 스크린샷/DOM (CDP): 라이브 fetch(search-all ~8s)를 실시간으로 기다린 뒤 캡처. 사용: node gates/l1-shot.mjs <url> <out.png> [waitMs]
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const [url, out, waitArg] = process.argv.slice(2);
const waitMs = +(waitArg || 25000);
const ch = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9300 + Math.floor(Math.random() * 500);
const ud = mkdtempSync(join(tmpdir(), "cc-cdp-"));
const proc = spawn(ch, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", `--user-data-dir=${ud}`, "--window-size=1600,1000", `--remote-debugging-port=${port}`, "about:blank"], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) { await sleep(200); try { const l = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); target = l.find(t => t.type === "page"); } catch {} }
if (!target) { proc.kill(); throw new Error("no CDP target"); }
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = new Map();
ws.onmessage = m => { const j = JSON.parse(m.data); if (j.id && pending.has(j.id)) { pending.get(j.id)(j); pending.delete(j.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1600, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url });
await sleep(waitMs);
const ev = expr => send("Runtime.evaluate", { expression: expr, returnByValue: true }).then(j => j.result && j.result.result && j.result.result.value);
const errors = await ev("document.body.dataset.errors || '0'");
const lastErr = await ev("document.body.dataset.lastError || ''");
const txt = await ev("(s=>s?s.innerText.replace(/\\s+/g,' ').slice(0,900):'(none)')(document.querySelector('#cosPanel'))");
const extra = await ev("(s=>s?s.innerText.replace(/\\s+/g,' ').slice(0,900):'(none)')(document.querySelector('#detail .extra'))");
const inline = await ev("(s=>s?s.innerText.replace(/\\s+/g,' ').slice(0,900):'(none)')(document.querySelector('#detail .cos-inline'))");
if (out) { const shot = await send("Page.captureScreenshot", { format: "png" }); writeFileSync(out, Buffer.from(shot.result.data, "base64")); }
console.log("URL", url, "\nERRORS", errors, lastErr, "\nCOS_PANEL", txt, "\nDETAIL_EXTRA", extra, "\nDETAIL_COS_INLINE", inline, "\nSHOT", out || "-");
console.log(errors === "0" ? "ERRORS_OK" : "ERRORS_BAD");
ws.close(); proc.kill();
