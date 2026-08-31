import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Mail, X, MoreVertical } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiProteus, SiIntel, SiMultisim, SiSiemens, SiAutocad, SiPython, SiArduino, SiEspressif } from 'react-icons/si';

// Software logo shown when a skill chip is hovered. Chips without an official
// brand glyph fall back to a generic chip icon.
const SKILL_ICONS = {
  'Proteus': SiProteus,
  'Quartus II': SiIntel,
  'NI Multisim': SiMultisim,
  'L-Edit IC': SiSiemens,
  'AutoCAD': SiAutocad,
  'Python': SiPython,
  'Arduino': SiArduino,
  'ESP32': SiEspressif,
};
// Skills whose real logo is a raster (no brand glyph in react-icons). Painted
// as a navy silhouette via CSS mask so they match the other accent glyphs.
// `w` is the render width in px at 16px tall (mask keeps aspect).
const SKILL_LOGOS = {
  'MATLAB': { src: 'logos/matlab.png', w: 18 },
  'Microwind': { src: 'logos/microwind.png', w: 52 },
};
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-mono/400.css';
import { academics, diplomaGPA, degreeGPA } from './data/academics';

gsap.registerPlugin(ScrollTrigger);

const Scene = lazy(() => import('./Scene'));

function SimpleLineChart({ data, title, type, onPointClick }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  if (!data || data.length === 0) return null;
  const w = 300;
  const h = 100;
  const padding = 20;
  
  const minGPA = 3.0;
  const maxGPA = 4.0;
  
  const getX = (index) => padding + (index / (data.length - 1)) * (w - padding * 2);
  const getY = (val) => h - padding - ((val - minGPA) / (maxGPA - minGPA)) * (h - padding * 2);
  
  const points = data.map((val, i) => `${getX(i)},${getY(val)}`).join(' ');
  
  return (
    <div className="flex flex-col items-start mt-4 relative w-full overflow-visible">
      <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">{title}</span>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible stroke-[#1e3a8a]">
        {/* Grid lines */}
        <line x1={padding} y1={getY(4.0)} x2={w-padding} y2={getY(4.0)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={getY(3.5)} x2={w-padding} y2={getY(3.5)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={getY(3.0)} x2={w-padding} y2={getY(3.0)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        
        {/* Data Line */}
        <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} pointerEvents="none" />
        
        {/* Data Points */}
        {data.map((val, i) => (
          <g 
            key={i} 
            className="cursor-pointer transition-transform duration-300 origin-center" 
            style={{ transformOrigin: `${getX(i)}px ${getY(val)}px` }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => onPointClick(type, i)}
          >
            {hoveredIdx === i && (
              <rect x={getX(i) - 25} y={getY(val) - 34} width="50" height="20" rx="4" fill="#ffffff" stroke="#1e3a8a" strokeWidth="1" />
            )}
            <circle 
              cx={getX(i)} cy={getY(val)} 
              r={hoveredIdx === i ? "5" : "4"}
              fill={hoveredIdx === i ? "#1e3a8a" : "#ECECEC"}
              strokeWidth={hoveredIdx === i ? "0" : "1.5"}
              stroke="#1e3a8a"
            />
            {hoveredIdx === i ? (
              <text x={getX(i)} y={getY(val) - 16} fontSize="7.5" fill="#1e3a8a" stroke="none" textAnchor="middle" className="font-mono font-medium pointer-events-none">{val.toFixed(2)}</text>
            ) : (
              <text x={getX(i)} y={getY(val) - 11} fontSize="7.5" fill="#1e3a8a" stroke="none" textAnchor="middle" className="font-mono pointer-events-none">{val.toFixed(2)}</text>
            )}
            <text x={getX(i)} y={h} fontSize="8" fill="#6b7280" stroke="none" textAnchor="middle" className="font-mono pointer-events-none">S{i+1}</text>
            
            {/* Invisible larger hit area for easier clicking */}
            <circle cx={getX(i)} cy={getY(val)} r="15" fill="transparent" stroke="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}


function SlideOverDrawer({ transcript, onClose, onSelectTranscript, t }) {
  const drawerRef = useRef();

  useEffect(() => {
    if (!transcript) return;
    
    document.body.style.overflow = 'hidden';
    
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = drawerRef.current?.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent?.[0];
    const lastFocusableElement = focusableContent?.[focusableContent.length - 1];

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      
      const data = academics[transcript.type];
      if (e.key === 'ArrowLeft' && transcript.semIndex > 0) {
        onSelectTranscript({ type: transcript.type, semIndex: transcript.semIndex - 1 });
      }
      if (e.key === 'ArrowRight' && transcript.semIndex < data.semesters.length - 1) {
        onSelectTranscript({ type: transcript.type, semIndex: transcript.semIndex + 1 });
      }
      
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [transcript, onClose, onSelectTranscript]);

  const isOpen = !!transcript;
  const data = isOpen ? academics[transcript.type] : null;
  const semData = isOpen ? data.semesters[transcript.semIndex] : null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex justify-end ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="drawer-title"
    >
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose} 
        aria-hidden="true" 
      />
      
      <div 
        ref={drawerRef}
        className={`relative w-full max-w-md h-full bg-[#ECECEC] border-l border-gray-200 shadow-2xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {isOpen && semData && data && (
          <>
            <div className="flex flex-col p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 id="drawer-title" className="text-xl font-bold text-[#111111] tracking-tight">{data.level}</h2>
                  <p className="text-sm text-gray-500 font-mono tracking-widest uppercase mt-1">{t('education.semester')} {semData.sem} · {semData.term}</p>
                </div>
                <button onClick={onClose} className="p-2 text-gray-400 hover:text-[#111111] hover:bg-gray-100 rounded-md transition-colors" aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => transcript.semIndex > 0 && onSelectTranscript({ type: transcript.type, semIndex: transcript.semIndex - 1 })}
                  disabled={transcript.semIndex === 0}
                  className="px-2 py-1 text-gray-400 disabled:opacity-30 hover:text-[#111111] transition-colors"
                  aria-label="Previous semester"
                >
                  ‹
                </button>
                <div className="flex gap-1">
                  {data.semesters.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectTranscript({ type: transcript.type, semIndex: i })}
                      className={`w-8 h-8 rounded-full text-xs font-mono flex items-center justify-center transition-colors ${
                        transcript.semIndex === i 
                          ? 'bg-[#1e3a8a] text-white font-bold' 
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      aria-selected={transcript.semIndex === i}
                      role="tab"
                    >
                      S{s.sem}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => transcript.semIndex < data.semesters.length - 1 && onSelectTranscript({ type: transcript.type, semIndex: transcript.semIndex + 1 })}
                  disabled={transcript.semIndex === data.semesters.length - 1}
                  className="px-2 py-1 text-gray-400 disabled:opacity-30 hover:text-[#111111] transition-colors"
                  aria-label="Next semester"
                >
                  ›
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100 relative mt-2">
                {semData.gpa !== null && semData.gpa >= 3.5 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#eff6ff] border border-[#1e40af] text-[#1e3a8a] px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm whitespace-nowrap">
                    {t('education.deansList')}
                  </div>
                )}
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">GPA</p>
                  <p className="text-3xl font-bold text-[#1e3a8a]">{semData.gpa !== null ? semData.gpa.toFixed(2) : 'N/A'}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">CGPA</p>
                  <p className="text-3xl font-bold text-[#111111]">{semData.cgpa.toFixed(2)}</p>
                </div>
              </div>

              {semData.note ? (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-light text-sm italic">
                  {semData.note}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-12 text-xs font-mono text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">
                    <div className="col-span-8">{t('education.subject')}</div>
                    <div className="col-span-2 text-center">{t('education.grade')}</div>
                    <div className="col-span-2 text-right">{t('education.credit')}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {semData.courses.map((course, i) => (
                      <li key={i} className="grid grid-cols-12 items-start text-sm border-b border-gray-100 pb-3 last:border-0">
                        <div className="col-span-8 pr-4">
                          <p className="font-medium text-[#111111] leading-snug">{course.name}</p>
                          <p className="text-gray-400 font-mono text-xs mt-1">{course.code}</p>
                        </div>
                        <div className="col-span-2 text-center font-bold text-[#1e3a8a] self-center">
                          {course.grade}
                        </div>
                        <div className="col-span-2 text-right font-mono text-gray-500 self-center">
                          {course.credit}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}


function AnimatedTextNumber({ text }) {
  const nodeRef = useRef(null);
  
  useEffect(() => {
    if (!nodeRef.current) return;
    // Only count up genuine metrics: an optional word label, then a number at
    // the end, with an optional % or unit. This avoids animating model numbers
    // embedded in prose (ESP32, ETS-88, DHT22, "4 months").
    const match = String(text).match(/^((?:[A-Za-z.]+ )*)(\d+(?:\.\d+)?)(\s*%?)$/);
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

// Terminal-style decode: characters resolve from random glyphs into the final
// text, left to right. Lightweight (single rAF loop), respects reduced motion.
function ScrambleText({ text, className, delay = 0, trigger = 'mount', active = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.textContent = text; return; }
    // Gate for mount-triggered decodes (e.g. hero waits for the splash to end).
    if (trigger === 'mount' && !active) { el.textContent = ''; return; }

    const glyphs = '!<>-_\\/[]{}=+*^?#01__';
    const final = String(text);
    const revealPerFrame = 0.6; // characters locked in per frame
    let raf, timer, io;

    const scramble = (s) => s.replace(/[^ \n]/g, () => glyphs[(Math.random() * glyphs.length) | 0]);

    const run = () => {
      let frame = 0;
      const tick = () => {
        const revealed = Math.floor(frame * revealPerFrame);
        let out = '';
        for (let i = 0; i < final.length; i++) {
          if (final[i] === ' ' || final[i] === '\n') { out += final[i]; continue; }
          out += i < revealed ? final[i] : glyphs[(Math.random() * glyphs.length) | 0];
        }
        el.textContent = out;
        frame++;
        if (revealed <= final.length) raf = requestAnimationFrame(tick);
        else el.textContent = final;
      };
      el.textContent = scramble(final);
      timer = setTimeout(() => { raf = requestAnimationFrame(tick); }, delay);
    };

    if (trigger === 'view') {
      io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { io.disconnect(); io = null; run(); }
      }, { threshold: 0.35 });
      io.observe(el);
    } else {
      run();
    }

    return () => { clearTimeout(timer); if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
  }, [text, delay, trigger, active]);

  return <span ref={ref} className={className}>{text}</span>;
}

// Entry splash: "amnhmb" decodes in, a navy line draws from a to b, then it
// fades to reveal the site. Shows once per browser session.
function SplashScreen({ onDone }) {
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const finish = () => { try { sessionStorage.setItem('amnhmb_splash', '1'); } catch (e) {} onDone(); };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = textRef.current;
    const line = lineRef.current;
    const root = rootRef.current;
    const final = 'amnhmb';
    document.body.style.overflow = 'hidden';

    if (reduce || !el) {
      const tmo = setTimeout(finish, 500);
      return () => { clearTimeout(tmo); document.body.style.overflow = ''; };
    }

    const glyphs = '!<>-_\\/[]{}=+*^?#01__';
    let raf, frame = 0;
    const revealPerFrame = 0.09;
    let lineTween, exitTween, holdTimer;

    const drawLine = () => {
      lineTween = gsap.to(line, {
        scaleX: 1, duration: 1.0, ease: 'power3.inOut',
        onComplete: () => {
          holdTimer = setTimeout(() => {
            exitTween = gsap.to(root, { opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: finish });
          }, 1200);
        }
      });
    };

    const tick = () => {
      const revealed = Math.floor(frame * revealPerFrame);
      let out = '';
      for (let i = 0; i < final.length; i++) {
        out += i < revealed ? final[i] : glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = out;
      frame++;
      if (revealed <= final.length) raf = requestAnimationFrame(tick);
      else { el.textContent = final; drawLine(); }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lineTween) lineTween.kill();
      if (exitTween) exitTween.kill();
      if (holdTimer) clearTimeout(holdTimer);
      document.body.style.overflow = '';
    };
  }, [onDone]);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[200] flex items-center justify-center bg-[#ECECEC]">
      <div className="flex flex-col items-center">
        <span ref={textRef} className="font-mono font-bold text-4xl sm:text-6xl tracking-tight text-[#111111]">amnhmb</span>
        <div ref={lineRef} className="h-[3px] w-full bg-accent origin-left mt-3" style={{ transform: 'scaleX(0)' }}></div>
      </div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [showSplash, setShowSplash] = useState(() => {
    try { return sessionStorage.getItem('amnhmb_splash') !== '1'; } catch (e) { return true; }
  });
  // Hero animations wait until the splash is gone (or start immediately if the
  // splash was already shown this session).
  const [heroReady, setHeroReady] = useState(() => {
    try { return sessionStorage.getItem('amnhmb_splash') === '1'; } catch (e) { return false; }
  });
  const [selectedTranscript, setSelectedTranscript] = useState(null); // { type, semIndex }
  const [menuOpen, setMenuOpen] = useState(false); // mobile section menu
  const navLinks = [
    { id: 'about', key: 'nav.about' },
    { id: 'education', key: 'nav.education' },
    { id: 'skills', key: 'nav.skills' },
    { id: 'experience', key: 'nav.experience' },
    { id: 'projects', key: 'nav.projects' },
    { id: 'research', key: 'nav.research' },
    { id: 'contact', key: 'nav.contact' },
  ];
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  const mainRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const skillsRef = useRef();
  const expRef = useRef();
  const projectsRef = useRef();
  const achievementsRef = useRef();
  const researchRef = useRef();
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ms' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  const handlePointClick = (type, semIndex) => {
    setSelectedTranscript({ type, semIndex });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!isReducedMotion) {
        // Keep the rest of the hero hidden; reveal it only once the splash is
        // gone and the name has decoded (heroReady), so the intro is sequential.
        gsap.set(".hero-el", { y: 40, opacity: 0 });
        if (heroReady) {
          gsap.to(".hero-el", { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power4.out", delay: 1.1 });
        }

        gsap.to(".hero-content", {
          yPercent: 20,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        const revealSections = [aboutRef, educationRef, skillsRef, expRef, projectsRef, achievementsRef, researchRef];
        revealSections.forEach((ref) => {
          if (ref.current) {
            gsap.fromTo(ref.current.children,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
              }}
            );

              const lines = ref.current.querySelectorAll(".timeline-line");
              if (lines.length > 0) {
                gsap.fromTo(lines,
                  { scaleY: 0 },
                  {
                    scaleY: 1,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power3.inOut",
                    scrollTrigger: {
                      trigger: ref.current,
                      start: "top 75%",
                    }
                  }
                );
              }
              const dots = ref.current.querySelectorAll(".timeline-dot");
              if (dots.length > 0) {
                gsap.fromTo(dots,
                  { scale: 0 },
                  {
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                      trigger: ref.current,
                      start: "top 75%",
                    }
                  }
                );
              }

          }
        });

      }
    }, mainRef);

    return () => ctx.revert();
  }, [lang, heroReady]);

  const skillsList = t('skills.items', { returnObjects: true }) || [];
  const softList = t('skills.softItems', { returnObjects: true }) || [];
  const langList = t('skills.languages', { returnObjects: true }) || [];
  const expList = t('experience.items', { returnObjects: true }) || [];
  const eduList = t('education.items', { returnObjects: true }) || [];
  
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white" ref={mainRef}>

      {showSplash && <SplashScreen onDone={() => { setShowSplash(false); setHeroReady(true); }} />}

      {/* SlideOver Drawer */}
      <SlideOverDrawer 
        transcript={selectedTranscript} 
        onClose={() => setSelectedTranscript(null)} 
        onSelectTranscript={setSelectedTranscript}
        t={t} 
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#ECECEC]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-sans font-bold text-xl tracking-tight text-[#111111] nav-logo">
            amnhmb<span className="text-accent">.</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
              {navLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="hover:text-accent transition-colors">{t(l.key)}</a>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-600 hover:text-white hover:bg-[#111111] transition-all bg-white border border-gray-200 px-4 py-2 rounded-md"
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>
            {/* Mobile dot menu */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-[#111111] hover:text-accent transition-colors"
            >
              {menuOpen ? <X size={20} /> : <MoreVertical size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden border-t border-gray-200/50 bg-[#ECECEC]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-2 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-gray-700 hover:text-accent border-b border-gray-200/40 last:border-b-0 transition-colors"
              >
                {t(l.key)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 lg:pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="relative flex items-start lg:items-center min-h-0 lg:min-h-[85vh] pt-0 pb-12 lg:pt-24 lg:py-0">
          <div className="absolute right-0 top-0 w-full h-[110%] -z-10 opacity-20 pointer-events-none">
            {isDesktop ? (
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            ) : (
              <div className="absolute right-0 top-0 w-[150%] h-[150%] rounded-full bg-gradient-to-tr from-gray-300 to-gray-100 blur-3xl opacity-50 transform translate-x-1/4 -translate-y-1/4"></div>
            )}
          </div>
          
          <div className="relative w-full lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 lg:items-center">
            {/* greeting + name: stacked above photo on mobile, left column on desktop */}
            <div className="hero-content mb-1 lg:mb-0 lg:max-w-2xl lg:col-start-1 lg:row-start-1 lg:self-center">
              <p className="text-accent font-mono mb-2 sm:mb-6 text-[10px] sm:text-sm tracking-widest uppercase">
                // <ScrambleText text={t('hero.greeting')} active={heroReady} />
              </p>
              <h1 className="whitespace-pre-line text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-[#111111]">
                <ScrambleText text={t('hero.name').replace(/ Bin /, '\nBin ')} delay={250} active={heroReady} />
              </h1>
            </div>

            {/* Photo: mobile = portrait below name; desktop = right column */}
            <div className="hero-el w-full flex justify-center pointer-events-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:self-center">
              <div
                className="relative w-3/4 sm:w-80 md:w-96 lg:w-[32rem]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)',
                  maskComposite: 'intersect'
                }}
              >
                <picture>
                  <source srcSet={`${import.meta.env.BASE_URL}hero-optimized.webp`} type="image/webp" />
                  <img
                    src={`${import.meta.env.BASE_URL}hero-optimized.jpg`}
                    alt="Aiman Hambali"
                    className="w-full h-auto object-contain"
                  />
                </picture>
              </div>
            </div>

            {/* role, description, CTA, contact: below on mobile, left column row 2 on desktop */}
            <div className="mt-1 lg:mt-0 lg:col-start-1 lg:row-start-2 lg:self-center max-w-2xl">
              <h2 className="hero-el text-xl md:text-3xl font-medium text-gray-500 mb-4 sm:mb-8 tracking-tight">
                {t('hero.role')}
              </h2>
              <p className="hero-el text-gray-600 text-lg md:text-xl mb-8 sm:mb-12 max-w-xl leading-relaxed font-light">
                {t('hero.description')}
              </p>

              <div className="hero-el flex flex-wrap items-center gap-3 sm:gap-6">
                <a href="mailto:aimannhambalii@gmail.com" className="px-4 py-2.5 text-sm sm:text-base sm:px-8 sm:py-4 bg-[#111111] text-white rounded-md font-medium hover:bg-accent hover:scale-[0.98] transition-all duration-300">
                  {t('hero.contact')}
                </a>
                <a href={`${import.meta.env.BASE_URL}CV_AIMAN_HAMBALI.pdf`} download="CV_AIMAN_HAMBALI.pdf" className="px-4 py-2.5 text-sm sm:text-base sm:px-8 sm:py-4 border border-gray-300 text-[#111111] rounded-md font-medium hover:border-accent hover:text-accent transition-all duration-300">
                  {t('hero.resume')}
                </a>
              </div>

              <div className="hero-el flex flex-wrap items-center gap-4 sm:gap-8 mt-8 sm:mt-16 text-gray-600">
                <span className="font-mono text-xs sm:text-sm tracking-widest uppercase">aimannhambalii@gmail.com</span>
                <span className="font-mono text-xs sm:text-sm tracking-widest uppercase">+60 11-2550 7190</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-32 border-t border-gray-200 mt-20">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 relative w-full max-w-[16rem] mx-auto md:max-w-none md:mx-0 aspect-square">
              <div className="absolute inset-0 bg-gray-100 border border-gray-200 rounded-lg translate-x-4 translate-y-4"></div>
              <img 
                src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                alt="Aiman Hambali"
                className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 z-10 border border-gray-200"
              />
            </div>
            <div className="md:col-span-7 space-y-8 md:pl-10">
              <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4 text-[#111111] tracking-tight">
                <ScrambleText text={t('about.title')} trigger="view" />
              </h2>
              <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic Performance Section */}
        <section id="education" ref={educationRef} className="py-32 border-t border-gray-200">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
                <ScrambleText text={t('education.title')} trigger="view" />
              </h2>
              <div className="space-y-16">
                {Array.isArray(eduList) && eduList.map((edu, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="timeline-line absolute left-0 top-0 h-full w-px bg-accent origin-top"></div>
                    <div className="timeline-dot absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#ECECEC]"></div>
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-[#111111] max-w-md leading-tight">{edu.degree}</h3>
                        {edu.type && (
                          <button 
                            onClick={() => handlePointClick(edu.type, 0)} 
                            className="shrink-0 px-3 py-1 bg-gray-100 text-[#111111] rounded text-xs font-medium hover:bg-gray-200 hover:text-accent transition-colors"
                          >
                            {t('education.viewTranscript')}
                          </button>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest uppercase mb-1">
                        <span className="text-accent">{edu.school}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500">{edu.location}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">{edu.period}</span>
                    </div>
                    
                    {Array.isArray(edu.details) && (
                      <ul className="text-gray-600 text-base leading-relaxed font-light mt-4 space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                            <span><AnimatedTextNumber text={detail} /></span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {edu.results && (
                      <div className="mt-6">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 block">{edu.resultsTitle}</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 max-w-2xl">
                          {edu.results.map((res, i) => (
                            <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-100">
                              <span className="text-sm text-gray-500 font-light truncate mr-2">{res.subject}</span>
                              <span className="text-sm font-medium text-[#111111] font-mono w-7 text-left shrink-0">{res.grade}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-5 bg-white border border-gray-200 rounded-lg p-8 self-start shadow-sm mt-16 md:mt-0 sticky top-32">
              <h3 className="text-2xl font-bold mb-8 text-[#111111] tracking-tight">
                {t('education.performance')}
              </h3>
              <SimpleLineChart data={degreeGPA} title="Degree GPA (Sem 1 - 6)" type="degree" onPointClick={handlePointClick} />
              <div className="h-8"></div>
              <SimpleLineChart data={diplomaGPA} title="Diploma GPA (Sem 1 - 5)" type="diploma" onPointClick={handlePointClick} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            <ScrambleText text={t('skills.title')} trigger="view" />
          </h2>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {Array.isArray(skillsList) && skillsList.map((skill, index) => {
              const Icon = SKILL_ICONS[skill];
              const logo = SKILL_LOGOS[skill];
              return (
              <div key={index} className="group skill-item px-6 py-3 bg-white border border-gray-200 rounded-md text-sm font-medium shadow-sm hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center gap-3">
                <span className="text-[#111111] group-hover:text-accent transition-colors">{skill}</span>
                <span className="relative inline-flex items-center justify-end min-w-[3.25rem] h-4">
                  <span className="text-gray-400 font-mono text-[10px] tracking-wider uppercase transition-opacity duration-200 group-hover:opacity-0">TECH</span>
                  {Icon && <Icon className="absolute right-0 w-4 h-4 text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />}
                  {logo && (
                    <span
                      role="img"
                      aria-label={skill}
                      className="absolute right-0 h-4 text-accent bg-current opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      style={{
                        width: `${logo.w}px`,
                        WebkitMaskImage: `url(${import.meta.env.BASE_URL}${logo.src})`,
                        maskImage: `url(${import.meta.env.BASE_URL}${logo.src})`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center right',
                        maskPosition: 'center right',
                      }}
                    />
                  )}
                </span>
              </div>
              );
            })}
          </div>

          <h3 className="text-2xl font-bold mt-16 mb-6 text-[#111111] tracking-tight">
            <ScrambleText text={t('skills.softTitle')} trigger="view" />
          </h3>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {Array.isArray(softList) && softList.map((skill, index) => (
              <div key={index} className="skill-item px-6 py-3 bg-white border border-gray-200 rounded-md text-sm font-medium shadow-sm hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center gap-3">
                <span className="text-[#111111]">{skill}</span>
                <span className="text-gray-400 font-mono text-[10px] tracking-wider uppercase">SOFT</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-16 mb-6 text-[#111111] tracking-tight">
            <ScrambleText text={t('skills.langTitle')} trigger="view" />
          </h3>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {Array.isArray(langList) && langList.map((lng, index) => (
              <div key={index} className="skill-item px-6 py-3 bg-white border border-gray-200 rounded-md shadow-sm hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#111111]">{lng.name}</span>
                  <span className="text-gray-400 font-mono text-[10px] tracking-wider uppercase">{lng.label}</span>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < lng.level ? 'bg-accent' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={expRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            <ScrambleText text={t('experience.title')} trigger="view" />
          </h2>
          
          <div className="space-y-16">
            {Array.isArray(expList) && expList.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 ml-2 md:ml-4">
                <div className="timeline-line absolute left-0 top-0 h-full w-px bg-accent origin-top"></div>
                <div className="timeline-dot absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#ECECEC]"></div>
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#111111]">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest uppercase">
                    <span className="text-accent">{exp.company}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                </div>
                {Array.isArray(exp.description) ? (
                  <ul className="text-gray-600 text-lg leading-relaxed font-light mt-4 space-y-3 max-w-3xl">
                    {exp.description.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                        <span><AnimatedTextNumber text={detail} /></span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-lg leading-relaxed font-light max-w-3xl">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111111] tracking-tight">
            <ScrambleText text={t('projects.title')} trigger="view" />
          </h2>
          <p className="text-lg text-gray-600 font-light mb-16 max-w-2xl leading-relaxed">
            {t('projects.intro')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {Array.isArray(t('projects.items', { returnObjects: true })) && t('projects.items', { returnObjects: true }).map((item, index) => (
              <div 
                key={index}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
              >
                <div 
                  className="w-full aspect-[16/9] overflow-hidden rounded-md border border-gray-100 mb-6 bg-gray-50"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}${item.image}`} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                {/* Tech Chips */}
                {item.tech && item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tech.map((tItem, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-mono tracking-wide rounded-md">
                        {tItem}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Action */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-md font-mono text-sm tracking-wide hover:bg-accent hover:text-white active:scale-95 transition-all duration-300"
                    >
                      {t('projects.viewLive')}
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 rounded-md font-mono text-sm tracking-wide">
                      {t('projects.private')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Research Section */}
        <section id="research" ref={researchRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            <ScrambleText text={t('research.title')} trigger="view" />
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8 pb-8 border-b border-gray-100">
              <div className="lg:w-2/3">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#111111] text-white px-3 py-1 text-xs font-mono tracking-widest uppercase rounded">
                    {t('research.meta')}
                  </span>
                  <span className="text-accent text-xs font-mono tracking-widest uppercase">
                    • {t('research.status')}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111] leading-tight mb-4">
                  {t('research.paperTitle')}
                </h3>
                <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                  {t('research.role')}
                </p>
              </div>
              <div className="lg:w-1/3 flex items-start lg:justify-end">
                <a 
                  href={`${import.meta.env.BASE_URL}iot-mushroom-research-paper.pdf`}
                  target="_blank" 
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-md font-medium hover:bg-accent hover:scale-[0.98] transition-all duration-300"
                >
                  {t('research.button')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{t('research.overviewLabel')}</h4>
                <p className="text-gray-600 text-lg leading-relaxed font-light">{t('research.overview')}</p>
              </div>
              <div>
                <div className="mb-10">
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{t('research.approachLabel')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">{t('research.approach')}</p>
                  
                  <div className="bg-[#ECECEC] border border-gray-100 rounded-md p-5 inline-block">
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-1"><AnimatedTextNumber text={t('research.stats.period')} /></div>
                    <div className="text-xs text-gray-500 font-mono tracking-wide">{t('research.stats.periodSub')}</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{t('research.collabLabel')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">{t('research.collab')}</p>
                  
                  <div className="bg-[#ECECEC] border border-gray-100 rounded-md p-5">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-[#111111] mb-1"><AnimatedTextNumber text={t('research.stats.acc')} /></div>
                        <div className="text-xs text-gray-500 font-mono tracking-wide leading-tight">{t('research.stats.accSub')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#111111] mb-1"><AnimatedTextNumber text={t('research.stats.f1')} /></div>
                        <div className="text-xs text-gray-500 font-mono tracking-wide leading-tight">{t('research.stats.f1Sub')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#111111] mb-1"><AnimatedTextNumber text={t('research.stats.map')} /></div>
                        <div className="text-xs text-gray-500 font-mono tracking-wide leading-tight">{t('research.stats.mapSub')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {Array.isArray(t('research.tags', { returnObjects: true })) && t('research.tags', { returnObjects: true }).map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-mono tracking-widest uppercase rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" ref={achievementsRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            <ScrambleText text={t('achievements.title')} trigger="view" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {Array.isArray(t('achievements.items', { returnObjects: true })) && t('achievements.items', { returnObjects: true }).map((item, index) => (
              <div 
                key={index}
                className="group flex flex-col items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-md border border-gray-100 mb-6 bg-gray-50">
                  <img 
                    src={`${import.meta.env.BASE_URL}${item.image}`} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className={`text-sm text-gray-500 font-mono tracking-wide uppercase leading-relaxed ${item.note ? 'mb-3' : ''}`}>
                  {item.caption}
                </p>
                {(item.note || item.link) && (
                  <div className="mt-auto pt-3 border-t border-gray-100 w-full">
                    {item.note && (
                      <p className="text-sm text-gray-400 font-light italic">
                        {item.note}
                      </p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline ${item.note ? 'mt-2' : ''}`}
                      >
                        {item.linkLabel || 'Link'} <span aria-hidden>&rarr;</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Other Activities Chips */}
          <div className="mt-16">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6">{t('achievements.otherLabel')}</h3>
            <div className="flex flex-wrap gap-3">
              {Array.isArray(t('achievements.other', { returnObjects: true })) && t('achievements.other', { returnObjects: true }).map((activity, index) => (
                <span key={index} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-mono tracking-wide rounded-md hover:border-gray-300 transition-colors">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer Section */}
        <section id="contact" className="py-24 border-t border-gray-200 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#111111] tracking-tight">
            <ScrambleText text={t('contact.title')} trigger="view" />
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full max-w-2xl">
            <a 
              href="mailto:aimannhambalii@gmail.com" 
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#ECECEC] border border-gray-200 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white rounded-lg font-mono tracking-wide transition-all duration-300 shadow-sm w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              aimannhambalii@gmail.com
            </a>
            <a 
              href="https://wa.me/601125507190" 
              target="_blank" 
              rel="noopener"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#ECECEC] border border-gray-200 text-[#111111] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white rounded-lg font-mono tracking-wide transition-all duration-300 shadow-sm w-full sm:w-auto justify-center"
            >
              <FaWhatsapp size={20} />
              +60 11-2550 7190
            </a>
          </div>
          <p className="text-sm text-gray-400 font-mono tracking-wider">
            {t('contact.copyright')}
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;
