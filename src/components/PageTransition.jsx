import { motion, useReducedMotion } from 'framer-motion'

// Wrapper for route content — adds a curtain/fade page transition.
// Uses AnimatePresence in App.jsx with mode="wait".
export default function PageTransition({ children }) {
  const reduced = useReducedMotion()
  if (reduced) return <>{children}</>
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative' }}
    >
      {/* gold curtain wipe on route change */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          pointerEvents: 'none',
          transformOrigin: 'right',
          background: 'linear-gradient(120deg, #b8862f 0%, #f1d27a 45%, #050505 100%)',
          opacity: 0.16,
        }}
      />
      {children}
    </motion.div>
  )
}
