import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-mono/400.css';

gsap.registerPlugin(ScrollTrigger);

const Scene = lazy(() => import('./Scene'));

// PLACEHOLDER ARRAYS FOR ACADEMIC PERFORMANCE (GPA)
// God can easily inject the real pointers here. 
// y-axis is scaled automatically between 3.0 and 4.0.
export const diplomaGPA = [3.30, 3.78, 3.59, 3.67, 3.67]; 
export const degreeGPA = [3.50, 3.60, 3.70, 3.60, 3.60, 3.61]; 

function SimpleLineChart({ data, title }) {
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
    <div className="flex flex-col items-start mt-4">
      <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">{title}</span>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible stroke-[#e11d48]">
        {/* Grid lines */}
        <line x1={padding} y1={getY(4.0)} x2={w-padding} y2={getY(4.0)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={getY(3.5)} x2={w-padding} y2={getY(3.5)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={getY(3.0)} x2={w-padding} y2={getY(3.0)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        
        {/* Data Line */}
        <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} />
        
        {/* Data Points */}
        {data.map((val, i) => (
          <g key={i}>
            <circle cx={getX(i)} cy={getY(val)} r="3" fill="#FAFAFA" strokeWidth="2" />
            <text x={getX(i)} y={getY(val) - 10} fontSize="8" fill="#111111" textAnchor="middle" className="font-mono">{val.toFixed(2)}</text>
            <text x={getX(i)} y={h} fontSize="8" fill="#9ca3af" textAnchor="middle" className="font-mono">S{i+1}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  
  const mainRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const skillsRef = useRef();
  const expRef = useRef();
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ms' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
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

        const revealSections = [aboutRef, educationRef, skillsRef, expRef];
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
                      <h3 className="text-2xl font-bold mb-2 text-[#111111]">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest uppercase mb-1">
                        <span className="text-accent">{edu.school}</span>
                        <span className="text-gray-400">—</span>
                        <span className="text-gray-500">{edu.location}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl font-light mt-4">
                        {edu.details}
                      </p>
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
            
            <div className="md:col-span-5 bg-white border border-gray-200 rounded-lg p-8 self-start shadow-sm mt-16 md:mt-0">
              <h3 className="text-2xl font-bold mb-8 text-[#111111] tracking-tight">
                {t('education.performance')}
              </h3>
              <SimpleLineChart data={degreeGPA} title="Degree GPA (Sem 1 - 6)" />
              <div className="h-8"></div>
              <SimpleLineChart data={diplomaGPA} title="Diploma GPA (Sem 1 - 5)" />
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
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl font-light mt-6">
                  {exp.description}
                </p>
              </div>
            ))}
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent block"></span>
                {activity}
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
