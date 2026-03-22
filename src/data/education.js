export const education = [
  {
    id: 'gbc',
    institution: 'George Brown College',
    program: 'Computer Programming',
    credential: 'Diploma (Expected)',
    location: 'Toronto, ON',
    start: 'September 2023',
    end: 'April 2026 (Expected)',
    highlights: [
      'Programming fundamentals and object-oriented concepts',
      'Problem-solving strategies and debugging practice',
      'Software development coursework and team-oriented project work',
    ],
    coursework: [
      'Programming fundamentals',
      'Problem-solving',
      'Software development',
      'Python, Java, and C++',
    ],
  },
  {
    id: 'hs',
    institution: 'James Cardinal McGuigan Catholic High School',
    program: 'Secondary School',
    credential: 'High School Diploma',
    location: 'Toronto, ON',
    start: 'September 2018',
    end: 'June 2022',
    highlights: ['Completed Ontario secondary school requirements'],
    coursework: [],
  },
]

/** Certificates & awards — PDF or image in public/assets/documents/certificates/ */
export const certificates = [
  {
    title: 'High school diploma pathway — Certificate of Excellence (Honours, Grade 10)',
    issuer: 'James Cardinal McGuigan Catholic Secondary School (TCDSB)',
    year: 'June 2020',
    detail:
      'Ontario secondary school recognition: Honours in Grade 10. Part of the pathway toward high school graduation / diploma.',
    file: '/assets/documents/certificates/mcguigan-honours-grade10-2020.png',
  },
  {
    title: 'Certificate of Achievement — Tutor Training 1',
    issuer: 'Licensed to Learn (L2L)',
    year: 'May 2018',
    detail: 'Successful completion of the L2L tutor training program.',
    file: '/assets/documents/certificates/l2l-tutor-training-1-2018.png',
  },
]
