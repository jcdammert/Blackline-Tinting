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
  {
    name: 'Amit Khatri',
    stars: 5,
    text: 'Had my Honda Pilot front windows tinted and had a great experience. The staff was professional, explained the options clearly, and completed the job quickly. The tint installation came out clean with no bubbles or imperfections. Pricing was fair, and the overall process was smooth from start to finish. Would definitely recommend.',
  },
  {
    name: 'Yin Perez',
    stars: 5,
    text: 'Very happy with how my car turned out! Excellent service and very easy to book. Great communication as well and quick to respond to all my questions.',
  },
  {
    name: 'Carlos V.',
    stars: 5,
    text: "Got my truck tinted with Johann and it can't get any better. He was professional, and the quality of the job is amazing. Definitely recommend!!",
  },
  {
    name: 'Babu Singh',
    stars: 5,
    text: 'Their team of 2 installers did a great job on my Tesla Model 3 with ceramic window tints. The scheduling was easy and they came to my home within 24 hours to get the job completed. Good professional installation done by this team. Definitely recommend.',
  },
  {
    name: 'Ryan Sevel',
    stars: 5,
    text: 'Quick service and professional tinting.',
  },
  {
    name: 'Brian Hinton',
    stars: 5,
    text: 'Great service at a good price, and they come to you! My Lexus looks great! Recommend!!',
  },
  {
    name: 'Jose Rondon',
    stars: 5,
    text: 'High quality service, he was very responsive and was able to come to me when I needed it given my busy schedule. Highly recommend!',
  },
  {
    name: 'Agustin Pagella',
    stars: 5,
    text: 'Did my tinting and detailing for my Porsche. Amazing job and service! Would definitely recommend to anyone. They are a mobile service so they come to you.',
  },
  {
    name: 'JP',
    stars: 5,
    text: 'He tinted my Ford F-250 full car 20% in Weston. As summer is coming around the corner I wanted to be prepared against the heat! Came in one day and was quick — would recommend.',
  },
  {
    name: 'Pjscopez',
    stars: 5,
    text: 'Amazing service 10/10 would recommend!',
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
            <span className="reviews-stars-gold">★★★★★</span> 5.0 · Google Verified Reviews
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
