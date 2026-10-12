import { motion, useReducedMotion } from 'framer-motion'
import Counter from './Counter'

// Phone mockup with a simulated TikTok creator dashboard and floating metric chips.
export default function PhoneMockup() {
  const reduce = useReducedMotion()
  const float = (delay) =>
    reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 5, repeat: Infinity, delay, ease: 'easeInOut' } }

  return (
    <div className="relative mx-auto w-full max-w-[330px]" aria-hidden="true">
      {/* glow behind phone */}
      <div className="absolute -inset-8 rounded-[3rem] bg-gold-500/20 blur-3xl" />

      {/* floating chips */}
      <motion.div {...float(0.2)} className="glass absolute -left-6 top-14 z-20 rounded-2xl px-4 py-3 shadow-card sm:-left-14">
        <p className="text-[10px] uppercase tracking-widest text-zinc-400">Views today</p>
        <p className="font-display text-xl font-bold text-gradient-gold">
          <Counter value={2840000} duration={2.4} suffix="" />
        </p>
      </motion.div>

      <motion.div {...float(1.4)} className="glass absolute -right-4 top-1/3 z-20 rounded-2xl px-4 py-3 shadow-card sm:-right-12">
        <p className="text-[10px] uppercase tracking-widest text-zinc-400">New followers</p>
        <p className="font-display text-xl font-bold text-tik-cyan">+<Counter value={18420} duration={2.2} /></p>
      </motion.div>

      <motion.div {...float(0.8)} className="glass absolute -left-3 bottom-16 z-20 rounded-2xl px-4 py-3 shadow-card sm:-left-10">
        <p className="text-[10px] uppercase tracking-widest text-zinc-400">LIVE revenue</p>
        <p className="font-display text-xl font-bold text-tik-pink">$<Counter value={12840} duration={2.6} /></p>
      </motion.div>

      {/* phone body */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40, rotateX: 14 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative z-10 mx-auto rounded-[2.5rem] border border-white/15 bg-ink-800 p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)]"
        style={{ transform: 'perspective(1200px)' }}
      >
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-ink-850 to-ink-950">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] text-zinc-500">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-black" />
            <span>100%</span>
          </div>

          {/* profile header */}
          <div className="px-4 pt-3 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-ink-700 font-display text-lg font-bold text-gold-400">
              MM
            </div>
            <p className="mt-2 font-display text-sm font-semibold text-white">@mariyamedia</p>
            <p className="text-[10px] text-zinc-500">TikTok Agency · London</p>
            <div className="mt-3 flex justify-center gap-5 text-center text-[11px]">
              <div><p className="font-bold text-white">1.4M</p><p className="text-zinc-500">Following</p></div>
              <div><p className="font-bold text-white">12.8M</p><p className="text-zinc-500">Followers</p></div>
              <div><p className="font-bold text-white">98.2M</p><p className="text-zinc-500">Likes</p></div>
            </div>
          </div>

          {/* mini stats graph */}
          <div className="mx-4 mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
            <div className="mb-2 flex items-center justify-between text-[10px]">
              <span className="text-zinc-400">Weekly views</span>
              <span className="rounded-full bg-gold-500/15 px-2 py-0.5 font-semibold text-gold-400">+38%</span>
            </div>
            <svg viewBox="0 0 200 54" className="w-full">
              <motion.polyline
                points="0,46 28,40 56,42 84,30 112,32 140,18 168,20 200,6"
                fill="none"
                stroke="#F6B620"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.9 }}
              />
            </svg>
          </div>

          {/* content grid */}
          <div className="grid grid-cols-3 gap-1 p-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.05 }}
                className={`aspect-[9/13] rounded-lg ${
                  ['bg-gold-500/25', 'bg-tik-cyan/20', 'bg-tik-pink/20', 'bg-white/[0.07]'][i % 4]
                } relative overflow-hidden`}
              >
                <span className="absolute bottom-1 left-1 rounded bg-black/50 px-1 text-[7px] text-white">
                  {['2.4M', '890k', '5.1M', '120k', '760k', '3.8M', '410k', '1.9M', '2.2M'][i]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
