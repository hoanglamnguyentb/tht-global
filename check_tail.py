import os

css_file = r"d:\HoangLam\MMO\tht-global\media\t4\optimize\css\theme.css"

with open(css_file, "rb") as f:
    f.seek(-1000, os.SEEK_END)
    content = f.read().decode('utf-8', errors='ignore')
    print("--- LAST 1000 BYTES ---")
    print(content)
