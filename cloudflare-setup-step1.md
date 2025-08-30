# Step 1: Cloudflare Zone Setup and DNS Configuration ✅

## Current Status
- **Domain**: goldencanadianhomes.ca
- **Zone ID**: 4d132e7391afac228a112af6d5154665
- **Status**: Active
- **Plan**: Free Website
- **Cloudflare Configured**: ✅ Yes

## DNS Records Currently Configured

### A Records
1. **Root Domain (goldencanadianhomes.ca)**
   - Type: A
   - IP: 15.156.136.97
   - Proxied: ✅ Yes (Orange Cloud - Traffic goes through Cloudflare)

2. **www Subdomain (www.goldencanadianhomes.ca)**
   - Type: A
   - IP: 15.156.136.97
   - Proxied: ✅ Yes (Orange Cloud)

3. **slikslak Subdomain (slikslak.goldencanadianhomes.ca)**
   - Type: A
   - IP: 15.156.136.97
   - Proxied: ❌ No (Grey Cloud - DNS only)

### MX Record (Email)
- **send.goldencanadianhomes.ca**
  - Priority: Default
  - Mail Server: feedback-smtp.us-east-1.amazonses.com
  - For: Amazon SES email service

### TXT Records (Email Authentication)
1. **SPF Record** (goldencanadianhomes.ca)
   - Content: "v=spf1 include:spf.mailjet.com ?all"
   - Purpose: Authorizes Mailjet to send emails

2. **DMARC Record** (_dmarc.goldencanadianhomes.ca)
   - Content: "v=DMARC1; p=none; rua=mailto:eb2651adaf8647dea98e74b30c7440be@dmarc-reports.cloudflare.net"
   - Purpose: Email authentication policy

3. **Mailjet Domain Keys**
   - mailjet._d5b5e0fb.goldencanadianhomes.ca
   - mailjet._domainkey.goldencanadianhomes.ca
   - Purpose: Email signing verification

4. **Resend Domain Key**
   - resend._domainkey.goldencanadianhomes.ca
   - Purpose: Alternative email service authentication

5. **Amazon SES SPF** (send.goldencanadianhomes.ca)
   - Content: "v=spf1 include:amazonses.com -all"
   - Purpose: Authorizes Amazon SES for sending

## Required Actions for Vercel Deployment

### 1. Update DNS Records for Vercel
We need to update the A records to point to Vercel's IP addresses:

```bash
# Remove existing A records pointing to 15.156.136.97
# Add new A records for Vercel
Root Domain (goldencanadianhomes.ca):
- Type: A
- IP: 76.76.21.21
- Proxied: No (Grey Cloud for Vercel)

WWW Subdomain (www.goldencanadianhomes.ca):
- Type: CNAME
- Target: cname.vercel-dns.com
- Proxied: No (Grey Cloud for Vercel)
```

### 2. SSL/TLS Configuration
Current SSL mode needs to be configured:
- Recommended: Full (strict) - Since Vercel provides SSL certificates
- This ensures end-to-end encryption

### 3. Page Rules (Optional but Recommended)
- Force HTTPS redirect
- www to non-www redirect (or vice versa based on preference)

## Next Steps Commands

### Update DNS for Vercel (Using Cloudflare API):

```bash
# Delete existing A record for root domain
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/4d132e7391afac228a112af6d5154665/dns_records/[RECORD_ID]" \
     -H "Authorization: Bearer HMmHIl7GTilNq9SXzlAXXZO1EiusQkGTAquueWwZ"

# Add new A record for Vercel
curl -X POST "https://api.cloudflare.com/client/v4/zones/4d132e7391afac228a112af6d5154665/dns_records" \
     -H "Authorization: Bearer HMmHIl7GTilNq9SXzlAXXZO1EiusQkGTAquueWwZ" \
     -H "Content-Type: application/json" \
     --data '{
       "type": "A",
       "name": "goldencanadianhomes.ca",
       "content": "76.76.21.21",
       "proxied": false
     }'

# Update www to CNAME
curl -X POST "https://api.cloudflare.com/client/v4/zones/4d132e7391afac228a112af6d5154665/dns_records" \
     -H "Authorization: Bearer HMmHIl7GTilNq9SXzlAXXZO1EiusQkGTAquueWwZ" \
     -H "Content-Type: application/json" \
     --data '{
       "type": "CNAME",
       "name": "www",
       "content": "cname.vercel-dns.com",
       "proxied": false
     }'
```

## Summary
✅ Cloudflare zone is active and configured
✅ Domain is properly connected to Cloudflare
✅ Email authentication records are in place
⚠️ DNS records need updating for Vercel deployment
⚠️ SSL/TLS settings need configuration for optimal security

## Important Notes
1. Current DNS points to IP 15.156.136.97 (unknown service)
2. Email services use both Mailjet and Amazon SES
3. Proxied status should be disabled for Vercel to work properly
4. Keep email-related DNS records unchanged to maintain email functionality

---
**Step 1 Status**: Ready for DNS updates to point to Vercel
**Next**: Proceed to Step 2 - Update DNS records for Vercel deployment
