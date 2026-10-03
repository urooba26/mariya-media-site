import Icon from './Icon'

export default function FeatureCard({ icon, title, text, inline, index = 0 }) {
  const num = <span className="num">{String(index + 1).padStart(2, '0')}</span>
  const ico = <div className="ico"><Icon name={icon} /></div>
  const style = { '--d': `${(index % 4) * 90}ms` }
  return inline
    ? <article className="card exp" data-r style={style}>{num}{ico}<div><h3>{title}</h3><p>{text}</p></div></article>
    : <article className="card" data-r style={style}>{num}{ico}<h3>{title}</h3><p>{text}</p></article>
}
