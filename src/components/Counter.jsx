import { useEffect, useRef, useState } from 'react'

// Counts up from 0 to `to` once it scrolls into view (respects reduced motion).
export default function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) { setVal(to); return }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        io.disconnect()
        const dur = 1400, t0 = performance.now()
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3)))) // easeOutCubic
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <b ref={ref}>{val}{suffix}</b>
}
