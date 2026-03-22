import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { capstone, projects } from '../data/projects'

export function Capstone() {
  const gameboxd = projects.find((p) => p.id === capstone.projectId)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Capstone / major project"
        title={capstone.title}
        subtitle="Featured narrative for instructors: vision, needs, features, tech stack, design artifacts, and reflection."
      />

      {gameboxd ? (
        <PlaceholderImage
          src={gameboxd.image}
          alt={gameboxd.title}
          label="GameBoxd hero / screenshot placeholder"
          className="mb-10"
        />
      ) : null}

      <div className="grid gap-8 text-left">
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Project summary</h2>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{capstone.summary}</p>
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Project vision</h2>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{capstone.vision}</p>
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Business & user needs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
            {capstone.needs.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Key features</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
            {capstone.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Technologies</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {capstone.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-900 dark:bg-sky-950/60 dark:text-sky-200"
              >
                {t}
              </span>
            ))}
          </div>
          {gameboxd ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href={gameboxd.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
                GitHub (placeholder)
              </Button>
              <Button as="a" href={gameboxd.demoUrl} variant="ghost" target="_blank" rel="noreferrer">
                Demo (placeholder)
              </Button>
            </div>
          ) : null}
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Design, wireframes & implementation
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Placeholder panels for wireframes, style tiles, and screenshots. Add images under{' '}
            <code className="rounded bg-slate-100 px-1 text-xs dark:bg-slate-800">public/assets/images/capstone/</code>.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {capstone.designPlaceholders.map((d) => (
              <div key={d.label}>
                <PlaceholderImage src={d.path} alt={d.label} label={d.label} aspect="square" />
                <p className="mt-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400">{d.label}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Outcome & reflection</h2>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{capstone.outcome}</p>
        </Card>
      </div>
    </div>
  )
}
