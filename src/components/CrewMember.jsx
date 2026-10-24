import Reveal from './Reveal.jsx'
import Photo from './Photo.jsx'
import Button from './Button.jsx'
import { BrandIcon } from './Brand.jsx'
import { InstagramIcon } from './Brand.jsx'
import { MapPin, Quote } from 'lucide-react'
import { whatsappLink } from '../config.js'

// One crew member: large photo on one side, bio/info on the other.
// `index` alternates the layout (zig-zag).
export default function CrewMember({ member, index = 0 }) {
  const flip = index % 2 === 1
  const links = member.links || {}

  return (
    <Reveal className={`member ${flip ? 'member--flip' : ''}`} variant={flip ? 'slideRight' : 'slideLeft'} amount={0.15}>
      <div className="member__media">
        <div className="member__frame">
          <Photo src={member.photo} alt={member.name} />
        </div>
        <span className="member__badge">{member.group}</span>
      </div>

      <div className="member__info">
        <span className="member__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="member__role">{member.role}</span>
        <h3>{member.name}</h3>
        <p className="member__intro">{member.intro}</p>

        {member.quote && (
          <blockquote className="member__quote">
            <Quote size={0} aria-hidden="true" style={{ display: 'none' }} />
            {member.quote}
          </blockquote>
        )}

        {member.location && (
          <p className="member__meta">
            <span><MapPin size={14} aria-hidden="true" /> {member.location}</span>
          </p>
        )}

        <div className="member__links">
          {links.tiktok && (
            <Button href={links.tiktok} size="sm" className="btn--tiktok" aria-label={`${member.name} on TikTok`}>
              <BrandIcon id="tiktok" size={16} /> TikTok Profile
            </Button>
          )}
          {links.instagram && (
            <Button href={links.instagram} variant="ghost" size="sm" icon={false} aria-label={`${member.name} on Instagram`}>
              <InstagramIcon size={16} /> Instagram
            </Button>
          )}
          {links.whatsapp && (
            <Button href={links.whatsapp || whatsappLink()} variant="ghost" size="sm" icon={false} aria-label={`WhatsApp ${member.name}`}>
              <BrandIcon id="whatsapp" size={16} /> WhatsApp
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  )
}
