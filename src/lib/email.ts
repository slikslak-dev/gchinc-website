import type { InvestorApplicationData, EmailResponse, TierBenefits, LeadMagnetData, NurtureEmailTemplate } from './types'

// Edge-compatible email service using fetch API
function getEmailConfig() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
    FROM_EMAIL: process.env.FROM_EMAIL || '',
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
    REPLY_TO_EMAIL: process.env.REPLY_TO_EMAIL || '',
  }
}

async function sendEmail(params: {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
}): Promise<{ success: boolean; data?: any; error?: string }> {
  const config = getEmailConfig()
  
  if (!config.RESEND_API_KEY) {
    return { success: false, error: 'RESEND_API_KEY not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: config.FROM_EMAIL,
        to: params.to,
        subject: params.subject,
        html: params.html,
        reply_to: params.replyTo || config.REPLY_TO_EMAIL,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return { 
        success: false, 
        error: `Resend API error (${response.status}): ${errorText}` 
      }
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    }
  }
}

// Investment tier information for email templates
const INVESTMENT_TIERS: Record<string, TierBenefits> = {
  '10k-15k': {
    title: 'Community Partner',
    amount: '$10,000 - $15,000',
    returnRate: '5%',
    benefits: [
      'Quarterly distributions after year 1',
      '2-year minimum partnership',
      'Zero investor fees',
      'Visit properties anytime',
      'Complete transparency'
    ],
    color: '#059669' // green-600
  },
  '15k-25k': {
    title: 'Growth Partner',
    amount: '$15,000 - $25,000',
    returnRate: '6%',
    benefits: [
      'Quarterly distributions after year 1',
      '2-year minimum partnership',
      'Zero investor fees',
      'Priority access to new developments',
      'Detailed quarterly property reports',
      'Enhanced exit flexibility'
    ],
    color: '#C62828' // Maple Red
  },
  '25k-50k': {
    title: 'Premium Partner',
    amount: '$25,000 - $50,000',
    returnRate: '6%+',
    benefits: [
      'All Growth Partner benefits',
      'Expedited onboarding',
      'Direct line to management team',
      'Custom investment strategies available'
    ],
    color: '#C62828'
  },
  '50k+': {
    title: 'Elite Partner',
    amount: '$50,000+',
    returnRate: '6%+',
    benefits: [
      'All Premium Partner benefits',
      'Co-investment opportunities',
      'Board observer rights (select projects)',
      'Custom partnership terms'
    ],
    color: '#C62828'
  }
}

// Base email styles
const BASE_STYLES = `
  <style>
    .email-container { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }
    .header { background: linear-gradient(135deg, #C62828 0%, #1565C0 100%); color: white; padding: 32px 24px; text-align: center; }
    .content { padding: 32px 24px; background: white; }
    .footer { background: #f8f9fa; padding: 24px; text-align: center; border-top: 1px solid #e9ecef; }
    .card { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 24px; margin: 20px 0; }
    .highlight { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 16px; margin: 16px 0; }
    .button { background: linear-gradient(135deg, #C62828 0%, #1565C0 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; }
    .button:hover { opacity: 0.9; }
    .tier-badge { background: #059669; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .urgency { background: #fee2e2; border: 1px solid #fca5a5; color: #991b1b; padding: 12px; border-radius: 8px; margin: 16px 0; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e9ecef; }
    th { background: #f8f9fa; font-weight: 600; }
    .text-green { color: #059669; }
    .text-red { color: #C62828; }
    .text-muted { color: #6c757d; }
    .mb-4 { margin-bottom: 16px; }
    .mt-4 { margin-top: 16px; }
    .small { font-size: 14px; }
    .bold { font-weight: 600; }
  </style>
`

