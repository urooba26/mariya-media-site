export default function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Mariya Media Ltd home">
      <span className="mark" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" /></span>
      <span>MARIYA<small>MEDIA LTD</small></span>
    </a>
  )
}
