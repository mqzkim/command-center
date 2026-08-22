# Gates: L3 — ~/.wiki → Claude OS knowledge_docs KB (읽기 전용 미러)

Scope: `sync-wiki-kb.mjs` 신규, `state/wiki-kb-sync.json` 상태 파일. ~/.wiki는 절대 수정하지 않음. refresh-projects.ps1·dashboard·.env 수정 금지(L2가 호출 연결).

- [ ] L3-1: `sync-wiki-kb.mjs` — ~/.wiki/**/*.md(node_modules·.git 제외) 전량을 `command-center-knowledge_docs`에 업서트, filename = 상대경로 `/`→`__`. 상태 파일에 {path: mtimeMs}. 결과 stdout `scanned=N upserted=N deleted=N unchanged=N errors=0`
  CHECK: node C:/workspace/command-center/sync-wiki-kb.mjs
  EXPECT: /errors=0/
  EVIDENCE: pending

- [ ] L3-2: KB 문서 수 = 디스크 md 수 (build-galaxy 기준 447±, 실측 숫자 기재)
  CHECK: node -e "const fs=require('fs'),p=require('path');let n=0;(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.isDirectory()){if(e.name!=='node_modules'&&!e.name.startsWith('.'))w(p.join(d,e.name))}else if(e.name.endsWith('.md'))n++}})(require('os').homedir()+'/.wiki');fetch('http://localhost:8051/api/kb/command-center-knowledge_docs/documents').then(r=>r.json()).then(j=>{const k=(j.documents||j).length;console.log(k,n,k===n?'COUNT_OK':'MISMATCH')})"
  EXPECT: COUNT_OK
  EVIDENCE: pending

- [ ] L3-3: 증분 — 2회째 실행은 unchanged=전체, upserted=0. 테스트: 상태 파일에서 항목 1개 mtime을 0으로 바꾼 뒤 실행 → upserted=1 (위키 파일은 건드리지 않음)
  EVIDENCE: pending

- [ ] L3-4: 검색 정합 — search-all "Ralph Wiggum Loop" top1이 concepts 해당 문서, "apps in toss launch contract" top3에 apps-in-toss-front-loaded-launch-contract 포함
  EVIDENCE: pending

- [ ] L3-5: 소요 시간·임베딩 경로 기록(Ollama nomic-embed-text 로컬), 전량 임포트 시간(초) 실측. 1000문서까지 선형이면 증분 전략으로 충분함을 수치로 기재
  EVIDENCE: pending
