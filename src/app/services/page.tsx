import type { Metadata } from 'next'
import { CTASection, ServicesCards } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'Window Tinting Services',
  description: 'Professional window tinting services in South Florida. Ceramic tint, carbon tint, PPF, windshield tint, ceramic coating, and commercial fleet tinting.',
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-blue">Services</span></h1>
          <p>Premium window tinting, paint protection, and ceramic coating for every vehicle. Every installation backed by our lifetime warranty.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServicesCards />
        </div>
      </section>

      <CTASection />
    </>
  )
}
