# Gates: L3 — ~/.wiki → Claude OS knowledge_docs KB (읽기 전용 미러)

Scope: `sync-wiki-kb.mjs` 신규, `state/wiki-kb-sync.json` 상태 파일. ~/.wiki는 절대 수정하지 않음. refresh-projects.ps1·dashboard·.env 수정 금지(L2가 호출 연결).
검증 스크립트: `state/verify-wiki-kb.mjs` (`count` | `search`). 실행 로그: `logs/wiki-kb-sync-run{1..5}*.log`.

- [x] L3-1: `sync-wiki-kb.mjs` — ~/.wiki/**/*.md(node_modules·.git 제외) 전량을 `command-center-knowledge_docs`에 업서트, filename = 상대경로 `/`→`__`. 상태 파일에 {path: mtimeMs}. 결과 stdout `scanned=N upserted=N deleted=N unchanged=N errors=0`
  CHECK: node C:/workspace/command-center/sync-wiki-kb.mjs
  EXPECT: /errors=0/
  EVIDENCE: 2026-08-23 run4 `scanned=570 upserted=0 deleted=0 unchanged=570 errors=0` (elapsed 0.2s). 초기 전량은 run1(504/565 성공, 61건 `fetch failed`)+run2(63건)+run3(18건, errors=0) 3회에 걸쳐 완료 — 실패 원인은 문서 크기가 아니라 claude-os 서버 리스너 사망(아래 미해결 #1). 최대 문서 log.md 136,800B·index.md 56,162B·raw/2026-04-14-agentic-rag-landscape.md 35,797B 모두 재시도에서 성공. 스크립트: API는 `127.0.0.1`(Node의 localhost→::1 폴백이 ~50s 실측), 동시 2(기본, `WIKI_KB_CONCURRENCY`로 조정), 네트워크 오류 4회 백오프 재시도, 실패는 `failed: [{rel,bytes,error}]`로 stdout 기록·errors 카운트.

- [x] L3-2: KB 문서 수 = 디스크 md 수 (build-galaxy 기준 447±, 실측 숫자 기재)
  CHECK: node -e "const fs=require('fs'),p=require('path');let n=0;(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.isDirectory()){if(e.name!=='node_modules'&&!e.name.startsWith('.'))w(p.join(d,e.name))}else if(e.name.endsWith('.md'))n++}})(require('os').homedir()+'/.wiki');fetch('http://127.0.0.1:8051/api/kb/command-center-knowledge_docs/documents').then(r=>r.json()).then(j=>{const k=(j.documents||j).length;console.log(k,n,k===n?'COUNT_OK':'MISMATCH')})"
  EXPECT: COUNT_OK
  EVIDENCE: `node state/verify-wiki-kb.mjs count` → `kb_docs=570 disk_md=570 chunks=5247 COUNT_OK`; 원 CHECK(localhost)도 `570 570 COUNT_OK`. 디스크 실측 570(447±은 build-galaxy가 _librarian/raw/src/test 등을 세지 않은 값; 본 미러는 점 디렉토리·node_modules만 제외). 작업 중 위키가 565→570으로 증가(librarian이 쓰는 중)한 것도 증분이 그대로 따라감.

- [x] L3-3: 증분 — 2회째 실행은 unchanged=전체, upserted=0. 테스트: 상태 파일에서 항목 1개 mtime을 0으로 바꾼 뒤 실행 → upserted=1 (위키 파일은 건드리지 않음)
  EVIDENCE: run4(무변경) `scanned=570 upserted=0 deleted=0 unchanged=570 errors=0`. run5: state의 `concepts/hook-system.md` mtime 1787413619440.874→0 으로 변경 후 실행 → `scanned=570 upserted=1 deleted=0 unchanged=569 errors=0` (25.6s), 상태값 1787413619440.874로 복원. 위키 파일 mtime 2026-08-23 00:46:59.440874100 실행 전후 동일(stat 실측). 로그 `logs/wiki-kb-sync-run5-mtime0.log`.

- [ ] L3-4: 검색 정합 — search-all "Ralph Wiggum Loop" top1이 concepts 해당 문서, "apps in toss launch contract" top3에 apps-in-toss-front-loaded-launch-contract 포함
  EVIDENCE: FAIL(claude-os 측 원인, L3 범위 밖). `POST /api/kb/search-all {query, top_k:5, kb_filter:"command-center-knowledge_docs"}` — kb_filter는 prefix 필터로 동작 확인(kbs_searched=1). 결과는 청크 단위(같은 filename 중복). "Ralph Wiggum Loop" top1~5 = `concepts__rubric-ceiling-generic-troubleshooting.md` (score 0.994, 본문에 ralph 0회); `concepts__ralph-wiggum-loop.md` 최고 청크 0.609. "apps in toss launch contract" top5 = portfolio-snapshot-aggregation 0.720 / _librarian__lint-queue 0.710 / non-game-anonymous-leaderboard 0.696 / log.md 0.691 / rewarded-ad-release-gate 0.688 — front-loaded-launch-contract 미포함. 두 문서 모두 KB에 존재 확인(documents 목록). 근본 원인(실측): `app/core/ingestion.py chunk_document`가 `Document(text, metadata)`를 `SentenceSplitter(512)`에 그대로 넘겨 LlamaIndex가 metadata 문자열(preprocess_markdown이 frontmatter를 `fm_*`로 복사, 해당 문서 1,053자)을 chunk 예산에서 차감 → rubric-ceiling 문서는 12~25자 청크 139개(metadata 제외 시 2개, 로컬 재현). 초소형 청크 임베딩은 어떤 질의와도 cosine 0.99. 같은 증상 문서: smallest-ratchet-conditional-relaxation(102청크, 평균 87자), critic-blind-spots(96청크). 제안 패치(claude-os, L1/부모 판단): `chunk_document`에서 `Document(text=text, metadata=metadata, excluded_embed_metadata_keys=list(metadata), excluded_llm_metadata_keys=list(metadata))` 또는 `SentenceSplitter(..., include_metadata=False)`. 패치 후 `state/wiki-kb-sync.json` 삭제 → `node sync-wiki-kb.mjs`로 전량 재임포트 → `node state/verify-wiki-kb.mjs search`로 재검증.

- [x] L3-5: 소요 시간·임베딩 경로 기록(Ollama nomic-embed-text 로컬), 전량 임포트 시간(초) 실측. 1000문서까지 선형이면 증분 전략으로 충분함을 수치로 기재
  EVIDENCE: 임베딩 경로 = claude-os `ingest_file` → `OllamaEmbedding(nomic-embed-text:latest, http://localhost:11434)`(server.err.log의 `POST /api/embed` 로그로 확인), 서버 핸들러 안에서 동기 실행(이벤트루프 차단). 실측: run1 565건 시도 중 504건 성공 1368.1s(동시 4, L2 sync 동시 진행) ≈ 2.7s/문서; run3 18건 96.4s(동시 2) ≈ 5.4s/문서; run5 1건 25.6s(6청크 문서, hook-system.md). 총 5,247청크. 문서당 시간은 청크 수에 비례(=문서 길이·frontmatter 양)하고 문서 수에 선형 → 1000문서 전량 ≈ 45~90분(동시 2~4). 무변경 재실행 0.2s, 1건 변경 ~25s → 증분 전략으로 충분(전량 재임포트는 chunking 패치 등 파생물 규칙이 바뀔 때만).

## 미해결 (L3 범위 밖 — 부모/L1 판단 필요)
1. **claude-os 서버 리스너 사망 2회(00:44:10, 00:50:14)**: `server.err.log` `asyncio - ERROR - Accept failed on a socket / OSError [WinError 64]` → Python ProactorEventLoop(`proactor_events._start_serving`)가 리스닝 소켓을 닫음. 프로세스는 살아있고(스레드 1, CPU 0) 8051·5173 모두 무응답. 트리거: 동기 ingest로 루프가 막힌 사이 다른 클라이언트(00:50:14 직전 `GET /api/kb` = 대시보드 폴링/타임아웃 abort)가 연결을 RST. L3가 `stop.ps1`→`start.ps1`로 2회 재기동(설정 변경 없음). 제안: `mcp_server/server.py` `uvicorn.run` 전에 `asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())` 또는 ingest를 `run_in_threadpool`로 이동.
2. **chunking metadata 인플레이션**(L3-4 참조) — 검색 품질 전반에 영향. 패치는 claude-os.
3. `documents/content`의 `metadata` 필드는 서버가 무시(`ingest_file(tmp, kb, filename)`만 전달). 스크립트는 계약대로 {path, category, title, mtime}을 보내지만 KB metadata에는 남지 않음.
