import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { careerPhilosophy } from '../data/personal'

export function Career() {
  const paragraphs = careerPhilosophy.split('\n\n')
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Career"
        title="Goals & philosophy"
        subtitle="Why I build, how I learn, and where I’m steering my craft."
      />
      <div className="space-y-8">
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <Card
              className={`text-left ${i === 0 ? 'relative overflow-hidden border-rose-900/30 bg-gradient-to-br from-rose-950/20 via-panel/80 to-panel/80' : ''}`}
            >
              {i === 0 ? (
                <span
                  className="font-display text-6xl leading-none text-rose-500/20 sm:text-7xl"
                  aria-hidden
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  “
                </span>
              ) : null}
              <p
                className={`leading-relaxed text-muted ${i === 0 ? '-mt-4 font-display text-lg font-medium text-mist/95 sm:text-xl' : 'text-base md:text-[1.05rem]'}`}
              >
                {p}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
