import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Golden Canadian Homes Inc.',
  description: 'Terms and conditions for using the Golden Canadian Homes Inc. website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-lg">Terms and conditions for using our website and services.</p>
      </main>
    </div>
  )
}