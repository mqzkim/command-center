# Daily Evolution Playbook — Command Center 진화 루프

> 이 문서는 매일 1회 headless Claude(`claude -p`)가 실행하는 플레이북이다.
> run-daily.ps1이 이미 health(자가치유)·trends(스캔)·빌더를 돌린 뒤 이 문서를 호출한다.
> **이 문서 자체도 진화 대상이다** — 규칙 §6에 따라 수정하라.

## 원칙

- **1회 1개선.** 매 실행 정확히 하나의 개선만 적용한다. 크면 쪼개서 오늘 몫만.
- **원장 dedup.** `evolve/state.json`의 `appliedImprovements`에 이미 있는 id(같은 repo 채택, 같은 위젯 추가 등)는 절대 반복하지 않는다. 적용 후 반드시 원장에 추가.
- **실측만.** 수치·상태는 명령으로 재측정해서 쓰고, 추정이면 "추정" 표기.
- **증거 게이트.** 개선마다 `gates/daily-YYYY-MM-DD.md`에 게이트 2~4개를 먼저 쓰고, 통과 증거를 기록한 뒤에만 완료로 친다.
- **비공개.** 이 repo는 private이다. 시크릿(키·토큰)은 어떤 파일에도 커밋 금지.

## 매일 절차

1. **상태 읽기**: `evolve/state.json`, `evolve/health-latest.json`, `evolve/trends-latest.json`.
2. **수리 우선**: `openFindings`가 비어있지 않으면 오늘의 개선 = 그 수리다. (self-heal이 못 고친 것을 고친다. 시도 후에도 못 고치면 `gh issue create -R mqzkim/command-center`로 이슈를 만들고 원장에 blocked로 기록.)
3. **트렌드 검토**: `trends-latest.json`의 candidates(이미 wiki 카탈로그·seenRepos 중복 제거됨)에서 다음 기준으로 0~1개 선정:
   - star ≥ 500이고, AI 스킬/오케스트레이션/하네스/MCP로서 오너 워크플로에 실익이 있는가
   - 기존 스킬 53종·대시보드 기능과 겹치지 않는가 (appliedImprovements 확인)
   - 선정하면: repo를 조사(README 요약)하고 다음 중 하나를 실행 —
     (a) 대시보드에 채택: 새 위젯/데이터 소스/모니터링으로 통합
     (b) 스킬로 채택: `~/.claude/skills`에 얇은 래퍼 스킬 작성
     (c) 지식화만: wiki-librarian agent를 spawn해 ~/.wiki에 ingest (대시보드 갤럭시에 자동 반영됨)
   - 후보가 전부 부적합하면 (4)로.
4. **자체 개선 백로그**: 트렌드 채택이 없으면 대시보드/자동화 자체를 1건 개선한다. 우선순위:
   모니터링 공백(아직 안 보이는 흐름) > 죽은 데이터(오래된 스냅샷) > UX 마찰 > 코드 정리.
5. **검증**: 인라인 JS 문법(vm.Script), `node evolve/health.mjs` 재실행, http 200. 실패 상태로 커밋 금지.
6. **자기진화**: `evolve/*.mjs`·이 문서·run-daily.ps1을 개선할 수 있다. 조건:
   - 수정 후 `node --check` 통과 + `node evolve/health.mjs` 통과
   - 한 실행에서 자기수정과 기능 개선을 동시에 하지 않는다 (둘 중 하나만)
   - 트렌드 스캔 쿼리·별점 기준도 여기서 조정 가능 (이유를 커밋 메시지에)
7. **기록**: state.json 갱신 — `lastRun`, `runs`에 {date, improvement, commit} append(최근 30개 유지), `appliedImprovements`에 오늘 항목 추가, `consecutiveFailures` 0으로.
8. **커밋·푸시**: `git add -A && git commit -m "evolve(YYYY-MM-DD): <개선 요약>" && git push`.

## 실패 시 (self-heal의 self-heal)

- run-daily.ps1이 `consecutiveFailures`를 관리한다. **2 이상이면**: 오늘은 개선하지 말고,
  `git log --oneline -5`에서 마지막 `evolve(` 커밋이 evolve/* 를 건드렸다면 `git revert --no-edit <sha>` 후
  health 통과를 확인하고 그것만 커밋·푸시한다. (자기수정이 루프를 망가뜨렸을 가능성이 최우선 용의)
- revert로도 안 되면 gh issue를 만들고 state.openFindings에 남긴다. 다음 사람(또는 오너)이 본다.

## 보고

실행 끝에 stdout으로 4줄 요약: 오늘의 개선 / 근거(게이트 통과 수) / 커밋 sha / 다음 후보 1줄.
