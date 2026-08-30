import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "hello, i am",
        name: "Aiman Hambali Bin Amran.",
        role: "Fresh Graduate Engineer, Electronic & IoT Systems",
        description: "Recent graduate (CGPA 3.61) with hands-on experience in semiconductor test equipment and IoT sensor systems. Proficient in Python, Arduino, and ESP32.",
        resume: "Download Resume",
        contact: "Get in Touch"
      },
      nav: {
        about: "About",
        skills: "Skills",
        education: "Education",
        experience: "Experience",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        p1: "I am Aiman Hambali, a fresh graduate electronic engineer based in Kota Bharu, Kelantan, Malaysia.",
        p2: "My background blends hardware and embedded software. I have been actively involved in robotics clubs, FIRA competitions, and have even participated in a student exchange program in Fukuoka, Japan."
      },
      skills: {
        title: "Technical Skills",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"]
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "PM Technician (Intern)",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: "Performed preventive maintenance (PM) across ETS-88, ETS-364, ASL-1000, CCT, and LTX test machines. Conducted calibration logging and equipment troubleshooting."
          },
          {
            role: "Electrical Technician (Intern)",
            company: "Kejuruteraan Elektrik Usahamaju Sdn Bhd",
            period: "Jun 2021 - Aug 2021",
            description: "Assisted with distribution board (DB) boxes, conduit installation, and general house wiring."
          }
        ]
      },
      education: {
        title: "Education History",
        performance: "Academic Performance",
        items: [
          {
            degree: "Bachelor of Electronic Engineering Technology (Hons)",
            school: "Universiti Kuala Lumpur British Malaysian Institute",
            location: "Gombak, Selangor",
            period: "Sept 2022 - Mar 2026",
            details: "CGPA: 3.61 (Dean's List 5/6 semesters). FYP: IoT-based sensor system for Volvariella mushroom cultivation. Mini Projects: Intelligent Laundry Clip (IoT), Baby Guard Beacon (IoT)."
          },
          {
            degree: "Diploma of Electronic Engineering (Communication)",
            school: "Politeknik Ungku Omar",
            location: "Ipoh, Perak",
            period: "Dec 2018 - Aug 2021",
            details: "CGPA: 3.60 (Dean's List 4/5 semesters). FYP: Climbing Robot. Mini Project: Bluetooth Mobile Robot."
          },
          {
            degree: "Sijil Pelajaran Malaysia (SPM)",
            school: "SMK Long Gafar",
            location: "Secondary School",
            period: "—",
            resultsTitle: "Results",
            results: [
              { subject: "Bahasa Melayu", grade: "A-" },
              { subject: "Bahasa Inggeris", grade: "D" },
              { subject: "Pendidikan Islam", grade: "A-" },
              { subject: "Sejarah", grade: "B" },
              { subject: "Mathematics", grade: "A" },
              { subject: "Science", grade: "A" },
              { subject: "Additional Mathematics", grade: "D" },
              { subject: "Perdagangan", grade: "C" },
              { subject: "Prinsip Perakaunan", grade: "A-" }
            ]
          }
        ]
      },
      activities: {
        title: "Extra-Curricular",
        items: [
          "Robotics Club PUO",
          "FIRA 2019 Port Dickson",
          "Student Exchange Fukuoka Japan (Diploma)",
          "Pitch Perfect 5.0",
          "MIMOS IC-design Field Trip"
        ]
      }
    }
  },
  ms: {
    translation: {
      hero: {
        greeting: "hai, saya",
        name: "Aiman Hambali Bin Amran.",
        role: "Jurutera Siswazah Baharu, Sistem Elektronik & IoT",
        description: "Siswazah baharu (CGPA 3.61) dengan pengalaman praktikal dalam peralatan ujian semikonduktor dan sistem penderia IoT. Mahir dalam Python, Arduino, dan ESP32.",
        resume: "Muat turun Resume",
        contact: "Hubungi Saya"
      },
      nav: {
        about: "Mengenai",
        skills: "Kemahiran",
        education: "Pendidikan",
        experience: "Pengalaman",
        contact: "Hubungi"
      },
      about: {
        title: "Mengenai Saya",
        p1: "Saya Aiman Hambali, seorang jurutera elektronik siswazah baharu yang berpangkalan di Kota Bharu, Kelantan, Malaysia.",
        p2: "Latar belakang saya menggabungkan perkakasan dan perisian terbenam. Saya aktif dalam kelab robotik, pertandingan FIRA, dan pernah menyertai program pertukaran pelajar di Fukuoka, Jepun."
      },
      skills: {
        title: "Kemahiran Teknikal",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"]
      },
      experience: {
        title: "Pengalaman",
        items: [
          {
            role: "Juruteknik PM (Pelatih)",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: "Melaksanakan penyelenggaraan pencegahan (PM) pada mesin ujian ETS-88, ETS-364, ASL-1000, CCT, dan LTX. Mengendalikan log penentukuran dan penyelesaian masalah peralatan."
          },
          {
            role: "Juruteknik Elektrik (Pelatih)",
            company: "Kejuruteraan Elektrik Usahamaju Sdn Bhd",
            period: "Jun 2021 - Ogo 2021",
            description: "Membantu pemasangan kotak papan agihan (DB), pemasangan konduit, dan pendawaian rumah am."
          }
        ]
      },
      education: {
        title: "Sejarah Pendidikan",
        performance: "Prestasi Akademik",
        items: [
          {
            degree: "Sarjana Muda Teknologi Kejuruteraan Elektronik (Kepujian)",
            school: "Universiti Kuala Lumpur British Malaysian Institute",
            location: "Gombak, Selangor",
            period: "Sep 2022 - Mac 2026",
            details: "CGPA: 3.61 (Senarai Dekan 5/6 semester). Projek Tahun Akhir: Sistem penderia berasaskan IoT untuk penanaman cendawan Volvariella. Projek Mini: Klip Dobi Pintar (IoT), Pengawal Keselamatan Bayi (IoT)."
          },
          {
            degree: "Diploma Kejuruteraan Elektronik (Komunikasi)",
            school: "Politeknik Ungku Omar",
            location: "Ipoh, Perak",
            period: "Dis 2018 - Ogo 2021",
            details: "CGPA: 3.60 (Senarai Dekan 4/5 semester). Projek Tahun Akhir: Robot Memanjat. Projek Mini: Robot Mudah Alih Bluetooth."
          },
          {
            degree: "Sijil Pelajaran Malaysia (SPM)",
            school: "SMK Long Gafar",
            location: "Sekolah Menengah",
            period: "—",
            resultsTitle: "Keputusan",
            results: [
              { subject: "Bahasa Melayu", grade: "A-" },
              { subject: "Bahasa Inggeris", grade: "D" },
              { subject: "Pendidikan Islam", grade: "A-" },
              { subject: "Sejarah", grade: "B" },
              { subject: "Matematik", grade: "A" },
              { subject: "Sains", grade: "A" },
              { subject: "Matematik Tambahan", grade: "D" },
              { subject: "Perdagangan", grade: "C" },
              { subject: "Prinsip Perakaunan", grade: "A-" }
            ]
          }
        ]
      },
      activities: {
        title: "Kokurikulum",
        items: [
          "Kelab Robotik PUO",
          "FIRA 2019 Port Dickson",
          "Pertukaran Pelajar Fukuoka Jepun (Diploma)",
          "Pitch Perfect 5.0",
          "Lawatan Sambil Belajar Reka Bentuk IC MIMOS"
        ]
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
