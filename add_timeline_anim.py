import re

with open("src/App.jsx", "r", encoding="utf-8") as f:
    content = f.read()

timeline_anim = """
              const lines = ref.current.querySelectorAll(".timeline-line");
              if (lines.length > 0) {
                gsap.to(lines, {
                  scaleY: 1,
                  duration: 1.5,
                  stagger: 0.3,
                  ease: "power3.inOut",
                  scrollTrigger: {
                    trigger: ref.current,
                    start: "top 75%",
                  }
                });
              }
              const dots = ref.current.querySelectorAll(".timeline-dot");
              if (dots.length > 0) {
                gsap.to(dots, {
                  scale: 1,
                  duration: 0.5,
                  stagger: 0.3,
                  ease: "back.out(1.7)",
                  scrollTrigger: {
                    trigger: ref.current,
                    start: "top 75%",
                  }
                });
              }
"""

# Find the exact pattern with arbitrary whitespace
pattern = re.compile(r'start:\s*"top 80%",?\s*\}\}\s*\);\s*\}\s*\}\);', re.MULTILINE | re.DOTALL)
match = pattern.search(content)

if match:
    replacement = match.group(0).replace(");", ");\n" + timeline_anim)
    content = content[:match.start()] + replacement + content[match.end():]
    with open("src/App.jsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced")
else:
    print("Not found")

