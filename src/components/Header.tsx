'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isActive = (path: string) => pathname === path ? 'active' : ''
  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="logo">
          <Image src="/blackline-logo.png" alt="BlackLine Tinting" width={180} height={48} priority />
        </Link>
        <a href="tel:+19547372785" className="header-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          (954) 737-2785
        </a>
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(false)}>
          <li><Link href="/" className={isActive('/')}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about')}>About</Link></li>
          <li className="dropdown">
            <Link href="/services" className={pathname.startsWith('/services') ? 'active' : ''}>
              Services <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/services/ceramic-window-tint">Ceramic Window Tint</Link></li>
              <li><Link href="/services/carbon-window-tint">Carbon Window Tint</Link></li>
              <li><Link href="/services/paint-protection-film">Paint Protection Film (PPF)</Link></li>
              <li><Link href="/services/windshield-tint">Windshield Tint</Link></li>
              <li><Link href="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li><Link href="/services/commercial-vehicle-tinting">Commercial Vehicle Tinting</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="/areas" className={pathname.startsWith('/areas') ? 'active' : ''}>
              Service Areas <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            </Link>
            <ul className="dropdown-menu">
              <li><Link href="/areas/broward-county">Broward County</Link></li>
              <li><Link href="/areas/miami-dade-county">Miami-Dade County</Link></li>
              <li><Link href="/areas/palm-beach-county">Palm Beach County</Link></li>
            </ul>
          </li>
          <li><Link href="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
          <li><Link href="/faq" className={isActive('/faq')}>FAQ</Link></li>
          <li className="nav-cta"><Link href="/quote" className="btn btn-primary">GET QUOTE →</Link></li>
        </ul>
      </nav>
    </header>
  )
}
