export default function Icon({ name }) {
  return <svg className="ic" aria-hidden="true"><use href={`#${name}`} /></svg>
}
