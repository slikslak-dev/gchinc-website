import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — Golden Canadian Homes Inc.',
  description: 'See our simple Apply → Call → Docs → Fund process and what to expect from first contact to quarterly distributions.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">How It Works</h1>
        <p className="text-lg">We keep investing simple. Here&apos;s what happens from application to your first distribution.</p>
      </main>
    </div>
  )
}