# Deployment (Cloudflare Pages + Next.js 15)

## Overview
- **Platform**: Cloudflare Pages
- **Framework**: Next.js 15 (App Router)
- **Builder**: @cloudflare/next-on-pages
- **Runtime**: Cloudflare Workers (Edge Runtime)

## Prerequisites
- Cloudflare account with Pages enabled
- Node.js 20+ installed locally
- npm package manager
- Resend account for email services

## Cloudflare Pages Build Settings

In your Cloudflare Pages dashboard (Settings → Builds):
- **Build command**: `npx @cloudflare/next-on-pages@latest`
- **Output directory**: `.vercel/output/static`
- **Node version**: 20.x (for the build step)
- **Compatibility date**: 2025-01-01 (or latest)

## Environment Variables (Cloudflare Pages Dashboard)

Set these in Cloudflare Pages dashboard (Settings → Environment Variables):

| Variable | Description | Type |
|----------|-------------|------|
| `RESEND_API_KEY` | Resend API key for email sending | Encrypted |
| `FROM_EMAIL` | Sender email address (e.g., noreply@gchi.ca) | Plaintext |
| `ADMIN_EMAIL` | Admin notification recipient | Plaintext |
| `REPLY_TO_EMAIL` | Reply-to address for emails | Plaintext |
| `NEXT_PUBLIC_APP_URL` | Production URL (https://goldencanadianhomes.ca) | Plaintext |

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
For Next.js dev server, create `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@gchi.ca
ADMIN_EMAIL=admin@gchi.ca
REPLY_TO_EMAIL=info@gchi.ca
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For Cloudflare preview, create `.dev.vars`:
```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@gchi.ca
ADMIN_EMAIL=admin@gchi.ca
REPLY_TO_EMAIL=info@gchi.ca
NEXT_PUBLIC_APP_URL=http://localhost:8788
```

### 3. Development Commands
```bash
# Standard Next.js development
npm run dev

# Build for Cloudflare Pages
npm run build:cf

# Preview with Cloudflare runtime (requires wrangler)
npm run preview:cf
```

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. **Connect GitHub Repository**
   - Go to Cloudflare Dashboard → Workers & Pages
   - Click "Create application" → "Pages" → "Connect to Git"
   - Select your GitHub repository
   - Configure build settings (see above)

2. **Automatic Deployments**
   - **Production**: Pushes to `main` branch
   - **Preview**: All other branches and pull requests
   - Each PR gets a unique preview URL

3. **Environment Variables**
   - Set in Pages dashboard (Settings → Environment Variables)
   - Configure for both Production and Preview environments

### Method 2: CLI Deployment (Optional)

```bash
# Build for Cloudflare Pages
npm run build:cf

# Deploy to Cloudflare Pages
npm run deploy:cf

# Deploy to production branch
npm run deploy:prod
```

## CI/CD with Cloudflare Pages

### Deployment Flow
1. **Development**: Work on feature branches
2. **Preview**: Open PR → Automatic preview deployment
3. **Review**: Test preview URL, get feedback
4. **Production**: Merge to main → Automatic production deployment

### Rollback Procedures

#### Via Dashboard (Recommended)
1. Go to Pages project → Deployments tab
2. Find the previous stable deployment
3. Click "Promote to production"

#### Via CLI
```bash
# List recent deployments
wrangler pages deployment list --project-name=gchi-website

# Rollback to specific deployment
wrangler pages rollback --project-name=gchi-website --deployment-id=<id>
```

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email sending | Yes |
| `FROM_EMAIL` | Sender email address | Yes |
| `ADMIN_EMAIL` | Admin notification recipient | Yes |
| `REPLY_TO_EMAIL` | Reply-to email address | Yes |
| `NURTURE_API_KEY` | API key for nurture email endpoint | Optional |
| `NEXT_PUBLIC_APP_URL` | Public application URL | Yes |

## API Endpoints

All API routes are Edge-compatible and include rate limiting:

| Endpoint | Method | Description |
|----------|---------|-------------|
| `/api/investor-application` | POST | Submit investor application |
| `/api/lead-magnet` | POST | Request lead magnet download |
| `/api/nurture-email` | POST/PUT | Send nurture emails |

### Rate Limiting
- In-memory rate limiting in development
- Cloudflare WAF rate limiting recommended for production
- Optional KV-based rate limiting for additional protection

## Production Optimizations

### 1. Cloudflare WAF Rules
Configure rate limiting rules in Cloudflare Dashboard:
- Path: `/api/*`
- Rate: 3 requests per 15 minutes per IP
- Action: Block for 15 minutes

### 2. Cache Rules
Set up cache rules for static assets:
- `/_next/static/*` → Cache for 1 year
- `/images/*` → Cache for 1 month
- API routes → No cache

### 3. Security Headers

Create a `_headers` file in the root directory:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/api/*
  Cache-Control: no-store, no-cache, must-revalidate
```

Alternatively, configure headers in Cloudflare Rules (Transform Rules → Modify Response Headers).

## Monitoring and Debugging

### View Logs
```bash
# Development
wrangler pages deployment tail --project-name=gchi-website

# Production
wrangler pages deployment tail --project-name=gchi-website --environment=production
```

### Performance Monitoring
- Use Cloudflare Analytics dashboard
- Monitor Core Web Vitals
- Track API response times

## Rollback Procedure

### Quick Rollback
```bash
# List deployments
wrangler pages deployment list --project-name=gchi-website

# Rollback to previous version
wrangler pages rollback --project-name=gchi-website
```

### Emergency Procedure
1. Access Cloudflare Dashboard
2. Navigate to Workers & Pages > gchi-website
3. Select previous deployment
4. Click "Rollback to this deployment"

## Troubleshooting

### Common Issues

#### Build Failures
- Ensure all dependencies are Edge-compatible
- Check for Node.js-specific APIs in server code
- Verify environment variables are set

#### Email Not Sending
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for API errors
- Ensure FROM_EMAIL is verified in Resend

#### Rate Limiting Issues
- Clear KV namespace if testing rate limits
- Check WAF rules in Cloudflare Dashboard
- Verify IP detection in headers

## Support and Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages)
- [Resend Documentation](https://resend.com/docs)

## Contact
For deployment issues or questions, refer to the WARP.md file or contact the development team.
