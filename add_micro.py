import re

with open("src/App.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Skills hover and tap
content = content.replace(
    'className="skill-item px-6 py-3 bg-white border border-gray-200 rounded-md text-sm font-medium shadow-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-3"',
    'className="skill-item px-6 py-3 bg-white border border-gray-200 rounded-md text-sm font-medium shadow-sm hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center gap-3"'
)

# Projects hover and tap
content = content.replace(
    'className="group flex flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300"',
    'className="group flex flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"'
)

# Achievements hover and tap
content = content.replace(
    'className="group flex flex-col items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300"',
    'className="group flex flex-col items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"'
)

with open("src/App.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
