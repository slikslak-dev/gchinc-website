import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sharia Compliance — Golden Canadian Homes Inc.',
  description: 'Learn about our commitment to Islamic finance principles and halal investment structures.',
}

export default function ShariaCompliancePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Sharia Compliance</h1>
        <div className="max-w-4xl space-y-8">
          <p className="text-lg text-muted-foreground">
            Golden Canadian Homes Inc. is committed to operating in accordance with Islamic finance principles, 
            ensuring our investment structures are halal and compliant with Sharia law.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">No Riba (Interest)</h3>
                  <p className="text-muted-foreground">
                    Our structures are designed as equity partnerships (e.g., musharakah/diminishing musharakah). 
                    Investors share in actual profits; no fixed or guaranteed interest is offered.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Asset-Backed Investments</h3>
                  <p className="text-muted-foreground">
                    Capital is deployed into real properties. Profits are derived from permissible rental income 
                    and property sales, not from lending activities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Risk and Profit Sharing</h3>
                  <p className="text-muted-foreground">
                    Investors bear losses proportional to their capital contribution in accordance with 
                    Islamic partnership principles. Capital is genuinely at risk.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Permissible Use Policy</h2>
              <p className="text-muted-foreground mb-4">
                We maintain strict screening of commercial tenants to exclude businesses engaged in 
                activities prohibited under Islamic law, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Alcohol sales and distribution</li>
                <li>Gambling and gaming</li>
                <li>Adult entertainment</li>
                <li>Cannabis retail</li>
                <li>Interest-based financial services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governance and Oversight</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  <strong>Sharia Advisory Board:</strong> Currently being established. Once finalized, 
                  our Sharia advisor/board will review all structures, documents, and policies to ensure 
                  ongoing compliance with Islamic principles.
                </p>
                <p className="text-muted-foreground">
                  Any non-compliant incidental income, if identified, will be handled according to 
                  Sharia advisor guidance and best practices.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Important Disclaimers</h2>
              <div className="bg-card border border-border p-6 rounded-lg space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Religious Guidance:</strong> This information is provided for educational purposes. 
                  We recommend consulting with qualified Islamic scholars regarding your specific circumstances 
                  and religious obligations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Zakat Considerations:</strong> Profit distributions may affect your zakat calculations. 
                  We can provide profit reports to assist with your religious obligations, but zakat obligations 
                  remain personal responsibilities.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Documentation:</strong> In case of any conflict between this page and executed 
                  offering documents, the offering documents and Sharia advisor guidance will govern.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Questions about our Sharia compliance approach? We're happy to discuss during your consultation call.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Apply to Invest
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}