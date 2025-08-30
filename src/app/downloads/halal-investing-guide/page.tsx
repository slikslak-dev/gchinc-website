import type { Metadata } from 'next'
import { LeadMagnetForm } from '@/components/lead-magnet-form'

export const metadata: Metadata = {
  title: 'Free Guide: Halal Investing - Real Estate vs. Stocks | GCHI',
  description: 'Download our comprehensive guide comparing Sharia-compliant real estate and stock investments. Learn which option offers better returns for Ontario Muslim investors.',
  keywords: 'halal investing guide, sharia compliant investments, Islamic real estate vs stocks, Ontario Muslim investors, halal investment comparison',
  openGraph: {
    title: 'Free Halal Investing Guide: Real Estate vs. Stocks',
    description: 'Compare Sharia-compliant investment options and discover which strategy works best for Ontario Muslim investors.',
    type: 'website',
  },
}

export default function HalalInvestingGuidePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
              Halal Investing Guide: Real Estate vs. Stocks
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Make informed Sharia-compliant investment decisions with our comprehensive comparison guide. 
              Discover which investment strategy delivers better returns while staying true to Islamic principles.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free Download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sharia Board Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ontario-Specific Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Updated for 2024-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Benefits & Content Preview */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Sharia Compliance Fundamentals</h3>
                      <p className="text-muted-foreground text-sm">
                        Understanding riba, gharar, and haram sectors in both real estate and stock investments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Return Comparison Analysis</h3>
                      <p className="text-muted-foreground text-sm">
                        Historical performance data of halal real estate vs. Sharia-compliant stocks in Ontario
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Risk Assessment Framework</h3>
                      <p className="text-muted-foreground text-sm">
                        How to evaluate and manage risks in both asset classes while maintaining Sharia compliance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Diversification Strategies</h3>
                      <p className="text-muted-foreground text-sm">
                        Building a balanced halal portfolio combining real estate and equity investments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ontario Market Opportunities</h3>
                      <p className="text-muted-foreground text-sm">
                        Specific opportunities and platforms available to Ontario Muslim investors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="font-bold mb-4">What Investors Are Saying:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "This guide helped me understand why real estate outperforms stocks for halal investing. 
                      The Ontario-specific insights were exactly what I needed."
                    </p>
                    <p className="text-xs text-muted-foreground">- Sarah M., Toronto</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "Finally, a resource that addresses the real challenges of Sharia-compliant investing in Canada. 
                      The comparison framework is brilliant."
                    </p>
                    <p className="text-xs text-muted-foreground">- Ahmad K., Ottawa</p>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="font-bold text-amber-800 mb-2">⚡ Limited Time Insights</h3>
                <p className="text-amber-700 text-sm">
                  This guide includes exclusive 2024-2025 market forecasts and regulatory updates that won't be available publicly. 
                  Download now to stay ahead of market changes affecting halal investors.
                </p>
              </div>
            </div>

            {/* Right Column - Lead Magnet Form */}
            <div className="lg:sticky lg:top-8">
              <LeadMagnetForm
                leadMagnetType="halal-investing-guide"
                title="Get Your Free Guide"
                description="Enter your details below to receive instant access to the complete Halal Investing Guide"
                source="halal-investing-guide-page"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why This Guide Matters Now</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-3 text-primary">🏢 Real Estate Advantage</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Ontario real estate offers natural Sharia compliance with tangible assets, 
                  no interest-based structures, and consistent cash flow potential.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>5-6% annual returns typical</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Inflation hedge protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Physical asset backing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-3 text-primary">📈 Stock Market Challenges</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  While Sharia-compliant stocks exist, screening requirements and market volatility 
                  create additional complexity for halal investors.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Complex screening required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Higher volatility risk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Limited halal options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Make Informed Investment Decisions?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Download our comprehensive guide and join over 2,000 Muslim investors who've used these insights 
                to build successful, Sharia-compliant investment portfolios in Ontario.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>2,000+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>95% Find It Helpful</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Updated Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}