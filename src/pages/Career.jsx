import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { careerPhilosophy } from '../data/personal'

export function Career() {
  const paragraphs = careerPhilosophy.split('\n\n')
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Career"
        title="Career goal & philosophy"
        subtitle="How I approach learning, collaboration, and long-term growth as a developer."
      />
      <div className="space-y-6">
        {paragraphs.map((p, i) => (
          <Card key={i} className="text-left">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">{p}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
