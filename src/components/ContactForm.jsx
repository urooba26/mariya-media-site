import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { GOOGLE_APPS_SCRIPT_URL, INTEREST_OPTIONS, CONTACT_EMAIL } from '../config.js'

const EMPTY = { name: '', tiktok: '', email: '', phone: '', interest: '', message: '', company: '' }

// Client-side validation. Returns an object of field → error message.
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (v.tiktok.trim().length < 2) e.tiktok = 'Please enter your TikTok ID.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'That phone number doesn’t look right.'
  if (!v.interest) e.interest = 'Please choose what you’re interested in.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

// Contact form: validate → POST to Google Apps Script → animated success/error.
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')
  const formRef = useRef(null)
  const reduced = useReducedMotion()

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((err) => (err[field] ? { ...err, [field]: '' } : err))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return

    const found = validate(values)
    setErrors(found)
    setServerError('')
    if (Object.keys(found).length > 0) {
      // focus the first invalid field
      const first = Object.keys(found)[0]
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    // Honeypot: bots fill this hidden field — pretend success, send nothing.
    if (values.company.trim()) {
      setStatus('success')
      return
    }

    setStatus('loading')
    try {
      if (GOOGLE_APPS_SCRIPT_URL) {
        // text/plain avoids the CORS preflight block on Apps Script web apps.
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(values),
          mode: 'no-cors', // Apps Script responds opaque; we cannot read status
        })
      } else {
        // Not configured yet — simulate the round-trip so the flow is previewable.
        await new Promise((r) => setTimeout(r, 1100))
        console.info('[ContactForm] GOOGLE_APPS_SCRIPT_URL is empty — submission simulated. See README to connect the sheet.')
      }
      setStatus('success')
      setValues(EMPTY)
      formRef.current?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
      setServerError('Something went wrong while sending your message. Please try again, or reach us on WhatsApp / email instead.')
    }
  }

  const field = (name, error) => `form-field ${errors[name] ? 'invalid' : ''}`
  const ErrorMsg = ({ name }) =>
    errors[name] ? <span className="form-error" id={`${name}-err`}><AlertCircle /> {errors[name]}</span> : null

  if (status === 'success') {
    return (
      <motion.div
        className="form-success"
        initial={reduced ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        role="status"
      >
        <div className="form-success__icon"><CheckCircle2 size={40} /></div>
        <h3>Message sent — JazakAllah!</h3>
        <p>
          Thank you for reaching out. Our team will get back to you soon. In the meantime,
          you can message us directly on WhatsApp for a faster reply.
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      {/* Honeypot — hidden from humans, irresistible to bots */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company" name="company" type="text" tabIndex={-1} autoComplete="off"
          value={values.company} onChange={set('company')}
        />
      </div>

      <div className="form-grid">
        <div className={field('name')}>
          <label htmlFor="name">Your name <i>*</i></label>
          <input
            id="name" name="name" type="text" placeholder="e.g. Ayesha Khan"
            value={values.name} onChange={set('name')}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
          />
          <ErrorMsg name="name" />
        </div>

        <div className={field('tiktok')}>
          <label htmlFor="tiktok">TikTok ID <i>*</i></label>
          <input
            id="tiktok" name="tiktok" type="text" placeholder="@yourusername"
            value={values.tiktok} onChange={set('tiktok')}
            aria-invalid={!!errors.tiktok} aria-describedby={errors.tiktok ? 'tiktok-err' : undefined}
          />
          <ErrorMsg name="tiktok" />
        </div>

        <div className={field('email')}>
          <label htmlFor="email">Email address <i>*</i></label>
          <input
            id="email" name="email" type="email" placeholder="you@example.com"
            value={values.email} onChange={set('email')}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined}
          />
          <ErrorMsg name="email" />
        </div>

        <div className={field('phone')}>
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone" name="phone" type="tel" placeholder="+92 300 0000000"
            value={values.phone} onChange={set('phone')}
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined}
          />
          <ErrorMsg name="phone" />
        </div>

        <div className={`form-field--full ${field('interest')}`}>
          <label htmlFor="interest">I’m interested in <i>*</i></label>
          <select
            id="interest" name="interest"
            value={values.interest} onChange={set('interest')}
            aria-invalid={!!errors.interest} aria-describedby={errors.interest ? 'interest-err' : undefined}
          >
            <option value="" disabled>Choose an option…</option>
            {INTEREST_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <ErrorMsg name="interest" />
        </div>

        <div className={`form-field--full ${field('message')}`}>
          <label htmlFor="message">Your message <i>*</i></label>
          <textarea
            id="message" name="message"
            placeholder="Tell us a little about yourself, your experience and what you’re looking for…"
            value={values.message} onChange={set('message')}
            aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined}
          />
          <ErrorMsg name="message" />
        </div>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            className="form-status form-status--error"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="alert"
          >
            <AlertCircle size={18} aria-hidden="true" />
            <span>{serverError} <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'underline' }}>{CONTACT_EMAIL}</a></span>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ marginTop: 24 }}>
        <button type="submit" className="btn btn--lg btn--block" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <><span className="spinner" aria-hidden="true" /> Sending…</>
          ) : (
            <><Send size={17} aria-hidden="true" /> Send my message</>
          )}
        </button>
        <p style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 14, textAlign: 'center' }}>
          We reply within 1–2 working days. Your details are only used to contact you back.
        </p>
      </div>
    </form>
  )
}
