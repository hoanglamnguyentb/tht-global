# PowerShell script to add footer sections to English pages

$footerTemplate = @'
                <div class="t4-col footer-2 col-6 col-md-3 col-xl-2 col-lg-2">
                  <div class="t4-module module" id="Mod915">
                    <div class="module-inner">
                      <div class="module-title"><span>Service</span></div>
                      <div class="module-ct">
                        <nav class="navbar">
                          <ul class="nav navbar-nav">
                            <li class="nav-item item-702">
                              <a
                                href="/en/corporate-services.html"
                                class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Corporate Services</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-703">
                              <a
                                href="/en/logistics-export.html"
                                class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Logistics & Export</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-704">
                              <a
                                href="/en/sourcing-import.html"
                                class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Sourcing & Import</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-705">
                              <a href="/en/tracking.html" class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Tracking (Tool)</span
                                  ></span
                                ></a
                              >
                            </li>
                          </ul>
                        </nav>
                        <div
                          class="tax-caculator-mobile"
                          style="
                            border: 1px solid #1c4585;
                            padding: 5px;
                            border-radius: 10px;
                            text-align: center;
                            margin-top: 40px;
                            background: white;
                            font-weight: 500;
                          "
                        >
                          <i
                            class="fa-solid fa-file-invoice-dollar"
                            style="color: #014583; margin-right: 5px"
                          ></i
                          ><a href="/en/singapore-corporate-tax-calculator.html"
                            >Singapore Corporate Tax Calculator</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="t4-col footer-3 col-6 col-md-3 col-xl-2 col-lg-2">
                  <div class="t4-module module" id="Mod914">
                    <div class="module-inner">
                      <div class="module-title"><span>Helpful Links</span></div>
                      <div class="module-ct">
                        <nav class="navbar">
                          <ul class="nav navbar-nav">
                            <li class="nav-item item-696">
                              <a href="javascript:;" class="nav-header nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Contact</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-695">
                              <a href="/en/about-us.html" class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >About Us</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-697">
                              <a href="/en/resources/blog.html" class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Useful information</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-698">
                              <a href="/en/resources/faqs.html" class="nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >FAQs</span
                                  ></span
                                ></a
                              >
                            </li>
                            <li class="nav-item item-765">
                              <a href="javascript:;" class="nav-header nav-link"
                                ><span
                                  ><span class="menu-item-title"
                                    >Testimonial</span
                                  ></span
                                ></a
                              >
                            </li>
                          </ul>
                        </nav>
                        <div
                          class="tax-caculator-mobile"
                          style="
                            border: 1px solid #1c4585;
                            padding: 5px;
                            border-radius: 10px;
                            text-align: center;
                            margin-top: 40px;
                            background: white;
                            font-weight: 500;
                          "
                        >
                          <i
                            class="fa-solid fa-file-invoice-dollar"
                            style="color: #014583; margin-right: 5px"
                          ></i
                          ><a href="/en/singapore-corporate-tax-calculator.html"
                            >Singapore Corporate Tax Calculator</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="t4-col footer-4 col-12 col-lg-2"></div>
'@

$enDir = "d:\HoangLam\MMO\tht-global\en"
$allFiles = Get-ChildItem -Path $enDir -Filter "*.html" -Recurse
$files = $allFiles | Where-Object { $_.Name -ne "index.html" }

$updatedCount = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Check if already has footer sections
    if ($content -match 'footer-2' -and $content -match 'footer-3') {
        Write-Host "OK $($file.Name) - Already has footer sections" -ForegroundColor Yellow
        continue
    }
    
    # Find the pattern to insert before
    $pattern = '(\s*</div>\s*</div>\s*</div>\s*</div>\s*<a href="javascript:" id="back-to-top")'
    
    if ($content -match $pattern) {
        # Insert footer sections
        $newContent = $content -replace $pattern, ($footerTemplate + '$1')
        
        # Save
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
        
        Write-Host "ADDED $($file.Name) - Added footer sections" -ForegroundColor Green
        $updatedCount++
    } else {
        Write-Host "SKIP $($file.Name) - Pattern not found" -ForegroundColor Red
    }
}

Write-Host "`nCompleted! Updated $updatedCount out of $($files.Count) files" -ForegroundColor Cyan
