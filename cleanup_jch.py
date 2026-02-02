import os

target_dir = r"d:\HoangLam\MMO\tht-global"

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_lines = []
    changes_made = False
    jch_template_depth = 0
    
    for line in lines:
        # Case 1: The container nav
        if 'class="navbar jch-reduced-dom-container"' in line:
            new_line = line.replace('class="navbar jch-reduced-dom-container"', 'class="navbar"')
            new_lines.append(new_line)
            changes_made = True
            continue
        
        # Case 2: The opening template tag
        if '<template class="jch-reduced-dom-template">' in line:
            jch_template_depth += 1
            changes_made = True
            continue # Remove line
            
        # Case 3: The closing template tag
        if '</template>' in line:
            # Check if this closes a jch template
            if jch_template_depth > 0:
                jch_template_depth -= 1
                changes_made = True
                continue # Remove line
        
        new_lines.append(line)
        
    if changes_made:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Updated: {filepath}")

print("Starting cleanup...")
for root, dirs, files in os.walk(target_dir):
    # Exclude unwanted dirs if any
    for file in files:
        if file.endswith(".html"):
            process_file(os.path.join(root, file))
print("Cleanup complete.")
