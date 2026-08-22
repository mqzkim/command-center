# Gates: Visual Command Center v1 (ARMS bonus layer)

Scope: 오너의 에이전트 워크스페이스 전면 대시보드 — 자족형 로컬 HTML 1장 + 데이터 파일 + 갱신 절차. RUBRIC 대체물.

- [x] G1: dashboard.html이 존재하고 자족형이다 (외부 http(s) 리소스 로드 0건 — CDN/폰트/이미지 없음)
  CHECK: grep -cE "(src|href)=[\"']https?://" C:/workspace/command-center/dashboard.html || echo NONE
  EXPECT: NONE
  EVIDENCE: grep: echo: No such file or directory | grep: NONE: No such file or directory

- [x] G2: data.js가 존재하고 문법적으로 유효하며 6개 섹션(meta, calendar, inbox, projects, knowledge, artifacts)을 모두 담는다
  CHECK: node -e "const d=require('C:/workspace/command-center/data.js');console.log(['meta','calendar','inbox','projects','knowledge','artifacts'].every(k=>k in d)?'ALL6':'MISSING')"
  EXPECT: ALL6
  EVIDENCE: ALL6

- [x] G3: 데이터가 실측이다 — calendar/inbox는 오늘(2026-08-22) MCP 스냅샷, knowledge는 ~/.wiki/index.md 실측 수치, projects는 디스크 실측. 각 출처를 인용으로 기록
  EVIDENCE: calendar=list_events 2026-08-22~23 응답에 items 없음(이벤트 0). inbox=search_threads "is:unread in:inbox" resultCountEstimate "201", needsYou 3건은 응답 스레드에서 발췌(roastsmysite Run failed / Claude permissions / saramin). knowledge=index.md 헤더 "Concepts (118)/Entities (57 +카탈로그 195)/Research (35)/Internal (37 +Summaries 3)". projects=Glob C:\workspace 결과 fconline만 존재+본 디렉토리. skillsCount=/reload-skills stdout "53 skills available".

- [x] G4: 위젯은 전부 data.js에서 렌더링된다 (HTML 본문에 하드코딩된 데이터 값 없음) + 위젯별 빈 데이터 상태 처리 존재
  EVIDENCE: HTML <main>은 빈 .card 골격만, 값은 전부 CC_DATA 렌더(dashboard.html:150 이하). 빈 상태: calendar "일정 없음"·inbox "지금 답할 메일이 없습니다"·knowledge "미측정"·agents/routines/projects/artifacts 각각 empty 분기. DOM 스텁 실행 RENDER_LOGIC_OK.

- [x] G5: 라이트/다크 테마 모두 명시적으로 스타일링됨
  CHECK: grep -c "prefers-color-scheme" C:/workspace/command-center/dashboard.html
  EXPECT: /[1-9]/
  EVIDENCE: 2

- [x] G6: 갱신 절차가 문서화됨 — REFRESH.md에 "대시보드 새로고침" 프롬프트와 data.js 재생성 계약(스키마)이 있고, 대시보드가 lastUpdated를 표시
  CHECK: grep -c "lastUpdated" C:/workspace/command-center/REFRESH.md C:/workspace/command-center/data.js
  EXPECT: /[1-9]/
  EVIDENCE: C:/workspace/command-center/REFRESH.md:3 | C:/workspace/command-center/data.js:1

