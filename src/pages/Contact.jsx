import { useState } from 'react'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { SocialLinks } from '../components/ui/SocialLinks'
import { Seo } from '../components/ui/Seo'
import { personal } from '../data/personal'

const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
  'Hello from your portfolio',
)}`

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers / restricted contexts
      window.prompt('Copy this email address:', personal.email)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="Contact"
        description="Contact Jon Adrian Alvaro for junior developer, internship, IT, and technical support opportunities."
      />
      <PageHeader
        eyebrow="Connect"
        title="Contact"
        subtitle="Open to junior software developer, internship, IT, and technical support roles. Reach out by email or connect on GitHub and LinkedIn."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-lg font-bold text-mist">Direct contact</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/70">Email</dt>
              <dd className="mt-1">
                <a className="prose-link" href={mailtoHref}>
                  {personal.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/70">Location</dt>
              <dd className="mt-1 text-muted">{personal.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/70">Phone</dt>
              <dd className="mt-1">
                <a className="prose-link" href={`tel:${personal.phone.replace(/\D/g, '')}`}>
                  {personal.phone}
                </a>
              </dd>
            </div>
          </dl>
          <SocialLinks className="mt-6" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={mailtoHref} variant="primary">
              Email Me
            </Button>
            <Button type="button" variant="secondary" onClick={copyEmail}>
              {copied ? 'Email Copied' : 'Copy Email'}
            </Button>
            <Button as="a" href={personal.githubUrl} variant="ghost" target="_blank" rel="noreferrer">
              GitHub Profile
            </Button>
            {personal.linkedinUrl ? (
              <Button as="a" href={personal.linkedinUrl} variant="ghost" target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
            ) : null}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-dim">
            If Email Me does nothing, your device may not have a default mail app—use Copy Email instead.
          </p>
        </Card>

        <Card>
          <h2 className="font-display text-lg font-bold text-mist">Scan to open portfolio</h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
            Point your phone camera at this QR code to open the live site.
          </p>
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <img
              src={personal.assets.portfolioQr}
              alt={`QR code linking to ${personal.seo.siteUrl}`}
              width={180}
              height={180}
              className="h-44 w-44 rounded-xl border border-line bg-mist p-2"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300/70">Website</p>
              <a
                href={personal.seo.siteUrl}
                className="prose-link mt-2 inline-block break-all text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {personal.seo.siteUrl}
              </a>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-dim">
                Useful for resumes, business cards, and in-person networking.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="font-display text-lg font-bold text-mist">What to include</h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          A short note about the role, team, or project is enough. I typically reply with availability, relevant
          projects, and my resume.
        </p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-dim">
          A contact form is not enabled on this site yet—please use email or LinkedIn so messages reach me directly.
        </p>
      </Card>
    </div>
  )
}
