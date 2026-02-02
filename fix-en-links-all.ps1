# PowerShell script to standarize links to absolute paths in all English pages

$enDir = "d:\HoangLam\MMO\tht-global\en"
$files = Get-ChildItem -Path $enDir -Filter "*.html" -Recurse

# Define finding patterns and replacements
# Format: @{ "Find" = 'pattern'; "Replace" = 'replacement' }
# We use simple string replacement but be careful about existing absolute paths.
# Strategy: Replace relative filename with absolute path.
# If it inadvertently creates /en//en/..., we can fix that or use regex negative lookbehind.
# Simplest for specific broken structure: Just target the exact href strings we expect to be relative.

$replacements = @(
    # Main Navigation
    @{ Find = 'href="index.html"'; Replace = 'href="/en/index.html"' },
    @{ Find = 'href="about-us.html"'; Replace = 'href="/en/about-us.html"' },
    @{ Find = 'href="our-story.html"'; Replace = 'href="/en/our-story.html"' },
    @{ Find = 'href="global-network.html"'; Replace = 'href="/en/global-network.html"' },
    @{ Find = 'href="corporate-services.html"'; Replace = 'href="/en/corporate-services.html"' },
    @{ Find = 'href="singapore-incorporation.html"'; Replace = 'href="/en/singapore-incorporation.html"' },
    @{ Find = 'href="us-incorporation.html"'; Replace = 'href="/en/us-incorporation.html"' },
    @{ Find = 'href="hong-kong-incorporation.html"'; Replace = 'href="/en/hong-kong-incorporation.html"' },
    @{ Find = 'href="china-korea-market-entry.html"'; Replace = 'href="/en/china-korea-market-entry.html"' },
    @{ Find = 'href="accounting-payment-solutions.html"'; Replace = 'href="/en/accounting-payment-solutions.html"' },
    @{ Find = 'href="logistics-export.html"'; Replace = 'href="/en/logistics-export.html"' },
    @{ Find = 'href="sourcing-import.html"'; Replace = 'href="/en/sourcing-import.html"' },
    @{ Find = 'href="tracking.html"'; Replace = 'href="/en/tracking.html"' },
    @{ Find = 'href="contact-us.html"'; Replace = 'href="/en/contact-us.html"' },
    
    # Old/Alternative paths (just in case)
    @{ Find = 'href="company-incorporation/singapore.html"'; Replace = 'href="/en/singapore-incorporation.html"' },
    @{ Find = 'href="company-incorporation/the-us.html"'; Replace = 'href="/en/us-incorporation.html"' },
    @{ Find = 'href="company-incorporation/hong-kong.html"'; Replace = 'href="/en/hong-kong-incorporation.html"' },
    
    # Resources / Footer
    @{ Find = 'href="resources/blog.html"'; Replace = 'href="/en/resources/blog.html"' },
    @{ Find = 'href="resources/faqs.html"'; Replace = 'href="/en/resources/faqs.html"' },
    @{ Find = 'href="singapore-corporate-tax-calculator.html"'; Replace = 'href="/en/singapore-corporate-tax-calculator.html"' },

    # Language Switcher
    @{ Find = 'href="../vi/index.html"'; Replace = 'href="/vi/index.html"' }
)

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $modified = $false

    foreach ($item in $replacements) {
        if ($content -match $item.Find) {
            # Use simple string replace to match exactly. 
            # Note: -replace in PS is regex. [Regex]::Escape() is useful if patterns had special chars.
            # Here patterns are simple.
            
            # Check if it's already absolute to avoid double prefixing if we ran partially?
            # The patterns include the opening quote, so `href="index.html"` won't match `href="/en/index.html"`
            
            $content = $content -replace $item.Find, $item.Replace
            $modified = $true
        }
    }

    if ($modified) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Fixed links in: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "Link standardization complete." -ForegroundColor Cyan
