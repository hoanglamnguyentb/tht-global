
import os

parts = ['part1.html', 'part2.html', 'part3.html', 'part4.html', 'part5.html']
target = 'final_merged.html'

with open(target, 'wb') as outfile:
    for part in parts:
        if os.path.exists(part):
            with open(part, 'rb') as infile:
                outfile.write(infile.read())
            print(f"Merged {part}")
        else:
            print(f"Missing {part}")

print(f"Finished merging to {target}")
