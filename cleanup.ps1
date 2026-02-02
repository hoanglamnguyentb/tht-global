$files = Get-ChildItem -Path "d:\HoangLam\MMO\tht-global" -Recurse -Filter *.html
foreach ($file in $files) {
    # Check if file is readable
    try {
        $lines = Get-Content $file.FullName -ErrorAction Stop
    } catch {
        Write-Host "Could not read $($file.FullName)"
        continue
    }

    $newLines = @()
    $changed = $false
    $jchDepth = 0
    
    foreach ($line in $lines) {
        $trimmed = $line.Trim()
        
        if ($line -match 'class="navbar jch-reduced-dom-container"') {
            $newLine = $line -replace 'class="navbar jch-reduced-dom-container"', 'class="navbar"'
            $newLines += $newLine
            $changed = $true
            continue
        }
        if ($line -match '<template class="jch-reduced-dom-template">') {
            $jchDepth++
            $changed = $true
            # Skip adding this line
            continue 
        }
        if ($trimmed -eq '</template>') {
            if ($jchDepth -gt 0) {
                $jchDepth--
                $changed = $true
                # Skip adding this line
                continue
            }
        }
        $newLines += $line
    }
    
    if ($changed) {
        $newLines | Set-Content $file.FullName -Encoding UTF8
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done."
