/**
 * Academic / portfolio projects — edit links and images when repositories go live.
 */
export const projects = [
  {
    id: 'gameboxd',
    title: 'GameBoxd (Mobile App)',
    summary:
      'A mobile concept for discovering, organizing, and sharing games—built to practice UI flows, local data handling, and polished presentation for a portfolio-ready deliverable.',
    technologies: ['React Native', 'JavaScript', 'REST-style APIs', 'AsyncStorage', 'Git'],
    role: 'Solo developer / student lead (course & portfolio)',
    features: [
      'Onboarding and profile-style navigation patterns',
      'Game list browsing with filters and detail views',
      'Save/favorite interactions with persistent local storage',
      'Modular components for cards, headers, and reusable layouts',
    ],
    learned:
      'How to structure a mobile codebase for readability, manage async data flows, and iterate on UX details based on feedback.',
    image: '/assets/images/projects/gameboxd-placeholder.jpg',
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    summary:
      'A database-driven desktop or web-style management prototype for tracking employees, roles, and schedules—emphasizing CRUD operations and data integrity.',
    technologies: ['Java', 'MySQL', 'JDBC', 'Git'],
    role: 'Developer',
    features: [
      'Create, read, update, and delete employee records',
      'Simple authentication or role placeholders (as designed for coursework)',
      'Search and filter views for quicker admin workflows',
      'Input validation and error handling for safer data entry',
    ],
    learned:
      'Connecting an application to a relational database, writing clearer SQL queries, and designing screens around real admin tasks.',
    image: '/assets/images/projects/ems-placeholder.jpg',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'swift-ios',
    title: 'Swift iOS App',
    summary:
      'An iOS application built with Swift and Xcode to practice native layouts, navigation controllers, and event-driven programming on Apple platforms.',
    technologies: ['Swift', 'Xcode', 'UIKit or SwiftUI (course-dependent)', 'Git'],
    role: 'Developer',
    features: [
      'Multi-screen navigation with a coherent information architecture',
      'Form handling and basic state management patterns',
      'Lightweight data model for on-device demonstration',
      'Packaging and testing on simulator devices',
    ],
    learned:
      'How iOS projects are structured, how to debug Xcode build issues, and how to translate UI mockups into working screens.',
    image: '/assets/images/projects/swift-ios-placeholder.jpg',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'ml',
    title: 'Machine Learning Exploration Project',
    summary:
      'An academic exploration project focused on preparing a dataset, training a simple model, and interpreting results—designed to build intuition for ML workflows.',
    technologies: ['Python', 'Jupyter Notebook', 'pandas', 'scikit-learn', 'Git'],
    role: 'Developer / analyst',
    features: [
      'Data cleaning steps with documented assumptions',
      'Train/test split with a baseline model and simple metrics',
      'Visualizations that support conclusions',
      'Reproducible notebook structure for grading and review',
    ],
    learned:
      'The importance of data quality, how small modeling choices affect outcomes, and how to explain technical results in plain language.',
    image: '/assets/images/projects/ml-placeholder.jpg',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'roblox',
    title: 'Roblox Game Project',
    summary:
      'A creative game project developed in Roblox Studio using Luau, focusing on gameplay loops, scripting, and iterative playtesting.',
    technologies: ['Roblox Studio', 'Luau', 'Git (where applicable)', '3D scene design'],
    role: 'Designer / programmer',
    features: [
      'Core gameplay mechanics with scripted interactions',
      'Level layout tuned for player flow and clarity',
      'UI prompts and feedback for objectives',
      'Iteration based on playtesting notes',
    ],
    learned:
      'How scripting, world building, and player feedback interact—and how to scope a game project so it stays finishable for a course timeline.',
    image: '/assets/images/projects/roblox-placeholder.jpg',
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
  },
]

/** Capstone / major project — GameBoxd featured narrative for assignment section */
export const capstone = {
  projectId: 'gameboxd',
  title: 'GameBoxd — Capstone / Major Project',
  summary:
    'GameBoxd is a portfolio-quality mobile concept that demonstrates end-to-end thinking: user goals, feature scope, interface design, and implementation details that could evolve into a production app with backend services.',
  vision:
    'Create a calm, modern hub where players can track what they play, note what they want to try next, and share recommendations without clutter.',
  needs: [
    'Students and casual gamers want lightweight organization without complex spreadsheets.',
    'Users need quick scanning, clear categories, and trustworthy local persistence for saved items.',
    'A portfolio reviewer needs to see intentional UX, readable code structure, and measurable learning outcomes.',
  ],
  features: [
    'Guided navigation with consistent spacing, typography, and component reuse',
    'Game detail pages with structured metadata placeholders',
    'Favorites/saved lists with persistence for offline-first demonstration',
    'Extensible service layer placeholders for future API integration',
  ],
  technologies: ['React Native', 'JavaScript', 'Git', 'REST-style integration (planned)'],
  designPlaceholders: [
    { label: 'Low-fidelity wireframes', path: '/assets/images/capstone/wireframes-placeholder.png' },
    { label: 'UI style tile / palette', path: '/assets/images/capstone/style-tile-placeholder.png' },
    { label: 'Implementation screenshots', path: '/assets/images/capstone/screenshots-placeholder.png' },
  ],
  outcome:
    'This project strengthened my ability to scope features, document assumptions, and present a cohesive story from problem to prototype. Next steps would include user testing, analytics-informed iteration, and a secure backend for accounts and shared lists.',
}
