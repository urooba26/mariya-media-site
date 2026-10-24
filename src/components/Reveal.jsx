import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal wrapper. Staggers children when `stagger` is set.
// Falls back to instant visibility when the user prefers reduced motion.
const VARIANTS = {
  fadeUp: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  slideLeft: { hidden: { opacity: 0, x: -46 }, show: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 46 }, show: { opacity: 1, x: 0 } },
  mask: { hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' }, show: { opacity: 1, clipPath: 'inset(0 0 0% 0)' } },
  scale: { hidden: { opacity: 0, scale: 0.88 }, show: { opacity: 1, scale: 1 } },
}

export default function Reveal({
  as = 'div',
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  stagger = 0.08,
  amount = 0.2,
  className = '',
  children,
  ...rest
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  const base = VARIANTS[variant] || VARIANTS.fadeUp

  if (reduced) {
    const Tag = as
    return <Tag className={className} {...rest}>{children}</Tag>
  }

  const show = {
    ...base.show,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: base.hidden,
        show: {
          ...base.show,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// Child helper for staggered groups: <Reveal stagger>…<Reveal.Item>…</Reveal.Item></Reveal>
Reveal.Item = function RevealItem({ variant = 'fadeUp', className = '', children, ...rest }) {
  const reduced = useReducedMotion()
  const base = VARIANTS[variant] || VARIANTS.fadeUp
  if (reduced) return <div className={className} {...rest}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={{ hidden: base.hidden, show: { ...base.show, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
