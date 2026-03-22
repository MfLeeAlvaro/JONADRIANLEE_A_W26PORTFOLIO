export function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50 ${
        hover ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/80 hover:shadow-lg dark:hover:border-sky-500/40' : ''
      } ${className}`.trim()}
    >
      {children}
    </div>
  )
}
