import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs — Golden Canadian Homes Inc.',
  description: 'Eligibility, returns, timelines, and reporting for GCHI investors.',
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <p className="text-lg">Common questions about investing with Golden Canadian Homes Inc.</p>
      </main>
    </div>
  )
}