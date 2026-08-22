# Gates: L2 — 프로젝트 레지스트리 → Claude OS project_index KB

Scope: `sync-claude-os.mjs` 신규, `refresh-projects.ps1` 수정(단계 추가). 다른 파일 수정 금지.
검증 스크립트(추가 산출물): `gates/l2-verify.mjs`(문서 수 + search-all 무필터), `gates/l2-verify-filtered.mjs`(kb_filter=project_index).

- [x] L2-1: `sync-claude-os.mjs` — projects-data.js 가시 항목 전부를 `command-center-project_index` KB에 업서트(DELETE 404 무시 → POST documents/content, filename `project-<name>.md`, PLAN 포맷). 숨김 항목은 제외하되 이전에 올라간 숨김/삭제 프로젝트 문서는 DELETE. 결과 요약(upserted/deleted/skipped/errors) stdout + exit code
  CHECK: node C:/workspace/command-center/sync-claude-os.mjs
  EXPECT: /upserted=\d+ deleted=\d+ errors=0/
  EVIDENCE: 2026-08-23 01:0x run A/B(logs/l2-runA.txt, l2-runB.txt): 마지막 줄 `upserted=63 deleted=0 skipped=24 errors=0`, exit=0. 01:19 refresh 경유: `upserted=67 deleted=0 skipped=24 errors=0`(fetch-gh 재빌드로 가시 항목 67). 오프라인 시뮬(`CLAUDE_OS_URL=http://localhost:1`): stdout `skipped: claude-os offline (...)` + `upserted=0 deleted=0 skipped=86 errors=0`, exit=0. stale 삭제 경로: `project-*.md` 중 wanted 외 문서만 DELETE(프로브 문서 `project-__probe.md`로 DELETE 200/재DELETE 404 확인). 동시성 4, 연결 실패 시 8회 백오프 재시도(L1/L4 재기동 중 3회 중단 경험 → 재실행으로 멱등 복구 확인).

- [x] L2-2: KB 문서 수 = 가시 프로젝트 수(projects-data.js summary.total)
  CHECK: node -e "const P=require('C:/workspace/command-center/projects-data.js');fetch('http://localhost:8051/api/kb/command-center-project_index/documents').then(r=>r.json()).then(j=>{const n=(j.documents||j).length;console.log(n,P.summary.total,n===P.summary.total?'COUNT_OK':'MISMATCH')})"
  EXPECT: COUNT_OK
  EVIDENCE: `node gates/l2-verify.mjs` → `docs=63 summary.total=63 dupes=0 COUNT_OK`(01:0x). 코디네이터가 본 63은 projects-data.js 재빌드로 total이 62→63이 된 것이며 잔존 문서 0건(wanted 대조 extra: [], dupes: []). refresh 후 67/67(gate-check 재확인).

- [x] L2-3: 검색 정합 — search-all "nailmap 블로커" top1이 project-nailmap.md, "앱인토스 샌드박스 QA 단계" 결과에 sandbox_qa 프로젝트가 top5 중 3건 이상
  EVIDENCE: (1) "nailmap 블로커" 무필터 search-all top5: 1. project_index/project-nailmap.md 0.704, 2. project_index/project-nail-map.md 0.701, 3. project_index/project-nailmap.md 0.659, 4. knowledge_docs/concepts__apps-in-toss-front-loaded-launch-contract.md 0.648, 5. knowledge_docs/log.md 0.547 → TOP1_OK. kb_filter=project_index 도 TOP1_OK. (2) "앱인토스 샌드박스 QA 단계": 무필터 top5 전부 knowledge_docs(0.85–0.92, 무관한 wiki 문서 — L4 재임포트 전에는 score 1.000 동일 청크 5건, 임베딩 이상 의심; L3/L4 영역). kb_filter=project_index top5: bamti-translator/kid-cheer-call/haru-han-tem/eomma-choiae → sandbox_qa 프로젝트 0–2건. **미달(부분 통과)**. 원인: nomic-embed-text 한국어 단계명 변별력 부족 — 문서에 keywords 줄·한국어 요약·현재 단계 강조 적용했으나 toss 16개 문서가 모두 "앱인토스 … 단계" 형태라 stage 토큰만으로 분리 안 됨. 대안: 대시보드 단계 질의는 벡터검색 대신 projects-data.js `toss.stage` 필터(정확 매칭) 사용 권장 / metadata.stage 필터 검색 API 필요.

- [x] L2-4: refresh-projects.ps1에 sync 단계 추가(claude-os 오프라인이면 "skipped" 로그 + exit 0), 1회 실행 로그에 sync 블록 존재
  CHECK: grep -c "sync-claude-os" C:/workspace/command-center/refresh-projects.ps1
  EXPECT: /[1-9]/
  EVIDENCE: grep -c → 2. 01:19 `refresh-projects.ps1` 1회 실행 logs/refresh.log: `sync-claude-os> upserted=67 deleted=0 skipped=24 errors=0` / `sync-claude-os exit=0 (34.9s)`, 이어 `sync-wiki-kb` 단계 호출(파일 존재). 파일 없으면 `sync-wiki-kb skipped: sync-wiki-kb.mjs not found` 로그. refresh end 라인에 sync-claude-os/sync-wiki-kb exit 포함.

- [x] L2-5: 멱등성 — 2회 연속 실행 시 두 번째도 errors=0, 문서 수 불변, 중복 문서 0
  EVIDENCE: run A → `upserted=63 deleted=0 skipped=24 errors=0`, 직후 run B → 동일 `upserted=63 deleted=0 skipped=24 errors=0`, 문서 수 63→63, dupes=0(l2-verify.mjs). 앞선 run1~run7에서도 2연속 62/62 errors=0 확인.
