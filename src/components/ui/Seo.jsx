import { useEffect } from 'react'
import { personal } from '../../data/personal'

/**
 * Sets document title and meta tags per route.
 */
export function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${personal.seo.siteName}` : personal.seo.defaultTitle
  const desc = description || personal.seo.defaultDescription
  const ogImage = `${personal.seo.siteUrl}${personal.seo.ogImage}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, value) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', ogImage)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'theme-color', '#0a0a10')
  }, [fullTitle, desc, ogImage])

  return null
}
