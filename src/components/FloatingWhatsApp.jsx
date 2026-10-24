import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { WhatsAppIcon } from './Brand.jsx'
import { whatsappLink } from '../config.js'

// Floating WhatsApp button (every page, bottom-right, pulsing) + back-to-top.
// Number and message come from src/config.js.
export default function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const href = whatsappLink()

  return (
    <>
      <a
        className="wa-btn"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with Mariya Media Ltd on WhatsApp"
        style={reduced ? { animation: 'none' } : undefined}
      >
        <WhatsAppIcon size={30} />
        <span className="wa-btn__label">Chat on WhatsApp</span>
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            className="to-top"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 14, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.85 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
