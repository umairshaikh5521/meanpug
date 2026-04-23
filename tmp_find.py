import re

with open('public/assets/js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

matches = list(re.finditer(r'responseType\s*=\s*["\']json["\']', content))
print(f'Found {len(matches)} occurrences')
for i, m in enumerate(matches[:3]):
    start = max(0, m.start() - 100)
    end = min(len(content), m.end() + 200)
    print(f'--- occurrence {i} ---')
    print(content[start:end])
