# 진화 루프 N회 연속 실행 드라이버 (수동 검증·부트스트랩용; 평시엔 스케줄러가 1일 1회)
# 사용: powershell -File evolve\run-batch.ps1 [-Count 10]
param([int]$Count = 10)
$ROOT = "C:\workspace\command-center"
$LOG = Join-Path $ROOT ("evolve\logs\batch-" + (Get-Date -Format "yyyyMMdd-HHmm") + ".log")
New-Item -ItemType Directory -Force (Join-Path $ROOT "evolve\logs") | Out-Null
for ($i = 1; $i -le $Count; $i++) {
  "##### BATCH RUN $i/$Count $(Get-Date -Format 'HH:mm:ss') #####" | Tee-Object -FilePath $LOG -Append
  & powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $ROOT "evolve\run-daily.ps1") 2>&1 | Tee-Object -FilePath $LOG -Append | Out-Null
  # 회차 요약 한 줄 (state.runs 마지막 항목)
  node -e "const s=require('C:/workspace/command-center/evolve/state.json');const r=s.runs[s.runs.length-1];console.log('RUN_SUMMARY',$i,JSON.stringify(r||null))" 2>&1 | Tee-Object -FilePath $LOG -Append
  # 연속 실패 2회면 중단 (플레이북 revert 규칙이 다음 실행에서 처리하도록 1회는 더 허용)
  $cf = node -e "console.log(require('C:/workspace/command-center/evolve/state.json').consecutiveFailures||0)"
  if ([int]$cf -ge 3) { "BATCH_ABORT consecutiveFailures=$cf" | Tee-Object -FilePath $LOG -Append; break }
}
"##### BATCH DONE #####" | Tee-Object -FilePath $LOG -Append
