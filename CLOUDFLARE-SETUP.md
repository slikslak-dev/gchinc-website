# 🚀 Cloudflare Pages Deployment Guide for GCHI
## Updated: August 29, 2025

## Prerequisites
```bash
# Install Wrangler CLI (v4.33.1 as of Aug 2025)
npm install -g wrangler@latest

# Login to Cloudflare
wrangler login
```

## Step 1: Create Cloudflare Resources

### 1.1 Create D1 Database
```bash
# Create the database
wrangler d1 create gchi-database

# Note the database_id that's returned
# Update wrangler.toml with this ID

# Apply schema
wrangler d1 execute gchi-database --file=schema.sql
```

### 1.2 Create KV Namespace
```bash
# Create KV namespace for rate limiting
wrangler kv:namespace create "RATE_LIMIT"

# Note the ID and update wrangler.toml
```

### 1.3 Create R2 Bucket
```bash
# Create R2 bucket for documents
wrangler r2 bucket create gchi-documents
```

### 1.4 Create Queue
```bash
# Create email queue
wrangler queues create email-queue
```

## Step 2: Update Your Code for Cloudflare

### 2.1 Install Cloudflare Packages
```bash
# Current versions as of Aug 2025
npm install @cloudflare/workers-types@^4.20240924.0
npm install --save-dev @cloudflare/next-on-pages@^1.13.15
npm install --save-dev wrangler@^4.33.1

# Required for Next.js 15 compatibility
npm install --save-dev vercel
```

### 2.2 Update package.json
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "build:cf": "npx @cloudflare/next-on-pages",
    "preview:cf": "wrangler pages dev",
    "deploy:cf": "wrangler pages deploy",
    "db:migrate": "wrangler d1 execute gchi-database --file=schema.sql --local",
    "db:migrate:prod": "wrangler d1 execute gchi-database --file=schema.sql --remote",
    "db:seed": "wrangler d1 execute gchi-database --file=seed.sql --local"
  }
}
```

### 2.3 Create Edge Runtime API Routes
Update your API routes to use Edge Runtime with Next.js 15 syntax:

```typescript
// src/app/api/investor-application/route.ts
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  // Access Cloudflare bindings via process.env in Next.js 15
  const env = process.env as unknown as CloudflareEnv
  const db = new GCHIDatabase(env.DB)
  const rateLimiter = new RateLimiter(env.RATE_LIMIT)
  // ... rest of your code
}
```

## Step 3: Environment Variables

### 3.1 Local Development (.dev.vars)
Create `.dev.vars` file:
```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=invest@gchi.ca
ADMIN_EMAIL=admin@gchi.ca
REPLY_TO_EMAIL=support@gchi.ca
NEXT_PUBLIC_APP_URL=http://localhost:3000
NURTURE_API_KEY=your_secure_api_key
```

### 3.2 Production Variables
Set in Cloudflare Dashboard:
1. Go to Pages > Your Project > Settings > Environment variables
2. Add all variables from .dev.vars
3. Update NEXT_PUBLIC_APP_URL to your production domain

## Step 4: Deploy to Cloudflare Pages

### 4.1 Initial Setup
```bash
# Build your project for Cloudflare
npm run build
npm run build:cf

# Create Pages project
wrangler pages project create gchi-website --production-branch main

