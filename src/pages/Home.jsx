import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { SectionDivider } from '../components/ui/SectionDivider'
import { personal, highlights, professionalSummary } from '../data/personal'

export function Home() {
  return (
    <div>
      {/* Cinematic hero */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-line/40">
        <div className="bg-grid-faint absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-rose-600/15 blur-[100px] animate-pulse-soft"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/10 blur-[120px] animate-drift"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-rose-950/30 blur-[80px] animate-drift-slow"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:min-h-[88vh] lg:flex-row lg:items-center lg:gap-16 lg:py-28">
          <Reveal className="flex shrink-0 justify-center lg:justify-start">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-rose-500/30 via-transparent to-violet-600/20 opacity-80 blur-sm"
                aria-hidden
              />
              <img
                src={personal.assets.profilePhoto}
                alt={`${personal.name} — profile photo`}
                width={200}
                height={200}
                className="relative h-44 w-44 rounded-2xl border border-line object-cover shadow-2xl shadow-black/60 ring-2 ring-rose-950/50 sm:h-48 sm:w-48"
              />
            </div>
          </Reveal>

          <div className="min-w-0 flex-1 text-left">
            <p className="animate-fade-up font-display text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-rose-300/75">
              Academic portfolio · Developer in progress
            </p>
            <h1 className="animate-fade-up animation-delay-100 mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-mist sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <div className="animate-fade-up animation-delay-200 mt-5 space-y-1.5">
              {personal.heroLines.map((line) => (
                <p key={line} className="font-display text-lg font-semibold text-rose-100/90 sm:text-xl">
                  {line}
                </p>
              ))}
            </div>
            <p className="animate-fade-up animation-delay-300 mt-5 max-w-xl font-display text-base font-medium leading-snug text-muted sm:text-lg">
              {personal.heroFocusLine}
            </p>
            <p className="animate-fade-up animation-delay-400 mt-6 max-w-2xl border-l-2 border-rose-800/60 pl-5 text-sm leading-relaxed text-muted sm:text-base">
              {personal.heroTagline}
            </p>
            <p className="animate-fade-up animation-delay-400 mt-6 max-w-2xl text-sm leading-relaxed text-dim sm:text-[0.95rem]">
              {professionalSummary}
            </p>
            <div className="animate-fade-up animation-delay-400 mt-10 flex flex-wrap gap-4">
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
        </div>
      </section>

      <SectionDivider className="my-0 py-px" />

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-mist sm:text-3xl">Highlights</h2>
          <p className="mt-3 max-w-2xl text-muted">Academic focus, technical foundation, and real-world customer experience.</p>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <li key={i}>
              <Reveal delay={i * 60}>
                <Card hover className="h-full text-left">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-950/35 text-rose-200">
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
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line/40 bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h2 className="font-display text-xl font-bold text-mist">Video demo</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Screen walkthrough of this portfolio and project highlights (hosted on YouTube).
                </p>
                <a
                  href={personal.videoDemoUrl}
                  className="prose-link mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch video demo
                  <span aria-hidden>→</span>
                </a>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full">
                <h2 className="font-display text-xl font-bold text-mist">Source & repositories</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  This portfolio’s codebase, plus my wider work on GitHub.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={personal.githubPortfolioRepoUrl}
                    className="prose-link inline-flex items-center gap-2 text-sm font-semibold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio repository
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href={personal.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-rose-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub profile
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
