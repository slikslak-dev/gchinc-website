import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invest — 6% to 10% Target Returns | Golden Canadian Homes Inc.',
  description: 'Two equity tiers for Ontario real estate projects. Quarterly distributions after year one. No investor fees. Accredited & OM-eligible investors only.',
}

export default function InvestPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Two ways to invest. One disciplined approach.</h1>
        <p className="text-lg">Our investments are equity stakes in Ontario real estate projects. We target steady, income-first returns, with measured development upside.</p>
      </main>
    </div>
  )
}