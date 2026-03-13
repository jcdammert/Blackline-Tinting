import type { Metadata } from 'next'
import { CTASection } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our portfolio of professional window tinting, PPF, and ceramic coating installations. BlackLine Tinting — South Florida.',
}

const galleryItems = [
  { label: 'Ceramic Tint', desc: 'Full ceramic tint installation' },
  { label: 'Carbon Tint', desc: 'Premium carbon film install' },
  { label: 'Ceramic Tint', desc: 'Rear window ceramic application' },
  { label: 'Windshield Tint', desc: 'Clear ceramic windshield film' },
  { label: 'Full Vehicle', desc: 'Complete vehicle tint package' },
  { label: 'Ceramic Tint', desc: 'Side window ceramic tint' },
  { label: 'PPF Install', desc: 'Paint protection film application' },
  { label: 'Carbon Tint', desc: 'Carbon tint on luxury sedan' },
  { label: 'Fleet Tinting', desc: 'Commercial fleet tinting project' },
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-blue">Gallery</span></h1>
          <p>Browse our recent installations. Every job gets the same premium materials, attention to detail, and lifetime warranty.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div className="gallery-item" key={i}>
                <span className="gallery-label">{item.label}</span>
                {item.desc}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
