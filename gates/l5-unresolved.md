# Gates: L5 — 미해결 4건 해소 (metadata 저장·정확 필터 검색·레이트리밋·재기동 자동 sync)

계약(API): `POST /api/kb/{kb}/documents/content`의 `metadata`가 청크 metadata에 그대로 저장된다(키 충돌 시 요청 metadata 우선). `POST /api/kb/search-all`에 선택 필드 `metadata_filter: {key: value, ...}` — 모든 키가 정확히 일치(문자열 비교, 대소문자 무시)하는 청크만 반환. `kb_filter`와 병용 가능. 레이트리밋은 env `SEARCH_RATE_LIMIT`(기본 `60/minute`).

- [x] L5-1: metadata 저장 — `documents/content {metadata:{stage:"sandbox_qa",category:"apps-in-toss",name:"nailmap"}}` 업로드 후 해당 문서 청크의 metadata에 stage/category/name이 있다(`/api/kb/{kb}/documents` 또는 search 결과 metadata로 확인)
  EVIDENCE: 2026-08-23 04:18 — ingest_file(extra_metadata) 추가, api_upload_content가 request.metadata 전달. 테스트 문서 l5-test-meta.md 업로드 후 search-all(metadata_filter {name:"NAILMAP",category:"apps-in-toss"}) 결과 metadata = {stage:sandbox_qa, category:apps-in-toss, name:nailmap} (대소문자 무시 일치 확인). 재sync된 project-nailmap.md 청크엔 stageKo/nextCheck/blockersOpen=3 까지 저장.

- [x] L5-2: 정확 필터 — `sync-claude-os.mjs`가 metadata {name, category, stage, nextCheck, blockersOpen}를 보내고 재업서트한 뒤, `search-all {query:"앱인토스 샌드박스 QA 단계", top_k:10, kb_filter:"command-center-project_index", metadata_filter:{stage:"sandbox_qa"}}` 결과의 문서가 전부 sandbox_qa 프로젝트이고 개수 = projects-data.js의 sandbox_qa 수(현재 5, 재빌드 값으로 실측)
  CHECK: node C:/workspace/command-center/gates/l5-verify.mjs
  EXPECT: /STAGE_FILTER_OK/
  EVIDENCE: 2026-08-23 04:18 — `node gates/l5-verify.mjs` → results=14 unique=5 expected=5 echo_filter={"stage":"sandbox_qa"} badStage=0 / STAGE_FILTER_OK n=5

- [x] L5-3: 레이트리밋 — 기본 60/min으로 상향(env 오버라이드), 30초 내 search-all 15회 연속 전부 200
  EVIDENCE: 2026-08-23 04:19 — 데코레이터 `@limiter.limit(os.getenv("SEARCH_RATE_LIMIT","60/minute"))`, .env.example 주석 추가. search-all 15회 연속(수 초 내) 전부 200.

- [x] L5-4: 재기동 자동 sync — `start.ps1`이 /health healthy 확인 후 `node C:\workspace\command-center\sync-claude-os.mjs`를 실행(실패해도 기동은 성공). stop→start 1회 후 로그/stdout에 `upserted=N ... errors=0` 기록, project_index 문서 수 = summary.total
  EVIDENCE: 2026-08-23 04:16 — 재기동 전 project_index 문서 수 68. stop.ps1→start.ps1 1회, stdout·logs\start-sync.log: "2026-08-23 04:16:51 sync-claude-os: upserted=68 deleted=0 skipped=24 errors=0", start.ps1 exit 0. 재기동 후 문서 수 68 = summary.total 68.

- [x] L5-5: 대시보드 단계 질의 — 드로어 검색창/프로젝트 검색에서 질의에 단계명(한국어·영문 14단계 사전)이 포함되면 `metadata_filter.stage`를 자동 부여하고 결과 헤더에 "단계 필터: 샌드박스 QA" 표시. 헤드리스 `?brief=1&q=샌드박스 QA 블로커` 결과 전부 sandbox_qa 프로젝트, ERRORS 0
  EVIDENCE: 2026-08-23 04:2x 부모 — dashboard.html cosStageOf(): PJ.stages 14단계+unverified의 영문 key/한국어 라벨 사전 매칭 → metadata_filter.stage + kb_filter project_index + top_k≥20 + 프로젝트당 1행 dedup, 헤더 '단계 필터: <한국어> (<key>) · N건', 서버가 metadata_filter를 에코하지 않으면 '서버 미지원' 표기. 헤드리스(gates/l1-shot.mjs, ?brief=1&q=샌드박스 QA 블로커): COS_PANEL '단계 필터: 샌드박스 QA (sandbox_qa) · 5건' + naeheunjeok/today-task/seoul-house-from-space/… 전부 metadata.stage=sandbox_qa 표시, ERRORS 0. shot-l5-stage.png Read 판독 완료

- [x] L5-6: 회귀 — pytest 패치 전후 passed 수 동일 이상, /health healthy, check-dashboard SELF_CONTAINED_SYNTAX_OK 200 200, L2 게이트 CHECK(sync 마지막 줄 errors=0) 재통과, 위키 KB 검색 2건(verify-wiki-kb search) 여전히 PASS
  CHECK: node C:/workspace/command-center/check-dashboard.mjs
  EXPECT: /SELF_CONTAINED_SYNTAX_OK 200 200/
  EVIDENCE: SELF_CONTAINED_SYNTAX_OK 200 200 | TOSS 17 16 TOSS_OK
