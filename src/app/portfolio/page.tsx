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
        <div className="max-w-4xl space-y-8">
          <p className="text-lg text-muted-foreground">
            We focus on resilient Ontario communities with strong rental demand. We also maintain a 
            <strong>permissible-use policy</strong> for commercial tenants to uphold Sharia compliance.
          </p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Current Assets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Emmaville — Grand Valley, ON</h3>
                <p className="text-muted-foreground">
                  Community-scale mixed-use with <strong>18 residential</strong> and <strong>1 commercial</strong> unit.
                </p>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">59 3rd Street — Orangeville, ON</h3>
                <p className="text-muted-foreground">
                  Medical centre supporting local healthcare services.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Development Pipeline</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dundalk — Dundalk, ON</h3>
                <p className="text-muted-foreground mb-2">
                  Ground-floor commercial with upper-level offices.
                </p>
                <span className="text-sm bg-muted px-3 py-1 rounded-full">Targeted 2027</span>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Palmerston — Palmerston, ON</h3>
                <p className="text-muted-foreground mb-2">
                  ~15 senior-style rental condos and 4 commercial units.
                </p>
                <span className="text-sm bg-muted px-3 py-1 rounded-full">Targeted 2028</span>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Guelph — Guelph, ON</h3>
                <p className="text-muted-foreground mb-2">
                  ~20 luxury condo-style apartments and 8 commercial units.
                </p>
                <span className="text-sm bg-muted px-3 py-1 rounded-full">Targeted 2030</span>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Port Severn — Port Severn, ON</h3>
                <p className="text-muted-foreground mb-2">
                  ~20 urban cottage-style rental units and 3 commercial units.
                </p>
                <span className="text-sm bg-muted px-3 py-1 rounded-full">Targeted 2030</span>
              </div>
            </div>
          </section>
          
          <div className="bg-card border border-border p-6 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Project scopes and timelines are subject to permitting, 
              financing structures, and market conditions.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Interested in learning more about our approach to Ontario real estate?
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