# Deploy (from .vercel/output/static directory after build:cf)
wrangler pages deploy .vercel/output/static
```

### 4.2 Connect to GitHub (Recommended)
1. Go to Cloudflare Dashboard > Workers & Pages > Create application > Pages
2. Connect to Git
3. Select your GitHub repository
4. Configure build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
   - Node version: `20.17.0` (or latest LTS)
   - Environment variables: Add all from .dev.vars

### 4.3 Add Bindings
In Cloudflare Dashboard > Pages > Settings > Functions:
1. Add D1 Database binding: `DB` → `gchi-database`
2. Add KV Namespace binding: `RATE_LIMIT` → your KV namespace
3. Add Queue binding: `EMAIL_QUEUE` → `email-queue`
4. Add R2 binding: `DOCUMENTS` → `gchi-documents`

## Step 5: Upload PDFs to R2

```bash
# Upload lead magnet PDFs
wrangler r2 object put gchi-documents/halal-investing-guide.pdf --file=./public/downloads/halal-investing-guide.pdf
wrangler r2 object put gchi-documents/5-sharia-questions.pdf --file=./public/downloads/5-sharia-questions.pdf
wrangler r2 object put gchi-documents/ontario-market-outlook.pdf --file=./public/downloads/ontario-market-outlook.pdf
```

## Step 6: Set Up Email Workers

Create `email-worker.js`:
```javascript
export default {
  async queue(batch, env) {
    for (const message of batch.messages) {
      // Process emails
      await processEmail(message.body, env)
      message.ack()
    }
  }
}
```

Deploy:
```bash
wrangler deploy email-worker.js
```

## Step 7: Analytics Setup

### 7.1 Enable Cloudflare Analytics
1. Go to Analytics & Logs > Web Analytics
2. Add your site
3. Copy the tracking script to your layout.tsx

### 7.2 Create Analytics Worker (Optional)
```javascript
// analytics-worker.js
export default {
  async fetch(request, env) {
    const db = env.DB
    // Custom analytics logic
  }
}
```

## Step 8: Testing

### 8.1 Local Testing
```bash
# Wrangler v4 includes Miniflare 3 built-in
# No separate installation needed

# Run local development with D1 and KV
wrangler pages dev --local --persist-to=.wrangler/state

# Test with bindings
wrangler pages dev --d1=DB --kv=RATE_LIMIT --r2=DOCUMENTS
```

### 8.2 Preview Deployments
```bash
# Deploy to preview
wrangler pages deploy .next --branch=preview
```

## Step 9: Monitoring & Maintenance

### 9.1 View Logs
```bash
# Tail production logs
wrangler tail
```

### 9.2 Database Queries
```bash
# Run SQL queries
wrangler d1 execute gchi-database --command="SELECT COUNT(*) FROM investor_applications"
```

### 9.3 KV Operations
```bash
# List KV keys
wrangler kv:key list --namespace-id=YOUR_NAMESPACE_ID

# Get value
wrangler kv:key get "rate_limit:192.168.1.1" --namespace-id=YOUR_NAMESPACE_ID
```

## Migration Checklist

- [ ] Create D1 database and apply schema
- [ ] Create KV namespace for rate limiting
- [ ] Create R2 bucket and upload PDFs
- [ ] Create email queue
- [ ] Update API routes to use Edge Runtime
- [ ] Update environment variables
- [ ] Test locally with wrangler
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain
- [ ] Set up email workers
- [ ] Enable analytics
- [ ] Test all forms and email flows
- [ ] Monitor first 24 hours

## Troubleshooting

### Common Issues

1. **Build fails**: Ensure you're using `@cloudflare/next-on-pages`
2. **Database not found**: Check binding names match in wrangler.toml
3. **Rate limiting not working**: Verify KV namespace ID is correct
4. **Emails not sending**: Check Resend API key and email worker deployment

### Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [D1 Database Docs](https://developers.cloudflare.com/d1/)
- [Workers KV Docs](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Cloudflare Community](https://community.cloudflare.com/)

## Cost Estimate (Monthly)

| Service | Free Tier | Your Usage | Cost |
|---------|-----------|------------|------|
| Pages Hosting | Unlimited | ✓ | $0 |
| D1 Database | 5GB, 5M reads | ✓ | $0 |
| KV Storage | 100k reads | ✓ | $0 |
| R2 Storage | 10GB | ~100MB | $0 |
| Email Queue | 1M messages | ~10k | $0 |
| Analytics | Unlimited | ✓ | $0 |

**Total: $0/month** (within free tier)

## Next Steps

1. **Add Cloudflare Turnstile**: Free CAPTCHA alternative
2. **Enable Zaraz**: Free tag manager for tracking
3. **Set up Page Rules**: Cache optimization
4. **Configure Web3 Gateway**: If adding crypto payments
5. **Enable Email Routing**: Receive emails at your domain
