import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email'
import { validateInvestorApplication, validateAntiSpam } from '@/lib/validation'
import type { InvestorApplicationData } from '@/lib/types'

// Rate limiting data structure (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 3, // Maximum 3 applications per IP per window
}

function getRateLimitKey(ip: string): string {
  return `rate-limit:${ip}`
}

function isRateLimited(ip: string): boolean {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
    return false
  }

  if (record.count >= RATE_LIMIT.maxAttempts) {
    return true
  }

  record.count += 1
  return false
}



export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || ''

    // Rate limiting check
    if (isRateLimited(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many applications submitted. Please try again later.' 
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { formData, formStartTime } = body

    if (!formData || !formStartTime) {
      return NextResponse.json(
        { success: false, error: 'Missing required form data' },
        { status: 400 }
      )
    }

    // Calculate form completion time
    const timeTaken = Date.now() - formStartTime

    // Validate form data
    const validation = validateInvestorApplication(formData)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: validation.errors },
        { status: 400 }
      )
    }

    // Anti-spam validation
    const antiSpamCheck = validateAntiSpam(formData, { timeTaken, userAgent })
    if (!antiSpamCheck.isValid) {
      // Log but don't reveal the specific reason to the client
      console.log(`Anti-spam check failed: ${antiSpamCheck.reason}`)
      
      // Return success to prevent spam bots from learning
      return NextResponse.json({ success: true })
    }

    // Prepare application data
    const applicationData: InvestorApplicationData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      formTimeTaken: timeTaken,
    }

    // Send emails concurrently
    const [adminResult, investorResult] = await Promise.allSettled([
      EmailService.sendAdminNotification(applicationData),
      EmailService.sendInvestorAcknowledgment(applicationData)
    ])

    // Check email results
    const adminSuccess = adminResult.status === 'fulfilled' && adminResult.value.success
    const investorSuccess = investorResult.status === 'fulfilled' && investorResult.value.success

    if (!adminSuccess || !investorSuccess) {
      console.error('Email sending failed:', {
        admin: adminResult,
        investor: investorResult
      })

      // In production, you might want to store the application in a database
      // even if email fails, and implement retry logic
    }

    // Log successful application (in production, save to database)
    console.log('New investor application received:', {
      name: applicationData.fullName,
      email: applicationData.email,
      amount: applicationData.investmentAmount,
      timeline: applicationData.investmentTimeline,
      timestamp: applicationData.submittedAt,
      emailResults: { adminSuccess, investorSuccess }
    })

    // Always return success to user (even if emails failed partially)
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully. We will contact you within 24 hours.',
      // In development, you might want to include email status
      ...(process.env.NODE_ENV === 'development' && {
        emailStatus: { adminSuccess, investorSuccess }
      })
    })

  } catch (error) {
    console.error('Application submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again or contact support.' 
      },
      { status: 500 }
    )
  }
}

// Handle CORS for development
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}