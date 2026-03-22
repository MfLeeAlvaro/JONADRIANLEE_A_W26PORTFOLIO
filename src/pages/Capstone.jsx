import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { Reveal } from '../components/ui/Reveal'
import { capstone, projects } from '../data/projects'

export function Capstone() {
  const gameboxd = projects.find((p) => p.id === capstone.projectId)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Capstone / major project"
        title={capstone.title}
        subtitle="Showcase narrative: problem, vision, implementation, and reflection—ready for grading and interviews."
      />

      <Reveal>
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-line/80 bg-gradient-to-b from-rose-950/15 to-panel/50 shadow-[0_0_60px_-20px_rgba(190,18,60,0.2)] ring-1 ring-inset ring-rose-950/20">
          <div className="bg-grid-faint absolute inset-0 opacity-40" aria-hidden />
          {gameboxd ? (
            <PlaceholderImage
              src={gameboxd.image}
              alt={gameboxd.title}
              label="GameBoxd — hero visual"
              className="rounded-none"
            />
          ) : null}
          <div className="relative border-t border-line/60 bg-void/70 px-6 py-6 backdrop-blur-sm sm:px-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rose-300/70">Featured build</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{capstone.summary}</p>
            {gameboxd ? (
              <div className="mt-5 flex flex-wrap gap-3">
                <Button as="a" href={gameboxd.githubUrl} variant="primary" target="_blank" rel="noreferrer">
                  GitHub
                </Button>
                <Button as="a" href={gameboxd.demoUrl} variant="secondary" target="_blank" rel="noreferrer">
                  Demo
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 text-left lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <h2 className="font-display text-lg font-bold text-mist">Project vision</h2>
            <p className="mt-4 leading-relaxed text-muted">{capstone.vision}</p>
          </Card>
        </Reveal>
        <Reveal delay={60}>
          <Card className="h-full">
            <h2 className="font-display text-lg font-bold text-mist">Business & user needs</h2>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-muted marker:text-rose-600/50">
              {capstone.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={80}>
          <Card className="h-full lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-mist">Key features</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {capstone.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted">
                  <span className="text-rose-500/60" aria-hidden>
                    ✦
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={100}>
          <Card className="h-full">
            <h2 className="font-display text-lg font-bold text-mist">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {capstone.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-rose-500/20 bg-rose-950/25 px-3 py-1 text-xs font-medium text-rose-100/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={120}>
          <Card className="h-full">
            <h2 className="font-display text-lg font-bold text-mist">Outcome & reflection</h2>
            <p className="mt-4 leading-relaxed text-muted">{capstone.outcome}</p>
          </Card>
        </Reveal>
        <Reveal delay={140}>
          <Card className="lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-mist">Design, wireframes & implementation</h2>
            <p className="mt-3 text-sm text-muted">
              Visuals for this capstone live under{' '}
              <span className="code-inline">public/assets/images/projects/</span> (see <span className="code-inline">projects.js</span>).
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {capstone.designPlaceholders.map((d) => (
                <div key={d.label}>
                  <PlaceholderImage src={d.path} alt={d.label} label={d.label} aspect="square" className="rounded-xl" />
                  <p className="mt-3 text-center text-xs font-medium text-dim">{d.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
