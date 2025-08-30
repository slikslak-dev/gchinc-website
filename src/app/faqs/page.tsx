'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

// FAQ data structure
interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQ[] = [
  // Sharia Compliance FAQs
  {
    id: 'sharia-1',
    question: 'Is this halal/Sharia-compliant?',
    answer: 'Yes, absolutely. GCHI operates under a fully Sharia-compliant structure reviewed by qualified Islamic scholars. We use equity partnership models (Musharakah) instead of interest-based loans, ensuring complete avoidance of riba. All investments are structured as profit-and-loss sharing partnerships, where returns come from permissible rental income and property appreciation.',
    category: 'Sharia Compliance'
  },
  {
    id: 'sharia-2',
    question: 'How do you avoid riba (interest) in your investments?',
    answer: 'We completely avoid riba by using equity-based partnerships rather than debt financing. Instead of charging or paying interest, we structure investments as profit-sharing partnerships where investors become partial owners of the underlying real estate assets. Returns are generated from actual rental income and property value appreciation, not predetermined interest rates.',
    category: 'Sharia Compliance'
  },
  {
    id: 'sharia-3',
    question: 'What is your permissible tenant policy?',
    answer: 'We maintain strict tenant screening policies to ensure Sharia compliance. We exclude businesses involved in: alcohol sales or production, gambling, adult entertainment, cannabis retail, conventional banking or interest-based financial services, and other haram activities. Our due diligence team reviews all potential tenants to ensure they align with Islamic principles.',
    category: 'Sharia Compliance'
  },
  {
    id: 'sharia-4',
    question: 'How should I consider Zakat on my GCHI investment?',
    answer: 'Zakat obligations are personal and should be calculated according to your individual circumstances. We provide detailed quarterly profit reports and annual statements that show your share of rental income and property values to assist in your Zakat calculations. We recommend consulting with a qualified Islamic scholar or advisor for specific Zakat guidance.',
    category: 'Sharia Compliance'
  },
  {
    id: 'sharia-5',
    question: 'Who oversees the Sharia compliance of your investments?',
    answer: 'Our Sharia compliance is overseen by qualified Islamic scholars who review our investment structures, tenant policies, and operational procedures. We maintain ongoing advisory relationships to ensure all aspects of our business remain fully compliant with Islamic principles.',
    category: 'Sharia Compliance'
  },
  
  // Investment Process FAQs
  {
    id: 'process-1',
    question: 'What are the eligibility requirements to invest with GCHI?',
    answer: 'To invest with GCHI, you must be an accredited investor as defined by securities regulations, have a minimum investment capacity of $25,000 CAD, pass our Know Your Customer (KYC) and Anti-Money Laundering (AML) screening, and be able to commit to our minimum 2-year investment term. We welcome both individual and institutional investors who share our commitment to Sharia-compliant investing.',
    category: 'Investment Process'
  },
  {
    id: 'process-2',
    question: 'What is the minimum investment commitment?',
    answer: 'The minimum investment is $25,000 CAD with a required 2-year commitment period. This allows us to make strategic, long-term property investments while maintaining operational efficiency. Larger commitments may qualify for preferential terms and enhanced investor services.',
    category: 'Investment Process'
  },
  {
    id: 'process-3',
    question: 'Can I redeem my investment early?',
    answer: 'Early redemptions are limited and subject to specific conditions outlined in our offering documents. While we understand that circumstances can change, our investment strategy is built around long-term holds. Early redemption requests are evaluated case-by-case and may be subject to penalties or waiting periods to protect the interests of all investors.',
    category: 'Investment Process'
  },
  {
    id: 'process-4',
    question: 'What tax documentation will I receive?',
    answer: 'You will receive comprehensive tax documentation including annual T3 slips (for Canadian investors), detailed profit and loss statements, and property ownership documentation. We work with qualified tax professionals to ensure all documentation meets CRA requirements. International investors will receive appropriate documentation for their tax jurisdiction.',
    category: 'Investment Process'
  },
  {
    id: 'process-5',
    question: 'How long does the investment application process take?',
    answer: 'The typical application process takes 2-4 weeks from initial application to funding. This includes document review, KYC/AML verification, consultation calls, and final approval. We may expedite the process for qualified investors with complete documentation.',
    category: 'Investment Process'
  },
  
  // Returns & Performance
  {
    id: 'returns-1',
    question: 'What returns can I expect from my investment?',
    answer: 'While we target annual returns of 8-12%, actual returns depend on property performance, rental income, and market conditions. Returns are not guaranteed and may vary quarterly. We focus on sustainable, long-term growth rather than short-term speculation, with distributions typically beginning after your first 12 months.',
    category: 'Returns & Performance'
  },
  {
    id: 'returns-2',
    question: 'How often are profits distributed?',
    answer: 'Profit distributions are made quarterly, typically within 45 days of quarter-end. Distributions begin after your first 12 months of investment and are subject to actual profits generated by the properties. All distributions are based on your proportional ownership share.',
    category: 'Returns & Performance'
  },
  {
    id: 'returns-3',
    question: 'What happens if profits are lower than expected?',
    answer: 'Distributions adjust to reflect actual performance - targets are projections, not guarantees. As with any real estate investment, your capital is at risk. We maintain conservative underwriting standards and diversified property portfolios to minimize risk, but market conditions can impact performance.',
    category: 'Returns & Performance'
  },
  
  // Fees & Costs
  {
    id: 'fees-1',
    question: 'Are there any investor fees?',
    answer: 'GCHI does not charge management fees, administration fees, or performance fees to investors. Our compensation comes from property management and development activities. This fee-free structure ensures that more of your investment capital is working for you.',
    category: 'Fees & Costs'
  },
  {
    id: 'fees-2',
    question: 'Are there any hidden costs I should know about?',
    answer: 'There are no hidden fees. All costs are transparently disclosed in our offering documents, including legal fees for documentation, third-party property management costs, and regulatory compliance expenses. These operational costs are factored into our return projections.',
    category: 'Fees & Costs'
  },
  
  // Risk & Security
  {
    id: 'risk-1',
    question: 'What are the main risks of investing with GCHI?',
    answer: 'Key risks include real estate market fluctuations, tenant vacancy periods, property maintenance costs, interest rate changes affecting property values, regulatory changes, and the illiquid nature of real estate investments. We mitigate these through diversification, conservative underwriting, and professional property management.',
    category: 'Risk & Security'
  },
  {
    id: 'risk-2',
    question: 'How do you protect investor capital?',
    answer: 'We protect investor capital through conservative property acquisition criteria, comprehensive due diligence, diversified property portfolios, professional property management, regular property inspections and maintenance, and comprehensive insurance coverage. All investor funds are held in segregated accounts.',
    category: 'Risk & Security'
  },
  
  // Reporting & Transparency
  {
    id: 'reporting-1',
    question: 'What reporting do you provide to investors?',
    answer: 'Investors receive quarterly financial statements, annual audited reports, detailed property performance reports, market updates, and tax documentation. We also provide access to an investor portal with real-time performance tracking and document access.',
    category: 'Reporting & Transparency'
  },
  {
    id: 'reporting-2',
    question: 'Do you provide audited financials?',
    answer: 'Yes, we provide annual audited financial statements prepared by a Big 4 accounting firm. These are available during due diligence and through our investor materials. Quarterly statements are reviewed by our external accountants.',
    category: 'Reporting & Transparency'
  },
  
  // Getting Started
  {
    id: 'start-1',
    question: 'How do I get started with GCHI?',
    answer: 'Getting started is simple: 1) Complete our online application, 2) Schedule a consultation call with our team, 3) Review and sign offering documents, 4) Complete KYC/AML verification, 5) Fund your investment. Our team guides you through each step of the process.',
    category: 'Getting Started'
  },
  {
    id: 'start-2',
    question: 'What documents do I need to provide?',
    answer: 'Required documents include: government-issued photo ID, proof of income/assets (T1 General, investment statements), proof of accredited investor status, banking information for funding, and completed subscription agreements. International investors may need additional documentation.',
    category: 'Getting Started'
  }
]

const categories = [
  'All',
  'Sharia Compliance',
  'Investment Process',
  'Returns & Performance',
  'Fees & Costs',
  'Risk & Security',
  'Reporting & Transparency',
  'Getting Started'
]

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about Sharia-compliant real estate investing with GCHI. 
            Find everything you need to know about our halal investment process, returns, and compliance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Results Summary */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="mb-8 text-center">
              <p className="text-muted-foreground">
                Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          )}

          {/* FAQ Grid */}
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {filteredFAQs.map(faq => {
              const isExpanded = expandedItems.has(faq.id)
              return (
                <div
                  key={faq.id}
                  className="group border border-border bg-card hover:bg-card/80 rounded-lg transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.881-6.08-2.33m0 0L5.64 13c-.275-.275-.275-.72 0-.99l4.95-4.95" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">No FAQs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or select a different category.
              </p>
              <button
                onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
                className="text-primary hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of Sharia-compliant investment specialists is here to help. 
              Schedule a consultation to discuss your specific situation and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply to Invest
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center border border-border bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}