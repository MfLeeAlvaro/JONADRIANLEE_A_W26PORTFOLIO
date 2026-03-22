import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { ContactForm } from '../components/ui/ContactForm'
import { Reveal } from '../components/ui/Reveal'
import { personal } from '../data/personal'

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-rose-400/80">
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-rose-400/80">
      <path
        d="M6.5 4h3l1.5 4-2 1.5c1 2 3 4 5 5l1.5-2 4 1.5v3c0 1-1 2-2 2C10.5 19 5 13.5 5 6.5c0-1 1-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-rose-400/80">
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  )
}

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Open channel"
        subtitle="For coursework feedback, mentorship, or opportunities—reach out by email or the form below."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full text-left ring-1 ring-inset ring-rose-950/20">
            <h2 className="font-display text-lg font-bold text-mist">Direct</h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <IconMail />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Email</p>
                  <a href={`mailto:${personal.email}`} className="prose-link mt-1 inline-block text-base">
                    {personal.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <IconPhone />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Phone</p>
                  <a href={`tel:${personal.phone.replace(/\D/g, '')}`} className="mt-1 block text-muted hover:text-mist">
                    {personal.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <IconPin />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Location</p>
                  <p className="mt-1 text-muted">{personal.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 border-t border-line/60 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Profiles</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-line bg-void/50 px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-rose-500/35 hover:text-rose-100"
                >
                  GitHub
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-line bg-void/50 px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-rose-500/35 hover:text-rose-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card className="text-left">
            <h2 className="font-display text-lg font-bold text-mist">Message</h2>
            <p className="mt-2 text-sm text-muted">
              Demo form for your assignment—wire it to EmailJS, Formspree, or an API when you’re ready.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
