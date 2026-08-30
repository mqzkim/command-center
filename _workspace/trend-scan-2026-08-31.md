# Trend Scan 2026-08-31 — vladikk/modularity · Waishnav/devspace · Spark-To-Paper-Skills/paperjury

조사 수단: `gh api repos/…`, `gh api …/git/trees/HEAD?recursive=1`, `gh api …/contents/LICENSE|SKILL.md|package.json`, `gh api search/issues`, WebFetch(raw README), `python -c yaml.safe_load` (frontmatter 검증). 네트워크 read-only, 시크릿 사용 없음.

---

## 1. vladikk/modularity — (c) 지식화 채택 · (b) 스킬/플러그인 채택은 **라이선스 사유로 보류(조건부)**

### 메타
| 항목 | 값 |
|---|---|
| ★ / forks | 526 / 32 |
| license (API) | `NOASSERTION` / "Other" → **실체는 CC BY-NC-SA 4.0** |
| 언어 | HTML 100% (6,653 bytes — 템플릿 1개). 실질은 markdown-only |
| created / pushed | 2026-03-28 / **2026-04-04** (약 5개월 정지, updated_at은 08-30 = star 이벤트) |
| 오픈 이슈 | 3 (그 중 issue 2건, 나머지 PR) |
| 플러그인 버전 | 1.5.0 (`.claude-plugin/plugin.json`) |
| topics | balanced-coupling, claude-code-plugin, claude-skills, ddd, modularity … |

### LICENSE 첫 20줄 (실측)
```
Copyright (c) 2026 Vlad Khononov

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International License.

To view a copy of this license, visit
https://creativecommons.org/licenses/by-nc-sa/4.0/

----------------------------------------------------------------------

Attribution-NonCommercial-ShareAlike 4.0 International

=======================================================================

Creative Commons Corporation ("Creative Commons") is not a law firm and
does not provide legal services or legal advice. Distribution of
Creative Commons public licenses does not create a lawyer-client or
other relationship. Creative Commons makes its licenses and related
information available on an "as-is" basis. Creative Commons gives no
warranties regarding its licenses, any material licensed under their
```
추가: 루트에 `ai.txt` (`User-Agent: * / Disallow-Training: yes`). README에도 "상업적 사용은 skill at coupling dot dev 로 연락", "ML 학습/파인튜닝 금지" 명시.

### 트리 (총 11 blobs, truncated=false)
```
.claude-plugin/{marketplace.json, plugin.json}
.gitignore  LICENSE  README.md  ai.txt
skills/balanced-coupling/SKILL.md   (user-invocable: false, 지식 스킬)
skills/design/SKILL.md              (/modularity:design)
skills/document/SKILL.md            (user-invocable: false)
skills/document/assets/template.html
skills/review/SKILL.md              (/modularity:review)
```
확장자: md 5 · json 2 · txt 1 · html 1 · gitignore 1 · noext 1

### README 요약
- 무엇: Vlad Khononov의 **Balanced Coupling 모델**(integration strength × distance × volatility, balance rule)을 Claude Code 플러그인으로 포장. `/modularity:review`(기존 코드베이스 결합도 불균형 리뷰 → md+html 리포트), `/modularity:design`(기능 요구사항 → 모듈 설계 문서 + 통합 계약 + 테스트 스펙).
- 설치: `/plugin marketplace add vladikk/modularity` → `/plugin install modularity@vladikk-modularity`, 또는 `git clone` 후 `claude --plugin-dir ./modularity`.
- 의존성: Claude Code ≥ v1.0.33. 바이너리/로그인/외부 API 없음. coupling.dev 참조 링크 정도(선택). Opus 4.5+ 권장.
- Windows: 언급 없음. markdown-only + `allowed-tools`에 Read/Grep/Glob/LSP/Write만 사용하므로 Windows 리스크 사실상 없음(훅·셸 스크립트 0건).

