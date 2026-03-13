import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about window tinting, our process, pricing, and lifetime warranty. BlackLine Tinting — South Florida.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
