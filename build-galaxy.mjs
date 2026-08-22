// 갤럭시 전 노드 실명화 빌드 — ~/.wiki를 스캔해 galaxy-data.js 생성.
// 사용: node build-galaxy.mjs   (command-center 디렉토리에서)
// 제목은 각 md의 첫 "# " 헤딩, 없으면 파일 슬러그. 경로는 실경로.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { homedir } from "node:os";

const WIKI = join(homedir(), ".wiki");

function mdFiles(dir, recursive = false) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (recursive) out.push(...mdFiles(p, true)); }
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function meta(p) {
  let t = null, d = null;
  try {
    const head = readFileSync(p, "utf8").slice(0, 4000);
    const m = head.match(/^#\s+(.+)$/m);
    if (m) t = m[1].trim().replace(/\s+/g, " ").slice(0, 60);
    /* 설명: frontmatter description → 첫 본문 문단 폴백 */
    const fm = head.match(/^---\n[\s\S]*?\bdescription:\s*(?:>-?\s*\n\s*)?(.+?)\n(?:\S|---)/m)
      || head.match(/^description:\s*(.+)$/m);
    if (fm) d = fm[1].trim();
    if (!d) {
      const body = head.replace(/^---\n[\s\S]*?\n---\n/, "");
      const para = body.split("\n").find(l =>
        l.trim() && !l.startsWith("#") && !l.startsWith("---") && !l.startsWith("<!--") && !l.startsWith("|"));
      if (para) d = para.trim();
    }
    if (d) d = d.replace(/^[>*\-\s]+/, "").replace(/^Description:\s*/i, "")
      .replace(/\*\*/g, "").replace(/\[\[|\]\]/g, "").slice(0, 220);
  } catch {}
  return { t, d };
}

function collect(paths) {
  return paths.map(p => {
    const { t, d } = meta(p);
    const st = statSync(p);
    return {
      t: t || relative(WIKI, p).replace(/\\/g, "/").replace(/\.md$/, ""),
      p: relative(WIKI, p).replace(/\\/g, "/"),
      d: d || "",
      m: st.mtime.toISOString().slice(0, 10),
      s: Math.round(st.size / 102.4) / 10, // KB (소수 1자리)
    };
  }).sort((a, b) => a.t.localeCompare(b.t, "ko"));
}

const sectors = {
  CONCEPTS: collect(mdFiles(join(WIKI, "concepts"))),
  ENTITIES: collect(mdFiles(join(WIKI, "entities"), true)),
  RESEARCH: collect(mdFiles(join(WIKI, "research"))),
  INTERNAL: collect([
    ...mdFiles(join(WIKI, "internal"), true),
    ...(() => { try { statSync(join(WIKI, "summaries")); return mdFiles(join(WIKI, "summaries")); } catch { return []; } })(),
  ]),
};

const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
let js = `// 자동 생성 — build-galaxy.mjs가 ~/.wiki 디스크 스캔으로 만든 실명 목록.\n`;
js += `// 생성: ${stamp}Z · 수동 편집 금지 (재생성: node build-galaxy.mjs)\n`;
js += `const CC_GALAXY_ITEMS = ${JSON.stringify(sectors)};\n`;
js += `if (typeof module !== "undefined" && module.exports) module.exports = CC_GALAXY_ITEMS;\n`;
writeFileSync(new URL("./galaxy-data.js", import.meta.url), js);

for (const [k, v] of Object.entries(sectors)) console.log(k, v.length);
console.log("WROTE galaxy-data.js");
