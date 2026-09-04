import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "hello, i am",
        name: "Aiman Hambali Bin Amran.",
        role: "Fresh Graduate Engineer · Semiconductor Test & IoT Systems",
        description: "Hands-on experience in semiconductor test equipment and IoT sensor systems. Comfortable across Python, Arduino, and ESP32.",
        resume: "CV on request",
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
        p1: "I am Aiman Hambali, a fresh graduate electronic engineer based in Kota Bharu, Kelantan. My work blends hardware and embedded software, from IC and circuit design tools like Proteus, Quartus, and Microwind to building IoT sensor systems on ESP32 and Arduino. I like to really understand a problem and plan it out before I start building.",
        p2: "During my internship at Unisem, I was hired at an engineer level but stepped up to cover PM Technician duties when the team was short-staffed. After one month of structured training and one month of supervised hands-on work, I independently ran the test line for four months once the technicians were reassigned to the Gopeng plant. Did preventive maintenance and troubleshooting on semiconductor test equipment (ETS-88, ETS-364, ASL-1000, CCT and LTX), catching issues before they became downtime, and coordinating daily with supervisors, operators, customers and line technicians. Before the internship ended, I onboarded and trained a new staff member.",
        p3: "During my diploma I was active in robotics clubs and FIRA competitions, and hosted a visiting student delegation from Fukuoka, Japan at my polytechnic. I am now looking for a role in semiconductor test/equipment engineering or embedded systems, and I am open to relocating."
      },
      skills: {
        title: "Technical Skills",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"],
        softTitle: "Soft Skills",
        softItems: ["Teamwork", "Mentoring & Leadership", "Analytical Problem Solving", "Professional Maturity", "Time Management", "Continuous Learning"],
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
            description: [
              "Assisted in Distribution Board (DB) box installation.",
              "Handled conduit fitting for electrical routing.",
              "Carried out general house wiring."
            ]
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
            caption: "Analog & Digital IC Design study visit · MIMOS",
            note: "A study visit to see and learn the theory behind the IC chip fabrication process."
          },
          {
            image: "ayubi.jpg",
            title: "Ayubie Lobster Farm Visit",
            caption: "Electronic Design Project (EDP) site visit · Ayubie Lobster Farm",
            note: "Studied how the farm applies IoT in its operations, and the gaps that remain, to shape what students could build for the Electronic Design Project (EDP)."
          }
        ],
        otherLabel: "Other Activities",
        other: ["Robotics Club, Politeknik Ungku Omar", "Pitch Perfect 5.0"],
        close: "Close"
      },
      contact: {
        title: "Get in Touch",
        quote: "Dunia adalah ujian. Ini bukannya syurga untuk segalanya cantik dan baik.",
        copyright: "© 2026 @amnhmb · All rights reserved"
      },
      projects: {
        title: "Projects",
        intro: "Currently running operations at my cousin's business, ThirtyOne Lab, while designing and building its digital systems.",
        viewLive: "View live",
        private: "Private",
        companies: [
          {
            logo: "31lab.webp",
            name: "ThirtyOne Lab",
            tagline: "Sublimation apparel printing shop",
            items: [
              {
                image: "project-catalog.png",
                title: "Catalog & Admin Panel",
                description: "A product catalog web app with a built-in admin panel for the business. Customers browse the catalog and build quote requests; the owner manages products and content through the admin panel. The customer storefront is installable as a mobile app (PWA).",
                tech: ["React", "Vite", "Tailwind", "Supabase", "Cloudflare Pages", "PWA"],
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
          {
            logo: "tiga-pasak.png",
            name: "Tiga Pasak",
            tagline: "Camping gear rental business",
            items: [
              {
                image: "project-tiga_pasak-admin_panel.png",
                title: "Rental Admin Panel & Booking System",
                description: "A private admin panel for a camping gear rental business: manage inventory and stock, build rental packages, take and track bookings with live availability, and see pickups on a dashboard and calendar. Installable as a mobile app (PWA).",
                tech: ["React", "Vite", "Supabase", "Tailwind", "Cloudflare Pages", "PWA"]
              }
            ]
          },
          {
            locked: true,
            name: "Undisclosed Client",
            tagline: "New project in progress"
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
        role: "Fresh Graduate Engineer · Semiconductor Test & IoT Systems",
        description: "Pengalaman hands-on dalam semiconductor test equipment dan IoT sensor systems. Selesa guna Python, Arduino, dan ESP32.",
        resume: "CV atas permintaan",
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
        p1: "Saya Aiman Hambali, jurutera elektronik fresh graduate dari Kota Bharu, Kelantan. Kerja saya campurkan hardware dan embedded software, dari tools reka IC dan litar macam Proteus, Quartus dan Microwind, sampai bina sistem sensor IoT atas ESP32 dan Arduino. Saya suka faham masalah betul-betul dan rancang dulu sebelum mula bina.",
        p2: "Semasa internship di Unisem, saya diambil pada tahap engineer tapi ambil alih tugas PM Technician bila team kurang staf. Lepas sebulan latihan berstruktur dan sebulan hands-on bawah seliaan, saya jalankan tanggungjawab test line secara solo selama 4 bulan bila juruteknik dipindah ke plant Gopeng. Buat kerja preventive maintenance dan troubleshooting pada semiconductor test equipment (ETS-88, ETS-364, ASL-1000, CCT dan LTX), kesan masalah sebelum jadi downtime, dan coordinate setiap hari dengan supervisor, operator, customer dan line technician. Sebelum internship habis, saya onboard dan latih staf baru.",
        p3: "Sepanjang diploma saya aktif dalam kelab robotik dan pertandingan FIRA, dan pernah host delegasi pelajar dari Fukuoka, Jepun di politeknik saya. Sekarang saya cari peranan dalam semiconductor test/equipment engineering atau embedded systems, dan terbuka untuk berpindah."
      },
      skills: {
        title: "Kemahiran Teknikal",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"],
        softTitle: "Soft Skills",
        softItems: ["Teamwork", "Mentoring & Leadership", "Analytical Problem Solving", "Professional Maturity", "Time Management", "Continuous Learning"],
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
            description: [
              "Bantu pasang Distribution Board (DB) box.",
              "Buat conduit fitting untuk laluan pendawaian.",
              "Kendali house wiring am."
            ]
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
            caption: "Lawatan sambil belajar Reka Bentuk IC Analog & Digital · MIMOS",
            note: "Lawatan untuk melihat dan mempelajari teori proses fabrikasi cip IC."
          },
          {
            image: "ayubi.jpg",
            title: "Lawatan Ladang Udang Kara Ayubie",
            caption: "Lawatan tapak Projek Reka Bentuk Elektronik (EDP) · Ladang Udang Kara Ayubie",
            note: "Mengkaji cara ladang mengaplikasikan IoT dalam operasi mereka, dan jurang yang masih ada, sebagai panduan apa yang boleh dibina pelajar untuk projek Reka Bentuk Elektronik (EDP)."
          }
        ],
        otherLabel: "Aktiviti Lain",
        other: ["Kelab Robotik, Politeknik Ungku Omar", "Pitch Perfect 5.0"],
        close: "Tutup"
      },
      contact: {
        title: "Hubungi Saya",
        quote: "Dunia adalah ujian. Ini bukannya syurga untuk segalanya cantik dan baik.",
        copyright: "© 2026 @amnhmb · All rights reserved"
      },
      projects: {
        title: "Projek",
        intro: "Sekarang saya urus operasi bisnes sepupu saya, ThirtyOne Lab, sambil design dan bina sistem digital mereka.",
        viewLive: "Buka website",
        private: "Peribadi",
        companies: [
          {
            logo: "31lab.webp",
            name: "ThirtyOne Lab",
            tagline: "Kedai cetak baju sublimation",
            items: [
              {
                image: "project-catalog.png",
                title: "Katalog & Panel Pentadbir",
                description: "Web app katalog produk dengan admin panel terbina dalam untuk bisnes. Customer boleh browse katalog dan buat quote request; owner urus produk dan content melalui admin panel. Storefront customer boleh diinstall sebagai app mobile (PWA).",
                tech: ["React", "Vite", "Tailwind", "Supabase", "Cloudflare Pages", "PWA"],
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
          {
            logo: "tiga-pasak.png",
            name: "Tiga Pasak",
            tagline: "Bisnes sewa barang camping",
            items: [
              {
                image: "project-tiga_pasak-admin_panel.png",
                title: "Admin Panel Sewaan & Sistem Tempahan",
                description: "Admin panel peribadi untuk bisnes sewa barang camping: urus inventori dan stok, buat pakej sewaan, ambil dan track tempahan dengan ketersediaan live, serta pantau pickup di dashboard dan kalendar. Boleh diinstall sebagai app mobile (PWA).",
                tech: ["React", "Vite", "Supabase", "Tailwind", "Cloudflare Pages", "PWA"]
              }
            ]
          },
          {
            locked: true,
            name: "Klien Sulit",
            tagline: "Projek baru sedang dibina"
          }
        ]
      },
      research: {
        title: "Kajian Kes",
        paperTitle: "An IoT-Enabled Growth Management System with Deep Learning-Based Monitoring for Volvariella volvacea Mushroom Cultivation in Controlled Environments",
        meta: "Wiley · Applied Research (Artikel Penyelidikan)",
        status: "Under peer review",
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
  },
  kel: {
    translation: {
      hero: {
        greeting: "hai, kawe",
        name: "Aiman Hambali Bin Amran.",
        role: "Fresh Graduate Engineer · Semiconductor Test & IoT Systems",
        description: "Ado pengalamey hands-on semiconductor test equipment nga IoT sensor systems. Seleso guno Python, Arduino, nga ESP32.",
        resume: "CV atah permintaey",
        contact: "Hubungi Kawe"
      },
      nav: {
        about: "Pasal",
        skills: "Kemahirey",
        education: "Pelajarey",
        experience: "Pengalamey",
        projects: "Projek",
        research: "Kajiey",
        contact: "Roro"
      },
      about: {
        title: "Pasal Kawe",
        p1: "Kawe Aiman Hambali, fresh graduate electronic engineer, duk kat Kota Bharu, Kelantan. Kijo kawe capur hardware nga embedded software, dari tools design IC & circuit macey Proteus, Quartus, nga Microwind sapa la bina IoT sensor system atah ESP32 nga Arduino. Kawe suko pehe masaloh tu betul-betul, rancang dulu baru mulo wak.",
        p2: "Maso internship kat Unisem, kawe di ambik pado tahap engineer tapi keno ambik alih kijo PM Technician sebab team kurey staf. Lepah sebulan latihey berstruktur nga sebulan hands-on bawoh seliaey staff, kawe jaley tanggungjawab test line sorey-sorey selamo 4 buley bilo staff keno ata ko plant Gopeng. Buak kijo preventive maintenance nga troubleshooting kat semiconductor test equipment (ETS-88, ETS-364, ASL-1000, CCT nga LTX), kesey masaloh sebelum jadi downtime, nga coordinate setiap hari nga supervisor, operator, customer nga line technician. Sebelum abih internship, kawe onboard nga latih staf baru.",
        p3: "Sepanjey diploma kawe aktif daley kelab robotik nga masuk pertandingey FIRA, pernoh jadi hos delegasi pelajar dari Fukuoka, Jepun mari kat politeknik kawe. Loni kawe cari kijo dale semiconductor test/equipment engineering nga embedded systems, kawe sedio nok pindoh."
      },
      skills: {
        title: "Kemahiran Teknikal",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"],
        softTitle: "Soft Skills",
        softItems: ["Teamwork", "Mentoring & Leadership", "Analytical Problem Solving", "Professional Maturity", "Time Management", "Continuous Learning"],
        langTitle: "Bahaso",
        languages: [
          { name: "Bahasa Malaysia", level: 5, label: "Bahaso Ibundo" },
          { name: "English", level: 3, label: "Sederhano Jah" }
        ]
      },
      experience: {
        title: "Pengalamey",
        items: [
          {
            role: "Pelatih Engineer",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: [
              "Masuk jadi engineer, tapi amik inisiatif wat kijo PM Technician sebab pasukey kurey ore.",
              "Abih 1 bulan structured training, pahtu 1 bulan lagi hands-on training bawoh supervision.",
              "Handle sore tanggungjawab test line 4 bulan lepah technician pindoh gi kilang Gopeng.",
              "Uruh preventive maintenance nga troubleshooting mesin semiconductor test (ETS-88, ETS-364, ASL-1000, CCT, nga LTX). Tok gogek.",
              "Selaras kijo hari-hari nga supervisor, operator, customer, engineering team, nga line technician.",
              "Dey train nga tunjuk ajar staff baru sebelum abih latihan industri."
            ]
          },
          {
            role: "Technician Elektrik (Intern)",
            company: "Kejuruteraan Elektrik Usahamaju Sdn Bhd",
            period: "Jun 2021 - Ogo 2021",
            description: [
              "Tolong pasey Distribution Board (DB) box.",
              "Wak conduit fitting untuk laluey pendawaian.",
              "Uruh house wiring biaso."
            ]
          }
        ]
      },
      education: {
        title: "Sejaroh Pelajarey",
        performance: "Prestasi Akademik",
        viewTranscript: "Tengok transkrip",
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
              "Projek Tahun Akhir: Sistem penderia berasaskan IoT untuk taney cendawey Volvariella",
              "Projek Mini: Klip Dobi Bijok (IoT), Guard Keselamatey Baby (IoT)"
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
              "Projek Tahun Akhir: Robot Ngukah",
              "Projek Mini: Robot Mudoh Alih Bluetooth"
            ],
            type: "diploma"
          },
          {
            degree: "Sijil Pelajaran Malaysia (SPM)",
            school: "SMK Long Gafar",
            location: "Sekoloh Menengoh",
            period: "2016 - 2017",
            resultsTitle: "Keputusey",
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
            degree: "Menengoh Rendoh",
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
            title: "Tanding Robotik FIRA 2019",
            caption: "Tempat Keduo (Pasukey) · Port Dickson",
            note: "Tanding nga pasukey kelab robotik Politeknik Ungku Omar, dapat tempat keduo."
          },
          {
            image: "award-integrity.jpg",
            title: "Anugerah Integriti",
            caption: "Makey Maley Tahuney PRS (Pembimbing Rakey Sebayo) · Politeknik Ungku Omar",
            note: "Ahli Pembimbing Rakey Sebayo (PRS) maso Diploma."
          },
          {
            image: "nuclear_malaysia.jpg",
            title: "Konsultasi kat Nuklear Malaysia",
            caption: "Lawatey konsultasi FYP · Agensi Nuklear Malaysia",
            note: "Jumpo Dr. Azhar Mohamad, pakar taney cendawan, nok amik ilmu untuk FYP cendawan Volvariella kawe.",
            link: "https://www.researchgate.net/profile/Azhar-Mohamad-2",
            linkLabel: "Kajiey Dr. Azhar"
          },
          {
            image: "mimos.jpg",
            title: "Lawatey Sambil Belajar MIMOS",
            caption: "Lawatey sambil belajar Reko Bentuk IC Analog & Digital · MIMOS",
            note: "Lawatey nok tengok nga belajar teori proses buak cip IC."
          },
          {
            image: "ayubi.jpg",
            title: "Lawatey Ladang Udang Kara Ayubie",
            caption: "Lawatey tapok Projek Reko Bentuk Elektronik (EDP) · Ladey Udey Karo Ayubie",
            note: "Kaji macey mano ladey guno IoT daley operasi sep dio, nga jurey hok ado lagi, jadi panduan gapo student buleh bino untuk projek Reko Bentuk Elektronik (EDP)."
          }
        ],
        otherLabel: "Aktiviti Lain",
        other: ["Kelab Robotik, Politeknik Ungku Omar", "Pitch Perfect 5.0"],
        close: "Tutup"
      },
      contact: {
        title: "Roger Kawe",
        quote: "Dunia adalah ujian. Ini bukannya syurga untuk segalanya cantik dan baik.",
        copyright: "© 2026 @amnhmb · All rights reserved"
      },
      projects: {
        title: "Projek",
        intro: "Loni kawe uruh operasi bisnes sepupu kawe, ThirtyOne Lab, sambil design nga buat sistem digital ko sep dio.",
        viewLive: "Buko website",
        private: "Peribadi",
        companies: [
          {
            logo: "31lab.webp",
            name: "ThirtyOne Lab",
            tagline: "Keda print baju sublimation",
            items: [
              {
                image: "project-catalog.png",
                title: "Katalog & Admin Panel",
                description: "Web app katalog produk nga admin panel untuk bisnes. Customer buleh browse katalog; owner uruh prodak nga content di admin panel. Storefront customer buleh install macey mobile app (PWA).",
                tech: ["React", "Vite", "Tailwind", "Supabase", "Cloudflare Pages", "PWA"],
                link: "https://31lab.pages.dev"
              },
              {
                image: "project-oms.png",
                title: "Sistem Pengurusey Pesaney (OMS)",
                description: "Sistem dalamey untuk uruh order, invois, nga tracking status order untuk bisnes, nga report status hari-hari automatik gi Telegram.",
                tech: ["React", "Vite", "Supabase", "Tailwind"]
              }
            ]
          },
          {
            logo: "tiga-pasak.png",
            name: "Tiga Pasak",
            tagline: "Bisnes sewo barey camping",
            items: [
              {
                image: "project-tiga_pasak-admin_panel.png",
                title: "Admin Panel Sewo & Sistem Tempahey",
                description: "Admin panel peribadi untuk bisnes sewo barey camping: uruh inventori nga stok, wak pakej sewo, ambik nga track tempahey nga availability live, pahtu buleh tengok pickup kat dashboard nga kalendar. Buleh install macey mobile app (PWA).",
                tech: ["React", "Vite", "Supabase", "Tailwind", "Cloudflare Pages", "PWA"]
              }
            ]
          },
          {
            locked: true,
            name: "Klien Sulit",
            tagline: "Projek baru tengoh wak"
          }
        ]
      },
      research: {
        title: "Kajian Kes",
        paperTitle: "An IoT-Enabled Growth Management System with Deep Learning-Based Monitoring for Volvariella volvacea Mushroom Cultivation in Controlled Environments",
        meta: "Wiley · Applied Research (Artikel Penyelidikan)",
        status: "Under peer review",
        role: "Co-author (paper gabung duo Final Year Project)",
        overviewLabel: "Gambaran Keseluruhan",
        overview: "Cendawan Volvariella tinggi permintaan kat Malaysia, tapi caro taney tradisional payoh nok kekal keadaan persekitaran hok ideal, jadi hasil nga kualiti tak tentu. Paper ni gabung projek IoT environmental control kawe nga projek deep learning monitoring saeng kawe jadi satu sistem lengkap.",
        approachLabel: "Sumbangan Kawe (Sistem IoT)",
        approach: "Kawe design nga bina IoT environmental control system guno ESP32 microcontroller nga sensor DHT22 (suhu/kelembapey), MQ135 (CO2), nga HW-038 (parah air). Dio kawal actuator (fogger, water pump, heater, kipas ventilation) nok kekal keadaan ideal automatik, 28-35°C, 75-95% RH, nga CO2 < 1000 ppm.",
        collabLabel: "Sumbangey Saeng Kolaborasi (Model AI)",
        collab: "Saeng co-author sumbey komponen deep learning YOLOv8 nok pantau empat peringkat tumbuh cendawan (Tiny, Button, Egg, Mature).",
        resultsLabel: "Keputusey Utamo",
        button: "Tengok kertas penuh",
        stats: {
          period: "~85%",
          periodSub: "dale julat sasarey",
          acc: "93.12%",
          accSub: "ketepatey klasifikasi",
          f1: "87.9%",
          f1Sub: "makro-purata F1",
          map: "0.78",
          mapSub: "mAP@0.5"
        },
        tags: ["IoT (Kawe)", "ESP32", "DHT22", "MQ135", "YOLOv8 (Saeng Kawe)", "Deep Learning", "Python"]
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
