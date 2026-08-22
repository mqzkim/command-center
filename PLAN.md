# PLAN — Command Center ⇄ Claude OS 연계 (2026-08-23)

목표: 7766 대시보드와 claude-os(8051 API / 5173 UI / code-forge MCP)가 양방향으로 연결된 구조. Claude Code에서 하든 claude-os UI에서 하든 같은 지식에 닿는다.

## 허브 계약 (모든 리프가 따름)

- claude-os **프로젝트 `command-center`** (`POST /api/projects {name:"command-center", path:"C:\workspace\command-center"}`) — 생성 시 KB 4개 자동 생성. 부모가 fan-out 전에 1회 생성(중복 방지). 리프는 `GET /api/projects`로 id 조회만.
  | KB 이름 | 용도 | 쓰는 쪽 | 읽는 쪽 |
  |---|---|---|---|
  | `command-center-knowledge_docs` | ~/.wiki 읽기 전용 미러 | L3 (`sync-wiki-kb.mjs`) | 대시보드 검색, MCP `search_knowledge_base` |
  | `command-center-project_index` | 프로젝트 레지스트리 문서 (프로젝트당 1건, filename=`project-<name>.md`) | L2 (`sync-claude-os.mjs`) | 대시보드 상세 "Claude OS 검색", MCP |
  | `command-center-project_memories` | Claude OS `memory` 스킬의 "remember this" 저장소 | claude-os (기존 스킬) | 대시보드 드로어 "Claude OS 기억" |
  | `command-center-project_profile` | 미사용(claude-os 기본) | — | — |
- API 베이스 `http://localhost:8051`. 상태: `GET /health`, `GET /api/kb`, `GET /api/kb/{kb}/documents`, `GET /api/kb/{kb}/stats`, 검색 `POST /api/kb/search-all {query, top_k, kb_filter?}`, 업서트 = `DELETE /api/kb/{kb}/documents/{filename}`(404 무시) → `POST /api/kb/{kb}/documents/content {content, filename, metadata}`.
- CORS: `C:\workspace\claude-os\.env`의 `ALLOWED_ORIGINS`에 `http://localhost:7766,http://127.0.0.1:7766` 추가 후 `stop.ps1`→`start.ps1` 재기동. **L1만 수정**.
- `refresh-projects.ps1`: **L2만 수정**. fetch→build-projects→build-galaxy 뒤에 `sync-claude-os.mjs` 와 (파일이 존재하면) `sync-wiki-kb.mjs` 호출. 둘 다 claude-os 꺼져 있으면 exit 0 + 로그 "skipped".
- `dashboard.html`·`data.js`: **L1만 수정**. `GATES.md` 루트 파일은 부모만. 각 리프는 자기 `gates/*.md`만.
- 문서 포맷(L2 project_index): 마크다운. 첫 줄 `# <name>`, 이어서 category/stage/nextCheck/blockers/lastActivity/local/github/wiki 링크를 key: value 줄로, 마지막에 desc. 검색 시 "nailmap 블로커"로 맞는 문서가 top1이 되어야 함.
- 미러 규칙(L3): `~/.wiki/**/*.md`(node_modules·.git 제외), filename = 상대경로의 `/`→`__` 치환(`concepts__hook-system.md`). 상태 파일 `C:\workspace\command-center\state\wiki-kb-sync.json`에 {path: mtime}; 변경분만 업서트, 삭제분은 DELETE. 위키는 원본 그대로(truth는 ~/.wiki), KB는 파생물.

## 리프

| 리프 | 산출물 | 게이트 |
|---|---|---|
| L1 대시보드 ⇄ claude-os 라이브 | CORS+재기동, 갤럭시 APPLICATIONS "Claude OS" 헥사곤(라이브 health/KB), 드로어 "CLAUDE OS" 패널(상태·KB별 문서 수·기억 최근 5·검색창→search-all), 프로젝트 상세 "Claude OS 검색" 버튼, 5173 열기 | gates/l1-dashboard.md |
| L2 레지스트리 → project_index | `sync-claude-os.mjs`, refresh-projects.ps1 단계 추가, 1회 실행(62건 업서트), MCP/REST 검색 검증 | gates/l2-registry-kb.md |
| L3 위키 → knowledge_docs | `sync-wiki-kb.mjs`(증분), 초기 전량 임포트, 재실행 시 변경분만, 검색 검증 | gates/l3-wiki-kb.md |
| I 통합(부모) | 대시보드에서 검색하면 wiki 문서+프로젝트 문서가 섞여 나옴, MCP `search_knowledge_base`로 동일 결과, 스크린샷, refresh 1회 전체 실행 | GATES.md I1–I5 |

## 상태 로그
- 2026-08-23 00:30 계약 작성, 프로젝트 `command-center` 생성 예정, L1/L2/L3 병렬 fan-out.
- 2026-08-23 01:20 L3 완료(4/5). claude-os 버그 2건 발견(리스너 사망·청킹 metadata 인플레이션) → L4 `gates/l4-claude-os-patch.md` 추가(패치+전량 재임포트). L3-4는 L4 통과 후 재검증. L1·L2 진행 중.
- 2026-08-23 03:50 L1·L2·L3·L4 전부 완료(21/21), I1~I5 완료. claude-os 패치 3건(청킹 metadata 제외·ingest threadpool·search-all lexical boost) 적용, 위키 571문서 재임포트(청크 5,247→2,209). L4 agent는 세션 한도로 종료 → L4-5는 부모가 직접 재검증.
- 2026-08-23 04:25 L5(미해결 4건) 완료 6/6: metadata 저장·metadata_filter 정확 필터·레이트리밋 60/min·start.ps1 자동 sync·대시보드 단계 질의 필터. index-thin drift lint 완료.
