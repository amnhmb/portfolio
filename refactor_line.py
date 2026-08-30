import re

with open("src/App.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Education line
edu_before = '                    <div key={index} className="relative pl-8 border-l border-accent">\n                      <div className="absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#ECECEC]"></div>'
edu_after = '                    <div key={index} className="relative pl-8">\n                      <div className="timeline-line absolute left-0 top-0 w-px h-full bg-accent origin-top scale-y-0"></div>\n                      <div className="timeline-dot absolute w-3 h-3 rounded-full bg-accent -left-[5.5px] top-2 ring-4 ring-[#ECECEC] scale-0"></div>'

content = content.replace(edu_before, edu_after)

# Experience line
exp_before = '                <div key={index} className="relative pl-8 md:pl-12 border-l border-accent ml-2 md:ml-4">\n                  <div className="absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#ECECEC]"></div>'
exp_after = '                <div key={index} className="relative pl-8 md:pl-12 ml-2 md:ml-4">\n                  <div className="timeline-line absolute left-0 top-0 w-px h-full bg-accent origin-top scale-y-0"></div>\n                  <div className="timeline-dot absolute w-3 h-3 rounded-full bg-accent -left-[5.5px] top-2 ring-4 ring-[#ECECEC] scale-0"></div>'

content = content.replace(exp_before, exp_after)

with open("src/App.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
