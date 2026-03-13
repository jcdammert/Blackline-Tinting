import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: {
    default: 'BlackLine Tinting | Professional Window Tinting in South Florida',
    template: '%s | BlackLine Tinting',
  },
  description: 'Premium auto window tinting in South Florida. Ceramic & carbon tint, PPF, ceramic coating. Lifetime warranty. Serving Broward, Miami-Dade & Palm Beach counties.',
  metadataBase: new URL('https://blacklinetinting.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BlackLine Tinting',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
