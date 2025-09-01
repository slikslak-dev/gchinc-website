# Golden Canadian Homes Inc. - Website

Sharia-compliant real estate investment platform for Ontario investors.

## 📚 Project Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete Cloudflare Pages deployment guide
- **[WARP.md](./WARP.md)** - AI agent configuration guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🏭️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Deployment**: Cloudflare Pages
- **Runtime**: Cloudflare Workers (Edge Runtime)
- **Email**: Resend integration

## 📊 Current Status

- ✅ **Phase 1 Complete**: Foundation & Sharia-compliant content
- 🟡 **Phase 2 Ready**: Content implementation & forms
- 🔵 **Phase 3 Planned**: Advanced features & optimization

## 🔗 Key Pages

- `/` - Home (Halal real-estate investing)
- `/invest` - Investment tiers (5%-6% profit-share)
- `/sharia-compliance` - Islamic finance principles
- `/apply` - Investor application form
- `/portfolio` - Current assets & development pipeline

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## 🔧 Development Scripts

```bash
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Build for production
npm run build:cf     # Build for Cloudflare Pages
npm run preview:cf   # Preview with Cloudflare runtime
npm run lint         # Run ESLint
npm run deploy:cf    # Deploy to Cloudflare Pages
```

## 🔒 Environment Variables

Create `.env.local` for local development:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@gchi.ca
ADMIN_EMAIL=admin@gchi.ca
REPLY_TO_EMAIL=info@gchi.ca
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, set these in Cloudflare Pages dashboard. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

## 📡 Deployment

This project is deployed on **Cloudflare Pages** with automatic deployments:
- **Production**: Pushes to `main` branch
- **Preview**: All other branches and PRs

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

*Built with ❤️ for the Muslim community in Ontario*
