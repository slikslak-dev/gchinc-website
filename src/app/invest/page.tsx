import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Tiers — 5-6% Profit-Share, Zero Fees | GCHI',
  description: 'Two Sharia-compliant investment tiers outperforming GICs and conventional funds. Real estate backed, zero investor fees. Limited spots - apply now.',
}

export default function InvestPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Outperform GICs & Conventional Funds with Real Assets
            </h1>
            <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Our Sharia-compliant <strong>equity partnerships</strong> target <span className="text-primary font-bold">5-6% annual profit-share</span> from Ontario real estate - significantly higher than bank GICs (2-3%) and completely halal unlike volatile stock markets. <strong className="text-primary">Zero investor fees</strong> means you keep 100% of profits. <strong>Quarterly distributions</strong> begin after your first year, backed by tangible properties you can visit.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4 inline-block">
              <p className="text-primary font-semibold text-sm">
                ✅ Unlike most platforms that charge 1-2% annual fees, GCHI charges investors $0
              </p>
            </div>
          </div>
        
          {/* Enhanced Urgency Banner */}
          <div className="bg-gradient-to-r from-maple-red-50 to-primary/10 border-2 border-primary/30 rounded-xl p-6 mb-12 shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="animate-pulse text-red-500 text-xl">🔥</span>
                <h3 className="font-bold text-primary text-lg">Limited Spots in Current Funding Round</h3>
                <span className="animate-pulse text-red-500 text-xl">🔥</span>
              </div>
              <p className="text-primary font-semibold mb-2">Next round starts January 2026 - secure your tier now</p>
              <div className="bg-white rounded-lg p-3 inline-block border border-primary/30">
                <div className="text-2xl font-bold text-primary mb-1">7 / 15</div>
                <div className="text-sm text-primary">partnerships remaining</div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Application deadline: December 15th, 2025</p>
            </div>
          </div>
        
          {/* Enhanced Competitive Positioning */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why GCHI Outperforms Traditional Options</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Compare GCHI's real asset-backed returns with traditional investments and see why smart investors are making the switch.
              </p>
            </div>
            
            {/* Quick Comparison Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <h4 className="font-semibold text-charcoal-700 mb-1">Bank GICs</h4>
                <div className="text-xl font-bold text-charcoal-600">2-3%</div>
                <p className="text-sm text-charcoal-600">Declining rates + Interest-based</p>
              </div>
              <div className="bg-charcoal-50 border border-charcoal-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-semibold text-charcoal-700 mb-1">Stock Market</h4>
                <div className="text-xl font-bold text-charcoal-600">Volatile</div>
                <p className="text-sm text-charcoal-600">Unpredictable + Mixed compliance</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-primary mb-1">GCHI</h4>
                <div className="text-xl font-bold text-primary">5-6%</div>
                <p className="text-sm text-primary">Real assets + $0 fees</p>
              </div>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-xl border border-border">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <tr>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Investment Option</th>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Returns</th>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Annual Fees</th>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Sharia Status</th>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Asset Type</th>
                    <th className="text-left p-4 lg:p-6 font-bold text-slate-700">Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border hover:bg-charcoal-50/30 transition-colors">
                    <td className="p-4 lg:p-6">
                      <div className="font-medium text-charcoal-700">Bank GICs</div>
                      <div className="text-sm text-charcoal-500">Traditional savings</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-charcoal-600">2-3%</div>
                      <div className="text-sm text-charcoal-500">(declining)</div>
                    </td>
                    <td className="p-4 lg:p-6 text-charcoal-600">Low/None</td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-maple-red-100 text-maple-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        ❌ Interest-based
                      </span>
                    </td>
                    <td className="p-4 lg:p-6 text-charcoal-600">Bank deposits</td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        Low
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-border hover:bg-charcoal-50/30 transition-colors">
                    <td className="p-4 lg:p-6">
                      <div className="font-medium text-charcoal-700">Stock Market</div>
                      <div className="text-sm text-charcoal-500">Public equities</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-charcoal-600">Variable</div>
                      <div className="text-sm text-charcoal-500">(volatile)</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-maple-red-600">1-2%</div>
                      <div className="text-sm text-charcoal-500">Management fees</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-maple-red-100 text-maple-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        ❌ Mixed compliance
                      </span>
                    </td>
                    <td className="p-4 lg:p-6 text-charcoal-600">Corporate shares</td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-maple-red-100 text-maple-red-700 px-2 py-1 rounded-full text-xs">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-border hover:bg-charcoal-50/30 transition-colors">
                    <td className="p-4 lg:p-6">
                      <div className="font-medium text-charcoal-700">Islamic REITs</div>
                      <div className="text-sm text-charcoal-500">Wahed, others</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-charcoal-600">3-5%</div>
                      <div className="text-sm text-charcoal-500">(market dependent)</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-charcoal-600">1-2%</div>
                      <div className="text-sm text-charcoal-500">Platform + mgmt</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        ✅ Compliant
                      </span>
                    </td>
                    <td className="p-4 lg:p-6 text-charcoal-600">REIT shares</td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-charcoal-100 text-charcoal-700 px-2 py-1 rounded-full text-xs">
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-primary bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors">
                    <td className="p-4 lg:p-6">
                      <div className="font-bold text-primary text-lg">🏆 GCHI Partnerships</div>
                      <div className="text-sm text-primary/80 font-medium">Direct real estate equity</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-bold text-primary text-xl">5-6%</div>
                      <div className="text-sm text-primary font-medium">Target profit-share</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-bold text-primary text-lg">$0</div>
                      <div className="text-sm text-primary font-medium">Zero investor fees!</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        ✅ Fully Compliant
                      </span>
                    </td>
                    <td className="p-4 lg:p-6">
                      <div className="font-semibold text-primary">Direct ownership</div>
                      <div className="text-sm text-primary/80">Tangible properties</div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Moderate*
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                *Risk balanced by real asset backing and professional management
              </p>
            </div>
          </div>
        
          {/* Enhanced Investment Tiers */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Choose Your Partnership Tier</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Both tiers offer <span className="font-bold text-green-600">zero investor fees</span> - keeping 100% of your profits unlike most platforms that charge 1-2% annually.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Community Partner - Enhanced */}
              <div className="border-2 border-gray-200 p-8 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Community Partner</h3>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      🌟 Popular Choice
                    </span>
                    <span className="text-xs text-gray-500">67% of investors</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$10,000–$15,000</div>
                    <div className="text-xl mb-3">
                      <span className="font-bold text-2xl text-green-600">5%</span> 
                      <span className="text-gray-600"> target annual profit-share</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <div className="font-bold text-green-800 mb-1">💰 vs. Bank GIC Advantage:</div>
                    <div className="text-sm text-green-700">
                      Earn <strong>2-3% more annually</strong> with real asset backing + zero fees
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">Quarterly distributions</div>
                        <div className="text-sm text-gray-500">(after year 1)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">2-year minimum partnership</div>
                        <div className="text-sm text-gray-500">Flexible exit options</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium text-green-600">Zero investor fees</div>
                        <div className="text-sm text-green-600 font-medium">Save $100-300 annually vs competitors</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">Visit your properties anytime</div>
                        <div className="text-sm text-gray-500">Complete transparency</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-sm text-primary font-bold mb-1">
                      💬 Investor Testimonial:
                    </div>
                    <div className="text-sm text-gray-700 italic">
                      "Perfect entry point for halal real estate investing. The transparency and regular updates give me complete confidence."
                    </div>
                    <div className="text-xs text-gray-500 mt-1">- Ahmed K., Community Partner since 2024</div>
                  </div>
                </div>
              </div>
              
              {/* Growth Partner - Enhanced */}
              <div className="border-3 border-primary p-8 rounded-2xl hover:border-primary/70 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-primary/5 relative">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏆 Best Value
                </div>
                
                <div className="flex justify-between items-start mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-gray-800">Growth Partner</h3>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      📈 Higher Returns
                    </span>
                    <span className="text-xs text-gray-500">Fastest growing</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$15,000–$25,000</div>
                    <div className="text-xl mb-3">
                      <span className="font-bold text-2xl text-primary">6%</span> 
                      <span className="text-gray-600"> target annual profit-share</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-blue/10 p-4 rounded-lg border border-primary/30">
                    <div className="font-bold text-primary mb-1">🚀 Premium Advantage:</div>
                    <div className="text-sm text-primary/80">
                      <strong>Double typical GIC returns</strong> with complete Sharia compliance + priority access
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">Quarterly distributions</div>
                        <div className="text-sm text-gray-500">(after year 1)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">2-year minimum partnership</div>
                        <div className="text-sm text-gray-500">Premium exit flexibility</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium text-green-600">Zero investor fees</div>
                        <div className="text-sm text-green-600 font-medium">Save $300-500 annually vs REITs/funds</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium text-primary">Priority access to new developments</div>
                        <div className="text-sm text-primary/70">First choice on premium opportunities</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <div>
                        <div className="font-medium">Detailed quarterly property reports</div>
                        <div className="text-sm text-gray-500">Enhanced transparency</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-sm text-primary font-bold mb-1">
                      💬 Growth Partner Review:
                    </div>
                    <div className="text-sm text-gray-700 italic">
                      "Exceptional returns with complete peace of mind. The detailed reporting and priority access make this tier incredible value."
                    </div>
                    <div className="text-xs text-gray-500 mt-1">- Sarah M., Growth Partner since 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/* Enhanced Trust Building Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Backed by Real Performance & Assets</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our track record speaks for itself - real properties, real income, real transparency.
              </p>
            </div>
            
            {/* Featured Property Spotlight */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">🏢 Our Emmaville Property</h3>
                <p className="text-lg text-green-700 font-semibold">18 units generating stable income since March 2024</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">18</div>
                  <div className="text-sm text-gray-600">Rental Units</div>
                  <div className="text-xs text-green-600 font-medium mt-1">100% occupied</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">9</div>
                  <div className="text-sm text-gray-600">Months Operating</div>
                  <div className="text-xs text-green-600 font-medium mt-1">Consistent income</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">5.4%</div>
                  <div className="text-sm text-gray-600">Actual Return YTD</div>
                  <div className="text-xs text-green-600 font-medium mt-1">On track for target</div>
                </div>
              </div>
            </div>
            
            {/* Property Portfolio */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Emmaville Property</h4>
                    <p className="text-sm text-green-600">Active & Profitable</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  18-unit residential complex generating stable rental income with long-term tenants
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-xs text-green-700 font-medium">
                    📊 Performance: Meeting 5% target with room for growth
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Orangeville Medical</h4>
                    <p className="text-sm text-blue-600">Essential Services</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Healthcare facility with established medical practice providing stable, recession-resistant income
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-xs text-blue-700 font-medium">
                    🛡️ Stability: Long-term lease with healthcare provider
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Pipeline Ready</h4>
                    <p className="text-sm text-purple-600">Future Growth</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  4 additional projects planned through 2030 across high-growth Ontario markets
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-xs text-purple-700 font-medium">
                    📈 Expansion: Scaling proven investment model
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "The quarterly reports show exactly where my money is working. I can literally drive by and see the properties my investment is backing."
                    </p>
                    <div className="text-xs text-gray-500">- Fatima R., Community Partner</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "Finally found a halal investment that outperforms my old GICs. Zero fees means I keep everything I earn."
                    </p>
                    <div className="text-xs text-gray-500">- Omar H., Growth Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/* Risk Disclosure */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-6 rounded-xl mb-12">
            <div className="flex items-start gap-3">
              <div className="text-yellow-600 text-xl flex-shrink-0">⚠️</div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Investment Disclosure</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  <strong>Profit-share targets are not guaranteed</strong> and depend on actual property performance. While all investments carry risk, real estate provides <strong>tangible asset backing</strong> unlike stocks or bonds - you can visit your properties anytime. Risk is balanced through professional management, diversified portfolio, and conservative underwriting. Eligibility required (accredited or OM exemption). Review all risks and offering documents before investing.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center mb-8">
            {/* Urgency Counter */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-xl p-6 mb-8 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">⏰ Limited Spots Remaining</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">7</div>
                    <div className="text-sm text-red-600">Spots left</div>
                  </div>
                  <div className="text-red-500 text-2xl">/</div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-600">15</div>
                    <div className="text-sm text-gray-600">Total available</div>
                  </div>
                </div>
              </div>
              <div className="bg-red-600 h-2 rounded-full mb-2">
                <div className="bg-red-300 h-full rounded-full" style={{width: '47%'}}></div>
              </div>
              <p className="text-sm text-red-700 font-medium">
                Next funding round opens January 2026 • Application deadline: December 15th, 2025
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:justify-center mb-6">
              <a 
                href="/apply" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-blue-600/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block text-center no-underline"
              >
                🚀 Apply for Partnership
              </a>
              <button className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all">
                📋 Download Investment Guide
              </button>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
              <p className="text-sm text-green-700">
                ✅ <strong>Secure your spot with a 15-minute qualification call</strong><br/>
                <span className="text-xs">No obligation • Quick eligibility check • Same-day response</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}