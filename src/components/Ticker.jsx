import { TICKER } from '../content/site'

// Infinite horizontal marquee (duplicated content for a seamless loop).
export default function Ticker({ items = TICKER }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-ink-950/70 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap" aria-hidden="true">
        {doubled.map(([icon, text], i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
              <use href={`#sprite-${icon}`} />
            </svg>
            {text}
            <span className="ml-7 h-1 w-1 rounded-full bg-gold-500/50" />
          </span>
        ))}
      </div>
      <span className="sr-only">Mariya Media highlights: 500M+ views, $20M+ revenue, 100+ brands scaled, 5x average ROAS.</span>
    </div>
  )
}
