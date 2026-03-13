import type { Metadata } from 'next'
import { CTASection, ServiceAreasGrid } from '@/components/Shared'

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Professional window tinting services across Broward County, Miami-Dade County, and Palm Beach County. Lifetime warranty on every installation.',
}

export default function ServiceAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Service <span className="text-blue">Areas</span></h1>
          <p>Professional window tinting services across Broward County, Miami-Dade County, and Palm Beach County. Lifetime warranty on every installation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceAreasGrid />
        </div>
      </section>

      <CTASection />
    </>
  )
}
