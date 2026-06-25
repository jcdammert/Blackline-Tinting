'use client'

import { useState, useEffect } from 'react'

const reviews = [
  {
    name: 'Luis Manuel Valles',
    stars: 5,
    text: '2013 Honda Accord removed and replaced old tint. New tint in place, very happy with the service.',
  },
  {
    name: 'Julia Ghetti',
    stars: 5,
    text: "They tinted my boyfriend's car last year and were able to come out to Weston and tinted my BMW X4 front two windows at work! Both jobs came out great and Johann communicated the whole time on when his guys were coming in on schedule. Would definitely recommend, will be using them again!!",
  },
  {
    name: 'Camilo Vallés',
    stars: 5,
    text: 'Great customer service and the car looks great!',
  },
  {
    name: 'Lawrence Feiz',
    stars: 5,
    text: 'Great overall service — they arrived on time ready to go and were relatively quick. Thank you again for the great service. Definitely recommend, best prices in the area.',
  },
  {
    name: 'Diego Pafumi',
    stars: 5,
    text: "Great job. The company provided an excellent service, explained everything in detail about the different grades, they came to my home and installed everything. I'd highly recommend them.",
  },
]

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent(p => (p + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  const go = (i: number) => setCurrent(((i % reviews.length) + reviews.length) % reviews.length)

  return (
    <section
      className="section reviews-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="reviews-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="reviews-meta">
            <span className="reviews-stars-gold">★★★★★</span> 18 Reviews on Google
          </p>
        </div>

        <div className="reviews-track">
          <button className="review-nav-btn" onClick={() => go(current - 1)} aria-label="Previous">&#8249;</button>

          <div className="review-card-wrap">
            <div className="review-card">
              <div className="review-card-stars">{'★'.repeat(reviews[current].stars)}</div>
              <p className="review-card-text">&ldquo;{reviews[current].text}&rdquo;</p>
              <p className="review-card-author">— {reviews[current].name}</p>
              <span className="review-card-source">Google Review</span>
            </div>
          </div>

          <button className="review-nav-btn" onClick={() => go(current + 1)} aria-label="Next">&#8250;</button>
        </div>

        <div className="review-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`review-dot${i === current ? ' active' : ''}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
