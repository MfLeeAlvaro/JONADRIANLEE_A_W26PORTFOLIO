export function SectionDivider({ className = '' }) {
  return (
    <div
      className={`mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-rose-900/40 to-transparent ${className}`.trim()}
      role="presentation"
    />
  )
}
