# Gates: Daily Evolution Loop (자기진화 자동화 + private GitHub)

Scope: 커맨드센터를 매일 1회 자동 개선하는 루프 — health(자가치유)→trends(star 상위 AI 스킬/오케스트레이션/하네스 스캔+dedup)→claude 헤드리스 개선 1건→git push(mqzkim private). 루프 자신도 git 이력 하에 진화.

- [ ] E1: command-center가 git repo이고 .gitignore가 wiki junction·로그·캐시를 제외하며 초기 커밋 존재
  CHECK: git -C C:/workspace/command-center check-ignore wiki && git -C C:/workspace/command-center log --oneline | head -1
  EXPECT: /wiki/
  EVIDENCE: pending

- [ ] E2: private repo mqzkim/command-center 생성·push 완료 (HEAD가 origin과 동기)
  CHECK: gh repo view mqzkim/command-center --json isPrivate -q .isPrivate
  EXPECT: true
  EVIDENCE: pending

- [ ] E3: trends.mjs 실측 — gh search로 star 상위(≥500) AI 스킬/오케스트레이션/하네스/MCP repo 수집, wiki 카탈로그(entities/ai-benchmark-repos)+state.seenRepos 대비 dedup, trends-latest.json 생성, state 갱신
  CHECK: node C:/workspace/command-center/evolve/trends.mjs
  EXPECT: /TRENDS_OK/
  EVIDENCE: pending

- [ ] E4: health.mjs — 체크 8종 이상 + 자동 복구 3종 이상(서버 재기동/junction 재생성/데이터 재빌드). 고의 장애 1종 주입 후 self-heal 실측. 미해결은 state.openFindings로 escalation
  CHECK: node C:/workspace/command-center/evolve/health.mjs
  EXPECT: /ALL_HEALTHY|HEALED/
  EVIDENCE: pending

- [ ] E5: evolve.md 플레이북 — 데일리 절차, 1회 1개선 원칙, appliedImprovements 원장 dedup, 자기수정 허용 조건(node --check+health 통과), 연속 실패 2회 시 revert 규칙 명시
  EVIDENCE: pending

- [ ] E6: Windows Task Scheduler에 데일리 작업 등록 (비관리자로 성공 여부 실측, 실패 시 시작프로그램+마지막실행일 게이트 방식 폴백)
  EVIDENCE: pending

- [ ] E7: run-daily.ps1 파이프라인 실측 — health→trends→빌더→claude 헤드리스(실호출 스모크)→commit→push 각 단계 실행 로그 확인
  EVIDENCE: pending

- [ ] E8: 통합 — 대시보드 ROUTINES(궤도·automations)에 진화 루프 반영, REFRESH.md에 EVOLVE 섹션 문서화
  EVIDENCE: pending
