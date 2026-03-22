import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { personal } from '../../data/personal'
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 mt-auto border-t border-line/50 bg-surface/95">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-mist">{personal.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Computer Programming · George Brown College. Code, games, and sound—built with intent.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Navigate</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-muted underline-offset-2 transition hover:text-rose-200 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-muted underline-offset-2 transition hover:text-rose-200 hover:underline"
                >
                  {personal.email}
                </a>
              </li>
              <li>{personal.phone}</li>
              <li>{personal.location}</li>
              <li className="pt-1">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted underline-offset-2 transition hover:text-rose-200 hover:underline"
                >
                  GitHub
                </a>
                <span className="mx-2 text-line">·</span>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted underline-offset-2 transition hover:text-rose-200 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-line/40 pt-8 text-center text-xs text-dim">
          © {year} {personal.name}. Academic portfolio submission.
        </p>
      </div>
    </footer>
  )
}
