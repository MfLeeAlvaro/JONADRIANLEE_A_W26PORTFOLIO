# Jon Adrian Alvaro — Academic Portfolio

React + Vite + Tailwind CSS portfolio for a college programming assignment. Content is driven by files under `src/data/` for easy editing.

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

## Recommended folder structure

```
JonAdrianLee_A_W26Portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile-photo.jpg
│   │   │   ├── projects/          # project screenshots
│   │   │   └── capstone/          # wireframes, style tiles
│   │   └── documents/
│   │       ├── resume.pdf
│   │       ├── transcript.pdf
│   │       └── certificates/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, MainLayout, ScrollToTop
│   │   └── ui/                    # Button, Card, SectionHeading, ProjectCard, etc.
│   ├── data/                      # personal.js, projects.js, experience.js, education.js, navigation.js
│   ├── pages/                     # one file per major section / route
│   ├── App.jsx                    # routes
│   ├── main.jsx
│   └── index.css                  # Tailwind + theme tokens + animations
├── index.html
├── vite.config.js
└── package.json
```

**Edit copy and lists in:** `src/data/personal.js`, `projects.js`, `experience.js`, `education.js`.

**Edit routes or layout in:** `src/App.jsx`, `src/components/layout/`.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In [Vercel](https://vercel.com), import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`, output directory: `dist`.
4. Deploy — no extra `base` path is needed for a root domain.

## Deploy to GitHub Pages

GitHub Pages serves from a subpath like `https://username.github.io/repo-name/`, so you must set Vite’s `base`:

1. In `vite.config.js`, set `base` to your repo name:

   ```js
   export default defineConfig({
     base: '/YOUR-REPO-NAME/',
     plugins: [react(), tailwindcss()],
   })
   ```

2. Install the helper (optional but common):

   ```bash
   npm install -D gh-pages
   ```

3. Add to `package.json` `"scripts"`:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Run `npm run deploy` and enable **GitHub Pages** from the `gh-pages` branch (or your chosen source) in the repository settings.

**Note:** For client-side routes on GitHub Pages, you may need a `404.html` copy of `index.html` or hosting that falls back to `index.html` for SPA routes. The simplest fix is copying `dist/index.html` to `dist/404.html` after build, or using a `HashRouter` instead of `BrowserRouter` if you hit 404s on refresh.

## Assignment sections (routes)

| Route            | Content                                      |
|-----------------|-----------------------------------------------|
| `/`             | Home, hero, highlights, video/GitHub blocks   |
| `/about`        | Biography, interests, profile placeholder     |
| `/resume`       | Resume-style layout + PDF placeholder         |
| `/cover-letter` | Sample cover letter                           |
| `/career`       | Career goal / philosophy                      |
| `/credentials`  | Education, coursework, transcript, certs      |
| `/projects`     | Five academic project cards                   |
| `/capstone`     | Featured GameBoxd capstone narrative          |
| `/experience`   | Work + volunteer + transferable skills        |
| `/contact`      | Email, phone, GitHub/LinkedIn, contact form   |
