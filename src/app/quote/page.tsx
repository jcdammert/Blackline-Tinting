'use client'

import { useState } from 'react'

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/WW2K840JVLSOPOTKsMfb/webhook-trigger/69a370f7-71bf-4fec-8ccf-948fcc9ef2dc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          phone: data.get('phone'),
          email: data.get('email'),
          vehicle: data.get('vehicle'),
          service: data.get('service'),
          appointmentTime: data.get('appointmentTime'),
          message: data.get('message'),
        }),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get a Free <span className="text-blue">Quote</span></h1>
          <p>Fill out the form below and we&apos;ll get back to you with a free, no-obligation quote. Same-week appointments available.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-grid">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h2 style={{ marginBottom: '16px' }}>Thanks! We&apos;ll be in touch soon.</h2>
                <p style={{ color: 'var(--text-secondary)' }}>We typically respond within a few hours during business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <input type="text" name="firstName" className="form-input" placeholder="First Name *" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="lastName" className="form-input" placeholder="Last Name *" required />
                  </div>
                  <div className="form-group full">
                    <input type="tel" name="phone" className="form-input" placeholder="Phone Number *" required />
                  </div>
                  <div className="form-group full">
                    <input type="email" name="email" className="form-input" placeholder="Email Address *" required />
                  </div>
                  <div className="form-group full">
                    <input type="text" name="vehicle" className="form-input" placeholder="Vehicle Make / Model / Year" />
                  </div>
                  <div className="form-group full">
                    <select name="service" className="form-select">
                      <option value="">Select a Service</option>
                      <option value="ceramic-window-tint">Ceramic Window Tint</option>
                      <option value="carbon-window-tint">Carbon Window Tint</option>
                      <option value="paint-protection-film">Paint Protection Film (PPF)</option>
                      <option value="windshield-tint">Windshield Tint</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="commercial-vehicle-tinting">Commercial Vehicle Tinting</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <input type="text" name="appointmentTime" className="form-input" placeholder="Preferred Appointment Time" />
                  </div>
                  <div className="form-group full">
                    <textarea name="message" className="form-textarea" placeholder="Additional Details"></textarea>
                  </div>
                  <div className="form-group full">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }} disabled={loading}>
                      {loading ? 'SENDING...' : 'GET MY FREE QUOTE →'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div>
              <div className="sidebar-card">
                <h3>Contact Info</h3>
                <p><span className="sidebar-icon">📞</span> (954) 555-TINT</p>
                <p><span className="sidebar-icon">✉</span> info@blacklinetinting.com</p>
                <p><span className="sidebar-icon">📍</span> Broward County, FL</p>
                <p><span className="sidebar-icon">🕐</span> Mon-Sat: 8AM - 6PM</p>
              </div>
              <div className="sidebar-card">
                <h3>Why BlackLine?</h3>
                <p>✓ Premium ceramic & carbon films</p>
                <p>✓ Lifetime warranty on every job</p>
                <p>✓ Same-week appointments</p>
                <p>✓ Transparent pricing</p>
                <p>✓ VIP discounts for military & first responders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
