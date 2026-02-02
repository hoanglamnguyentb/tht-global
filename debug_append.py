import os
import sys

css_file = r"d:\HoangLam\MMO\tht-global\media\t4\optimize\css\theme.css"

if not os.path.exists(css_file):
    print(f"File not found: {css_file}")
    sys.exit(1)

print(f"Initial size: {os.path.getsize(css_file)}")

try:
    with open(css_file, "a", encoding="utf-8") as f:
        f.write("\n/* Test Append */")
    print("Append successful")
    print(f"New size: {os.path.getsize(css_file)}")
except Exception as e:
    print(f"Error: {e}")
