# Daily Evolution Loop 실행기 — Task Scheduler가 매일 호출.
# 순서: health(자가치유) → trends(스캔+dedup) → 데이터 재빌드 → claude 헤드리스(개선 1건) → commit·push
# 로그: evolve\logs\YYYY-MM-DD.log
$ErrorActionPreference = "Continue"
$ROOT = "C:\workspace\command-center"
$LOGDIR = Join-Path $ROOT "evolve\logs"
New-Item -ItemType Directory -Force $LOGDIR | Out-Null
$LOG = Join-Path $LOGDIR ((Get-Date -Format "yyyy-MM-dd") + ".log")
function Log($m) { "$(Get-Date -Format 'HH:mm:ss') $m" | Tee-Object -FilePath $LOG -Append }

Set-Location $ROOT
Log "=== daily evolution start ==="

# 1) 자가치유 헬스체크 (복구 포함)
node evolve\health.mjs 2>&1 | Tee-Object -FilePath $LOG -Append
$healthOk = ($LASTEXITCODE -eq 0)
Log "health exit=$LASTEXITCODE"

# 2) 트렌드 스캔 (+dedup, state 갱신)
node evolve\trends.mjs 2>&1 | Tee-Object -FilePath $LOG -Append

# 3) 데이터 신선화
node build-galaxy.mjs 2>&1 | Tee-Object -FilePath $LOG -Append
node build-projects.mjs 2>&1 | Tee-Object -FilePath $LOG -Append

# 4) 지능 단계 — 플레이북 실행 (개선 1건, 검증, state 기록, 커밋까지 플레이북이 수행)
$prompt = "C:\workspace\command-center\evolve\evolve.md 플레이북을 읽고 오늘의 데일리 진화 절차를 그대로 수행해줘. 작업 디렉토리는 C:\workspace\command-center."
claude -p $prompt --dangerously-skip-permissions --max-turns 80 2>&1 | Tee-Object -FilePath $LOG -Append
$claudeOk = ($LASTEXITCODE -eq 0)
Log "claude exit=$LASTEXITCODE"

# 5) 안전망 커밋·푸시 (플레이북이 이미 커밋했어도 잔여물 수습)
git add -A 2>&1 | Out-Null
git commit -m ("evolve-run: " + (Get-Date -Format "yyyy-MM-dd") + " pipeline artifacts") 2>&1 | Tee-Object -FilePath $LOG -Append
git push 2>&1 | Tee-Object -FilePath $LOG -Append

# 6) 연속 실패 카운터 (self-heal의 self-heal 트리거 — 판단은 다음 실행의 플레이북이)
$failed = (-not $healthOk) -or (-not $claudeOk)
node -e "const f=require('fs');const p='evolve/state.json';const s=JSON.parse(f.readFileSync(p,'utf8'));s.consecutiveFailures=$(if ($failed) {'(s.consecutiveFailures||0)+1'} else {'0'});s.lastRun=new Date().toISOString();f.writeFileSync(p,JSON.stringify(s,null,1));console.log('state: failures='+s.consecutiveFailures)" 2>&1 | Tee-Object -FilePath $LOG -Append

Log "=== daily evolution end (failed=$failed) ==="
