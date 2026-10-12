import { useState } from 'react'
import Section from './Section'
import Button from './Button'
import Icon from './Icon'

const EMAIL = 'support@mariyamedia.com'
const TOPICS = ['Join the Agency', 'Host Training', 'Coaching', 'Book a Consultation (paid)']

const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters)'
  return e
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
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
    if (Object.keys(errs).length) return
    setState('sending')
    // No backend in this static build — simulate the round-trip.
    setTimeout(() => setState('done'), 900)
  }

  const reset = () => {
    setValues({ name: '', email: '', topic: TOPICS[0], message: '' })
    setState('idle')
  }

  return (
    <Section id="contact" title="Get in Touch" kicker="Contact">
      <div className="contact">
        <div className="contact-info" data-r>
          <p className="contact-lead">
            Tell us where you are today and where you want your stream to go — we reply to every message within 24 hours.
          </p>

          <a className="info-card" href={`mailto:${EMAIL}`}>
            <span className="ico"><Icon name="mail" /></span>
            <span><b>Email us</b><small>{EMAIL}</small></span>
          </a>

          <a className="info-card" href="tel:+920000000000">
            <span className="ico"><Icon name="phone" /></span>
            <span><b>Call us</b><small>+92 000 0000000</small></span>
          </a>

          <div className="info-card">
            <span className="ico"><Icon name="calendar" /></span>
            <span>
              <b>Book a Consultation <em className="tag">PAID</em></b>
              <small>1:1 strategy session with a senior coach — $29 / 45 min</small>
            </span>
          </div>

          <Button href={`mailto:${EMAIL}?subject=Book%20a%20Consultation%20(Paid)`}>Book a Consultation <Icon name="arrow" /></Button>
        </div>

        {state === 'done' ? (
          <div className="form-card ok" role="status" data-r>
            <span className="ok-ico"><Icon name="check" /></span>
            <h3>Message sent!</h3>
            <p>Thanks {values.name.split(' ')[0]} — we'll get back to you at <b>{values.email}</b> within 24 hours.</p>
            <Button variant="ghost" onClick={reset}>Send another message</Button>
          </div>
        ) : (
          <form className="form-card" onSubmit={submit} noValidate data-r>
            <div className="field">
              <label htmlFor="c-name">Full name</label>
              <input id="c-name" type="text" autoComplete="name" placeholder="Alex Rivera"
                value={values.name} onChange={set('name')} aria-invalid={!!errors.name} />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" autoComplete="email" placeholder="you@example.com"
                value={values.email} onChange={set('email')} aria-invalid={!!errors.email} />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="c-topic">I'm interested in</label>
              <select id="c-topic" value={values.topic} onChange={set('topic')}>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" rows="4" placeholder="Tell us about your goals…"
                value={values.message} onChange={set('message')} aria-invalid={!!errors.message} />
              {errors.message && <span className="err">{errors.message}</span>}
            </div>

            <button className="btn submit" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </Section>
  )
}
