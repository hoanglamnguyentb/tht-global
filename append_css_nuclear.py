import os

css_file = r"d:\HoangLam\MMO\tht-global\media\t4\optimize\css\theme.css"
css_rule = """
/* STRONGER FIX for empty col pseudo-elements */
html body .row .col:empty::before,
html body .row .col-12:empty::before {
    background-image: none !important;
    background: none !important;
    border: none !important;
    content: none !important;
    display: none !important;
    width: 0 !important;
    height: 0 !important;
}
"""

try:
    with open(css_file, "a", encoding="utf-8") as f:
        f.write(css_rule)
    print(f"Successfully appended STRONG CSS rule to {css_file}")
except Exception as e:
    print(f"Error appending to file: {e}")
