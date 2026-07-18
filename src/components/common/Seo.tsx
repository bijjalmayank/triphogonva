import { useEffect } from "react"

interface SeoProps {
  title: string
  description: string
  image?: string
  url?: string
  jsonLd?: Record<string, unknown>
  noindex?: boolean
}

const SITE_NAME = "Triphogonva"
const DEFAULT_IMAGE = "/og-cover.jpg"
const SITE_URL = "https://triphogonva.com"

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  jsonLd,
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`

    document.title = fullTitle

    setMetaTag("name", "description", description)
    setMetaTag("property", "og:title", fullTitle)
    setMetaTag("property", "og:description", description)
    setMetaTag("property", "og:image", imageUrl)
    setMetaTag("property", "og:url", canonicalUrl)
    setMetaTag("property", "og:type", "website")
    setMetaTag("property", "og:site_name", SITE_NAME)
    setMetaTag("name", "twitter:card", "summary_large_image")
    setMetaTag("name", "twitter:title", fullTitle)
    setMetaTag("name", "twitter:description", description)
    setMetaTag("name", "twitter:image", imageUrl)
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow")

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.setAttribute("rel", "canonical")
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute("href", canonicalUrl)

    let jsonLdScript: HTMLScriptElement | null = null
    if (jsonLd) {
      jsonLdScript = document.createElement("script")
      jsonLdScript.type = "application/ld+json"
      jsonLdScript.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(jsonLdScript)
    }

    return () => {
      jsonLdScript?.remove()
    }
  }, [title, description, image, url, jsonLd, noindex])

  return null
}
