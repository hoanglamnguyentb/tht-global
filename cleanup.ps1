$files = Get-ChildItem -Path "d:\HoangLam\MMO\tht-global" -Recurse -Filter *.html
Write-Host "Found $($files.Count) HTML files."

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)"
    try {
        # Read raw content
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
    } catch {
        Write-Host "ERROR: Could not read $($file.FullName)"
        continue
    }

    $originalContent = $content
    $modified = $false

    # 1. Fix Navbar Class
    if ($content -match 'class="navbar jch-reduced-dom-container"') {
        Write-Host "  - Found navbar class match"
        $content = $content -replace 'class="navbar jch-reduced-dom-container"', 'class="navbar"'
        $modified = $true
    }

    # 2. Fix Template Tags
    # Regex to find <template class="jch-reduced-dom-template">...content...</template>
    # (?s) = SingleLine (dot matches newline)
    # (?i) = CaseInsensitive
    $pattern = '(?si)<template[^>]*jch-reduced-dom-template[^>]*>\s*(.*?)\s*</template>'
    
    if ($content -match $pattern) {
        Write-Host "  - Found template match"
        $content = [Regex]::Replace($content, $pattern, '$1')
        $modified = $true
    }

    if ($modified) {
        try {
            # Write back with UTF8 encoding explicitly
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            Write-Host "  -> SAVED: $($file.Name)"
        } catch {
            Write-Host "  -> ERROR SAVING: $($file.Name) - $_"
        }
    } else {
        # Debugging: check if the 'jch-' string exists at all to see if regex missed it
        if ($content -match "jch-reduced-dom-template") {
            Write-Host "  -> WARNING: 'jch-reduced-dom-template' text found but REGEX didn't match!"
        }
    }
}
Write-Host "Cleanup process execution finished."
