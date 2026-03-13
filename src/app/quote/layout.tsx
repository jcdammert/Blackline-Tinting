import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Get a free window tinting quote from BlackLine Tinting. Same-week appointments, lifetime warranty, and competitive pricing in South Florida.',
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
