# Script to fix Vietnamese menu links to absolute paths

$files = Get-ChildItem -Path "d:\HoangLam\MMO\tht-global\vi\*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Fix menu links
    $content = $content -replace 'href="ve-chung-toi\.html"', 'href="/vi/ve-chung-toi.html"'
    $content = $content -replace 'href="cau-chuyen-cua-chung-toi\.html"', 'href="/vi/cau-chuyen-cua-chung-toi.html"'
    $content = $content -replace 'href="mang-luoi-toan-cau\.html"', 'href="/vi/mang-luoi-toan-cau.html"'
    $content = $content -replace 'href="dich-vu-doanh-nghiep\.html"', 'href="/vi/dich-vu-doanh-nghiep.html"'
    $content = $content -replace 'href="thanh-lap-cong-ty-singapore\.html"', 'href="/vi/thanh-lap-cong-ty-singapore.html"'
    $content = $content -replace 'href="thanh-lap-cong-ty-my\.html"', 'href="/vi/thanh-lap-cong-ty-my.html"'
    $content = $content -replace 'href="thanh-lap-cong-ty-hong-kong\.html"', 'href="/vi/thanh-lap-cong-ty-hong-kong.html"'
    $content = $content -replace 'href="tham-nhap-thi-truong-trung-han\.html"', 'href="/vi/tham-nhap-thi-truong-trung-han.html"'
    $content = $content -replace 'href="giai-phap-ke-toan-thanh-toan\.html"', 'href="/vi/giai-phap-ke-toan-thanh-toan.html"'
    $content = $content -replace 'href="logistics-xuat-khau\.html"', 'href="/vi/logistics-xuat-khau.html"'
    $content = $content -replace 'href="mua-ho-nhap-khau\.html"', 'href="/vi/mua-ho-nhap-khau.html"'
    $content = $content -replace 'href="tra-cuu\.html"', 'href="/vi/tra-cuu.html"'
    $content = $content -replace 'href="lien-he\.html"', 'href="/vi/lien-he.html"'
    $content = $content -replace 'href="index\.html"', 'href="/vi/index.html"'
    
    # Save the file
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "Fixed: $($file.Name)" -ForegroundColor Green
}

Write-Host "`nCompleted! All Vietnamese menu links have been updated to absolute paths." -ForegroundColor Cyan
