export function ExperienceItem({ item }) {
  const dateLabel =
    item.start && item.end ? `${item.start} — ${item.end}` : item.start || item.end || null

  return (
    <article className="rounded-2xl border border-line/80 bg-panel/70 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-mist">{item.role}</h3>
          <p className="text-sm text-muted">
            {item.company || item.organization}
            {item.location ? ` · ${item.location}` : ''}
          </p>
        </div>
        {dateLabel ? <p className="shrink-0 text-sm text-dim">{dateLabel}</p> : null}
      </div>
      {item.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-rose-600/50">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {item.summary ? <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p> : null}
    </article>
  )
}
