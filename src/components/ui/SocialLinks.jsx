import { personal } from '../../data/personal'

const linkClass =
  'text-sm text-muted underline-offset-2 transition hover:text-rose-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80'

export function SocialLinks({ showPhone = false, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`.trim()}>
      <li>
        <a
          className={linkClass}
          href={`mailto:${personal.email}?subject=${encodeURIComponent('Hello from your portfolio')}`}
        >
          {personal.email}
        </a>
      </li>
      {showPhone ? (
        <li>
          <a className={linkClass} href={`tel:${personal.phone.replace(/\D/g, '')}`}>
            {personal.phone}
          </a>
        </li>
      ) : null}
      <li>
        <a className={linkClass} href={personal.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </li>
      {personal.linkedinUrl ? (
        <li>
          <a className={linkClass} href={personal.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      ) : null}
    </ul>
  )
}
