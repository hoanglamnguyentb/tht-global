# Script to check all pages for missing footer sections

Write-Host "`n=== Checking Vietnamese pages ===" -ForegroundColor Cyan
$viDir = "d:\HoangLam\MMO\tht-global\vi"
$viFiles = Get-ChildItem -Path $viDir -Filter "*.html"

foreach ($file in $viFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $hasFooter2 = $content -match 'footer-2'
    $hasFooter3 = $content -match 'footer-3'
    
    if (-not $hasFooter2 -or -not $hasFooter3) {
        Write-Host "MISSING: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "`n=== Checking English pages ===" -ForegroundColor Cyan
$enDir = "d:\HoangLam\MMO\tht-global\en"
$enFiles = Get-ChildItem -Path $enDir -Filter "*.html" -Recurse

foreach ($file in $enFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $hasFooter2 = $content -match 'footer-2'
    $hasFooter3 = $content -match 'footer-3'
    
    if (-not $hasFooter2 -or -not $hasFooter3) {
        Write-Host "MISSING: $($file.FullName.Replace('d:\HoangLam\MMO\tht-global\', ''))" -ForegroundColor Red
    }
}

Write-Host "`nCheck completed!" -ForegroundColor Green
