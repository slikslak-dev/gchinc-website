#!/bin/bash

# Setup script for GCHI Website Cloudflare Resources
# This script creates optional resources for enhanced functionality

echo "🚀 Setting up Cloudflare resources for GCHI Website..."

# Create KV namespace for rate limiting (optional)
echo "📦 Creating KV namespace for rate limiting..."
wrangler kv:namespace create "RATE_LIMIT" --preview
# Note: Save the IDs returned and update wrangler.toml

# Create D1 database for storing applications (optional)
echo "💾 Creating D1 database..."
wrangler d1 create gchi-applications
# Note: Save the database ID and update wrangler.toml

# Create R2 bucket for PDF storage (optional)
echo "📁 Creating R2 bucket for documents..."
wrangler r2 bucket create gchi-documents
# Note: Update wrangler.toml with bucket configuration

echo "✅ Resources created! Don't forget to:"
echo "1. Update wrangler.toml with the IDs"
echo "2. Add nodejs_compat flag in Cloudflare Dashboard"
echo "3. Set your email secrets via wrangler pages secret put"