### SKILL.md frontmatter (4개 전문)
```yaml
# skills/balanced-coupling/SKILL.md
name: balanced-coupling
description: >
  The Balanced Coupling model for software design. Use when: designing modular architectures,
  evaluating coupling between components, reviewing code modularity, deciding whether to split
  or merge modules/services, assessing integration patterns, classifying coupling as balanced
  or unbalanced, applying DDD strategic and tactical patterns, reasoning about cohesion vs
  coupling trade-offs, identifying distributed monolith risks, or explaining why a system
  is hard to change. Provides the three-dimensional framework (integration strength, distance,
  volatility) and the balance rule for making coupling decisions.
user-invocable: false
```
```yaml
# skills/design/SKILL.md
name: design
description: >
  Designs modular high-level architectures from functional requirements and produces design
  documents for each module. Use when designing a new system, creating architecture documentation,
  or producing module-level design specs with integration contracts and test specifications.
argument-hint: "[path/to/functional-requirements.md]"
skills:
  - balanced-coupling
allowed-tools: Read, Write, Edit, AskUserQuestion, TaskCreate, TaskUpdate
```
```yaml
# skills/document/SKILL.md
name: document
description: >
  Produces modularity review documents in both Markdown and HTML formats.
  Use when writing the final review output from a modularity analysis.
user-invocable: false
allowed-tools: Read, Write
```
```yaml
# skills/review/SKILL.md
name: review
description: >
  Analyzes a codebase's modularity imbalances using the Balanced Coupling model and produces
  a review of design issues. Use when reviewing existing code for coupling problems, assessing
  architecture quality, identifying distributed monolith risks, or finding areas where changes
  are unexpectedly expensive.
skills:
  - balanced-coupling
  - document
allowed-tools: Read, Grep, Glob, LSP, AskUserQuestion, TaskCreate, TaskUpdate
```
**콜론 함정**: `balanced-coupling` description에 `Use when: ` 콜론 포함 — 그러나 `>` folded block scalar 안이므로 **YAML 안전**. 4개 모두 `yaml.safe_load` OK 실측.

### 이슈
오픈 issue 2건(전부 4월): `#5 Space is missing after number for paragraphs 4.*`, `#4 idea/question: can this plugin be used in Codex too?`. `windows OR hook OR install` 검색 0건. 설치/호환 문제 보고 없음(다만 이슈 트래픽 자체가 미미).

### 실익 판단 → **(c) 지식화 채택, (b)는 조건부 보류**
- 이유 1 (라이선스): CC BY-NC-SA 4.0은 "NonCommercial". 오너 워크플로에는 **Apps in Toss 미니앱 = 상업 배포물**이 있어 이 스킬로 미니앱 아키텍처를 리뷰/설계하면 NC 조항 해석 리스크가 생깁니다. 개인 학습·command-center 같은 비상업 프로젝트 리뷰에는 문제 없음. `ai.txt Disallow-Training`은 오너 용도와 무관(학습 아님).
- 이유 2 (신선도): 마지막 push 2026-04-04, 5개월 정지. C4 신선도 게이트 관점에서 (b) 채택 근거 약함. 다만 markdown-only 지식 스킬이라 "정지"가 곧 부패는 아님.
- 이유 3 (가치): Balanced Coupling 3차원 모델 자체는 오너의 하네스 엔지니어링·스킬 체계 설계(53종 스킬 간 결합도, wiki↔memory↔skills 경계)에 직접 적용 가능한 **개념**. `~/.wiki/concepts/balanced-coupling.md` 신규 + entity 1건이 정석.
- (b) 조건부 경로: 비상업 프로젝트 한정 `claude --plugin-dir` 임시 로드로 command-center 자체 결합도 리뷰 1회 실행 → 산출물만 wiki로 흡수. 영구 설치는 권하지 않음.

### (b) 후보 정보
- 스킬 경로: `skills/review/`, `skills/design/`(사용자 호출) + `skills/balanced-coupling/`, `skills/document/`(내부 의존). 파일 5개(위 트리).
- 기존 스킬 중복: **없음**. `~/.claude/skills` 31개 디렉토리 실측(`apps-in-toss-*` 13, `startup-*` 4, asd-ste100, skill-audit, superpowers 플러그인 등)에 아키텍처/결합도 리뷰 스킬 부재. `initialize-project`(코딩 표준·아키텍처 문서 생성)와 부분 인접하나 관점(결합도 모델)이 다름.

---

## 2. Waishnav/devspace — **(c) 지식화 채택 (아이디어 채록), (a)/(b) 기각**

### 메타
| 항목 | 값 |
|---|---|
| ★ / forks | 4,293 / 458 |
| license | MIT (LICENSE 실측 일치, 저작권자 Waishnav) |
| 언어 | TypeScript 904 KB · CSS 18 KB · JS 3 KB · HTML |
| created / pushed | 2026-06-14 / **2026-08-30** (매우 활발) |
| 오픈 이슈 | **62** |
| npm | `@waishnav/devspace` 1.0.8, engines `node >=22.19 <27`, bin `devspace`, `devspace-agentd` |

### LICENSE 첫 20줄 (실측)
```
MIT License

Copyright (c) 2026 Waishnav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
```

