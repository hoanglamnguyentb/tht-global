# Script to remove JCH templates from footer sections in all HTML files

$enDir = "d:\HoangLam\MMO\tht-global\en"
$files = Get-ChildItem -Path $enDir -Filter "*.html" -Recurse

# Pattern to start of JCH container
$patternStart = '<nav class="navbar jch-reduced-dom-container">\s*<template class="jch-reduced-dom-template">'
$patternEnd = '</template>\s*</nav>'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Check if file has JCH template
    if ($content -match 'jch-reduced-dom-template') {
        Write-Host "Fixing $($file.Name)..." -ForegroundColor Yellow
        
        # Regex replacement
        # Use simple string replacement for reliability if structure is consistent
        # We replace the wrapper start with just <nav class="navbar">
        # And wrapper end with just </nav>
        
        $newContent = $content -replace '<nav class="navbar jch-reduced-dom-container">\s*<template class="jch-reduced-dom-template">', '<nav class="navbar">'
        $newContent = $newContent -replace '</template>\s*</nav>', '</nav>'
        
        if ($newContent -ne $content) {
            [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
            Write-Host "  -> FIXED" -ForegroundColor Green
        } else {
            Write-Host "  -> MATCHED BUT NOT REPLACED (Regex mismatch?)" -ForegroundColor Red
        }
    }
}

Write-Host "JCH Template cleanup complete." -ForegroundColor Cyan
