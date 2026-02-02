import sys

def replace_lines(filename, start_line, end_line, replacement_file):
    # Read original file
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Read replacement content
    with open(replacement_file, 'r', encoding='utf-8') as f:
        new_content = f.read()
    
    # Adjust for 0-indexing (start_line is 1-indexed)
    start_idx = start_line - 1
    end_idx = end_line # Slice is exclusive at end, so this covers up to end_line (1-indexed)
    
    # Actually, for lines 1259 to 1270:
    # We want to replace lines[1258] to lines[1269] (inclusive) 
    # Python slice [1258:1270] replaces 1258..1269.
    
    # Check bounds
    if start_idx < 0 or end_idx > len(lines):
        print(f"Error: Bounds {start_line}-{end_line} out of range (Total {len(lines)})")
        return

    # Replace
    # Ensure newline at end of replacement if needed, or matched indentation
    # The replacement content already has newlines.
    
    # We will insert the new content string as a single item in the list slice?
    # No, we should split it into lines if we want to be safe, or just assign the string to the slice?
    # Assigning a string to a list slice iterates the string. Use a list of lines.
    
    new_lines_list = new_content.splitlines(keepends=True)
    # Ensure they have \n
    new_lines_list = [line if line.endswith('\n') else line + '\n' for line in new_lines_list]
    
    # Slice replacement
    lines[start_idx:end_idx] = new_lines_list
    
    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Successfully replaced lines {start_line}-{end_line} in {filename}")

if __name__ == "__main__":
    replace_lines(sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4])
