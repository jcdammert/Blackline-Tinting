'use client'

import Link from 'next/link'
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
          <span className="logo-icon">BL</span>
          <span className="logo-text">Black<span className="text-blue">Line</span> Tinting</span>
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links${mobileOpen ? ' active' : ''}`}>
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
