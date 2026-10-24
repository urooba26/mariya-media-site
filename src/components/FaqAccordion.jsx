import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data/site.js'

// FAQ accordion used on the Contact page.
export default function FaqAccordion({ items = FAQS }) {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()
  const uid = useId()

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className={`faq__item ${isOpen ? 'open' : ''}`} key={item.q}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={`${uid}-a-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq__icon" aria-hidden="true"><ChevronDown size={17} /></span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${uid}-a-${i}`}
                  className="faq__a"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
