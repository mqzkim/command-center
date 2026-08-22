# Gates: L1 — 대시보드 ⇄ Claude OS 라이브 연결

Scope: dashboard.html·data.js·claude-os .env(CORS)만 수정. PLAN.md 허브 계약 준수.

- [ ] L1-1: CORS — claude-os `.env` ALLOWED_ORIGINS에 7766 추가 + 재기동 후, Origin 7766 프리플라이트/요청에 access-control-allow-origin 헤더가 온다
  CHECK: curl -s -D - -o NUL -H "Origin: http://localhost:7766" http://localhost:8051/health
  EXPECT: /access-control-allow-origin: http:\/\/localhost:7766/
  EVIDENCE: pending

- [ ] L1-2: 갤럭시 APPLICATIONS 링에 "Claude OS" 헥사곤 — data.js apps 항목 추가, 클릭 상세에 라이브 health(status·sqlite tables·ollama models)·KB 수·프로젝트 수, "5173 열기"·"8051 health" 버튼. claude-os 꺼져 있으면 "오프라인" 상태를 명시 렌더(에러 0)
  CHECK: node -e "const s=require('fs').readFileSync('C:/workspace/command-center/dashboard.html','utf8');const d=require('C:/workspace/command-center/data.js');console.log(/8051/.test(s)&&d.galaxy.orbits[2].apps.some(a=>/Claude OS/i.test(a.n))?'APP_OK':'BAD')"
  EXPECT: APP_OK
  EVIDENCE: pending

- [ ] L1-3: 드로어 "CLAUDE OS" 패널 — health 상태, KB 4개(command-center-*)별 문서 수(/api/kb/{kb}/stats 또는 documents), project_memories 최근 5건 제목, 검색 입력창(Enter → POST /api/kb/search-all top_k 8) 결과 리스트(kb명·score·본문 120자). 전부 런타임 fetch, 하드코딩 0
  EVIDENCE: pending

- [ ] L1-4: 프로젝트 상세 패널에 "Claude OS 검색" 버튼 — 프로젝트명으로 search-all(kb_filter 없음) 호출, 결과 5건 인라인 표시(project_index 문서가 있으면 포함됨)
  EVIDENCE: pending

- [ ] L1-5: 자족성·문법·에러 0 유지 + 헤드리스 스크린샷 판독(드로어 CLAUDE OS 패널, 검색 결과 렌더). claude-os 켜진 상태/끈 상태 모두 data-errors 0
  CHECK: node C:/workspace/command-center/check-dashboard.mjs
  EXPECT: /SELF_CONTAINED_SYNTAX_OK 200 200/
  EVIDENCE: pending
