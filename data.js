// Command Center 데이터 — 에이전트가 갱신하는 유일한 파일.
// 스키마 계약은 REFRESH.md 참조. dashboard.html은 이 파일만 읽어 렌더링한다.
// truth는 여기 아님 — 각 항목의 source가 원천. (ARMS 원칙 2: show, do not store)
const CC_DATA = {
  meta: {
    owner: "김진규",
    lastUpdated: "2026-08-22 21:40 KST",
    updatedBy: "Claude Fable 5 (세션 내 실측)",
  },

  calendar: {
    // source: Google Calendar MCP list_events, 2026-08-22~23 (Asia/Seoul)
    snapshotRange: "2026-08-22 ~ 2026-08-23",
    events: [],
    note: "오늘·내일 등록된 이벤트 없음 (기본 캘린더 '김진규' 실측)",
  },

  inbox: {
    // source: Gmail MCP search_threads "is:unread in:inbox", 2026-08-22 21:35 KST
    unreadEstimate: 201,
    snapshotAt: "2026-08-22 21:35 KST",
    needsYou: [
      {
        subject: "[mqzkim/roastsmysite] Run failed: Prompt Smoke - main",
        from: "GitHub Actions",
        date: "08-22 15:04",
        why: "CI 실패 — main 브랜치 Prompt Smoke 전 job 실패, 확인 필요",
      },
      {
        subject: "[GitHub] Claude is requesting updated permissions",
        from: "GitHub",
        date: "08-22 13:01",
        why: "GitHub App 권한 승인 대기 — 승인 전까지 연동 제한 가능",
      },
      {
        subject: "사람인 — 비밀번호 변경 권고 (13년 경과)",
        from: "Saramin",
        date: "08-21 18:10",
        why: "2012년 설정 비밀번호 — 보안 조치 권장",
      },
    ],
    rest: "나머지는 뉴스레터·프로모션 위주 (Claude Code 주간 소식, Railway, Product Hunt, 토스뱅크 약관 개정 2건 등)",
  },

  projects: [
    // source: C:\workspace 디스크 실측 (Glob)
    {
      name: "fconline",
      path: "C:\\workspace\\fconline",
      desc: "FC Online 카드 갱신 추적 — Python + Google Sheets API, GUI 클릭 자동화",
      status: "idle",
    },
    {
      name: "command-center",
      path: "C:\\workspace\\command-center",
      desc: "이 대시보드 — ARMS 보너스 레이어 v1",
      status: "active",
    },
  ],

  knowledge: {
    // source: ~/.wiki/index.md 실측 (2026-08-22 Read)
    indexPath: "C:\\Users\\my\\.wiki\\index.md",
    categories: [
      { name: "Concepts", count: 118 },
      { name: "Entities", count: 57, extra: "+카탈로그 195" },
      { name: "Research", count: 35 },
      { name: "Internal", count: 37, extra: "+Summaries 3" },
    ],
    recentNote: "2026-07-12 Documents/llm-wiki fork 흡수 병합 후 index 재구축 (변경 이력 기준)",
  },

  automations: {
    // source: 이 세션 harness 스킬 목록(/reload-skills: 53개) + agents 디렉토리
    skillsCount: 53,
    highlights: [
      "apps-in-toss 런처 계열 (intake → PRD → build → QA → console → release)",
      "superpowers 프로세스 스킬 (brainstorming, TDD, systematic-debugging …)",
      "wiki / unlazy / orca-cli / orchestration",
    ],
    agents: [
      { name: "wiki-librarian", desc: "~/.wiki + memory 지식 베이스 사서 (ingest·dedup·lint)" },
    ],
    routines: [],
    routinesNote: "영속 크론 미등록 (세션 스코프 밖 스케줄러는 이 스냅샷에서 미확인)",
  },

  ci: [
    // source: Gmail 실측 (GitHub Actions 알림, 2026-08-22)
    {
      repo: "mqzkim/roastsmysite",
      workflow: "Prompt Smoke",
      branch: "main",
      status: "failed",
      date: "08-22 15:04",
    },
  ],

  actions: [
    // 스킬 버튼 — 클릭하면 프롬프트가 클립보드에 복사됨 (Claude Code에 붙여넣기)
    {
      label: "대시보드 새로고침",
      icon: "↻",
      prompt: "대시보드 새로고침: C:\\workspace\\command-center\\REFRESH.md의 스키마 계약대로 data.js를 실측 재생성하고, node build-galaxy.mjs 와 node build-projects.mjs 도 실행해줘.",
    },
    {
      label: "프로젝트 레지스트리 갱신",
      icon: "▦",
      prompt: "C:\\workspace\\command-center\\REFRESH.md의 '프로젝트 레지스트리 갱신' 절차대로 projects-raw.json(gh)을 재수집하고 node build-projects.mjs 를 실행해줘.",
    },
    {
      label: "받은편지함 브리핑",
      icon: "✉",
      prompt: "안읽은 메일 중 액션이 필요한 것만 추려서 브리핑해줘. 뉴스레터는 한 줄로 묶어줘.",
    },
    {
      label: "CI 실패 조사",
      icon: "⚠",
      prompt: "mqzkim/roastsmysite의 Prompt Smoke workflow 실패(main, 8568ef2) 원인을 조사하고 수정안을 제시해줘.",
    },
    {
      label: "위키 린트",
      icon: "✓",
      prompt: "/wiki 스킬로 ~/.wiki의 stale·orphan·중복·모순을 점검하고 결과를 보고해줘.",
    },
  ],

  galaxy: {
    // 비주얼 세컨드 브레인 — 중심/링/섹터 데이터. count는 실측, named는 대표 항목(실명).
    center: {
      label: "CLAUDE.MD", path: "C:\\Users\\my\\.claude\\CLAUDE.md",
      desc: "모든 세션이 로드하는 마스터 라우터 (실제 내용 요약):\n· 지식: @~/.wiki/index-thin.md 상시 로드 → index.md 드릴인\n· 절대 원칙: 존댓말 / Bash는 read-only만 / 에이전트는 백그라운드\n· 핵심 원칙: 세션 시작 시 index 읽기 · 신호 감지 즉시 background agent spawn(ingest/기록/lint/인수인계) · 사서 작업은 wiki-librarian agent\n· 인용 규칙: 같은 세션 Read 직후만 인용, 불확실하면 \"추정:\"",
    },
    skills: {
      // source: 이 세션 harness 스킬 목록 53개 — 설명은 각 스킬의 등록 description 요약(실측).
      // p(경로)는 디스크 실측된 것만 기재: 유저 스킬 ~/.claude/skills, 플러그인 캐시.
      ringLabel: "SKILLS",
      items: [
        { n: "apps-in-toss-launcher", d: "Apps in Toss 런치 총괄 오케스트레이터 — intake→PRD→build→QA→console→release 라우팅" },
        { n: "apps-in-toss-intake", d: "아이디어를 브리프·앱 정체성·게임/비게임 자동 분류로 정규화" },
        { n: "apps-in-toss-mvp-prd", d: "브리프를 MVP PRD로 — 핵심 루프 1개 고정, 나머지는 백로그 이슈로" },
        { n: "apps-in-toss-repo-bootstrap", d: "mqzkim 프라이빗 repo 생성·검증·페이즈별 커밋 체크포인트" },
        { n: "apps-in-toss-build-analytics", d: "TDS 맞춤 MVP 구현 + 행동 Analytics 계측(press/impression/conversion)" },
        { n: "apps-in-toss-qa", d: "런치 QA·수리 루프 — 결정론 테스트, TDS 시각 QA, 릴리즈 블로커 점검" },
        { n: "apps-in-toss-policy-rewards", d: "개인정보·광고·토스포인트·리워드 정책 경계 처리" },
        { n: "apps-in-toss-console-release", d: "콘솔 등록·API키·.ait 배포·테스트 스킴·릴리즈 경계" },
        { n: "apps-in-toss-store-assets", d: "로고·썸네일·스크린샷 등 콘솔 에셋 패키지 생성·검증" },
        { n: "apps-in-toss-api-key-refresh", d: "배포 403/4031 시 앱 스코프 API키 발급·등록" },
        { n: "apps-in-toss-api-key-refresh-verify", d: "API키 갱신을 무유출 증거로 검증" },
        { n: "apps-in-toss-app-registration-verify", d: "콘솔 앱 등록을 기계 검증 가능한 증거로 확인" },
        { n: "apps-in-toss-console-evidence-verify", d: "상태 변경 전 콘솔 증거 패키지 신선도·정합성 검증" },
        { n: "superpowers:brainstorming", d: "창작 작업 전 의도·요구사항·설계 탐색 (필수 선행)", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:systematic-debugging", d: "버그·테스트 실패 시 수정 제안 전 체계적 진단", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:test-driven-development", d: "구현 전 테스트 먼저 — TDD 하드 게이트", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:writing-plans", d: "멀티스텝 작업의 구현 계획 작성", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:executing-plans", d: "작성된 계획을 리뷰 체크포인트와 함께 실행", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:subagent-driven-development", d: "독립 태스크를 서브에이전트로 실행", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:dispatching-parallel-agents", d: "독립 태스크 2개 이상 병렬 디스패치", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:requesting-code-review", d: "완료·머지 전 코드 리뷰 요청", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:receiving-code-review", d: "리뷰 피드백을 검증 후 수용 — 맹목 구현 금지", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:verification-before-completion", d: "완료 주장 전 검증 명령 실행 — 증거 우선", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:finishing-a-development-branch", d: "구현 완료 후 브랜치 통합 방식 결정", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:using-git-worktrees", d: "격리 작업공간 확보 (worktree)", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:using-superpowers", d: "스킬 탐색·사용 규율 — 대화 시작 시 로드", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "superpowers:writing-skills", d: "스킬 작성·수정·배포 전 검증", p: "~/.claude/plugins/cache/claude-plugins-official/superpowers" },
        { n: "frontend-design", d: "AI 슬롭을 피하는 고품질 프론트엔드 제작", p: "~/.claude/plugins/cache/claude-plugins-official/frontend-design" },
        { n: "skill-creator", d: "스킬 생성·개선·평가·트리거 최적화", p: "~/.claude/plugins/cache/claude-plugins-official/skill-creator" },
        { n: "dataviz", d: "차트·대시보드 제작 전 필독 — 팔레트 검증기 포함" },
        { n: "artifact-design", d: "Artifact 페이지 디자인 기준" },
        { n: "artifact-diagramming", d: "Artifact 다이어그램 — 양 테마 가독 SVG" },
        { n: "artifact-capabilities", d: "Artifact 런타임 능력(라이브 데이터·공유 상태) 로스터" },
        { n: "wiki", d: "지식 베이스(~/.wiki) 운영 — ingest·lint·dedup", p: "~/.claude/skills/wiki" },
        { n: "unlazy", d: "게이트 파일 기반 완주 규율 — Depth Tree·증거 원장", p: "~/.claude/skills/unlazy" },
        { n: "orca-cli", d: "Orca 워크트리·터미널·브라우저·아티팩트 조작" },
        { n: "orchestration", d: "Orca 멀티 에이전트 조율 — DAG·결정 게이트·코디네이터 루프" },
        { n: "computer-use", d: "데스크톱 앱을 접근성 트리로 읽고 조작" },
        { n: "docs-search", d: "Toss/TDS 문서 검색 (ax CLI)" },
        { n: "find-skills", d: "설치 가능한 스킬 발견·설치 도우미" },
        { n: "project-validator", d: "apps-in-toss 프로젝트 구성·구조 검증" },
        { n: "toss-tds-design", d: "TDS 모바일 디자인 가이드 — 색·타이포·컴포넌트" },
        { n: "update-config", d: "settings.json·훅·권한 구성" },
        { n: "keybindings-help", d: "키바인딩 커스터마이즈" },
        { n: "simplify", d: "변경 코드의 재사용·단순화·효율 정리" },
        { n: "fewer-permission-prompts", d: "read-only 호출 allowlist로 권한 프롬프트 감소" },
        { n: "loop", d: "프롬프트/커맨드 반복 실행 (자가 페이싱)" },
        { n: "schedule", d: "클라우드 예약 에이전트(cron 루틴) 관리" },
        { n: "claude-api", d: "Claude API 레퍼런스 — 모델·가격·스트리밍·툴" },
        { n: "run", d: "프로젝트 앱 실행·스크린샷으로 변경 확인" },
        { n: "init", d: "CLAUDE.md 초기화" },
        { n: "review", d: "GitHub PR 리뷰" },
        { n: "security-review", d: "현재 브랜치 변경분 보안 리뷰" },
      ],
    },
    sectors: [
      // source: ~/.wiki/index.md 실측 (count) + 대표 문서 실명 (named)
      { name: "CONCEPTS", color: "#e05fe0", count: 118, root: "~/.wiki/concepts/",
        named: ["RAG 5세대 지형","Harness Engineering","5-Layer Validation","Ralph Wiggum Loop","Hook System",
                "Evidence & Truth","Agent Lifecycle","Dark Factory Pattern","Git-Lock Coordination","GraphRAG",
                "Smallest-Ratchet","Triple Agent Architecture"] },
      { name: "ENTITIES", color: "#9d7bff", count: 252, root: "~/.wiki/entities/",
        named: ["Claude Code","OpenAI Codex","LightRAG","HKUDS","Superpowers","Genspark","Lovable","Helix-Co",
                "Archon","Cole Medin","FC Online","Sena"] },
      { name: "RESEARCH", color: "#35c9f0", count: 35, root: "~/.wiki/research/",
        named: ["Karpathy LLM Wiki","Deep Research Skill","LM Eval Harness","OpenClaw 도입 Plan","GStack 분석",
                "VoltAgent 분석","TradingAgents+Alpaca","Windows CC 함정"] },
      { name: "INTERNAL", color: "#ffd23e", count: 40, root: "~/.wiki/internal/",
        named: ["Execution Archive","Temporal Truth Contract","LightRAG 계측","Cross-Agent Knowledge",
                "AI Benchmark Harness","Wiki Maintenance Index"] },
      { name: "PROJECTS", color: "#ff9d4d", count: 2, root: "C:\\workspace\\",
        named: ["fconline","command-center"] },
    ],
    orbits: [
      // 바깥 궤도 3개 — 클릭 상세 포함 (ARMS의 M/R/A 레이어)
      {
        label: "MEMORY", color: "#9d7bff",
        path: "C:\\Users\\my\\.wiki",
        desc: "ARMS의 M — 영속 기억 계층.\n· ~/.wiki 445문서 (Concepts 118 · Entities 252 · Research 35 · Internal 40, 디스크 실측)\n· index.md는 사서봇(wiki-librarian) 자동 유지\n· 세션 메모리: ~/.claude/projects/C--workspace/memory\n· 이 갤럭시의 5색 섹터가 곧 이 레이어의 시각화",
      },
      {
        label: "ROUTINES", color: "#c86ae0",
        desc: "ARMS의 R — 나 없이 도는 것들. 현재 실측 등록 1건:",
        items: [
          { n: "CommandCenterServe", d: "로그온 시 대시보드 서버(포트 7766) 무창 기동",
            p: "C:\\Users\\my\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\CommandCenterServe.vbs" },
        ],
      },
      {
        label: "APPLICATIONS", color: "#4da3ff",
        desc: "ARMS의 A — 에이전트가 손닿는 외부 앱·커넥터. 골드 링의 헥사곤이 개별 항목.",
        apps: [
          { n: "Gmail", d: "claude.ai MCP 커넥터 — 받은편지함 스냅샷이 이 연결로 실측됨" },
          { n: "Calendar", d: "claude.ai MCP 커넥터 — 오늘 일정 위젯의 원천" },
          { n: "Drive", d: "claude.ai MCP 커넥터 — 파일 검색·공유" },
          { n: "Slack", d: "claude.ai MCP 커넥터 — 채널·스레드·캔버스" },
          { n: "GitHub", d: "gh CLI 경유 — CI 실패 알림(roastsmysite)이 이 경로의 신호" },
          { n: "Orca", d: "orca-cli·orchestration 스킬로 워크트리·터미널·브라우저 조작" },
          { n: "Toss Console", d: "apps-in-toss 스킬군 13개가 다루는 출시 콘솔" },
          { n: "Supabase", d: "apps-in-toss 백엔드 — wiki에 무료 플랜 트러블슈팅 문서 보유" },
          { n: "YouTube", d: "자동 콘텐츠 파이프라인 — wiki entities/youtube.md" },
          { n: "Obsidian", d: "wiki SSOT 프론트엔드 — wiki entities/obsidian.md" },
        ],
      },
    ],
  },

  artifacts: [
    // 에이전트가 최근 만든 산출물 — file:// 링크로 열림
    {
      name: "build-projects.mjs + projects-data.js",
      path: "C:/workspace/command-center/build-projects.mjs",
      date: "2026-08-22",
      desc: "프로젝트 레지스트리 빌더 — 로컬 클론·gh·.launch 단계·wiki 링크 연결 (PROJECTS 뷰 원천)",
    },
    {
      name: "GATES.md",
      path: "C:/workspace/command-center/GATES.md",
      date: "2026-08-22",
      desc: "이 대시보드의 완료 게이트 원장",
    },
    {
      name: "pdf_text.txt (ARMS 가이드 전문)",
      path: "C:/Users/my/AppData/Local/Temp/claude/C--workspace/8d940bd3-eb8a-4860-aae1-df4ccaa6c8d0/scratchpad/pdf_text.txt",
      date: "2026-08-22",
      desc: "ARMS-Agentic-OS-Guide.pdf 17페이지 추출 텍스트",
    },
    {
      name: "REFRESH.md",
      path: "C:/workspace/command-center/REFRESH.md",
      date: "2026-08-22",
      desc: "대시보드 갱신 절차 + data.js 스키마 계약",
    },
  ],
};

// node에서 require 가능하게 (gate-check 및 갱신 스크립트 검증용)
if (typeof module !== "undefined" && module.exports) module.exports = CC_DATA;
