import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

// Generic arrow-CTA link used across cards.
export function CardLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`group/link inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition hover:text-gold-300 ${className}`}>
      {children}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:translate-x-1">
        <use href="#sprite-arrow" />
      </svg>
    </Link>
  )
}

function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <use href={`#sprite-${name}`} />
    </svg>
  )
}

// Service card → /services/:slug
export function ServiceCard({ service, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card card-hover group flex flex-col p-6 sm:p-7"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10 text-gold-400 transition-all duration-500 group-hover:shadow-glow-sm">
        <Icon name={service.icon} />
      </div>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm font-medium text-gold-500/80">{service.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{service.summary}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">{service.price}</span>
        <CardLink to={`/services/${service.slug}`}>View service</CardLink>
      </div>
    </motion.article>
  )
}

// Achievement card → /achievements/:slug
export function AchievementCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card card-hover group flex h-full flex-col p-6 sm:p-7"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          {item.year}
        </span>
      </div>
      <p className="font-display text-4xl font-bold text-gradient-gold">{item.headline.value}</p>
      <p className="mt-1 text-xs text-zinc-500">{item.headline.label}</p>
      <h3 className="mt-4 text-lg font-semibold leading-snug">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{item.summary}</p>
      <div className="mt-5 border-t border-white/[0.06] pt-4">
        <CardLink to={`/achievements/${item.slug}`}>Read the story</CardLink>
      </div>
    </motion.article>
  )
}

// Case study card → /case-studies/:slug (portfolio style with logo monogram)
export function CaseStudyCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.12 }}
      className="card card-hover group grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient font-display text-sm font-bold text-ink-950">
            {item.logoText}
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">{item.client}</p>
            <p className="text-[11px] text-zinc-500">{item.industry} · {item.region} · {item.duration}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm text-gold-500/80">{item.tagline}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {item.results.map(([val, label]) => (
            <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
              <p className="font-display text-base font-bold text-gradient-gold">{val}</p>
              <p className="text-[10px] text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 lg:flex-col lg:justify-center lg:border-l lg:border-white/[0.07] lg:pl-8">
        <div className="text-center">
          <p className="font-display text-3xl font-bold text-gradient-gold">{item.results[0][0]}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-widest text-zinc-500">{item.results[0][1]}</p>
        </div>
        <CardLink to={`/case-studies/${item.slug}`}>Full case study</CardLink>
      </div>
    </motion.article>
  )
}

// Story card → /stories/:slug
export function StoryCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card card-hover group flex h-full flex-col"
    >
      <div className={`relative flex h-36 items-end bg-gradient-to-br ${item.gradient} p-6`}>
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 font-display text-sm font-bold text-white backdrop-blur">
          {item.avatarInitials}
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">{item.tag}</p>
          <p className="font-display text-lg font-bold text-white">{item.name}</p>
          <p className="text-xs text-white/60">{item.handle}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{item.hook}</p>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4">
          {item.metrics.map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-sm font-bold text-gradient-gold">{v}</p>
              <p className="text-[10px] text-zinc-600">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <CardLink to={`/stories/${item.slug}`}>Read the journey</CardLink>
        </div>
      </div>
    </motion.article>
  )
}

// Course card → /courses/:slug
export function CourseCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      className="card card-hover group flex h-full flex-col p-6 sm:p-7"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-tik-cyan/30 bg-tik-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-tik-cyan">
          {item.level}
        </span>
        <span className="text-xs text-zinc-500">{item.duration} · {item.lessons} lessons</span>
      </div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-gold-500/80">{item.tagline}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {item.outcomes.slice(0, 3).map((o) => (
          <li key={o} className="flex items-start gap-2 text-sm text-zinc-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-gold-500"><use href="#sprite-check" /></svg>
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <p>
          <span className="font-display text-2xl font-bold text-white">{item.currency}{item.price}</span>
          <span className="ml-1 text-[11px] text-zinc-600">one-time</span>
        </p>
        <CardLink to={`/courses/${item.slug}`}>Curriculum</CardLink>
      </div>
    </motion.article>
  )
}

// Crew card → /crew/:slug
export function CrewCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  const colorMap = { gold: 'from-gold-500/40 to-gold-700/20', cyan: 'from-tik-cyan/35 to-tik-cyan/10', pink: 'from-tik-pink/35 to-tik-pink/10' }
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card card-hover group flex h-full flex-col items-center p-6 text-center"
    >
      <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${colorMap[item.color] || colorMap.gold} font-display text-2xl font-bold text-white ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105`}>
        {item.initials}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-gold-500/85">{item.role}</p>
      <p className="mt-1 text-xs text-zinc-600">{item.location}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-500">{item.bio}</p>
      <div className="mt-5 w-full border-t border-white/[0.06] pt-4">
        <CardLink to={`/crew/${item.slug}`}>Full profile</CardLink>
      </div>
    </motion.article>
  )
}

// Testimonial card → /testimonials/:slug
export function TestimonialCard({ item, index = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card card-hover flex h-full flex-col p-6 sm:p-7"
    >
      <div className="mb-4 flex items-center gap-1 text-gold-400" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><use href="#sprite-star" /></svg>
        ))}
      </div>
      <blockquote className="flex-1 text-[15px] leading-relaxed text-zinc-300">“{item.short}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] font-display text-sm font-bold text-gold-400">
          {item.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{item.name}</p>
          <p className="truncate text-xs text-zinc-500">{item.role}, {item.company}</p>
        </div>
        <span className="ml-auto">
          <CardLink to={`/testimonials/${item.slug}`} className="!text-xs">Read more</CardLink>
        </span>
      </figcaption>
    </motion.article>
  )
}

export { Icon }
