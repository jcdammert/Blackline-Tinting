import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection, ServicesCards, ServiceAreasGrid } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'BlackLine Tinting | Professional Window Tinting in South Florida',
  description: 'Premium auto window tinting in South Florida. Ceramic & carbon tint, PPF, ceramic coating. Lifetime warranty. Serving Broward, Miami-Dade & Palm Beach counties.',
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

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Browse some of our recent installations — every job gets premium materials, precision, and a lifetime warranty.
          </p>
          <div className="gallery-grid-home">
            {[
              { label: 'Ceramic Tint', desc: 'Full ceramic tint installation' },
              { label: 'Carbon Tint', desc: 'Premium carbon film install' },
              { label: 'Windshield Tint', desc: 'Clear ceramic windshield film' },
              { label: 'Full Vehicle', desc: 'Complete vehicle tint package' },
              { label: 'PPF Install', desc: 'Paint protection film application' },
              { label: 'Ceramic Tint', desc: 'Side window ceramic tint' },
            ].map((item, i) => (
              <div className="gallery-item" key={i}>
                <span className="gallery-label">{item.label}</span>
                {item.desc}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/gallery" className="btn btn-primary">VIEW FULL GALLERY →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <ServicesCards />
        </div>
      </section>

      <section className="section section-alt">
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">Service Areas</h2>
          <ServiceAreasGrid />
        </div>
      </section>

      <CTASection />
    </>
  )
}
