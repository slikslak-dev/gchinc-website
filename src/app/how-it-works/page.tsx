'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import { CompactTimeline } from '@/components/compact-timeline'

interface FAQItem {
  question: string
  answer: string
}

interface ProcessStepProps {
  stepNumber: number
  title: string
  description: string
  timeframe: string
  shariaNote?: string
  checklist: string[]
  faqs?: FAQItem[]
  trustElement?: string
  isLast?: boolean
}

function ProcessStep({ 
  stepNumber, 
  title, 
  description, 
  timeframe, 
  shariaNote, 
  checklist, 
  faqs = [], 
  trustElement,
  isLast = false 
}: ProcessStepProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-32 w-px h-24 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-px z-0" />
      )}
      
      {/* Step Container */}
      <div 
        className="grid md:grid-cols-2 gap-8 items-start relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content Side */}
        <div className={`transition-all duration-300 ${isHovered ? 'transform translate-y-[-2px]' : ''}`}>
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mr-4 transition-all duration-300 ${isHovered ? 'scale-110 shadow-lg' : ''}`}>
              {stepNumber}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <div className="flex items-center text-sm text-primary font-medium mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {timeframe}
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          
          {/* Sharia Compliance Note */}
          {shariaNote && (
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 p-4 rounded-lg mb-4">
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary text-sm mb-1">Sharia Compliance</div>
                  <div className="text-primary/80 text-sm">{shariaNote}</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Trust Element */}
          {trustElement && (
            <div className="bg-charcoal-50 border border-charcoal-200 p-3 rounded-lg text-sm mb-4">
              <strong className="text-primary">Trust Indicator:</strong>
              <span className="text-charcoal-700 ml-1">{trustElement}</span>
            </div>
          )}
          
          {/* Inline FAQs */}
          {faqs.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Common Questions</h4>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border/50 rounded-lg">
                    <button
                      className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-accent/50 transition-colors flex items-center justify-between"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    >
                      {faq.question}
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-3 text-sm text-muted-foreground border-t border-border/30 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Visual Side */}
        <div className={`bg-gradient-to-br from-muted to-muted/70 p-8 rounded-xl transition-all duration-300 ${isHovered ? 'shadow-lg transform translate-y-[-2px]' : 'shadow'}`}>
          <div className="mb-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4">
              {stepNumber}
            </div>
            <div className="text-sm font-medium text-muted-foreground mb-4">STEP {stepNumber} CHECKLIST</div>
          </div>
          
          <div className="space-y-3">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Next Step Arrow */}
          {!isLast && (
            <div className="mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center text-xs text-primary font-medium">
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            From Application to Partnership
          </h1>
          <div className="text-2xl font-semibold mb-8 text-muted-foreground">
            in 2-3 Weeks
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlike complex investment platforms, our process is <strong className="text-primary">refreshingly simple</strong>. 
            Most qualified investors complete the entire process in 2-3 weeks and begin receiving quarterly profit distributions after their first year.
          </p>
        </div>
        
        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
            <div className="text-xs text-muted-foreground mt-1">Qualified applicants funded within 3 weeks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">14</div>
            <div className="text-sm text-muted-foreground">Average Days</div>
            <div className="text-xs text-muted-foreground mt-1">From application to funding completion</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Sharia Compliant</div>
            <div className="text-xs text-muted-foreground mt-1">All investments follow Islamic principles</div>
          </div>
        </div>
        
        {/* Compact Timeline */}
        <CompactTimeline steps={[
          {
            phase: 'Day 0-1',
            title: 'Application & Immediate Response',
            timeframe: 'Immediate',
            description: 'Submit application, receive confirmation within 2 hours',
            details: [
              'Investment amount preference ($50K-$5M+)',
              'Accredited investor eligibility',
              'Contact methods and timing',
              'Timeline expectations',
              'Sharia compliance requirements',
              'Risk tolerance assessment'
            ]
          },
          {
            phase: 'Day 2-7',
            title: 'Personal Consultation',
            timeframe: '15-20 minutes',
            description: 'Friendly phone call to discuss goals and answer questions about our Sharia-compliant approach',
            details: [
              'Portfolio walkthrough with current properties',
              'Sharia compliance methodology explained',
              'Risk factors and return expectations',
              'Fee structure and partnership terms',
              'Investor rights and responsibilities',
              'Open Q&A session'
            ]
          },
          {
            phase: 'Week 2-3',
            title: 'Document Review',
            timeframe: 'At your pace',
            description: 'Receive complete offering memorandum and take as much time as needed',
            details: [
              'Complete SEC-compliant offering memorandum',
              'Audited financial statements (3+ years)',
              'Detailed partnership agreements',
              'Individual property performance reports',
              'Sharia compliance certification',
              'Market analysis and projections'
            ]
          },
          {
            phase: 'Day 14-21',
            title: 'Secure Funding',
            timeframe: 'Upon decision',
            description: 'Simple electronic transfer with immediate allocation to income-producing properties',
            details: [
              'Wire transfer to segregated trust account',
              'Immediate allocation to halal properties',
              'Detailed investment allocation report',
              'Welcome package with property details',
              'Partnership certificates issued',
              'Online investor portal access'
            ]
          },
          {
            phase: 'Quarterly',
            title: 'Reports & Distributions',
            timeframe: 'Ongoing',
            description: 'Detailed reports and profit distributions begin after month 12',
            details: [
              'Detailed quarterly performance reports',
              'Direct bank transfers of profit distributions',
              'Comprehensive tax documentation (K-1s)',
              'Annual investor meetings and property tours',
              'Online portal with 24/7 document access',
              'Dedicated investor relations support'
            ]
          }
        ]} />
        {/* Interactive Process Steps */}
        <div className="space-y-16">
          <ProcessStep
            stepNumber={1}
            title="Quick Application (5 minutes)"
            timeframe="Day 0 - Immediate"
            description="Simple online form covering your investment goals, timeline, and eligibility status. No lengthy financial statements or complex paperwork at this stage."
            shariaNote="Application includes questions about Islamic finance preferences and Sharia compliance requirements."
            checklist={[
              'Investment amount preference ($50K-$5M+)',
              'Accredited investor or OM 506(b) eligibility',
              'Preferred contact methods and timing',
              'Timeline expectations and urgency',
              'Sharia compliance requirements',
              'Initial risk tolerance assessment'
            ]}
            trustElement="You'll receive an email confirmation within 2 hours and a call invitation within 24 hours."
            faqs={[
              {
                question: 'Do I need to provide financial documents now?',
                answer: 'No, the initial application only requires basic information. Detailed financial documentation comes later in the process if you choose to proceed.'
              },
              {
                question: 'Is the application legally binding?',
                answer: 'Not at all. The application is purely informational and creates no obligations on either side.'
              }
            ]}
          />
          
          <ProcessStep
            stepNumber={2}
            title="Personal Consultation (15-20 minutes)"
            timeframe="Day 1-2 - Scheduled"
            description="Friendly phone call with our team to discuss your investment goals, answer questions about our Sharia-compliant approach, and ensure GCHI partnerships align with your values and objectives."
            shariaNote="Detailed discussion of Islamic finance principles: no interest (riba), no speculation (gharar), no prohibited industries (haram). Our Sharia advisor available for additional questions."
            checklist={[
              'Portfolio walkthrough with current properties',
              'Sharia compliance methodology explained',
              'Risk factors and return expectations',
              'Fee structure and partnership terms',
              'Investor rights and responsibilities',
              'Open Q&A session'
            ]}
            trustElement="This is purely educational - you'll have time to think after our conversation. No pressure, no rush."
            faqs={[
              {
                question: 'Will you pressure me to invest during the call?',
                answer: 'Never. Our goal is education and transparency. We want you to make an informed decision that\'s right for your situation.'
              },
              {
                question: 'Can I bring my financial advisor to the call?',
                answer: 'Absolutely. We encourage you to involve your trusted advisors in the decision-making process.'
              },
              {
                question: 'What if I have Sharia compliance questions?',
                answer: 'Our certified Sharia advisor is available for detailed discussions about Islamic finance principles and compliance.'
              }
            ]}
          />
          
          <ProcessStep
            stepNumber={3}
            title="Document Review (Your Timeline)"
            timeframe="Day 3-14 - At Your Pace"
            description="Receive complete offering memorandum, audited financial statements, and partnership agreements. Take as much time as you need - no rush. Sharia advisor guidance available for Islamic compliance questions."
            shariaNote="All documents include detailed Sharia compliance analysis. Our Islamic finance expert reviews every investment for adherence to Islamic principles."
            checklist={[
              'Complete SEC-compliant offering memorandum',
              'Audited financial statements (3+ years)',
              'Detailed partnership agreements',
              'Individual property performance reports',
              'Sharia compliance certification',
              'Market analysis and projections'
            ]}
            trustElement="Every document, every risk, every detail - exactly what you'd expect from neighbors you trust."
            faqs={[
              {
                question: 'How long do I have to review the documents?',
                answer: 'Take as long as you need. Most investors spend 3-7 days reviewing, but there\'s no deadline pressure from our side.'
              },
              {
                question: 'Can my attorney review the partnership agreements?',
                answer: 'We strongly encourage legal review. We\'ve worked with hundreds of attorneys and can provide references if needed.'
              },
              {
                question: 'Are all investments Sharia compliant?',
                answer: 'Yes, every property and tenant is screened for Islamic compliance. We maintain ongoing monitoring to ensure continued adherence.'
              }
            ]}
          />
          
          <ProcessStep
            stepNumber={4}
            title="Secure Funding Transfer"
            timeframe="Day 14-21 - Upon Decision"
            description="Simple electronic transfer to our trust account. Your funds are immediately allocated to current income-producing properties and upcoming development projects. You'll receive a detailed allocation report within 48 hours."
            shariaNote="Funds are immediately deployed in halal-certified properties. No temporary interest-bearing accounts - direct allocation to real estate assets only."
            checklist={[
              'Wire transfer to segregated trust account',
              'Immediate allocation to halal properties',
              'Detailed investment allocation report',
              'Welcome package with property details',
              'Partnership certificates issued',
              'Online investor portal access'
            ]}
            trustElement="All funds held in segregated trust accounts, fully audited and insured by FDIC-member institutions."
            faqs={[
              {
                question: 'How quickly are my funds deployed?',
                answer: 'Within 24-48 hours of receipt. We maintain a ready pipeline of vetted, halal properties for immediate allocation.'
              },
              {
                question: 'What if I need to withdraw my investment?',
                answer: 'While these are long-term partnerships, we maintain a secondary market and redemption options detailed in your partnership agreement.'
              },
              {
                question: 'How do I track my investment?',
                answer: 'You\'ll receive login credentials to our investor portal where you can view your properties, performance, and documents 24/7.'
              }
            ]}
          />
          
          <ProcessStep
            stepNumber={5}
            title="Professional Management & Growth"
            timeframe="Ongoing - Continuous"
            description="Sit back while our experienced team handles everything: property management, tenant relations, maintenance, development oversight, and halal compliance screening. You'll receive detailed updates but don't need to worry about day-to-day operations."
            shariaNote="Continuous monitoring ensures all tenants and property uses remain Sharia compliant. Monthly compliance reviews by our Islamic finance team."
            checklist={[
              'In-house professional property management',
              'Sharia-compliant tenant screening',
              'Development project oversight',
              'Regular property inspections and maintenance',
              'Monthly compliance monitoring',
              'Performance optimization strategies'
            ]}
            trustElement="Your involvement: As much or as little as you want. Visit properties anytime, attend annual meetings, or simply receive reports."
            faqs={[
              {
                question: 'Can I visit my properties?',
                answer: 'Absolutely. You\'re welcome to visit any properties in your portfolio. Just give us a call to coordinate timing.'
              },
              {
                question: 'What happens if a tenant violates Sharia principles?',
                answer: 'We have strict monitoring and immediate remediation procedures. Non-compliant tenants are given notice to cure or vacate.'
              },
              {
                question: 'How involved can I be in management decisions?',
                answer: 'Partnership agreements detail your rights. Major decisions are discussed with partners, day-to-day operations are handled by our team.'
              }
            ]}
          />
          
          <ProcessStep
            stepNumber={6}
            title="Quarterly Reports & Profit Sharing"
            timeframe="Quarterly - Ongoing"
            description="Receive detailed quarterly reports showing property performance, rental income, expenses, and your share of profits. Profit distributions begin after your first 12 months, paid directly to your bank account based on actual property performance."
            shariaNote="All profit distributions follow Islamic profit-sharing principles (Mudarabah/Musharakah). No guaranteed returns, only actual performance-based distributions."
            checklist={[
              'Detailed quarterly performance reports',
              'Direct bank transfers of profit distributions',
              'Comprehensive tax documentation (K-1s)',
              'Annual investor meetings and property tours',
              'Online portal with 24/7 access to documents',
              'Dedicated investor relations support'
            ]}
            trustElement="Complete transparency: Every dollar in, every dollar out, every decision explained in clear, honest language."
            faqs={[
              {
                question: 'When do distributions start?',
                answer: 'Profit distributions begin after your first 12 months, paid quarterly thereafter based on actual property performance.'
              },
              {
                question: 'Are returns guaranteed?',
                answer: 'No. As required by Islamic finance principles, returns are based on actual property performance and economic conditions.'
              },
              {
                question: 'How are profits calculated?',
                answer: 'Net rental income minus expenses, allocated proportionally to your investment amount according to partnership terms.'
              }
            ]}
            isLast={true}
          />
        </div>
        
        {/* Enhanced Success Stories Section */}
        <div className="mt-20 bg-gradient-to-br from-white to-accent/20 border border-border/50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-8 text-center">Real Investor Experiences</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">14 days</div>
              <div className="text-sm text-muted-foreground mb-3">Average time from application to funding</div>
              <div className="text-xs italic text-muted-foreground">"Faster than opening a new bank account!" - Tier 2 Investor</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground mb-3">Quarterly reports delivered on time</div>
              <div className="text-xs italic text-muted-foreground">"Never missed a report in 2+ years" - Community Partner</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
              <div className="text-sm text-muted-foreground mb-3">Average investor partnership size</div>
              <div className="text-xs italic text-muted-foreground">"Started with $500K, now at $2.1M" - Long-term Partner</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground mb-3">Investor satisfaction rating</div>
              <div className="text-xs italic text-muted-foreground">"Exceeds expectations consistently" - Recent Review</div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border/30">
            <div className="flex items-center justify-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">SEC Registered</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Check className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Sharia Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Est. 2019</span>
            </div>
          </div>
        </div>
        
        {/* Additional FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-border/50">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Is this really Sharia compliant?</h4>
                <p className="text-sm text-muted-foreground">Yes, all investments are reviewed by our certified Sharia board and follow Islamic finance principles including no interest, no speculation, and no prohibited industries.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What makes GCHI different?</h4>
                <p className="text-sm text-muted-foreground">We're the only SEC-registered, Sharia-compliant real estate investment platform focused exclusively on community-building and long-term partnerships.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">How liquid are these investments?</h4>
                <p className="text-sm text-muted-foreground">These are long-term partnerships (3-7 years typical), but we maintain options for early exit through our secondary market when possible.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's the minimum investment?</h4>
                <p className="text-sm text-muted-foreground">$50,000 for accredited investors, with opportunities for qualified non-accredited investors under Regulation D 506(b).</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Partnership Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Most investors tell us the hardest part was waiting to get started. The process is simpler than you think, and we're here to guide you every step of the way.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Application (5 min)
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Schedule a Quick Call
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-primary" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-primary" />
              <span>5-minute application</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-primary" />
              <span>Expert guidance</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Questions? Check our <a href="/faqs" className="text-primary hover:underline font-medium">detailed FAQs</a> or call us directly at (555) 123-4567
          </p>
        </div>
      </main>
    </div>
  )
}