/**
 * Portfolio projects — ordered by recruiter relevance.
 * Only include githubUrl / demoUrl / caseStudy when links and content are real.
 */
export const projects = [
  {
    id: 'gameboxd',
    title: 'GameBoxd',
    category: 'Academic Capstone',
    status: 'Academic Project',
    featured: true,
    purpose: 'A mobile game-discovery hub for browsing, saving, and organizing games.',
    contribution:
      'Solo developer: scoped features, designed UI flows, and implemented the React Native client with local persistence.',
    summary:
      'Capstone mobile app for discovering and tracking games—featured rails, detail views, favorites with AsyncStorage, and modular components ready for future API integration.',
    technologies: ['React Native', 'JavaScript', 'AsyncStorage', 'Git'],
    role: 'Solo developer / student lead',
    image: '/assets/images/projects/gameboxd-mobile.png',
    gallery: [
      { src: '/assets/images/projects/gameboxd-mobile.png', alt: 'GameBoxd mobile home screen' },
      { src: '/assets/images/projects/gameboxd-wireframe.png', alt: 'GameBoxd low-fidelity wireframe' },
      { src: '/assets/images/projects/gameboxd-web-dashboard.png', alt: 'GameBoxd web dashboard exploration' },
    ],
    githubUrl: 'https://github.com/MfLeeAlvaro/Capstone_Project_GP32_Gameboxd',
    demoUrl: 'https://capstone-project-gp-32-gameboxd.vercel.app/',
    caseStudy: {
      overview:
        'GameBoxd is my capstone project: a calm, modern hub where players can track what they play, note what to try next, and browse recommendations without clutter.',
      problem:
        'Casual players and students often juggle unfinished lists across apps and spreadsheets. I wanted a lightweight mobile experience that is easy to scan and works offline for demos.',
      responsibilities: [
        'Defined user goals, feature scope, and information architecture',
        'Built React Native screens for browsing, details, and saved lists',
        'Implemented local favorites with AsyncStorage',
        'Created wireframes and a web dashboard exploration for presentation',
        'Documented assumptions and next steps for backend accounts',
      ],
      architecture:
        'Client-first React Native app with modular UI components (cards, headers, layouts) and a service-layer stub for future REST-style API integration. Persistence is local for the portfolio demo.',
      features: [
        'Onboarding and profile-style navigation patterns',
        'Game list browsing with filters and detail views',
        'Save/favorite interactions with persistent local storage',
        'Reusable card and layout components',
      ],
      challenges: [
        {
          challenge: 'Keeping the feature set small enough to finish while still showing end-to-end thinking.',
          solution:
            'Prioritized browsing, details, and favorites; deferred accounts and shared lists to a documented roadmap.',
        },
        {
          challenge: 'Making offline demos feel complete without a live backend.',
          solution:
            'Used AsyncStorage for favorites and stubbed a service layer so reviewers can see where APIs would plug in.',
        },
      ],
      learned:
        'How to structure a mobile codebase for readability, manage async data flows, and present a clear story from problem to prototype.',
    },
  },
  {
    id: 'inventory',
    title: 'Inventory Management System',
    category: 'Full-Stack Web App',
    status: 'Completed',
    featured: true,
    purpose: 'Help teams track products, stock levels, and categories through a secure web interface.',
    contribution:
      'Team member (3 developers): contributed to ASP.NET Core MVC features, PostgreSQL-backed data, and admin tooling.',
    summary:
      'Team-built web app for catalog and stock control using ASP.NET Core MVC and PostgreSQL—authentication, role-based admin tools, and filters for real inventory workflows.',
    technologies: ['C#', 'ASP.NET Core', 'MVC', 'PostgreSQL', 'Git'],
    role: 'Team member (3-person group)',
    image: '/assets/images/projects/inventory-management-system.png',
    gallery: [
      {
        src: '/assets/images/projects/inventory-management-system.png',
        alt: 'Inventory management product table and filters',
      },
    ],
    // TODO: Replace with the project repository URL when available
    githubUrl: null,
    demoUrl: null,
    caseStudy: {
      overview:
        'A three-person academic project that models inventory operations: products, categories, stock status, and role-based administration.',
      problem:
        'Small teams need a clear way to create and update catalog data, see low stock, and restrict admin actions to authorized users.',
      responsibilities: [
        'Collaborated on MVC controllers, views, and PostgreSQL-backed models',
        'Supported login and role-based access for admin versus standard users',
        'Helped wire search, category filter, sort, and low-stock toggles',
        'Aligned UI labels and table actions with backend data',
      ],
      architecture:
        'ASP.NET Core MVC application with PostgreSQL persistence, server-rendered views, and role checks on administrative routes. Developed with JetBrains Rider and Git.',
      features: [
        'User login with role-based access control',
        'Admin panel for products and categories (create, edit, delete, details)',
        'Search, category filter, sort, and low-stock toggle',
        'Product table with stock status and actions',
      ],
      challenges: [
        {
          challenge: 'Keeping schema and UI contracts consistent across three developers.',
          solution:
            'Agreed on shared models and review checkpoints so filters and CRUD actions stayed aligned with the database.',
        },
        {
          challenge: 'Making stock status understandable for non-technical reviewers.',
          solution:
            'Surfaced clear status labels and filter controls instead of exposing raw database fields.',
        },
      ],
      learned:
        'Coordinating schema and routes in a small team, securing admin actions by role, and shipping UI that stays understandable for stakeholders.',
    },
  },
  {
    id: 'roblox',
    title: 'train ur troops!',
    category: 'Game Development',
    status: 'Completed',
    featured: true,
    purpose: 'A multiplayer Roblox experience where players buy units, manage economy, and defend through wave-based play.',
    contribution:
      'Designer and programmer: built Luau gameplay systems, shop UI, and client-server communication with Rojo and React-Roblox.',
    summary:
      'Roblox experience with a troop-shop loop, currency economy, and session UI—implemented with Luau modules, RemoteEvents, and React-Roblox interfaces.',
    technologies: ['Luau', 'Roblox Studio', 'Rojo', 'React-Roblox', 'RemoteEvents'],
    role: 'Designer / programmer',
    image: '/assets/images/projects/roblox-train-ur-troops.png',
    gallery: [
      {
        src: '/assets/images/projects/roblox-train-ur-troops.png',
        alt: 'train ur troops shop interface with unit cards',
      },
    ],
    githubUrl: 'https://github.com/MfLeeAlvaro/RobloxRojoTemplate/tree/Trainyourslave',
    demoUrl: 'https://www.roblox.com/games/118561469792373/train-ur-troops',
    caseStudy: {
      overview:
        'train ur troops! is a Roblox experience focused on a readable shop-and-deploy loop: spend coins on units, reroll the lineup, and keep multiplayer session state consistent.',
      problem:
        'Players need clear feedback for currency, unit rarity, and purchase actions while the server remains the source of truth for economy and placement.',
      responsibilities: [
        'Implemented client-server messaging with RemoteEvents',
        'Built shop UI (currency, unit cards, BUY / REROLL) with React-Roblox',
        'Structured reusable Luau modules for economy and session flow',
        'Iterated on playtest feedback for clarity and fairness',
      ],
      architecture:
        'Roblox client-server model: authoritative server logic for currency and purchases; clients render UI and request actions through RemoteEvents. Source synced with Rojo; UI built with React-Roblox.',
      features: [
        'Shop interface with currency display and unit cards',
        'BUY and REROLL actions with player feedback copy',
        'Visual rarity cues (borders, silhouettes, ability icons)',
        'Session reset warnings to support clearer play loops',
      ],
      challenges: [
        {
          challenge: 'Keeping economy actions trustworthy in a multiplayer session.',
          solution:
            'Routed purchases and rerolls through server-handled RemoteEvents instead of trusting the client alone.',
        },
        {
          challenge: 'Making shop UI readable inside Roblox’s visual style.',
          solution:
            'Used clear rarity borders, concise labels, and React-Roblox components aligned with platform conventions.',
        },
      ],
      learned:
        'How to tune economy hooks with readable UI, debug multiplayer state, and keep modules reusable across shop and session systems.',
    },
  },
  {
    id: 'gomoku',
    title: 'Gomoku AI Game',
    category: 'Game Development',
    status: 'Completed',
    featured: false,
    purpose: 'A console Gomoku game with player-vs-player and player-vs-AI modes using Minimax search.',
    contribution:
      'Solo developer: implemented board rules, CLI rendering, and configurable-depth Minimax AI in Java.',
    summary:
      'Console-based Gomoku in Java with two-player and player-vs-AI modes using Minimax over a 9×9 grid with full rule enforcement.',
    technologies: ['Java', 'Minimax', 'CLI', 'Git'],
    role: 'Solo developer',
    image: '/assets/images/projects/gomoku-ai-game.png',
    gallery: [
      { src: '/assets/images/projects/gomoku-ai-game.png', alt: 'Gomoku AI terminal board and move prompts' },
    ],
    // TODO: Replace with the project repository URL when available
    githubUrl: null,
    demoUrl: null,
    caseStudy: {
      overview:
        'A Java CLI implementation of Gomoku that demonstrates game-state management and adversarial search with Minimax.',
      problem:
        'Build a complete rule-enforcing board game where an AI opponent can choose moves at a configurable search depth.',
      responsibilities: [
        'Modeled the 9×9 board and win/tie/invalid-move rules',
        'Implemented Minimax with depth control for AI move selection',
        'Rendered labeled coordinates and turn feedback in the terminal',
      ],
      architecture:
        'Plain Java with 2D array board representation, separate logic for rules versus AI search, and a CLI loop for input and output.',
      features: [
        'Player vs player and player vs AI modes',
        'Minimax with depth control',
        '9×9 board rendering with labeled coordinates',
        'Win, tie, and invalid-move handling',
      ],
      challenges: [
        {
          challenge: 'Balancing AI strength against response time.',
          solution:
            'Exposed search depth as a control so stronger play could be traded for faster turns during demos.',
        },
        {
          challenge: 'Keeping game state consistent without a heavy framework.',
          solution:
            'Centralized board updates and validation so AI and human moves shared the same rule checks.',
        },
      ],
      learned:
        'How search depth trades strength for speed, how to keep game state consistent in plain arrays, and how to test edge cases in board logic.',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null
}
