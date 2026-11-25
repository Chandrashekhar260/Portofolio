@echo off
echo Initializing git repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "Initial commit: Portfolio website with React, TypeScript, Vite, and Tailwind CSS"

echo Adding remote repository...
git remote add origin https://github.com/Chandrashekhar260/Portofolio.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
