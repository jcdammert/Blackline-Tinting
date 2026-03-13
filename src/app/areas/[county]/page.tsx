import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { counties } from '@/data/siteData'
import { CTASection } from '@/components/Shared'

type Props = { params: Promise<{ county: string }> }

export async function generateStaticParams() {
  return Object.keys(counties).map(county => ({ county }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county } = await params
  const data = counties[county as keyof typeof counties]
  if (!data) return {}
  return { title: data.metaTitle, description: data.metaDesc }
}

export default async function CountyPage({ params }: Props) {
  const { county } = await params
  const data = counties[county as keyof typeof counties]
  if (!data) notFound()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Window Tinting in <span className="text-blue">{data.name}</span></h1>
          <p>Professional window tinting services across {data.name}. Premium ceramic and carbon films, paint protection, and ceramic coating with a lifetime warranty.</p>
        </div>
      </section>

      <section className="county-intro">
        <div className="container">
          <h2>{data.introHeading}</h2>
          <p>{data.introText}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Cities We Serve in {data.name}</h2>
          <div className="cities-grid">
            {data.cities.map(city => (
              <Link href={`/areas/${county}/${city.slug}`} className="city-card" key={city.slug}>
                <h3>{city.name}, FL</h3>
                <p>Window tinting, PPF & ceramic coating →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
