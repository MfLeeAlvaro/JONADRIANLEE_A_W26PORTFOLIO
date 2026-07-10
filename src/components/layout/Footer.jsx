import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { personal } from '../../data/personal'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto border-t border-line/50 bg-surface/95">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-mist">{personal.name}</p>
            <p className="mt-1 text-sm text-muted">{personal.role}</p>
            <SocialLinks className="mt-4" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-muted underline-offset-2 transition hover:text-rose-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line/40 pt-6 sm:flex-row">
          <p className="text-xs text-dim">
            © {year} {personal.name}
          </p>
          <a
            href="#top"
            className="text-xs font-medium text-muted underline-offset-2 transition hover:text-rose-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
