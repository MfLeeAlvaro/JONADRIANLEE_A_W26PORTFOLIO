import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { personal } from '../data/personal'
import { education, certificatesPlaceholder } from '../data/education'

export function Credentials() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Academic credentials"
        title="Education & documentation"
        subtitle="Coursework highlights plus placeholders for transcripts, certificates, and future uploads."
      />

      <div className="space-y-8 text-left">
        {education.map((ed) => (
          <Card key={ed.id}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{ed.institution}</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  {ed.program} — {ed.credential}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {ed.start} — {ed.end}
                </p>
              </div>
            </div>
            {ed.coursework.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Relevant coursework
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ed.coursework.map((c) => (
                    <li
                      key={c}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {ed.highlights.length ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                {ed.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </Card>
        ))}

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Transcript (placeholder)</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Upload an official or unofficial transcript PDF to the path below when permitted by your institution.
          </p>
          <Button
            as="a"
            className="mt-4"
            href={personal.assets.transcriptPdf}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Open transcript PDF (placeholder path)
          </Button>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Certificates & awards (placeholders)
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Replace these entries with real achievements and file paths.
          </p>
          <ul className="mt-6 space-y-4">
            {certificatesPlaceholder.map((c, i) => (
              <li
                key={i}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 p-4 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{c.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {c.issuer} · {c.year}
                  </p>
                </div>
                <Button as="a" href={c.file} variant="ghost" target="_blank" rel="noreferrer">
                  File link
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
