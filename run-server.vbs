' Command Center 정적 서버 — 콘솔 창 없이 백그라운드 실행 (로그온 작업용)
' 주소: http://localhost:7766/dashboard.html
Set sh = CreateObject("WScript.Shell")
sh.CurrentDirectory = "C:\workspace\command-center"
sh.Run "python -m http.server 7766 --bind 127.0.0.1", 0, False
