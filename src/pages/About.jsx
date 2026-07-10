import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { SkillGroup } from '../components/ui/SkillGroup'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { Button } from '../components/ui/Button'
import { personal, biography, languages, interests, skillGroups } from '../data/personal'
import { education, additionalCredentials } from '../data/education'

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="About"
        description="About Jon Adrian Alvaro — Computer Programming student, technical skills, education, and approach to building software."
      />
      <PageHeader
        eyebrow="Profile"
        title="About"
        subtitle="A concise look at my background, education, and how I approach learning and problem solving."
      />

      <div className="grid gap-10 lg:grid-cols-[12.5rem_1fr] lg:items-start lg:gap-12">
        <Reveal className="lg:sticky lg:top-24">
          <img
            src={personal.assets.profilePhoto}
            alt={`${personal.name} profile photo`}
            width={200}
            height={200}
            className="mx-auto h-44 w-44 rounded-2xl border border-rose-500/20 object-cover object-top shadow-xl ring-1 ring-line sm:h-48 sm:w-48 lg:mx-0 lg:h-[12.5rem] lg:w-[12.5rem]"
          />
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <section>
              <h2 className="font-display text-xl font-bold text-mist">Biography</h2>
              {biography.split('\n\n').map((para) => (
                <p key={para.slice(0, 24)} className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
                  {para}
                </p>
              ))}
            </section>
          </Reveal>

          <Reveal delay={40}>
            <section>
              <h2 className="font-display text-xl font-bold text-mist">Education</h2>
              <div className="mt-4 space-y-4">
                {education.map((ed) => (
                  <Card key={ed.id}>
                    <h3 className="font-display text-lg font-bold text-mist">{ed.institution}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {ed.program} {ed.credential}
                      {ed.statusNote ? ` (${ed.statusNote})` : ''}
                    </p>
                    <p className="mt-1 text-sm text-dim">
                      {ed.start} – {ed.end}
                      {ed.location ? ` · ${ed.location}` : ''}
                    </p>
                    {ed.highlights?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-rose-600/50">
                        {ed.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={60}>
            <section>
              <h2 className="font-display text-xl font-bold text-mist">Technical skills</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} title={group.title} items={group.items} />
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={80}>
            <section className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-bold text-mist">Languages</h2>
                <p className="mt-3 text-sm text-muted">{languages.join(' · ')}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-mist">Interests</h2>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {interests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>

          {additionalCredentials.length ? (
            <Reveal delay={100}>
              <section>
                <h2 className="font-display text-xl font-bold text-mist">Additional Credentials</h2>
                <p className="mt-2 max-w-prose text-sm text-muted">
                  Relevant post-secondary credentials available on request or via the link below.
                </p>
                <ul className="mt-4 space-y-3">
                  {additionalCredentials.map((c) => (
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
                        View credential
                      </Button>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ) : null}
        </div>
      </div>
    </div>
  )
}
