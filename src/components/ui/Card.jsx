export function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-line/80 bg-panel/70 p-6 shadow-[0_4px_32px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl ${
        hover
          ? 'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-rose-500/25 hover:bg-elevated/80'
          : ''
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
