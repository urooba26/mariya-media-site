import { useState } from 'react'
import { SITE } from '../config.js'

// Photo slot: shows a real image when `src` is set, otherwise renders a
// generated gold placeholder card (no external requests, no broken images).
export default function Photo({ src, alt, round = false, hint = 'Photo coming soon', eager = false }) {
  const [failed, setFailed] = useState(false)
  const initials = (alt || '?')
    .split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join('').toUpperCase()

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div
      className={`portrait ${round ? 'portrait--round' : ''}`}
      role="img"
      aria-label={`${alt} — placeholder image`}
    >
      <svg className="portrait__silhouette" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="34" r="19" fill="currentColor" />
        <path d="M12 100c0-21 17-35 38-35s38 14 38 35z" fill="currentColor" />
      </svg>
      <span className="portrait__initials">{initials}</span>
      <span className="portrait__hint">{hint}</span>
      <span className="sr-only">{SITE.name} placeholder portrait for {alt}</span>
    </div>
  )
}
