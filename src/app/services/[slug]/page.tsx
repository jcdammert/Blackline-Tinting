import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/siteData'
import { ServiceAreasGrid } from '@/components/Shared'
import ReviewsCarousel from '@/components/ReviewsCarousel'

const BASE = 'https://blacklinetinting.com'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) return {}
  return { title: service.metaTitle, description: service.metaDesc }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${BASE}/services/${slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${BASE}/services/${slug}`,
    provider: {
      '@type': 'AutoRepair',
      '@id': `${BASE}/#business`,
      name: 'BlackLine Tinting',
      telephone: '+19547372785',
      url: BASE,
    },
    areaServed: [
      { '@type': 'County', name: 'Broward County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Miami-Dade County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Palm Beach County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="service-hero page-hero">
        <div className="container">
          <h1>{service.name}</h1>
          <p className="tagline">{service.tagline}</p>
          <p>{service.description}</p>
          <Link href="/quote" className="btn btn-primary">GET QUOTE →</Link>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2>{service.whyHeading}</h2>
          <p>{service.whyText}</p>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <div className="benefits-list">
            {service.benefits.map((b, i) => (
              <div className="benefit-item" key={i}>
                <span className="benefit-check">✓</span>
                <span className="benefit-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {slug !== 'paint-protection-film' && slug !== 'ceramic-coating' && (
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Book Online</h3>
              <p>Choose your vehicle and preferred tint package. We&apos;ll confirm your appointment within hours.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Come to You</h3>
              <p>We come to your home or workplace and tint your car on-site. Most jobs are completed in 1-3 hours.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Drive Away Looking Sharp</h3>
              <p>Pick up your freshly tinted ride and enjoy cooler, UV-protected driving immediately.</p>
            </div>
          </div>
        </div>
      </section>
      )}

      <ReviewsCarousel />

      <section className="cta-section">
        <div className="container">
          <h2>{service.ctaHeading}</h2>
          <p>{service.ctaText}</p>
          <Link href="/quote" className="btn btn-primary">GET QUOTE →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">We Offer This Service In These Cities</h2>
          <ServiceAreasGrid />
        </div>
      </section>
    </>
  )
}
