"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Building2, 
  Search, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Shield,
  CheckCircle2
} from "lucide-react"
import { useState } from "react"

interface ProfessionalEmptyStateProps {
  title?: string
  description?: string
  type?: 'investments' | 'portfolio' | 'applications' | 'general'
  actionLabel?: string
  onAction?: () => void
  showTrustIndicators?: boolean
}

export function ProfessionalEmptyState({
  title,
  description,
  type = 'general',
  actionLabel,
  onAction,
  showTrustIndicators = true
}: ProfessionalEmptyStateProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const configs = {
    investments: {
      icon: Building2,
      title: title || "New Opportunities Coming Soon",
      description: description || "Our investment committee is currently reviewing several institutional-grade Ontario properties. New opportunities will be available to qualified investors soon.",
      actionLabel: actionLabel || "Join Waitlist",
      bgGradient: "from-primary/5 to-primary/10"
    },
    portfolio: {
      icon: TrendingUp,
      title: title || "Building Your Portfolio",
      description: description || "You haven't made any investments yet. Explore our current opportunities to start building your professionally managed real estate portfolio.",
      actionLabel: actionLabel || "View Opportunities",
      bgGradient: "from-success/5 to-success/10"
    },
    applications: {
      icon: Users,
      title: title || "No Applications Yet",
      description: description || "We haven't received any investment applications from you yet. Our team is ready to guide you through our professional qualification process.",
      actionLabel: actionLabel || "Start Application",
      bgGradient: "from-blue-500/5 to-blue-500/10"
    },
    general: {
      icon: Search,
      title: title || "Nothing Found",
      description: description || "We couldn't find what you're looking for, but our professional team is here to help you find the right investment opportunity.",
      actionLabel: actionLabel || "Contact Us",
      bgGradient: "from-muted/50 to-muted/70"
    }
  }
  
  const config = configs[type]
  const IconComponent = config.icon
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-2xl mx-auto">
      <Card className={`w-full relative overflow-hidden transition-all duration-500 ${
        isHovered ? 'shadow-xl scale-105' : 'shadow-lg'
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-50`} />
        
        <CardContent className="relative p-12">
          {/* Animated Icon */}
          <div className={`w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-3 bg-primary/20' : ''
          }`}>
            <IconComponent className={`h-10 w-10 text-primary transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`} />
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {config.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            {config.description}
          </p>
          
          {/* Action Button */}
          {config.actionLabel && (
            <Button 
              size="lg"
              onClick={onAction}
              className={`font-semibold px-8 transition-all duration-300 ${
                isHovered ? 'scale-105 shadow-lg' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {config.actionLabel}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} />
            </Button>
          )}
          
          {/* Trust Indicators */}
          {showTrustIndicators && (
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success-500" />
                <span>Professional Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-success-500" />
                <span>Ontario Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-success-500" />
                <span>Institutional Grade</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}