### 트리 (총 168 blobs, truncated=false)
최상위: `.agents/ .github/ docs/ examples/ schema/ scripts/ skills/ src/` + `.env.example AGENTS.md CONTRIBUTING.md LICENSE README.md package.json package-lock.json tsconfig*.json vite.config.ts`
확장자: **ts 115** · md 22 · svg 11 · json 5 · png 4 · yml 2 · tsx 2 · mjs 2 · html/css/gitignore/example 각 1
스킬 관련: `skills/subagents/SKILL.md` 1개, `examples/agents/*.md` 9개(claude-implementer, codex-explorer, codex-qa-tester, codex-worker, copilot-reviewer, cursor-agent-worker, grok-builder, opencode-explorer, pi-reviewer).

### README 요약
- 무엇: 로컬 머신에서 돌리는 **자체 호스팅 MCP 서버**. ChatGPT(MCP 커넥터)·Claude·Hermes·Grok Bot·OpenClaw 등 외부 채팅 클라이언트가 리버스 터널(Cloudflare Tunnel/ngrok/Pinggy/Tailscale Funnel)을 통해 내 프로젝트 폴더를 read/edit/search/exec. 비밀번호 승인 + OAuth issuer. 내부에 서브에이전트 데몬(`devspace-agentd`)이 있어 Claude Agent SDK / pi-coding-agent / OpenCode SDK / ACP로 로컬 코딩 에이전트에 작업 위임. SQLite(better-sqlite3 + drizzle) 세션 저장.
- 설치: `npm install -g @waishnav/devspace && devspace init` 또는 `npx @waishnav/devspace init` → `devspace serve`.
- 의존성: Node 22.19~26, Git, **Bash 호환 셸 필수**, 공개 HTTPS 터널(네트워크 노출 필수), 클라이언트 계정(ChatGPT 등) 로그인, 서브에이전트 사용 시 각 벤더 CLI/키. 의존성 트리에 `@anthropic-ai/claude-agent-sdk`, `@anthropic-ai/sandbox-runtime`, `@earendil-works/pi-coding-agent`, `@opencode-ai/sdk`, `@agentclientprotocol/sdk` 포함.
- Windows: README 명시 — "Linux, macOS, Windows with **Git Bash, WSL, MSYS2, or Cygwin**. Windows PowerShell or cmd.exe only는 **미지원**". 오너 환경(PowerShell 1차, Git Bash 보조)에서 동작은 가능하나 셸 의존이 있음.

### SKILL.md frontmatter (`skills/subagents/SKILL.md`)
```yaml
name: subagents
description: Delegate focused coding, research, review, or verification work to a bounded DevSpace subagent. Use when a task benefits from separate context, a specialist perspective, or a follow-up with the same worker.
```
콜론 `": "` **없음**, `safe_load` OK. 단 이 스킬은 DevSpace 서버 MCP 툴 전제라 독립 채택 불가.

