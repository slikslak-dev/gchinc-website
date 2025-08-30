import type { Metadata } from 'next'
import { LeadMagnetForm } from '@/components/lead-magnet-form'

export const metadata: Metadata = {
  title: 'Ontario Real Estate Market Outlook 2024-2025 | Exclusive GCHI Report',
  description: 'Get exclusive insights into Ontario\'s real estate market for halal investors. Discover the best regions, timing, and opportunities for Sharia-compliant real estate investments.',
  keywords: 'Ontario real estate market outlook, halal real estate investing, Ontario property investment, Sharia compliant real estate, Ontario real estate forecast 2024',
  openGraph: {
    title: 'Ontario Real Estate Market Outlook 2024-2025 | GCHI Report',
    description: 'Exclusive market insights for halal real estate investors in Ontario. Data-driven forecasts and investment opportunities.',
    type: 'website',
  },
}

export default function OntarioMarketOutlookPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
              Ontario Real Estate Market Outlook 2024-2025
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Exclusive market intelligence for halal real estate investors. Navigate Ontario's changing market 
              with data-driven insights, regional forecasts, and Sharia-compliant investment opportunities.
            </p>

            {/* Exclusive indicator */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
              <p className="text-amber-800 font-semibold text-sm">
                🔒 Exclusive Report: Market insights not available to the general public
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Based on $2.5M+ Investments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30+ Years Market Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Updated Quarterly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Halal-Focused Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Report Content Preview */}
            <div className="space-y-8">
              {/* Key Insights Preview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Market Insights for 2024-2025</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        📈
                      </div>
                      <h3 className="font-bold text-green-800">Interest Rate Impact Analysis</h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      How changing interest rates create unique opportunities for halal investors 
                      who don't rely on conventional financing structures.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        🏘️
                      </div>
                      <h3 className="font-bold text-blue-800">Best Regions for Halal Investors</h3>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Detailed analysis of 12 Ontario regions with highest potential for 
                      Sharia-compliant real estate investments in 2024-2025.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ⚖️
                      </div>
                      <h3 className="font-bold text-purple-800">Regulatory Changes Impact</h3>
                    </div>
                    <p className="text-purple-700 text-sm">
                      New Ontario regulations affecting real estate investments and how they 
                      create advantages for Sharia-compliant investment structures.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        💰
                      </div>
                      <h3 className="font-bold text-amber-800">GCHI's Exclusive Market Predictions</h3>
                    </div>
                    <p className="text-amber-700 text-sm">
                      Based on our $2.5M+ in managed investments, discover where we see 
                      the biggest opportunities for 5-6% returns in the coming 18 months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Detailed Content Breakdown */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-4">Complete Report Contents</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Market Analysis</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Price trend forecasts by region</li>
                      <li>• Rental yield projections</li>
                      <li>• Supply/demand analysis</li>
                      <li>• Economic indicators impact</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Investment Opportunities</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Best property types for halal investors</li>
                      <li>• Emerging markets to watch</li>
                      <li>• Timing strategies for purchases</li>
                      <li>• Risk assessment by region</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Sharia Compliance</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Halal financing alternatives</li>
                      <li>• Partnership structure options</li>
                      <li>• Avoiding interest-based deals</li>
                      <li>• Scholar-approved strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Actionable Insights</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• GCHI's 2024-2025 investment plan</li>
                      <li>• Expected return calculations</li>
                      <li>• Risk mitigation strategies</li>
                      <li>• Partnership opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exclusive Data Points */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="font-bold mb-4">🎯 Exclusive Data Points You'll Get:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>Ottawa rental yield forecast:</span>
                      <span className="font-bold text-green-600">4.2-5.8%</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>Toronto condo appreciation:</span>
                      <span className="font-bold text-blue-600">3.1-4.7%</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>Kitchener-Waterloo growth:</span>
                      <span className="font-bold text-purple-600">5.2-7.1%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>Best entry timing:</span>
                      <span className="font-bold text-amber-600">Q1 2024</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>Halal financing gap:</span>
                      <span className="font-bold text-red-600">$2.1B</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-1">
                      <span>GCHI target regions:</span>
                      <span className="font-bold text-green-600">3 primary</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-4">What Our Investors Say:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "This report helped me understand why GCHI focuses on specific regions. 
                      The data backing their strategy is impressive."
                    </p>
                    <p className="text-xs text-muted-foreground">- Investor, Hamilton</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "I was surprised by the regulatory insights. It explains why halal investing 
                      has advantages I never considered."
                    </p>
                    <p className="text-xs text-muted-foreground">- Partner, Toronto</p>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-2">⚡ Market Window Closing</h3>
                <p className="text-red-700 text-sm">
                  Current market conditions create a unique 12-18 month opportunity window for 
                  halal investors. The next similar opportunity may not come until 2026-2027.
                </p>
              </div>
            </div>

            {/* Right Column - Lead Magnet Form */}
            <div className="lg:sticky lg:top-8">
              <LeadMagnetForm
                leadMagnetType="ontario-market-outlook"
                title="Get Your Free Market Report"
                description="Access exclusive market intelligence that guides GCHI's investment decisions"
                source="ontario-market-outlook-page"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Market Preview Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Market Snapshot: Why Now Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-green-600 mb-2">5.8%</div>
                <div className="font-semibold mb-1">Average Rental Yield</div>
                <div className="text-sm text-muted-foreground">Best Ontario regions</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-blue-600 mb-2">18mo</div>
                <div className="font-semibold mb-1">Opportunity Window</div>
                <div className="text-sm text-muted-foreground">Before next cycle</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="font-semibold mb-1">Target Regions</div>
                <div className="text-sm text-muted-foreground">Analyzed in detail</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">🚀 Growth Opportunities</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Interest rate changes benefiting halal investors</li>
                  <li>• New government incentives for rental properties</li>
                  <li>• Decreased competition from conventional investors</li>
                  <li>• Emerging markets with 6%+ yield potential</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">⚠️ Market Risks</h3>
                <ul className="text-sm text-red-700 space-y-2">
                  <li>• Regulatory changes affecting foreign investment</li>
                  <li>• Regional oversupply in certain markets</li>
                  <li>• Economic uncertainty impacting demand</li>
                  <li>• Timing risks for market entry</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Make Informed Investment Decisions</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't invest blindly in Ontario real estate. Get the same market intelligence 
                that guides our $2.5M+ investment decisions and 5-6% target returns.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1,200+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Updated Quarterly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Data-Driven Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}