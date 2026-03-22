import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { personal } from '../../data/personal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{personal.name}</p>
            <p className="mt-2 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Academic portfolio for coursework — Computer Programming student, George Brown College.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Navigate</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-400">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-sky-600 dark:hover:text-sky-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-sky-600 dark:hover:text-sky-400">
                  {personal.email}
                </a>
              </li>
              <li>{personal.phone}</li>
              <li>{personal.location}</li>
              <li>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {year} {personal.name}. Submitted for academic portfolio requirements.
        </p>
      </div>
    </footer>
  )
}
