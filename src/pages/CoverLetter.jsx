import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { coverLetter } from '../data/personal'

export function CoverLetter() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Cover letter"
        title="Featured document"
        subtitle="Sample letter for junior developer, internship, or entry-level roles—replace bracketed fields before sending."
      />
      <Reveal>
        <Card className="relative overflow-hidden text-left ring-1 ring-inset ring-rose-950/25">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-600/5 blur-3xl"
            aria-hidden
          />
          <div className="relative border-l-2 border-rose-800/50 pl-6 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-300/60">Letter</p>
            <pre className="mt-6 whitespace-pre-wrap font-[Georgia,'Times_New_Roman',serif] text-sm leading-[1.75] text-muted md:text-[0.95rem]">
              {coverLetter}
            </pre>
          </div>
        </Card>
      </Reveal>
    </div>
  )
}
