# Command Center 갱신 절차

대시보드는 `data.js`만 읽는다. 갱신 = `data.js` 재생성 + `meta.lastUpdated` 갱신. HTML은 건드리지 않는다.

## 갱신 프롬프트 (Claude Code에 복붙)

```
대시보드 새로고침: C:\workspace\command-center\REFRESH.md의 스키마 계약대로
C:\workspace\command-center\data.js를 재생성해줘.
- calendar: Google Calendar MCP로 오늘~내일 이벤트 실측
- inbox: Gmail MCP "is:unread in:inbox" 실측, 액션 필요한 것만 needsYou에
- projects: C:\workspace 디스크 실측
- knowledge: ~/.wiki/index.md 카테고리 수치 실측
- automations: 세션 스킬 수 + ~/.claude/agents 실측
- artifacts: 최근 에이전트 산출물 경로
- meta.lastUpdated를 현재 KST로
재생성 후 node -e "require('C:/workspace/command-center/data.js')"로 문법 검증해줘.
```

## data.js 스키마 계약

| 키 | 형태 | 규칙 |
|---|---|---|
| `meta` | `{owner, lastUpdated, updatedBy}` | lastUpdated는 KST 문자열, 갱신마다 필수 변경 |
| `calendar` | `{snapshotRange, events[], note}` | events: `{title, time}`. 실측만, 추정 금지 |
| `inbox` | `{unreadEstimate, snapshotAt, needsYou[], rest}` | needsYou: `{subject, from, date, why}` — 액션 필요한 것만 |
| `projects` | `[{name, path, desc, status}]` | status: `active`/`idle`. 디스크 실측만 |
| `knowledge` | `{indexPath, categories[], recentNote}` | categories: `{name, count, extra?}` — index.md 실측 수치 |
| `automations` | `{skillsCount, highlights[], agents[], routines[], routinesNote}` | 미확인 항목은 빈 배열 + note로 정직하게 |
| `artifacts` | `[{name, path, date, desc}]` | path는 슬래시(`/`) 구분, file:// 링크로 열림 |

- 모든 섹션에 출처 주석(`// source:`) 유지.
- 확인 못 한 값은 지어내지 말고 빈 배열/note 처리 — 대시보드가 빈 상태를 렌더링한다.
- 파일 끝의 `module.exports` 줄은 유지 (검증용).

## 프로젝트 레지스트리 갱신 (PROJECTS 뷰)

대시보드 우상단 `▦ PROJECTS`(또는 `?view=projects`)가 읽는 `projects-data.js`는 **`build-projects.mjs`가 생성**한다. 원천 4개를 한 파일로 연결하는 구조:

| 원천 | 무엇 | 갱신 방법 |
|---|---|---|
| 로컬 클론 스캔 | `C:\workspace`, `~/workspace`(apps-in-toss-projects·app-in-toss 서브앱·legacy) depth 2 — `.git`/`.launch`/`granite.config.ts`/`apps-in-toss.config.ts` 있는 디렉토리. 브랜치·dirty·최근 커밋 | 자동 (빌더 실행 시) |
| `.launch/launch-status.json` | 앱인토스 단계(`checks` 순서·`resume.nextCheck`), 열린 블로커, 분류, updatedAt — **단계의 유일한 진실** | 자동 (런처 스킬이 씀) |
| `projects-raw.json` | gh 메타(설명·푸시·이슈·30일 커밋·최근 커밋). 없으면 로컬만으로 동작 | 아래 프롬프트로 재수집 |
| `projects.overrides.json` | 수동 보정 `{ "<name>": { significance, hidden, desc, displayName } }` — 선택 | 직접 편집 |

```
node C:\workspace\command-center\build-projects.mjs
```

gh 메타 재수집 프롬프트 (Claude Code에 복붙):

```
mqzkim 비아카이브 레포를 gh GraphQL로 조사해 C:\workspace\command-center\projects-raw.json을
{ generatedAt, repos:[{name,url,description,isPrivate,isFork,primaryLanguage,pushedAt,createdAt,
stargazerCount,openIssues,defaultBranch,recentCommits[{date,message}],commitsLast30d,isAppsInToss,
aitEvidence,category,significance,appName?,stageEstimate?,openIssueTitles?}] } 형태로 재생성한 뒤
node C:\workspace\command-center\build-projects.mjs 를 실행해줘. (apps-in-toss 판정: granite.config.ts 또는
apps-in-toss.config.ts 또는 @apps-in-toss 의존성)
```

규칙: 숨김(`hidden`)은 `*-scaffold`·mqzkim 외 remote(서드파티 레퍼런스)·프로젝트 내부 보조 디렉토리가 기본값. 단계 추정(`toss.source`가 null)은 gh 파일 존재 기반이며 상세 패널에 "추정"으로 표기된다. 새 프로젝트를 연결하려면 위 루트 중 한 곳에 클론(또는 `.launch/`를 가진 디렉토리)만 두면 다음 빌드에 자동 포함된다.

## 갤럭시 실명 목록 갱신

위키 문서가 늘거나 줄면: `node C:\workspace\command-center\build-galaxy.mjs` — ~/.wiki를 스캔해 `galaxy-data.js`(전 점의 실명 제목+경로)를 재생성한다. "대시보드 새로고침" 시 이 명령도 함께 실행할 것.

## 열기

- **상시 주소: `http://localhost:7766/dashboard.html`** — 즐겨찾기 권장.
- 서버: `run-server.vbs`가 `python -m http.server 7766`을 창 없이 실행. 로그온 시 자동 시작은 시작프로그램 폴더의 `CommandCenterServe.vbs`가 담당 (해제: 그 파일 삭제).
- 서버가 죽었을 때 수동 기동: `wscript.exe C:\workspace\command-center\run-server.vbs`
- 폴백: `file:///C:/workspace/command-center/dashboard.html` 로도 열림 (클립보드 복사 버튼은 http에서 더 안정적).

## 데일리 진화 루프 (EVOLVE)

매일 07:30 Task Scheduler(`CommandCenterEvolve`)가 `evolve\run-daily.ps1`을 실행한다:
`health.mjs`(체크 9종·자동복구 4종) → `trends.mjs`(gh search star≥500 AI 스킬/오케스트레이션/하네스/MCP, wiki 카탈로그+state.seenRepos dedup) → 빌더 재실행 → `claude -p evolve/evolve.md`(개선 정확히 1건, 게이트 증거, 원장 기록) → commit·push (**private: github.com/mqzkim/command-center**).

- 상태 원장: `evolve/state.json` (seenRepos 중복 방지·appliedImprovements·openFindings·연속 실패 카운터)
- 자기진화: 플레이북·스캐너 스스로 수정 가능 (node --check + health 통과 조건, 연속 실패 2회 시 마지막 evolve 커밋 revert)
- 수동 실행: `powershell -File C:\workspace\command-center\evolve\run-daily.ps1` · 해제: `schtasks /delete /tn CommandCenterEvolve /f`
- 로그: `evolve\logs\YYYY-MM-DD.log` (git 제외)
