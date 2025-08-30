"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp } from "lucide-react"

interface ProfessionalLoadingProps {
  message?: string
  showStats?: boolean
  className?: string
}

export function ProfessionalLoading({ 
  message = "Loading investment data...", 
  showStats = false,
  className = "" 
}: ProfessionalLoadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
      {/* Elegant loading animation */}
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        </div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-primary/10 rounded-full animate-ping" />
      </div>
      
      {/* Professional message */}
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-lg font-semibold text-foreground">
          {message}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Accessing secure investment data from our professional systems
        </p>
      </div>
      
      {/* Optional stats skeleton */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full">
          {Array.from({ length: 3 }, (_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-3 bg-muted rounded w-16" />
                  <div className="h-4 w-4 bg-muted rounded" />
                </div>
                <div className="h-8 bg-muted rounded w-20 mb-2" />
                <div className="h-3 bg-muted rounded w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Trust indicators */}
      <div className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
          <span>Secure Connection</span>
        </div>
        <div className="flex items-center gap-1">
          <Building2 className="h-3 w-3" />
          <span>Ontario Registered</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          <span>Live Data</span>
        </div>
      </div>
    </div>
  )
}

// Professional skeleton for investment cards
export function InvestmentCardSkeleton() {
  return (
    <Card className="h-full animate-pulse">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
          <div className="h-6 bg-muted rounded w-16" />
        </div>
        
        <div className="h-4 bg-muted rounded w-full" />
        
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 bg-muted rounded w-16" />
              <div className="h-5 bg-muted rounded w-20" />
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <div className="h-4 bg-muted rounded w-24" />
          <div className="h-8 bg-muted rounded w-20" />
        </div>
      </div>
    </Card>
  )
}