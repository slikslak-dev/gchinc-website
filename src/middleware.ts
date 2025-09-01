import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set this to true to enable maintenance mode
const MAINTENANCE_MODE = false

// Pages that should bypass maintenance mode
const BYPASS_PATHS = [
  '/maintenance',
  '/api/health', // Keep health checks working
]

// IPs that can bypass maintenance mode (for testing)
// Add your IP here if you want to bypass maintenance mode
const BYPASS_IPS: string[] = [
  // '127.0.0.1', // Example: localhost
  // 'YOUR_IP_HERE', // Add your IP to test the site
]

export function middleware(request: NextRequest) {
  // Skip maintenance mode for certain paths
  const pathname = request.nextUrl.pathname
  
  // Always allow access to static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') || // Files with extensions
    BYPASS_PATHS.includes(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if maintenance mode is enabled
  if (MAINTENANCE_MODE) {
    // Check if the request IP is in the bypass list
    const clientIp = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    if (BYPASS_IPS.includes(clientIp)) {
      return NextResponse.next()
    }

    // Check for a bypass cookie (for admin access)
    const bypassCookie = request.cookies.get('maintenance-bypass')
    if (bypassCookie?.value === 'gchi-admin-2025') {
      return NextResponse.next()
    }

    // Redirect to maintenance page if not already there
    if (pathname !== '/maintenance') {
      return NextResponse.redirect(new URL('/maintenance', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
