import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { personal } from '../../data/personal'

const linkClass = ({ isActive }) =>
  `rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'border border-rose-500/25 bg-rose-950/40 text-rose-50 shadow-[0_0_20px_-8px_rgba(190,18,60,0.35)]'
      : 'text-muted hover:bg-panel/80 hover:text-mist'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[60] border-b border-line/50 bg-void/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <NavLink to="/" className="group flex shrink-0 flex-col text-left" onClick={() => setOpen(false)}>
          <span className="font-display text-sm font-bold tracking-tight text-mist">{personal.name}</span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-rose-300/60">Portfolio</span>
        </NavLink>

        <nav className="hidden items-center gap-0.5 lg:flex lg:flex-wrap lg:justify-end" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-xl border border-line bg-panel/50 px-3 py-2 text-sm font-medium text-mist lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line/50 bg-surface/95 px-4 py-4 backdrop-blur-lg lg:hidden">
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
