'use client'

import { useState } from 'react'
import { faqItems } from '@/data/siteData'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? faqItems.filter(item =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
      )
    : faqItems

  return (
    <div className="faq-list">
      <div className="faq-search-wrap">
        <input
          className="faq-search"
          type="text"
          placeholder="Type your question..."
          value={search}
          onChange={e => { setSearch(e.target.value); setOpenIndex(null) }}
        />
      </div>
      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '32px 0' }}>
          No results found. Try a different keyword.
        </p>
      )}
      {filtered.map((item, i) => (
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
  )
}
