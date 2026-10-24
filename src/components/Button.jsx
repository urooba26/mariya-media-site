import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Button: renders a router <Link>, an <a> or a <button> depending on props.
// Adds a subtle magnetic pull on desktop (disabled for reduced motion).
export default function Button({
  to, href, onClick, type = 'button', variant = 'solid', size = '', children,
  icon = true, className = '', ...rest
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced || !ref.current || window.matchMedia('(hover: none)').matches) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.16
    const y = (e.clientY - r.top - r.height / 2) * 0.22
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }

  const cls = `btn ${variant === 'ghost' ? 'btn--ghost' : ''} ${size ? `btn--${size}` : ''} ${className}`.trim()
  const inner = <>{children}{icon && <ArrowRight aria-hidden="true" />}</>
  const props = { ref, className: cls, onMouseMove: onMove, onMouseLeave: onLeave, ...rest }

  if (to) return <Link to={to} {...props}>{inner}</Link>
  if (href) return <a href={href} {...props}>{inner}</a>
  return <button type={type} onClick={onClick} {...props}>{inner}</button>
}
