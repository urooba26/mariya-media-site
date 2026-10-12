import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE = 'Mariya Media Ltd'

// Route-driven document title + meta description. Pages pass strings via <title> document head
// or we fall back to sensible defaults per path.
const TITLES = {
  '/': `${BASE} — Premium TikTok Agency | 500M+ Views, $20M+ Revenue`,
  '/about': `About ${BASE} — The Team Behind 500M Views`,
  '/contact': `Contact ${BASE} — Start Your TikTok Growth`,
  '/services': `Services — ${BASE}`,
  '/achievements': `Achievements — ${BASE}`,
  '/case-studies': `Case Studies — ${BASE}`,
  '/stories': `Creator Stories — ${BASE}`,
  '/courses': `Courses & Academy — ${BASE}`,
  '/crew': `Our Crew — ${BASE}`,
  '/testimonials': `Testimonials — ${BASE}`,
}

const DESCRIPTIONS = {
  '/': 'Mariya Media Ltd is a full-service TikTok agency: account growth, content strategy, live-stream operations, host training and brand scaling. 500M+ views, $20M+ revenue, 100+ brands scaled.',
  '/services': 'Seven TikTok growth services: account growth, content strategy, LIVE operations, identity verification, restriction help, host training and hosting assistance.',
  '/case-studies': 'Real client results: TikTok Shop launches, app install campaigns and brand growth programs with before-and-after performance data.',
}

export function usePageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    // find the deepest matching static prefix for detail pages
    let title = TITLES[pathname]
    if (!title) {
      const seg = pathname.split('/').filter(Boolean)
      if (seg.length >= 2) {
        const section = `/${seg[0]}`
        const pretty = seg[0].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        title = `${pretty.slice(0, -1) || pretty} — ${BASE}`
        if (seg[0] === 'services') title = `Service detail — ${BASE}`
        else title = `${pretty} — ${BASE}`
      } else title = `${BASE} — TikTok Agency`
    }
    document.title = title
    const set = (name, val) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', val)
    }
    const desc = DESCRIPTIONS[pathname] || DESCRIPTIONS['/' + (pathname.split('/').filter(Boolean)[0] || '')] || DESCRIPTIONS['/']
    set('description', desc)
    set('og:title', title)
    set('og:description', desc)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
}
