import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { ExperienceItem } from '../components/ui/ExperienceItem'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { technicalExperience, workExperience, volunteerExperience } from '../data/experience'
import { education, additionalCredentials } from '../data/education'

export function Experience() {
  const diploma = education[0]
  const diplomaCredential = additionalCredentials[0]

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="Experience"
        description="Education, development projects, and professional experience — George Brown College diploma, warehouse operations, customer service, and portfolio software work."
      />
      <PageHeader
        eyebrow="Background"
        title="Experience"
        subtitle="Relevant development work, education, then employment that demonstrates reliability, accuracy, and teamwork."
      />

      <section>
        <Reveal>
          <h2 className="font-display text-xl font-bold text-mist">Relevant Development Experience</h2>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Substantial academic and personal projects treated as hands-on development experience.
          </p>
        </Reveal>
        <div className="mt-6 space-y-4">
          {technicalExperience.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-xl font-bold text-mist">Education</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          <Reveal>
            <Card>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-mist">{diploma.institution}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {diploma.program} — {diploma.credential}
                  </p>
                  <p className="mt-1 text-sm text-dim">
                    {diploma.start} – {diploma.end}
                    {diploma.location ? ` · ${diploma.location}` : ''}
                  </p>
                  {diploma.highlights?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-rose-600/50">
                      {diploma.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                  {diplomaCredential ? (
                    <p className="mt-4 text-sm text-dim">
                      {diplomaCredential.title} · {diplomaCredential.year}
                    </p>
                  ) : null}
                </div>
                {diplomaCredential?.file ? (
                  <Button as={Link} to="/diploma" variant="secondary" className="shrink-0 self-start">
                    View Diploma
                  </Button>
                ) : null}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-xl font-bold text-mist">Employment</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {workExperience.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Reveal>
          <h2 className="font-display text-xl font-bold text-mist">Volunteer</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {volunteerExperience.map((item, i) => (
            <Reveal key={item.id} delay={i * 40}>
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
