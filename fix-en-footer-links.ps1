# Script to fix English footer links to absolute paths

$file = "d:\HoangLam\MMO\tht-global\en\index.html"

$content = Get-Content $file -Raw -Encoding UTF8

# Fix footer links
$content = $content -replace 'href="corporate-services\.html"', 'href="/en/corporate-services.html"'
$content = $content -replace 'href="logistics-export\.html"', 'href="/en/logistics-export.html"'
$content = $content -replace 'href="sourcing-import\.html"', 'href="/en/sourcing-import.html"'
$content = $content -replace 'href="tracking\.html"', 'href="/en/tracking.html"'
$content = $content -replace 'href="about-us\.html"', 'href="/en/about-us.html"'
$content = $content -replace 'href="resources/blog\.html"', 'href="/en/resources/blog.html"'
$content = $content -replace 'href="resources/faqs\.html"', 'href="/en/resources/faqs.html"'
$content = $content -replace 'href="singapore-corporate-tax-calculator\.html"', 'href="/en/singapore-corporate-tax-calculator.html"'
$content = $content -replace 'href="accounting-payment-solutions\.html"', 'href="/en/accounting-payment-solutions.html"'
$content = $content -replace 'href="contact-us\.html"', 'href="/en/contact-us.html"'

# Save the file
[System.IO.File]::WriteAllText($file, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host "Fixed: index.html (English)" -ForegroundColor Green
Write-Host "`nCompleted! English footer links have been updated to absolute paths." -ForegroundColor Cyan
