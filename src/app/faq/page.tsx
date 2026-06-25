import type { Metadata } from 'next'
import Link from 'next/link'
import { faqItems } from '@/data/siteData'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about window tinting in South Florida — legal limits, tint percentages, how mobile service works, warranties, and more.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked <span className="text-blue">Questions</span></h1>
          <p>Everything you need to know about window tinting, our process, and our warranty.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQAccordion />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>We&apos;re happy to answer any questions you have. Get in touch and we&apos;ll get back to you as soon as possible.</p>
          <Link href="/quote" className="btn btn-primary">CONTACT US →</Link>
        </div>
      </section>
    </>
  )
}
