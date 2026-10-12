import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Counter from './Counter'

// Shared hero for all inner pages: eyebrow, title, lede, optional stats strip.
export default function PageHero({ eyebrow, title, lede, stats = [], children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] pb-14 pt-32 md:pb-16 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/[0.07] blur-[90px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-tik-cyan/[0.05] blur-[80px]" aria-hidden="true" />

      <div className="container-x relative">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs text-zinc-500"
        >
          <Link to="/" className="transition hover:text-gold-400">Home</Link>
          <span className="mx-2 text-zinc-700">/</span>
          <span className="text-zinc-300">{eyebrow}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede && <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{lede}</p>}
        </motion.div>

        {stats.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([val, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.55 }}
                className="card card-hover p-4 sm:p-5"
              >
                <p className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">{val}</p>
                <p className="mt-1 text-xs text-zinc-500">{label}</p>
              </motion.div>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// Standard section shell: eyebrow + heading + optional action link.
export function SectionHead({ eyebrow, title, lede, action, center = false }) {
  return (
    <div className={`mb-12 flex flex-col gap-5 md:mb-16 ${center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      <div className={center ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">{title}</h2>
        {lede && <p className="mt-4 text-base leading-relaxed text-zinc-400">{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
