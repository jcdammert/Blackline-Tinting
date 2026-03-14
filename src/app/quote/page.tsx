'use client'

import { useState } from 'react'

const WEBHOOK = 'https://services.leadconnectorhq.com/hooks/WW2K840JVLSOPOTKsMfb/webhook-trigger/69a370f7-71bf-4fec-8ccf-948fcc9ef2dc'

type Service = 'tinting' | 'ppf' | 'ceramic' | ''

export default function Quote() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [service, setService] = useState<Service>('')
  const [tintWindows, setTintWindows] = useState<string[]>([])
  const [hasExistingTint, setHasExistingTint] = useState<boolean | null>(null)
  const [existingTintWindows, setExistingTintWindows] = useState<string[]>([])
  const [ppfAreas, setPpfAreas] = useState<string[]>([])
  const [ceramicAreas, setCeramicAreas] = useState<string[]>([])
  const [timeline, setTimeline] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [message, setMessage] = useState('')

  function toggleCheck(arr: string[], setArr: (v: string[]) => void, val: string) {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  function validate(s: number): string[] {
    const errs: string[] = []
    if (s === 1) {
      if (!firstName.trim()) errs.push('First name is required')
      if (!phone.trim()) errs.push('Phone number is required')
      if (!email.trim()) errs.push('Email address is required')
    }
    if (s === 2) { if (!service) errs.push('Please select a service') }
    if (s === 3) {
      if (service === 'tinting' && tintWindows.length === 0) errs.push('Please select at least one window option')
      if (service === 'ppf' && ppfAreas.length === 0) errs.push('Please select at least one area')
      if (service === 'ceramic' && ceramicAreas.length === 0) errs.push('Please select at least one option')
    }
    if (s === 4) { if (!timeline) errs.push('Please select a timeline') }
    return errs
  }

  function next() {
    const errs = validate(step)
    if (errs.length > 0) { setErrors(errs); return }
    setErrors([])
    setStep(step + 1)
  }

  function back() { setErrors([]); setStep(step - 1) }

  async function handleSubmit() {
    const errs = validate(4)
    if (errs.length > 0) { setErrors(errs); return }
    setErrors([])
    setLoading(true)
    try {
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone, email, vehicle, service, tintWindows: tintWindows.join(', '), hasExistingTint, existingTintWindows: existingTintWindows.join(', '), ppfAreas: ppfAreas.join(', '), ceramicAreas: ceramicAreas.join(', '), timeline, appointmentTime, message }),
      })
      setSubmitted(true)
    } catch { alert('Something went wrong. Please call us directly.') }
    finally { setLoading(false) }
  }

  const progressWidth = `${(step / 4) * 100}%`
  const sBtnBack: React.CSSProperties = { padding: '10px 24px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }
  const sBtnNext: React.CSSProperties = { padding: '10px 24px', borderRadius: '8px', border: 'none', background: 'var(--blue)', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }
  const sBtnRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }
  const sLabel: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--text-primary)' }
  const sCard = (active: boolean): React.CSSProperties => ({ border: active ? '2px solid var(--blue)' : '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px', cursor: 'pointer', background: active ? 'rgba(55,138,221,0.08)' : 'transparent' })
  const sToggleBtn = (active: boolean): React.CSSProperties => ({ padding: '6px 20px', borderRadius: '6px', border: active ? '2px solid var(--blue)' : '1px solid var(--border)', background: active ? 'rgba(55,138,221,0.08)' : 'transparent', cursor: 'pointer', fontSize: '13px', color: 'var(--text-primary)' })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get a Free <span className="text-blue">Quote</span></h1>
          <p>Fill out the form and we will get back to you with a free quote. Same-week appointments available.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="quote-grid">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h2 style={{ marginBottom: '16px' }}>Thanks! We will be in touch soon.</h2>
                <p style={{ color: 'var(--text-secondary)' }}>We typically respond within a few hours during business hours.</p>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Step {step} of 4</span>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', marginTop: '8px' }}>
                    <div style={{ height: '100%', width: progressWidth, background: 'var(--blue)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                  </div>
                </div>
                {errors.length > 0 && (
                  <div style={{ background: '#fee', border: '1px solid #fcc', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px' }}>
                    {errors.map((e, i) => <p key={i} style={{ color: '#c00', fontSize: '13px', margin: 0 }}>{e}</p>)}
                  </div>
                )}
                {step === 1 && (
                  <div className="form-grid">
                    <div className="form-group"><input className="form-input" placeholder="First Name *" value={firstName} onChange={e => setFirstName(e.target.value)} /></div>
                    <div className="form-group"><input className="form-input" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} /></div>
                    <div className="form-group full"><input className="form-input" placeholder="Phone Number *" value={phone} onChange={e => setPhone(e.target.value)} /></div>
                    <div className="form-group full"><input className="form-input" type="email" placeholder="Email Address *" value={email} onChange={e => setEmail(e.target.value)} /></div>
                    <div className="form-group full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button style={sBtnNext} onClick={next}>Next</button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="form-grid">
                    <div className="form-group full"><input className="form-input" placeholder="Vehicle Make / Model / Year" value={vehicle} onChange={e => setVehicle(e.target.value)} /></div>
                    <div className="form-group full">
                      <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Which service are you interested in? *</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                        {(['tinting', 'ppf', 'ceramic'] as Service[]).map(s => (
                          <div key={s} onClick={() => setService(s)} style={{ ...sCard(service === s), textAlign: 'center', padding: '16px 8px' }}>
                            <div style={{ fontSize: '13px', fontWeight: 500 }}>
                              {s === 'tinting' ? 'Window Tinting' : s === 'ppf' ? 'PPF' : 'Ceramic Coating'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-group full" style={sBtnRow}>
                      <button style={sBtnBack} onClick={back}>Back</button>
                      <button style={sBtnNext} onClick={next}>Next</button>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="form-grid">
                    {service === 'tinting' && (<>
                      <div className="form-group full">
                        <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Which windows do you want tinted? *</p>
                        {['Full vehicle (all windows)', 'Front two windows only', 'All side windows and rear windshield', 'Windshield strip (sun strip)', 'Full windshield', 'Not sure yet - I would like a recommendation'].map(opt => (
                          <label key={opt} style={sLabel}><input type="checkbox" checked={tintWindows.includes(opt)} onChange={() => toggleCheck(tintWindows, setTintWindows, opt)} />{opt}</label>
                        ))}
                      </div>
                      <div className="form-group full" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                        <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Is there existing tint that needs to be removed?</p>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                          <button style={sToggleBtn(hasExistingTint === true)} onClick={() => setHasExistingTint(true)}>Yes</button>
                          <button style={sToggleBtn(hasExistingTint === false)} onClick={() => setHasExistingTint(false)}>No</button>
                        </div>
                        {hasExistingTint && (
                          <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Which windows have existing tint?</p>
                            {['All windows', 'Front two windows', 'Rear windshield', 'Side windows only', 'Not sure'].map(opt => (
                              <label key={opt} style={sLabel}><input type="checkbox" checked={existingTintWindows.includes(opt)} onChange={() => toggleCheck(existingTintWindows, setExistingTintWindows, opt)} />{opt}</label>
                            ))}
                          </div>
                        )}
                      </div>
                    </>)}
                    {service === 'ppf' && (
                      <div className="form-group full">
                        <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Which areas do you want protected? *</p>
                        {['Full front (hood, fenders, bumper, mirrors)', 'Hood only', 'Full vehicle', 'Rocker panels / door edges', 'Not sure - I would like a recommendation'].map(opt => (
                          <label key={opt} style={sLabel}><input type="checkbox" checked={ppfAreas.includes(opt)} onChange={() => toggleCheck(ppfAreas, setPpfAreas, opt)} />{opt}</label>
                        ))}
                      </div>
                    )}
                    {service === 'ceramic' && (
                      <div className="form-group full">
                        <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>What would you like coated? *</p>
                        {['Full exterior paint', 'Wheels', 'Windows', 'Full vehicle package', 'Not sure - I would like a recommendation'].map(opt => (
                          <label key={opt} style={sLabel}><input type="checkbox" checked={ceramicAreas.includes(opt)} onChange={() => toggleCheck(ceramicAreas, setCeramicAreas, opt)} />{opt}</label>
                        ))}
                      </div>
                    )}
                    <div className="form-group full" style={sBtnRow}>
                      <button style={sBtnBack} onClick={back}>Back</button>
                      <button style={sBtnNext} onClick={next}>Next</button>
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="form-grid">
                    <div className="form-group full">
                      <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>How soon do you need it done? *</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {[{ label: 'ASAP', sub: 'Within a few days' }, { label: 'This week', sub: 'Before the weekend' }, { label: '1-2 weeks', sub: 'No big rush' }, { label: 'Just researching', sub: 'Checking prices' }].map(({ label, sub }) => (
                          <div key={label} onClick={() => setTimeline(label)} style={sCard(timeline === label)}>
                            <div style={{ fontSize: '13px', fontWeight: 500 }}>{label}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-group full"><input className="form-input" placeholder="Preferred appointment time (optional)" value={appointmentTime} onChange={e => setAppointmentTime(e.target.value)} /></div>
                    <div className="form-group full"><textarea className="form-textarea" placeholder="Additional details (optional)" value={message} onChange={e => setMessage(e.target.value)} /></div>
                    <div className="form-group full" style={sBtnRow}>
                      <button style={sBtnBack} onClick={back}>Back</button>
                      <button style={sBtnNext} onClick={handleSubmit} disabled={loading}>{loading ? 'SENDING...' : 'GET MY FREE QUOTE'}</button>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div>
              <div className="sidebar-card">
                <h3>Contact Info</h3>
                <p><span className="sidebar-icon">📞</span> (954) 737-2785</p>
                <p><span className="sidebar-icon">✉</span> blacklinetintingsales@gmail.com</p>
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
