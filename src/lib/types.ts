// Email and form types
export interface InvestorApplicationData {
  // Personal Information
  fullName: string
  email: string
  phone: string
  province: string
  
  // Investment Details
  investmentAmount: string
  investorType: string
  eligibilityStatus: string[]
  investmentTimeline: string
  
  // Additional Information
  notes: string
  privacyConsent: boolean
  
  // Anti-spam fields (should be empty)
  website: string
  company: string
  
  // Meta information
  submittedAt: string
  formTimeTaken: number
}

export interface EmailTemplate {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

export interface TierBenefits {
  title: string
  amount: string
  returnRate: string
  benefits: string[]
  color: string
}

// Lead Magnet Types
export interface LeadMagnetData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  leadMagnetType: 'halal-investing-guide' | 'sharia-questions' | 'ontario-market-outlook'
  source?: string // Where they came from (homepage, investment page, etc.)
  submittedAt: string
}

export interface LeadMagnetResponse {
  success: boolean
  downloadUrl?: string
  error?: string
}

export interface EmailSequenceData {
  email: string
  firstName: string
  lastName: string
  sequence: 'investment-nurture'
  daysSinceSignup: number
  lastEmailSent?: string
}

export interface NurtureEmailTemplate {
  day: number
  subject: string
  template: string
  cta?: {
    text: string
    url: string
  }
}