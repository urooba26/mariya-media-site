import { Helmet } from 'react-helmet-async'
import { SITE } from '../config.js'

// Per-page SEO + Open Graph tags.
export default function Seo({ title, description, path = '/' }) {
  const full = title ? `${title} — ${SITE.name}` : SITE.name
  const desc = description || SITE.tagline
  const url = `${SITE.url.replace(/\/$/, '')}${path}`
  const image = `${SITE.url.replace(/\/$/, '')}/${SITE.logo}`
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
