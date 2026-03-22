import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { personal } from '../data/personal'
import { education, certificates } from '../data/education'

export function Credentials() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Academic credentials"
        title="Education & records"
        subtitle="Programs, coursework, transcript, and certificates—everything reviewers need in one place."
      />

      <div className="space-y-8 text-left">
        {education.map((ed, i) => (
          <Reveal key={ed.id} delay={i * 50}>
            <Card>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-mist">{ed.institution}</h2>
                  <p className="text-muted">
                    {ed.program} — {ed.credential}
                  </p>
                  <p className="text-sm text-dim">
                    {ed.start} — {ed.end}
                  </p>
                </div>
              </div>
              {ed.coursework.length ? (
                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Relevant coursework</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <li
                        key={c}
                        className="rounded-lg border border-line bg-void/50 px-3 py-1.5 text-sm text-muted"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {ed.highlights.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-muted marker:text-rose-600/50">
                  {ed.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </Reveal>
        ))}

        <Reveal delay={100}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Transcript</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Official or unofficial PDF when your school allows sharing.
            </p>
            <Button as="a" className="mt-5" href={personal.assets.transcriptPdf} variant="secondary" target="_blank" rel="noreferrer">
              Open transcript PDF
            </Button>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card>
            <h2 className="font-display text-lg font-bold text-mist">Certificates & awards</h2>
            <p className="mt-3 text-sm text-muted">
              Scanned / exported files live in <span className="code-inline">public/assets/documents/certificates/</span>.
            </p>
            <ul className="mt-6 space-y-3">
              {certificates.map((c) => (
                <li
                  key={c.file}
                  className="flex flex-col gap-3 rounded-xl border border-line/80 bg-void/30 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-mist">{c.title}</p>
                    <p className="text-sm text-muted">
                      {c.issuer} · {c.year}
                    </p>
                    {c.detail ? <p className="mt-1 text-sm text-dim">{c.detail}</p> : null}
                  </div>
                  <Button as="a" href={c.file} variant="secondary" target="_blank" rel="noreferrer">
                    View certificate
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
