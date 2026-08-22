# Command Center 프로젝트 레지스트리 자동 갱신: fetch-gh.mjs → build-projects.mjs → build-galaxy.mjs
# 로그: logs\refresh.log (최근 200줄 유지). gh 실패 시에도 build는 수행.
# -Loop : 상주 모드(6시간마다 반복, 시작프로그램 vbs 폴백용)
param([switch]$Loop, [int]$IntervalHours = 6)
$ErrorActionPreference = "Continue"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$LogDir = Join-Path $Root "logs"
$Log = Join-Path $LogDir "refresh.log"
if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Path $LogDir | Out-Null }

function Write-Log([string]$msg) {
  $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $msg
  Add-Content -Path $Log -Value $line -Encoding UTF8
}
function Trim-Log {
  if (Test-Path $Log) {
    $lines = Get-Content $Log -Encoding UTF8
    if ($lines.Count -gt 200) { $lines | Select-Object -Last 200 | Set-Content $Log -Encoding UTF8 }
  }
}
function Run-Step([string]$name, [string]$script) {
  $sw = [Diagnostics.Stopwatch]::StartNew()
  $out = & node (Join-Path $Root $script) 2>&1
  $code = $LASTEXITCODE
  foreach ($l in $out) { if ("$l".Trim()) { Write-Log "  $name> $l" } }
  Write-Log ("{0} exit={1} ({2:n1}s)" -f $name, $code, $sw.Elapsed.TotalSeconds)
  return $code
}
function Invoke-Refresh {
  Write-Log "=== refresh start (pid $PID, loop=$Loop)"
  Set-Location $Root
  $gh = Run-Step "fetch-gh" "fetch-gh.mjs"
  if ($gh -ne 0) { Write-Log "fetch-gh FAILED — 기존 projects-raw.json 유지, build만 수행" }
  $b1 = Run-Step "build-projects" "build-projects.mjs"
  $b2 = Run-Step "build-galaxy" "build-galaxy.mjs"
  # claude-os 연계: 레지스트리 → project_index KB, ~/.wiki → knowledge_docs KB (둘 다 claude-os 오프라인이면 자체적으로 "skipped" + exit 0)
  $s1 = Run-Step "sync-claude-os" "sync-claude-os.mjs"
  if (Test-Path (Join-Path $Root "sync-wiki-kb.mjs")) {
    $s2 = Run-Step "sync-wiki-kb" "sync-wiki-kb.mjs"
  } else {
    $s2 = "skip"; Write-Log "sync-wiki-kb skipped: sync-wiki-kb.mjs not found"
  }
  Write-Log "=== refresh end (gh=$gh build-projects=$b1 build-galaxy=$b2 sync-claude-os=$s1 sync-wiki-kb=$s2)"
  Trim-Log
}

Invoke-Refresh
while ($Loop) {
  Start-Sleep -Seconds ($IntervalHours * 3600)
  Invoke-Refresh
}
