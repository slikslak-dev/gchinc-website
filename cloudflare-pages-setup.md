# Cloudflare Pages Setup Guide for GCHI Website

## ✅ Prerequisites Complete
- Repository: https://github.com/slikslak-dev/gchinc-website
- Build tested locally and working
- DNS backup created
- Email records documented

## 📋 Manual Steps Required in Cloudflare Dashboard

### Step 1: Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select **GitHub** and authorize access to `slikslak-dev/gchinc-website`

### Step 2: Configure Build Settings

Use these exact settings:

**Framework preset:** Next.js  
**Build command:** `npm ci && npm run build`  
**Build output directory:** `.next` (or leave blank, Cloudflare auto-detects)  
**Root directory:** `/` (leave as default)  
**Node version:** 20 or higher  

### Step 3: Environment Variables

Add these environment variables for both **Production** and **Preview**:

```
RESEND_API_KEY=<your-resend-api-key>
FROM_EMAIL=noreply@goldencanadianhomes.ca
ADMIN_EMAIL=admin@goldencanadianhomes.ca
REPLY_TO_EMAIL=info@goldencanadianhomes.ca
NEXT_PUBLIC_APP_URL=https://goldencanadianhomes.ca
```

**Important:** Initially set `NEXT_PUBLIC_APP_URL` to your `.pages.dev` URL, then update after domain is attached.

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the first build to complete (3-5 minutes)
3. Test the `.pages.dev` URL to ensure everything works

### Step 5: Add Custom Domain

1. In your Pages project, go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Add `goldencanadianhomes.ca`
4. Add `www.goldencanadianhomes.ca`
5. Since the domain is already in Cloudflare, DNS will be configured automatically

### Step 6: Verify DNS Changes

DNS records will be automatically updated to:
- `goldencanadianhomes.ca` → CNAME to your `.pages.dev` domain (with CNAME flattening)
- `www.goldencanadianhomes.ca` → CNAME to your `.pages.dev` domain

**Email records will remain untouched!**

### Step 7: SSL Configuration

1. Go to **SSL/TLS** → **Edge Certificates**
2. Ensure **Universal SSL** is ON
3. Set **SSL/TLS encryption mode** to **Full (strict)**

### Step 8: Update Environment Variable

After domain is live:
1. Go to Pages project → **Settings** → **Environment variables**
2. Update `NEXT_PUBLIC_APP_URL` to `https://goldencanadianhomes.ca`
3. Trigger a new deployment from **Deployments** tab

## 🔍 Verification Checklist

- [ ] `.pages.dev` URL loads correctly
- [ ] Custom domains resolve properly
- [ ] HTTPS/SSL certificate is active
- [ ] Forms submit successfully
- [ ] API routes respond correctly
- [ ] Email services still work (test sending)

## 🚨 Rollback Plan

If issues occur:
1. Remove custom domains from Pages project
2. Restore DNS from backup: `dns-backups/cf-dns-backup-goldencanadianhomes.ca-2025-08-29.json`
3. Contact support if needed

## 📝 Notes

- Build time: ~3-5 minutes per deployment
- Preview deployments created for each git push
- Production deployments only from `main` branch
- Cloudflare Pages supports Next.js 15 with App Router
