import type { Metadata } from 'next'
import Image from 'next/image'
import { CTASection } from '@/components/Shared'

export const metadata: Metadata = {
  title: "About BlackLine Tinting | South Florida's Trusted Window Tinting Experts",
  description: "Learn about BlackLine Tinting — South Florida's trusted auto window tinting experts. Premium materials, lifetime warranty, and locally owned.",
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About <span className="text-blue">BlackLine Tinting</span></h1>
          <p>South Florida&apos;s trusted name in professional auto window tinting. We&apos;re on a mission to keep every driver cooler, safer, and looking sharp on the road.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2>Our Story</h2>
              <p>BlackLine Tinting was founded with a simple belief: South Florida drivers deserve premium window tinting at fair prices, with installations they can trust for the life of their vehicle.</p>
              <p>Based in Broward County, we&apos;ve tinted thousands of vehicles — from daily commuters to luxury cars to entire commercial fleets. Every installation gets the same attention to detail, the same premium materials, and the same lifetime warranty.</p>
              <p>We&apos;re not a franchise or a quick-service chain. We&apos;re a locally owned shop staffed by experienced technicians who genuinely care about the quality of their work. When you bring your car to BlackLine, you&apos;re getting the best tint job in South Florida — guaranteed.</p>
            </div>
            <div className="about-image">
              <Image
                src="/about-tinting-team.webp"
                alt="Professional window tint installation by BlackLine Tinting South Florida"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose BlackLine</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Premium Materials Only</h3>
              <p>We exclusively use top-tier ceramic and carbon films. No cheap dyed tints, no shortcuts, no compromises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Lifetime Warranty</h3>
              <p>Every single installation is backed by our lifetime warranty. If it bubbles, peels, or fades, we fix it free.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Same-Week Appointments</h3>
              <p>We respect your time. Most installations are completed in 2-3 hours with same-week scheduling available.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Premium quality doesn&apos;t have to mean premium prices. We offer fair, transparent pricing with no hidden fees.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎖️</div>
              <h3>VIP Discounts</h3>
              <p>We proudly offer special pricing for military, veterans, police officers, firefighters, and EMTs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📍</div>
              <h3>Locally Owned</h3>
              <p>We&apos;re part of the South Florida community. Our reputation is built on word-of-mouth and repeat customers.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
