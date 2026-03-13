import Link from 'next/link'
import Image from 'next/image'

const browardCities = [
  { name: 'Weston', slug: 'weston' }, { name: 'Davie', slug: 'davie' },
  { name: 'Plantation', slug: 'plantation' }, { name: 'Sunrise', slug: 'sunrise' },
  { name: 'Pembroke Pines', slug: 'pembroke-pines' }, { name: 'Miramar', slug: 'miramar' },
  { name: 'Southwest Ranches', slug: 'southwest-ranches' }, { name: 'Cooper City', slug: 'cooper-city' },
  { name: 'Coral Springs', slug: 'coral-springs' }, { name: 'Parkland', slug: 'parkland' },
  { name: 'Tamarac', slug: 'tamarac' }, { name: 'Lauderhill', slug: 'lauderhill' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale' }, { name: 'Hollywood', slug: 'hollywood' },
  { name: 'Coconut Creek', slug: 'coconut-creek' },
]

const miamiCities = [
  { name: 'Miami', slug: 'miami' }, { name: 'Miami Lakes', slug: 'miami-lakes' },
  { name: 'Miami Gardens', slug: 'miami-gardens' }, { name: 'Hialeah', slug: 'hialeah' },
  { name: 'Doral', slug: 'doral' }, { name: 'Homestead', slug: 'homestead' },
  { name: 'Kendall', slug: 'kendall' },
]

const palmBeachCities = [
  { name: 'Boca Raton', slug: 'boca-raton' }, { name: 'Delray Beach', slug: 'delray-beach' },
  { name: 'Boynton Beach', slug: 'boynton-beach' }, { name: 'Wellington', slug: 'wellington' },
  { name: 'West Palm Beach', slug: 'west-palm-beach' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image src="/blackline-logo.png" alt="BlackLine Tinting" width={160} height={42} />
            </Link>
            <p>Professional auto window tinting serving South Florida. Lifetime warranty on every installation.</p>
            <div className="footer-contact">
              <p>📞 (954) 555-TINT</p>
              <p>✉ info@blacklinetinting.com</p>
              <p>📍 Broward County, FL</p>
            </div>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/quote">Get a Quote</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/services/ceramic-window-tint">Ceramic Window Tint</Link></li>
              <li><Link href="/services/carbon-window-tint">Carbon Window Tint</Link></li>
              <li><Link href="/services/paint-protection-film">Paint Protection Film (PPF)</Link></li>
              <li><Link href="/services/windshield-tint">Windshield Tint</Link></li>
              <li><Link href="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li><Link href="/services/commercial-vehicle-tinting">Commercial Vehicle Tinting</Link></li>
            </ul>
          </div>
          <div className="footer-areas">
            <h4>SERVICE AREAS</h4>
            <div className="footer-area-group">
              <Link href="/areas/broward-county" className="text-blue">Broward County</Link>
              <p className="footer-cities">
                {browardCities.map((c, i) => (
                  <span key={c.slug}>
                    <Link href={`/areas/broward-county/${c.slug}`}>{c.name}</Link>
                    {i < browardCities.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
            <div className="footer-area-group">
              <Link href="/areas/miami-dade-county" className="text-blue">Miami-Dade County</Link>
              <p className="footer-cities">
                {miamiCities.map((c, i) => (
                  <span key={c.slug}>
                    <Link href={`/areas/miami-dade-county/${c.slug}`}>{c.name}</Link>
                    {i < miamiCities.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
            <div className="footer-area-group">
              <Link href="/areas/palm-beach-county" className="text-blue">Palm Beach County</Link>
              <p className="footer-cities">
                {palmBeachCities.map((c, i) => (
                  <span key={c.slug}>
                    <Link href={`/areas/palm-beach-county/${c.slug}`}>{c.name}</Link>
                    {i < palmBeachCities.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BlackLine Tinting. All rights reserved.</p>
          <p>Visa · Mastercard · Amex · Cash</p>
        </div>
      </div>
    </footer>
  )
}
