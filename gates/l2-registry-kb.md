# Gates: L2 — 프로젝트 레지스트리 → Claude OS project_index KB

Scope: `sync-claude-os.mjs` 신규, `refresh-projects.ps1` 수정(단계 추가). 다른 파일 수정 금지.

- [ ] L2-1: `sync-claude-os.mjs` — projects-data.js 가시 항목 전부를 `command-center-project_index` KB에 업서트(DELETE 404 무시 → POST documents/content, filename `project-<name>.md`, PLAN 포맷). 숨김 항목은 제외하되 이전에 올라간 숨김/삭제 프로젝트 문서는 DELETE. 결과 요약(upserted/deleted/skipped/errors) stdout + exit code
  CHECK: node C:/workspace/command-center/sync-claude-os.mjs
  EXPECT: /upserted=\d+ deleted=\d+ errors=0/
  EVIDENCE: pending

- [ ] L2-2: KB 문서 수 = 가시 프로젝트 수(projects-data.js summary.total)
  CHECK: node -e "const P=require('C:/workspace/command-center/projects-data.js');fetch('http://localhost:8051/api/kb/command-center-project_index/documents').then(r=>r.json()).then(j=>{const n=(j.documents||j).length;console.log(n,P.summary.total,n===P.summary.total?'COUNT_OK':'MISMATCH')})"
  EXPECT: COUNT_OK
  EVIDENCE: pending

- [ ] L2-3: 검색 정합 — search-all "nailmap 블로커" top1이 project-nailmap.md, "앱인토스 샌드박스 QA 단계" 결과에 sandbox_qa 프로젝트가 top5 중 3건 이상
  EVIDENCE: pending

- [ ] L2-4: refresh-projects.ps1에 sync 단계 추가(claude-os 오프라인이면 "skipped" 로그 + exit 0), 1회 실행 로그에 sync 블록 존재
  CHECK: grep -c "sync-claude-os" C:/workspace/command-center/refresh-projects.ps1
  EXPECT: /[1-9]/
  EVIDENCE: pending

- [ ] L2-5: 멱등성 — 2회 연속 실행 시 두 번째도 errors=0, 문서 수 불변, 중복 문서 0
  EVIDENCE: pending
