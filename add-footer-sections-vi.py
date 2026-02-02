#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to add missing footer sections (Service and Helpful Links) to Vietnamese pages
"""

import os
import re

# Footer HTML template for Vietnamese pages
FOOTER_SECTIONS_VI = '''
                <div class="t4-col footer-2 col-6 col-md-3 col-xl-2 col-lg-2">
                  <div class="t4-module module" id="Mod915">
                    <div class="module-inner">
                      <div class="module-title"><span>Dịch vụ</span></div>
                      <div class="module-ct">
                        <nav class="navbar">

                            <ul class="nav navbar-nav">
                              <li class="nav-item item-702">
                                  <a
                                    href="/vi/dich-vu-doanh-nghiep.html"
                                    class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Dịch Vụ Doanh Nghiệp</span
                                      ></span
                                    ></a
                                  >
                                </li>
                                <li class="nav-item item-703">
                                  <a href="/vi/logistics-xuat-khau.html" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Logistics & Xuất Khẩu</span
                                      ></span
                                    ></a
                                  >
                                </li>
                                <li class="nav-item item-704">
                                  <a href="/vi/mua-ho-nhap-khau.html" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Mua Hộ & Nhập Khẩu</span
                                      ></span
                                    ></a
                                  >
                              </li>
                              <li class="nav-item item-705">
                                  <a href="/vi/tra-cuu.html" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Tra Cứu (Công Cụ)</span
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
                          ><a href="singapore-corporate-tax-calculator.html"
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
                      <div class="module-title"><span>Liên Kết Hữu Ích</span></div>
                      <div class="module-ct">
                        <nav class="navbar">

                            <ul class="nav navbar-nav">
                              <li class="nav-item item-696">
                                  <a
                                    href="/vi/lien-he.html"
                                    class="nav-header nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Liên Hệ</span
                                      ></span
                                    ></a
                                  >
                                </li>
                                <li class="nav-item item-695">
                                  <a href="/vi/ve-chung-toi.html" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Về Chúng Tôi</span
                                      ></span
                                    ></a
                                  >
                                </li>
                                <li class="nav-item item-697">
                                  <a href="#" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >Thông tin hữu ích</span
                                      ></span
                                    ></a
                                  >
                                </li>
                                <li class="nav-item item-698">
                                  <a href="#" class="nav-link"
                                    ><span
                                      ><span class="menu-item-title"
                                        >FAQs</span
                                      ></span
                                    ></a
                                  >
                              </li>
                              <li class="nav-item item-765">
                                <a
                                  href="javascript:;"
                                  class="nav-header nav-link"
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
                          ><a href="singapore-corporate-tax-calculator.html"
                            >Singapore Corporate Tax Calculator</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="t4-col footer-4 col-12 col-lg-2"></div>
'''

def add_footer_sections(file_path):
    """Add footer sections to a file if missing"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if footer sections already exist
        if 'footer-2' in content and 'footer-3' in content:
            print(f"OK {os.path.basename(file_path)} - Already has footer sections")
            return False
        
        # Find the closing div for contact-container
        pattern = r'(\s*</div>\s*</div>\s*</div>\s*</div>\s*<a href="javascript:" id="back-to-top")'
        
        if re.search(pattern, content):
            # Insert footer sections before the back-to-top button
            new_content = re.sub(
                pattern,
                FOOTER_SECTIONS_VI + r'\1',
                content,
                count=1
            )
            
            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"ADDED {os.path.basename(file_path)} - Added footer sections")
            return True
        else:
            print(f"SKIP {os.path.basename(file_path)} - Pattern not found")
            return False
            
    except Exception as e:
        print(f"ERROR {os.path.basename(file_path)} - Error: {e}")
        return False

def main():
    vi_dir = r"d:\HoangLam\MMO\tht-global\vi"
    
    # Get all HTML files except index.html
    html_files = [f for f in os.listdir(vi_dir) if f.endswith('.html') and f != 'index.html']
    
    print(f"Found {len(html_files)} Vietnamese pages to process\n")
    
    updated_count = 0
    for filename in html_files:
        file_path = os.path.join(vi_dir, filename)
        if add_footer_sections(file_path):
            updated_count += 1
    
    print(f"\nCompleted! Updated {updated_count} out of {len(html_files)} files")

if __name__ == "__main__":
    main()
