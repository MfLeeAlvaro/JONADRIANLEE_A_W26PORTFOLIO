# Jon Adrian Alvaro — Portfolio

React + Vite + Tailwind CSS portfolio for junior developer, internship, IT, and technical support applications. Content is driven by files under `src/data/`.

### Visual design

- **Palette:** Near-black void, charcoal surfaces, burgundy/rose accents
- **Typography:** [Syne](https://fonts.google.com/specimen/Syne) (display) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body)
- **Motion:** Light `Reveal` scroll-in; `prefers-reduced-motion` respected

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Edit content

| File | Purpose |
|------|---------|
| `src/data/personal.js` | Name, role, contact, hero copy, skills |
| `src/data/projects.js` | Projects, case studies, links |
| `src/data/experience.js` | Employment + development experience |
| `src/data/education.js` | Education + optional credentials |
| `src/data/navigation.js` | Main nav links |

## Routes

| Route | Content |
|-------|---------|
| `/` | Home — hero, tech stack, featured projects, what I bring |
| `/projects` | Project cards + case-study modal |
| `/experience` | Development experience + employment |
| `/about` | Bio, education, skills, credentials |
| `/resume` | Resume download + PDF preview |
| `/contact` | Email, GitHub, LinkedIn |

Legacy paths (`/capstone`, `/cover-letter`, `/career`, `/credentials`) redirect to the closest current page.

## Assets

- `public/assets/images/profile-photo.png`
- `public/assets/images/projects/`
- `public/assets/documents/Jon_Adrian_Alvaro_Resume.pdf`

## Deploy

**Vercel:** Import the repo, framework Vite, build `npm run build`, output `dist`.

**GitHub Pages:** Set `base` in `vite.config.js` to your repo name (e.g. `'/JONADRIANLEE_A_W26PORTFOLIO/'`), then deploy the `dist` folder. Copy `dist/index.html` to `dist/404.html` for SPA route fallback, or use `HashRouter` if refresh 404s persist.
