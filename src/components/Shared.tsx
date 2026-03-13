import Link from 'next/link'

export function CTASection({ heading = "Ready To Get Your Car Tinted?", text = "Same-week appointments available. Lifetime warranty on every installation. Get your free, no-obligation quote today." }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link href="/quote" className="btn btn-primary">GET QUOTE →</Link>
      </div>
    </section>
  )
}

export function ServiceAreasGrid() {
  return (
    <div className="areas-grid">
      <div className="area-column">
        <h3><Link href="/areas/broward-county" className="text-blue">Broward County</Link></h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <Link href="/areas/broward-county/weston">Weston, FL</Link>, <Link href="/areas/broward-county/davie">Davie, FL</Link>, <Link href="/areas/broward-county/plantation">Plantation, FL</Link>, <Link href="/areas/broward-county/sunrise">Sunrise, FL</Link>, <Link href="/areas/broward-county/pembroke-pines">Pembroke Pines, FL</Link>, <Link href="/areas/broward-county/miramar">Miramar, FL</Link>, <Link href="/areas/broward-county/southwest-ranches">Southwest Ranches, FL</Link>, <Link href="/areas/broward-county/cooper-city">Cooper City, FL</Link>, <Link href="/areas/broward-county/coral-springs">Coral Springs, FL</Link>, <Link href="/areas/broward-county/parkland">Parkland, FL</Link>, <Link href="/areas/broward-county/tamarac">Tamarac, FL</Link>, <Link href="/areas/broward-county/lauderhill">Lauderhill, FL</Link>, <Link href="/areas/broward-county/fort-lauderdale">Fort Lauderdale, FL</Link>, <Link href="/areas/broward-county/hollywood">Hollywood, FL</Link>, <Link href="/areas/broward-county/coconut-creek">Coconut Creek, FL</Link>
        </p>
      </div>
      <div className="area-column">
        <h3><Link href="/areas/miami-dade-county" className="text-blue">Miami-Dade County</Link></h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <Link href="/areas/miami-dade-county/miami">Miami, FL</Link>, <Link href="/areas/miami-dade-county/miami-lakes">Miami Lakes, FL</Link>, <Link href="/areas/miami-dade-county/miami-gardens">Miami Gardens, FL</Link>, <Link href="/areas/miami-dade-county/hialeah">Hialeah, FL</Link>, <Link href="/areas/miami-dade-county/doral">Doral, FL</Link>, <Link href="/areas/miami-dade-county/homestead">Homestead, FL</Link>, <Link href="/areas/miami-dade-county/kendall">Kendall, FL</Link>
        </p>
      </div>
      <div className="area-column">
        <h3><Link href="/areas/palm-beach-county" className="text-blue">Palm Beach County</Link></h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <Link href="/areas/palm-beach-county/boca-raton">Boca Raton, FL</Link>, <Link href="/areas/palm-beach-county/delray-beach">Delray Beach, FL</Link>, <Link href="/areas/palm-beach-county/boynton-beach">Boynton Beach, FL</Link>, <Link href="/areas/palm-beach-county/wellington">Wellington, FL</Link>, <Link href="/areas/palm-beach-county/west-palm-beach">West Palm Beach, FL</Link>
        </p>
      </div>
    </div>
  )
}

export function ServicesCards() {
  const services = [
    { name: 'Ceramic Window Tint', slug: 'ceramic-window-tint', desc: 'Best Seller — Ultimate Heat Rejection & UV Protection' },
    { name: 'Carbon Window Tint', slug: 'carbon-window-tint', desc: 'Premium Protection at a Better Price' },
    { name: 'Paint Protection Film (PPF)', slug: 'paint-protection-film', desc: 'Invisible Armor for Your Paint' },
    { name: 'Windshield Tint', slug: 'windshield-tint', desc: 'Reduce Glare & Heat Through Your Front Glass' },
    { name: 'Ceramic Coating', slug: 'ceramic-coating', desc: 'Long-Lasting Shine & Paint Protection' },
    { name: 'Commercial Vehicle Tinting', slug: 'commercial-vehicle-tinting', desc: 'Professional Tinting for Your Business Fleet' },
  ]
  return (
    <div className="cards-grid">
      {services.map(s => (
        <Link href={`/services/${s.slug}`} className="card" key={s.slug}>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
          <span className="card-link">Learn More →</span>
        </Link>
      ))}
    </div>
  )
}
