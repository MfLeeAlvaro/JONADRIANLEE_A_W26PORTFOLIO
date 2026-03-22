import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { personal, professionalSummary, languages } from '../data/personal'
import { education } from '../data/education'
import { workExperience, volunteerExperience, skillsList } from '../data/experience'

export function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Experience & credentials"
        subtitle="Structured for instructors and recruiters—download the PDF when your file is in /public."
      />
      <Reveal>
        <div className="mb-10 flex flex-wrap gap-4">
          <Button as="a" href={personal.assets.resumePdf} variant="primary" target="_blank" rel="noreferrer">
            Download resume PDF
          </Button>
        </div>
      </Reveal>

      <div className="space-y-8 text-left">
        <Reveal>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="font-medium text-mist">{personal.name}</li>
              <li>{personal.location}</li>
              <li>
                <a href={`mailto:${personal.email}`} className="prose-link">
                  {personal.email}
                </a>
              </li>
              <li>{personal.phone}</li>
              <li>
                <a href={personal.githubUrl} className="prose-link" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span className="mx-2 text-line">·</span>
                <a href={personal.linkedinUrl} className="prose-link" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={40}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Professional summary</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{professionalSummary}</p>
          </Card>
        </Reveal>

        <Reveal delay={60}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Work experience</h2>
            <ul className="mt-6 space-y-10">
              {workExperience.map((job) => (
                <li key={job.id} className="relative border-l border-rose-900/40 pl-6">
                  <span
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-rose-600/80 ring-4 ring-void"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="font-display font-semibold text-mist">{job.role}</p>
                      <p className="text-sm text-muted">{job.company}</p>
                      <p className="text-xs text-dim">{job.location}</p>
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
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Education</h2>
            <ul className="mt-6 space-y-8">
              {education.map((ed) => (
                <li key={ed.id} className="border-b border-line/50 pb-8 last:border-0 last:pb-0">
                  <p className="font-display font-semibold text-mist">{ed.institution}</p>
                  <p className="text-sm text-muted">
                    {ed.program} — {ed.credential}
                  </p>
                  <p className="text-xs text-dim">
                    {ed.start} — {ed.end}
                  </p>
                  {ed.highlights.length ? (
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted marker:text-rose-600/50">
                      {ed.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skillsList.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-line bg-void/40 px-3 py-1.5 text-sm text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Volunteer experience</h2>
            <ul className="mt-6 space-y-6">
              {volunteerExperience.map((v) => (
                <li key={v.id}>
                  <p className="font-semibold text-mist">{v.role}</p>
                  <p className="text-sm text-rose-300/75">{v.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.summary}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={140}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Languages</h2>
            <p className="mt-3 text-sm text-muted">{languages.join(' · ')}</p>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
