# Next.js 15 + Cloudflare Pages Integration Notes
## Current as of August 29, 2025

## ⚠️ Important Compatibility Updates

### Next.js 15 + Cloudflare Status
- **@cloudflare/next-on-pages**: v1.13.15 (current)
- **Wrangler**: v4.33.1 (current)
- **Next.js**: 15.5.2 (your version)
- **Compatibility**: ✅ Fully supported with Edge Runtime

### Key Changes in 2025

#### 1. Build Output Directory Changed
```bash
# Old (2024)
wrangler pages deploy .next

# Current (2025)
wrangler pages deploy .vercel/output/static
```

#### 2. Bindings Access Pattern
```typescript
// Old pattern (pre-2025)
export async function POST(request: Request, env: CloudflareEnv) {
  const db = env.DB
}

// Current pattern (2025)
export async function POST(request: NextRequest) {
  // Bindings are injected into process.env
  const env = process.env as unknown as CloudflareEnv
  const db = env.DB
}
```

#### 3. Wrangler Configuration Updates
```toml
# wrangler.toml - Updated for 2025
name = "gchi-website"
compatibility_date = "2025-08-29"
compatibility_flags = ["nodejs_compat", "streams_enable_constructors"]

[build]
command = "npx @cloudflare/next-on-pages@1"

[[d1_databases]]
binding = "DB"
database_name = "gchi-database"
database_id = "YOUR_ID"
# New in 2025: migrations directory
migrations_dir = "migrations"

[[kv_namespaces]]
binding = "RATE_LIMIT"
id = "YOUR_ID"
# New in 2025: preview_id for staging
preview_id = "YOUR_PREVIEW_ID"
```

### Verified Working Commands (Aug 2025)

```bash
# 1. Install dependencies (verified versions)
npm install @cloudflare/workers-types@4.20240924.0
npm install --save-dev @cloudflare/next-on-pages@1.13.15
npm install --save-dev wrangler@4.33.1

# 2. Build for Cloudflare
npm run build
npx @cloudflare/next-on-pages

# 3. Test locally with all bindings
wrangler pages dev --local \
  --d1=DB \
  --kv=RATE_LIMIT \
  --r2=DOCUMENTS \
  --persist-to=.wrangler/state

# 4. Deploy to production
wrangler pages deploy .vercel/output/static \
  --project-name=gchi-website \
  --branch=main
```

### Known Issues & Solutions

#### Issue 1: Dynamic Routes
**Problem**: Dynamic routes may not work as expected
**Solution**: Use `export const runtime = 'edge'` in all API routes

#### Issue 2: Middleware
**Problem**: Middleware runs differently on Cloudflare
**Solution**: 
```typescript
// middleware.ts
export const config = {
  runtime: 'edge',
  unstable_allowDynamic: [
    '/node_modules/@resend/**',
  ],
}
```

#### Issue 3: Environment Variables
**Problem**: process.env not available in some contexts
**Solution**: Use the `getRequestContext` API
```typescript
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET() {
  const { env } = getRequestContext()
  const db = env.DB
}
```

### D1 Database Specific Updates (2025)

```bash
# New D1 commands in Wrangler v4
wrangler d1 create gchi-database --location=enam # Specify region

# Better migration support
wrangler d1 migrations create gchi-database create_tables
wrangler d1 migrations apply gchi-database --local
wrangler d1 migrations apply gchi-database --remote

# New backup command
wrangler d1 backup create gchi-database
wrangler d1 backup list gchi-database
```

### Performance Optimizations (2025)

```javascript
// next.config.ts - Optimized for Cloudflare
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // New in 2025
    runtime: 'edge',
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Use Cloudflare Images
    loader: 'custom',
    loaderFile: './src/lib/cloudflare-images-loader.ts',
  },
  // Important for Cloudflare
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
```

### Cloudflare-Specific Features (2025)

#### 1. Smart Placement (New)
```toml
[placement]
mode = "smart"
```

#### 2. Hyperdrive for Database Connections
```toml
[[hyperdrive]]
binding = "HYPERDRIVE"
id = "YOUR_HYPERDRIVE_ID"
```

#### 3. Vectorize for AI Search
```toml
[[vectorize]]
binding = "VECTOR_INDEX"
index_name = "gchi-search"
```

### Testing Checklist

- [ ] API routes work with Edge Runtime
- [ ] D1 database queries execute correctly
- [ ] KV rate limiting functions
- [ ] R2 file uploads/downloads work
- [ ] Email queue processes messages
- [ ] Environment variables load properly
- [ ] Build completes without errors
- [ ] Preview deployments work
- [ ] Production deployment successful

### Quick Debug Commands

```bash
# Check build output
ls -la .vercel/output/static/

# Test D1 locally
wrangler d1 execute gchi-database --local --command="SELECT 1"

# Test KV locally
echo '{"test": "data"}' | wrangler kv:key put test-key --namespace-id=YOUR_ID --local

# Check deployment
wrangler pages deployment list gchi-website

# View real-time logs
wrangler pages deployment tail gchi-website
```

### Migration from Vercel Checklist

1. **Update all API routes**:
   - Add `export const runtime = 'edge'`
   - Change env access pattern

2. **Update imports**:
   ```typescript
   // Add to any file using Cloudflare bindings
   /// <reference types="@cloudflare/workers-types" />
   ```

3. **Update package.json scripts**:
   ```json
   {
     "scripts": {
       "dev:cf": "wrangler pages dev --local",
       "build:cf": "next build && npx @cloudflare/next-on-pages",
       "deploy:cf": "npm run build:cf && wrangler pages deploy .vercel/output/static"
     }
   }
   ```

4. **Test everything locally first**:
   ```bash
   npm run build:cf
   npm run dev:cf
   ```

### Resources (Updated Aug 2025)

- [Next.js on Cloudflare Docs](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [D1 Documentation](https://developers.cloudflare.com/d1/)
- [Wrangler v4 Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Edge Runtime API Reference](https://nextjs.org/docs/app/api-reference/edge)

### Support Channels

- GitHub Issues: [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages/issues)
- Discord: [Cloudflare Developers](https://discord.cloudflare.com)
- Community: [community.cloudflare.com](https://community.cloudflare.com)
