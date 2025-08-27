import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golden Canadian Homes Inc. — Ontario Real Estate Investments',
  description: 'Invest in income-producing rentals and thoughtful developments across Ontario. Two tiers (6%–10% target). Quarterly payouts after year one. Accredited & OM-eligible investors.',
}

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">Own a share of Ontario rental growth.</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">We acquire and develop income-producing rentals across Ontario. You fund the growth; we do the heavy lifting.</p>
          <div className="space-x-4">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Apply to Invest
            </button>
            <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
              See Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
