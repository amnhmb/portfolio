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
