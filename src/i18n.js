import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "hello, i am",
        name: "Aiman Hambali Bin Amran.",
        role: "Fresh Graduate Engineer, Electronic & IoT Systems",
        description: "Electronic & IoT engineer with hands-on experience in semiconductor test equipment and IoT sensor systems. Comfortable across Python, Arduino, and ESP32.",
        resume: "Download Resume",
        contact: "Get in Touch"
      },
      nav: {
        about: "About",
        skills: "Skills",
        education: "Education",
        experience: "Experience",
        projects: "Projects",
        research: "Research",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        p1: "I am Aiman Hambali, a fresh graduate electronic engineer based in Kota Bharu, Kelantan, Malaysia.",
        p2: "My work blends hardware and embedded software, from IC and circuit design tools like Proteus, Quartus, and Microwind to building IoT sensor systems on ESP32 and Arduino.",
        p3: "During my diploma, I was active in robotics clubs and FIRA competitions, and hosted a visiting student delegation from Fukuoka, Japan at my polytechnic. I am now looking to grow as an electronic and embedded systems engineer."
      },
      skills: {
        title: "Technical Skills",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"],
        softTitle: "Soft Skills",
        softItems: ["Teamwork", "Mentoring & Leadership", "Problem Solving", "Professional Maturity", "Time Management", "Continuous Learning"],
        langTitle: "Languages",
        languages: [
          { name: "Bahasa Malaysia", level: 5, label: "Native" },
          { name: "English", level: 3, label: "Intermediate" }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "Engineer Intern",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: [
              "Hired at an engineer level, but stepped up to cover hands-on PM Technician duties due to team understaffing.",
              "Completed 1 month of structured training followed by 1 month of supervised hands-on practice.",
              "Independently ran the test line responsibilities for 4 months after technician staff were reassigned to the Gopeng plant.",
              "Managed preventive maintenance and troubleshooting on semiconductor test equipment (ETS-88, ETS-364, ASL-1000, CCT, and LTX).",
              "Coordinated daily across functional lines with supervisors, operators, customers, the engineering team, and line technicians.",
              "Successfully onboarded and trained a new staff member before the internship concluded."
            ]
          },
          {
            role: "Electrical Technician (Intern)",
            company: "Kejuruteraan Elektrik Usahamaju Sdn Bhd",
            period: "Jun 2021 - Aug 2021",
            description: "Assisted in Distribution Board (DB) box installation, conduit fitting, and general house wiring."
          }
        ]
      },
      education: {
        title: "Education History",
        performance: "Academic Performance",
        viewTranscript: "View transcript",
        semester: "Semester",
        subject: "Subject",
        grade: "Grade",
        credit: "Credit",
        deansList: "Dean's List",
        items: [
          {
            degree: "Bachelor of Electronic Engineering Technology (Hons)",
            school: "Universiti Kuala Lumpur British Malaysian Institute",
            location: "Gombak, Selangor",
            period: "Sept 2022 - Mar 2026",
            details: [
              "CGPA 3.61",
              "FYP: IoT-based sensor system for Volvariella mushroom cultivation",
              "Mini projects: Intelligent Laundry Clip (IoT), Baby Guard Beacon (IoT)"
            ],
            type: "degree"
          },
          {
            degree: "Diploma of Electronic Engineering (Communication)",
            school: "Politeknik Ungku Omar",
            location: "Ipoh, Perak",
            period: "Dec 2018 - Aug 2021",
            details: [
              "CGPA 3.60",
              "FYP: Climbing Robot",
              "Mini project: Bluetooth Mobile Robot"
            ],
            type: "diploma"
          },
          {
            degree: "Sijil Pelajaran Malaysia (SPM)",
            school: "SMK Long Gafar",
            location: "Secondary School",
            period: "2016 - 2017",
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
          },
          {
            degree: "Lower Secondary",
            school: "SMK Kota",
            location: "Secondary School",
            period: "2013 - 2015"
          }
        ]
      },
      achievements: {
        title: "Achievements & Activities",
        items: [
          {
            image: "fira-2019.jpg",
            title: "FIRA 2019 Robotics Competition",
            caption: "2nd Place (Team) · Port Dickson",
            note: "Competed with the Politeknik Ungku Omar robotics club team, which placed 2nd."
          },
          {
            image: "award-integrity.jpg",
            title: "Integrity Award",
            caption: "PRS (Pembimbing Rakan Sebaya) Annual Dinner · Politeknik Ungku Omar",
            note: "Member of Pembimbing Rakan Sebaya (PRS) during Diploma."
          },
          {
            image: "nuclear_malaysia.jpg",
            title: "Nuclear Malaysia Consultation",
            caption: "FYP field consultation · Agensi Nuklear Malaysia",
            note: "Met Dr. Azhar Mohamad, a mushroom cultivation expert, to gather domain knowledge for my Volvariella mushroom FYP.",
            link: "https://www.researchgate.net/profile/Azhar-Mohamad-2",
            linkLabel: "Dr. Azhar's research"
          },
          {
            image: "mimos.jpg",
            title: "MIMOS Field Trip",
            caption: "Analog & Digital IC Design study visit · MIMOS"
          },
          {
            image: "ayubi.jpg",
            title: "Ayubie Lobster Farm Visit",
            caption: "Electronic Design Project (EDP) site visit · Ayubie Lobster Farm"
          }
        ],
        otherLabel: "Other Activities",
        other: ["Robotics Club, Politeknik Ungku Omar", "Pitch Perfect 5.0"],
        close: "Close"
      },
      contact: {
        title: "Get in Touch",
        copyright: "© 2026 Aiman Hambali Bin Amran"
      },
      projects: {
        title: "Projects",
        intro: "Currently supporting my cousin's business, ThirtyOne Lab, in customer service while designing and building its digital systems.",
        viewLive: "View live",
        private: "Private",
        items: [
          {
            image: "project-catalog.png",
            title: "ThirtyOne Lab · Catalog & Admin Panel",
            description: "A product catalog web app with a built-in admin panel for the business. Customers browse the catalog and build quote requests; the owner manages products and content through the admin panel.",
            tech: ["React", "Vite", "Tailwind", "Supabase", "Cloudflare Pages"],
            link: "https://31lab.pages.dev"
          },
          {
            image: "project-oms.png",
            title: "Order Management System (OMS)",
            description: "A private internal system to manage orders, invoices, and order-status tracking for the business, with automated daily status reporting to Telegram.",
            tech: ["React", "Vite", "Supabase", "Tailwind"]
          }
        ]
      },
      research: {
        title: "Featured Research",
        paperTitle: "An IoT-Enabled Growth Management System with Deep Learning-Based Monitoring for Volvariella volvacea Mushroom Cultivation in Controlled Environments",
        meta: "Wiley · Applied Research (Research Article)",
        status: "Under peer review",
        role: "Co-author (Joint paper combining two Final Year Projects)",
        overviewLabel: "Overview",
        overview: "Volvariella mushrooms are in high demand in Malaysia, but traditional cultivation struggles to hold ideal environmental conditions, causing variable yield and quality. This paper merges my IoT environmental-control project with a fellow student's deep-learning monitoring project into a single comprehensive system.",
        approachLabel: "My Contribution (IoT System)",
        approach: "I designed and built the IoT environmental-control system using an ESP32 microcontroller with DHT22 (temperature/humidity), MQ135 (CO2), and HW-038 (water level) sensors. It controls actuators (foggers, water pumps, heaters, ventilation fans) to automatically maintain ideal conditions: 28-35°C, 75-95% RH, and CO2 < 1000 ppm.",
        collabLabel: "Collaborator's Contribution (AI Model)",
        collab: "A co-author contributed the YOLOv8 deep-learning component for monitoring four mushroom growth stages (Tiny, Button, Egg, Mature).",
        resultsLabel: "Key Results",
        button: "View full paper",
        stats: {
          period: "~85%",
          periodSub: "in target range",
          acc: "93.12%",
          accSub: "classification accuracy",
          f1: "87.9%",
          f1Sub: "macro-average F1",
          map: "0.78",
          mapSub: "mAP@0.5"
        },
        tags: ["IoT (Mine)", "ESP32", "DHT22", "MQ135", "YOLOv8 (Co-author)", "Deep Learning", "Python"]
      }
    }
  },
  ms: {
    translation: {
      hero: {
        greeting: "hai, saya",
        name: "Aiman Hambali Bin Amran.",
        role: "Fresh Graduate Engineer · Electronic & IoT Systems",
        description: "Electronic & IoT engineer dengan pengalaman hands-on dalam semiconductor test equipment dan IoT sensor systems. Selesa guna Python, Arduino, dan ESP32.",
        resume: "Muat turun Resume",
        contact: "Hubungi Saya"
      },
      nav: {
        about: "Mengenai",
        skills: "Kemahiran",
        education: "Pendidikan",
        experience: "Pengalaman",
        projects: "Projek",
        research: "Penyelidikan",
        contact: "Hubungi"
      },
      about: {
        title: "Mengenai Saya",
        p1: "Saya Aiman Hambali, fresh graduate electronic engineer yang duduk di Kota Bharu, Kelantan.",
        p2: "Kerja saya campur hardware dengan embedded software, dari tools design IC & circuit macam Proteus, Quartus, dan Microwind sampai la bina IoT sensor system atas ESP32 dan Arduino.",
        p3: "Masa diploma dulu, saya aktif dalam kelab robotik dan pertandingan FIRA, dan pernah jadi hos untuk delegasi pelajar dari Fukuoka, Jepun yang datang ke politeknik saya. Sekarang saya nak terus berkembang sebagai electronic & embedded systems engineer."
      },
      skills: {
        title: "Kemahiran Teknikal",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"],
        softTitle: "Soft Skills",
        softItems: ["Teamwork", "Mentoring & Leadership", "Problem Solving", "Professional Maturity", "Time Management", "Continuous Learning"],
        langTitle: "Bahasa",
        languages: [
          { name: "Bahasa Malaysia", level: 5, label: "Bahasa Ibunda" },
          { name: "English", level: 3, label: "Sederhana" }
        ]
      },
      experience: {
        title: "Pengalaman",
        items: [
          {
            role: "Pelatih Jurutera",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: [
              "Masuk sebagai engineer, tapi ambil inisiatif buat kerja PM Technician juga sebab pasukan kurang orang.",
              "Habiskan 1 bulan structured training, pastu 1 bulan lagi hands-on training bawah supervision.",
              "Handle sendiri tanggungjawab test line selama 4 bulan lepas technician dipindahkan ke kilang Gopeng.",
              "Uruskan preventive maintenance dan troubleshooting mesin semiconductor test (ETS-88, ETS-364, ASL-1000, CCT, dan LTX).",
              "Selaras kerja harian dengan supervisor, operator, customer, engineering team, dan line technician.",
              "Sempat train dan bimbing staff baharu sebelum tamat latihan industri."
            ]
          },
          {
            role: "Juruteknik Elektrik (Pelatih)",
            company: "Kejuruteraan Elektrik Usahamaju Sdn Bhd",
            period: "Jun 2021 - Ogo 2021",
            description: "Bantu pasang Distribution Board (DB) box, conduit fitting, dan house wiring am."
          }
        ]
      },
      education: {
        title: "Sejarah Pendidikan",
        performance: "Prestasi Akademik",
        viewTranscript: "Lihat transkrip",
        semester: "Semester",
        subject: "Subjek",
        grade: "Gred",
        credit: "Kredit",
        deansList: "Senarai Dekan",
        items: [
          {
            degree: "Sarjana Muda Teknologi Kejuruteraan Elektronik (Kepujian)",
            school: "Universiti Kuala Lumpur British Malaysian Institute",
            location: "Gombak, Selangor",
            period: "Sep 2022 - Mac 2026",
            details: [
              "CGPA 3.61",
              "Projek Tahun Akhir: Sistem penderia berasaskan IoT untuk penanaman cendawan Volvariella",
              "Projek Mini: Klip Dobi Pintar (IoT), Pengawal Keselamatan Bayi (IoT)"
            ],
            type: "degree"
          },
          {
            degree: "Diploma Kejuruteraan Elektronik (Komunikasi)",
            school: "Politeknik Ungku Omar",
            location: "Ipoh, Perak",
            period: "Dis 2018 - Ogo 2021",
            details: [
              "CGPA 3.60",
              "Projek Tahun Akhir: Robot Memanjat",
              "Projek Mini: Robot Mudah Alih Bluetooth"
            ],
            type: "diploma"
          },
          {
            degree: "Sijil Pelajaran Malaysia (SPM)",
            school: "SMK Long Gafar",
            location: "Sekolah Menengah",
            period: "2016 - 2017",
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
          },
          {
            degree: "Menengah Rendah",
            school: "SMK Kota",
            location: "Sekolah Menengah",
            period: "2013 - 2015"
          }
        ]
      },
      achievements: {
        title: "Pencapaian & Aktiviti",
        items: [
          {
            image: "fira-2019.jpg",
            title: "Pertandingan Robotik FIRA 2019",
            caption: "Tempat Kedua (Pasukan) · Port Dickson",
            note: "Bertanding bersama pasukan kelab robotik Politeknik Ungku Omar yang menduduki tempat kedua."
          },
          {
            image: "award-integrity.jpg",
            title: "Anugerah Integriti",
            caption: "Makan Malam Tahunan PRS (Pembimbing Rakan Sebaya) · Politeknik Ungku Omar",
            note: "Ahli Pembimbing Rakan Sebaya (PRS) semasa Diploma."
          },
          {
            image: "nuclear_malaysia.jpg",
            title: "Konsultasi di Nuklear Malaysia",
            caption: "Lawatan konsultasi FYP · Agensi Nuklear Malaysia",
            note: "Jumpa Dr. Azhar Mohamad, pakar penanaman cendawan, untuk dapatkan ilmu bagi FYP cendawan Volvariella saya.",
            link: "https://www.researchgate.net/profile/Azhar-Mohamad-2",
            linkLabel: "Kajian Dr. Azhar"
          },
          {
            image: "mimos.jpg",
            title: "Lawatan Sambil Belajar MIMOS",
            caption: "Lawatan sambil belajar Reka Bentuk IC Analog & Digital · MIMOS"
          },
          {
            image: "ayubi.jpg",
            title: "Lawatan Ladang Udang Kara Ayubie",
            caption: "Lawatan tapak Projek Reka Bentuk Elektronik (EDP) · Ladang Udang Kara Ayubie"
          }
        ],
        otherLabel: "Aktiviti Lain",
        other: ["Kelab Robotik, Politeknik Ungku Omar", "Pitch Perfect 5.0"],
        close: "Tutup"
      },
      contact: {
        title: "Hubungi Saya",
        copyright: "© 2026 Aiman Hambali Bin Amran"
      },
      projects: {
        title: "Projek",
        intro: "Sekarang saya bantu bisnes sepupu saya, ThirtyOne Lab, dalam customer service sambil design dan bina sistem digital mereka.",
        viewLive: "Buka website",
        private: "Peribadi",
        items: [
          {
            image: "project-catalog.png",
            title: "ThirtyOne Lab · Katalog & Panel Pentadbir",
            description: "Web app katalog produk dengan admin panel terbina dalam untuk bisnes. Customer boleh browse katalog dan buat quote request; owner urus produk dan content melalui admin panel.",
            tech: ["React", "Vite", "Tailwind", "Supabase", "Cloudflare Pages"],
            link: "https://31lab.pages.dev"
          },
          {
            image: "project-oms.png",
            title: "Sistem Pengurusan Pesanan (OMS)",
            description: "Sistem dalaman untuk urus order, invois, dan tracking status order untuk bisnes, dengan report status harian automatik ke Telegram.",
            tech: ["React", "Vite", "Supabase", "Tailwind"]
          }
        ]
      },
      research: {
        title: "Kajian Kes",
        paperTitle: "An IoT-Enabled Growth Management System with Deep Learning-Based Monitoring for Volvariella volvacea Mushroom Cultivation in Controlled Environments",
        meta: "Wiley · Applied Research (Artikel Penyelidikan)",
        status: "Dalam semakan rakan sebaya (Under peer review)",
        role: "Co-author (paper gabungan dua Final Year Project)",
        overviewLabel: "Gambaran Keseluruhan",
        overview: "Cendawan Volvariella tinggi permintaan di Malaysia, tapi cara tanam tradisional susah nak kekalkan keadaan persekitaran yang ideal, jadi hasil dan kualiti tak menentu. Paper ni gabungkan projek IoT environmental control saya dengan projek deep learning monitoring rakan pelajar jadi satu sistem lengkap.",
        approachLabel: "Sumbangan Saya (Sistem IoT)",
        approach: "Saya design dan bina IoT environmental control system guna ESP32 microcontroller dengan sensor DHT22 (suhu/kelembapan), MQ135 (CO2), dan HW-038 (paras air). Ia kawal actuator (fogger, water pump, heater, kipas ventilation) untuk kekalkan keadaan ideal secara automatik: 28-35°C, 75-95% RH, dan CO2 < 1000 ppm.",
        collabLabel: "Sumbangan Rakan Kolaborasi (Model AI)",
        collab: "Rakan co-author sumbangkan komponen deep learning YOLOv8 untuk pantau empat peringkat pertumbuhan cendawan (Tiny, Button, Egg, Mature).",
        resultsLabel: "Keputusan Utama",
        button: "Lihat kertas penuh",
        stats: {
          period: "~85%",
          periodSub: "dalam julat sasaran",
          acc: "93.12%",
          accSub: "ketepatan klasifikasi",
          f1: "87.9%",
          f1Sub: "makro-purata F1",
          map: "0.78",
          mapSub: "mAP@0.5"
        },
        tags: ["IoT (Saya)", "ESP32", "DHT22", "MQ135", "YOLOv8 (Rakan Kolaborasi)", "Deep Learning", "Python"]
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
