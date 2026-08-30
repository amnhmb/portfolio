import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm",
        role: "Software & IoT Engineer",
        description: "Passionate about building scalable web applications and connecting physical devices with IoT.",
        resume: "Download Resume",
        contact: "Get in Touch"
      },
      nav: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        p1: "I'm Aiman Hambali, an engineer with hands-on experience in IoT, Embedded Systems, and Web Development.",
        p2: "I enjoy exploring new technologies and bridging the gap between hardware and software."
      },
      skills: {
        title: "Skills",
        items: ["React", "Vite", "Tailwind CSS", "IoT", "ESP32", "Arduino", "Python", "Proteus", "Embedded C++", "Firebase"]
      },
      experience: {
        title: "Experience",
        role: "Intern",
        company: "Unisem (M) Berhad",
        period: "2023",
        description: "Assisted in semiconductor manufacturing processes, testing, and troubleshooting equipment."
      }
    }
  },
  ms: {
    translation: {
      hero: {
        greeting: "Hai, saya",
        role: "Jurutera Perisian & IoT",
        description: "Bersemangat membina aplikasi web berskala dan menyambungkan peranti fizikal dengan IoT.",
        resume: "Muat turun Resume",
        contact: "Hubungi Saya"
      },
      nav: {
        about: "Mengenai",
        skills: "Kemahiran",
        experience: "Pengalaman",
        projects: "Projek",
        contact: "Hubungi"
      },
      about: {
        title: "Mengenai Saya",
        p1: "Saya Aiman Hambali, seorang jurutera dengan pengalaman dalam IoT, Sistem Terbenam, dan Pembangunan Web.",
        p2: "Saya gemar meneroka teknologi baharu dan merapatkan jurang antara perkakasan dan perisian."
      },
      skills: {
        title: "Kemahiran",
        items: ["React", "Vite", "Tailwind CSS", "IoT", "ESP32", "Arduino", "Python", "Proteus", "Embedded C++", "Firebase"]
      },
      experience: {
        title: "Pengalaman",
        role: "Pelatih (Intern)",
        company: "Unisem (M) Berhad",
        period: "2023",
        description: "Membantu dalam proses pembuatan semikonduktor, pengujian, dan penyelesaian masalah peralatan."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
