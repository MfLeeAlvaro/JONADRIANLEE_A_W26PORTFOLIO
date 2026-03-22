import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80'

const variants = {
  primary:
    'border border-rose-500/30 bg-gradient-to-b from-rose-700/90 to-rose-950 text-mist shadow-[0_0_24px_-4px_rgba(190,18,60,0.45)] hover:border-rose-400/50 hover:shadow-[0_0_32px_-2px_rgba(244,63,94,0.35)] active:scale-[0.98]',
  secondary:
    'border border-line bg-panel/80 text-mist backdrop-blur-md hover:border-rose-500/35 hover:bg-elevated/90 hover:shadow-[0_0_20px_-6px_rgba(190,18,60,0.25)] active:scale-[0.98]',
  ghost:
    'border border-transparent text-muted hover:border-line hover:bg-panel/60 hover:text-mist active:scale-[0.98]',
}

export function Button({ as: Comp = 'button', variant = 'primary', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim()
  if (Comp === Link) {
    return (
      <Link className={cls} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <Comp className={cls} {...props}>
      {children}
    </Comp>
  )
}
