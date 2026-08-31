// Academic transcript data for Aiman Hambali: source of truth for the
// interactive GPA chart + per-semester detail drawer.
// GPA/CGPA and per-course grades transcribed from official transcripts.
// Diploma = Politeknik Ungku Omar; Degree = UniKL British Malaysian Institute.

export const academics = {
  diploma: {
    level: 'Diploma',
    qualification: 'Diploma of Electronic Engineering (Communication)',
    institution: 'Politeknik Ungku Omar',
    location: 'Ipoh, Perak',
    period: 'Dec 2018 - Aug 2021',
    cgpa: 3.60,
    deansList: '4 of 5 semesters',
    // Only the 5 graded semesters carry a GPA point on the chart.
    // Sem 6 = industrial training (no GPA); shown in drawer but not plotted.
    semesters: [
      {
        sem: 1, term: 'Jun 2018', gpa: 3.30, cgpa: 3.30, credits: 18.0,
        courses: [
          { code: 'DBM1013', name: 'Engineering Mathematics 1', grade: 'B+', credit: 3 },
          { code: 'DBS1012', name: 'Engineering Science', grade: 'B', credit: 2 },
          { code: 'DEE1012', name: 'Measurement', grade: 'B', credit: 2 },
          { code: 'DET1013', name: 'Electrical Technology', grade: 'B+', credit: 3 },
          { code: 'DET1022', name: 'Electrical Wiring', grade: 'A+', credit: 2 },
          { code: 'DUB1012', name: 'Pengajian Malaysia', grade: 'B', credit: 2 },
          { code: 'DUE1012', name: 'Communicative English 1', grade: 'B', credit: 2 },
          { code: 'DUW1012', name: 'Occupational, Safety and Health', grade: 'A-', credit: 2 },
        ],
      },
      {
        sem: 2, term: 'Dec 2018', gpa: 3.78, cgpa: 3.54, credits: 18.0,
        courses: [
          { code: 'DBM2013', name: 'Engineering Mathematics 2', grade: 'A', credit: 3 },
          { code: 'DEC2012', name: 'Fundamental Programming', grade: 'A', credit: 2 },
          { code: 'DEE2023', name: 'Semiconductor Devices', grade: 'B', credit: 3 },
          { code: 'DEE2034', name: 'Digital Electronics', grade: 'A', credit: 4 },
          { code: 'DET2033', name: 'Electrical Circuits', grade: 'A-', credit: 3 },
          { code: 'DRS2171', name: 'Scrabble', grade: 'A', credit: 1 },
          { code: 'DUA2012', name: 'Sains, Teknologi dan Kejuruteraan Islam', grade: 'A', credit: 2 },
        ],
      },
      {
        sem: 3, term: 'Jun 2019', gpa: 3.59, cgpa: 3.56, credits: 18.0,
        courses: [
          { code: 'DBM3043', name: 'Electrical Engineering Mathematics', grade: 'A-', credit: 3 },
          { code: 'DEE3043', name: 'Electronic Circuits', grade: 'B+', credit: 3 },
          { code: 'DEE3052', name: 'Electronic Equipment Repair', grade: 'A', credit: 2 },
          { code: 'DEE3071', name: 'Electronic Computer Aided Design', grade: 'A+', credit: 1 },
          { code: 'DEP3013', name: 'Communication System Fundamentals', grade: 'A-', credit: 3 },
          { code: 'DEP3083', name: 'Telecommunication Network', grade: 'A', credit: 3 },
          { code: 'DUE3022', name: 'Communicative English 2', grade: 'C+', credit: 2 },
          { code: 'MPU24021', name: 'Kelab/Persatuan', grade: 'A', credit: 1 },
        ],
      },
      {
        sem: 4, term: 'Dec 2019', gpa: 3.67, cgpa: 3.58, credits: 17.0,
        courses: [
          { code: 'DEC40053', name: 'Embedded System Application', grade: 'A-', credit: 3 },
          { code: 'DEC50152', name: 'CMOS VLSI Layout Design', grade: 'A', credit: 2 },
          { code: 'DEE40082', name: 'Project 1', grade: 'A', credit: 2 },
          { code: 'DEE40113', name: 'Signal and System', grade: 'A', credit: 3 },
          { code: 'DEP40053', name: 'Fibre Optic Communication System', grade: 'A', credit: 3 },
          { code: 'DUE50032', name: 'Communicative English 3', grade: 'C+', credit: 2 },
          { code: 'MPU22012', name: 'Entrepreneurship', grade: 'B+', credit: 2 },
        ],
      },
      {
        sem: 5, term: 'Jun 2020', gpa: 3.67, cgpa: 3.60, credits: 14.0,
        courses: [
          { code: 'DEE30061', name: 'Computer Aided Electrical Drawing', grade: 'A+', credit: 1 },
          { code: 'DEE50102', name: 'Project 2', grade: 'A+', credit: 2 },
          { code: 'DEP50033', name: 'Data Communication and Networking', grade: 'A-', credit: 3 },
          { code: 'DEP50043', name: 'Microwave Devices', grade: 'B', credit: 3 },
          { code: 'DEP50063', name: 'Wireless Communication', grade: 'A', credit: 3 },
          { code: 'DEP50072', name: 'Satellite and Radar Communication System', grade: 'A-', credit: 2 },
        ],
      },
      {
        sem: 6, term: 'Dec 2020', gpa: null, cgpa: 3.60, credits: null,
        note: 'Industrial Training (Latihan Industri): completed with excellent result.',
        courses: [],
      },
    ],
  },

  degree: {
    level: 'Degree',
    qualification: 'Bachelor of Electronic Engineering Technology with Honours',
    institution: 'Universiti Kuala Lumpur British Malaysian Institute',
    location: 'Gombak, Selangor',
    period: 'Sept 2022 - Mar 2026',
    cgpa: 3.61,
    deansList: '5 of 6 semesters',
    semesters: [
      {
        sem: 1, term: 'Sept 2022', gpa: 3.61, cgpa: 3.61, credits: 16,
        courses: [
          { code: 'BEB24403', name: 'Electronics Amplifier Circuits', grade: 'A-', credit: 3 },
          { code: 'BGB21003', name: 'Essential Management Principles', grade: 'A', credit: 3 },
          { code: 'BPB11903', name: 'Introduction to Measurement and Instrumentation', grade: 'B+', credit: 3 },
          { code: 'BTB10403', name: 'Engineering Mathematics 2', grade: 'A', credit: 3 },
          { code: 'MPU3192', name: 'Philosophy and Current Issues', grade: 'B-', credit: 2 },
          { code: 'WEB20202', name: 'Professional English 1', grade: 'A-', credit: 2 },
        ],
      },
      {
        sem: 2, term: 'Feb 2023', gpa: 3.19, cgpa: 3.40, credits: 16,
        courses: [
          { code: 'BEB25303', name: 'Microprocessor and Embedded System', grade: 'C+', credit: 3 },
          { code: 'BEB27403', name: 'Digital Electronics', grade: 'A-', credit: 3 },
          { code: 'BPB22503', name: 'Engineering Drawing', grade: 'A-', credit: 3 },
          { code: 'BTB20304', name: 'Engineering Mathematics 3', grade: 'A', credit: 4 },
          { code: 'BTB23403', name: 'Electromagnetic Waves', grade: 'C', credit: 3 },
        ],
      },
      {
        sem: 3, term: 'Oct 2023', gpa: 3.64, cgpa: 3.47, credits: 14,
        courses: [
          { code: 'BEB27303', name: 'FPGA Principles and Applications', grade: 'B+', credit: 3 },
          { code: 'BEB34303', name: 'Internet of Things and System Integration', grade: 'A-', credit: 3 },
          { code: 'BPB31803', name: 'Control System', grade: 'A-', credit: 3 },
          { code: 'MPU3182', name: 'Penghayatan Etika dan Peradaban', grade: 'A', credit: 2 },
          { code: 'MPU3332', name: 'Isu-isu Kontemporari Muslim di Malaysia', grade: 'A-', credit: 2 },
          { code: 'WMD10101', name: 'Mandarin 1', grade: 'A-', credit: 1 },
        ],
      },
      {
        sem: 4, term: 'Mar 2024', gpa: 3.65, cgpa: 3.52, credits: 19,
        courses: [
          { code: 'BEB33303', name: 'Electronic Design Project', grade: 'A-', credit: 3 },
          { code: 'BEB41103', name: 'Artificial Intelligence', grade: 'B+', credit: 3 },
          { code: 'BEB44403', name: 'Electronic Assemblies', grade: 'A', credit: 3 },
          { code: 'BEB46503', name: 'Analog and Digital IC Design', grade: 'A', credit: 3 },
          { code: 'BGB32003', name: 'Industrial Safety and Health', grade: 'B+', credit: 3 },
          { code: 'WBB20103', name: 'Technopreneurship', grade: 'A-', credit: 3 },
          { code: 'WMD10201', name: 'Mandarin 2', grade: 'B+', credit: 1 },
        ],
      },
      {
        sem: 5, term: 'Oct 2024', gpa: 3.79, cgpa: 3.57, credits: 14,
        courses: [
          { code: 'BEB31103', name: 'Engineering Ethics and Professionalism in Society', grade: 'A', credit: 3 },
          { code: 'BEB43403', name: 'Big Data Analytics', grade: 'A-', credit: 3 },
          { code: 'BPB49804', name: 'Final Year Project 1', grade: 'A', credit: 4 },
          { code: 'MPU3242', name: 'Innovation Management', grade: 'B+', credit: 2 },
          { code: 'WEB20302', name: 'Professional English 2', grade: 'A-', credit: 2 },
        ],
      },
      {
        sem: 6, term: 'Mar 2025', gpa: 3.89, cgpa: 3.61, credits: 11,
        courses: [
          { code: 'BPB49906', name: 'Final Year Project 2', grade: 'A', credit: 6 },
          { code: 'BTB42503', name: 'Network Security Operation', grade: 'A-', credit: 3 },
          { code: 'MPU3482', name: 'Personal Financial Management 2', grade: 'S', credit: 2 },
        ],
      },
      {
        sem: 7, term: 'Jul 2025 - Jan 2026', gpa: null, cgpa: 3.61, credits: null,
        note: 'Industrial Training (Latihan Industri): Unisem (M) Berhad, Engineer Intern. Independently managed the semiconductor test line and trained new staff.',
        courses: [],
      },
    ],
  },
};

// Convenience arrays for the line chart (per-semester GPA, graded semesters only).
export const diplomaGPA = academics.diploma.semesters.filter(s => s.gpa != null).map(s => s.gpa);
export const degreeGPA = academics.degree.semesters.filter(s => s.gpa != null).map(s => s.gpa);
