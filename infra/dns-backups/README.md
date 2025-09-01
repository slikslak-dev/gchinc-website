# DNS Backups

This directory contains DNS configuration backups for the domain infrastructure.

## Files

- `cf-dns-backup-goldencanadianhomes.ca-2025-08-29.json` - Cloudflare DNS backup for goldencanadianhomes.ca domain

## Purpose

These backups serve as historical records and disaster recovery resources for DNS configurations.

## Restoration

To restore DNS records from a backup:

1. Log into Cloudflare Dashboard
2. Navigate to the domain's DNS management
3. Import the JSON configuration or manually recreate records based on the backup

## Note

For production infrastructure, consider storing these backups in a dedicated infrastructure repository or secure cloud storage with versioning enabled.
