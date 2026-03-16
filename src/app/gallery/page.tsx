import type { Metadata } from 'next'
import Image from 'next/image'
import { CTASection } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our portfolio of professional window tinting, PPF, and ceramic coating installations. BlackLine Tinting — South Florida.',
}

const galleryItems = [
  { label: 'BMW X6', src: '/gallery/bmw-x6-ceramic-tint.jpg', alt: 'BMW X6 ceramic window tint South Florida' },
  { label: 'Audi Q8', src: '/gallery/audi-q8-ceramic-tint.jpg', alt: 'Audi Q8 ceramic window tint South Florida' },
  { label: 'GMC Sierra 2500', src: '/gallery/gmc-sierra-ceramic-tint.jpg', alt: 'GMC Sierra 2500 ceramic window tint South Florida' },
  { label: 'Tesla Model X', src: '/gallery/tesla-model-x-ceramic-tint.jpg', alt: 'Tesla Model X ceramic window tint South Florida' },
  { label: 'BMW M440i', src: '/gallery/porsche-911-ceramic-tint.jpg', alt: 'BMW M440i convertible ceramic window tint South Florida' },
  { label: 'Jeep Wrangler', src: '/gallery/jeep-wrangler-ceramic-tint.jpg', alt: 'Jeep Wrangler ceramic window tint South Florida' },
  { label: 'BMW 3 Series', src: '/gallery/bmw-3-series-red-ceramic-tint.jpg', alt: 'Red BMW 3 Series ceramic window tint South Florida' },
  { label: 'Dodge Charger', src: '/gallery/broward-sheriff-charger-ceramic-tint.jpg', alt: 'Broward Sheriff Dodge Charger ceramic window tint South Florida' },
  { label: 'Audi A5', src: '/gallery/audi-a5-white-ceramic-tint.jpg', alt: 'White Audi A5 ceramic window tint South Florida' },
  { label: 'Ford Transit Connect', src: '/gallery/ford-transit-connect-ceramic-tint.jpg', alt: 'White Ford Transit Connect ceramic window tint South Florida' },
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
