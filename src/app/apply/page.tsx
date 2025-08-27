import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to Invest — Golden Canadian Homes Inc.',
  description: 'Start your investor application. We typically respond within 24 hours.',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Apply to Invest</h1>
        <p className="text-lg">Tell us a bit about yourself. We&apos;ll follow up within one business day to schedule a quick call.</p>
      </main>
    </div>
  )
}