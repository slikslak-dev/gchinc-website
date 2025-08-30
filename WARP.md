# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a Sharia-compliant real estate investment platform website for GCHI (Golden Canadian Homes Inc.) targeting Ontario investors. Built with Next.js 15 (App Router), Tailwind CSS v4, and shadcn/ui components.

## Development Commands

### Core Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router (src/app directory structure)
- **Styling**: Tailwind CSS v4 with custom design tokens in globals.css
- **Components**: shadcn/ui components in src/components/ui
- **Email Service**: Resend integration for investor applications and lead magnets
- **Deployment**: Vercel with security headers configured in vercel.json

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
  - Main pages: home, invest, sharia-compliance, apply, portfolio, how-it-works, faqs
  - API routes: investor-application, lead-magnet, nurture-email
- `src/components/` - React components (site-header, site-footer, investment cards, forms)
- `src/lib/` - Core utilities:
  - `email.ts` - Email service with templates for investor applications and nurture sequences
  - `validation.ts` - Form validation and anti-spam checks
  - `types.ts` - TypeScript type definitions
- `public/` - Static assets

### Key Business Logic

#### Investment Tiers
The platform offers 4 investment tiers with different benefits:
- Community Partner: $10k-15k (5% return)
- Growth Partner: $15k-25k (6% return)  
- Premium Partner: $25k-50k (6%+ return)
- Elite Partner: $50k+ (6%+ return)

#### Email Workflows
1. **Investor Applications** - Dual email system sends notifications to admin and acknowledgments to investors
2. **Lead Magnets** - Downloadable guides with automated email delivery
3. **Nurture Sequences** - Multi-day email campaigns for lead engagement

#### Form Security
- Rate limiting (3 attempts per 15 minutes per IP)
- Honeypot fields for bot detection
- Time-based validation (minimum 10 seconds to complete)
- Anti-spam pattern detection

### Environment Variables Required
The application uses these environment variables (stored in .env.local):
- `RESEND_API_KEY` - Resend API key for email sending
- `FROM_EMAIL` - Sender email address
- `ADMIN_EMAIL` - Admin notification recipient
- `REPLY_TO_EMAIL` - Reply-to address for emails
- `NEXT_PUBLIC_APP_URL` - Public application URL

### Design System
Custom brand colors defined in globals.css:
- Primary: Maple Red (#C62828 and scale)
- Secondary: Deep Charcoal (grayscale)
- Semantic colors for success, warning, error states
- Motion tokens for animations
- Elevation system for shadows

### Current Project Status
- ✅ Phase 1 Complete: Foundation & Sharia-compliant content
- 🟡 Phase 2 Ready: Content implementation & forms
- 🔵 Phase 3 Planned: Advanced features & optimization

### Performance Optimizations
- Turbopack enabled for faster builds
- Image optimization with WebP/AVIF formats
- Package import optimizations for Radix UI and utilities
- Security headers configured for production