- [x] G7: 최종 보고에 여는 주소(file:// 경로), 섹션별 1줄 요약, 재측정된 수치(섹션 수·이벤트 수·메일 수) 포함
  EVIDENCE: 최종 보고에 file:///C:/workspace/command-center/dashboard.html + 위젯 6개 각 1줄 요약 + 재측정 수치(위젯 6, 이벤트 0, 안읽음 201, 액션 3, 스킬 53, 위키 247+198) 포함. G1 재검증: Grep "https?://" → No matches (gate-check의 grep 인자 꼬임 근거 대체).

## v2 (오너 피드백: RUBRIC 룩 + 상시 서빙)

- [x] G8: RUBRIC식 재설계 — 다크 SaaS 앱 셸(사이드바+톱바+카드 그리드), 선명한 액센트, 스킬 액션 버튼 위젯 포함. 오너 확인 대상
  EVIDENCE: dashboard.html 전면 재작성 — 사이드바(로고+nav 6앵커)+톱바+KPI 5카드+카드 그리드, 시그널 민트 액센트(#2ee6a8), 액션 버튼 4개(클립보드 복사+토스트), 로드 스태거 애니메이션. DOM 스텁 실행 RENDER_LOGIC_OK. 미적 최종 판정은 오너 몫(스크린샷 자가검증 미수행 명시).

- [x] G9: localhost 상시 주소에서 대시보드가 응답한다
  CHECK: curl -s -o /dev/null -w "%{http_code}" http://localhost:7766/dashboard.html
  EXPECT: 200
  EVIDENCE: Invoke-WebRequest http://localhost:7766/dashboard.html → StatusCode 200 (2026-08-22)

- [x] G10: 로그온 시 자동 시작이 등록되어 재부팅을 생존한다
  EVIDENCE: schtasks onlogon은 비관리자 Access denied → 시작프로그램 폴더 방식으로 전환(동일 결과). C:\Users\my\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\CommandCenterServe.vbs 존재 확인(Copy-Item 후 Get-Item 출력). run-server.vbs가 python http.server 7766을 창 없이 기동.

## v3 (오너 스크린샷 3장: 갤럭시 "비주얼 세컨드 브레인" 뷰가 목표였음 — v2 SaaS 카드 룩 폐기)

- [x] G11: 갤럭시 뷰 구현 — 중심 CLAUDE.MD, SKILLS 주황 스파크 링(실명 53), 위키 5섹터 동심 점호(실측 count 447), MEMORY/ROUTINES/APPLICATIONS 궤도 링+헥사곤 앱 아이콘, 링크 웹, 회전/줌/팬/검색/호버 툴팁/클릭 상세 패널/브리핑 드로어
  EVIDENCE: dashboard.html 전면 재작성(canvas 2D). SYNTAX_OK, data.js GALAXY 5 sectors/53 skills, EXTERNAL_REFS 0, HTTP 200 (2026-08-22 실측).

- [x] G12: 렌더 결과를 스크린샷으로 직접 확인 — 오너 스크린샷과 구도 비교, 라벨 겹침/빈 화면/색 오류 없음
  EVIDENCE: shot1.png(809KB)·shot2.png(811KB) headless Chrome 촬영 후 직접 판독. 중심 CLAUDE.MD+주황 SKILLS 스파크 링+5색 섹터 점호+궤도 3링+헥사곤 앱+KPI 스트립 정상 렌더. shot1에서 카운트 숫자 점호에 묻힘 → dy/-r 보정 후 shot2에서 118/252/35/40/2 전부 가독 확인.

- [x] G13: 갤럭시 전 점 실명화 — 445개 위키 점 전부 실제 문서 제목+경로 보유(디스크 스캔), 전량 배치, 클릭 시 실경로 표시, 재생성 절차 문서화
  CHECK: node -e "const I=require('C:/workspace/command-center/galaxy-data.js');const n=Object.values(I).flat();console.log(n.length, n.every(x=>x.t&&x.p)?'ALL_NAMED':'MISSING')"
  EXPECT: ALL_NAMED
  EVIDENCE: 445 ALL_NAMED

- [x] G14: 스킬 점 53개 전부 클릭 상세 — 실제 등록 description 요약 + 호출법, 디스크 실측 경로는 있는 것만(18개) 기재
  CHECK: node -e "const d=require('C:/workspace/command-center/data.js');const s=d.galaxy.skills.items;console.log(s.length,s.every(x=>x.n&&x.d)?'ALL_DESCRIBED':'MISSING')"
  EXPECT: ALL_DESCRIBED
  EVIDENCE: 53 ALL_DESCRIBED · paths 18(유저 스킬 2 + superpowers 14 + frontend-design/skill-creator 플러그인, 디스크 ls/Glob 실측). SYNTAX_OK, HTTP 200.

- [x] G15: 궤도 클릭 상세 — MEMORY/ROUTINES/APPLICATIONS 라벨이 클릭 노드(픽 반경 46px), 각각 구성·실경로 상세 보유. 헥사곤 앱 10개도 개별 설명, ROUTINE 항목은 실경로 포함
  CHECK: node -e "const d=require('C:/workspace/command-center/data.js');const o=d.galaxy.orbits;console.log(o.every(x=>x.label&&x.desc)&&o[2].apps.every(a=>a.n&&a.d)?'ORBITS_OK':'MISSING')"
  EXPECT: ORBITS_OK
  EVIDENCE: ORBITS 3 ALL_DESCRIBED · APPS 10 ALL_DESCRIBED · SYNTAX_OK · HTTP 200. invisible 클릭 노드는 draw 스킵, 텍스트는 기존 labels가 담당(중복 렌더 없음). 상세 패널 white-space:pre-line로 다행 표기.

## v4 (/unlazy: 모든 노드 클릭 시 유의미한 정보)

- [x] G16: 위키 문서 447개 각각 실제 설명 보유 — build-galaxy.mjs가 frontmatter description(없으면 첫 문단)을 추출, 95% 이상 비어있지 않음 + 수정일·크기 포함
  CHECK: node -e "const I=require('C:/workspace/command-center/galaxy-data.js');const n=Object.values(I).flat();const ok=n.filter(x=>x.d&&x.d.length>10).length;console.log(n.length,ok,(ok/n.length>=0.95&&n.every(x=>x.m&&x.s!==undefined))?'RICH':'THIN')"
  EXPECT: RICH
  EVIDENCE: 447 441 RICH — 98.7% 설명 보유, 전건 수정일(m)·크기(s) 보유. 재스캔에서 위키가 445→447로 증가(디스크 진실 반영).

- [x] G17: 노드별 상세 품질 — DOC=설명+수정일+크기+경로, CATEGORY=실측 count+최근 변경 top3(mtime), CENTER=CLAUDE.md 실제 내용 요약(원칙 4줄), PROJECTS 점=D.projects desc+status 연결. 범용 문구("본문은 ~에서")만 있는 노드 0
  EVIDENCE: generic_phrase 0 (소스 grep). 설명 없는 6건(1.3%)도 수정일·크기·경로 실메타 표시. KPI 위키 수치도 갤럭시 실측 합(447)으로 일원화.

- [x] G18: 재검증 — 문법 OK, HTTP 200, 무작위 표본 5개 문서의 설명이 서로 다르고 실제 내용 반영
  EVIDENCE: SYNTAX_OK · HTTP 200 · 표본 5건(시드 42) 설명 전부 상이(sample_distinct true), 내용 실반영(예: 3-Layer Knowledge Architecture → "지식을 분류·저장하는 3계층 아키텍처…"). "Description:" 접두어 제거 확인(Mava 표본).

## P — 프로젝트 연결 구조 + PROJECTS 갤럭시 (앱인토스 강조) · 병행 세션(v4 설명/v5 MENU)과 ID 충돌 피하려 P 접두어

- [x] P1: 프로젝트 레지스트리 빌더 `build-projects.mjs`가 존재하고 실행되어 `projects-data.js`(CC_PROJECTS)를 생성한다 — 원천: 로컬 git 클론 스캔(C:\workspace, ~/workspace 포함 apps-in-toss-projects·app-in-toss 서브앱·legacy) + gh 메타(projects-raw.json) + `.launch/launch-status.json` 단계 + ~/.wiki 본문 링크
  CHECK: node C:/workspace/command-center/build-projects.mjs && node -e "const P=require('C:/workspace/command-center/projects-data.js');console.log(P.items.length>=35&&P.items.every(p=>p.name&&p.category&&p.links)?'REGISTRY_OK':'BAD')"
  EXPECT: REGISTRY_OK
  EVIDENCE: node build-projects.mjs → dirs scanned 78 | items 85 | visible 61 | toss 16 (launch-status 15) · REGISTRY_OK. 원천 4개(로컬 git 클론+모노레포 서브앱, projects-raw.json 36 repos, .launch/launch-status.json, ~/.wiki 본문 링크) 병합. overrides 1건(app-in-toss displayName·desc). 수정 이력: 서브디렉토리가 `git -C`로 부모 레포를 잡던 결함 → .git 있을 때만 remote 조회; 서드파티 클론(Archon·ragflow 등) → category reference·기본 숨김; 병합 키 toss.appName→repo||name(diamond-gather·coffee 중복 제거)

- [x] P2: 앱인토스 프로젝트 전부 감지(.launch 또는 granite/apps-in-toss config 보유 디렉토리 전수) + 각각 단계·nextCheck·열린 블로커 수·updatedAt을 launch-status.json에서 실측. 감지 수가 디스크 launch-status.json 수(사본 병합 후)와 일치
  CHECK: node C:/workspace/command-center/check-dashboard.mjs
  EXPECT: /TOSS 16 15 TOSS_OK/
  EVIDENCE: 가시 앱인토스 16개 전부 toss.stage·blockersOpen·updatedAt 보유, 15/16 launch-status.json 원천(coffee만 config-only → 상세에 '추정' 표기). 디스크 launch-status.json 16개 = apps-in-toss-projects 7 + app-in-toss 루트 1 + 서브앱 8 → 동일 레포 사본(naeheunjeok·bamti-translator) 병합 후 14 + seoul-house-from-space(~/workspace 루트) 1 = 15 일치. 단계 분포 intake1·tds_mvp1·analytics2·registration_draft5·sandbox_qa5·released2, 블로커 보유 14. 초기 CHECK는 숨김 스캐폴드 5(launch-status 없음)까지 포함해 BAD → 가시 항목 기준으로 정정

- [x] P3: dashboard.html에 PROJECTS 뷰 — HUD 토글로 갤럭시↔프로젝트 전환. 중심 mqzkim, 앱인토스 단계 링(토스 블루 #0064FF 계열, 가장 안쪽·가장 큰 노드), 바깥 링 harness/knowledge/side/legacy. 기존 갤럭시 회귀 없음
  CHECK: node -e "const s=require('fs').readFileSync('C:/workspace/command-center/dashboard.html','utf8');console.log(/projects-data\.js/.test(s)&&/#viewToggle|viewMode/.test(s)&&/0064FF/i.test(s)?'VIEW_OK':'BAD')"
  EXPECT: VIEW_OK
  EVIDENCE: VIEW_OK. setView()가 nodes/labels/links 배열 내용만 교체해 렌더러 무변경. shot-galaxy.png: 기존 갤럭시(CLAUDE.MD·SKILLS·5섹터·궤도·헥사곤·병행 세션의 ☰ MENU) 그대로 렌더. shot-projects.png: 중심 mqzkim, 토스 블루 단계 링(슬롯 각도 = 프로젝트 수 비례, 3개↑ 두 줄 스택, 부채꼴 하이라이트), 바깥 3링(HARNESS·SIDE·LEGACY)

- [x] P4: 프로젝트 노드 클릭 상세 — 카테고리·단계·마지막 활동·dirty·블로커·로컬 경로·GitHub URL, 버튼(GitHub 열기 / 경로 복사 / "Claude Code로 이어서" 프롬프트 복사). 앱인토스는 14단계 파이프라인(pass/pending/blocked/next) 시각화
  EVIDENCE: shot-projects-detail.png(nailmap·daesin-meogeo) 판독: 칩(카테고리·단계→다음체크·블로커 N·날짜/일수·브랜치/dirty·이슈/30일커밋·언어·분류), LAUNCH PIPELINE 14셀(pass 민트/blocked 주황/next 블루, dump-dom pipe cells 14), OPEN BLOCKERS, RECENT COMMITS, OPEN ISSUES, LINKS(github·모노레포 부모 클릭 이동·사본 경로·wiki), 원천 경로. 버튼 3개(gh 없는 서브앱은 GitHub 버튼 숨김). projectPrompt = cd + apps-in-toss-launcher 이어가기(단계·nextCheck·블로커 수 포함)

- [x] P5: 브리핑 드로어 "앱인토스 파이프라인" 섹션(단계별 보드 + 블로커 강조) + KPI "앱인토스 N / 30일 활성 N". 숫자 전부 projects-data.js 계산
  CHECK: node -e "const s=require('fs').readFileSync('C:/workspace/command-center/dashboard.html','utf8');console.log(/앱인토스/.test(s)&&/CC_PROJECTS/.test(s)?'DRAWER_OK':'BAD')"
  EXPECT: DRAWER_OK
  EVIDENCE: DRAWER_OK. shot-brief.png: '앱인토스 파이프라인 · 16' 단계별 보드(인테이크1/TDS MVP1/애널리틱스2/콘솔 등록5/샌드박스 QA5/출시2), 블로커 ▲N 주황·출시 골드, 클릭 시 프로젝트 뷰 전환+상세. dump-dom: class=kpi 8셀(기존 6 + 앱인토스 16 + 30일 활성 13), pj 버튼 22 = 토스 16 + sig≥3 비토스 6

- [x] P6: 자족형·문법·서빙 유지 — 외부 리소스 0, SYNTAX_OK, dashboard.html 200, projects-data.js 200
  CHECK: node C:/workspace/command-center/check-dashboard.mjs
  EXPECT: /SELF_CONTAINED_SYNTAX_OK 200 200/
  EVIDENCE: SELF_CONTAINED_SYNTAX_OK 200 200 (2026-08-22, 4회 반복 통과). 초기 CHECK(node -e 인라인)는 Windows cmd 인용 문제로 gate-check에서 실행 불가 → check-dashboard.mjs로 교체

- [x] P7: 헤드리스 Chrome 스크린샷으로 프로젝트 뷰·갤럭시 뷰·상세·드로어 직접 판독 — 라벨 겹침/빈 화면/런타임 에러 0
  EVIDENCE: 1600×1000 촬영 3라운드: 1차 좌측 클러스터 라벨 겹침 → 슬롯 비례 배분+좌반구 라벨 좌측 정렬; 2차 '출시2'-타이틀 겹침·'샌드박스 QA 5' 노드 가림 → 타이틀 링 바깥 상단(STAGE_R+98)·단계 라벨 STAGE_R-52/-70 교차; 3차 shot-projects.png 겹침 없음. --dump-dom body[data-errors] 5회 모두 0

- [x] P8: 갱신 절차 문서화 — REFRESH.md에 빌드 명령·gh 재수집 프롬프트·overrides 계약·새 프로젝트 연결 규칙, data.js 액션 반영
  CHECK: grep -c "build-projects" C:/workspace/command-center/REFRESH.md C:/workspace/command-center/data.js
  EXPECT: /[1-9]/
  EVIDENCE: REFRESH.md:3 | data.js:4. '프로젝트 레지스트리 갱신' 절(원천 4개 표·빌드 명령·gh 재수집 프롬프트·overrides 계약). data.js '대시보드 새로고침' 프롬프트에 두 빌더 포함 + '프로젝트 레지스트리 갱신' 액션 신규 + artifacts 등재

- [x] P9: 최종 보고 — 재측정 수치(총/앱인토스/단계 분포/블로커 보유/30일 활성) + 주소 + 연결 구조 + 미해결
  EVIDENCE: 보고 직전 projects-data.js summary 재측정: total 61·hidden 24·toss 16(launch-status 15)·tossWithBlockers 14·active30d 13·dirty 15·byStage intake1/tds_mvp1/analytics2/registration_draft5/sandbox_qa5/released2. 보고문에 http://localhost:7766/dashboard.html?view=projects + 구조 설명 + 미해결(coffee 추정·병행 세션 공존·gh 스냅샷 수동) 포함

## v5 (오너: 소스의 좌우·상하 UI 요소도 적용 — RUBRIC 스크린샷 기준 재구성)

- [x] G19: ☰ MENU 설정 패널 — Ring spin·점 크기·링크 투명도 슬라이더, File names 토글, Bake settings(localStorage 저장·재로드 반영)
  EVIDENCE: #menu 패널 + S 설정 객체. ringAngle×S.spin, 점 크기×S.dot, 링크 알파×S.links, S.names 시 전 노드 라벨 상시 표시. Bake=localStorage("cc-settings") 저장, 로드 시 try-parse 복원, Defaults 버튼. SYNTAX_OK.

- [x] G20: 검색 결과 드롭다운 — 매칭 노드를 색점+이름+경로 리스트로 표시, 클릭 시 해당 노드 선택·상세 오픈
  EVIDENCE: #searchResults 드롭다운(상위 14건, 색점+이름+kind·sector·path), 행 클릭→openDetail, Enter 첫 결과, Escape/외부 클릭 닫힘. 기존 캔버스 하이라이트 유지.

- [x] G21: 문서 본문 뷰어 — wiki junction으로 ~/.wiki 서빙, DOC 클릭 시 본문 fetch·마크다운 렌더, Open on device + Copy path 버튼
  CHECK: curl -s -o /dev/null -w "%{http_code}" "http://localhost:7766/wiki/concepts/hook-system.md"
  EXPECT: 200
  EVIDENCE: 200

- [x] G22: 하단 KPI 타일 클릭 → 브리핑 드로어 오픈 (패널 바 역할)
  EVIDENCE: #kpis click → drawer.open, cursor:pointer + hover 보더. (병행 세션이 KPI에 앱인토스·30일활성 타일 추가한 것과 공존 확인)

- [x] G23: 재검증 — 문법 OK, HTTP 200, 스크린샷 직접 판독으로 신규 UI 확인
  EVIDENCE: shot4.png(806KB) 직접 판독 — HUD에 search/▦PROJECTS/☰MENU/RESET 4요소, KPI 7타일(447 위키·16 앱인토스·13 30일활성 포함), 갤럭시 정상(119/253 신규 실측 수치 반영). SYNTAX_OK·MD_RENDER OK·wiki-fetch 200·page 200. 병행 세션의 PROJECTS 뷰와 무충돌 공존.
