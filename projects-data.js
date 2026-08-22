// 자동 생성 — build-projects.mjs (로컬 클론 스캔 + projects-raw.json(gh) + .launch/launch-status.json + ~/.wiki 링크)
// 생성: 2026-08-22 15:28Z · 수동 편집 금지 (보정은 projects.overrides.json, 재생성: node build-projects.mjs)
const CC_PROJECTS = {
 "generatedAt": "2026-08-22 15:28Z",
 "roots": [
  "C:\\workspace",
  "C:\\Users\\my\\workspace"
 ],
 "ghSnapshot": "2026-08-22T15:06:47.229Z",
 "stages": [
  "intake",
  "repo_bootstrap",
  "mvp_prd",
  "store_assets",
  "scaffold",
  "tds_mvp",
  "analytics",
  "artifact",
  "local_qa",
  "registration_draft",
  "deploy_authorization",
  "sandbox_qa",
  "release_gate",
  "released"
 ],
 "stageKo": {
  "intake": "인테이크",
  "repo_bootstrap": "레포",
  "mvp_prd": "PRD",
  "store_assets": "스토어 에셋",
  "scaffold": "스캐폴드",
  "tds_mvp": "TDS MVP",
  "analytics": "애널리틱스",
  "artifact": "아티팩트",
  "local_qa": "로컬 QA",
  "registration_draft": "콘솔 등록",
  "deploy_authorization": "배포 인가",
  "sandbox_qa": "샌드박스 QA",
  "release_gate": "릴리즈 게이트",
  "released": "출시",
  "unverified": "미확정"
 },
 "summary": {
  "total": 62,
  "hidden": 24,
  "toss": 16,
  "active30d": 14,
  "tossWithBlockers": 14,
  "tossFromLaunchStatus": 15,
  "byCategory": {
   "side-project": 11,
   "knowledge-wiki": 1,
   "harness-ai-infra": 5,
   "apps-in-toss": 16,
   "landing-docs": 3,
   "legacy": 26
  },
  "byStage": {
   "intake": 1,
   "analytics": 2,
   "registration_draft": 5,
   "sandbox_qa": 5,
   "released": 2,
   "unverified": 1
  },
  "tossUnverified": 1,
  "dirty": 17
 },
 "items": [
  {
   "name": "command-center",
   "repo": "command-center",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/command-center.git",
   "lang": "JavaScript",
   "branch": "master",
   "dirty": 5,
   "lastCommit": "2026-08-23",
   "lastActivity": "2026-08-23",
   "daysSince": 0,
   "gh": {
    "url": "https://github.com/mqzkim/command-center",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 0,
    "commits30d": 3,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "evolve: dashboard ROUTINES integration + EVOLVE docs + gates ledger"
     },
     {
      "date": "2026-08-22",
      "message": "evolve: pipeline artifacts (trends 82 candidates, health baseline, sc…"
     },
     {
      "date": "2026-08-22",
      "message": "init: Command Center — galaxy dashboard + daily evolution loop scaffold"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\workspace\\command-center",
    "github": "https://github.com/mqzkim/command-center",
    "wiki": [
     "concepts/agentic-harness-engineering.md",
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "concepts/discord-bot-ecosystem.md",
     "concepts/git-subdirectory-remote-detection-pitfall.md",
     "concepts/headless-chrome-dom-error-capture.md",
     "concepts/mcp-protocol.md",
     "concepts/non-dev-ux-messaging.md",
     "concepts/parallel-session-shared-log-namespacing.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "llm-wiki",
   "repo": "llm-wiki",
   "displayName": null,
   "desc": null,
   "category": "knowledge-wiki",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "JavaScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/llm-wiki",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 0,
    "commits30d": 23,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "knowledge: add agno-agentos, standing-resolution-pattern, launch-deck…"
     },
     {
      "date": "2026-08-19",
      "message": "knowledge: update apps-in-toss free backend isolation"
     },
     {
      "date": "2026-08-03",
      "message": "knowledge: update apps-in-toss launch slice"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/llm-wiki",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/llm-wiki",
    "wiki": [
     "CLAUDE.md",
     "concepts/agent-skill-autopilot-boundary.md",
     "concepts/agentic-rag.md",
     "concepts/artifact-drop-librarian-hook.md",
     "concepts/benchmark-result-normalization.md",
     "concepts/harness-wrapper-contract.md",
     "concepts/knowledge-pipeline.md",
     "concepts/mcp-tooling.md"
    ],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "hermes-shared-knowledge",
   "repo": "hermes-shared-knowledge",
   "displayName": null,
   "desc": "Shared Hermes/Sena skills, personalities, and safe config templates",
   "category": "harness-ai-infra",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "TeX",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/hermes-shared-knowledge",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 0,
    "commits30d": 6,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "ops: refresh sena-1 telemetry metrics"
     },
     {
      "date": "2026-08-22",
      "message": "ops: refresh sena-1 telemetry metrics"
     },
     {
      "date": "2026-08-17",
      "message": "ops: refresh sena-1 telemetry metrics"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/hermes-shared-knowledge",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/hermes-shared-knowledge",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "launch-deck",
   "repo": "launch-deck",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck.git",
   "lang": null,
   "branch": "main",
   "dirty": 24,
   "lastCommit": "2026-08-22",
   "lastActivity": "2026-08-22",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 0,
    "commits30d": 1,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "docs: add launch-deck design spec (sections 1-5, approved 2026-08-22)"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\workspace\\launch-deck",
    "github": "https://github.com/mqzkim/launch-deck",
    "wiki": [
     "concepts/standing-resolution-pattern.md",
     "entities/agno-agentos.md",
     "entities/launch-deck.md",
     "internal/command-center-project-registry.md",
     "_librarian/lint-queue.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "naeheunjeok",
   "repo": "naeheunjeok",
   "displayName": null,
   "desc": "Prepare naeheunjeok for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/naeheunjeok.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-08-19",
   "lastActivity": "2026-08-19",
   "daysSince": 4,
   "gh": {
    "url": "https://github.com/mqzkim/naeheunjeok",
    "private": true,
    "pushedAt": "2026-08-19",
    "openIssues": 8,
    "commits30d": 12,
    "recent": [
     {
      "date": "2026-08-19",
      "message": "feat: deploy free production search backend"
     },
     {
      "date": "2026-08-19",
      "message": "chore: refresh release evidence after QA build"
     },
     {
      "date": "2026-08-19",
      "message": "chore: verify app-scoped Toss deploy access"
     }
    ],
    "issueTitles": [
     "[BL-008] 개인 아카이브 내보내기",
     "[BL-007] 허용 플랫폼 OAuth 삭제 API 연동",
     "[BL-006] 주제 클러스터와 고급 타임라인 필터",
     "[BL-005] 인터넷 나이 비식별 공유 카드",
     "[BL-004] 추가 아이디 정밀검색 보상형 광고",
     "[BL-003] 과거의 오늘과 정기 재검색 알림"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\naeheunjeok\\.launch\\launch-status.json",
    "appName": "naeheunjeok",
    "displayName": null,
    "stage": "sandbox_qa",
    "stageKo": "샌드박스 QA",
    "nextCheck": "sandbox_qa",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pending"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "pass"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 2,
    "blockersTotal": 2,
    "blockers": [
     "무료 공유 Supabase 프로젝트의 전용 Edge Function 배포는 완료됐고 네이버 Search API 자격증명 등록이 필요해요.",
     "공개 개인정보처리방침과 고객지원 연락처를 게시할 권한 및 값이 필요해요."
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-08-19",
    "goal": "Prepare naeheunjeok for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\naeheunjeok",
    "github": "https://github.com/mqzkim/naeheunjeok",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\naeheunjeok\\.launch\\launch-status.json",
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\app-in-toss\\naeheunjeok"
   ]
  },
  {
   "name": "kid-cheer-call",
   "repo": "kid-cheer-call",
   "displayName": null,
   "desc": "Prepare 꼬마응원전화 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/kid-cheer-call.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-08-11",
   "lastActivity": "2026-08-11",
   "daysSince": 12,
   "gh": {
    "url": "https://github.com/mqzkim/kid-cheer-call",
    "private": true,
    "pushedAt": "2026-08-11",
    "openIssues": 7,
    "commits30d": 12,
    "recent": [
     {
      "date": "2026-08-11",
      "message": "feat: define production content and operations contracts"
     },
     {
      "date": "2026-08-11",
      "message": "feat: harden audio playback and release readiness gate"
     },
     {
      "date": "2026-08-11",
      "message": "docs: record console authentication blocker"
     }
    ],
    "issueTitles": [
     "[BL-007] 기관별 공동 캠페인과 오프라인 연계",
     "[BL-006] 다국어·접근성 콘텐츠 확장",
     "[BL-005] 운영자 CMS와 신고 대시보드 확장",
     "[BL-004] 브랜드 후원 캠페인",
     "[BL-003] 선택형 보상 광고와 공유 카드",
     "[BL-002] 오늘의 한마디 알림"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\kid-cheer-call\\.launch\\launch-status.json",
    "appName": "kid-cheer-call",
    "displayName": null,
    "stage": "registration_draft",
    "stageKo": "콘솔 등록",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "blocked"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 4,
    "blockersTotal": 4,
    "blockers": [
     "실제 아동 음성 84개와 보호자·아동·기관 동의 및 철회 증거가 필요해요.",
     "공개 콘텐츠·신고·철회 API와 CDN 운영 원본이 필요해요.",
     "공개 개인정보 처리방침 URL과 고객 문의 연락처가 필요해요.",
     "인앱 브라우저와 Chrome 모두 토스 비즈니스 로그인이 필요해 앱 등록을 계속할 수 없어요."
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-08-11",
    "goal": "Prepare 꼬마응원전화 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\kid-cheer-call",
    "github": "https://github.com/mqzkim/kid-cheer-call",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\kid-cheer-call\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "eomma-choiae",
   "repo": "eomma-choiae",
   "displayName": null,
   "desc": "Prepare 엄마최애 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/eomma-choiae.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-08-03",
   "lastActivity": "2026-08-03",
   "daysSince": 20,
   "gh": {
    "url": "https://github.com/mqzkim/eomma-choiae",
    "private": true,
    "pushedAt": "2026-08-03",
    "openIssues": 7,
    "commits30d": 11,
    "recent": [
     {
      "date": "2026-08-03",
      "message": "docs: record repeated release blocker"
     },
     {
      "date": "2026-08-03",
      "message": "docs: refresh release gate audit"
     },
     {
      "date": "2026-08-03",
      "message": "chore: add release handoff tooling"
     }
    ],
    "issueTitles": [
     "[BL-007] 질문 CMS와 시즌팩·가족 확장",
     "[BL-006] 보상형 광고와 카드 테마",
     "[BL-005] 기능성 알림",
     "[BL-004] 자유 답변과 사진 카드",
     "[BL-003] 전국 엄마 익명 투표",
     "[BL-002] 일일 질문과 추억함"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\eomma-choiae\\.launch\\launch-status.json",
    "appName": "eomma-choiae",
    "displayName": null,
    "stage": "registration_draft",
    "stageKo": "콘솔 등록",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "blocked"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 2,
    "blockersTotal": 2,
    "blockers": [
     "Apps in Toss 콘솔 접근이 Toss Business 로그인 화면에서 중단됐어요.",
     "공개 고객지원 채널과 HTTPS 개인정보처리방침 URL이 아직 확정되지 않았어요."
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-08-03",
    "goal": "Prepare 엄마최애 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\eomma-choiae",
    "github": "https://github.com/mqzkim/eomma-choiae",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\eomma-choiae\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "today-task",
   "repo": "today-task",
   "displayName": null,
   "desc": "Prepare 오늘할일 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/today-task.git",
   "lang": "JavaScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-29",
   "lastActivity": "2026-07-29",
   "daysSince": 25,
   "gh": {
    "url": "https://github.com/mqzkim/today-task",
    "private": true,
    "pushedAt": "2026-07-29",
    "openIssues": 4,
    "commits30d": 14,
    "recent": [
     {
      "date": "2026-07-29",
      "message": "release: refresh current date and sandbox build"
     },
     {
      "date": "2026-07-28",
      "message": "release: upload editable main page sandbox build"
     },
     {
      "date": "2026-07-27",
      "message": "feat: add editable profile and manager task creation"
     }
    ],
    "issueTitles": [
     "[BL-004] 내보내기와 운영 통계",
     "[BL-003] 기능성 푸시 알림",
     "[BL-002] 공동 관리자와 부재 상태",
     "[BL-001] 반복 업무 템플릿"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\today-task\\.launch\\launch-status.json",
    "appName": "today-task",
    "displayName": null,
    "stage": "sandbox_qa",
    "stageKo": "샌드박스 QA",
    "nextCheck": "sandbox_qa",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 3,
    "blockersTotal": 3,
    "blockers": [
     "전용 Supabase 프로젝트가 없고 토스 로그인 mTLS 인증서도 연결되지 않아 실제 멀티사용자 동기화와 기관 격리를 검증할 수 없다. 로컬 스키마와 통합 계약만 준비됐다.",
     "개인정보처리방침 공개 URL, 고객지원 연락처, 콘솔 앱 등록과 실기기 샌드박스 증거가 필요하다.",
     "공식 Apps in Toss 빌드 체인에서 critical 1건을 포함한 전이 의존성 경고가 발견됐다. 취약 서버 코드는 AIT 정적 번들에 포함되지 않지만 공식 호환 업데이트가 필요하다."
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-29",
    "goal": "Prepare 오늘할일 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\today-task",
    "github": "https://github.com/mqzkim/today-task",
    "wiki": [
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\today-task\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "nailmap",
   "repo": "nailmap",
   "displayName": null,
   "desc": "Prepare NailMap for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/nailmap.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-28",
   "lastActivity": "2026-07-28",
   "daysSince": 26,
   "gh": {
    "url": "https://github.com/mqzkim/nailmap",
    "private": true,
    "pushedAt": "2026-07-28",
    "openIssues": 16,
    "commits30d": 30,
    "recent": [
     {
      "date": "2026-07-28",
      "message": "fix: make api key evidence utf8-safe"
     },
     {
      "date": "2026-07-28",
      "message": "release: verify sandbox deploy handoff"
     },
     {
      "date": "2026-07-27",
      "message": "release: record sandbox deploy authorization blocker"
     }
    ],
    "issueTitles": [
     "[BL-016] 가격 히스토리·지역 예약 HeatMap",
     "[BL-015] 채팅·DM·실시간 상담·커뮤니티",
     "[BL-014] 추천샵 광고·프리미엄 지도 노출",
     "[BL-013] 친구 추천·쿠폰·포인트",
     "[BL-012] 고객 리뷰 작성·사진 업로드·AI 방문 검증",
     "[BL-011] 트렌드·이달의 아트·디자이너 포트폴리오"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\nailmap\\.launch\\launch-status.json",
    "appName": "nailmap",
    "displayName": null,
    "stage": "sandbox_qa",
    "stageKo": "샌드박스 QA",
    "nextCheck": "sandbox_qa",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "blocked"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 3,
    "blockersTotal": 6,
    "blockers": [
     "Provide verifiable operator identity, support channel, and public privacy policy URL before submission",
     "Recheck official Apps in Toss SDK compatible updates and audit findings before release",
     "Open the private scheme in an installed Toss app and complete the device checklist before sandbox_qa can pass"
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-28",
    "goal": "Prepare NailMap for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\nailmap",
    "github": "https://github.com/mqzkim/nailmap",
    "wiki": [
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "entities/launch-deck.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\nailmap\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "bamti-translator",
   "repo": "bamti-translator",
   "displayName": null,
   "desc": "밤티번역기를 구현하고 Apps in Toss 출시 게이트까지 준비",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/bamti-translator.git",
   "lang": "JavaScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-28",
   "lastActivity": "2026-07-28",
   "daysSince": 26,
   "gh": {
    "url": "https://github.com/mqzkim/bamti-translator",
    "private": true,
    "pushedAt": "2026-07-28",
    "openIssues": 7,
    "commits30d": 48,
    "recent": [
     {
      "date": "2026-07-28",
      "message": "release: publish V4 to Apps in Toss"
     },
     {
      "date": "2026-07-28",
      "message": "release: record V4 review submission"
     },
     {
      "date": "2026-07-28",
      "message": "feat: render 27 independent Bamti concepts"
     }
    ],
    "issueTitles": [
     "[BL-008] 추가 감성 스타일 번역기",
     "[BL-007] 폰트·레이어 고급 편집기",
     "[BL-006] 보상·포인트·친구 초대",
     "[BL-005] 유료 스타일 팩",
     "[BL-004] 토스 로그인과 서버 갤러리",
     "[BL-002] 영상·GIF 생성"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\bamti-translator\\.launch\\launch-status.json",
    "appName": "bamti-translator",
    "displayName": null,
    "stage": "released",
    "stageKo": "출시",
    "nextCheck": "deploy_authorization",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pass"
     }
    ],
    "blockersOpen": 5,
    "blockersTotal": 14,
    "blockers": [
     "sdk-transitive-security-review",
     "output-parity-device-qa-required",
     "bamti-style-device-visual-qa-required",
     "style-catalog-v3-device-visual-qa-required",
     "independent-concepts-v4-device-visual-qa-required"
    ],
    "classification": "non-game",
    "finalReleaseApproved": true,
    "updatedAt": "2026-07-28",
    "goal": "밤티번역기를 구현하고 Apps in Toss 출시 게이트까지 준비"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\bamti-translator",
    "github": "https://github.com/mqzkim/bamti-translator",
    "wiki": [
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "concepts/apps-in-toss-non-game-anonymous-leaderboard.md",
     "concepts/apps-in-toss-rewarded-ad-release-gate.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\bamti-translator\\.launch\\launch-status.json",
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\app-in-toss\\bamti-translator"
   ]
  },
  {
   "name": "agent-factory",
   "repo": "agent-factory",
   "displayName": null,
   "desc": null,
   "category": "harness-ai-infra",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/agent-factory.git",
   "lang": "JavaScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-08-22",
   "lastActivity": "2026-08-22",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/agent-factory",
    "private": true,
    "pushedAt": "2026-08-01",
    "openIssues": 0,
    "commits30d": 2,
    "recent": [
     {
      "date": "2026-08-01",
      "message": "merge: add orca orchestration dashboard"
     },
     {
      "date": "2026-08-01",
      "message": "feat: add orca orchestration dashboard"
     },
     {
      "date": "2026-07-22",
      "message": "Merge pull request #1 from mqzkim/mqzkim/research-orca-ai-agent"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\agent-factory",
    "github": "https://github.com/mqzkim/agent-factory",
    "wiki": [
     "concepts/agent-factory-organizational-runtime.md",
     "concepts/canon-bootstrap-self-drift.md",
     "concepts/multi-llm-capability-research-substrate.md",
     "concepts/universal-dispatcher-prompt-capability-gate.md",
     "research/agent-factory-capability-portfolio-baseline.md",
     "research/agent-factory-evidence-research-capability.md",
     "research/orca-daemon-pty-orphan-troubleshooting.md",
     "research/windows-claude-code-pitfalls.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "daesin-meogeo",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-03",
   "daysSince": 20,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\daesin-meogeo\\.launch\\launch-status.json",
    "appName": "daesin-meogeo",
    "displayName": null,
    "stage": "sandbox_qa",
    "stageKo": "샌드박스 QA",
    "nextCheck": "sandbox_qa",
    "pipeline": [
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     }
    ],
    "blockersOpen": 5,
    "blockersTotal": 5,
    "blockers": [
     "콘솔 displayName·전용 앱 아이콘과 24개 음식 최종 일러스트",
     "9:16 공유 이미지 렌더링·저장 QA",
     "보상형 광고 운영 그룹 ID와 +20 멱등 보상",
     "개인정보 처리방침·문의 URL과 콘솔 등록",
     "실기기 Apps in Toss SafeArea·광고·공유 검증"
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-08-03",
    "goal": null
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\daesin-meogeo",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\daesin-meogeo\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "nail-map",
   "repo": "nail-map",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/nail-map.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-27",
   "lastActivity": "2026-07-27",
   "daysSince": 27,
   "gh": {
    "url": "https://github.com/mqzkim/nail-map",
    "private": true,
    "pushedAt": "2026-07-27",
    "openIssues": 0,
    "commits30d": 1,
    "recent": [
     {
      "date": "2026-07-27",
      "message": "chore: initialize repository"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\nail-map",
    "github": "https://github.com/mqzkim/nail-map",
    "wiki": [],
    "launch": null,
    "parent": "app-in-toss"
   }
  },
  {
   "name": "croco-fishing",
   "repo": null,
   "displayName": "악어밥 낚시왕",
   "desc": "Prepare 악어밥 낚시왕 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-06",
   "daysSince": 48,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\croco-fishing\\.launch\\launch-status.json",
    "appName": "croco-fishing",
    "displayName": "악어밥 낚시왕",
    "stage": "registration_draft",
    "stageKo": "콘솔 등록",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pending"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 2,
    "blockersTotal": 3,
    "blockers": [
     "Support contact, privacy policy URL, console authority, and production ad group IDs are not provided yet.",
     "npm audit --omit=dev reports critical/high findings in official Apps in Toss/Granite/template transitive dependencies. This does not block local QA because app-"
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-06",
    "goal": "Prepare 악어밥 낚시왕 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\croco-fishing",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\croco-fishing\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "pet-rock",
   "repo": null,
   "displayName": null,
   "desc": "Prepare pet-rock for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-05",
   "daysSince": 49,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\pet-rock\\.launch\\launch-status.json",
    "appName": "pet-rock",
    "displayName": null,
    "stage": "registration_draft",
    "stageKo": "콘솔 등록",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "blocked"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "blocked"
     },
     {
      "s": "release_gate",
      "st": "blocked"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 5,
    "blockersTotal": 5,
    "blockers": [
     "Chrome console automation is unavailable because Chrome is not running and the Codex Chrome Extension native host registry key is missing. Manual console upload",
     "pet-rock must be registered in the Apps in Toss console before an app-scoped Console API Key can be issued and before sandbox deploy can succeed.",
     "After pet-rock is registered in the Apps in Toss web console, issue a new app-scoped Console API Key that includes pet-rock, then run npm run sandbox:deploy to ",
     "Customer support email, optional support contact if used, public HTTPS privacy policy URL, business/monetization eligibility, and final release owner must be pr",
     "Real rewarded ad group ID is required before production ad operation; local build uses test/fallback behavior."
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-05",
    "goal": "Prepare pet-rock for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\pet-rock",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\pet-rock\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "upperant",
   "repo": null,
   "displayName": null,
   "desc": "Prepare upperant for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-04",
   "daysSince": 50,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\upperant\\.launch\\launch-status.json",
    "appName": "upperant-daily",
    "displayName": null,
    "stage": "analytics",
    "stageKo": "애널리틱스",
    "nextCheck": "analytics",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "n/a"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "blocked"
     },
     {
      "s": "release_gate",
      "st": "blocked"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 2,
    "blockersTotal": 2,
    "blockers": [
     "Apps in Toss bundle upload succeeded for upperant-daily after issuing the all-app console API key upperantdaily04 and registering it to the local ait profile up",
     "Operator-owned customer support contact and public HTTPS privacy policy URL are required for final console submission."
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-04",
    "goal": "Prepare upperant for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\upperant",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\upperant\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "haru-han-tem",
   "repo": null,
   "displayName": "하루한템",
   "desc": "PRD.md 기반 Apps in Toss MVP 출시 준비와 실제 출시 진행",
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-04",
   "daysSince": 50,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\haru-han-tem\\.launch\\launch-status.json",
    "appName": "haru-han-tem",
    "displayName": "하루한템",
    "stage": "analytics",
    "stageKo": "애널리틱스",
    "nextCheck": "analytics",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "n/a"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "blocked"
     },
     {
      "s": "release_gate",
      "st": "blocked"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 4,
    "blockersTotal": 4,
    "blockers": [
     "deploy evidence is local/placeholder validation: --allow-placeholders",
     "front env validation failed: VITE_TOSS_PROMOTION_CODE: 테스트/예시 프로모션 코드 대신 운영 프로모션 코드를 넣어야 해요. / VITE_REWARD_AD_UNIT_ID: 테스트/예시 광고 그룹 ID 대신 운영 광고 그룹 ID를 넣어야 해요. /",
     "sandbox QA result validation failed: tester: placeholder 대신 실제 QA 담당자을 넣어야 해요. / checks.homeCoreLoopVisible: 샌드박스 QA 필수 항목은 true여야 해요. / checks.clientOnlyRuntim",
     "review result validation failed: submissionId: placeholder 대신 실제 심사 제출 ID을 넣어야 해요. / submittedAt: placeholder 대신 실제 심사 제출 시각을 넣어야 해요. / submittedAt: ISO 날짜 문자열이"
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-04",
    "goal": "PRD.md 기반 Apps in Toss MVP 출시 준비와 실제 출시 진행"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\haru-han-tem",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\haru-han-tem\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "today-task-scaffold",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": true,
   "scaffold": true,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": null,
   "daysSince": null,
   "gh": null,
   "toss": {
    "source": null,
    "appName": "today-task-scaffold",
    "displayName": "앱 이름",
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "granite.config.ts 존재 (appName=today-task-scaffold)"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\today-task-scaffold",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "nailmap-scaffold",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": true,
   "scaffold": true,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": null,
   "daysSince": null,
   "gh": null,
   "toss": {
    "source": null,
    "appName": "nailmap-scaffold",
    "displayName": "앱 이름",
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "granite.config.ts 존재 (appName=nailmap-scaffold)"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\nailmap-scaffold",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "kid-cheer-call-scaffold",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": true,
   "scaffold": true,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": null,
   "daysSince": null,
   "gh": null,
   "toss": {
    "source": null,
    "appName": "kid-cheer-call-scaffold",
    "displayName": null,
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "apps-in-toss.config.ts 존재 (appName=kid-cheer-call-scaffold)"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\kid-cheer-call-scaffold",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "eomma-choiae-scaffold",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": true,
   "scaffold": true,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": null,
   "daysSince": null,
   "gh": null,
   "toss": {
    "source": null,
    "appName": "eomma-choiae-scaffold",
    "displayName": null,
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "apps-in-toss.config.ts 존재 (appName=eomma-choiae-scaffold)"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\eomma-choiae-scaffold",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "bamti-translator-scaffold",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 3,
   "hidden": true,
   "scaffold": true,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": null,
   "daysSince": null,
   "gh": null,
   "toss": {
    "source": null,
    "appName": "bamti-translator-scaffold",
    "displayName": "앱 이름",
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "granite.config.ts 존재 (appName=bamti-translator-scaffold)",
     "docs/ 존재"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\bamti-translator-scaffold",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "app-in-toss",
   "repo": "app-in-toss",
   "displayName": "app-in-toss (모노레포)",
   "desc": "앱인토스 모노레포 워크스페이스 — 서브앱 8개(croco-fishing·daesin-meogeo·haru-han-tem·pet-rock·upperant·diamond-gather·coffee·bamti/naeheunjeok 사본). 루트 launch-status는 악어밥 낚시왕 import 잔재",
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/app-in-toss.git",
   "lang": "JavaScript",
   "branch": "main",
   "dirty": 116,
   "lastCommit": "2026-07-06",
   "lastActivity": "2026-08-03",
   "daysSince": 20,
   "gh": {
    "url": "https://github.com/mqzkim/app-in-toss",
    "private": true,
    "pushedAt": "2026-07-04",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-04",
      "message": "Update release next check"
     },
     {
      "date": "2026-07-04",
      "message": "Initial import"
     }
    ],
    "issueTitles": []
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\.launch\\launch-status.json",
    "appName": "croco-fishing",
    "displayName": "악어밥 낚시왕",
    "stage": "intake",
    "stageKo": "인테이크",
    "nextCheck": "intake",
    "pipeline": [
     {
      "s": "intake",
      "st": "pending"
     },
     {
      "s": "repo_bootstrap",
      "st": "skipped"
     },
     {
      "s": "mvp_prd",
      "st": "skipped"
     },
     {
      "s": "store_assets",
      "st": "skipped"
     },
     {
      "s": "scaffold",
      "st": "blocked"
     },
     {
      "s": "tds_mvp",
      "st": "pending"
     },
     {
      "s": "analytics",
      "st": "pending"
     },
     {
      "s": "artifact",
      "st": "pending"
     },
     {
      "s": "local_qa",
      "st": "pending"
     },
     {
      "s": "registration_draft",
      "st": "pending"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 2,
    "blockersTotal": 2,
    "blockers": [
     "User must explicitly confirm whether 악어밥 낚시왕 should be treated and registered as a game app before scaffold/game-specific release preparation continues.",
     "Support contact, privacy policy URL, console authority, and production ad group IDs are not provided yet."
    ],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": "2026-08-03",
    "goal": "Prepare 악어밥 낚시왕 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss",
    "github": "https://github.com/mqzkim/app-in-toss",
    "wiki": [
     "concepts/git-subdirectory-remote-detection-pitfall.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "privacy-site",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-26",
   "lastActivity": "2026-07-26",
   "daysSince": 28,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\bamti-translator\\privacy-site",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": "bamti-translator"
   }
  },
  {
   "name": "seoul-house-from-space",
   "repo": "seoul-house-from-space",
   "displayName": null,
   "desc": "Prepare 서울에 집 사기 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/seoul-house-from-space.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-15",
   "lastActivity": "2026-07-15",
   "daysSince": 39,
   "gh": {
    "url": "https://github.com/mqzkim/seoul-house-from-space",
    "private": true,
    "pushedAt": "2026-07-15",
    "openIssues": 7,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-15",
      "message": "docs: clarify fastest release timeline"
     },
     {
      "date": "2026-07-15",
      "message": "feat: hide remaining distance from journey UI"
     },
     {
      "date": "2026-07-15",
      "message": "docs: refresh planned release handoff"
     }
    ],
    "issueTitles": [
     "[BL-007] 클라우드 진행 동기화",
     "[BL-006] 사운드와 고급 햅틱 연출",
     "[BL-005] 아파트까지 확장 토지 단계",
     "[BL-004] 진행 공유 카드와 친구 초대",
     "[BL-003] 게임 센터 리더보드",
     "[BL-002] 장기 밸런스와 오프라인 진행"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\seoul-house-from-space\\.launch\\launch-status.json",
    "appName": "seoul-house-from-space",
    "displayName": null,
    "stage": "sandbox_qa",
    "stageKo": "샌드박스 QA",
    "nextCheck": "sandbox_qa",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "blocked"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 4,
    "blockersTotal": 4,
    "blockers": [
     "npm audit reports 31 production-tree findings through the official Apps in Toss SDK and build-tool dependency graph; no compatible framework fix is available an",
     "Public support and privacy pages are verified with the operator label 담당자. The live console still requires an explicitly approved receiving email, and game revi",
     "The private test scheme deployed successfully, but it must be opened on a Toss-installed device and the sandbox checklist must pass before sandbox_qa can be mar",
     "The local submission images were regenerated after removing the remaining-distance display; the logged-out Chrome console draft still needs those current images"
    ],
    "classification": "game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-15",
    "goal": "Prepare 서울에 집 사기 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\seoul-house-from-space",
    "github": "https://github.com/mqzkim/seoul-house-from-space",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\seoul-house-from-space\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "conclusion-card",
   "repo": "conclusion-card",
   "displayName": null,
   "desc": "Prepare 결론카드 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/conclusion-card.git",
   "lang": "CSS",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-15",
   "lastActivity": "2026-07-15",
   "daysSince": 39,
   "gh": {
    "url": "https://github.com/mqzkim/conclusion-card",
    "private": true,
    "pushedAt": "2026-07-15",
    "openIssues": 6,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-15",
      "message": "docs: refresh monetization release report"
     },
     {
      "date": "2026-07-15",
      "message": "docs: record console authentication handoff"
     },
     {
      "date": "2026-07-15",
      "message": "test: refresh launch evidence and store assets"
     }
    ],
    "issueTitles": [
     "Post-MVP: 친구와 같은 질문 카드",
     "Post-MVP: 고민 한 줄 입력과 선택 공유",
     "Post-MVP: 오늘의 카드 알림",
     "Post-MVP: 결과 기록함",
     "Post-MVP: 테마별 특별 덱",
     "Post-MVP: 한 번의 재뽑기와 보상형 광고"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\conclusion-card\\.launch\\launch-status.json",
    "appName": "conclusion-card",
    "displayName": null,
    "stage": "registration_draft",
    "stageKo": "콘솔 등록",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "repo_bootstrap",
      "st": "pass"
     },
     {
      "s": "mvp_prd",
      "st": "pass"
     },
     {
      "s": "store_assets",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "blocked"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pending"
     },
     {
      "s": "release_gate",
      "st": "pending"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 3,
    "blockersTotal": 3,
    "blockers": [
     "Latest official Apps in Toss SDK 2.10.6 retains transitive npm audit findings; recheck the official SDK dependency path before release.",
     "Sign in to the Apps in Toss workspace in the preserved Chrome tab, then resume console draft creation.",
     "Provide a public operator/service label, public support channel, privacy contact and login-free HTTPS privacy policy URL before final console submission."
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-07-15",
    "goal": "Prepare 결론카드 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\conclusion-card",
    "github": "https://github.com/mqzkim/conclusion-card",
    "wiki": [
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\conclusion-card\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "seoul-house-from-space-support",
   "repo": "seoul-house-from-space-support",
   "displayName": null,
   "desc": null,
   "category": "landing-docs",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/seoul-house-from-space-support.git",
   "lang": "HTML",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-12",
   "lastActivity": "2026-07-12",
   "daysSince": 42,
   "gh": {
    "url": "https://github.com/mqzkim/seoul-house-from-space-support",
    "private": false,
    "pushedAt": "2026-07-12",
    "openIssues": 1,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-12",
      "message": "docs: publish support and privacy pages"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\seoul-house-from-space-support",
    "github": "https://github.com/mqzkim/seoul-house-from-space-support",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "goose",
   "repo": "goose",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": false,
   "mine": false,
   "remote": "https://github.com/aaif-goose/goose.git",
   "lang": null,
   "branch": "main",
   "dirty": 2,
   "lastCommit": "2026-07-11",
   "lastActivity": "2026-07-11",
   "daysSince": 43,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\goose",
    "github": "https://github.com/aaif-goose/goose",
    "wiki": [
     "concepts/ai-pr-measurement-pitfalls.md",
     "concepts/llm-pr-merge-trust-boundary.md",
     "concepts/provider-smoke-sentinel-validation.md",
     "entities/ai-benchmark-repos/aaif-goose__goose.md",
     "entities/headroom.md",
     "internal/ai-benchmark-harness/harness-learning-log.md",
     "research/github-org-ai-pr-automation-2026-07.md",
     "_librarian/lint-queue.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "diamond-gather",
   "repo": null,
   "displayName": null,
   "desc": "Prepare diamond-gather for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": "TypeScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-07",
   "daysSince": 47,
   "gh": {
    "url": "https://github.com/mqzkim/diamond-gather",
    "private": true,
    "pushedAt": "2026-07-06",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-06",
      "message": "Implement diamond gather app"
     }
    ],
    "issueTitles": []
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\app-in-toss\\diamond-gather\\.launch\\launch-status.json",
    "appName": "diamond-get",
    "displayName": null,
    "stage": "released",
    "stageKo": "출시",
    "nextCheck": "registration_draft",
    "pipeline": [
     {
      "s": "intake",
      "st": "pass"
     },
     {
      "s": "scaffold",
      "st": "pass"
     },
     {
      "s": "tds_mvp",
      "st": "pass"
     },
     {
      "s": "analytics",
      "st": "pass"
     },
     {
      "s": "artifact",
      "st": "pass"
     },
     {
      "s": "local_qa",
      "st": "pass"
     },
     {
      "s": "registration_draft",
      "st": "pass"
     },
     {
      "s": "deploy_authorization",
      "st": "n/a"
     },
     {
      "s": "sandbox_qa",
      "st": "pass"
     },
     {
      "s": "release_gate",
      "st": "pass"
     },
     {
      "s": "released",
      "st": "pass"
     }
    ],
    "blockersOpen": 0,
    "blockersTotal": 5,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": true,
    "updatedAt": "2026-07-07",
    "goal": "Prepare diamond-gather for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\diamond-gather",
    "github": "https://github.com/mqzkim/diamond-gather",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\app-in-toss\\diamond-gather\\.launch\\launch-status.json",
    "parent": "app-in-toss"
   }
  },
  {
   "name": "coffee",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": "TypeScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-06",
   "daysSince": 48,
   "gh": {
    "url": "https://github.com/mqzkim/coffee",
    "private": true,
    "pushedAt": "2026-07-06",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-07-06",
      "message": "feat: rebuild coffee app"
     },
     {
      "date": "2026-07-02",
      "message": "chore: ait:build/ait:deploy 스크립트 + 런북에 .ait 산출 반영"
     },
     {
      "date": "2026-07-02",
      "message": "build: ait build로 .ait 번들 산출 (outdir=out으로 next export 경로 일치)"
     }
    ],
    "issueTitles": []
   },
   "toss": {
    "source": null,
    "appName": "ddasa",
    "displayName": "따사",
    "stage": "unverified",
    "stageKo": "미확정",
    "nextCheck": null,
    "pipeline": [],
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": null,
    "finalReleaseApproved": false,
    "updatedAt": null,
    "goal": null,
    "note": "launch-status.json 없음 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "granite.config.ts 존재 (appName=ddasa, TODO 주석 — 콘솔 미등록 추정 아님·확인 필요)",
     "ddasa.ait 번들 존재 (부모 디렉토리)",
     "plans/ 존재",
     "gh 파일 트리: plans"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\app-in-toss\\coffee",
    "github": "https://github.com/mqzkim/coffee",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": null,
    "parent": "app-in-toss"
   }
  },
  {
   "name": "TradingAgents",
   "repo": "TradingAgents",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": false,
   "mine": false,
   "remote": "https://github.com/TauricResearch/TradingAgents.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-05",
   "lastActivity": "2026-07-05",
   "daysSince": 49,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\TradingAgents",
    "github": "https://github.com/TauricResearch/TradingAgents",
    "wiki": [
     "entities/ai-benchmark-repos/TauricResearch__TradingAgents.md",
     "internal/ai-benchmark-harness-repo-index.md",
     "research/financial-signal-persistence-statistical-design.md",
     "research/tradingagents-alpaca-integration.md",
     "research/windows-task-scheduler-hidden-console-window.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "korean-review-tone-kit",
   "repo": "korean-review-tone-kit",
   "displayName": null,
   "desc": "Korean review tone analysis + reply style recommender (pure TS lib, 100% coverage)",
   "category": "side-project",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/korean-review-tone-kit.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-05-08",
   "lastActivity": "2026-05-08",
   "daysSince": 107,
   "gh": {
    "url": "https://github.com/mqzkim/korean-review-tone-kit",
    "private": true,
    "pushedAt": "2026-05-08",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-08",
      "message": "feat(sarcasm): 반어법·비꼼 탐지 (detectSarcasm)"
     },
     {
      "date": "2026-05-07",
      "message": "feat(tone): 강조어/완화어 인지 점수 (intensifier-aware scoring)"
     },
     {
      "date": "2026-05-07",
      "message": "docs(readme): document full public API + monetization-ready cookbook"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\korean-review-tone-kit",
    "github": "https://github.com/mqzkim/korean-review-tone-kit",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "tradingagents-sena-trader",
   "repo": "tradingagents-sena-trader",
   "displayName": null,
   "desc": "Personal TradingAgents-based AI trader workspace for Sena/Hermes operations",
   "category": "harness-ai-infra",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "Python",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-05-02",
   "daysSince": 113,
   "gh": {
    "url": "https://github.com/mqzkim/tradingagents-sena-trader",
    "private": true,
    "pushedAt": "2026-05-02",
    "openIssues": 3,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-02",
      "message": "docs: add 2026-05-01 paper trading report"
     },
     {
      "date": "2026-05-01",
      "message": "feat: add trader harness verification gates"
     },
     {
      "date": "2026-04-30",
      "message": "docs: add paper trade research addendum"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/tradingagents-sena-trader",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/tradingagents-sena-trader",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "og-image-api",
   "repo": "og-image-api",
   "displayName": null,
   "desc": "Dynamic OG image generation API as a service - 4-7 day MVP money-making project",
   "category": "side-project",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/og-image-api.git",
   "lang": "Python",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-05-02",
   "lastActivity": "2026-05-02",
   "daysSince": 113,
   "gh": {
    "url": "https://github.com/mqzkim/og-image-api",
    "private": true,
    "pushedAt": "2026-05-02",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-02",
      "message": "feat(themes): add github-card theme + landing Themes section"
     },
     {
      "date": "2026-05-02",
      "message": "feat(landing): sharpen lede + fix Free-tier dead-end CTA"
     },
     {
      "date": "2026-05-01",
      "message": "docs(halt): 2026-05-02 stop-loop recommendation (turn 238, BLOCKER 20…"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\og-image-api",
    "github": "https://github.com/mqzkim/og-image-api",
    "wiki": [
     "concepts/beta-cost-gate-sediment-release.md",
     "concepts/billing-blocked-monetization-diversification.md",
     "concepts/browser-side-fallback-demo.md",
     "concepts/ci-concurrency-cancel-interpretation.md",
     "concepts/cluster-trigger-playbook.md",
     "concepts/cost-gate-driven-analytics.md",
     "concepts/customer-support-scenario-script.md",
     "concepts/decisions-matrix-consolidation.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "claude-max-codex-setup",
   "repo": "claude-max-codex-setup",
   "displayName": null,
   "desc": "Claude Max + Codex Orchestration Setup — landing",
   "category": "landing-docs",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "HTML",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-04-23",
   "daysSince": 122,
   "gh": {
    "url": "https://github.com/mqzkim/claude-max-codex-setup",
    "private": false,
    "pushedAt": "2026-04-23",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-23",
      "message": "initial landing page"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/claude-max-codex-setup",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/claude-max-codex-setup",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "short_youtube",
   "repo": "short_youtube",
   "displayName": null,
   "desc": "요약튜브 YouTube transcript/report/PPT harness",
   "category": "side-project",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/short_youtube.git",
   "lang": "Python",
   "branch": "main",
   "dirty": 10,
   "lastCommit": "2026-04-17",
   "lastActivity": "2026-04-17",
   "daysSince": 128,
   "gh": {
    "url": "https://github.com/mqzkim/short_youtube",
    "private": true,
    "pushedAt": "2026-04-17",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-17",
      "message": "fix: add published dates to reports and slides"
     },
     {
      "date": "2026-04-17",
      "message": "feat: add oauth cli llm providers"
     },
     {
      "date": "2026-04-16",
      "message": "feat: add chapter-aware llm report pipeline"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\short_youtube",
    "github": "https://github.com/mqzkim/short_youtube",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "helix-co",
   "repo": "helix-co",
   "displayName": null,
   "desc": "Helix Co - AI Agent Operations Platform",
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/helix-co.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 6,
   "lastCommit": "2026-04-16",
   "lastActivity": "2026-04-16",
   "daysSince": 129,
   "gh": {
    "url": "https://github.com/mqzkim/helix-co",
    "private": true,
    "pushedAt": "2026-04-16",
    "openIssues": 90,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-16",
      "message": "feat(factory): wire pipeline events → dashboard celebration trigger (…"
     },
     {
      "date": "2026-04-16",
      "message": "feat(factory): one-click launch experience + test suite expansion (#1…"
     },
     {
      "date": "2026-04-12",
      "message": "Remove Heartbeat section from SOUL.md on main branch"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\helix-co",
    "github": "https://github.com/mqzkim/helix-co",
    "wiki": [
     "concepts/document-fork-anti-pattern-resolution.md",
     "concepts/first-entry-compound.md",
     "concepts/immutable-document-append.md",
     "concepts/parallel-ingest-code-progress.md",
     "concepts/ratchet-ingest-cadence.md",
     "concepts/same-directory-compound-investment.md",
     "concepts/small-file-compound-investment.md",
     "concepts/triple-agent-architecture.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-infra",
   "repo": "harness-infra",
   "displayName": null,
   "desc": "Claude Code harness infrastructure: agents, skills, scripts, references",
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-infra.git",
   "lang": "JavaScript",
   "branch": "main",
   "dirty": 9,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-16",
   "daysSince": 129,
   "gh": {
    "url": "https://github.com/mqzkim/harness-infra",
    "private": true,
    "pushedAt": "2026-04-16",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-08",
      "message": "chore: checkpoint"
     },
     {
      "date": "2026-03-31",
      "message": "fix: use hardlink fallback instead of copy for Windows file links"
     },
     {
      "date": "2026-03-31",
      "message": "fix: add copy fallback for file symlinks on Windows without Developer…"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-infra",
    "github": "https://github.com/mqzkim/harness-infra",
    "wiki": [
     "concepts/three-layer-knowledge-architecture.md",
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "entities/harness-infra.md",
     "entities/harness-ir.md",
     "entities/harness-lab.md",
     "entities/harness-ops.md",
     "internal/helix-co.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "attune",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "master",
   "dirty": 1,
   "lastCommit": "2026-04-16",
   "lastActivity": "2026-04-16",
   "daysSince": 129,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\attune",
    "github": null,
    "wiki": [
     "concepts/harness-recommendations-p12-p14.md",
     "concepts/observation-regression-gc-workflow.md",
     "entities/attune-article.md",
     "entities/ouroboros.md",
     "internal/attune-memory-wiki-convergence-concern.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "oss-hyperaccel-article",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "master",
   "dirty": 2,
   "lastCommit": "2026-04-15",
   "lastActivity": "2026-04-15",
   "daysSince": 130,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\oss-hyperaccel-article",
    "github": null,
    "wiki": [
     "concepts/observation-regression-gc-workflow.md",
     "entities/attune-article.md",
     "internal/attune-memory-wiki-convergence-concern.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "dark-factory-experiment",
   "repo": "dark-factory-experiment",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/coleam00/dark-factory-experiment",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-15",
   "lastActivity": "2026-04-15",
   "daysSince": 130,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\dark-factory-experiment",
    "github": "https://github.com/coleam00/dark-factory-experiment",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "Archon",
   "repo": "Archon",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/coleam00/Archon",
   "lang": null,
   "branch": "dev",
   "dirty": 0,
   "lastCommit": "2026-04-15",
   "lastActivity": "2026-04-15",
   "daysSince": 130,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\Archon",
    "github": "https://github.com/coleam00/Archon",
    "wiki": [
     "concepts/context-engineering-prp.md",
     "concepts/dag-layer-parallelism.md",
     "concepts/dark-factory-pattern.md",
     "concepts/git-lock-coordination.md",
     "concepts/orchestration-patterns.md",
     "concepts/ralph-wiggum-loop.md",
     "concepts/yaml-heredoc-indent-collision.md",
     "entities/archon-agent-builder-legacy.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "tkmx-client",
   "repo": "tkmx-client",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/srosro/tkmx-client.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-14",
   "lastActivity": "2026-04-14",
   "daysSince": 131,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\tkmx-client",
    "github": "https://github.com/srosro/tkmx-client",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "super",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "main",
   "dirty": 9,
   "lastCommit": "2026-04-13",
   "lastActivity": "2026-04-13",
   "daysSince": 132,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\super",
    "github": null,
    "wiki": [
     "concepts/document-fork-anti-pattern-resolution.md",
     "concepts/immutable-document-append.md",
     "concepts/knowledge-pipeline.md",
     "concepts/multi-llm-capability-research-substrate.md",
     "concepts/observation-regression-gc-workflow.md",
     "concepts/ratchet-decision-application-lag.md",
     "concepts/standing-resolution-pattern.md",
     "concepts/team-agent-delegation.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "llm-lean-startup",
   "repo": "llm-lean-startup",
   "displayName": null,
   "desc": "AI Skill-based Socratic Interview + 5-Layer Validation to guide developers from 'What to build?' to a validated PRD",
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/llm-lean-startup.git",
   "lang": "Astro",
   "branch": "main",
   "dirty": 10,
   "lastCommit": "2026-04-13",
   "lastActivity": "2026-04-13",
   "daysSince": 132,
   "gh": {
    "url": "https://github.com/mqzkim/llm-lean-startup",
    "private": false,
    "pushedAt": "2026-04-12",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-12",
      "message": "Add Anti-Drift framework: External Gates, checklist, case library, va…"
     },
     {
      "date": "2026-04-12",
      "message": "Add Phase 1-4 templates with PRD-ready brief tone calibration"
     },
     {
      "date": "2026-04-12",
      "message": "Redesign landing to Field Report style (essay/serif/sidenote)"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\llm-lean-startup",
    "github": "https://github.com/mqzkim/llm-lean-startup",
    "wiki": [
     "concepts/community-provider-pattern.md",
     "concepts/community-scan.md",
     "concepts/five-layer-validation.md",
     "concepts/lean-startup.md",
     "entities/attune-article.md",
     "entities/llm-lean-startup.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "reports/phase-a-lint-2026-04-14.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "gstack",
   "repo": "gstack",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/garrytan/gstack.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-10",
   "lastActivity": "2026-04-10",
   "daysSince": 135,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\gstack",
    "github": "https://github.com/garrytan/gstack",
    "wiki": [
     "entities/attune-article.md",
     "entities/gstack.md",
     "entities/llm-lean-startup.md",
     "entities/ouroboros.md",
     "internal/frontmatter-v2-migration-diff-2026-04-15.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/gstack-install-paths.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "ai-company",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "main",
   "dirty": 47,
   "lastCommit": "2026-04-10",
   "lastActivity": "2026-04-10",
   "daysSince": 135,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\ai-company",
    "github": null,
    "wiki": [
     "entities/harness-claude-framework.md",
     "entities/paperclip.md",
     "internal/execution-archive-2026-04.md",
     "internal/openclaw-knowledge-intake-pipeline.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "youtube",
   "repo": "youtube",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/youtube.git",
   "lang": null,
   "branch": "main",
   "dirty": 5,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\youtube",
    "github": "https://github.com/mqzkim/youtube",
    "wiki": [
     "entities/ai-shorts-studio.md",
     "entities/cole-medin.md",
     "entities/prototype.md",
     "entities/remotion-studio.md",
     "entities/taskmaster-ai.md",
     "entities/youtube.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "remotion-studio",
   "repo": "remotion-studio",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/remotion-studio.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\remotion-studio",
    "github": "https://github.com/mqzkim/remotion-studio",
    "wiki": [
     "entities/ai-shorts-studio.md",
     "entities/remotion-studio.md",
     "entities/youtube.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "ref/frontmatter.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "prototype",
   "repo": "prototype",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/prototype",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\prototype",
    "github": "https://github.com/mqzkim/prototype",
    "wiki": [
     "concepts/agent-factory-organizational-runtime.md",
     "entities/prototype.md",
     "entities/youtube.md",
     "internal/helix-co.md",
     "internal/issue-sync-pipeline.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-claude-framework",
   "repo": "harness-claude-framework",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-claude-framework.git",
   "lang": null,
   "branch": "master",
   "dirty": 1,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-claude-framework",
    "github": "https://github.com/mqzkim/harness-claude-framework",
    "wiki": [
     "CLAUDE.md",
     "concepts/harness-engineering.md",
     "concepts/harness-recommendations-p12-p14.md",
     "concepts/observation-regression-gc-workflow.md",
     "concepts/voltagent.md",
     "entities/attune-article.md",
     "entities/claude-code-harness.md",
     "entities/clawdev-bot.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "discord-command-center",
   "repo": "discord-command-center",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/discord-command-center.git",
   "lang": null,
   "branch": "master",
   "dirty": 22,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\discord-command-center",
    "github": "https://github.com/mqzkim/discord-command-center",
    "wiki": [
     "concepts/discord-bot-ecosystem.md",
     "concepts/mcp-protocol.md",
     "concepts/non-dev-ux-messaging.md",
     "concepts/voltagent.md",
     "entities/claude-code-hub.md",
     "entities/copy-replit.md",
     "entities/discord-command-center.md",
     "entities/helix-co.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "code-harness",
   "repo": "code-harness",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/code-harness.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\code-harness",
    "github": "https://github.com/mqzkim/code-harness",
    "wiki": [
     "concepts/voltagent.md",
     "entities/claude-code-harness.md",
     "entities/code-harness.md",
     "internal/frontmatter-v2-migration-diff-2026-04-15.md",
     "internal/helix-co.md",
     "internal/issue-sync-pipeline.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "claude-workspace",
   "repo": "claude-workspace",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/claude-workspace",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\claude-workspace",
    "github": "https://github.com/mqzkim/claude-workspace",
    "wiki": [
     "concepts/voltagent.md",
     "entities/claude-workspace.md",
     "internal/helix-co.md",
     "internal/issue-sync-pipeline.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "internal/workspace-summary.md",
     "research/voltagent-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "ai-shorts-studio",
   "repo": "ai-shorts-studio",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/ai-shorts-studio.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-09",
   "lastActivity": "2026-04-09",
   "daysSince": 136,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\ai-shorts-studio",
    "github": "https://github.com/mqzkim/ai-shorts-studio",
    "wiki": [
     "entities/ai-shorts-studio.md",
     "entities/prototype.md",
     "entities/remotion-studio.md",
     "entities/youtube.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "copy-replit",
   "repo": "copy-replit",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/copy-replit.git",
   "lang": null,
   "branch": "master",
   "dirty": 9,
   "lastCommit": "2026-04-08",
   "lastActivity": "2026-04-08",
   "daysSince": 137,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\copy-replit",
    "github": "https://github.com/mqzkim/copy-replit",
    "wiki": [
     "concepts/non-dev-ux-messaging.md",
     "entities/bolt-new.md",
     "entities/copy-replit.md",
     "entities/genspark.md",
     "entities/lovable.md",
     "entities/v0.md",
     "internal/copy-replit.md",
     "internal/discord-command-center.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "claude-expert",
   "repo": "claude-expert",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/claude-expert.git",
   "lang": null,
   "branch": "master",
   "dirty": 0,
   "lastCommit": "2026-04-08",
   "lastActivity": "2026-04-08",
   "daysSince": 137,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\claude-expert",
    "github": "https://github.com/mqzkim/claude-expert",
    "wiki": [
     "concepts/skill-design-standards.md",
     "concepts/team-agent-delegation.md",
     "concepts/three-layer-knowledge-architecture.md",
     "entities/claude-expert.md",
     "internal/frontmatter-v2-migration-diff-2026-04-15.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/claude-code-user-scope.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "ragflow",
   "repo": "ragflow",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/infiniflow/ragflow",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-07",
   "lastActivity": "2026-04-07",
   "daysSince": 138,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\ragflow",
    "github": "https://github.com/infiniflow/ragflow",
    "wiki": [
     "entities/ai-benchmark-repos/infiniflow__ragflow.md",
     "internal/ai-benchmark-harness-repo-index.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/harness-gitness.md",
     "research/ragflow.md",
     "src/src/architect-analysis.md",
     "src/src/deep-research-report.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "OpenHarness",
   "repo": "OpenHarness",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/HKUDS/OpenHarness",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-07",
   "lastActivity": "2026-04-07",
   "daysSince": 138,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\OpenHarness",
    "github": "https://github.com/HKUDS/OpenHarness",
    "wiki": [
     "entities/ai-benchmark-repos/HKUDS__OpenHarness.md",
     "internal/ai-benchmark-harness-repo-index.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/autoagent.md",
     "research/everything-claude-code.md",
     "research/openharness.md",
     "src/src/architect-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness",
   "repo": "harness",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/harness/harness",
   "lang": null,
   "branch": "main",
   "dirty": 23,
   "lastCommit": "2026-04-07",
   "lastActivity": "2026-04-07",
   "daysSince": 138,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\harness",
    "github": "https://github.com/harness/harness",
    "wiki": [
     "CLAUDE.md",
     "concepts/agent-lifecycle.md",
     "concepts/agent-memory-rag.md",
     "concepts/agent-orchestration.md",
     "concepts/agentic-harness-engineering.md",
     "concepts/ai-app-builder-six-axis-decomposition.md",
     "concepts/ai-pr-measurement-pitfalls.md",
     "concepts/artifact-drop-librarian-hook.md"
    ],
    "launch": null,
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\legacy\\harness-competition\\harness-kakao"
   ]
  },
  {
   "name": "everything-claude-code",
   "repo": "everything-claude-code",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/affaan-m/everything-claude-code",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-07",
   "lastActivity": "2026-04-07",
   "daysSince": 138,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\everything-claude-code",
    "github": "https://github.com/affaan-m/everything-claude-code",
    "wiki": [
     "entities/ai-benchmark-repos/affaan-m__everything-claude-code.md",
     "internal/ai-benchmark-harness/harness-learning-log.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/everything-claude-code.md",
     "research/harness-revfactory.md",
     "research/openharness.md",
     "src/src/architect-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "superpowers",
   "repo": "superpowers",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/obra/superpowers.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-06",
   "lastActivity": "2026-04-06",
   "daysSince": 139,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\superpowers",
    "github": "https://github.com/obra/superpowers",
    "wiki": [
     "concepts/ratchet-decision-application-lag.md",
     "concepts/standing-resolution-pattern.md",
     "entities/agno-agentos.md",
     "entities/attune-article.md",
     "entities/claude-os.md",
     "entities/genspark.md",
     "entities/gstack.md",
     "entities/launch-deck.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "autoagent",
   "repo": "autoagent",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/kevinrgu/autoagent",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-03",
   "lastActivity": "2026-04-03",
   "daysSince": 142,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\autoagent",
    "github": "https://github.com/kevinrgu/autoagent",
    "wiki": [
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/autoagent.md",
     "src/src/architect-analysis.md",
     "src/src/deep-research-report.md",
     "src/src/dx-analysis.md",
     "src/src/security-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "prompt-learning",
   "repo": "prompt-learning",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/Arize-ai/prompt-learning",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-01",
   "lastActivity": "2026-04-01",
   "daysSince": 144,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\prompt-learning",
    "github": "https://github.com/Arize-ai/prompt-learning",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "paperclip",
   "repo": "paperclip",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/paperclipai/paperclip",
   "lang": null,
   "branch": "master",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\paperclip",
    "github": "https://github.com/paperclipai/paperclip",
    "wiki": [
     "entities/paperclip.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-ops",
   "repo": "harness-ops",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-ops.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-ops",
    "github": "https://github.com/mqzkim/harness-ops",
    "wiki": [
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "entities/harness-lab.md",
     "entities/harness-ops.md",
     "internal/helix-co.md",
     "internal/issue-sync-pipeline.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-lab",
   "repo": "harness-lab",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-lab.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-lab",
    "github": "https://github.com/mqzkim/harness-lab",
    "wiki": [
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "entities/harness-lab.md",
     "entities/harness-ops.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-ir",
   "repo": "harness-ir",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-ir.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-ir",
    "github": "https://github.com/mqzkim/harness-ir",
    "wiki": [
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "entities/harness-infra.md",
     "entities/harness-ir.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "_librarian/lint-queue.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-eval",
   "repo": "harness-eval",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-eval.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-eval",
    "github": "https://github.com/mqzkim/harness-eval",
    "wiki": [
     "concepts/agent-lifecycle.md",
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "entities/harness-ir.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "src/src/vault-migration/concepts/agent-lifecycle.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "harness-biz",
   "repo": "harness-biz",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/harness-biz.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-30",
   "lastActivity": "2026-03-30",
   "daysSince": 146,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-biz",
    "github": "https://github.com/mqzkim/harness-biz",
    "wiki": [
     "entities/harness-biz.md",
     "entities/harness-eval.md",
     "internal/lint/karpathy-purity-lint-report-2026-04-25.md",
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "lm-evaluation-harness",
   "repo": "lm-evaluation-harness",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/EleutherAI/lm-evaluation-harness",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-03-18",
   "lastActivity": "2026-03-18",
   "daysSince": 158,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\lm-evaluation-harness",
    "github": "https://github.com/EleutherAI/lm-evaluation-harness",
    "wiki": [
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/autoagent.md",
     "research/bigcode-evaluation-harness.md",
     "research/lm-evaluation-harness.md",
     "src/src/architect-analysis.md",
     "src/src/deep-research-report.md",
     "src/src/dx-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "claude-code-harness",
   "repo": "claude-code-harness",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/revfactory/claude-code-harness",
   "lang": null,
   "branch": "main",
   "dirty": 39,
   "lastCommit": "2026-03-06",
   "lastActivity": "2026-03-06",
   "daysSince": 170,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\claude-code-harness",
    "github": "https://github.com/revfactory/claude-code-harness",
    "wiki": [
     "entities/claude-code-harness.md",
     "internal/workspace-legacy-archive-2026-04-16.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "claude-os",
   "repo": "claude-os",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": false,
   "mine": false,
   "remote": "https://github.com/brobertsaz/claude-os",
   "lang": null,
   "branch": "main",
   "dirty": 4,
   "lastCommit": "2026-02-06",
   "lastActivity": "2026-02-06",
   "daysSince": 198,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\workspace\\claude-os",
    "github": "https://github.com/brobertsaz/claude-os",
    "wiki": [
     "concepts/oss-windows-porting-patterns.md",
     "entities/claude-os.md",
     "entities/superpowers.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "bigcode-evaluation-harness",
   "repo": "bigcode-evaluation-harness",
   "displayName": null,
   "desc": null,
   "category": "reference",
   "significance": 2,
   "hidden": true,
   "scaffold": false,
   "legacy": true,
   "mine": false,
   "remote": "https://github.com/bigcode-project/bigcode-evaluation-harness",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2025-07-22",
   "lastActivity": "2025-07-22",
   "daysSince": 397,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\bigcode-evaluation-harness",
    "github": "https://github.com/bigcode-project/bigcode-evaluation-harness",
    "wiki": [
     "internal/temporal-truth-contract-plan.md",
     "internal/workspace-legacy-archive-2026-04-16.md",
     "research/bigcode-evaluation-harness.md",
     "research/lm-evaluation-harness.md",
     "src/src/architect-analysis.md",
     "src/src/deep-research-report.md",
     "src/src/dx-analysis.md",
     "src/src/security-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "cafe-review-reply-generator",
   "repo": "cafe-review-reply-generator",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/cafe-review-reply-generator.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-05-08",
   "lastActivity": "2026-05-08",
   "daysSince": 107,
   "gh": {
    "url": "https://github.com/mqzkim/cafe-review-reply-generator",
    "private": true,
    "pushedAt": "2026-05-08",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-08",
      "message": "chore(coverage): ratchet content/verticals/laundry.ts to 100%"
     },
     {
      "date": "2026-05-08",
      "message": "chore(coverage): ratchet content/verticals/laborattorney.ts to 100%"
     },
     {
      "date": "2026-05-08",
      "message": "chore(coverage): ratchet content/verticals/kids-cafe.ts to 100%"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\cafe-review-reply-generator",
    "github": "https://github.com/mqzkim/cafe-review-reply-generator",
    "wiki": [
     "concepts/content-registry-parametric-route.md",
     "_librarian/lint-queue.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "hermes-agent",
   "repo": "hermes-agent",
   "displayName": null,
   "desc": "The agent that grows with you",
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "Python",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-05-03",
   "daysSince": 112,
   "gh": {
    "url": "https://github.com/mqzkim/hermes-agent",
    "private": false,
    "pushedAt": "2026-05-03",
    "recent": [],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/hermes-agent",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/hermes-agent",
    "wiki": [
     "entities/ai-benchmark-repos/JPeetz__Hermes-Studio.md",
     "entities/ai-benchmark-repos/swarmclawai__swarmclaw.md"
    ],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "mqzkim.github.io",
   "repo": "mqzkim.github.io",
   "displayName": null,
   "desc": null,
   "category": "landing-docs",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "Astro",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-05-02",
   "daysSince": 113,
   "gh": {
    "url": "https://github.com/mqzkim/mqzkim.github.io",
    "private": false,
    "pushedAt": "2026-05-02",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-02",
      "message": "Add web app manifest discovery"
     },
     {
      "date": "2026-05-01",
      "message": "Add robots meta to launched pages"
     },
     {
      "date": "2026-05-01",
      "message": "Add sitemap lastmod metadata"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/mqzkim.github.io",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/mqzkim.github.io",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "hermes-agent-board",
   "repo": "hermes-agent-board",
   "displayName": null,
   "desc": null,
   "category": "harness-ai-infra",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "JavaScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-05-01",
   "daysSince": 114,
   "gh": {
    "url": "https://github.com/mqzkim/hermes-agent-board",
    "private": true,
    "pushedAt": "2026-05-01",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-05-01",
      "message": "feat: show benchmark action plan"
     },
     {
      "date": "2026-05-01",
      "message": "docs: record enterprise evolution next steps"
     },
     {
      "date": "2026-05-01",
      "message": "feat: expose enterprise evolution run endpoint"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/hermes-agent-board",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/hermes-agent-board",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "tuist",
   "repo": "tuist",
   "displayName": null,
   "desc": "Your platform team, as a service",
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "Swift",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-04-30",
   "daysSince": 115,
   "gh": {
    "url": "https://github.com/mqzkim/tuist",
    "private": false,
    "pushedAt": "2026-04-30",
    "recent": [],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/tuist",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/tuist",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "helix-space",
   "repo": "helix-space",
   "displayName": null,
   "desc": null,
   "category": "harness-ai-infra",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/helix-space.git",
   "lang": "Rust",
   "branch": "main",
   "dirty": 5,
   "lastCommit": "2026-04-21",
   "lastActivity": "2026-04-21",
   "daysSince": 124,
   "gh": {
    "url": "https://github.com/mqzkim/helix-space",
    "private": true,
    "pushedAt": "2026-04-21",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-21",
      "message": "Improve supervisor prompt injection"
     },
     {
      "date": "2026-04-21",
      "message": "Initial commit"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\helix-space",
    "github": "https://github.com/mqzkim/helix-space",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "beautify-me",
   "repo": "beautify-me",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/beautify-me.git",
   "lang": "Python",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-19",
   "lastActivity": "2026-04-19",
   "daysSince": 126,
   "gh": {
    "url": "https://github.com/mqzkim/beautify-me",
    "private": true,
    "pushedAt": "2026-04-19",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-19",
      "message": "Merge pull request #1 from mqzkim/codex/create-technical-specificatio…"
     },
     {
      "date": "2026-04-19",
      "message": "Harden architecture with strict linting, deterministic logic, and 100…"
     },
     {
      "date": "2026-04-19",
      "message": "Initialize repository"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\beautify-me",
    "github": "https://github.com/mqzkim/beautify-me",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "llm-usage",
   "repo": "llm-usage",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "C#",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-04-18",
   "daysSince": 127,
   "gh": {
    "url": "https://github.com/mqzkim/llm-usage",
    "private": true,
    "pushedAt": "2026-04-18",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-18",
      "message": "Add installable Windows widget packaging scripts"
     },
     {
      "date": "2026-04-18",
      "message": "Add Windows widget provider telemetry pipeline"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/llm-usage",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/llm-usage",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "roastsmysite",
   "repo": "roastsmysite",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "TypeScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-04-18",
   "daysSince": 127,
   "gh": {
    "url": "https://github.com/mqzkim/roastsmysite",
    "private": true,
    "pushedAt": "2026-04-18",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-18",
      "message": "docs: sync backlog with shipped work"
     },
     {
      "date": "2026-04-18",
      "message": "harden gumroad token verification"
     },
     {
      "date": "2026-04-18",
      "message": "M-1: stream remaining persona unlocks through one verify request"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/roastsmysite",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/roastsmysite",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "briefme",
   "repo": "briefme",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/briefme.git",
   "lang": "Python",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-18",
   "lastActivity": "2026-04-18",
   "daysSince": 127,
   "gh": {
    "url": "https://github.com/mqzkim/briefme",
    "private": true,
    "pushedAt": "2026-04-18",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-18",
      "message": "chore: auto-commit from Claude Code session"
     },
     {
      "date": "2026-04-17",
      "message": "chore: auto-commit from Claude Code session"
     },
     {
      "date": "2026-04-17",
      "message": "fix(verify_citations): add type annotation on json.loads result (#27)"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\briefme",
    "github": "https://github.com/mqzkim/briefme",
    "wiki": [
     "concepts/yaml-heredoc-indent-collision.md",
     "internal/discord-failure-pattern-analysis.md",
     "internal/temporal-truth-contract-plan.md",
     "raw_sources/internal/discord-failure-pattern-analysis.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "community-growth-hacker",
   "repo": "community-growth-hacker",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/community-growth-hacker.git",
   "lang": null,
   "branch": "codex/ian-40-evidence-relevance-gate",
   "dirty": 7,
   "lastCommit": "2026-04-16",
   "lastActivity": "2026-04-16",
   "daysSince": 129,
   "gh": {
    "url": "https://github.com/mqzkim/community-growth-hacker",
    "private": true,
    "pushedAt": "2026-04-16",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-16",
      "message": "Initial commit: community-growth-hacker v0-v4 drafts"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\community-growth-hacker",
    "github": "https://github.com/mqzkim/community-growth-hacker",
    "wiki": [
     "concepts/critic-blind-spots.md",
     "concepts/critic-priority-synthesis.md",
     "concepts/evidence-relevance-gate.md",
     "concepts/harness-promotion-trigger.md",
     "concepts/judge-contrastive-reevaluation.md",
     "concepts/ratchet-diversification-pivot.md",
     "concepts/rubric-ceiling-generic-troubleshooting.md",
     "concepts/smallest-ratchet-conditional-relaxation.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "gst",
   "repo": "gst",
   "displayName": null,
   "desc": null,
   "category": "legacy",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": true,
   "mine": true,
   "remote": "https://github.com/mqzkim/gst.git",
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-04-13",
   "lastActivity": "2026-04-13",
   "daysSince": 132,
   "gh": {
    "url": "https://github.com/mqzkim/gst",
    "private": true,
    "pushedAt": "2026-04-12",
    "openIssues": 0,
    "commits30d": 0,
    "recent": [
     {
      "date": "2026-04-12",
      "message": "Initial commit"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\gst",
    "github": "https://github.com/mqzkim/gst",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  }
 ]
};
if (typeof module !== "undefined" && module.exports) module.exports = CC_PROJECTS;
