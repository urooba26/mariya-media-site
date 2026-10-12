import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero, { SectionHead } from '../components/PageHero'
import { CONTACT, SOCIALS } from '../content/site'
import { SERVICES } from '../content/services'
import { Reveal, PageFade } from '../lib/motion'

const WA_NUMBER = (CONTACT.whatsapp.match(/wa\.me\/(\d+)/) || [])[1] || '447700300145'

const TOPICS = [
  ...SERVICES.map((s) => s.title),
  'Brand partnership',
  'Careers at Mariya Media',
  'Press & media',
]

const BUDGETS = [
  'Under £5k / month',
  '£5k – £15k / month',
  '£15k – £50k / month',
  '£50k+ / month',
  'Not sure yet',
]

const STEPS = [
  ['01', 'We reply within 24 hours', 'A senior strategist — not a bot, not a junior — reads your message and replies with honest first thoughts on your account.'],
  ['02', 'Free 20-minute discovery call', 'We audit your current numbers live, agree on what realistic 90-day growth looks like, and tell you plainly if we are not the right fit.'],
  ['03', 'A plan with a price on it', 'You get a scoped proposal: deliverables, timeline, reporting cadence and fee. No retainers you cannot exit after 60 days.'],
]

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-gold-500/50 focus:bg-white/[0.06]'
const labelCls = 'mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400'

