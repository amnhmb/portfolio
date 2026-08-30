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
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.3 }
        );

        // Hero Parallax effect on scroll
        gsap.to(".hero-content", {
          yPercent: 40,
          opacity: 0.2,
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
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
          }}
        );

        // Skills Reveal
        gsap.fromTo(".skill-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.2)", scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
          }}
        );

        // Experience Pin/Parallax
        gsap.fromTo(expRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
            trigger: expRef.current,
            start: "top 80%",
          }}
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [lang]); // Re-run anim setup if lang changes though usually not strictly necessary if elements stay

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white" ref={mainRef}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tight nav-logo">
            Aiman<span className="text-[#aa3bff]">.</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
              <a href="#about" className="hover:text-[#aa3bff] transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="hover:text-[#aa3bff] transition-colors">{t('nav.skills')}</a>
              <a href="#experience" className="hover:text-[#aa3bff] transition-colors">{t('nav.experience')}</a>
            </div>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold tracking-wider hover:text-white hover:bg-[#aa3bff] transition-all bg-gray-200 dark:bg-gray-800 dark:hover:bg-[#aa3bff] px-4 py-2 rounded-full"
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
          <div className="absolute right-0 top-0 w-full md:w-3/5 h-[110%] -z-10 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>
          <div className="max-w-2xl hero-content">
            <p className="hero-el text-[#aa3bff] font-semibold mb-6 text-lg tracking-wide uppercase">
              {t('hero.greeting')}
            </p>
            <h1 className="hero-el text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
              Aiman Hambali. <br/>
              <span className="text-gray-400 dark:text-gray-600 block mt-2">{t('hero.role')}</span>
            </h1>
            <p className="hero-el text-gray-600 dark:text-gray-400 text-lg md:text-2xl mb-12 max-w-xl leading-relaxed font-light">
              {t('hero.description')}
            </p>
            
            <div className="hero-el flex flex-wrap items-center gap-6">
              <a href="#contact" className="px-8 py-4 bg-[#111111] dark:bg-[#F2F2F2] text-white dark:text-[#111111] rounded-full font-medium hover:scale-105 hover:bg-[#aa3bff] dark:hover:bg-[#aa3bff] dark:hover:text-white transition-all duration-300 shadow-lg">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-8 py-4 border border-gray-300 dark:border-gray-800 rounded-full font-medium hover:border-[#aa3bff] hover:text-[#aa3bff] transition-all duration-300">
                {t('hero.resume')}
              </a>
            </div>

            <div className="hero-el flex items-center gap-8 mt-16 text-gray-400 dark:text-gray-600">
              <a href="#" className="hover:text-[#aa3bff] hover:-translate-y-1 transition-all duration-300"><FaGithub size={28} /></a>
              <a href="#" className="hover:text-[#aa3bff] hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={28} /></a>
              <a href="#" className="hover:text-[#aa3bff] hover:-translate-y-1 transition-all duration-300"><Mail size={28} /></a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-32 border-t border-gray-200 dark:border-gray-900 mt-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 flex items-center gap-6">
            <span className="text-[#aa3bff] text-xl font-mono font-normal">01.</span> {t('about.title')}
          </h2>
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 space-y-6 text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-light">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="md:col-span-5 relative group mx-auto md:mx-0 w-full max-w-sm aspect-square">
              <div className="absolute inset-0 border-2 border-[#aa3bff] rounded-2xl translate-x-6 translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                src="/profile-photo.jpg" 
                alt="Aiman Hambali" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 z-10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-32 border-t border-gray-200 dark:border-gray-900">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 flex items-center gap-6">
            <span className="text-[#aa3bff] text-xl font-mono font-normal">02.</span> {t('skills.title')}
          </h2>
          <div className="flex flex-wrap gap-4">
            {t('skills.items', { returnObjects: true }).map((skill, index) => (
              <div key={index} className="skill-item px-6 py-3 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium shadow-sm hover:border-[#aa3bff] hover:text-[#aa3bff] transition-all duration-300 hover:-translate-y-1">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={expRef} className="py-32 border-t border-gray-200 dark:border-gray-900">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 flex items-center gap-6">
            <span className="text-[#aa3bff] text-xl font-mono font-normal">03.</span> {t('experience.title')}
          </h2>
          
          <div className="relative pl-10 border-l border-gray-300 dark:border-gray-800 ml-4">
            <div className="absolute w-3 h-3 rounded-full bg-[#aa3bff] -left-[6.5px] top-2 ring-8 ring-[#FAFAFA] dark:ring-[#0A0A0A]"></div>
            <div className="mb-4">
              <h3 className="text-2xl font-display font-bold mb-1">{t('experience.role')} <span className="text-[#aa3bff]">@ {t('experience.company')}</span></h3>
              <span className="text-sm text-gray-500 font-mono tracking-wide uppercase">{t('experience.period')}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl font-light">
              {t('experience.description')}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
