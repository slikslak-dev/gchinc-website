# Project Structure

This document outlines the organization of the Golden Canadian Homes Inc. website project.

## Root Directory Structure

```
gchi-website/
├── .assetsignore                 # Cloudflare Pages asset exclusions
├── .env.example                  # Environment variable template
├── .env.local                    # Environment variables (not tracked)
├── .gitignore                    # Git ignore rules
├── CLAUDE.md                     # Claude Code instructions
├── PROJECT_STRUCTURE.md          # This file
├── README.md                     # Project documentation
├── next.config.ts                # Next.js configuration
├── package.json                  # Node.js dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── wrangler.toml                 # Cloudflare Workers configuration
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Production deployment pipeline
│       └── preview.yml          # Preview deployment pipeline
├── infra/
│   └── dns-backups/             # DNS configuration backups
├── docs/                        # Business documentation
├── src/                         # Source code
└── node_modules/                # Dependencies (not tracked)
```

## Source Directory (`src/`)

```
src/
├── app/                         # Next.js App Router pages and API routes
│   ├── (routes)/               # Page routes
│   ├── api/                    # API endpoints
│   ├── downloads/              # Lead magnet pages
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx             # Root layout component
│   ├── loading.tsx            # Loading UI
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Homepage
├── components/                 # Reusable React components
│   ├── ui/                    # shadcn/ui base components
│   └── [custom]/              # Business-specific components
├── hooks/                     # Custom React hooks
├── lib/                       # Utilities and configurations
│   ├── types.ts              # TypeScript type definitions
│   ├── utils.ts              # General utilities
│   ├── validation.ts         # Form validation schemas
│   └── email.ts              # Email service utilities
└── styles/                    # Additional styling (if needed)
```

## Infrastructure (`infra/`)

```
infra/
├── dns-backups/               # DNS configuration backups
│   ├── README.md             # DNS backup documentation
│   └── *.json                # Cloudflare DNS backups
└── (future additions)
```

## Documentation (`docs/`)

```
docs/
├── business-overview.md       # Business strategy and goals
├── content-strategy.md        # Content and marketing strategy
├── development-plan.md        # Technical development roadmap
└── phase-2-completion-report.md # Project phase completion reports
```

## Key Configuration Files

### Deployment & DevOps
- `wrangler.toml` - Cloudflare Workers/Pages configuration
- `.github/workflows/` - CI/CD pipelines for GitHub Actions
- `.assetsignore` - Cloudflare asset exclusion rules

### Development
- `next.config.ts` - Next.js framework configuration
- `tailwind.config.ts` - CSS framework and design system
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Node.js project configuration

### Environment
- `.env.example` - Environment variable template
- `.env.local` - Local environment variables (not tracked)
- `.gitignore` - Version control exclusions

## Naming Conventions

### Files and Directories
- Use kebab-case for file names: `lead-magnet-form.tsx`
- Use PascalCase for React components: `LeadMagnetForm`
- Use camelCase for utilities and functions: `validateEmail`

### Git Branches
- `main` - Production branch
- `feature/*` - Feature development branches
- `hotfix/*` - Critical bug fixes
- `preview/*` - Preview/staging branches

## Build Outputs

```
.next/                         # Next.js build cache
.vercel/                       # Next.js build output for Cloudflare
.wrangler/                     # Cloudflare Workers local cache
```

## Security Notes

- Environment variables are never committed to the repository
- Sensitive configuration is managed through Cloudflare's environment variable system
- DNS backups are stored locally but consider moving to secure cloud storage for production