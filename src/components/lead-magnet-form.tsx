'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { validateEmail } from '@/lib/validation'
import type { LeadMagnetData } from '@/lib/types'

interface LeadMagnetFormProps {
  leadMagnetType: 'halal-investing-guide' | 'sharia-questions' | 'ontario-market-outlook'
  title: string
  description: string
  source?: string
  className?: string
  variant?: 'default' | 'modal' | 'inline'
}

export function LeadMagnetForm({ 
  leadMagnetType, 
  title, 
  description, 
  source = 'unknown',
  className = '',
  variant = 'default'
}: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const leadData: LeadMagnetData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        leadMagnetType,
        source,
        submittedAt: new Date().toISOString()
      }

      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Track conversion (you can integrate with analytics here)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion tracking
            event_category: 'Lead Magnet',
            event_label: leadMagnetType,
            value: 1
          })
        }
      } else {
        throw new Error(result.error || 'Failed to download guide')
      }
    } catch (error) {
      console.error('Lead magnet submission error:', error)
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={`text-center p-8 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Success! Check Your Email</h3>
        <p className="text-green-700 mb-4">
          We've sent your <strong>{title}</strong> to <strong>{formData.email}</strong>. 
          The download link should arrive within the next few minutes.
        </p>
        <p className="text-sm text-green-600">
          Don't see it? Check your spam folder or{' '}
          <button 
            onClick={() => setIsSubmitted(false)}
            className="underline hover:no-underline"
          >
            try again
          </button>
        </p>
      </div>
    )
  }

  const baseClasses = variant === 'modal' 
    ? 'bg-white p-6' 
    : variant === 'inline'
    ? 'bg-card border border-border p-6 rounded-lg'
    : 'bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border'

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Enter your first name"
              disabled={isLoading}
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Enter your last name"
              disabled={isLoading}
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.email ? 'border-red-500' : 'border-border'
            }`}
            placeholder="Enter your email address"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="Enter your phone number"
            disabled={isLoading}
          />
        </div>

        {errors.submit && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <p className="text-red-600 text-sm">{errors.submit}</p>
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full text-lg py-4"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              📥 Get Instant Access
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By downloading this guide, you agree to receive email updates about halal investing opportunities. 
          You can unsubscribe at any time. View our{' '}
          <a href="/privacy" className="underline hover:no-underline">privacy policy</a>.
        </p>
      </form>
    </div>
  )
}