export class EmailService {
  static async sendAdminNotification(applicationData: InvestorApplicationData): Promise<EmailResponse> {
    try {
      const tier = INVESTMENT_TIERS[applicationData.investmentAmount] || {
        title: 'Custom Amount',
        amount: applicationData.investmentAmount,
        returnRate: 'TBD',
        benefits: [],
        color: '#6c757d'
      }

      const eligibilityText = applicationData.eligibilityStatus.length > 0 
        ? applicationData.eligibilityStatus.join(', ') 
        : 'Not specified'

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>New Investor Application - GCHI</title>
          ${BASE_STYLES}
        </head>
        <body class="email-container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🚨 New Investor Application</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Immediate action required - 24-hour response commitment</p>
          </div>
          
          <div class="content">
            <div class="urgency">
              <strong>⏰ Priority Action Required</strong><br>
              Respond within 24 hours as per our service commitment
            </div>

            <h2 style="color: #C62828; margin-bottom: 24px;">Applicant Details</h2>
            
            <table>
              <tr>
                <th style="width: 30%;">Field</th>
                <th>Information</th>
              </tr>
              <tr>
                <td><strong>Name</strong></td>
                <td>${applicationData.fullName}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td><a href="mailto:${applicationData.email}">${applicationData.email}</a></td>
              </tr>
              <tr>
                <td><strong>Phone</strong></td>
                <td><a href="tel:${applicationData.phone}">${applicationData.phone}</a></td>
              </tr>
              <tr>
                <td><strong>Location</strong></td>
                <td>${applicationData.province}</td>
              </tr>
            </table>

            <h3 style="color: #C62828; margin: 24px 0 16px 0;">Investment Profile</h3>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <span class="tier-badge" style="background: ${tier.color};">${tier.title}</span>
                <strong style="font-size: 18px;">${tier.amount}</strong>
                <span class="text-green bold">${tier.returnRate} target return</span>
              </div>
              
              <table>
                <tr>
                  <td><strong>Investor Type</strong></td>
                  <td style="text-transform: capitalize;">${applicationData.investorType.replace('-', ' ')}</td>
                </tr>
                <tr>
                  <td><strong>Eligibility Status</strong></td>
                  <td>${eligibilityText}</td>
                </tr>
                <tr>
                  <td><strong>Investment Timeline</strong></td>
                  <td style="text-transform: capitalize;">${applicationData.investmentTimeline.replace('-', ' ')}</td>
                </tr>
              </table>
            </div>

            ${applicationData.notes ? `
            <h3 style="color: #C62828;">Additional Notes</h3>
            <div class="card">
              <p style="margin: 0; white-space: pre-wrap;">${applicationData.notes}</p>
            </div>
            ` : ''}

            <div class="highlight">
              <h3 style="margin: 0 0 12px 0; color: #856404;">📞 Immediate Next Steps</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Schedule initial call within 24 hours</strong></li>
                <li>Assess ${tier.title.toLowerCase()} tier eligibility</li>
                <li>Send investment package and disclosure documents</li>
                <li>Confirm ${applicationData.investmentAmount.replace('-', ' to ').replace('k', ',000').replace('+', '+')} investment readiness</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 32px 0;">
              <a href="mailto:${applicationData.email}?subject=GCHI Investment Application - Next Steps&body=Hi ${applicationData.fullName.split(' ')[0]},%0A%0AThank you for your investment application. I'd like to schedule a brief 15-minute call to discuss the ${tier.title} partnership and answer your questions.%0A%0APlease let me know your availability this week.%0A%0ABest regards,%0AGCHI Team" class="button">
                📧 Reply to Applicant
              </a>
            </div>

            <div class="small text-muted mt-4">
              <strong>Application Metadata:</strong><br>
              Submitted: ${new Date(applicationData.submittedAt).toLocaleString()}<br>
              Form completion time: ${Math.round(applicationData.formTimeTaken / 1000)} seconds<br>
              Privacy consent: ✅ Confirmed
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              GCHI Internal System • 
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin" style="color: #C62828;">Admin Dashboard</a>
            </p>
          </div>
        </body>
        </html>
      `

      const config = getEmailConfig()
      const result = await sendEmail({
        to: config.ADMIN_EMAIL,
        subject: `🚨 New ${tier.title} Application - ${applicationData.fullName}`,
        html,
        replyTo: applicationData.email,
      })

      return { success: result.success, messageId: result.data?.id }
    } catch (error) {
      console.error('Failed to send admin notification:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }

  static async sendLeadMagnetEmail(leadData: LeadMagnetData): Promise<EmailResponse> {
    try {
      const leadMagnets = {
        'halal-investing-guide': {
          title: 'Halal Investing Guide: Real Estate vs. Stocks',
          downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/downloads/halal-investing-guide.pdf`,
          description: 'Your comprehensive guide to Sharia-compliant investing in Ontario'
        },
        'sharia-questions': {
          title: '5 Questions to Ask Any Sharia-Compliant Investment',
          downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/downloads/5-sharia-questions.pdf`,
          description: 'Essential questions to ensure your investments are truly halal'
        },
        'ontario-market-outlook': {
          title: 'Ontario Real Estate Market Outlook 2024-2025',
          downloadUrl: `${process.env.NEXT_PUBLIC_APP_URL}/downloads/ontario-market-outlook.pdf`,
          description: 'Exclusive insights into Ontario\'s real estate investment opportunities'
        }
      }

      const magnet = leadMagnets[leadData.leadMagnetType]
      if (!magnet) {
        throw new Error('Invalid lead magnet type')
      }

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Your ${magnet.title} - GCHI</title>
          ${BASE_STYLES}
        </head>
        <body class="email-container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📘 Your Guide is Ready!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${magnet.title}</p>
          </div>
          
          <div class="content">
            <p style="font-size: 18px; margin-bottom: 24px;">Hi ${leadData.firstName},</p>
            
            <p style="margin-bottom: 24px;">Thank you for downloading our <strong>${magnet.title}</strong>. We've prepared this comprehensive resource specifically for investors like you who want to make informed, Sharia-compliant investment decisions.</p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${magnet.downloadUrl}" class="button" style="font-size: 18px; padding: 16px 32px;">
                📥 Download Your Guide Now
              </a>
            </div>

            <div class="card">
              <h3 style="margin: 0 0 12px 0; color: #C62828;">What You'll Learn:</h3>
              ${leadData.leadMagnetType === 'halal-investing-guide' ? `
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Key differences between halal real estate and stock investments</li>
                  <li>How to avoid riba (interest) in your investment strategy</li>
                  <li>Ontario-specific Sharia-compliant opportunities</li>
                  <li>Risk assessment for halal investors</li>
                  <li>Building a diversified halal portfolio</li>
                </ul>
              ` : leadData.leadMagnetType === 'sharia-questions' ? `
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Essential questions to verify Sharia compliance</li>
                  <li>Red flags to watch out for in investment offerings</li>
                  <li>How to evaluate fund managers and advisors</li>
                  <li>Documentation you should always request</li>
                  <li>When to seek additional Islamic scholarly guidance</li>
                </ul>
              ` : `
                <ul style="margin: 0; padding-left: 20px;">
                  <li>2024-2025 Ontario market trends and forecasts</li>
                  <li>Best regions for halal real estate investment</li>
                  <li>Interest rate impact on Sharia-compliant investments</li>
                  <li>Upcoming regulatory changes affecting investors</li>
                  <li>GCHI's exclusive market insights and predictions</li>
                </ul>
              `}
            </div>

            <div class="highlight">
              <h3 style="margin: 0 0 12px 0; color: #856404;">📞 Ready to Take the Next Step?</h3>
              <p style="margin: 0 0 12px 0;">If you have questions about implementing these strategies or want to explore GCHI's investment opportunities, I'd be happy to chat.</p>
              <p style="margin: 0;"><strong>Book a free 15-minute consultation</strong> - no obligation, just expert guidance tailored to your goals.</p>
            </div>

            <div style="text-align: center; margin: 24px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/apply?source=lead-magnet" class="button" style="background: white; color: #C62828; border: 2px solid #C62828;">
                📅 Schedule Your Free Consultation
              </a>
            </div>

            <div class="card">
              <h3 style="margin: 0 0 12px 0;">Why Choose GCHI?</h3>
              <div class="grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 16px 0;">
                <div>
                  <div class="text-green bold">✅ Zero Investor Fees</div>
                  <div class="text-green bold">✅ 100% Sharia Compliant</div>
                </div>
                <div>
                  <div class="text-green bold">✅ Quarterly Distributions</div>
                  <div class="text-green bold">✅ Ontario-Based Team</div>
                </div>
              </div>
            </div>

            <p style="margin-top: 32px;">We'll be sending you additional insights over the next few weeks to help you on your halal investing journey.</p>

            <p style="margin-bottom: 0;">Best regards,<br><strong>The GCHI Team</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #6c757d;">
              <strong>GCHI - Greater Canadian Halal Investments</strong><br>
              Sharia-Compliant Real Estate Partnerships
            </p>
            <p style="margin: 0; font-size: 12px; color: #6c757d;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/privacy" style="color: #6c757d;">Privacy Policy</a> • 
              <a href="mailto:${process.env.REPLY_TO_EMAIL}?subject=Unsubscribe" style="color: #6c757d;">Unsubscribe</a>
            </p>
          </div>
        </body>
        </html>
      `

      const result = await sendEmail({
        to: leadData.email,
        subject: `📘 Your ${magnet.title} - GCHI`,
        html,
      })

      return { success: result.success, messageId: result.data?.id }
    } catch (error) {
      console.error('Failed to send lead magnet email:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }

  static async sendNurtureEmail(emailData: { email: string, firstName: string }, day: number): Promise<EmailResponse> {
    try {
      const nurtureSequence: Record<number, NurtureEmailTemplate> = {
        1: {
          day: 1,
          subject: 'Welcome to Your Halal Investing Journey',
          template: 'welcome',
          cta: {
            text: 'Explore Our Investment Process',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/how-it-works`
          }
        },
        3: {
          day: 3,
          subject: 'Take a Virtual Tour: Inside Our Emmaville Property',
          template: 'property-tour',
          cta: {
            text: 'Schedule Property Tour',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio?tour=emmaville`
          }
        },
        7: {
          day: 7,
          subject: 'How We Screen Every Investment Opportunity',
          template: 'screening-process',
          cta: {
            text: 'Learn Our Investment Criteria',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/how-it-works#screening`
          }
        },
        14: {
          day: 14,
          subject: 'Investor Spotlight: Ahmad\'s Journey to 6% Returns',
          template: 'investor-spotlight',
          cta: {
            text: 'Schedule Your Consultation',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/apply?source=nurture-day-14`
          }
        }
      }

      const template = nurtureSequence[day]
      if (!template) {
        throw new Error(`No template found for day ${day}`)
      }

      const html = this.getNurtureEmailTemplate(emailData.firstName, template)

      const result = await sendEmail({
        to: emailData.email,
        subject: template.subject,
        html,
      })

      return { success: result.success, messageId: result.data?.id }
    } catch (error) {
      console.error('Failed to send nurture email:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }

  private static getNurtureEmailTemplate(firstName: string, template: NurtureEmailTemplate): string {
    const baseTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${template.subject} - GCHI</title>
        ${BASE_STYLES}
      </head>
      <body class="email-container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">${this.getNurtureEmailHeader(template.template)}</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.9;">Day ${template.day} of your halal investing journey</p>
        </div>
        
        <div class="content">
          <p style="font-size: 18px; margin-bottom: 24px;">Hi ${firstName},</p>
          
          ${this.getNurtureEmailContent(template.template)}

          ${template.cta ? `
            <div style="text-align: center; margin: 32px 0;">
              <a href="${template.cta.url}" class="button" style="font-size: 18px; padding: 16px 32px;">
                ${template.cta.text}
              </a>
            </div>
          ` : ''}

          <p style="margin-top: 32px;">Questions? Just hit reply - I personally read every email.</p>
          <p style="margin-bottom: 0;">Best regards,<br><strong>The GCHI Team</strong></p>
        </div>

        <div class="footer">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #6c757d;">
            <strong>GCHI - Greater Canadian Halal Investments</strong><br>
            Sharia-Compliant Real Estate Partnerships
          </p>
          <p style="margin: 0; font-size: 12px; color: #6c757d;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/privacy" style="color: #6c757d;">Privacy Policy</a> • 
            <a href="mailto:${process.env.REPLY_TO_EMAIL}?subject=Unsubscribe" style="color: #6c757d;">Unsubscribe</a>
          </p>
        </div>
      </body>
      </html>
    `
    
    return baseTemplate
  }

  private static getNurtureEmailHeader(template: string): string {
    const headers = {
      'welcome': '🎯 Let\'s Build Your Halal Investment Strategy',
      'property-tour': '🏢 Inside Our Emmaville Property',
      'screening-process': '🔍 Our 7-Step Investment Screening',
      'investor-spotlight': '⭐ Success Story: From Skeptic to 6% Returns'
    }
    return headers[template as keyof typeof headers] || 'GCHI Update'
  }

  private static getNurtureEmailContent(template: string): string {
    const contents = {
      'welcome': `
        <p>Over the next two weeks, I'll share insights that will help you make confident, Sharia-compliant investment decisions.</p>
        
        <div class="card">
          <h3 style="margin: 0 0 16px 0; color: #C62828;">What You'll Discover:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li><strong>Day 3:</strong> Virtual property tour of our Emmaville investment</li>
            <li><strong>Day 7:</strong> Behind-the-scenes look at our investment screening process</li>
            <li><strong>Day 14:</strong> Real investor success story and next steps</li>
          </ul>
        </div>

        <div class="highlight">
          <p style="margin: 0;"><strong>Quick Question:</strong> What's your biggest challenge with finding truly halal investment opportunities? Hit reply and let me know - I'll address it in an upcoming email.</p>
        </div>
      `,
      'property-tour': `
        <p>Today, I want to take you inside our Emmaville property - one of our flagship investments that's been delivering consistent 5-6% returns to our partners.</p>
        
        <div class="card">
          <h3 style="margin: 0 0 16px 0; color: #C62828;">🏢 Emmaville Property Snapshot</h3>
          <table style="width: 100%; margin: 16px 0;">
            <tr><td><strong>Location:</strong></td><td>Emmaville, Ontario</td></tr>
            <tr><td><strong>Units:</strong></td><td>18 rental apartments</td></tr>
            <tr><td><strong>Occupancy Rate:</strong></td><td>95%+ consistently</td></tr>
            <tr><td><strong>Monthly Revenue:</strong></td><td>$15,400+ from rent</td></tr>
            <tr><td><strong>Investment Partners:</strong></td><td>12 GCHI investors</td></tr>
          </table>
        </div>

        <p>What makes this property special isn't just the numbers - it's the <strong>peace of mind</strong> knowing your investment is:</p>
        <ul>
          <li>✅ 100% Sharia-compliant with no interest-based financing</li>
          <li>✅ Fully insured and professionally managed</li>
          <li>✅ Generating real cash flow from real tenants</li>
          <li>✅ An asset you can actually visit and inspect</li>
        </ul>

        <div class="highlight">
          <p style="margin: 0;"><strong>Want to see it yourself?</strong> We offer property tours every month. Many of our investors visit annually to see how their investment is performing.</p>
        </div>
      `,
      'screening-process': `
        <p>One question I get often is: "How do I know if an investment is truly halal?" Today, I'll share our 7-step screening process that ensures every GCHI opportunity meets strict Sharia compliance standards.</p>
        
        <div class="card">
          <h3 style="margin: 0 0 16px 0; color: #C62828;">🔍 Our 7-Step Halal Investment Screen</h3>
          <ol style="margin: 0; padding-left: 20px;">
            <li><strong>Interest-Free Verification:</strong> No riba in any form of financing</li>
            <li><strong>Asset Backing:</strong> Must be backed by real, tangible assets</li>
            <li><strong>Prohibited Industry Check:</strong> No alcohol, gambling, or haram activities</li>
            <li><strong>Risk-Sharing Analysis:</strong> True partnership, not guaranteed returns</li>
            <li><strong>Transparency Audit:</strong> Full disclosure of all fees and processes</li>
            <li><strong>Sharia Board Review:</strong> Independent Islamic scholars verify compliance</li>
            <li><strong>Ongoing Monitoring:</strong> Regular compliance reviews throughout partnership</li>
          </ol>
        </div>

        <p>This rigorous process is why many investors tell us: <em>"Finally, an investment I can trust with complete confidence."</em></p>

        <div class="highlight">
          <p style="margin: 0;"><strong>Red Flag Warning:</strong> If any investment opportunity can't clearly answer questions about these 7 areas, walk away. Your peace of mind is worth more than any promised return.</p>
        </div>
      `,
      'investor-spotlight': `
        <p>I'd like you to meet Ahmad K., one of our Ottawa-based investors who joined GCHI in early 2024. His story might surprise you...</p>
        
        <div class="card" style="background: #f0f9ff; border-color: #3b82f6;">
          <h3 style="margin: 0 0 16px 0; color: #1565C0;">💬 "I was skeptical at first..."</h3>
          <p style="margin: 0 0 12px 0; font-style: italic;">"After being burned by previous 'Islamic' investments that turned out to have hidden interest components, I was very cautious. But GCHI's transparency and the fact that I could visit the actual properties convinced me to try with a smaller investment."</p>
          <p style="margin: 0; text-align: right;"><strong>- Ahmad K., Ottawa</strong></p>
        </div>

        <p><strong>Ahmad's Results After 10 Months:</strong></p>
        <ul>
          <li>✅ 6.2% annualized return (beating his target)</li>
          <li>✅ Quarterly distributions received on time</li>
          <li>✅ Increased his investment by 150% in second round</li>
          <li>✅ Referred two family members who are now partners</li>
        </ul>

        <div class="card">
          <h3 style="margin: 0 0 12px 0; color: #C62828;">What Ahmad Learned:</h3>
          <p style="margin: 0 0 12px 0;">"The key was starting small and seeing the results for myself. Once I received my first quarterly distribution and could verify the Sharia compliance personally, I knew this was different from other opportunities I'd seen."</p>
          <p style="margin: 0;"><strong>Ahmad's advice:</strong> "Don't let past disappointments stop you from finding the right opportunity. But do your due diligence - visit the properties, meet the team, ask tough questions."</p>
        </div>

        <div class="highlight">
          <p style="margin: 0;"><strong>Ready to start your own success story?</strong> We have 8 partnership spots remaining in our current funding round. The next opportunity opens in January 2025.</p>
        </div>
      `
    }
    return contents[template as keyof typeof contents] || '<p>Thank you for being part of the GCHI community.</p>'
  }

  static async sendInvestorAcknowledgment(applicationData: InvestorApplicationData): Promise<EmailResponse> {
    try {
      const tier = INVESTMENT_TIERS[applicationData.investmentAmount] || {
        title: 'Custom Investment',
        amount: applicationData.investmentAmount,
        returnRate: 'TBD',
        benefits: ['Customized partnership terms', 'Direct consultation'],
        color: '#6c757d'
      }

      const firstName = applicationData.fullName.split(' ')[0]

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Application Received - GCHI Investment</title>
          ${BASE_STYLES}
        </head>
        <body class="email-container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Welcome to GCHI!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Your investment application has been received</p>
          </div>
          
          <div class="content">
            <p style="font-size: 18px; margin-bottom: 24px;">Hi ${firstName},</p>
            
            <p style="margin-bottom: 24px;">Thank you for your interest in partnering with GCHI. We've received your application for the <strong>${tier.title}</strong> partnership and are excited about the possibility of working together.</p>

            <div class="card">
              <h3 style="margin: 0 0 16px 0; color: ${tier.color};">📋 Your Application Summary</h3>
              <table>
                <tr>
                  <td><strong>Partnership Tier</strong></td>
                  <td>${tier.title} (${tier.amount})</td>
                </tr>
                <tr>
                  <td><strong>Target Return</strong></td>
                  <td class="text-green bold">${tier.returnRate} annual profit-share</td>
                </tr>
                <tr>
                  <td><strong>Investment Timeline</strong></td>
                  <td style="text-transform: capitalize;">${applicationData.investmentTimeline.replace('-', ' ')}</td>
                </tr>
                <tr>
                  <td><strong>Submitted</strong></td>
                  <td>${new Date(applicationData.submittedAt).toLocaleDateString()}</td>
                </tr>
              </table>
            </div>

            <div class="highlight">
              <h3 style="margin: 0 0 12px 0; color: #856404;">📞 What Happens Next</h3>
              <ol style="margin: 0; padding-left: 20px;">
                <li><strong>Initial Call (within 24 hours):</strong> We'll contact you to schedule a brief 15-20 minute consultation</li>
                <li><strong>Investment Package:</strong> Review detailed offering documents and disclosure materials</li>
                <li><strong>Eligibility Verification:</strong> Confirm your investor status and partnership readiness</li>
                <li><strong>Partnership Agreement:</strong> Finalize terms and begin your GCHI partnership</li>
              </ol>
            </div>

            <h3 style="color: #C62828; margin: 24px 0 16px 0;">🏆 ${tier.title} Benefits</h3>
            <div class="card">
              <ul style="margin: 0; padding-left: 20px;">
                ${tier.benefits.map(benefit => `<li style="margin-bottom: 8px;">${benefit}</li>`).join('')}
              </ul>
            </div>

            <div class="urgency">
              <strong>📈 Market Update:</strong> We currently have <strong>7 of 15</strong> partnership spots remaining in this funding round. Next round opens January 2026.
            </div>

            <h3 style="color: #C62828;">Why GCHI Outperforms Traditional Investments</h3>
            <table>
              <tr>
                <th>Investment Type</th>
                <th>Annual Return</th>
                <th>Annual Fees</th>
                <th>Asset Backing</th>
              </tr>
              <tr>
                <td>Bank GICs</td>
                <td class="text-red">2-3%</td>
                <td>Low/None</td>
                <td>Bank deposits</td>
              </tr>
              <tr>
                <td>Stock Market</td>
                <td class="text-red">Variable</td>
                <td class="text-red">1-2%</td>
                <td>Corporate shares</td>
              </tr>
              <tr style="background: #f0f9ff;">
                <td><strong>GCHI Partnership</strong></td>
                <td class="text-green bold">${tier.returnRate}</td>
                <td class="text-green bold">$0</td>
                <td><strong>Direct real estate</strong></td>
              </tr>
            </table>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/how-it-works" class="button" style="margin-right: 12px;">
                📚 Learn More About Our Process
              </a>
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/portfolio" class="button" style="background: white; color: #C62828; border: 2px solid #C62828;">
                🏢 View Our Properties
              </a>
            </div>

            <div class="card">
              <h3 style="margin: 0 0 12px 0;">Questions? We're Here to Help</h3>
              <p style="margin: 0 0 12px 0;">Feel free to reach out if you have any questions before our call:</p>
              <p style="margin: 0;">
                📧 Email: <a href="mailto:${process.env.REPLY_TO_EMAIL}">${process.env.REPLY_TO_EMAIL}</a><br>
                📞 Phone: <a href="tel:+1-416-xxx-xxxx">+1 (416) XXX-XXXX</a> <!-- Replace with actual number -->
              </p>
            </div>

            <p style="margin-top: 32px;">We look forward to discussing your investment goals and how GCHI can help you achieve superior returns through Sharia-compliant real estate partnerships.</p>

            <p style="margin-bottom: 0;">Best regards,<br><strong>The GCHI Team</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #6c757d;">
              <strong>GCHI - Greater Canadian Halal Investments</strong><br>
              Sharia-Compliant Real Estate Partnerships
            </p>
            <p style="margin: 0; font-size: 12px; color: #6c757d;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/privacy" style="color: #6c757d;">Privacy Policy</a> • 
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/terms" style="color: #6c757d;">Terms of Service</a> • 
              <a href="mailto:${process.env.REPLY_TO_EMAIL}?subject=Unsubscribe" style="color: #6c757d;">Unsubscribe</a>
            </p>
          </div>
        </body>
        </html>
      `

      const result = await sendEmail({
        to: applicationData.email,
        subject: `Welcome to GCHI - ${tier.title} Application Confirmed`,
        html,
      })

      return { success: result.success, messageId: result.data?.id }
    } catch (error) {
      console.error('Failed to send investor acknowledgment:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }
}