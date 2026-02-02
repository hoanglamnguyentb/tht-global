@echo off
echo Starting batch wrapper...
powershell -NoProfile -ExecutionPolicy Bypass -Command "& '.\cleanup.ps1'" > cleanup_output.txt 2>&1
echo PowerShell finished with code %errorlevel%
type cleanup_output.txt
