// 자동 생성 — build-projects.mjs (로컬 클론 스캔 + projects-raw.json(gh) + .launch/launch-status.json + ~/.wiki 링크)
// 생성: 2026-09-20 22:31Z · 수동 편집 금지 (보정은 projects.overrides.json, 재생성: node build-projects.mjs)
const CC_PROJECTS = {
 "generatedAt": "2026-09-20 22:31Z",
 "roots": [
  "C:\\workspace",
  "C:\\Users\\my\\workspace"
 ],
 "ghSnapshot": "2026-09-20T21:03:21.533Z",
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
  "total": 72,
  "hidden": 24,
  "toss": 20,
  "active30d": 27,
  "tossWithBlockers": 12,
  "tossFromLaunchStatus": 17,
  "byCategory": {
   "harness-ai-infra": 5,
   "knowledge-wiki": 1,
   "side-project": 17,
   "apps-in-toss": 20,
   "landing-docs": 3,
   "legacy": 26
  },
  "byStage": {
   "mvp_prd": 3,
   "store_assets": 3,
   "registration_draft": 4,
   "sandbox_qa": 5,
   "released": 2,
   "unverified": 3
  },
  "tossUnverified": 3,
  "dirty": 19
 },
 "items": [
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
   "mine": true,
   "remote": "https://github.com/mqzkim/hermes-shared-knowledge.git",
   "lang": "TeX",
   "branch": "main",
   "dirty": 2,
   "lastCommit": "2026-09-21",
   "lastActivity": "2026-09-21",
   "daysSince": 0,
   "gh": {
    "url": "https://github.com/mqzkim/hermes-shared-knowledge",
    "private": true,
    "pushedAt": "2026-09-20",
    "openIssues": 0,
    "commits30d": 206,
    "recent": [
     {
      "date": "2026-09-20",
      "message": "ops: refresh sena-1 telemetry metrics"
     },
     {
      "date": "2026-09-20",
      "message": "ops: refresh sena-1 telemetry metrics"
     },
     {
      "date": "2026-09-20",
      "message": "ops: refresh sena-1 telemetry metrics"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\hermes-shared-knowledge",
    "github": "https://github.com/mqzkim/hermes-shared-knowledge",
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "wiki-android-qa-evidence-20260911",
   "repo": "llm-wiki",
   "displayName": null,
   "desc": null,
   "category": "knowledge-wiki",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/llm-wiki.git",
   "lang": "JavaScript",
   "branch": "codex/android-qa-evidence-20260911",
   "dirty": 0,
   "lastCommit": "2026-09-12",
   "lastActivity": "2026-09-20",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/llm-wiki",
    "private": true,
    "pushedAt": "2026-09-20",
    "openIssues": 0,
    "commits30d": 101,
    "recent": [
     {
      "date": "2026-09-20",
      "message": "knowledge: add windows scheduled task hidden launch recovery"
     },
     {
      "date": "2026-09-14",
      "message": "knowledge: update immutable portfolio audit verification"
     },
     {
      "date": "2026-09-14",
      "message": "knowledge: update portfolio repair evidence boundaries"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\wiki-android-qa-evidence-20260911",
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
   "altPaths": [
    "C:\\Users\\my\\workspace\\wiki-classification-history-20260912",
    "C:\\Users\\my\\workspace\\wiki-local-runner-20260912",
    "C:\\Users\\my\\workspace\\wiki-qa-standing-authorization",
    "C:\\Users\\my\\workspace\\wiki-serial-review-20260912"
   ]
  },
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
   "dirty": 7,
   "lastCommit": "2026-09-20",
   "lastActivity": "2026-09-20",
   "daysSince": 1,
   "gh": {
    "url": "https://github.com/mqzkim/command-center",
    "private": false,
    "pushedAt": "2026-09-19",
    "openIssues": 0,
    "commits30d": 101,
    "recent": [
     {
      "date": "2026-09-19",
      "message": "evolve(2026-09-20): ledger commit sha 5a7e202 + gates G1~G4 증거 기입"
     },
     {
      "date": "2026-09-19",
      "message": "evolve(2026-09-20): arabold/docs-mcp-server 지식화(c) — ~/.wiki entity 신…"
     },
     {
      "date": "2026-09-18",
      "message": "evolve(2026-09-19): ledger commit sha feb03cc + gates G1~G4 증거 기입"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\workspace\\command-center",
    "github": "https://github.com/mqzkim/command-center",
    "wiki": [
     "concepts/agent-memory-rag.md",
     "concepts/agentic-harness-engineering.md",
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "concepts/balanced-coupling.md",
     "concepts/computer-use-browser-agents.md",
     "concepts/derived-mirror-index-sync-contract.md",
     "concepts/discord-bot-ecosystem.md",
     "concepts/git-subdirectory-remote-detection-pitfall.md"
    ],
    "launch": null,
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
   "lastActivity": "2026-09-13",
   "daysSince": 8,
   "gh": {
    "url": "https://github.com/mqzkim/today-task",
    "private": true,
    "pushedAt": "2026-09-13",
    "openIssues": 4,
    "commits30d": 0,
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
     "concepts/nomic-embed-korean-field-search-limitation.md",
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
   "lastActivity": "2026-09-13",
   "daysSince": 8,
   "gh": {
    "url": "https://github.com/mqzkim/nailmap",
    "private": true,
    "pushedAt": "2026-09-13",
    "openIssues": 16,
    "commits30d": 0,
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
     "concepts/native-date-input-visual-verification.md",
     "concepts/serial-app-review-completion.md",
     "entities/launch-deck.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\nailmap\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "ait-local-runner-20260912",
   "repo": "app-in-toss",
   "displayName": "app-in-toss (모노레포)",
   "desc": "앱인토스 모노레포 워크스페이스 — 서브앱 8개(croco-fishing·daesin-meogeo·haru-han-tem·pet-rock·upperant·diamond-gather·coffee·bamti/naeheunjeok 사본). 루트 launch-status는 악어밥 낚시왕 import 잔재",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/app-in-toss.git",
   "lang": "JavaScript",
   "branch": "codex/daesin-review-receipt-20260912",
   "dirty": 0,
   "lastCommit": "2026-09-12",
   "lastActivity": "2026-09-13",
   "daysSince": 8,
   "gh": {
    "url": "https://github.com/mqzkim/app-in-toss",
    "private": true,
    "pushedAt": "2026-09-13",
    "openIssues": 59,
    "commits30d": 463,
    "recent": [
     {
      "date": "2026-09-12",
      "message": "Merge pull request #148 from mqzkim/codex/daesin-review-receipt-20260912"
     },
     {
      "date": "2026-09-12",
      "message": "chore(daesin-meogeo): reconcile completed phase history index"
     },
     {
      "date": "2026-09-12",
      "message": "chore(daesin-meogeo): record accepted console review"
     }
    ],
    "issueTitles": [
     "[diamond-get][BL-017] 사용자 간 랭킹",
     "[diamond-get][BL-016] 번들 코드 스플리팅",
     "[diamond-get][BL-015] Sentry 연동",
     "[diamond-get][BL-014] 광고 시간당 rate-limit 정교화",
     "[diamond-get][BL-013] 관리자 리포트",
     "[diamond-get][BL-012] 글로벌 일일 예산 자동 제어"
    ]
   },
   "toss": {
    "source": null,
    "appName": "ait-local-runner-20260912",
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
     "ddasa.ait 번들 존재 (앱 디렉토리)",
     "docs/ 존재",
     "gh 파일 트리: .launch, ddasa.ait, docs, docs/GATES.md, docs/README.md, docs/architecture"
    ]
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912",
    "github": "https://github.com/mqzkim/app-in-toss",
    "wiki": [
     "concepts/apps-in-toss-front-loaded-launch-contract.md",
     "concepts/classification-evidence-history-boundary.md",
     "concepts/claude-md-import-context-tax.md",
     "concepts/git-subdirectory-remote-detection-pitfall.md",
     "concepts/local-self-hosted-ci-boundary.md",
     "concepts/monorepo-commit-qa-boundary.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": null,
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings",
    "C:\\Users\\my\\workspace\\all-app-qa-map",
    "C:\\Users\\my\\workspace\\app-in-toss",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix",
    "C:\\Users\\my\\workspace\\sdk-340-deploy",
    "C:\\Users\\my\\workspace\\sdk-340-receipts",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport",
    "C:\\Users\\my\\workspace\\upperant-modal-regression",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile"
   ]
  },
  {
   "name": "seoul-house-from-space",
   "repo": "seoul-house-from-space",
   "displayName": null,
   "desc": "Prepare 서울에 집 사기 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/seoul-house-from-space.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-07-15",
   "lastActivity": "2026-09-12",
   "daysSince": 9,
   "gh": {
    "url": "https://github.com/mqzkim/seoul-house-from-space",
    "private": true,
    "pushedAt": "2026-09-12",
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
     "concepts/nomic-embed-korean-field-search-limitation.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\seoul-house-from-space\\.launch\\launch-status.json",
    "parent": null
   }
  },
  {
   "name": "daesin-meogeo",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-09-12",
   "daysSince": 9,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\daesin-meogeo\\.launch\\launch-status.json",
    "appName": "daesin-meogeo",
    "displayName": null,
    "stage": "released",
    "stageKo": "출시",
    "nextCheck": "released",
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
      "st": "pass"
     },
     {
      "s": "release_gate",
      "st": "pass"
     },
     {
      "s": "released",
      "st": "pending"
     }
    ],
    "blockersOpen": 0,
    "blockersTotal": 4,
    "blockers": [],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-12",
    "goal": null
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\daesin-meogeo",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\daesin-meogeo\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\daesin-meogeo",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\daesin-meogeo"
   ]
  },
  {
   "name": "diamond-get",
   "repo": null,
   "displayName": null,
   "desc": "Prepare diamond-gather for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-09-11",
   "daysSince": 10,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\diamond-get\\.launch\\launch-status.json",
    "appName": "diamond-get",
    "displayName": null,
    "stage": "store_assets",
    "stageKo": "스토어 에셋",
    "nextCheck": "store_assets",
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
      "st": "pending"
     },
     {
      "s": "scaffold",
      "st": "pending"
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
    "blockersOpen": 0,
    "blockersTotal": 5,
    "blockers": [],
    "classification": "non-game",
    "finalReleaseApproved": true,
    "updatedAt": "2026-09-11",
    "goal": "Prepare diamond-gather for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\diamond-get",
    "github": null,
    "wiki": [
     "concepts/android-toss-qa-evidence-pitfalls.md",
     "concepts/claude-md-import-context-tax.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\diamond-get\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\diamond-get",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\diamond-get"
   ]
  },
  {
   "name": "ddasa",
   "repo": null,
   "displayName": null,
   "desc": "Maintain ddasa in the Apps in Toss portfolio monorepo through release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-09-11",
   "daysSince": 10,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\ddasa\\.launch\\launch-status.json",
    "appName": "ddasa",
    "displayName": null,
    "stage": "store_assets",
    "stageKo": "스토어 에셋",
    "nextCheck": "store_assets",
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
      "st": "pending"
     },
     {
      "s": "local_qa",
      "st": "pending"
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
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-11",
    "goal": "Maintain ddasa in the Apps in Toss portfolio monorepo through release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\ddasa",
    "github": null,
    "wiki": [
     "concepts/android-toss-qa-evidence-pitfalls.md",
     "concepts/hosted-supabase-auth-qa-boundary.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\ddasa\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\ddasa",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\ddasa"
   ]
  },
  {
   "name": "pet-rock",
   "repo": null,
   "displayName": null,
   "desc": "Prepare pet-rock for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-09-08",
   "daysSince": 13,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\pet-rock\\.launch\\launch-status.json",
    "appName": "pet-rock",
    "displayName": null,
    "stage": "mvp_prd",
    "stageKo": "PRD",
    "nextCheck": "mvp_prd",
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
      "st": "pending"
     },
     {
      "s": "store_assets",
      "st": "pending"
     },
     {
      "s": "scaffold",
      "st": "pending"
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
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": "game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-08",
    "goal": "Prepare pet-rock for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\pet-rock",
    "github": null,
    "wiki": [
     "concepts/android-toss-qa-evidence-pitfalls.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\pet-rock\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\pet-rock",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\pet-rock"
   ]
  },
  {
   "name": "subway-timer",
   "repo": "subway-timer",
   "displayName": null,
   "desc": "지하철 도착 타이머: 자주 타는 역을 고르면 다음 열차까지 남은 시간을 바로 보여주는 앱",
   "category": "apps-in-toss",
   "significance": 4,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/subway-timer.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 1,
   "lastCommit": "2026-08-23",
   "lastActivity": "2026-08-23",
   "daysSince": 29,
   "gh": {
    "url": "https://github.com/mqzkim/subway-timer",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 9,
    "commits30d": 13,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(local_qa): test bundle, audit classification, captures"
     },
     {
      "date": "2026-08-22",
      "message": "launch(artifact): build .ait and record hash"
     },
     {
      "date": "2026-08-22",
      "message": "launch(analytics): event plan + instrumentation"
     }
    ],
    "issueTitles": [
     "[BL-009] 백그라운드 자동 갱신 주기 최적화",
     "[BL-008] 오프라인 캐시와 마지막 조회 결과 표시",
     "[BL-007] 버스 등 타 교통수단 확장",
     "[BL-006] 지각 방지 연속 기록·배지",
     "[BL-005] 홈 화면 위젯·바로가기",
     "[BL-004] 혼잡도·열차 위치 표시"
    ]
   },
   "toss": {
    "source": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\subway-timer\\.launch\\launch-status.json",
    "appName": "subway-timer",
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
    "blockersOpen": 0,
    "blockersTotal": 0,
    "blockers": [],
    "classification": "non-game",
    "finalReleaseApproved": true,
    "updatedAt": "2026-08-22",
    "goal": "지하철 도착 타이머: 자주 타는 역을 고르면 다음 열차까지 남은 시간을 바로 보여주는 앱"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\subway-timer",
    "github": "https://github.com/mqzkim/subway-timer",
    "wiki": [],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\subway-timer\\.launch\\launch-status.json",
    "parent": null
   }
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
   "lang": "Python",
   "branch": "main",
   "dirty": 1,
   "lastCommit": "2026-08-23",
   "lastActivity": "2026-08-23",
   "daysSince": 29,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 0,
    "commits30d": 56,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "plan(pipeline-c): re-verification follow-up — deploy evidence file, \\…"
     },
     {
      "date": "2026-08-22",
      "message": "gates(pipeline-c): G4 live probe writes gates/evidence/pipeline-c/nai…"
     },
     {
      "date": "2026-08-22",
      "message": "fix(proc): restore \\v1.0 in PS module path (literal 0x0B had been wri…"
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
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/bamti-translator",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 7,
    "commits30d": 0,
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
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\bamti-translator",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\bamti-translator"
   ]
  },
  {
   "name": "helix-space",
   "repo": "helix-space",
   "displayName": null,
   "desc": null,
   "category": "harness-ai-infra",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/helix-space.git",
   "lang": "Rust",
   "branch": "main",
   "dirty": 3,
   "lastCommit": "2026-09-12",
   "lastActivity": "2026-09-12",
   "daysSince": 9,
   "gh": {
    "url": "https://github.com/mqzkim/helix-space",
    "private": true,
    "pushedAt": "2026-09-12",
    "openIssues": 0,
    "commits30d": 1,
    "recent": [
     {
      "date": "2026-09-12",
      "message": "fix(supervisor): deliver role via first turn only; stop writing cwd A…"
     },
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
    "wiki": [
     "concepts/agentic-harness-engineering.md",
     "concepts/harness-engineering.md",
     "concepts/hook-system.md",
     "concepts/shared-instruction-file-role-leak.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "cafe-route-validation-v1",
   "repo": "cafe-review-reply-generator",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/cafe-review-reply-generator.git",
   "lang": "TypeScript",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-09-12",
   "lastActivity": "2026-09-12",
   "daysSince": 9,
   "gh": {
    "url": "https://github.com/mqzkim/cafe-review-reply-generator",
    "private": true,
    "pushedAt": "2026-09-12",
    "openIssues": 0,
    "commits30d": 1,
    "recent": [
     {
      "date": "2026-09-12",
      "message": "docs(claude-md): reflect shipped P1-P3, dedupe prompt rules"
     },
     {
      "date": "2026-05-08",
      "message": "chore(coverage): ratchet content/verticals/lawfirm.ts to 100%"
     },
     {
      "date": "2026-05-08",
      "message": "chore(coverage): ratchet content/verticals/laundry.ts to 100%"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\agent-workstreams\\product\\cafe-route-validation-v1",
    "github": "https://github.com/mqzkim/cafe-review-reply-generator",
    "wiki": [
     "concepts/content-registry-parametric-route.md",
     "internal/temporal-truth-contract-plan.md",
     "_librarian/lint-queue.md"
    ],
    "launch": null,
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\cafe-review-reply-generator"
   ]
  },
  {
   "name": "upperant-daily",
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
   "lastActivity": "2026-09-11",
   "daysSince": 10,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\upperant-daily\\.launch\\launch-status.json",
    "appName": "upperant-daily",
    "displayName": null,
    "stage": "mvp_prd",
    "stageKo": "PRD",
    "nextCheck": "mvp_prd",
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
      "st": "pending"
     },
     {
      "s": "store_assets",
      "st": "pending"
     },
     {
      "s": "scaffold",
      "st": "pending"
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
     "Current upperant-daily.ait upload was attempted with the existing local profile and returned HTTP 403 Forbidden. The previous private scheme is bound to older b",
     "Operator-owned customer support contact and public HTTPS privacy policy URL are required for final console submission."
    ],
    "classification": "game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-11",
    "goal": "Prepare upperant for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\upperant-daily",
    "github": null,
    "wiki": [
     "concepts/claude-md-import-context-tax.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\upperant-daily\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\upperant-daily",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\upperant-daily"
   ]
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
   "lastActivity": "2026-09-11",
   "daysSince": 10,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\haru-han-tem\\.launch\\launch-status.json",
    "appName": "haru-han-tem",
    "displayName": "하루한템",
    "stage": "mvp_prd",
    "stageKo": "PRD",
    "nextCheck": "mvp_prd",
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
      "st": "pending"
     },
     {
      "s": "store_assets",
      "st": "pending"
     },
     {
      "s": "scaffold",
      "st": "pending"
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
    "blockersOpen": 4,
    "blockersTotal": 4,
    "blockers": [
     "deploy evidence is local/placeholder validation: --allow-placeholders",
     "front env validation failed: VITE_TOSS_PROMOTION_CODE: 테스트/예시 프로모션 코드 대신 운영 프로모션 코드를 넣어야 해요. / VITE_REWARD_AD_UNIT_ID: 테스트/예시 광고 그룹 ID 대신 운영 광고 그룹 ID를 넣어야 해요. /",
     "sandbox QA result validation failed: tester: placeholder 대신 실제 QA 담당자을 넣어야 해요. / checks.homeCoreLoopVisible: 샌드박스 QA 필수 항목은 true여야 해요. / checks.clientOnlyRuntim",
     "review result validation failed: submissionId: placeholder 대신 실제 심사 제출 ID을 넣어야 해요. / submittedAt: placeholder 대신 실제 심사 제출 시각을 넣어야 해요. / submittedAt: ISO 날짜 문자열이"
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-11",
    "goal": "PRD.md 기반 Apps in Toss MVP 출시 준비와 실제 출시 진행"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\haru-han-tem",
    "github": null,
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\haru-han-tem\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\haru-han-tem",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\haru-han-tem"
   ]
  },
  {
   "name": "coffee-cant-wait",
   "repo": null,
   "displayName": null,
   "desc": "Prepare coffee-cant-wait for Apps in Toss release gate",
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
   "lastActivity": "2026-09-08",
   "daysSince": 13,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\coffee-cant-wait\\.launch\\launch-status.json",
    "appName": "coffee-cant-wait",
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
    "blockersOpen": 2,
    "blockersTotal": 6,
    "blockers": [
     "The production-code private scheme is recorded; Toss-installed-device QA evidence is still required.",
     "Open the fresh test-code private scheme in the Toss app, complete five ads and the first coffee mission, then claim 10P so the console Start button becomes enab"
    ],
    "classification": "non-game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-08",
    "goal": "Prepare coffee-cant-wait for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\coffee-cant-wait",
    "github": null,
    "wiki": [
     "concepts/android-toss-qa-evidence-pitfalls.md",
     "concepts/claude-md-import-context-tax.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\coffee-cant-wait\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\coffee-cant-wait",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\coffee-cant-wait"
   ]
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
   "lastActivity": "2026-09-07",
   "daysSince": 14,
   "gh": null,
   "toss": {
    "source": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\croco-fishing\\.launch\\launch-status.json",
    "appName": "croco-fishing",
    "displayName": "악어밥 낚시왕",
    "stage": "store_assets",
    "stageKo": "스토어 에셋",
    "nextCheck": "store_assets",
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
      "st": "pending"
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
    "blockersOpen": 2,
    "blockersTotal": 3,
    "blockers": [
     "Support contact, privacy policy URL, and console authority are not provided yet.",
     "게임 앱 콘솔 등록과 출시 전에 유효한 게임물 등급분류 증거가 필요해요."
    ],
    "classification": "game",
    "finalReleaseApproved": false,
    "updatedAt": "2026-09-07",
    "goal": "Prepare 악어밥 낚시왕 for Apps in Toss release gate"
   },
   "links": {
    "local": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\croco-fishing",
    "github": null,
    "wiki": [
     "concepts/claude-md-import-context-tax.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\croco-fishing\\.launch\\launch-status.json",
    "parent": "ait-local-runner-20260912"
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\croco-fishing",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\croco-fishing"
   ]
  },
  {
   "name": "launch-deck-gtest-fe1e2bc1",
   "repo": "launch-deck-gtest-fe1e2bc1",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck-gtest-fe1e2bc1",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 1,
    "commits30d": 2,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(mvp_prd): live checkpoint"
     },
     {
      "date": "2026-08-22",
      "message": "launch(repo_bootstrap): import idea artifacts"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck-gtest-fe1e2bc1",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/launch-deck-gtest-fe1e2bc1",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "launch-deck-gtest-0a2ab922",
   "repo": "launch-deck-gtest-0a2ab922",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck-gtest-0a2ab922",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 1,
    "commits30d": 2,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(mvp_prd): live checkpoint"
     },
     {
      "date": "2026-08-22",
      "message": "launch(repo_bootstrap): import idea artifacts"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck-gtest-0a2ab922",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/launch-deck-gtest-0a2ab922",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "launch-deck-gtest-165ccf97",
   "repo": "launch-deck-gtest-165ccf97",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck-gtest-165ccf97",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 1,
    "commits30d": 2,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(mvp_prd): live checkpoint"
     },
     {
      "date": "2026-08-22",
      "message": "launch(repo_bootstrap): import idea artifacts"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck-gtest-165ccf97",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/launch-deck-gtest-165ccf97",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "launch-deck-gtest-smoke",
   "repo": "launch-deck-gtest-smoke",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck-gtest-smoke",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 2,
    "commits30d": 4,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(store_assets): draft console asset package"
     },
     {
      "date": "2026-08-22",
      "message": "launch(mvp_prd): lock MVP scope and mirror backlog issues"
     },
     {
      "date": "2026-08-22",
      "message": "launch(repo_bootstrap): record repository evidence"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck-gtest-smoke",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/launch-deck-gtest-smoke",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "launch-deck-gtest-4c3f5fea",
   "repo": "launch-deck-gtest-4c3f5fea",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 3,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": null,
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-08-22",
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/launch-deck-gtest-4c3f5fea",
    "private": true,
    "pushedAt": "2026-08-22",
    "openIssues": 1,
    "commits30d": 2,
    "recent": [
     {
      "date": "2026-08-22",
      "message": "launch(mvp_prd): live checkpoint"
     },
     {
      "date": "2026-08-22",
      "message": "launch(repo_bootstrap): import idea artifacts"
     }
    ],
    "issueTitles": []
   },
   "toss": null,
   "mine": true,
   "remote": "https://github.com/mqzkim/launch-deck-gtest-4c3f5fea",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/launch-deck-gtest-4c3f5fea",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "noLocal": true
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
   "name": "daesin-policy-site",
   "repo": null,
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": null,
   "lang": null,
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-09-11",
   "lastActivity": "2026-09-11",
   "daysSince": 10,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\daesin-policy-site",
    "github": null,
    "wiki": [],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "agent-factory",
   "repo": "agent-factory",
   "displayName": null,
   "desc": null,
   "category": "harness-ai-infra",
   "significance": 2,
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
   "daysSince": 30,
   "gh": {
    "url": "https://github.com/mqzkim/agent-factory",
    "private": true,
    "pushedAt": "2026-08-01",
    "openIssues": 0,
    "commits30d": 0,
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
   "name": "naeheunjeok",
   "repo": "naeheunjeok",
   "displayName": null,
   "desc": "Prepare naeheunjeok for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 2,
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
   "daysSince": 33,
   "gh": {
    "url": "https://github.com/mqzkim/naeheunjeok",
    "private": true,
    "pushedAt": "2026-08-19",
    "openIssues": 8,
    "commits30d": 0,
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
     "concepts/nomic-embed-korean-field-search-limitation.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": "C:\\Users\\my\\workspace\\apps-in-toss-projects\\naeheunjeok\\.launch\\launch-status.json",
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\all-app-qa-findings\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\all-app-qa-map\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\app-in-toss\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\ait-local-runner-20260912\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\bamti-native-qa-profile\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\pet-qa-ci-contract\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\qa-deploy-doc-checkpoint\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\qa-sdk-contract-fix\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\sdk-340-deploy\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\sdk-340-receipts\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\upperant-feedback-fixture\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\upperant-feedback-qa\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\upperant-feedback-viewport\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\upperant-modal-regression\\apps\\naeheunjeok",
    "C:\\Users\\my\\workspace\\upperant-native-qa-profile\\apps\\naeheunjeok"
   ]
  },
  {
   "name": "kid-cheer-call",
   "repo": "kid-cheer-call",
   "displayName": null,
   "desc": "Prepare 꼬마응원전화 for Apps in Toss release gate",
   "category": "apps-in-toss",
   "significance": 2,
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
   "daysSince": 41,
   "gh": {
    "url": "https://github.com/mqzkim/kid-cheer-call",
    "private": true,
    "pushedAt": "2026-08-11",
    "openIssues": 7,
    "commits30d": 0,
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
   "significance": 2,
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
   "daysSince": 49,
   "gh": {
    "url": "https://github.com/mqzkim/eomma-choiae",
    "private": true,
    "pushedAt": "2026-08-03",
    "openIssues": 7,
    "commits30d": 0,
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
   "name": "nail-map",
   "repo": "nail-map",
   "displayName": null,
   "desc": null,
   "category": "side-project",
   "significance": 2,
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
   "daysSince": 56,
   "gh": {
    "url": "https://github.com/mqzkim/nail-map",
    "private": true,
    "pushedAt": "2026-07-27",
    "openIssues": 0,
    "commits30d": 0,
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
   "daysSince": 57,
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
   "daysSince": 68,
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
   "daysSince": 72,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\goose",
    "github": "https://github.com/aaif-goose/goose",
    "wiki": [
     "concepts/ai-pr-measurement-pitfalls.md",
     "concepts/llm-pr-merge-trust-boundary.md",
     "concepts/provider-smoke-sentinel-validation.md",
     "entities/agent-device.md",
     "entities/ai-benchmark-repos/aaif-goose__goose.md",
     "entities/failproofai.md",
     "entities/headroom.md",
     "entities/ouroboros.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "diamond-gather",
   "repo": "diamond-gather",
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "TypeScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-06",
   "daysSince": 77,
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
    "source": null,
    "appName": "diamond-get",
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
    "note": "로컬 클론 없음 · launch-status.json 확인 불가 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "gh 파일 트리: docs, docs/ARCHITECTURE.md, docs/BACKLOG.md, docs/MVP-SCOPE.md, docs/RUNBOOK.md, docs/skills"
    ]
   },
   "mine": true,
   "remote": "https://github.com/mqzkim/diamond-gather",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/diamond-gather",
    "wiki": [
     "internal/command-center-project-registry.md"
    ],
    "launch": null,
    "parent": null
   },
   "noLocal": true
  },
  {
   "name": "coffee",
   "repo": "coffee",
   "displayName": null,
   "desc": null,
   "category": "apps-in-toss",
   "significance": 2,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "lang": "TypeScript",
   "branch": null,
   "dirty": null,
   "lastCommit": null,
   "lastActivity": "2026-07-06",
   "daysSince": 77,
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
    "note": "로컬 클론 없음 · launch-status.json 확인 불가 — 단계는 미확정. 확정하려면 apps-in-toss-launcher로 .launch/launch-status.json을 생성해야 함",
    "evidence": [
     "gh 파일 트리: plans"
    ]
   },
   "mine": true,
   "remote": "https://github.com/mqzkim/coffee",
   "links": {
    "local": null,
    "github": "https://github.com/mqzkim/coffee",
    "wiki": [
     "concepts/android-toss-qa-evidence-pitfalls.md",
     "concepts/claude-md-import-context-tax.md",
     "internal/command-center-project-registry.md"
    ],
    "launch": null,
    "parent": null
   },
   "noLocal": true
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
   "daysSince": 78,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\TradingAgents",
    "github": "https://github.com/TauricResearch/TradingAgents",
    "wiki": [
     "entities/ai-benchmark-repos/TauricResearch__TradingAgents.md",
     "internal/ai-benchmark-harness-repo-index.md",
     "internal/windows-scheduled-task-hidden-launch-20260921.md",
     "research/financial-signal-persistence-statistical-design.md",
     "research/tradingagents-alpaca-integration.md",
     "research/tradingagents-paper-order-serialization-audit-2026-08-25.md",
     "research/windows-task-scheduler-hidden-console-window.md"
    ],
    "launch": null,
    "parent": null
   }
  },
  {
   "name": "validation-korean-review-tone-kit-v1",
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
   "dirty": 2,
   "lastCommit": "2026-05-08",
   "lastActivity": "2026-05-08",
   "daysSince": 136,
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
    "local": "C:\\Users\\my\\workspace\\agent-workstreams\\product\\validation-korean-review-tone-kit-v1",
    "github": "https://github.com/mqzkim/korean-review-tone-kit",
    "wiki": [],
    "launch": null,
    "parent": null
   },
   "altPaths": [
    "C:\\Users\\my\\workspace\\korean-review-tone-kit"
   ]
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
   "daysSince": 142,
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
   "daysSince": 142,
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
   "daysSince": 151,
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
   "daysSince": 157,
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
   "daysSince": 158,
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
   "daysSince": 158,
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
   "daysSince": 158,
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
   "daysSince": 159,
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
   "daysSince": 159,
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
   "daysSince": 159,
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
   "daysSince": 160,
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
   "daysSince": 161,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\super",
    "github": null,
    "wiki": [
     "concepts/claude-code-cache-write-cost-structure.md",
     "concepts/computer-use-browser-agents.md",
     "concepts/document-fork-anti-pattern-resolution.md",
     "concepts/immutable-document-append.md",
     "concepts/knowledge-pipeline.md",
     "concepts/multi-llm-capability-research-substrate.md",
     "concepts/observation-regression-gc-workflow.md",
     "concepts/ratchet-decision-application-lag.md"
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
   "daysSince": 161,
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
   "daysSince": 164,
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
   "daysSince": 164,
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
   "daysSince": 165,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\youtube",
    "github": "https://github.com/mqzkim/youtube",
    "wiki": [
     "concepts/approval-gated-profit-writing-flywheel.md",
     "entities/ai-shorts-studio.md",
     "entities/cole-medin.md",
     "entities/llm-wiki-compiler.md",
     "entities/prototype.md",
     "entities/remotion-studio.md",
     "entities/taskmaster-ai.md",
     "entities/youtube.md"
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
   "daysSince": 165,
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
   "daysSince": 165,
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
   "daysSince": 165,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-claude-framework",
    "github": "https://github.com/mqzkim/harness-claude-framework",
    "wiki": [
     "concepts/harness-engineering.md",
     "concepts/harness-recommendations-p12-p14.md",
     "concepts/observation-regression-gc-workflow.md",
     "concepts/voltagent.md",
     "entities/attune-article.md",
     "entities/claude-code-harness.md",
     "entities/clawdev-bot.md",
     "entities/harness-claude-framework.md"
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
   "daysSince": 165,
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
   "daysSince": 165,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\code-harness",
    "github": "https://github.com/mqzkim/code-harness",
    "wiki": [
     "concepts/voltagent.md",
     "entities/claude-code-harness.md",
     "entities/code-harness.md",
     "entities/continuous-claude-v3.md",
     "internal/frontmatter-v2-migration-diff-2026-04-15.md",
     "internal/helix-co.md",
     "internal/issue-sync-pipeline.md",
     "internal/temporal-truth-contract-plan.md"
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
   "daysSince": 165,
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
   "daysSince": 165,
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
   "daysSince": 166,
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
   "daysSince": 166,
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
   "daysSince": 167,
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
   "daysSince": 167,
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
   "daysSince": 167,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\harness-competition\\harness",
    "github": "https://github.com/harness/harness",
    "wiki": [
     "concepts/agent-lifecycle.md",
     "concepts/agent-memory-rag.md",
     "concepts/agent-orchestration.md",
     "concepts/agentic-harness-engineering.md",
     "concepts/ai-app-builder-six-axis-decomposition.md",
     "concepts/ai-pr-measurement-pitfalls.md",
     "concepts/artifact-drop-librarian-hook.md",
     "concepts/balanced-coupling.md"
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
   "daysSince": 167,
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
   "daysSince": 168,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\superpowers",
    "github": "https://github.com/obra/superpowers",
    "wiki": [
     "concepts/claude-code-cache-write-cost-structure.md",
     "concepts/computer-use-browser-agents.md",
     "concepts/ratchet-decision-application-lag.md",
     "concepts/self-evolving-daily-loop.md",
     "concepts/standing-resolution-pattern.md",
     "entities/agno-agentos.md",
     "entities/attune-article.md",
     "entities/claude-os.md"
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
   "daysSince": 171,
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
   "daysSince": 173,
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
   "daysSince": 175,
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
   "daysSince": 175,
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
   "daysSince": 175,
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
   "daysSince": 175,
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
   "daysSince": 175,
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
   "daysSince": 175,
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
   "daysSince": 187,
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
   "daysSince": 199,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\legacy\\claude-code-harness",
    "github": "https://github.com/revfactory/claude-code-harness",
    "wiki": [
     "entities/claude-code-harness.md",
     "entities/continuous-claude-v3.md",
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
   "dirty": 7,
   "lastCommit": "2026-02-06",
   "lastActivity": "2026-02-06",
   "daysSince": 227,
   "gh": null,
   "toss": null,
   "links": {
    "local": "C:\\workspace\\claude-os",
    "github": "https://github.com/brobertsaz/claude-os",
    "wiki": [
     "concepts/balanced-coupling.md",
     "concepts/derived-mirror-index-sync-contract.md",
     "concepts/headless-chrome-dom-error-capture.md",
     "concepts/nomic-embed-korean-field-search-limitation.md",
     "concepts/oss-windows-porting-patterns.md",
     "concepts/three-layer-knowledge-architecture.md",
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
   "daysSince": 426,
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
   "name": "seoul-house-from-space-support",
   "repo": "seoul-house-from-space-support",
   "displayName": null,
   "desc": null,
   "category": "landing-docs",
   "significance": 1,
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
   "daysSince": 71,
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
   "name": "hermes-agent",
   "repo": "hermes-agent",
   "displayName": null,
   "desc": "The agent that grows with you",
   "category": "side-project",
   "significance": 1,
   "hidden": false,
   "scaffold": false,
   "legacy": false,
   "mine": true,
   "remote": "https://github.com/mqzkim/hermes-agent.git",
   "lang": "Python",
   "branch": "main",
   "dirty": 0,
   "lastCommit": "2026-05-03",
   "lastActivity": "2026-05-03",
   "daysSince": 141,
   "gh": {
    "url": "https://github.com/mqzkim/hermes-agent",
    "private": false,
    "pushedAt": "2026-05-03",
    "recent": [],
    "issueTitles": []
   },
   "toss": null,
   "links": {
    "local": "C:\\Users\\my\\workspace\\hermes-agent",
    "github": "https://github.com/mqzkim/hermes-agent",
    "wiki": [
     "entities/ai-benchmark-repos/JPeetz__Hermes-Studio.md",
     "entities/ai-benchmark-repos/swarmclawai__swarmclaw.md",
     "internal/hermes-windows-desktop-subscription.md"
    ],
    "launch": null,
    "parent": null
   }
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
   "daysSince": 142,
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
   "daysSince": 143,
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
   "daysSince": 144,
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
   "daysSince": 155,
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
   "daysSince": 156,
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
   "daysSince": 156,
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
   "daysSince": 156,
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
   "daysSince": 158,
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
   "daysSince": 161,
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
