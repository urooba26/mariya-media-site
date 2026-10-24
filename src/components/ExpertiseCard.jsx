import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Icon from './Icon.jsx'

// Expandable card: description + 3-4 bullets. No pricing anywhere.
export default function ExpertiseCard({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const reduced = useReducedMotion()
  const panelId = useId()

  return (
    <article className={`card exp-card ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="exp-card__head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="chip"><Icon name={item.icon} size={24} /></span>
        <span className="exp-card__title">
          <h3>{item.title}</h3>
          <span>{open ? 'Tap to collapse' : 'Tap to see what’s included'}</span>
        </span>
        <span className="exp-card__toggle" aria-hidden="true"><Plus size={19} /></span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="exp-card__panel"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="exp-card__inner">
              <p>{item.lead}</p>
              <ul>
                {item.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
