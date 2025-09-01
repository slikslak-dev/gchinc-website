# CI/CD Pipeline Documentation

## 🚀 Overview

This project uses an automated CI/CD pipeline that deploys your website to Cloudflare Pages whenever you push code to GitHub.

## 📊 Pipeline Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Local Dev      │────▶│    GitHub       │────▶│  Cloudflare     │
│  (Your PC)      │ push│    Repository   │ auto│    Pages        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                              │                        │
                              ▼                        ▼
                        GitHub Actions           Live Website
                        (Build & Deploy)         gchi-website.pages.dev
```

## 🔄 Workflow Types

### 1. **Production Deployment** (Main Branch)
- **Trigger**: Push to `main` branch
- **URL**: `https://gchi-website.pages.dev`
- **Purpose**: Live production website

### 2. **Preview Deployment** (Pull Requests)
- **Trigger**: Opening or updating a pull request
- **URL**: `https://preview-{PR-NUMBER}.gchi-website.pages.dev`
- **Purpose**: Test changes before merging

## 🛠️ Setup Instructions

### Step 1: Get Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use "Custom token" template with these permissions:
   - **Account**: Cloudflare Pages:Edit
   - **Zone**: Page Rules:Edit (if using custom domain)
4. Copy the generated token

### Step 2: Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret Name | Value | How to Get |
|------------|-------|------------|
| `CLOUDFLARE_API_TOKEN` | Your API token | From Step 1 above |
| `CLOUDFLARE_ACCOUNT_ID` | `241eddf17c10471f063b5c6a71656221` | Your account ID (shown above) |
| `NEXT_PUBLIC_SITE_URL` | `https://gchi-website.pages.dev` | Your production URL |

### Step 3: Environment Variables

For sensitive runtime variables (API keys, etc.), add them in Cloudflare Dashboard:
1. Go to Workers & Pages → gchi-website → Settings → Environment variables
2. Add variables for both Production and Preview environments

## 📝 Development Workflow

### Daily Development Process

```bash
# 1. Start local development
npm run dev

# 2. Make your changes
# Edit files, test locally

# 3. Commit your changes
git add .
git commit -m "feat: add new feature"

# 4. Push to GitHub (triggers auto-deploy)
git push origin main
```

### Feature Branch Workflow (Recommended)

```bash
# 1. Create a feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push feature branch
git push origin feature/new-feature

# 4. Create Pull Request on GitHub
# This triggers a preview deployment

# 5. After review, merge to main
# This triggers production deployment
```

## 🔧 Local Commands

### Development
```bash
# Start local dev server
npm run dev

# Build locally to test
npm run build

# Test Cloudflare Worker locally
npm run dev:worker
```

### Manual Deployment (if needed)
```bash
# Deploy to production manually
npm run deploy

# Deploy to specific environment
npm run deploy:prod
```

## 🚦 Maintenance Mode

### Enable Maintenance Mode
1. Edit `src/middleware.ts`
2. Set `MAINTENANCE_MODE = true`
3. Commit and push to deploy

### Disable Maintenance Mode
1. Edit `src/middleware.ts`
2. Set `MAINTENANCE_MODE = false`
3. Commit and push to deploy

### Bypass Maintenance (for testing)
- Add your IP to `BYPASS_IPS` array in middleware
- Or set cookie: `maintenance-bypass=gchi-admin-2025`

## 📊 Monitoring Deployments

### GitHub Actions
- Go to repository → Actions tab
- View deployment status and logs
- Re-run failed deployments if needed

### Cloudflare Dashboard
- Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
- Click on `gchi-website` project
- View deployment history and analytics

## 🐛 Troubleshooting

### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm ci --legacy-peer-deps
npm run build
```

### Deployment Failures
1. Check GitHub Actions logs
2. Verify Cloudflare API token is valid
3. Ensure account ID is correct

### Local vs Production Differences
- Check environment variables in Cloudflare Dashboard
- Verify `nodejs_compat` flag is enabled in Cloudflare Pages settings

## 📈 Best Practices

1. **Always test locally first**: `npm run dev`
2. **Use feature branches** for new features
3. **Create pull requests** for code review
4. **Write descriptive commit messages**
5. **Keep sensitive data in environment variables**
6. **Monitor deployments** in GitHub Actions

## 🔒 Security Notes

- Never commit `.env.local` or secrets to Git
- Use GitHub Secrets for CI/CD credentials
- Use Cloudflare environment variables for runtime secrets
- Rotate API tokens regularly

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## Quick Reference

### Push to Production
```bash
git add .
git commit -m "your message"
git push origin main
# Wait 2-3 minutes for deployment
```

### Create Preview
```bash
git checkout -b feature/name
git add .
git commit -m "your message"
git push origin feature/name
# Create PR on GitHub
```

### Check Status
- GitHub Actions: https://github.com/slikslak-dev/gchinc-website/actions
- Live Site: https://gchi-website.pages.dev
- Cloudflare Dashboard: https://dash.cloudflare.com
