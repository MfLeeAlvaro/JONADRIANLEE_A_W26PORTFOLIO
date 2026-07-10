export function PageHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <header className={`mb-10 max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-rose-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-mist sm:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">{subtitle}</p> : null}
    </header>
  )
}

/** Alias kept for existing imports during refactor */
export function SectionHeading(props) {
  return <PageHeader {...props} />
}
