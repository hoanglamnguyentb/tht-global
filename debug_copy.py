import shutil
import os
import sys

src = r"d:\HoangLam\MMO\tht-global\en\company-incorporation\singapore.html"
dst = r"d:\HoangLam\MMO\tht-global\vi\thanh-lap-cong-ty-singapore.html"

print(f"Python executable: {sys.executable}")
print(f"CWD: {os.getcwd()}")
print(f"Checking src: {src} -> {os.path.exists(src)}")
print(f"Checking dst dir: {os.path.dirname(dst)} -> {os.path.exists(os.path.dirname(dst))}")

try:
    shutil.copy2(src, dst)
    print("Copy success")
except Exception as e:
    print(f"Copy failed: {e}")
