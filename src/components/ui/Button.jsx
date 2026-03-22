import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'

const variants = {
  primary:
    'bg-sky-600 text-white shadow-sm hover:bg-sky-500 hover:shadow-md dark:bg-sky-500 dark:hover:bg-sky-400',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:border-sky-400 hover:text-sky-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-sky-400',
  ghost: 'text-sky-700 hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-800',
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
