import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Animated number counter — counts up when scrolled into view.
export default function Counter({ value, suffix = '', prefix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) { setDisplay(value); return }
    const el = ref.current
    if (!el) return
    let frame = 0
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setDisplay(Math.round(value * eased))
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(frame) }
  }, [value, duration, reduced])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
