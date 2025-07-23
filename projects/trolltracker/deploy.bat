@echo off
setlocal

echo 🚀 Building Vite app...
call npm run build

echo 🔥 Removing old deployed files...
rmdir /s /q "..\..\projects\trolltracker\assets"
del "..\..\projects\trolltracker\index.html"

echo 📂 Copying new build to projects/trolltracker...
xcopy /E /I /Y "dist\*" "..\..\projects\trolltracker\"

echo ✅ Build deployed to GitHub Pages folder.
pause
