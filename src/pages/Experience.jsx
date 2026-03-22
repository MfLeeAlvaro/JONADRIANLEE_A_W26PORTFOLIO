import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { professionalSummary } from '../data/personal'
import { workExperience, volunteerExperience, transferableSkills } from '../data/experience'

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Professional summary"
        title="Experience & impact"
        subtitle="Service industry depth translated into how I’ll show up on a dev team: clear, fast, collaborative."
      />

      <Reveal>
        <Card className="mb-12 border-rose-900/20 text-left ring-1 ring-inset ring-rose-950/20">
          <h2 className="font-display text-lg font-bold text-mist">Professional summary</h2>
          <p className="mt-4 leading-relaxed text-muted md:text-[1.05rem]">{professionalSummary}</p>
        </Card>
      </Reveal>

      <Reveal>
        <h2 className="mb-6 font-display text-xl font-bold text-mist">Transferable strengths</h2>
      </Reveal>
      <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {transferableSkills.map((s, i) => (
          <Reveal key={s.title} delay={i * 50}>
            <Card hover className="h-full text-left">
              <h3 className="font-display text-base font-bold text-mist">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Card className="mb-12 text-left">
          <h2 className="font-display text-xl font-bold text-mist">Work experience</h2>
          <ul className="mt-8 space-y-12">
            {workExperience.map((job) => (
              <li key={job.id} className="relative border-l border-rose-900/35 pl-8">
                <span
                  className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gradient-to-br from-rose-500 to-rose-800 ring-4 ring-void"
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-mist">{job.role}</p>
                    <p className="text-muted">{job.company}</p>
                    <p className="text-sm text-dim">{job.location}</p>
                  </div>
                  <p className="text-sm font-medium text-rose-300/85">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-muted marker:text-rose-600/50">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>

      <Reveal delay={80}>
        <Card className="text-left">
          <h2 className="font-display text-xl font-bold text-mist">Volunteer experience</h2>
          <ul className="mt-8 space-y-8">
            {volunteerExperience.map((v) => (
              <li key={v.id} className="border-b border-line/40 pb-8 last:border-0 last:pb-0">
                <p className="font-display font-semibold text-mist">{v.role}</p>
                <p className="text-sm text-rose-300/75">{v.organization}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.summary}</p>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  )
}
