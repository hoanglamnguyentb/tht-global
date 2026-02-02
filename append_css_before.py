import os

css_file = r"d:\HoangLam\MMO\tht-global\media\t4\optimize\css\theme.css"
css_rule = """
/* Fix for empty col and col-12 before pseudo-elements */
.row .col:empty::before,
.row .col-12:empty::before {
    background: none !important;
    border: none !important;
}
"""

try:
    with open(css_file, "a", encoding="utf-8") as f:
        f.write(css_rule)
    print(f"Successfully appended CSS rule to {css_file}")
except Exception as e:
    print(f"Error appending to file: {e}")
