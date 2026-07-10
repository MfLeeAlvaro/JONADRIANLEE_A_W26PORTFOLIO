import { useState } from 'react'

/**
 * Project/profile image with gradient fallback on error.
 */
export function PlaceholderImage({ src, alt, label, aspect = 'video', className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)
  const aspectClass = aspect === 'square' ? 'aspect-square' : 'aspect-video'

  if (!src || failed) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-gradient-to-br from-panel via-void to-elevated text-center ring-1 ring-inset ring-rose-950/40 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt || label || 'Image unavailable'}
      >
        <span className="max-w-[85%] px-4 text-sm font-medium leading-snug text-muted">
          {label || 'Image unavailable'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || label || ''}
      loading={loading}
      className={`h-full w-full object-cover ${aspectClass} ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
