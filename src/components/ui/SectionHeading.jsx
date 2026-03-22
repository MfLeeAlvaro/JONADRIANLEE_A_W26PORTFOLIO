export function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <header className={`mb-10 max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
      ) : null}
    </header>
  )
}
