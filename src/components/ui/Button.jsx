import { Link } from 'react-router-dom'

const base =
  'inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'border border-rose-500/30 bg-gradient-to-b from-rose-700/90 to-rose-950 text-mist shadow-[0_0_20px_-6px_rgba(190,18,60,0.4)] hover:border-rose-400/45 hover:shadow-[0_0_28px_-4px_rgba(244,63,94,0.3)] active:scale-[0.98]',
  secondary:
    'border border-line bg-panel/80 text-mist backdrop-blur-md hover:border-rose-500/30 hover:bg-elevated/90 active:scale-[0.98]',
  ghost:
    'border border-transparent text-muted hover:border-line hover:bg-panel/60 hover:text-mist active:scale-[0.98]',
  link: 'h-auto px-0 text-rose-200/90 underline-offset-4 hover:text-rose-100 hover:underline',
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
