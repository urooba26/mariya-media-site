import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { SITE } from '../config.js'

// Gold shimmer preloader over the logo. Shows once per session so route
// changes are instant after the first visit.
export default function Preloader() {
  const reduced = useReducedMotion()
  const [done, setDone] = useState(() => {
    if (reduced) return true
    try { return sessionStorage.getItem('mm-preloaded') === '1' } catch { return false }
  })

  useEffect(() => {
    if (done) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
      try { sessionStorage.setItem('mm-preloaded', '1') } catch { /* private mode */ }
    }, 1700)
    return () => { clearTimeout(t); document.body.style.overflow = '' }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          key="preloader"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          aria-label="Loading Mariya Media Ltd"
          role="status"
        >
          <div>
            <div className="preloader__logo">
              <img src={`${import.meta.env.BASE_URL}${SITE.logo}`} alt="" width={230} height={230} />
              <span className="preloader__shimmer" aria-hidden="true" />
            </div>
            <div className="preloader__bar" aria-hidden="true"><span /></div>
            <p className="preloader__word">Empowering Creators</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
