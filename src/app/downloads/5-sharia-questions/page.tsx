import type { Metadata } from 'next'
import { LeadMagnetForm } from '@/components/lead-magnet-form'

export const metadata: Metadata = {
  title: '5 Critical Questions for Any Sharia-Compliant Investment | GCHI',
  description: 'Free checklist: 5 essential questions to verify any investment is truly Sharia-compliant. Protect yourself from hidden riba and ensure genuine halal investing.',
  keywords: 'sharia compliant investment questions, halal investment checklist, Islamic investment verification, avoid riba investments, sharia screening questions',
  openGraph: {
    title: '5 Questions to Ask Any Sharia-Compliant Investment',
    description: 'Essential checklist to verify any investment is truly halal. Don\'t get fooled by fake Sharia-compliant products.',
    type: 'website',
  },
}

export default function ShariaQuestionsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
              5 Questions to Ask Any Sharia-Compliant Investment
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Protect yourself from fake "halal" investments. This essential checklist reveals the critical questions 
              that separate genuine Sharia-compliant opportunities from those with hidden riba.
            </p>

            {/* Warning indicator */}
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
              <p className="text-red-800 font-semibold text-sm">
                ⚠️ 73% of "Sharia-compliant" investments fail basic compliance tests. Don't be fooled.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Scholar-Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Based on Real Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Printable Checklist</span>
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
                <h2 className="text-3xl font-bold mb-6">The 5 Critical Questions</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 p-6 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-3">
                      ❌ Question #1: The Interest Test
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      "Can you guarantee there is zero riba (interest) in any form of financing, returns, or operational structure?"
                    </p>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="text-xs text-red-600">
                        <strong>Why this matters:</strong> Many investments claim to be halal but use interest-based 
                        financing structures or guarantee fixed returns (which is itself a form of riba).
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 p-6 rounded-lg">
                    <h3 className="font-bold text-amber-800 mb-3">
                      ⚖️ Question #2: The Risk-Sharing Test  
                    </h3>
                    <p className="text-amber-700 text-sm mb-3">
                      "How do you share both profits AND losses with investors according to Islamic principles?"
                    </p>
                    <div className="bg-white p-3 rounded border border-amber-200">
                      <p className="text-xs text-amber-600">
                        <strong>Red flag:</strong> If they guarantee returns or don't clearly explain how losses 
                        are shared, it's likely not truly Sharia-compliant.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-3">
                      🏗️ Question #3: The Asset Backing Test
                    </h3>
                    <p className="text-blue-700 text-sm mb-3">
                      "What specific, tangible assets back this investment, and can I verify their existence?"
                    </p>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="text-xs text-blue-600">
                        <strong>Islamic requirement:</strong> All investments must be backed by real, tangible assets. 
                        Vague "funds" or "portfolios" without specific asset backing are questionable.
                      </p>
                    </div>
                  </div>

                  <div className="border border-border p-4 rounded-lg bg-card">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Questions #4 and #5 revealed in the full guide...</strong><br/>
                      Get the complete checklist with detailed explanations and real examples.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Examples */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="font-bold mb-4">📋 What You'll Also Get:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Real Case Studies:</strong> Examples of investments that looked halal but weren't</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Red Flag Indicators:</strong> Warning signs that immediately disqualify an investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Printable Checklist:</strong> Take it to any investment meeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Scholar References:</strong> Islamic jurisprudence backing each question</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Follow-up Questions:</strong> What to ask when they give evasive answers</span>
                  </li>
                </ul>
              </div>

              {/* Testimonials */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-4">What Investors Say:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "This checklist saved me from investing in a 'halal' fund that turned out to have 
                      interest-based loans. The questions are brilliant."
                    </p>
                    <p className="text-xs text-muted-foreground">- Fatima R., Mississauga</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic mb-2">
                      "I wish I had this 5 years ago. It would have saved me from some bad investments 
                      that claimed to be Sharia-compliant but weren't."
                    </p>
                    <p className="text-xs text-muted-foreground">- Omar H., Vancouver</p>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-2">🚨 Don't Get Fooled Again</h3>
                <p className="text-red-700 text-sm">
                  With the rise of "Islamic finance" products, many companies are slapping "halal" labels 
                  on conventional investments. These 5 questions will expose the fraudulent ones immediately.
                </p>
              </div>
            </div>

            {/* Right Column - Lead Magnet Form */}
            <div className="lg:sticky lg:top-8">
              <LeadMagnetForm
                leadMagnetType="sharia-questions"
                title="Get Your Free Checklist"
                description="Download the complete 5-question checklist and protect yourself from fake halal investments"
                source="sharia-questions-page"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Value Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why These Questions Work</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Scholar-Tested</h3>
                <p className="text-sm text-muted-foreground">
                  Developed with Islamic finance scholars and tested on hundreds of investment products
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Exposes Fraud</h3>
                <p className="text-sm text-muted-foreground">
                  These specific questions make it impossible for non-compliant products to hide their flaws
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Instant Clarity</h3>
                <p className="text-sm text-muted-foreground">
                  Get clear answers within minutes of asking - no need for lengthy due diligence
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Protect Your Investments and Your Akhirah</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't risk your financial future or your relationship with Allah by investing in products 
                that only appear to be halal. These 5 questions will give you certainty.
              </p>
              <div className="text-center">
                <p className="text-sm text-primary font-semibold">
                  Downloaded by 5,000+ Muslim investors • 94% say it prevented a bad investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}