import os

src_path = r"d:\HoangLam\MMO\tht-global\en\company-incorporation\singapore.html"
dst_path = r"d:\HoangLam\MMO\tht-global\vi\thanh-lap-cong-ty-singapore.html"

try:
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        exit(1)
        
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"Read {len(content)} bytes.")
    
    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Wrote to {dst_path}")
    
    if os.path.exists(dst_path):
        print("Destination verification: Exists")
    else:
        print("Destination verification: FAILED")
        
except Exception as e:
    print(f"Error: {e}")
