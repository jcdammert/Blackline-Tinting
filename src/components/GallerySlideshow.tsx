'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { label: 'Ceramic Tint', src: '/gallery/bmw-x6-ceramic-tint.jpg', alt: 'BMW X6 with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/audi-q8-ceramic-tint.jpg', alt: 'Audi Q8 with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/gmc-sierra-ceramic-tint.jpg', alt: 'GMC Sierra with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/tesla-model-x-ceramic-tint.jpg', alt: 'Tesla Model X with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/porsche-911-ceramic-tint.jpg', alt: 'Porsche 911 convertible with ceramic window tint' },
  { label: 'Ceramic Tint', src: '/gallery/jeep-wrangler-ceramic-tint.jpg', alt: 'Jeep Wrangler with ceramic window tint' },
]

export default function GallerySlideshow() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="slideshow-section">
      {/* Desktop: 3 visible at once */}
      <div className="slideshow-desktop">
        <div className="slideshow-desktop-track" style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
          {slides.map((slide, i) => (
            <div className="slideshow-desktop-slide" key={i}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="400px"
                priority={i === 0}
              />
              <span className="slideshow-label">{slide.label}</span>
            </div>
          ))}
        </div>

        <button className="slideshow-arrow slideshow-arrow-left" onClick={prev} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="slideshow-arrow slideshow-arrow-right" onClick={next} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div className="slideshow-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: 1 visible, swipe through */}
      <div className="slideshow-mobile">
        <div className="slideshow-mobile-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className="slideshow-mobile-slide" key={i}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
                priority={i === 0}
              />
              <span className="slideshow-label">{slide.label}</span>
            </div>
          ))}
        </div>

        <button className="slideshow-arrow slideshow-arrow-left" onClick={prev} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="slideshow-arrow slideshow-arrow-right" onClick={next} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div className="slideshow-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link href="/gallery" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>VIEW FULL GALLERY →</Link>
      </div>
    </section>
  )
}
