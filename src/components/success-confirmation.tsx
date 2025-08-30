"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  Mail, 
  Calendar,
  Download,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { useState, useEffect } from "react"

interface SuccessConfirmationProps {
  type: 'consultation' | 'prospectus' | 'application' | 'investment'
  title?: string
  message?: string
  nextSteps?: string[]
  onContinue?: () => void
  onClose?: () => void
}

export function SuccessConfirmation({
  type,
  title,
  message,
  nextSteps,
  onContinue,
  onClose
}: SuccessConfirmationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [celebrationComplete, setCelebrationComplete] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setCelebrationComplete(true), 1500)
    return () => clearTimeout(timer)
  }, [])
  
  const configs = {
    consultation: {
      icon: Calendar,
      title: title || "Consultation Scheduled Successfully",
      message: message || "Thank you for your interest in professional real estate investment. Our team will contact you within one business day to confirm your consultation details.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    prospectus: {
      icon: Download,
      title: title || "Prospectus Request Received",
      message: message || "Your request for our investment prospectus has been received. We'll send the detailed documents to your registered email address within 2 hours.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    application: {
      icon: Mail,
      title: title || "Application Submitted Successfully",
      message: message || "Your investment application has been submitted to our review committee. We'll begin the qualification process and contact you within 3 business days.",
      color: "text-success-600",
      bgColor: "bg-success-50",
      borderColor: "border-success-200"
    },
    investment: {
      icon: CheckCircle2,
      title: title || "Investment Confirmed",
      message: message || "Congratulations! Your investment has been successfully processed. You're now part of our professional real estate partnership.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    }
  }
  
  const config = configs[type]
  const IconComponent = config.icon
  
  const defaultNextSteps = {
    consultation: [
      "Check your email for confirmation details",
      "Prepare questions about investment opportunities",
      "Review our investment criteria"
    ],
    prospectus: [
      "Check your email within 2 hours",
      "Review investment opportunities",
      "Consider scheduling a consultation"
    ],
    application: [
      "Watch for communication from our team",
      "Prepare supporting documentation",
      "Review partnership terms"
    ],
    investment: [
      "Monitor your investment dashboard",
      "Expect first quarterly report",
      "Join our investor updates"
    ]
  }
  
  const steps = nextSteps || defaultNextSteps[type]
  
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className={`max-w-lg w-full transition-all duration-700 ${config.borderColor} ${
        isVisible 
          ? 'animate-in fade-in-0 slide-in-from-bottom-8 scale-100' 
          : 'opacity-0 scale-95 translate-y-8'
      }`}>
        <CardContent className="p-8 text-center">
          {/* Success Animation */}
          <div className="relative mb-6">
            <div className={`w-20 h-20 mx-auto ${config.bgColor} rounded-full flex items-center justify-center relative ${
              isVisible ? 'animate-in zoom-in-50' : ''
            }`}>
              <IconComponent className={`h-10 w-10 ${config.color} transition-all duration-500 ${
                celebrationComplete ? 'scale-110' : ''
              }`} />
              
              {/* Celebration sparkles */}
              {!celebrationComplete && (
                <>
                  <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-500 animate-ping" style={{animationDelay: '0ms'}} />
                  <Sparkles className="absolute -bottom-2 -left-2 h-4 w-4 text-yellow-500 animate-ping" style={{animationDelay: '500ms'}} />
                  <Sparkles className="absolute top-0 left-0 h-3 w-3 text-yellow-400 animate-ping" style={{animationDelay: '1000ms'}} />
                </>
              )}
            </div>
          </div>
          
          {/* Success Message */}
          <h2 className={`text-2xl font-bold mb-4 ${config.color} transition-all duration-500 ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4' : 'opacity-0'
          }`} style={{animationDelay: '300ms'}}>
            {config.title}
          </h2>
          
          <p className={`text-muted-foreground leading-relaxed mb-8 transition-all duration-500 ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4' : 'opacity-0'
          }`} style={{animationDelay: '500ms'}}>
            {config.message}
          </p>
          
          {/* Next Steps */}
          {steps && steps.length > 0 && (
            <div className={`text-left mb-8 transition-all duration-500 ${
              isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4' : 'opacity-0'
            }`} style={{animationDelay: '700ms'}}>
              <h3 className="font-semibold text-foreground mb-3">What happens next:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-500 ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4' : 'opacity-0'
          }`} style={{animationDelay: '900ms'}}>
            {onContinue && (
              <Button 
                onClick={onContinue}
                className="font-semibold hover:scale-105 transition-all duration-300"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={onClose}
              className="font-semibold hover:scale-105 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}