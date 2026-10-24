import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

// Thin gold progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })
  if (reduced) return null
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
