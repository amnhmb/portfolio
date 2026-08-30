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
        // Hero Stagger Animation
        gsap.fromTo(".hero-el", 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );

        // Hero Parallax effect on scroll
        gsap.to(".hero-content", {
          yPercent: 30,
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
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          }}
        );

        // Skills Reveal
        gsap.fromTo(".skill-item",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)", scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
          }}
        );

        // Experience Pin/Parallax
        gsap.fromTo(expRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", scrollTrigger: {
            trigger: expRef.current,
            start: "top 75%",
          }}
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [lang]); // Re-run anim setup if lang changes though usually not strictly necessary if elements stay

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white" ref={mainRef}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter nav-logo">
            Aiman.<span className="text-accent">H</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
              <a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a>
            </div>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-12 overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[85vh] relative flex items-center">
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full -z-10 opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>
          <div className="max-w-2xl hero-content">
            <p className="hero-el text-accent font-medium mb-4 text-lg">
              {t('hero.greeting')}
            </p>
            <h1 className="hero-el text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Aiman Hambali. <br/>
              <span className="text-gray-400 dark:text-gray-500">{t('hero.role')}</span>
            </h1>
            <p className="hero-el text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="hero-el flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors">
                {t('hero.resume')}
              </a>
            </div>

            <div className="hero-el flex items-center gap-5 mt-12 text-gray-500">
              <a href="#" className="hover:text-accent transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="text-accent text-lg font-mono">01.</span> {t('about.title')}
            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-accent rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="/profile-photo.jpg" 
                alt="Aiman Hambali" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent text-lg font-mono">02.</span> {t('skills.title')}
            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
          </h2>
          <div className="flex flex-wrap gap-4">
            {t('skills.items', { returnObjects: true }).map((skill, index) => (
              <div key={index} className="skill-item px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium shadow-sm hover:border-accent transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={expRef} className="py-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent text-lg font-mono">03.</span> {t('experience.title')}
            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
          </h2>
          
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
            <div className="absolute w-4 h-4 rounded-full bg-accent -left-[9px] top-1 ring-4 ring-white dark:ring-gray-950"></div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">{t('experience.role')} <span className="text-accent">@ {t('experience.company')}</span></h3>
              <span className="text-sm text-gray-500 font-mono">{t('experience.period')}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-2xl">
              {t('experience.description')}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
