import os
import re
import sys

# Force unbuffered output
sys.stdout.reconfigure(encoding='utf-8')

def clean_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Remove jch-reduced-dom-container class from nav tags
        content = content.replace('class="navbar jch-reduced-dom-container"', 'class="navbar"')
        
        # 2. Remove the template tags but KEEP the content inside
        pattern = r'<template class="jch-reduced-dom-template">\s*([\s\S]*?)\s*</template>'
        
        def replace_template(match):
            return match.group(1)
            
        content = re.sub(pattern, replace_template, content)
        
        if content != original_content:
            # print(f"Fixing: {filepath}")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    print("Starting cleanup script...")
    root_dir = r"d:\HoangLam\MMO\tht-global"
    count = 0
    checked_files = 0
    
    for subdir, dirs, files in os.walk(root_dir):
        # Skip .git or other hidden folders to speed up
        if '.git' in dirs:
            dirs.remove('.git')
        
        print(f"Scanning directory: {subdir}")
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(subdir, file)
                checked_files += 1
                if clean_file(filepath):
                    count += 1
                    print(f"Fixed: {file}")
                    
    print(f"Finished. Checked {checked_files} HTML files. Total files fixed: {count}")

if __name__ == "__main__":
    main()
