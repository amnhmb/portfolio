import re

with open("src/App.jsx", "r", encoding="utf-8") as f:
    content = f.read()

animated_component = """
function AnimatedTextNumber({ text }) {
  const nodeRef = useRef(null);
  
  useEffect(() => {
    if (!nodeRef.current) return;
    const match = String(text).match(/^(.*?)(\\d+(?:\\.\\d+)?)(.*)$/);
    if (!match) return;
    
    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const isFloat = numStr.includes('.');
    const decimals = isFloat ? numStr.split('.')[1].length : 0;
    const endValue = parseFloat(numStr);
    
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;
    
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: nodeRef.current,
          start: "top 90%"
        },
        onUpdate: () => {
          if (nodeRef.current) {
            const currentVal = isFloat ? obj.val.toFixed(decimals) : Math.round(obj.val);
            nodeRef.current.innerHTML = `${prefix}${currentVal}${suffix}`;
          }
        }
      });
    });
    
    return () => ctx.revert();
  }, [text]);

  return <span ref={nodeRef}>{text}</span>;
}
"""

content = content.replace("function App() {", animated_component + "\nfunction App() {")

# Replace render logic in details
content = content.replace("<span>{detail}</span>", "<span><AnimatedTextNumber text={detail} /></span>")

# Replace render logic in stats
content = content.replace("{t('research.stats.period')}", "<AnimatedTextNumber text={t('research.stats.period')} />")
content = content.replace("{t('research.stats.acc')}", "<AnimatedTextNumber text={t('research.stats.acc')} />")
content = content.replace("{t('research.stats.f1')}", "<AnimatedTextNumber text={t('research.stats.f1')} />")
content = content.replace("{t('research.stats.map')}", "<AnimatedTextNumber text={t('research.stats.map')} />")

with open("src/App.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
