import { useState } from 'react'

/**
 * Shows project/profile image when file exists; falls back to a labeled gradient.
 */
export function PlaceholderImage({ src, alt, label, aspect = 'video', className = '' }) {
  const [failed, setFailed] = useState(false)
  const aspectClass = aspect === 'square' ? 'aspect-square' : 'aspect-video'

  if (!src || failed) {
    return (
      <div
        className={`flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 text-center dark:from-slate-700 dark:to-slate-800 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt || label || 'Placeholder image'}
      >
        <span className="max-w-[80%] px-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {label || 'Image placeholder — add file to public folder'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || label || ''}
      className={`w-full rounded-xl object-cover ${aspectClass} ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
