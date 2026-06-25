import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection, ServicesCards, ServiceAreasGrid } from '@/components/Shared'
import GallerySlideshow from '@/components/GallerySlideshow'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'BlackLine Tinting | Professional Window Tinting in South Florida',
  description: 'Premium auto window tinting in South Florida. Ceramic & carbon tint, PPF, ceramic coating. Lifetime warranty. Serving Broward, Miami-Dade & Palm Beach counties.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://blacklinetinting.com/#business',
  name: 'BlackLine Tinting',
  description: 'BlackLine Tinting is a mobile window tinting company serving South Florida. We install ceramic and carbon window tint, paint protection film, and ceramic coating at your location — home, work, or wherever your vehicle is parked. Lifetime warranty on every job.',
  url: 'https://blacklinetinting.com',
  telephone: '+19547372785',
  image: 'https://blacklinetinting.com/blackline-logo.png',
  logo: {
    '@type': 'ImageObject',
    url: 'https://blacklinetinting.com/blackline-logo.png',
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Visa, Mastercard, American Express, Cash',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1445 Sandpiper Cir',
    addressLocality: 'Weston',
    addressRegion: 'FL',
    postalCode: '33327',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Broward County',
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'County',
      name: 'Miami-Dade County',
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'County',
      name: 'Palm Beach County',
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
  ],
  knowsAbout: [
    'Ceramic Window Tinting',
    'Carbon Window Tinting',
    'Paint Protection Film',
    'Windshield Tinting',
    'Ceramic Coating',
    'SunTek Window Film',
    'Florida Tint Laws',
    'Mobile Window Tinting',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Window Tinting and Paint Protection Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ceramic Window Tinting',
          description: 'Premium SunTek ceramic window tint using nano-ceramic technology. Blocks UV rays and significantly reduces heat with no interference with phone, GPS, or keyless entry. Lifetime warranty.',
          url: 'https://blacklinetinting.com/services/ceramic-window-tint',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Carbon Window Tinting',
          description: 'Carbon window tint with excellent heat rejection, a matte finish, and no signal interference. 1-year warranty.',
          url: 'https://blacklinetinting.com/services/carbon-window-tint',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paint Protection Film',
          description: 'Invisible urethane film that protects vehicle paint from rock chips, scratches, and road debris. Self-healing technology.',
          url: 'https://blacklinetinting.com/services/paint-protection-film',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Windshield Tinting',
          description: 'Ceramic windshield film that blocks heat and UV without reducing visibility.',
          url: 'https://blacklinetinting.com/services/windshield-tint',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ceramic Coating',
          description: 'Professional ceramic coating for long-lasting hydrophobic paint protection and a deep glossy finish.',
          url: 'https://blacklinetinting.com/services/ceramic-coating',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Vehicle Tinting',
          description: 'Fleet and commercial vehicle window tinting with consistent quality and bulk pricing.',
          url: 'https://blacklinetinting.com/services/commercial-vehicle-tinting',
        },
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <section className="page-hero" style={{ padding: '160px 0 100px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Premium Window Tinting in <span className="text-blue">South Florida</span></h1>
          <p>Ceramic & carbon window tint, paint protection film, and ceramic coating. Same-week appointments. Lifetime warranty on every installation.</p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/quote" className="btn btn-primary">GET FREE QUOTE →</Link>
            <Link href="/services" className="btn" style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}>VIEW SERVICES</Link>
          </div>
        </div>
      </section>

      <GallerySlideshow />

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <ServicesCards />
        </div>
      </section>

      <ReviewsCarousel />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose BlackLine</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Premium Materials Only</h3>
              <p>We exclusively use top-tier ceramic and carbon films. No cheap dyed tints, no shortcuts.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Lifetime Warranty</h3>
              <p>Every installation is backed by our lifetime warranty. If it bubbles, peels, or fades, we fix it free.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Same-Week Appointments</h3>
              <p>Most installations completed in 2-3 hours with same-week scheduling available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Service Areas</h2>
          <ServiceAreasGrid />
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
