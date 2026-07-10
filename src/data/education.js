export const education = [
  {
    id: 'gbc',
    institution: 'George Brown College',
    program: 'Computer Programming',
    // Official MyCreds diploma PDF is dated April 24, 2026; resume PDF still lists Expected — keep wording aligned with resume until updated.
    credential: 'Diploma',
    location: 'Toronto, ON',
    start: 'September 2023',
    end: 'April 2026',
    statusNote: 'Expected', // TODO: Change to null or remove once resume is updated to match conferred diploma
    highlights: [
      'Coursework in programming fundamentals, problem-solving, and software development',
      'Practical skills in Python, Java, C++, and related development concepts',
    ],
  },
]

/** Relevant post-secondary / technical credentials only (not shown in main nav) */
export const additionalCredentials = [
  {
    title: 'Ontario College Advanced Diploma — Computer Programming and Analysis',
    issuer: 'George Brown College',
    year: 'April 24, 2026',
    detail: 'Official MyCreds credential conferred by George Brown College.',
    file: '/assets/documents/certificates/ontario-college-advanced-diploma-computer-programming-and-analysis.pdf',
  },
]
