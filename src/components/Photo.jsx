// Image slot: pass `src` for a real photo, otherwise a silhouette placeholder renders.
export default function Photo({ src, alt = 'Photo', className = '', style, ...rest }) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={alt} style={style} {...rest}>
      {src ? <img src={src} alt="" loading="lazy" /> : <svg style={{ color: '#2a1c0c' }}><use href="#person" /></svg>}
    </div>
  )
}
