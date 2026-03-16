import type { Metadata } from 'next'
import Image from 'next/image'
import { CTASection } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our portfolio of professional window tinting, PPF, and ceramic coating installations. BlackLine Tinting — South Florida.',
}

const galleryItems = [
  { label: 'Ceramic Tint', src: '/gallery/bmw-x6-ceramic-tint.jpg', alt: 'BMW X6 with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/audi-q8-ceramic-tint.jpg', alt: 'Audi Q8 with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/gmc-sierra-ceramic-tint.jpg', alt: 'GMC Sierra with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/tesla-model-x-ceramic-tint.jpg', alt: 'Tesla Model X with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/porsche-911-ceramic-tint.jpg', alt: 'Porsche 911 convertible with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/jeep-wrangler-ceramic-tint.jpg', alt: 'Jeep Wrangler with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/bmw-3-series-red-ceramic-tint.jpg', alt: 'Red BMW 3 Series with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/broward-sheriff-charger-ceramic-tint.jpg', alt: 'Broward Sheriff Dodge Charger with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/audi-a5-white-ceramic-tint.jpg', alt: 'White Audi A5 with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/ford-transit-connect-ceramic-tint.jpg', alt: 'White Ford Transit Connect with ceramic window tint' },
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span className="gallery-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
