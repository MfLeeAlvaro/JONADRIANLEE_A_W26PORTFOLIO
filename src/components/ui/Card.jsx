export function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`rounded-2xl border border-line/80 bg-panel/70 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl ${
        hover
          ? 'transition-all duration-500 ease-out hover:-translate-y-1 hover:border-rose-500/25 hover:bg-elevated/80 hover:shadow-[0_12px_48px_-8px_rgba(190,18,60,0.12)]'
          : ''
      } ${className}`.trim()}
    >
      {children}
    </div>
  )
}
