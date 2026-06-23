@echo off
echo =============================================
echo   KRISHNA RAJAK PORTFOLIO — GitHub Push
echo =============================================
echo.

cd /d "d:\My_Portfolio _Project"

echo [1/4] Checking git status...
git status
echo.

echo [2/4] Adding all updated files...
git add index.html style.css script.js data.js
echo.

echo [3/4] Committing with message...
git commit -m "feat: complete portfolio redesign - light theme, modern animations, full-stack layout"
echo.

echo [4/4] Pushing to GitHub (portfolio-vibes)...
git push origin main
echo.

if %ERRORLEVEL% == 0 (
  echo =============================================
  echo   SUCCESS! Your portfolio is live on GitHub
  echo   https://github.com/krishnarajak-codespace/portfolio-vibes
  echo =============================================
) else (
  echo =============================================
  echo   ERROR: Push failed. Check your GitHub credentials.
  echo   Try: git push origin main --force
  echo =============================================
)

pause
