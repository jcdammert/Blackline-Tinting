import { MetadataRoute } from 'next'
import { services, cities, counties } from '@/data/siteData'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://blacklinetinting.com'

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/areas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const countyPages = Object.keys(counties).map(slug => ({
    url: `${base}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityPages = cities.map(c => ({
    url: `${base}/areas/${c.countySlug}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...countyPages, ...cityPages]
}
