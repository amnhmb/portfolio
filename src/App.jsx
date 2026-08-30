import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ms' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl tracking-tighter"
          >
            Aiman.<span className="text-accent">H</span>
          </motion.div>
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

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-start">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUpVariant} className="text-accent font-medium mb-4 text-lg">
              {t('hero.greeting')}
            </motion.p>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Aiman Hambali. <br/>
              <span className="text-gray-400 dark:text-gray-500">{t('hero.role')}</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform">
                {t('hero.contact')}
              </a>
              <a href="/Aiman_Hambali_CV.docx" download className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors">
                {t('hero.resume')}
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex items-center gap-5 mt-12 text-gray-500">
              <a href="#" className="hover:text-accent transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Mail size={24} /></a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="text-accent text-lg font-mono">01.</span> {t('about.title')}
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUpVariant} className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="relative group mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-accent rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="/profile-photo.jpg" 
                  alt="Aiman Hambali" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-accent text-lg font-mono">02.</span> {t('skills.title')}
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
            </motion.h2>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              {t('skills.items', { returnObjects: true }).map((skill, index) => (
                <div key={index} className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium shadow-sm hover:border-accent transition-colors">
                  {skill}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="text-accent text-lg font-mono">03.</span> {t('experience.title')}
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 max-w-xs"></div>
            </motion.h2>
            
            <motion.div variants={fadeUpVariant} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-[9px] top-1 ring-4 ring-white dark:ring-gray-950"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold">{t('experience.role')} <span className="text-accent">@ {t('experience.company')}</span></h3>
                <span className="text-sm text-gray-500 font-mono">{t('experience.period')}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-2xl">
                {t('experience.description')}
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
