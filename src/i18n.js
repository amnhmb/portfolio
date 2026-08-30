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
        research: "Research",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        p1: "I am Aiman Hambali, a fresh graduate electronic engineer based in Kota Bharu, Kelantan, Malaysia.",
        p2: "My background blends hardware and embedded software. I have been actively involved in robotics clubs, FIRA competitions, and took part in a student exchange program hosting a visiting delegation from Fukuoka, Japan at my polytechnic."
      },
      skills: {
        title: "Technical Skills",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"]
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
      activities: {
        title: "Extra-Curricular",
        items: [
          "Robotics Club PUO",
          "FIRA 2019 Port Dickson",
          "Hosted a student exchange delegation from Fukuoka, Japan (Diploma)",
          "Pitch Perfect 5.0",
          "MIMOS IC-design Field Trip"
        ]
      },
      achievements: {
        title: "Achievements & Activities",
        fira: {
          title: "FIRA 2019 Robotics Competition",
          caption: "Port Dickson · Robotics Club, Politeknik Ungku Omar"
        },
        integrity: {
          title: "Integrity Award",
          caption: "PRS (Pembimbing Rakan Sebaya) Annual Dinner · Politeknik Ungku Omar",
          note: "Member of Pembimbing Rakan Sebaya (PRS) during Diploma."
        },
        close: "Close"
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
        role: "Jurutera Siswazah Baharu, Sistem Elektronik & IoT",
        description: "Jurutera Electronic & IoT dengan pengalaman praktikal dalam peralatan ujian semikonduktor dan sistem penderia IoT. Mahir dalam Python, Arduino, dan ESP32.",
        resume: "Muat turun Resume",
        contact: "Hubungi Saya"
      },
      nav: {
        about: "Mengenai",
        skills: "Kemahiran",
        education: "Pendidikan",
        experience: "Pengalaman",
        research: "Penyelidikan",
        contact: "Hubungi"
      },
      about: {
        title: "Mengenai Saya",
        p1: "Saya Aiman Hambali, seorang jurutera elektronik siswazah baharu yang berpangkalan di Kota Bharu, Kelantan, Malaysia.",
        p2: "Latar belakang saya menggabungkan perkakasan dan perisian terbenam. Saya aktif dalam kelab robotik, pertandingan FIRA, dan pernah menyertai program pertukaran pelajar sebagai hos kepada delegasi pelajar dari Fukuoka, Jepun yang berkunjung ke politeknik saya."
      },
      skills: {
        title: "Kemahiran Teknikal",
        items: ["Proteus", "Quartus II", "NI Multisim", "Microwind", "L-Edit IC", "AutoCAD", "MATLAB", "Python", "Arduino", "ESP32"]
      },
      experience: {
        title: "Pengalaman",
        items: [
          {
            role: "Pelatih Jurutera",
            company: "Unisem (M) Berhad",
            period: "Jul 2025 - Jan 2026",
            description: [
              "Diserap pada tahap jurutera, namun mengambil inisiatif menggalas tugas Juruteknik PM kerana kekurangan kakitangan pasukan.",
              "Menamatkan latihan berstruktur selama 1 bulan diikuti latihan amali berselia selama 1 bulan.",
              "Mengendalikan tanggungjawab barisan ujian secara bebas selama 4 bulan selepas kakitangan juruteknik dipindahkan ke kilang Gopeng.",
              "Mengurus penyelenggaraan pencegahan dan penyelesaian masalah pada mesin ujian semikonduktor (ETS-88, ETS-364, ASL-1000, CCT, dan LTX).",
              "Menyelaras tugas harian merentasi pelbagai bahagian bersama penyelia, operator, pelanggan, pasukan kejuruteraan, dan juruteknik barisan.",
              "Berjaya melatih dan membimbing kakitangan baharu sebelum tempoh latihan industri tamat."
            ]
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
      activities: {
        title: "Kokurikulum",
        items: [
          "Kelab Robotik PUO",
          "FIRA 2019 Port Dickson",
          "Menjadi hos delegasi pertukaran pelajar dari Fukuoka, Jepun (Diploma)",
          "Pitch Perfect 5.0",
          "Lawatan Sambil Belajar Reka Bentuk IC MIMOS"
        ]
      },
      achievements: {
        title: "Pencapaian & Aktiviti",
        fira: {
          title: "Pertandingan Robotik FIRA 2019",
          caption: "Port Dickson · Kelab Robotik, Politeknik Ungku Omar"
        },
        integrity: {
          title: "Anugerah Integriti",
          caption: "Makan Malam Tahunan PRS (Pembimbing Rakan Sebaya) · Politeknik Ungku Omar",
          note: "Ahli Pembimbing Rakan Sebaya (PRS) semasa Diploma."
        },
        close: "Tutup"
      },
      research: {
        title: "Kajian Kes",
        paperTitle: "An IoT-Enabled Growth Management System with Deep Learning-Based Monitoring for Volvariella volvacea Mushroom Cultivation in Controlled Environments",
        meta: "Wiley · Applied Research (Artikel Penyelidikan)",
        status: "Dalam semakan rakan sebaya (Under peer review)",
        role: "Pengarang bersama (Kertas kerja gabungan dua Projek Tahun Akhir)",
        overviewLabel: "Gambaran Keseluruhan",
        overview: "Cendawan Volvariella mendapat permintaan tinggi di Malaysia, tetapi penanaman tradisional sukar mengekalkan keadaan persekitaran yang ideal, menyebabkan hasil dan kualiti yang tidak menentu. Kertas kerja ini menggabungkan projek kawalan persekitaran IoT saya dengan projek pemantauan pembelajaran mendalam rakan pelajar menjadi satu sistem yang komprehensif.",
        approachLabel: "Sumbangan Saya (Sistem IoT)",
        approach: "Saya mereka bentuk dan membina sistem kawalan persekitaran IoT menggunakan mikropengawal ESP32 dengan penderia DHT22 (suhu/kelembapan), MQ135 (CO2), dan HW-038 (paras air). Ia mengawal penggerak (penyembur kabus, pam air, pemanas, kipas pengudaraan) untuk mengekalkan keadaan ideal secara automatik: 28-35°C, 75-95% RH, dan CO2 < 1000 ppm.",
        collabLabel: "Sumbangan Rakan Kolaborasi (Model AI)",
        collab: "Pengarang bersama menyumbang komponen pembelajaran mendalam YOLOv8 untuk memantau empat peringkat pertumbuhan cendawan (Tiny, Button, Egg, Mature).",
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
