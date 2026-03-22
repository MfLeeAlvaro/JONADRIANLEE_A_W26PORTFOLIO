export function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <header className={`relative mb-12 max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-rose-300/80">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-start gap-4">
        <span
          className="mt-2 hidden h-12 w-1 shrink-0 rounded-full bg-gradient-to-b from-rose-500/80 via-violet-600/50 to-transparent sm:block"
          aria-hidden
        />
        <div>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-mist sm:text-4xl md:text-[2.35rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </header>
  )
}
