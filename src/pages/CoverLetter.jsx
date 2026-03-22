import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { coverLetter } from '../data/personal'

export function CoverLetter() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Cover letter"
        title="Sample cover letter"
        subtitle="Tailored for junior developer, internship, or entry-level technical roles. Replace bracketed fields before submitting."
      />
      <Card className="text-left">
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {coverLetter}
        </pre>
      </Card>
    </div>
  )
}
