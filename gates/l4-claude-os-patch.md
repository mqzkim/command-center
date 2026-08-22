# Gates: L4 — claude-os 패치 (리스너 사망 · 청킹 metadata 인플레이션) + 전량 재임포트

Scope: `C:\workspace\claude-os` 내부만(`mcp_server/server.py`, `app/core/ingestion.py`). command-center 파일은 `gates/l4-claude-os-patch.md`와 `state/wiki-kb-sync.json` 삭제만.

- [ ] L4-1: 청킹 패치 — `chunk_document`가 metadata를 임베딩/청크 예산에서 제외. 재현 테스트: `concepts/rubric-ceiling-generic-troubleshooting.md` 로컬 chunk 수가 139 → 5 이하
  EVIDENCE: pending

- [ ] L4-2: 리스너 사망 패치 — 동기 ingest를 threadpool로 이동(`run_in_threadpool`) 또는 SelectorEventLoop 정책. 재현 테스트: ingest 4개 동시 진행 중 `GET /api/kb` 20회 연속 + abort 5회 → 서버 생존, /health 200
  EVIDENCE: pending

- [ ] L4-3: 재기동 후 회귀 — pytest `tests`에서 패치 전 통과 수 이상(이전 587 passed 기준, Windows 특성 실패 7건 제외) · /health healthy · 5173 200
  CHECK: curl -s http://127.0.0.1:8051/health
  EXPECT: /"status":"healthy"/
  EVIDENCE: pending

- [ ] L4-4: knowledge_docs 전량 재임포트 — state 삭제 → `node sync-wiki-kb.mjs` errors=0, 문서 수 = 디스크 md 수, 총 청크 수가 패치 전 5,247보다 유의미하게 감소(초소형 청크 제거) — 실측 수치 기재
  EVIDENCE: pending

- [ ] L4-5: 검색 정합(L3-4 재검증) — "Ralph Wiggum Loop" top1 = concepts__ralph-wiggum-loop.md, "apps in toss launch contract" top3에 apps-in-toss-front-loaded-launch-contract 포함. `node state/verify-wiki-kb.mjs search` 출력 첨부. 통과 시 gates/l3-wiki-kb.md의 L3-4도 [x]로 갱신
  EVIDENCE: pending

- [ ] L4-6: project_index도 재임포트(`node sync-claude-os.mjs`, L2 산출물이 있으면) 후 "nailmap 블로커" top1 = project-nailmap.md
  EVIDENCE: pending
