import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { personal, professionalSummary, languages } from '../data/personal'
import { education } from '../data/education'
import { workExperience, volunteerExperience, skillsList } from '../data/experience'

export function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Resume"
        title="Resume (web view)"
        subtitle="Formatted for readability. Add a PDF export to /public when you have a final version."
      />
      <div className="mb-8 flex flex-wrap gap-3">
        <Button as="a" href={personal.assets.resumePdf} variant="primary" target="_blank" rel="noreferrer">
          Download resume PDF (placeholder path)
        </Button>
      </div>

      <div className="space-y-8 text-left">
        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Contact</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>{personal.name}</li>
            <li>{personal.location}</li>
            <li>
              <a href={`mailto:${personal.email}`} className="text-sky-600 hover:underline dark:text-sky-400">
                {personal.email}
              </a>
            </li>
            <li>{personal.phone}</li>
            <li>
              <a href={personal.githubUrl} className="text-sky-600 hover:underline dark:text-sky-400" target="_blank" rel="noreferrer">
                GitHub (update URL)
              </a>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Professional summary</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{professionalSummary}</p>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Work experience</h2>
          <ul className="mt-4 space-y-8">
            {workExperience.map((job) => (
              <li key={job.id}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{job.role}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{job.company}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{job.location}</p>
                  </div>
                  <p className="text-sm font-medium text-sky-700 dark:text-sky-300">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Education</h2>
          <ul className="mt-4 space-y-6">
            {education.map((ed) => (
              <li key={ed.id}>
                <p className="font-semibold text-slate-900 dark:text-white">{ed.institution}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {ed.program} — {ed.credential}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ed.start} — {ed.end}
                </p>
                {ed.highlights.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                    {ed.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Skills</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skillsList.map((s) => (
              <li
                key={s}
                className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Volunteer experience</h2>
          <ul className="mt-4 space-y-4">
            {volunteerExperience.map((v) => (
              <li key={v.id}>
                <p className="font-semibold text-slate-900 dark:text-white">{v.role}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{v.organization}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.summary}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Languages</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{languages.join(' · ')}</p>
        </Card>
      </div>
    </div>
  )
}
