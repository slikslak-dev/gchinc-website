-- GCHI Database Schema for Cloudflare D1
-- Run this with: wrangler d1 execute gchi-database --file=schema.sql

-- Investor Applications Table
CREATE TABLE IF NOT EXISTS investor_applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Personal Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  province TEXT NOT NULL,
  
  -- Investment Details
  investment_amount TEXT NOT NULL,
  investor_type TEXT NOT NULL,
  eligibility_status TEXT NOT NULL, -- JSON array stored as text
  investment_timeline TEXT NOT NULL,
  
  -- Additional Information
  notes TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT 0,
  
  -- Metadata
  form_time_taken INTEGER, -- milliseconds
  ip_address TEXT,
  user_agent TEXT,
  source TEXT DEFAULT 'direct',
  
  -- Status tracking
  status TEXT DEFAULT 'new' CHECK(status IN ('new', 'contacted', 'qualified', 'converted', 'rejected')),
  admin_notes TEXT,
  assigned_to TEXT,
  
  -- Timestamps
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  contacted_at DATETIME,
  converted_at DATETIME
);

-- Lead Magnets Table
CREATE TABLE IF NOT EXISTS lead_magnets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  lead_magnet_type TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  
  -- Lead scoring
  lead_score INTEGER DEFAULT 0,
  engagement_score INTEGER DEFAULT 0,
  
  -- Email tracking
  emails_sent INTEGER DEFAULT 0,
  emails_opened INTEGER DEFAULT 0,
  emails_clicked INTEGER DEFAULT 0,
  last_email_sent_at DATETIME,
  nurture_day INTEGER DEFAULT 0,
  unsubscribed BOOLEAN DEFAULT 0,
  
  -- Metadata
  ip_address TEXT,
  user_agent TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Email Queue Table (backup for Cloudflare Queue)
CREATE TABLE IF NOT EXISTS email_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipient_email TEXT NOT NULL,
  recipient_name TEXT,
  email_type TEXT NOT NULL,
  template_data TEXT, -- JSON stored as text
  
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'processing', 'sent', 'failed', 'bounced')),
  attempts INTEGER DEFAULT 0,
  max_attempts INTEGER DEFAULT 3,
  
  scheduled_for DATETIME DEFAULT CURRENT_TIMESTAMP,
  sent_at DATETIME,
  failed_at DATETIME,
  error_message TEXT,
  
  message_id TEXT, -- Resend message ID
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Form Abandonment Tracking
CREATE TABLE IF NOT EXISTS form_abandonment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT UNIQUE NOT NULL,
  form_data TEXT, -- JSON stored as text
  current_step INTEGER DEFAULT 1,
  
  email TEXT,
  recovery_token TEXT UNIQUE,
  recovery_email_sent BOOLEAN DEFAULT 0,
  recovery_email_sent_at DATETIME,
  recovered BOOLEAN DEFAULT 0,
  recovered_at DATETIME,
  
  fields_completed INTEGER DEFAULT 0,
  time_spent INTEGER, -- milliseconds
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  abandoned_at DATETIME
);

-- Analytics Events Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  event_category TEXT,
  event_value TEXT,
  
  user_id TEXT,
  session_id TEXT,
  
  page_url TEXT,
  referrer TEXT,
  
  metadata TEXT, -- JSON stored as text
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Rate Limiting Table (backup for KV)
CREATE TABLE IF NOT EXISTS rate_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  identifier TEXT NOT NULL, -- IP or email
  endpoint TEXT NOT NULL,
  
  request_count INTEGER DEFAULT 1,
  window_start DATETIME DEFAULT CURRENT_TIMESTAMP,
  window_end DATETIME,
  
  blocked BOOLEAN DEFAULT 0,
  blocked_until DATETIME,
  
  UNIQUE(identifier, endpoint, window_start)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON investor_applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_status ON investor_applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created ON investor_applications(created_at);

CREATE INDEX IF NOT EXISTS idx_leads_email ON lead_magnets(email);
CREATE INDEX IF NOT EXISTS idx_leads_score ON lead_magnets(lead_score);

CREATE INDEX IF NOT EXISTS idx_email_queue_status ON email_queue(status);
CREATE INDEX IF NOT EXISTS idx_email_queue_scheduled ON email_queue(scheduled_for);

CREATE INDEX IF NOT EXISTS idx_abandonment_email ON form_abandonment(email);
CREATE INDEX IF NOT EXISTS idx_abandonment_token ON form_abandonment(recovery_token);

CREATE INDEX IF NOT EXISTS idx_analytics_session ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at);

-- Create views for common queries
CREATE VIEW IF NOT EXISTS application_summary AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as total_applications,
  SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as conversions,
  investment_amount,
  investment_timeline
FROM investor_applications
GROUP BY DATE(created_at), investment_amount, investment_timeline;

CREATE VIEW IF NOT EXISTS lead_performance AS
SELECT 
  lead_magnet_type,
  COUNT(*) as total_leads,
  AVG(lead_score) as avg_score,
  SUM(CASE WHEN emails_opened > 0 THEN 1 ELSE 0 END) as engaged_leads,
  DATE(created_at) as date
FROM lead_magnets
GROUP BY lead_magnet_type, DATE(created_at);
