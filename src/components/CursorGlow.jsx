import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Soft gold glow that follows the cursor (desktop + hover-capable devices only).
export default function CursorGlow() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(hover: none)').matches || window.innerWidth <= 1024) return
    const el = ref.current
    if (!el) return
    let x = -600, y = -600, cx = -600, cy = -600, raf = 0

    const onMove = (e) => { x = e.clientX; y = e.clientY }
    const loop = () => {
      cx += (x - cx) * 0.12
      cy += (y - cy) * 0.12
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    const onLeave = () => { el.style.opacity = '0' }
    const onEnter = () => { el.style.opacity = '1' }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  if (reduced) return null
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
