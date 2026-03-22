import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { Reveal } from '../components/ui/Reveal'
import { aboutTraits, biography, interests, personal } from '../data/personal'

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="About me"
        title="Profile & biography"
        subtitle="Who I am as a student developer—grounded, creative, and serious about craft."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <Reveal>
          <Card className="overflow-hidden p-0 ring-1 ring-inset ring-rose-950/30">
            <PlaceholderImage
              src={personal.assets.profilePhoto}
              alt={`${personal.name} profile`}
              label="Profile photo"
              aspect="square"
              className="rounded-none"
            />
            <div className="border-t border-line/60 bg-elevated/50 p-6 text-left">
              <p className="font-display text-lg font-bold text-mist">{personal.name}</p>
              <p className="mt-1 text-sm text-muted">{personal.location}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Focus</p>
              <ul className="mt-3 space-y-2">
                {aboutTraits.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-500/70" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-8 text-left">
            {biography.split('\n\n').map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted md:text-[1.05rem]">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Card className="mt-14 text-left">
          <h2 className="font-display text-lg font-bold text-mist">Interests</h2>
          <p className="mt-2 text-sm text-dim">What keeps me building after class.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-rose-500/20 bg-rose-950/20 px-4 py-2 text-sm text-rose-100/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  )
}
