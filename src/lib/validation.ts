/**
 * Shared validation utilities for form data
 */

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Canadian phone number format
 */
export function validatePhone(phone: string): boolean {
  // Remove all non-digit characters for validation
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Canadian phone number should be 10 digits (with or without country code)
  return cleanPhone.length === 10 || (cleanPhone.length === 11 && cleanPhone.startsWith('1'))
}

/**
 * Validate Canadian provinces/territories
 */
export const VALID_PROVINCES = [
  'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK', 'NT', 'NU', 'YT'
]

export function validateProvince(province: string): boolean {
  return VALID_PROVINCES.includes(province)
}

/**
 * Validate investment amounts
 */
export const VALID_INVESTMENT_AMOUNTS = [
  '10k-15k', '15k-25k', '25k-50k', '50k+', 'not-sure'
]

export function validateInvestmentAmount(amount: string): boolean {
  return VALID_INVESTMENT_AMOUNTS.includes(amount)
}

/**
 * Validate investor types
 */
export const VALID_INVESTOR_TYPES = [
  'individual', 'corporation', 'trust', 'other'
]

export function validateInvestorType(type: string): boolean {
  return VALID_INVESTOR_TYPES.includes(type)
}

/**
 * Validate eligibility status options
 */
export const VALID_ELIGIBILITY_STATUS = [
  'accredited', 'om-eligible', 'not-sure'
]

export function validateEligibilityStatus(statuses: string[]): boolean {
  return statuses.length > 0 && statuses.every(status => VALID_ELIGIBILITY_STATUS.includes(status))
}

/**
 * Validate investment timelines
 */
export const VALID_INVESTMENT_TIMELINES = [
  'immediately', '1-3months', '3-6months', '6months+', 'exploring'
]

export function validateInvestmentTimeline(timeline: string): boolean {
  return VALID_INVESTMENT_TIMELINES.includes(timeline)
}

/**
 * Comprehensive form validation
 */
export function validateInvestorApplication(data: Record<string, any>): ValidationResult {
  const errors: string[] = []

  // Required field validation
  if (!data.fullName?.trim()) {
    errors.push('Full name is required')
  } else if (data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters')
  } else if (data.fullName.trim().length > 100) {
    errors.push('Full name must be less than 100 characters')
  }

  if (!data.email?.trim()) {
    errors.push('Email address is required')
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!data.phone?.trim()) {
    errors.push('Phone number is required')
  } else if (!validatePhone(data.phone)) {
    errors.push('Please enter a valid Canadian phone number')
  }

  if (!data.province) {
    errors.push('Province/Territory is required')
  } else if (!validateProvince(data.province)) {
    errors.push('Please select a valid province/territory')
  }

  if (!data.investmentAmount) {
    errors.push('Investment amount is required')
  } else if (!validateInvestmentAmount(data.investmentAmount)) {
    errors.push('Please select a valid investment amount')
  }

  if (!data.investorType) {
    errors.push('Investor type is required')
  } else if (!validateInvestorType(data.investorType)) {
    errors.push('Please select a valid investor type')
  }

  if (!Array.isArray(data.eligibilityStatus) || !validateEligibilityStatus(data.eligibilityStatus)) {
    errors.push('Please select at least one eligibility status')
  }

  if (!data.investmentTimeline) {
    errors.push('Investment timeline is required')
  } else if (!validateInvestmentTimeline(data.investmentTimeline)) {
    errors.push('Please select a valid investment timeline')
  }

  if (!data.privacyConsent) {
    errors.push('You must agree to the privacy policy')
  }

  // Optional field validation
  if (data.notes && data.notes.length > 1000) {
    errors.push('Additional notes must be less than 1000 characters')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Anti-spam validation
 */
export interface AntiSpamCheck {
  isValid: boolean
  reason?: string
}

export function validateAntiSpam(data: Record<string, any>, metadata: { timeTaken: number; userAgent?: string }): AntiSpamCheck {
  // Honeypot fields should be empty
  if (data.website || data.company) {
    return { isValid: false, reason: 'Honeypot validation failed' }
  }

  // Form should take reasonable time to complete (at least 10 seconds)
  if (metadata.timeTaken < 10000) {
    return { isValid: false, reason: 'Form completed too quickly' }
  }

  // Form shouldn't take unreasonably long (more than 1 hour suggests bot)
  if (metadata.timeTaken > 3600000) {
    return { isValid: false, reason: 'Form completion time suspicious' }
  }

  // Check for suspicious patterns in text content
  const suspiciousPatterns = [
    /https?:\/\//i,                    // URLs
    /<[^>]*>/i,                       // HTML tags
    /\b(buy|cheap|discount|free|click|here|viagra|casino)\b/i, // Common spam words
  ]

  const textFields = [data.fullName, data.notes].filter(Boolean)
  for (const field of textFields) {
    if (typeof field === 'string') {
      // Check for suspicious patterns
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(field)) {
          return { isValid: false, reason: 'Suspicious content detected' }
        }
      }
      
      // Check for excessive non-ASCII characters
      const nonAsciiMatches = field.match(/[^\x00-\x7F]/g)
      if (nonAsciiMatches && nonAsciiMatches.length > field.length * 0.3) {
        return { isValid: false, reason: 'Suspicious character encoding' }
      }
    }
  }

  // Check for repeated characters (possible bot behavior)
  if (data.fullName && /(..).*\1.*\1/.test(data.fullName)) {
    return { isValid: false, reason: 'Suspicious name pattern' }
  }

  return { isValid: true }
}