import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email'

// This would typically be called by a cron job or queue system
// For demonstration, we'll create a simple endpoint that can be triggered

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, day, apiKey } = await request.json()
    
    // Simple API key protection (in production, use proper authentication)
    if (apiKey !== process.env.NURTURE_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!email || !firstName || !day) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const validDays = [1, 3, 7, 14]
    if (!validDays.includes(day)) {
      return NextResponse.json(
        { success: false, error: 'Invalid day - must be 1, 3, 7, or 14' },
        { status: 400 }
      )
    }

    const result = await EmailService.sendNurtureEmail({ email, firstName }, day)
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: `Day ${day} nurture email sent to ${email}`
    })

  } catch (error) {
    console.error('Nurture email API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Batch endpoint for sending multiple nurture emails
export async function PUT(request: NextRequest) {
  try {
    const { leads, day, apiKey } = await request.json()
    
    if (apiKey !== process.env.NURTURE_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!Array.isArray(leads) || !day) {
      return NextResponse.json(
        { success: false, error: 'Invalid input - leads must be an array' },
        { status: 400 }
      )
    }

    const validDays = [1, 3, 7, 14]
    if (!validDays.includes(day)) {
      return NextResponse.json(
        { success: false, error: 'Invalid day - must be 1, 3, 7, or 14' },
        { status: 400 }
      )
    }

    const results = []
    
    for (const lead of leads) {
      if (!lead.email || !lead.firstName) {
        results.push({
          email: lead.email || 'unknown',
          success: false,
          error: 'Missing email or firstName'
        })
        continue
      }

      try {
        const result = await EmailService.sendNurtureEmail(lead, day)
        results.push({
          email: lead.email,
          success: result.success,
          messageId: result.messageId,
          error: result.error
        })
        
        // Add delay between emails to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        results.push({
          email: lead.email,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    const successful = results.filter(r => r.success).length
    const failed = results.length - successful

    return NextResponse.json({
      success: true,
      summary: {
        total: results.length,
        successful,
        failed,
        day
      },
      results
    })

  } catch (error) {
    console.error('Batch nurture email API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    availableDays: [1, 3, 7, 14]
  })
}