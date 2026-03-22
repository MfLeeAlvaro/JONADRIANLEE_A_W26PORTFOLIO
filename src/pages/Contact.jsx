import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { ContactForm } from '../components/ui/ContactForm'
import { personal } from '../data/personal'

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect"
        subtitle="Reach out for academic review, mentorship, or opportunities. Update social links when your profiles are public."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="text-left">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Direct contact</h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="mt-0.5 text-sky-600 dark:text-sky-400">
                <IconMail />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</p>
                <a href={`mailto:${personal.email}`} className="text-sky-600 hover:underline dark:text-sky-400">
                  {personal.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-sky-600 dark:text-sky-400">
                <IconPhone />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Phone</p>
                <a href={`tel:${personal.phone.replace(/\D/g, '')}`} className="hover:underline">
                  {personal.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-sky-600 dark:text-sky-400">
                <IconPin />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p>{personal.location}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Profiles</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-700 dark:border-slate-600 dark:text-slate-100 dark:hover:border-sky-400"
              >
                GitHub (placeholder)
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-700 dark:border-slate-600 dark:text-slate-100 dark:hover:border-sky-400"
              >
                LinkedIn (placeholder)
              </a>
            </div>
          </div>
        </Card>

        <Card className="text-left">
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Message form</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Demonstration UI for your portfolio assignment. Connect a backend or third-party form handler to deliver
            messages.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>
      </div>
    </div>
  )
}
