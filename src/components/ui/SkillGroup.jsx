export function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/70">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-line bg-void/50 px-3 py-1.5 text-sm text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
