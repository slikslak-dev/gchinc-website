import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Golden Canadian Homes Inc.',
  description: 'How we collect, use, and protect your personal information in compliance with PIPEDA.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg">How we handle your personal information in compliance with Canadian privacy laws.</p>
      </main>
    </div>
  )
}