import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Golden Canadian Homes Inc.',
  description: 'Meet the GCHI team building income-producing rentals and mixed-use projects across Ontario.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">We&apos;re builders, operators, and neighbours.</h1>
        <p className="text-lg">Golden Canadian Homes Inc. is an Ontario-based real estate developer and operator focused on income-producing rentals and thoughtful mixed-use projects.</p>
      </main>
    </div>
  )
}