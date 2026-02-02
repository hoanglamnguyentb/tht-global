# Script to add footer sections specifically to tracking.html

$footerSections = @'
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
'@

$file = "d:\HoangLam\MMO\tht-global\en\tracking.html"

$content = Get-Content $file -Raw -Encoding UTF8

# Find and replace the pattern - insert before footer-4
$pattern = '(\s*<div class="t4-col footer-4 col-12 col-lg-2"></div>)'

if ($content -match $pattern) {
    $newContent = $content -replace $pattern, ($footerSections + '$1')
    
    [System.IO.File]::WriteAllText($file, $newContent, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "SUCCESS: Added footer sections to tracking.html" -ForegroundColor Green
} else {
    Write-Host "ERROR: Pattern not found in tracking.html" -ForegroundColor Red
}
