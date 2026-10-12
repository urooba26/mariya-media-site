import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NAV, NAV_SECONDARY } from '../content/site'
import { PageFade } from '../lib/motion'

const QUICK = [
  ...NAV.filter((n) => n.to !== '/').map((n) => [n.to, n.label]),
  ...NAV_SECONDARY.map((n) => [n.to, n.label]),
]

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found — Mariya Media Ltd`
  }, [])

  return (
    <PageFade>
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-500/[0.08] blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-tik-pink/[0.06] blur-[110px]" aria-hidden="true" />

        <div className="container-x relative py-28 text-center">
          <p
            className="font-display text-[22vw] font-extrabold leading-none tracking-tighter text-gradient-gold opacity-90 sm:text-[10rem] md:text-[14rem]"
            aria-hidden="true"
          >
            404
          </p>
          <span className="eyebrow -mt-4 inline-flex md:-mt-6">Error · Page not found</span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            This page slipped off the For You page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            The link is broken or the page has moved. Nothing to see here — but everything we have built is one tap away.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              Back to home
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-arrow" /></svg>
            </Link>
            <Link to="/contact" className="btn-ghost">Talk to us</Link>
          </div>

          <nav aria-label="Popular pages" className="mx-auto mt-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">Popular destinations</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {QUICK.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </PageFade>
  )
}
