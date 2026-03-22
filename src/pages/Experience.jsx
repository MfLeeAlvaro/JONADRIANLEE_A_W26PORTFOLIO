import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { professionalSummary } from '../data/personal'
import { workExperience, volunteerExperience, transferableSkills } from '../data/experience'

export function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Professional summary"
        title="Experience & transferable skills"
        subtitle="McDonald's customer service experience paired with volunteer work—framed for software roles."
      />

      <Card className="mb-10 text-left">
        <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Professional summary</h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{professionalSummary}</p>
      </Card>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {transferableSkills.map((s) => (
          <Card key={s.title} hover className="text-left">
            <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
          </Card>
        ))}
      </div>

      <Card className="mb-10 text-left">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Work experience</h2>
        <ul className="mt-6 space-y-10">
          {workExperience.map((job) => (
            <li key={job.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</p>
                  <p className="text-slate-700 dark:text-slate-300">{job.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                </div>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-300">
                  {job.start} — {job.end}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="text-left">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Volunteer experience</h2>
        <ul className="mt-6 space-y-6">
          {volunteerExperience.map((v) => (
            <li key={v.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0 dark:border-slate-700">
              <p className="font-semibold text-slate-900 dark:text-white">{v.role}</p>
              <p className="text-sm text-sky-700 dark:text-sky-300">{v.organization}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.summary}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
