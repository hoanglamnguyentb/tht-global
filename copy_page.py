import shutil
import os

src = r"d:\HoangLam\MMO\tht-global\en\company-incorporation\singapore.html"
dst = r"d:\HoangLam\MMO\tht-global\vi\thanh-lap-cong-ty-singapore.html"

try:
    shutil.copy2(src, dst)
    print(f"Successfully copied {src} to {dst}")
except Exception as e:
    print(f"Error copying file: {e}")
