import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../lib/motion'

// High-conversion closing CTA used at the bottom of Home and key pages.
export default function CTASection({
  title = 'Ready To Go Viral On TikTok?',
  lede = 'Tell us your niche and goals. You will get an honest growth assessment within 48 hours — no retainers required to start the conversation.',
  primary = { to: '/contact', label: 'Book a Consultation' },
  secondary = { to: '/case-studies', label: 'See the results first' },
}) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 bg-cta-radial" aria-hidden="true" />
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-10 h-40 w-40 rounded-full bg-gold-500/15 blur-[70px]"
            animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 right-1/4 h-44 w-44 rounded-full bg-tik-cyan/10 blur-[70px]"
            animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Start the conversation</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title.split('Viral').length > 1 ? (
              <>Ready To Go <span className="text-gradient-gold">Viral</span> On TikTok?</>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">{lede}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to={primary.to} className="btn-gold !px-9 !py-4 text-base">
                {primary.label}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#sprite-arrow" /></svg>
              </Link>
            </motion.div>
            <Link to={secondary.to} className="btn-ghost !px-8 !py-4 text-base">{secondary.label}</Link>
          </div>

          <p className="mt-7 text-xs tracking-wide text-zinc-600">
            Free 30-min strategy call · Response within 48 hours · No obligation
          </p>
        </Reveal>
      </div>
    </section>
  )
}
