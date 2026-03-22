import { useState } from 'react'

/**
 * Project/profile image, or moody gradient fallback.
 */
export function PlaceholderImage({ src, alt, label, aspect = 'video', className = '' }) {
  const [failed, setFailed] = useState(false)
  const aspectClass = aspect === 'square' ? 'aspect-square' : 'aspect-video'

  if (!src || failed) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-gradient-to-br from-panel via-void to-elevated text-center ring-1 ring-inset ring-rose-950/40 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt || label || 'Image area'}
      >
        <span className="max-w-[85%] px-4 text-sm font-medium leading-snug text-muted">{label || 'Add image to public/assets'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || label || ''}
      className={`h-full w-full object-cover ${aspectClass} ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
