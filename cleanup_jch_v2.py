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
        # Simplified regex: find <template with that class, capture content, find </template>
        # Note: This assumes nested templates don't exist or are rare. The greedy match might be dangerous if multiple templates are in one file.
        # But we use non-greedy matching ([\s\S]*?) so it should stop at the first </template>.
        
        # New pattern:
        # 1. Opening tag: <template ... jch-reduced-dom-template ... >
        # 2. Content: ( ... )
        # 3. Closing tag: </template>

        pattern = r'<template[^>]*jch-reduced-dom-template[^>]*>\s*([\s\S]*?)\s*</template>'
        
        def replace_with_log(match):
            # with open("d:\\HoangLam\\MMO\\tht-global\\log.txt", "a", encoding="utf-8") as log:
            #     log.write(f"Matched in {filepath}\n")
            return match.group(1)
            
        new_content = re.sub(pattern, replace_with_log, content, flags=re.IGNORECASE)
        
        if new_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
            
        return False

    except Exception as e:
        with open("d:\\HoangLam\\MMO\\tht-global\\error_log.txt", "a", encoding="utf-8") as log:
            log.write(f"Error processing {filepath}: {e}\n")
        return False

def main():
    log_path = r"d:\HoangLam\MMO\tht-global\log.txt"
    with open(log_path, "w", encoding="utf-8") as f:
        f.write("Starting cleanup...\n")
        
    root_dir = r"d:\HoangLam\MMO\tht-global"
    count = 0
    checked_files = 0
    
    for subdir, dirs, files in os.walk(root_dir):
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(subdir, file)
                checked_files += 1
                if clean_file(filepath):
                    count += 1
                    with open(log_path, "a", encoding="utf-8") as f:
                        f.write(f"Fixed: {file}\n")
                    
    with open(log_path, "a", encoding="utf-8") as f:
        f.write(f"Finished. Checked {checked_files} HTML files. Total fixed: {count}\n")

if __name__ == "__main__":
    main()
