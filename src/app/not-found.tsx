import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ padding: '200px 0 120px', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p style={{ marginBottom: '32px' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn btn-primary">BACK TO HOME →</Link>
      </div>
    </section>
  )
}
