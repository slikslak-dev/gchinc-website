# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start Next.js development server on localhost:3000
- `npm run build` - Standard Next.js production build
- `npm run build:cf` - Build for Cloudflare Pages deployment using @cloudflare/next-on-pages
- `npm run build:full` - Complete build process (Next.js + Cloudflare Pages)
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking with tsc --noEmit
- `npm start` - Start production server locally

### Cloudflare-specific
- `npm run preview` - Preview Cloudflare Pages build locally with wrangler
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run cf:dev` - Build and preview Cloudflare version locally

## Architecture Overview

This is a Next.js 15 application using the App Router, specifically configured for deployment on Cloudflare Pages with Workers runtime.

### Key Architecture Patterns
- **Deployment Target**: Cloudflare Pages with Edge Runtime (not traditional Node.js)
- **Build Process**: Two-stage build using Next.js then @cloudflare/next-on-pages adapter
- **Image Optimization**: Disabled for Cloudflare compatibility (unoptimized: true)
- **Email Service**: Resend integration via API routes
- **Styling**: Tailwind CSS v4 with shadcn/ui components

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utility functions and configurations
- `src/hooks/` - Custom React hooks
- `middleware.ts` - Next.js middleware

### API Routes Architecture
- `src/app/api/investor-application/route.ts` - Investment application form handler
- `src/app/api/lead-magnet/route.ts` - Lead generation form handler
- `src/app/api/nurture-email/route.ts` - Email nurture sequence handler

### Component Architecture
- Uses shadcn/ui design system components
- Custom components like `lead-magnet-form.tsx`, `investment-card.tsx`
- Theme provider for dark/light mode support
- Structured data components for SEO

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- ES2017 target for Cloudflare Workers compatibility

## Cloudflare-Specific Considerations

### Build Configuration
- Images are unoptimized for Workers runtime
- Security headers configured in next.config.ts
- Package imports optimized for performance
- Two-stage build process required (Next.js → Cloudflare adapter)

### Environment Variables
Required for production deployment:
- `RESEND_API_KEY` - For email functionality
- `FROM_EMAIL` - Default sender email
- `ADMIN_EMAIL` - Admin notifications
- `REPLY_TO_EMAIL` - Reply-to address
- `NEXT_PUBLIC_APP_URL` - Public application URL

### Testing the Build
Always test Cloudflare builds locally before deployment:
1. `npm run build:full`
2. `npm run preview`

This ensures compatibility with Cloudflare Workers runtime environment.