const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters)'
  return e
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    topic: TOPICS[0],
    budget: BUDGETS[0],
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | done

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`c-${first}`)?.focus()
      return
    }
    setState('sending')
    // Static build with no backend — simulate the round trip, then offer real channels.
    setTimeout(() => setState('done'), 900)
  }

  const reset = () => {
    setValues({ name: '', email: '', company: '', topic: TOPICS[0], budget: BUDGETS[0], message: '' })
    setState('idle')
  }

  const summary = `Hi Mariya Media — I'm ${values.name || 'interested'} (${values.company || 'no company yet'}) enquiring about: ${values.topic}. Budget: ${values.budget}. ${values.message}`
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(summary)}`
  const mailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Enquiry — ${values.topic}`)}&body=${encodeURIComponent(`${summary}\n\nReply to: ${values.email}`)}`

  return (
    <PageFade>
      <PageHero
        eyebrow="Contact"
        title="Let’s Make Your Brand Impossible To Scroll Past"
        lede="Tell us where your account is today and where you want it in 90 days. Every message gets a reply from a senior strategist within 24 hours — including the ones we turn down."
      />

      {/* Form + info */}
      <section className="section-pad">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
          {/* Form */}
          <Reveal>
            {state === 'done' ? (
              <div
                role="status"
                className="card flex flex-col items-start p-8 text-center sm:p-10 lg:items-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-ink-950 shadow-glow">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#sprite-check" />
                  </svg>
                </span>
                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Thanks, {values.name.split(' ')[0]} — it’s on our radar.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                  We’ve got your enquiry about <b className="text-gold-400">{values.topic}</b>. Expect a reply at{' '}
                  <b className="text-white">{values.email}</b> within 24 hours. Need a faster answer right now?
                </p>
                <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a href={waLink} target="_blank" rel="noreferrer" className="btn-gold w-full sm:w-auto">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><use href="#sprite-whatsapp" /></svg>
                    Continue on WhatsApp
                  </a>
                  <a href={mailLink} className="btn-ghost w-full sm:w-auto">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-mail" /></svg>
                    Send by email too
                  </a>
                  <button type="button" onClick={reset} className="btn-ghost w-full sm:w-auto">
                    Send another
                  </button>
                </div>
                <Link to="/case-studies" className="mt-6 text-sm font-semibold text-gold-400 transition hover:text-gold-300">
                  While you wait, see what we did for others →
                </Link>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="card p-6 sm:p-8">
                <span className="eyebrow">Start a project</span>
                <h2 className="mt-5 text-2xl font-bold">Tell us about your goal</h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={labelCls}>Full name *</label>
                    <input id="c-name" type="text" autoComplete="name" placeholder="Alex Rivera"
                      className={inputCls} value={values.name} onChange={set('name')}
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
                    {errors.name && <span id="e-name" className="mt-1.5 block text-xs text-tik-pink">{errors.name}</span>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className={labelCls}>Email *</label>
                    <input id="c-email" type="email" autoComplete="email" placeholder="you@brand.com"
                      className={inputCls} value={values.email} onChange={set('email')}
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
                    {errors.email && <span id="e-email" className="mt-1.5 block text-xs text-tik-pink">{errors.email}</span>}
                  </div>
                  <div>
                    <label htmlFor="c-company" className={labelCls}>Brand / handle</label>
                    <input id="c-company" type="text" autoComplete="organization" placeholder="@yourbrand"
                      className={inputCls} value={values.company} onChange={set('company')} />
                  </div>
                  <div>
                    <label htmlFor="c-topic" className={labelCls}>I’m interested in</label>
                    <select id="c-topic" className={`${inputCls} [&>option]:bg-ink-800`} value={values.topic} onChange={set('topic')}>
                      {TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-budget" className={labelCls}>Monthly budget</label>
                    <select id="c-budget" className={`${inputCls} [&>option]:bg-ink-800`} value={values.budget} onChange={set('budget')}>
                      {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className={labelCls}>Message *</label>
                    <textarea id="c-message" rows="5" className={inputCls}
                      placeholder="Where is your account now, and what does a win look like in 90 days?"
                      value={values.message} onChange={set('message')}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
                    {errors.message && <span id="e-message" className="mt-1.5 block text-xs text-tik-pink">{errors.message}</span>}
                  </div>
                </div>

                <button type="submit" disabled={state === 'sending'} className="btn-gold mt-7 w-full !py-4">
                  {state === 'sending' ? 'Sending…' : 'Send message'}
                  {state !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-arrow" /></svg>
                  )}
                </button>
                <p className="mt-4 text-center text-xs text-zinc-600">
                  No newsletters, no spam. Or skip the form —{' '}
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="text-gold-500 transition hover:text-gold-400">chat on WhatsApp</a>.
                </p>
              </form>
            )}
          </Reveal>

          {/* Info rail */}
          <div className="space-y-5">
            <Reveal delay={0.08}>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="card card-hover group flex items-start gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><use href="#sprite-whatsapp" /></svg>
                </span>
                <span>
                  <b className="block text-sm font-semibold text-white">Chat on WhatsApp</b>
                  <small className="mt-1 block text-sm text-zinc-500">Fastest channel — usually replies in under 2 hours, Mon–Fri.</small>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <a href={`mailto:${CONTACT.email}`} className="card card-hover group flex items-start gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-mail" /></svg>
                </span>
                <span>
                  <b className="block text-sm font-semibold text-white">Email us</b>
                  <small className="mt-1 block text-sm text-zinc-500">{CONTACT.email}</small>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="card card-hover group flex items-start gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tik-cyan/10 text-tik-cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-phone" /></svg>
                </span>
                <span>
                  <b className="block text-sm font-semibold text-white">Call the studio</b>
                  <small className="mt-1 block text-sm text-zinc-500">{CONTACT.phone} · {CONTACT.hours}</small>
                </span>
              </a>
            </Reveal>

            {/* Paid consultation */}
            <Reveal delay={0.26}>
              <div className="card relative overflow-hidden p-6">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold-500/15 blur-[60px]" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-ink-950">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-calendar" /></svg>
                  </span>
                  <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400">Paid</span>
                </div>
                <h3 className="relative mt-4 text-lg font-semibold">1:1 Strategy Consultation</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-500">
                  45 minutes with a senior strategist: live audit of your account, a 90-day growth roadmap and answers to
                  whatever is blocking you. <b className="text-white">£250</b> — credited toward your first month if you sign.
                </p>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Book a 1:1 Strategy Consultation (£250)')}`}
                  className="btn-gold relative mt-5 w-full"
                >
                  Book a consultation
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-arrow" /></svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noreferrer"
                className="card card-hover flex items-start gap-4 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tik-pink/10 text-tik-pink">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#sprite-target" /></svg>
                </span>
                <span>
                  <b className="block text-sm font-semibold text-white">London HQ</b>
                  <small className="mt-1 block text-sm text-zinc-500">{CONTACT.address}</small>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="card flex items-center justify-between gap-4 p-6">
                <span className="text-sm text-zinc-400">Follow the work</span>
                <div className="flex gap-2">
                  {SOCIALS.map(([icon, label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-gold-500/50 hover:text-gold-400"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <use href={`#sprite-${icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <SectionHead
            eyebrow="What happens next"
            title="Three steps, zero guesswork"
            action={<Link to="/services" className="btn-ghost">Browse services</Link>}
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {STEPS.map(([num, title, desc], i) => (
              <Reveal key={num} delay={i * 0.1}>
                <li className="card h-full p-6 sm:p-7">
                  <span className="font-display text-sm font-bold text-gold-500">{num}</span>
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </PageFade>
  )
}
