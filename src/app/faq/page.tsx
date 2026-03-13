'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqItems } from '@/data/siteData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked <span className="text-blue">Questions</span></h1>
          <p>Everything you need to know about window tinting, our process, and our warranty.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.q}
                  <span className="faq-arrow">▼</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
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
