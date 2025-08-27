import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Disclaimers — Golden Canadian Homes Inc.',
  description: 'Important notices for accredited and OM-eligible investors in Ontario.',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Legal Disclaimers</h1>
        <p className="text-lg">Important legal notices for investors in Ontario, Canada.</p>
      </main>
    </div>
  )
}