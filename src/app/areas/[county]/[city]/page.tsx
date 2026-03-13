import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities } from '@/data/siteData'
import { CTASection, ServicesCards, ServiceAreasGrid } from '@/components/Shared'

type Props = { params: Promise<{ county: string; city: string }> }

export async function generateStaticParams() {
  return cities.map(c => ({ county: c.countySlug, city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const data = cities.find(c => c.slug === city)
  if (!data) return {}
  return { title: data.metaTitle, description: data.metaDesc }
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const data = cities.find(c => c.slug === city)
  if (!data) notFound()

  return (
    <>
      <section className="city-hero page-hero">
        <div className="container">
          <h1>Window Tinting Services in <span className="text-blue">{data.name}, FL</span></h1>
          <p>BlackLine Tinting proudly serves {data.name} drivers with premium ceramic and carbon window tinting, paint protection film, and ceramic coating. Beat the South Florida heat with professional installation and a lifetime warranty.</p>
          <Link href="/quote" className="btn btn-primary">GET QUOTE IN {data.name.toUpperCase()} →</Link>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2>{data.whyHeading}</h2>
          <p>{data.whyP1}</p>
          <p style={{ marginTop: '16px' }}>{data.whyP2}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Tinting Services in {data.name}</h2>
          <ServicesCards />
        </div>
      </section>

      <CTASection />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Areas We Serve</h2>
          <ServiceAreasGrid />
        </div>
      </section>
    </>
  )
}
