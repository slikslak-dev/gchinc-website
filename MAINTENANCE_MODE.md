# Maintenance Mode Control

## 🔧 Current Status: ENABLED

The website is currently in maintenance mode. All visitors will see a "Coming Soon" page.

## How to Control Maintenance Mode

### To DISABLE Maintenance Mode (Make Site Live):
1. Open `src/middleware.ts`
2. Change line 8 from:
   ```typescript
   const MAINTENANCE_MODE = true
   ```
   to:
   ```typescript
   const MAINTENANCE_MODE = false
   ```
3. Build and deploy:
   ```bash
   npm run deploy
   ```

### To ENABLE Maintenance Mode (Show Coming Soon):
1. Open `src/middleware.ts`
2. Change line 8 from:
   ```typescript
   const MAINTENANCE_MODE = false
   ```
   to:
   ```typescript
   const MAINTENANCE_MODE = true
   ```
3. Build and deploy:
   ```bash
   npm run deploy
   ```

## Admin Access During Maintenance

### Method 1: IP Bypass
Add your IP address to the `BYPASS_IPS` array in `src/middleware.ts`:
```typescript
const BYPASS_IPS = [
  'YOUR_IP_HERE', // Replace with your actual IP
]
```

### Method 2: Cookie Bypass
Set a browser cookie:
- Name: `maintenance-bypass`
- Value: `gchi-admin-2025`

You can set this cookie in your browser's developer console:
```javascript
document.cookie = "maintenance-bypass=gchi-admin-2025; path=/; max-age=86400"
```

### Method 3: Direct Page Access
The maintenance page itself can always be accessed directly at:
- `/maintenance`

## Customizing the Maintenance Page

Edit `src/app/maintenance/page.tsx` to:
- Change the progress percentage (line 76)
- Update the expected launch date (line 85)
- Modify the contact email (line 103)
- Add or remove features (lines 40-67)

## Quick Commands

```bash
# Deploy with maintenance mode (current setting)
npm run deploy

# Test locally
npm run dev
# Visit http://localhost:3000

# Build and preview as it will appear on Cloudflare
npm run preview:worker
# Visit http://localhost:8787
```
