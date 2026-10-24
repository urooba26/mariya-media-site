import { Link } from 'react-router-dom'
import { SITE } from '../config.js'

// Logo lockup. `variant`: 'mark' (square) | 'full' (wide banner).
export default function Logo({ variant = 'mark', className = '', alt = `${SITE.name} logo` }) {
  const src = `${import.meta.env.BASE_URL}${SITE.logo}`
  if (variant === 'full') {
    return <img src={src} alt={alt} className={className} width={320} height={320} />
  }
  return (
    <Link to="/" className={`nav__brand ${className}`} aria-label={`${SITE.name} — home`}>
      <span className="nav__mark">
        <img src={src} alt="" width={44} height={44} />
      </span>
      <span className="nav__name">
        <b>MARIYA</b>
        <span>Media Ltd · TikTok Agency</span>
      </span>
    </Link>
  )
}
