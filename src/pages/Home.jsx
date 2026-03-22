import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { personal, highlights, professionalSummary } from '../data/personal'

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15,23,42,0.2), transparent 35%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
            Academic portfolio
          </p>
          <h1 className="animate-fade-up animation-delay-100 mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
            {personal.title}
          </p>
          <p className="animate-fade-up animation-delay-300 mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {professionalSummary}
          </p>
          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap gap-4">
            <Button as={Link} to="/projects" variant="primary">
              View projects
            </Button>
            <Button as={Link} to="/resume" variant="secondary">
              Resume
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Highlights</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          A quick snapshot of my academic focus, technical foundation, and work experience.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <li key={i}>
              <Card hover className="h-full text-left">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      {/* Video demo + GitHub — assignment-ready placeholders */}
      <section id="video-demo" className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Video demo</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Add a hosted walkthrough (screen recording, presentation, or capstone demo). Replace the link below when
                your video is ready.
              </p>
              <a
                href={personal.videoDemoUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
                target="_blank"
                rel="noreferrer"
              >
                Open video link (placeholder)
                <span aria-hidden>→</span>
              </a>
            </Card>
            <Card>
              <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Source code / GitHub repository
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Central place for recruiters and instructors to review code. Update the URL when your public profile or
                portfolio repo is published.
              </p>
              <a
                href={personal.githubUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub (placeholder)
                <span aria-hidden>→</span>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
