export default function Section({ id, title, kicker, children }) {
  return (
    <section id={id}>
      <div className="wrap">
        {kicker && <div className="kicker" data-r>{kicker}</div>}
        {title && <h2 data-r>{title}</h2>}
        {children}
      </div>
    </section>
  )
}
