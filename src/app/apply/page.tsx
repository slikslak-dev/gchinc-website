'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// TypeScript interfaces for type safety
interface FormData {
  // Personal Information
  fullName: string
  email: string
  phone: string
  province: string
  
  // Investment Details
  investmentAmount: string
  investorType: string
  eligibilityStatus: string[]
  investmentTimeline: string
  
  // Additional Information
  notes: string
  privacyConsent: boolean
  
  // Anti-spam fields (honeypot)
  website: string
  company: string
}

interface FormErrors {
  [key: string]: string
}

const PROVINCES = [
  { value: '', label: 'Select your province/territory' },
  { value: 'AB', label: 'Alberta' },
  { value: 'BC', label: 'British Columbia' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'NB', label: 'New Brunswick' },
  { value: 'NL', label: 'Newfoundland and Labrador' },
  { value: 'NS', label: 'Nova Scotia' },
  { value: 'ON', label: 'Ontario' },
  { value: 'PE', label: 'Prince Edward Island' },
  { value: 'QC', label: 'Quebec' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'NT', label: 'Northwest Territories' },
  { value: 'NU', label: 'Nunavut' },
  { value: 'YT', label: 'Yukon' },
]

const INVESTMENT_AMOUNTS = [
  { value: '', label: 'Select investment amount' },
  { value: '10k-15k', label: '$10,000 - $15,000' },
  { value: '15k-25k', label: '$15,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k+', label: '$50,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const INVESTOR_TYPES = [
  { value: '', label: 'Select investor type' },
  { value: 'individual', label: 'Individual' },
  { value: 'corporation', label: 'Corporation' },
  { value: 'trust', label: 'Trust' },
  { value: 'other', label: 'Other' },
]

const ELIGIBILITY_OPTIONS = [
  { value: 'accredited', label: 'Accredited Investor' },
  { value: 'om-eligible', label: 'OM-Eligible Investor' },
  { value: 'not-sure', label: 'Not sure about my status' },
]

const INVESTMENT_TIMELINES = [
  { value: '', label: 'When are you looking to invest?' },
  { value: 'immediately', label: 'Immediately (within 30 days)' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6months+', label: '6+ months' },
  { value: 'exploring', label: 'Just exploring options' },
]

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    province: '',
    investmentAmount: '',
    investorType: '',
    eligibilityStatus: [],
    investmentTimeline: '',
    notes: '',
    privacyConsent: false,
    website: '', // honeypot
    company: '', // honeypot
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formStartTime] = useState(Date.now())
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Canadian phone number format validation
    const phoneRegex = /^[\+]?[1]?[\s\-\.]?[\(]?[0-9]{3}[\)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/
    return phoneRegex.test(phone.replace(/\D/g, ''))
  }

  const validateForm = (step?: number): boolean => {
    const newErrors: FormErrors = {}
    
    // Step 1: Personal Information
    if (!step || step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required'
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid Canadian phone number'
      }
      
      if (!formData.province) {
        newErrors.province = 'Province/Territory is required'
      }
    }
    
    // Step 2: Investment Details
    if (!step || step === 2) {
      if (!formData.investmentAmount) {
        newErrors.investmentAmount = 'Investment amount is required'
      }
      
      if (!formData.investorType) {
        newErrors.investorType = 'Investor type is required'
      }
      
      if (formData.eligibilityStatus.length === 0) {
        newErrors.eligibilityStatus = 'Please select your eligibility status'
      }
      
      if (!formData.investmentTimeline) {
        newErrors.investmentTimeline = 'Investment timeline is required'
      }
    }
    
    // Step 3: Final Details
    if (!step || step === 3) {
      if (!formData.privacyConsent) {
        newErrors.privacyConsent = 'You must agree to the privacy policy'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleEligibilityChange = (value: string) => {
    const newEligibility = formData.eligibilityStatus.includes(value)
      ? formData.eligibilityStatus.filter(item => item !== value)
      : [...formData.eligibilityStatus, value]
    
    handleInputChange('eligibilityStatus', newEligibility)
  }

  const handleNextStep = () => {
    if (validateForm(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Anti-spam check: honeypot fields should be empty
    if (formData.website || formData.company) {
      console.log('Spam detected')
      return
    }
    
    // Anti-spam check: form should take at least 10 seconds to fill
    const timeTaken = Date.now() - formStartTime
    if (timeTaken < 10000) {
      console.log('Form filled too quickly')
      return
    }
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/investor-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          formStartTime,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application')
      }

      if (result.success) {
        setSubmitStatus('success')
      } else {
        throw new Error(result.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Real-time validation on field blur
  const handleFieldBlur = () => {
    validateForm()
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Application Submitted Successfully!</h1>
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for your interest in GCHI. We've received your application and will review it carefully.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-green-800 font-semibold">Confirmation emails sent to your inbox</span>
                </div>
                <p className="text-sm text-green-700 ml-6">
                  Check your email for detailed next steps and partnership information.
                </p>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Initial Response (within 24 hours)</div>
                    <div className="text-sm text-muted-foreground">We'll contact you to schedule a brief consultation call</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Investment Package Review</div>
                    <div className="text-sm text-muted-foreground">Detailed partnership documents and disclosure materials</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Partnership Finalization</div>
                    <div className="text-sm text-muted-foreground">Complete eligibility verification and begin your GCHI journey</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-600 font-bold">⚡</span>
                  <span className="text-red-700 font-semibold text-sm">Limited Availability</span>
                </div>
                <p className="text-xs text-red-600">
                  Only 7 partnership spots remaining in this funding round. Secure your investment tier quickly.
                </p>
              </div>
            </div>
            <Button
              onClick={() => {
                setSubmitStatus('idle')
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  province: '',
                  investmentAmount: '',
                  investorType: '',
                  eligibilityStatus: [],
                  investmentTimeline: '',
                  notes: '',
                  privacyConsent: false,
                  website: '',
                  company: '',
                })
                setCurrentStep(1)
              }}
              variant="outline"
            >
              Submit Another Application
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Apply to Invest with GCHI</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about yourself and your investment goals. We'll follow up within 24 hours to schedule a consultation.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Obligation</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors",
                      currentStep >= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step}
                  </div>
                  {step < totalSteps && (
                    <div
                      className={cn(
                        "w-16 h-1 mx-2 transition-colors",
                        currentStep > step ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8 md:space-x-16 text-sm">
              <div className={cn(
                "text-center",
                currentStep >= 1 ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                Personal Info
              </div>
              <div className={cn(
                "text-center",
                currentStep >= 2 ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                Investment Details
              </div>
              <div className={cn(
                "text-center",
                currentStep >= 3 ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                Final Details
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot fields (hidden from users) */}
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Personal Information</h2>
                    <p className="text-muted-foreground mb-8">Let's start with some basic information about you.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onBlur={() => handleFieldBlur()}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-input text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                          errors.fullName ? "border-destructive" : "border-border"
                        )}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm text-destructive">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleFieldBlur()}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-input text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                          errors.email ? "border-destructive" : "border-border"
                        )}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={() => handleFieldBlur()}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-input text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                          errors.phone ? "border-destructive" : "border-border"
                        )}
                        placeholder="(416) 555-0123"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="province" className="block text-sm font-semibold text-foreground mb-2">
                        Province/Territory *
                      </label>
                      <select
                        id="province"
                        value={formData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        onBlur={() => handleFieldBlur()}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-input text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                          errors.province ? "border-destructive" : "border-border"
                        )}
                      >
                        {PROVINCES.map((province) => (
                          <option key={province.value} value={province.value}>
                            {province.label}
                          </option>
                        ))}
                      </select>
                      {errors.province && (
                        <p className="mt-2 text-sm text-destructive">{errors.province}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Investment Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Investment Details</h2>
                    <p className="text-muted-foreground mb-8">Help us understand your investment preferences and qualifications.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="investmentAmount" className="block text-sm font-semibold text-foreground mb-2">
                          Investment Amount *
                        </label>
                        <select
                          id="investmentAmount"
                          value={formData.investmentAmount}
                          onChange={(e) => handleInputChange('investmentAmount', e.target.value)}
                          onBlur={() => handleFieldBlur()}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-input text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                            errors.investmentAmount ? "border-destructive" : "border-border"
                          )}
                        >
                          {INVESTMENT_AMOUNTS.map((amount) => (
                            <option key={amount.value} value={amount.value}>
                              {amount.label}
                            </option>
                          ))}
                        </select>
                        {errors.investmentAmount && (
                          <p className="mt-2 text-sm text-destructive">{errors.investmentAmount}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="investorType" className="block text-sm font-semibold text-foreground mb-2">
                          Investor Type *
                        </label>
                        <select
                          id="investorType"
                          value={formData.investorType}
                          onChange={(e) => handleInputChange('investorType', e.target.value)}
                          onBlur={() => handleFieldBlur()}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-input text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                            errors.investorType ? "border-destructive" : "border-border"
                          )}
                        >
                          {INVESTOR_TYPES.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.investorType && (
                          <p className="mt-2 text-sm text-destructive">{errors.investorType}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Eligibility Status * <span className="font-normal text-muted-foreground">(select all that apply)</span>
                      </label>
                      <div className="space-y-3">
                        {ELIGIBILITY_OPTIONS.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              id={option.value}
                              checked={formData.eligibilityStatus.includes(option.value)}
                              onChange={() => handleEligibilityChange(option.value)}
                              className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-2 focus:ring-primary/20"
                            />
                            <label htmlFor={option.value} className="ml-3 text-sm text-foreground">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.eligibilityStatus && (
                        <p className="mt-2 text-sm text-destructive">{errors.eligibilityStatus}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="investmentTimeline" className="block text-sm font-semibold text-foreground mb-2">
                        Investment Timeline *
                      </label>
                      <select
                        id="investmentTimeline"
                        value={formData.investmentTimeline}
                        onChange={(e) => handleInputChange('investmentTimeline', e.target.value)}
                        onBlur={() => handleFieldBlur()}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-input text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                          errors.investmentTimeline ? "border-destructive" : "border-border"
                        )}
                      >
                        {INVESTMENT_TIMELINES.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                      {errors.investmentTimeline && (
                        <p className="mt-2 text-sm text-destructive">{errors.investmentTimeline}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Final Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Final Details</h2>
                    <p className="text-muted-foreground mb-8">Any additional information and required consents.</p>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-2">
                      Additional Notes <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Tell us about your investment goals, questions, or anything else you'd like us to know..."
                    />
                  </div>

                  <div className="bg-muted/50 p-6 rounded-xl">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={(e) => handleInputChange('privacyConsent', e.target.checked)}
                        className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-2 focus:ring-primary/20 mt-1"
                      />
                      <label htmlFor="privacyConsent" className="ml-3 text-sm text-foreground leading-relaxed">
                        I agree to the{' '}
                        <a href="/privacy" className="text-primary hover:underline font-semibold">
                          Privacy Policy
                        </a>{' '}
                        and consent to GCHI collecting and using my personal information to evaluate my investment application and communicate about investment opportunities. *
                      </label>
                    </div>
                    {errors.privacyConsent && (
                      <p className="mt-2 ml-7 text-sm text-destructive">{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Security Notice */}
                  <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                    <h3 className="font-semibold text-primary mb-2">Security & Privacy Notice</h3>
                    <div className="text-sm text-primary/80 space-y-1">
                      <p>• All information is transmitted securely and encrypted</p>
                      <p>• We never share your personal information with third parties</p>
                      <p>• You can request data deletion at any time</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-border">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevStep}
                      className="px-8"
                    >
                      Previous
                    </Button>
                  )}
                </div>

                <div className="flex gap-4">
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="px-8"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  )}
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-destructive text-xl">⚠️</span>
                  </div>
                  <h3 className="font-semibold text-destructive mb-2">Submission Error</h3>
                  <p className="text-sm text-destructive/80 mb-4">
                    We encountered an issue processing your application. This could be due to network connectivity or a temporary system issue.
                  </p>
                  <div className="space-y-2 text-xs text-destructive/70">
                    <p>• Please check your internet connection and try again</p>
                    <p>• If the problem persists, contact us directly at info@gchi.ca</p>
                    <p>• Your form data has been preserved - you won't lose your information</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-destructive/20">
                    <p className="text-xs text-muted-foreground">
                      Emergency contact: <a href="tel:+1-416-xxx-xxxx" className="text-destructive underline">+1 (416) XXX-XXXX</a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Trust Indicators Footer */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Spam Promise</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}