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

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  
  const mainRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
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
        // Buttery Hero Stagger
        gsap.fromTo(".hero-el", 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
        );

        // Gentle Hero Parallax
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

        // About Reveal
        gsap.fromTo(aboutRef.current.children,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          }}
        );

        // Skills Reveal
        gsap.fromTo(".skill-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out", scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
          }}
        );

        // Experience Reveal
        gsap.fromTo(expRef.current.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power4.out", scrollTrigger: {
            trigger: expRef.current,
            start: "top 80%",
          }}
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [lang]);

  const skillsList = t('skills.items', { returnObjects: true }) || [];
  
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white" ref={mainRef}>
      {/* Navbar - Clean, light, minimal */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-sans font-bold text-xl tracking-tight text-[#111111] nav-logo">
            aiman<span className="text-accent">_</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
              <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
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
            <h1 className="hero-el text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.05] text-[#111111]">
              Aiman Hambali.
            </h1>
            <h2 className="hero-el text-2xl md:text-3xl font-medium text-gray-500 mb-8 tracking-tight">
              {t('hero.role')}
            </h2>
            <p className="hero-el text-gray-600 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
              {t('hero.description')}
            </p>
            
            <div className="hero-el flex flex-wrap items-center gap-6">
              <a href="#contact" className="px-8 py-4 bg-[#111111] text-white rounded-md font-medium hover:bg-accent hover:scale-[0.98] transition-all duration-300">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-8 py-4 border border-gray-300 text-[#111111] rounded-md font-medium hover:border-accent hover:text-accent transition-all duration-300">
                {t('hero.resume')}
              </a>
            </div>

            <div className="hero-el flex items-center gap-8 mt-16 text-gray-400">
              <a href="#" className="hover:text-[#111111] hover:-translate-y-1 transition-all duration-300"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-[#111111] hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-[#111111] hover:-translate-y-1 transition-all duration-300"><Mail size={24} /></a>
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

        {/* Skills Section - Minimal Bento/Pills */}
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
          
          <div className="relative pl-8 md:pl-12 border-l border-gray-200 ml-2 md:ml-4">
            <div className="absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#FAFAFA]"></div>
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#111111]">{t('experience.role')}</h3>
              <div className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase">
                <span className="text-accent">{t('experience.company')}</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500">{t('experience.period')}</span>
              </div>
            </div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl font-light mt-6">
              {t('experience.description')}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
