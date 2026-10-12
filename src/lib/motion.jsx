import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal with stagger support.
// Usage: <Reveal>…</Reveal> or <Reveal stagger> with children as array of items.
export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

// Wraps a list of children and staggers them automatically.
export function Stagger({ children, className = '', gap = 0.09 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })
  const reduce = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : 'hidden'}
      animate={inView || reduce ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {Array.isArray(children) ? children.map((c, i) => <Item key={i}>{c}</Item>) : children}
    </motion.div>
  )
}

function Item({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
      initial={reduce ? false : undefined}
    >
      {children}
    </motion.div>
  )
}

// Page-level fade/slide transition wrapper (used inside routes).
export function PageFade({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
