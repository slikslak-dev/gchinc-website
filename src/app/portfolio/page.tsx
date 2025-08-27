import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Ontario Rental & Mixed-Use Projects | GCHI',
  description: 'Explore Golden Canadian Homes\' current assets and development pipeline across Grand Valley, Orangeville, Dundalk, Palmerston, Guelph, and Port Severn.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <p className="text-lg">We focus on resilient Ontario communities with strong rental demand. Here are our current assets and development pipeline.</p>
      </main>
    </div>
  )
}