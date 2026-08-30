import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Mail, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible stroke-[#e11d48]">
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
              <rect x={getX(i) - 25} y={getY(val) - 34} width="50" height="20" rx="4" fill="#111111" />
            )}
            <circle 
              cx={getX(i)} cy={getY(val)} 
              r={hoveredIdx === i ? "4.5" : "3.5"} 
              fill={hoveredIdx === i ? "#e11d48" : "#FAFAFA"} 
              strokeWidth={hoveredIdx === i ? "0" : "1.5"} 
              stroke="#e11d48"
            />
            {hoveredIdx === i ? (
              <text x={getX(i)} y={getY(val) - 20} fontSize="10" fill="#FAFAFA" textAnchor="middle" className="font-mono font-bold pointer-events-none">{val.toFixed(2)}</text>
            ) : (
              <text x={getX(i)} y={getY(val) - 12} fontSize="8" fill="#111111" textAnchor="middle" className="font-mono pointer-events-none">{val.toFixed(2)}</text>
            )}
            <text x={getX(i)} y={h} fontSize="8" fill="#9ca3af" textAnchor="middle" className="font-mono pointer-events-none">S{i+1}</text>
            
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
        className={`relative w-full max-w-md h-full bg-[#FAFAFA] border-l border-gray-200 shadow-2xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {isOpen && semData && data && (
          <>
            <div className="flex flex-col p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 id="drawer-title" className="text-xl font-bold text-[#111111] tracking-tight">{data.level}</h2>
                  <p className="text-sm text-gray-500 font-mono tracking-widest uppercase mt-1">{t('education.semester')} {semData.sem} — {semData.term}</p>
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
                          ? 'bg-[#e11d48] text-white font-bold' 
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fff1f2] border border-[#f43f5e] text-[#e11d48] px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm whitespace-nowrap">
                    {t('education.deansList')}
                  </div>
                )}
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">GPA</p>
                  <p className="text-3xl font-bold text-[#e11d48]">{semData.gpa !== null ? semData.gpa.toFixed(2) : '—'}</p>
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
                        <div className="col-span-2 text-center font-bold text-[#e11d48] self-center">
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

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [selectedTranscript, setSelectedTranscript] = useState(null); // { type, semIndex }
  
  const mainRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const skillsRef = useRef();
  const expRef = useRef();
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
        gsap.fromTo(".hero-el", 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
        );

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

        const revealSections = [aboutRef, educationRef, skillsRef, expRef, researchRef];
        revealSections.forEach((ref) => {
          if (ref.current) {
            gsap.fromTo(ref.current.children,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
              }}
            );
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, [lang]);

  const skillsList = t('skills.items', { returnObjects: true }) || [];
  const expList = t('experience.items', { returnObjects: true }) || [];
  const eduList = t('education.items', { returnObjects: true }) || [];
  
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white" ref={mainRef}>
      
      {/* SlideOver Drawer */}
      <SlideOverDrawer 
        transcript={selectedTranscript} 
        onClose={() => setSelectedTranscript(null)} 
        onSelectTranscript={setSelectedTranscript}
        t={t} 
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-sans font-bold text-xl tracking-tight text-[#111111] nav-logo">
            aiman<span className="text-accent">_</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
              <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
              <a href="#education" className="hover:text-accent transition-colors">{t('nav.education')}</a>
              <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
              <a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a>
              <a href="#research" className="hover:text-accent transition-colors">{t('nav.research')}</a>
            </div>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-600 hover:text-white hover:bg-[#111111] transition-all bg-white border border-gray-200 px-4 py-2 rounded-md"
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[85vh] relative flex items-center">
          <div className="absolute right-0 top-0 w-full md:w-3/5 h-[110%] -z-10 opacity-70 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>
          <div className="max-w-2xl hero-content">
            <p className="hero-el text-accent font-mono mb-6 text-sm tracking-widest uppercase">
              // {t('hero.greeting')}
            </p>
            <h1 className="hero-el text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.05] text-[#111111]">
              {t('hero.name')}
            </h1>
            <h2 className="hero-el text-xl md:text-3xl font-medium text-gray-500 mb-8 tracking-tight">
              {t('hero.role')}
            </h2>
            <p className="hero-el text-gray-600 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
              {t('hero.description')}
            </p>
            
            <div className="hero-el flex flex-wrap items-center gap-6">
              <a href="mailto:aimannhambalii@gmail.com" className="px-8 py-4 bg-[#111111] text-white rounded-md font-medium hover:bg-accent hover:scale-[0.98] transition-all duration-300">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-8 py-4 border border-gray-300 text-[#111111] rounded-md font-medium hover:border-accent hover:text-accent transition-all duration-300">
                {t('hero.resume')}
              </a>
            </div>

            <div className="hero-el flex items-center gap-8 mt-16 text-gray-400">
              <span className="font-mono text-sm tracking-widest uppercase">aimannhambalii@gmail.com</span>
              <span className="font-mono text-sm tracking-widest uppercase">+60 11-2550 7190</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-32 border-t border-gray-200 mt-20">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 relative w-full aspect-square">
              <div className="absolute inset-0 bg-gray-100 border border-gray-200 rounded-lg translate-x-4 translate-y-4"></div>
              <img 
                src="/profile-photo.jpg" 
                alt="Aiman Hambali" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 z-10 border border-gray-200"
              />
            </div>
            <div className="md:col-span-7 space-y-8 md:pl-10">
              <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4 text-[#111111] tracking-tight">
                {t('about.title')}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic Performance Section */}
        <section id="education" ref={educationRef} className="py-32 border-t border-gray-200">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
                {t('education.title')}
              </h2>
              <div className="space-y-16">
                {Array.isArray(eduList) && eduList.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l border-gray-200">
                    <div className="absolute w-3 h-3 rounded-full bg-gray-300 -left-[6.5px] top-2 ring-4 ring-[#FAFAFA]"></div>
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
                        <span className="text-gray-400">—</span>
                        <span className="text-gray-500">{edu.location}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">{edu.period}</span>
                    </div>
                    
                    {Array.isArray(edu.details) && (
                      <ul className="text-gray-600 text-base leading-relaxed font-light mt-4 space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                            <span>{detail}</span>
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
                              <span className="text-sm font-medium text-[#111111]">{res.grade}</span>
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
            {t('skills.title')}
          </h2>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {Array.isArray(skillsList) && skillsList.map((skill, index) => (
              <div key={index} className="skill-item px-6 py-3 bg-white border border-gray-200 rounded-md text-sm font-medium shadow-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-3">
                <span className="text-[#111111] group-hover:text-accent transition-colors">{skill}</span>
                <span className="text-gray-400 font-mono text-[10px] tracking-wider uppercase">TECH</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={expRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            {t('experience.title')}
          </h2>
          
          <div className="space-y-16">
            {Array.isArray(expList) && expList.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l border-gray-200 ml-2 md:ml-4">
                <div className="absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#FAFAFA]"></div>
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#111111]">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest uppercase">
                    <span className="text-accent">{exp.company}</span>
                    <span className="text-gray-400">—</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                </div>
                {Array.isArray(exp.description) ? (
                  <ul className="text-gray-600 text-lg leading-relaxed font-light mt-4 space-y-3 max-w-3xl">
                    {exp.description.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                        <span>{detail}</span>
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

        {/* Featured Research Section */}
        <section id="research" ref={researchRef} className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            {t('research.title')}
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
                <div className="mb-8">
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{t('research.approachLabel')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">{t('research.approach')}</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{t('research.collabLabel')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">{t('research.collab')}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAFA] border border-gray-100 rounded-md p-6 mb-8">
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6 text-center">{t('research.resultsLabel')}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#e11d48] mb-1">{t('research.stats.period')}</div>
                  <div className="text-xs text-gray-500 font-mono tracking-wide">{t('research.stats.periodSub')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#111111] mb-1">{t('research.stats.acc')}</div>
                  <div className="text-xs text-gray-500 font-mono tracking-wide">{t('research.stats.accSub')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#111111] mb-1">{t('research.stats.f1')}</div>
                  <div className="text-xs text-gray-500 font-mono tracking-wide">{t('research.stats.f1Sub')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#111111] mb-1">{t('research.stats.map')}</div>
                  <div className="text-xs text-gray-500 font-mono tracking-wide">{t('research.stats.mapSub')}</div>
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

        {/* Activities Section */}
        <section id="activities" className="py-32 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#111111] tracking-tight">
            {t('activities.title')}
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {Array.isArray(t('activities.items', { returnObjects: true })) && t('activities.items', { returnObjects: true }).map((activity, index) => (
              <li key={index} className="flex items-center gap-4 text-gray-600 text-lg font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block shrink-0"></span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
