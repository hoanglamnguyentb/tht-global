$files = Get-ChildItem -Path "d:\HoangLam\MMO\tht-global" -Recurse -Filter *.html
Write-Host "Found $($files.Count) HTML files."
foreach ($file in $files) {
    try {
        # -Raw reads the entire file as one string
        $content = Get-Content $file.FullName -Raw -Encoding UTF8 -ErrorAction Stop
    } catch {
        Write-Host "Could not read $($file.FullName)"
        continue
    }

    $originalContent = $content

    # 1. Navbar class
    $content = $content -replace 'class="navbar jch-reduced-dom-container"', 'class="navbar"'

    # 2. Template tags (removing wrapper, keeping content)
    # Using .NET Regex class for robust replacement
    # (?s) enables single-line mode (dot matches newline)
    # (?i) enables case-insensitive matching
    $pattern = '(?si)<template[^>]*jch-reduced-dom-template[^>]*>\s*(.*?)\s*</template>'
    $content = [Regex]::Replace($content, $pattern, '$1')

    if ($content -ne $originalContent) {
        # Write back to file
        # Using [System.IO.File]::WriteAllText to avoid PowerShell encoding quirks if possible, 
        # but Set-Content is safer for simple usage. Let's use Set-Content with UTF8.
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done."
