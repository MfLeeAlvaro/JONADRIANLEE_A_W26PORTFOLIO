/**
 * Academic / portfolio projects — edit links and images when repositories go live.
 */
export const projects = [
  {
    id: 'gameboxd',
    title: 'GameBoxd (Mobile App)',
    summary:
      'A game-discovery hub concept: mobile UI with featured, trending, and recommended rails, plus web dashboard exploration and wireframed information architecture—local persistence and modular components for a capstone-ready build.',
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
    image: '/assets/images/projects/gameboxd-mobile.png',
    githubUrl: 'https://github.com/MfLeeAlvaro/Capstone_Project_GP32_Gameboxd',
    demoUrl: 'https://capstone-project-gp-32-gameboxd.vercel.app/',
    featured: true,
  },
  {
    id: 'inventory',
    title: 'Inventory Management System',
    summary:
      'Team-built web app (3 developers) for catalog and stock control using ASP.NET Core MVC and PostgreSQL—auth, admin tooling, and filters that support real inventory workflows.',
    technologies: ['ASP.NET Core', 'MVC', 'PostgreSQL', 'JetBrains Rider', 'Git'],
    role: 'Team member (3-person group)',
    features: [
      'User login with role-based access control',
      'Admin panel for products and categories (create, edit, delete, details)',
      'Search, category filter, sort, and low-stock toggle with apply/clear actions',
      'Product table with stock status and actions wired to backend data',
    ],
    learned:
      'Coordinating schema and API contracts in a small team, securing routes by role, and shipping UI that stays understandable for non-technical stakeholders.',
    image: '/assets/images/projects/inventory-management-system.png',
    githubUrl: 'https://github.com/MfLeeAlvaro',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'gomoku',
    title: 'Gomoku AI Game',
    summary:
      'Console-based Gomoku in Java with a configurable AI: two-player mode plus player-vs-AI using Minimax over a 9×9 grid with full rule enforcement.',
    technologies: ['Java', 'Minimax', 'Arrays / 2D board representation', 'CLI', 'Git'],
    role: 'Solo developer',
    features: [
      'Player vs player and player vs AI modes',
      'Minimax with depth control for AI move selection',
      '9×9 board rendering in the terminal with labeled coordinates',
      'Win, tie, and invalid-move handling with clear turn feedback',
    ],
    learned:
      'How search depth trades strength for speed, how to keep game state consistent in plain arrays, and how to test edge cases in board logic.',
    image: '/assets/images/projects/gomoku-ai-game.png',
    githubUrl: 'https://github.com/MfLeeAlvaro',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 'roblox',
    title: 'train ur troops! (Roblox)',
    summary:
      'Roblox experience built in Roblox Studio with a troop-shop loop: spend coins on units, reroll the lineup, and balance clarity with playful UI (rarity borders, buy flow, reset warnings).',
    technologies: ['Roblox Studio', 'Luau', 'Rojo', 'React-Roblox', 'UI design'],
    role: 'Designer / programmer',
    features: [
      'Shop interface with currency display, unit cards, and BUY / REROLL actions',
      'Multiple unit types and visual rarity cues (borders, silhouettes, ability icons)',
      'Player feedback copy (e.g. shop reset warning) to support session flow',
      'Blocky world backdrop and stud-style UI aligned with Roblox conventions',
    ],
    learned:
      'Tuning economy hooks (costs, reroll) with readable UI—and iterating from playtests so the loop feels fair and understandable.',
    image: '/assets/images/projects/roblox-train-ur-troops.png',
    githubUrl: 'https://github.com/MfLeeAlvaro/RobloxRojoTemplate/tree/Trainyourslave',
    demoUrl: 'https://www.roblox.com/games/118561469792373/train-ur-troops',
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
    'Game detail pages with structured metadata fields',
    'Favorites/saved lists with persistence for offline-first demonstration',
    'Extensible service layer stubs for future API integration',
  ],
  technologies: ['React Native', 'JavaScript', 'Git', 'REST-style integration (planned)'],
  designPlaceholders: [
    { label: 'Low-fidelity wireframe (dashboard & grid)', path: '/assets/images/projects/gameboxd-wireframe.png' },
    { label: 'Web dashboard / UI exploration', path: '/assets/images/projects/gameboxd-web-dashboard.png' },
    { label: 'Mobile implementation', path: '/assets/images/projects/gameboxd-mobile.png' },
  ],
  outcome:
    'This project strengthened my ability to scope features, document assumptions, and present a cohesive story from problem to prototype. Next steps would include user testing, analytics-informed iteration, and a secure backend for accounts and shared lists.',
}
