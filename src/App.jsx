import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        // Buttery Hero Stagger (Angle 2 influence: power4.out, 1.2s)
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

        // Skills Grid Reveal (staggered rows)
        gsap.fromTo(".skill-row",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
          }}
        );

        // Experience Reveal (removed heavy pinning, kept it smooth)
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

  // Fallback items in case translation is missing for map
  const skillsList = t('skills.items', { returnObjects: true }) || [];
  
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-[#09090b]" ref={mainRef}>
      {/* Navbar - Clean, dark, minimal */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-sans font-bold text-xl tracking-tight text-white nav-logo">
            aiman<span className="text-accent">_</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
              <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
              <a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a>
            </div>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-md"
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
          <div className="absolute right-0 top-0 w-full md:w-3/5 h-[110%] -z-10 opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>
          <div className="max-w-2xl hero-content">
            <p className="hero-el text-accent font-mono mb-6 text-sm tracking-widest uppercase">
              // {t('hero.greeting')}
            </p>
            <h1 className="hero-el text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.05] text-white">
              Aiman Hambali.
            </h1>
            <h2 className="hero-el text-2xl md:text-3xl font-medium text-zinc-500 mb-8 tracking-tight">
              {t('hero.role')}
            </h2>
            <p className="hero-el text-zinc-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
              {t('hero.description')}
            </p>
            
            <div className="hero-el flex flex-wrap items-center gap-6">
              <a href="#contact" className="px-8 py-4 bg-white text-[#09090b] rounded-md font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-8 py-4 border border-zinc-700 text-white rounded-md font-medium hover:border-accent hover:text-accent transition-all duration-300">
                {t('hero.resume')}
              </a>
            </div>

            <div className="hero-el flex items-center gap-8 mt-16 text-zinc-500">
              <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><Mail size={24} /></a>
            </div>
          </div>
        </section>

        {/* About Section - Gentle Asymmetry */}
        <section id="about" ref={aboutRef} className="py-32 border-t border-zinc-800/50 mt-20">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 relative w-full aspect-[4/5]">
              <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-lg translate-x-4 translate-y-4"></div>
              <img 
                src="/profile-photo.jpg" 
                alt="Aiman Hambali" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 z-10 border border-zinc-800/50"
              />
            </div>
            <div className="md:col-span-7 space-y-8 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white tracking-tight">
                <span className="text-accent text-sm font-mono font-normal">01.</span> {t('about.title')}
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Tech/Spec-sheet style */}
        <section id="skills" ref={skillsRef} className="py-32 border-t border-zinc-800/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 text-white tracking-tight">
            <span className="text-accent text-sm font-mono font-normal">02.</span> {t('skills.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {Array.isArray(skillsList) && skillsList.map((skill, index) => (
              <div key={index} className="skill-row flex items-center justify-between py-4 border-b border-zinc-800/50 group hover:border-accent/50 transition-colors">
                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{skill}</span>
                <span className="text-zinc-600 font-mono text-xs tracking-wider">SYS_{String(index + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={expRef} className="py-32 border-t border-zinc-800/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 text-white tracking-tight">
            <span className="text-accent text-sm font-mono font-normal">03.</span> {t('experience.title')}
          </h2>
          
          <div className="relative pl-8 md:pl-12 border-l border-zinc-800 ml-2 md:ml-4">
            <div className="absolute w-3 h-3 rounded-full bg-accent -left-[6.5px] top-2 ring-4 ring-[#09090b]"></div>
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{t('experience.role')} <span className="text-accent">@ {t('experience.company')}</span></h3>
              <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">{t('experience.period')}</span>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-light">
              {t('experience.description')}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
