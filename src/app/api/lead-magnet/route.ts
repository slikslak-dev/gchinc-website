import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email'
import { validateEmail } from '@/lib/validation'
import type { LeadMagnetData } from '@/lib/types'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(ip: string, email: string): string {
  return `${ip}:${email}`
}

function isRateLimited(key: string, limit: number = 3, windowMs: number = 60000): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (!entry || entry.resetTime < now) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (entry.count >= limit) {
    return true
  }

  entry.count++
  return false
}

function validateLeadMagnetData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.firstName?.trim() || data.firstName.length < 1) {
    errors.push('First name is required')
  }

  if (!data.lastName?.trim() || data.lastName.length < 1) {
    errors.push('Last name is required')
  }

  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!validateEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.leadMagnetType || !['halal-investing-guide', 'sharia-questions', 'ontario-market-outlook'].includes(data.leadMagnetType)) {
    errors.push('Invalid lead magnet type')
  }

  // Optional phone validation
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(data.phone.replace(/\s|-|\(|\)/g, ''))) {
      errors.push('Invalid phone number format')
    }
  }

  // Anti-spam checks
  if (data.firstName && data.firstName.length > 50) {
    errors.push('First name too long')
  }
  if (data.lastName && data.lastName.length > 50) {
    errors.push('Last name too long')
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /https?:\/\//i,
    /<[^>]*>/i,
    /\b(buy|cheap|discount|free|click|here|viagra|casino)\b/i,
  ]

  const textFields = [data.firstName, data.lastName].filter(Boolean)
  for (const field of textFields) {
    if (typeof field === 'string') {
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(field)) {
          errors.push('Suspicious content detected')
          break
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const rateLimitKey = getRateLimitKey(ip, data.email || 'unknown')

    // Rate limiting
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again in a minute.' 
        },
        { status: 429 }
      )
    }

    // Validate input data
    const validation = validateLeadMagnetData(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: validation.errors.join(', ') 
        },
        { status: 400 }
      )
    }

    // Create lead magnet data object
    const leadMagnetData: LeadMagnetData = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || undefined,
      leadMagnetType: data.leadMagnetType,
      source: data.source || 'unknown',
      submittedAt: new Date().toISOString()
    }

    // Send immediate email with download link
    const emailResult = await EmailService.sendLeadMagnetEmail(leadMagnetData)
    
    if (!emailResult.success) {
      console.error('Failed to send lead magnet email:', emailResult.error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send download email. Please try again.' 
        },
        { status: 500 }
      )
    }

    // Here you would typically:
    // 1. Save to database/CRM
    // 2. Add to email nurture sequence
    // 3. Track conversion in analytics
    // 4. Notify admin if needed

    // For now, let's log the lead for tracking
    console.log('New lead magnet download:', {
      email: leadMagnetData.email,
      type: leadMagnetData.leadMagnetType,
      source: leadMagnetData.source,
      timestamp: leadMagnetData.submittedAt
    })

    // Start nurture sequence (Day 1 welcome email)
    // Note: In production, you'd use a proper queue system
    setTimeout(async () => {
      try {
        await EmailService.sendNurtureEmail(
          { 
            email: leadMagnetData.email, 
            firstName: leadMagnetData.firstName 
          }, 
          1
        )
      } catch (error) {
        console.error('Failed to send nurture email:', error)
      }
    }, 1000) // Send after 1 second

    return NextResponse.json({
      success: true,
      message: 'Download email sent successfully',
      downloadUrl: `/downloads/${leadMagnetData.leadMagnetType}.pdf` // This would be the actual download URL
    })

  } catch (error) {
    console.error('Lead magnet API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  })
}