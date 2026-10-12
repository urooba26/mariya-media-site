export default function Button({ href, variant, className = '', children, ...rest }) {
  const cls = ['btn', variant, className].filter(Boolean).join(' ')
  return href ? <a className={cls} href={href} {...rest}>{children}</a> : <button className={cls} {...rest}>{children}</button>
}
