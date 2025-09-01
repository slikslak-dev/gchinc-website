# Golden Canadian Homes Inc. - Website

Sharia-compliant real estate investment platform for Ontario investors.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build:full
```

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Deployment**: Cloudflare Pages
- **Runtime**: Cloudflare Workers (Edge Runtime)
- **Email**: Resend integration

## 🔧 Development Commands

```bash
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Standard Next.js build
npm run build:cf     # Build for Cloudflare Pages
npm run build:full   # Complete build (Next.js + Cloudflare)
npm run preview      # Preview Cloudflare build locally
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Development guide for Claude Code
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment & maintenance guide  
- **[WARP.md](./WARP.md)** - AI agent configuration guide

## 🌐 Development Pipeline

1. **Local Development**: `npm run dev` (instant preview)
2. **Test Cloudflare Build**: `npm run build:full && npm run preview`
3. **Feature Branch**: Create PR → Automatic preview deployment
4. **Production**: Merge to main → Automatic production deployment

## 🔒 Environment Variables

Create `.env.local` for development:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@gchi.ca
ADMIN_EMAIL=admin@gchi.ca
REPLY_TO_EMAIL=info@gchi.ca
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📊 Project Status

- ✅ **Foundation**: Next.js 15 + Cloudflare Pages setup complete
- ✅ **Components**: shadcn/ui design system integrated
- ✅ **Email**: Resend integration working
- ✅ **CI/CD**: Automated deployments configured
- 🔧 **Maintenance**: Currently in maintenance mode

---

*Built with ❤️ for the Muslim community in Ontario*