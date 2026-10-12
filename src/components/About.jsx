import Photo from './Photo'
import Button from './Button'
export default function About({ photo = null }) {
  return (
    <section id="about"><div className="wrap about">
      <Photo src={photo} alt="Aryam Khalid, founder" style={{ aspectRatio: '4/3', borderRadius: 'var(--r)' }} data-r />
      <div data-r style={{ '--d': '140ms' }}>
        <div className="kicker">About Us</div>
        <h2>Aryam Khalid</h2><div className="role">Founder</div>
        <p>Aryam started Mariya Media to give hosts the support she wished she had: honest coaching, fair terms and a team that answers. Today the agency guides creators from their first stream to a steady, growing income.</p>
        <div className="row"><Button href="#contact">Join the Agency</Button><Button variant="ghost" href="#contact">Book a Meeting</Button></div>
      </div>
    </div></section>
  )
}