### 이슈 (오픈 62, 최근 6)
- #257 [08-30] Proposal: bounded multi-file reads to reduce MCP round trips
- #256 [08-29] 24h MCP session cleanup can be outpaced by high-churn ChatGPT reconnects
- #254 [08-29] Blank images on ChatGPT webpage
- #253 [08-27] **Subagents cannot edit files with Claude Code 2.1.x — permissions.allow rules are ignored for non-Read tools**
- #252 [08-26] **fix: published CLI fails with permission denied via npx** (설치 문제)
- #251 [08-25] Agent SDK hardcoded at 0.142. GPT-5.6 models require >0.144
- `windows OR hook OR install` 검색 25건(예: #38 모든 로컬 MCP 노출 요청, #87 chatgpt workspace no actions, #182 OAuth issuer/터널 분리, #208 skill discovery opt-out). 설치·권한·Claude Code 버전 호환 이슈가 활발히 발생 중.

### 실익 판단 → **(c) 지식화 채택, (a)·(b) 기각**
- 기각 이유: 오너의 1차 클라이언트가 이미 Claude Code(로컬)라 "외부 채팅 UI → 내 로컬 코드" 브리지 자체가 불필요. 공개 HTTPS 터널로 로컬 파일시스템을 노출하는 보안 표면, Bash 필수, Node 22+, 62개 오픈 이슈(Claude Code 2.1.x 권한 회귀 #253, npx 설치 실패 #252)는 Windows 오너 환경에서 유지비 대비 실익이 없음. 대시보드 통합 대상도 아님(서비스 데몬).
- 지식화 가치: (1) "Minimal Coding Agent Harness over MCP" — 하네스를 MCP 서버로 노출해 **여러 프론트엔드가 동일 하네스를 공유**하는 아키텍처 패턴, (2) `examples/agents/*.md` — Claude/Codex/Copilot/Cursor/Grok/OpenCode/pi를 역할별(implementer/explorer/qa-tester/reviewer/builder) 프로필로 나눈 **크로스벤더 서브에이전트 프로필** 설계(claudex-loop "작성자≠심사자" 계보와 연결), (3) 24h 세션 정리·bounded multi-file read 같은 MCP 운영 이슈. entity 1건 + `concepts/agentic-harness-engineering.md` 역링크로 충분.

---

## 3. Spark-To-Paper-Skills/paperjury — **(c) 지식화(경량) 또는 기각 · (b) 기각**

### 메타
| 항목 | 값 |
|---|---|
| ★ / forks | 1,032 / 43 |
| license | MIT (LICENSE 실측 일치, 저작권자 Yiran Wang) |
| 언어 | JavaScript 100% (326 KB) |
| created / pushed | 2026-06-02 / **2026-08-14** (약 2주 전, 활성) |
| 오픈 이슈 | 1 |
| 버전 | 1.2.1 (`SKILL.md`·`plugin.json`·`package.json` 일치), engines `node >=18`, 런타임 deps **없음** |

### LICENSE 첫 20줄 (실측)
```
MIT License

Copyright (c) 2026 Yiran Wang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
```

### 트리 (총 82 blobs, truncated=false)
최상위: `.claude-plugin/ .github/ configs/ docs/ references/ samples/ scripts/ tests/ workflows/` + `SKILL.md README.md README.en.md CHANGELOG.md CHANGELOG.zh-CN.md CITATION.bib LICENSE package.json`
확장자: **js 36** · md 22 · yml 5 · png 5 · json 4 · pdf 3 · html 2 · tex/txt/bib/gitignore/noext 각 1
- `scripts/` 13개: anchor-diff, apply-patch, check-update, compile-guard, compliance-check, cross-ref, decompose, doctor, extract-docx, journal, ledger, rekey, spine
- `workflows/` 12개: assign-reviewers, reading-check, coverage-auditor, merge, review-panel, trial, polish, recall-audit, drafter, edit-audit, meaning-audit, clerk
- `references/` 8개: methodology, review-engine-v3, reviewer-personas, spine, ledger-schema, auto-mode, submission-compliance, writing-toolkit
- 플러그인 구조: `.claude-plugin/plugin.json`의 `"skills": ["./"]` → 루트 자체가 스킬

### README 요약
- 무엇: CS 학회(CVPR/ACL/NeurIPS 계열) 논문의 **제출 전 적대적 모의 심사 + 경계 있는 LaTeX 수정** Claude Code 스킬. 3모드: DIRECT-EDIT(단락 편집/polish/de-AI/번역), REVIEW(N명 도메인 리뷰어 → coverage audit → merge → 양측 trial → 3분류 verdict valid-fixable/author-required/invalid-drop → recall audit → 최소 패치 → edit/meaning audit → clerk 수렴), AUTO(`/goal` opt-in 무인 다회전). 결정론적 스크립트(anchor 추적, 컴파일 가드, cross-ref, ledger)로 LLM 제안을 검증.
- 설치: `/plugin marketplace add Spark-To-Paper-Skills/paperjury` → `/plugin install paperjury@Spark-To-Paper-Skills`, 또는 `git clone … ~/.claude/skills/paperjury`. 검증 `npm run doctor`.
- 의존성: Node ≥18(외부 npm 의존 0), LaTeX 툴체인 선택(없으면 구조 린트 폴백), 시작 시 GitHub 릴리스 태그 **soft update check(네트워크)**, 외부 API/로그인 없음.
- Windows: **명시 지원** — PowerShell 설치 경로 `git clone … "$env:USERPROFILE\.claude\skills\paperjury"` 문서화. 훅 없음.

### SKILL.md frontmatter (전문)
```yaml
name: paperjury
description: Three modes for CS-conference papers (CVPR/ICCV/ECCV vision, ACL/EMNLP/NAACL NLP, ICLR/NeurIPS/ICML/AAAI ML). DIRECT-EDIT mode (common): the user describes a change in Chinese or English and the manuscript (LaTeX or Markdown) is edited directly through a CS-venue writing toolkit with author sign-off (use for 改这段 / 把中文想法写成 latex / polish / de-AI / translate / compress a passage). REVIEW mode (occasional, pre-submission): harden the paper through an adversarial courtroom review engine (N holistic domain reviewers / contestability routing / two-sided trial / three-way verdict / clerk-converged multi-round loop) with consensus-gated, author-signed revisions (use for review / critique / 审稿 / 评审 / mock-review). AUTO mode (unattended, opt-in via /goal): run the review-revise loop toward a verifiable goal, applying safe fixes under a drift-bounded policy and queueing risky ones. Resolves all inputs at runtime, no hardcoded paths. Not a from-scratch drafter (use ml-paper-writing) and not an official-venue rebuttal.
version: 1.2.1
author: Yiran Wang
license: MIT
tags: [Academic Writing, Peer Review, Adversarial Review, CVPR, ICCV, ECCV, ACL, EMNLP, NAACL, ICLR, NeurIPS, ICML, AAAI, Workflow, LaTeX]
```
**콜론 함정 해당**: description이 plain scalar인데 `DIRECT-EDIT mode (common): the user…`, `REVIEW mode (occasional, pre-submission): …`, `AUTO mode (unattended, opt-in via /goal): …` 3곳에 `": "` 포함. `python yaml.safe_load` 실측 결과 **`ScannerError: mapping values are not allowed here (line 2, column 149)`** — MEMORY.md `skill-frontmatter-yaml-colon-trap`이 정확히 재현됨. Claude Code의 관대한 파서에서는 동작할 수 있으나, 오너 규칙(채택 시 safe_load 검증)상 채택하려면 description을 따옴표로 감싸거나 `>` 로 바꿔야 함.

### 이슈
오픈 1건: `#2 [07-11] 帮 PaperJury 做了在线入口——小红书收藏的读者可以直接传草稿试审稿` (제3자가 온라인 입구 만들었다는 홍보성). Windows/hook/설치 문제 보고 0건.

### 실익 판단 → **(b) 기각 · (c) 경량 지식화(패턴만) 또는 기각**
- 기각 이유: 오너 워크플로에 CS 학회 논문 LaTeX 제출 작업이 없음. 스킬 도메인(CVPR/ACL 심사 페르소나, LaTeX anchor)이 오너의 Apps in Toss·하네스 엔지니어링·wiki 축과 교차하지 않음. 또한 frontmatter가 strict YAML 실패 → 채택 시 로컬 패치 필요.
- 지식화할 가치가 있는 부분(경량): **"courtroom review engine"** — 리뷰어 다수 → coverage audit → 양측 trial → 3분류 verdict(valid-fixable / author-required / invalid-drop) → recall audit → 최소 패치 → edit/meaning audit → clerk 수렴. 이는 오너의 Evidence&Truth·5-Layer Validation·claudex-loop("작성자≠심사자")·skill-audit 오탐 억제 흐름의 **일반화된 적대적 리뷰 파이프라인**으로 `concepts/` 1문단 append 또는 claudex-loop entity에 "유사 계보" 한 줄로 충분. 별도 entity 신규 등재는 과함.
- 부수 발견: 콜론 함정 **실제 in-the-wild 사례**로 MEMORY.md 항목에 증거 1줄 추가 가치 있음(★1k 스킬도 걸림).

---

## 종합 우선순위 (2026-08-31)

| 순위 | repo | 판정 | 핵심 근거 |
|---|---|---|---|
| 1 | vladikk/modularity | **(c) 채택** — concept `balanced-coupling` + entity / (b)는 비상업 한정 임시 로드만 | 라이선스 CC BY-NC-SA(Apps in Toss 상업 리스크) · 5개월 정지 · markdown-only 안전 · 개념 가치 높음 · 기존 스킬 중복 없음 |
| 2 | Waishnav/devspace | **(c) 채택**(아이디어 채록) / (a)(b) 기각 | MCP-노출 하네스·크로스벤더 서브에이전트 프로필 패턴 가치 · 터널 노출·Bash 필수·62 이슈·CC 2.1.x 권한 회귀 |
| 3 | paperjury | **기각**(선택적으로 courtroom review 패턴 1문단 append) | 도메인 불일치 · frontmatter safe_load 실패(콜론 함정 실증) |

메모리/위키 후속 제안(호출자 판단): (1) `~/.wiki/concepts/balanced-coupling.md` 신규 + `entities/vladikk-modularity.md`, `agentic-harness-engineering.md` 역링크. (2) `entities/devspace.md` 신규, claudex-loop·AHE 역링크. (3) `memory/skill-frontmatter-yaml-colon-trap.md`에 paperjury 실증 1줄. (4) evolve seenRepos에 3건 추가.
