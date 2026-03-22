import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { personal } from '../../data/personal'

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-sky-950/60 text-sky-100'
      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="group flex shrink-0 flex-col text-left" onClick={() => setOpen(false)}>
          <span className="font-display text-sm font-bold text-white">{personal.name}</span>
          <span className="text-xs text-slate-400">Portfolio</span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex lg:flex-wrap lg:justify-end">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
