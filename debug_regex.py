
import re

filepath = r"d:\HoangLam\MMO\tht-global\vi\thanh-lap-cong-ty-singapore.html"

try:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"File read successfully. Length: {len(content)}")

    # Test the regex
    pattern = r'<template\s+[^>]*class=["\']jch-reduced-dom-template["\'][^>]*>\s*([\s\S]*?)\s*</template>'
    
    matches = re.finditer(pattern, content, flags=re.IGNORECASE)
    match_list = list(matches)
    
    print(f"Matches found: {len(match_list)}")
    
    for i, match in enumerate(match_list):
        print(f"Match {i}: {match.group(0)[:50]}...")

    if len(match_list) == 0:
        print("No matches found. Dumping snippet around expected location...")
        # Lines 2381-2383 roughly correspond to index... let's just find the string
        idx = content.find("jch-reduced-dom-template")
        if idx != -1:
            print(f"Found 'jch-reduced-dom-template' at index {idx}")
            start = max(0, idx - 100)
            end = min(len(content), idx + 200)
            print("Snippet:")
            print(content[start:end])
            
            # Why didn't regex match?
            # Let's try simpler regex
            simple_pattern = r'<template\s[^>]*class="jch-reduced-dom-template"[^>]*>'
            print("Testing simpler pattern...")
            simple_match = re.search(simple_pattern, content[start:end], flags=re.DOTALL) # DOTALL shouldn't affect [] regex but helpful
            if simple_match:
                print("Simpler pattern matched!")
            else:
                 print("Simpler pattern DID NOT match.")

except Exception as e:
    print(f"Error: {e}")
