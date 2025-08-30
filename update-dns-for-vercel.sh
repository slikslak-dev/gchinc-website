#!/bin/bash

# Cloudflare API Configuration
ZONE_ID="4d132e7391afac228a112af6d5154665"
API_TOKEN="HMmHIl7GTilNq9SXzlAXXZO1EiusQkGTAquueWwZ"

# DNS Record IDs (retrieved from API)
ROOT_RECORD_ID="5af557854bc42422d262d50039ef0301"
WWW_RECORD_ID="2b1b6ad4c7dba412dbf6b0818f3c6f4e"

echo "🚀 Updating DNS records for Vercel deployment..."
echo "================================================"

# Step 1: Delete existing root domain A record
echo "1. Deleting old A record for goldencanadianhomes.ca..."
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$ROOT_RECORD_ID" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     --silent | jq '.success'

# Step 2: Delete existing www A record
echo "2. Deleting old A record for www.goldencanadianhomes.ca..."
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$WWW_RECORD_ID" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     --silent | jq '.success'

# Step 3: Add new A record for Vercel (root domain)
echo "3. Adding new A record for goldencanadianhomes.ca -> 76.76.21.21..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{
       "type": "A",
       "name": "goldencanadianhomes.ca",
       "content": "76.76.21.21",
       "ttl": 1,
       "proxied": false
     }' \
     --silent | jq '.success'

# Step 4: Add CNAME record for www subdomain
echo "4. Adding CNAME record for www -> cname.vercel-dns.com..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{
       "type": "CNAME",
       "name": "www",
       "content": "cname.vercel-dns.com",
       "ttl": 1,
       "proxied": false
     }' \
     --silent | jq '.success'

echo ""
echo "✅ DNS update complete!"
echo ""
echo "Next steps:"
echo "1. Wait 1-5 minutes for DNS propagation"
echo "2. Configure your domain in Vercel dashboard"
echo "3. Verify SSL certificate issuance in Vercel"
echo ""
echo "To verify DNS changes, run:"
echo "dig goldencanadianhomes.ca"
echo "dig www.goldencanadianhomes.ca"
