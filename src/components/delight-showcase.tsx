"use client"

// This component demonstrates all the delightful touches in action
// It's not meant for production, just to showcase the capabilities

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProfessionalLoading, InvestmentCardSkeleton } from '@/components/professional-loading'
import { ProfessionalEmptyState } from '@/components/professional-empty-state'
import { SuccessConfirmation } from '@/components/success-confirmation'
import { InvestmentCard } from '@/components/investment-card'
import { StatsCard } from '@/components/stats-card'
import { Building2, TrendingUp, Users } from 'lucide-react'

export function DelightShowcase() {
  const [currentDemo, setCurrentDemo] = useState<string>('cards')
  const [showSuccess, setShowSuccess] = useState<string | false>(false)
  
  const demos = {
    cards: {
      title: 'Enhanced Investment Cards',
      description: 'Hover over the cards to see smooth animations, number counters, and micro-interactions'
    },
    loading: {
      title: 'Professional Loading States',
      description: 'Trust-building loading animations with progress indicators'
    },
    empty: {
      title: 'Elegant Empty States',
      description: 'Encouraging empty states that build confidence and guide next actions'
    },
    success: {
      title: 'Success Confirmations',
      description: 'Celebratory moments that create positive associations with completed actions'
    }
  }
  
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Professional Delight Showcase</CardTitle>
          <p className="text-muted-foreground">
            Demonstration of sophisticated micro-interactions and animations that maintain 
            professional credibility while creating memorable moments.
          </p>
        </CardHeader>
        <CardContent>
          {/* Demo Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(demos).map(([key, demo]) => (
              <Button
                key={key}
                variant={currentDemo === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentDemo(key)}
                className="transition-all duration-300 hover:scale-105"
              >
                {demo.title}
              </Button>
            ))}
          </div>
          
          {/* Current Demo Info */}
          <div className="mb-8 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">{demos[currentDemo as keyof typeof demos].title}</h3>
            <p className="text-sm text-muted-foreground">{demos[currentDemo as keyof typeof demos].description}</p>
          </div>
          
          {/* Demo Content */}
          <div className="space-y-8">
            {currentDemo === 'cards' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatsCard
                    title="Total Investment"
                    value="$4.2M"
                    description="Across 2 properties"
                    icon={Building2}
                    trend={{ value: "Growing portfolio", isPositive: true }}
                    highlight
                  />
                  <StatsCard
                    title="Annual Return"
                    value="5.8%"
                    description="Average performance"
                    icon={TrendingUp}
                    trend={{ value: "Above target", isPositive: true }}
                  />
                  <StatsCard
                    title="Total Investors"
                    value="50"
                    description="Qualified participants"
                    icon={Users}
                  />
                </div>
                
                {/* Investment Card */}
                <div className="max-w-md mx-auto">
                  <InvestmentCard
                    title="Demo Property"
                    location="Toronto, Ontario"
                    totalValue="$2.1M"
                    units={12}
                    occupancyRate="98%"
                    targetReturn="6.2%"
                    status="active"
                    investors={25}
                    description="Example investment showcasing all interactive elements and animations."
                  />
                </div>
              </div>
            )}
            
            {currentDemo === 'loading' && (
              <div className="space-y-8">
                <ProfessionalLoading 
                  message="Processing investment data..."
                  showStats
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <InvestmentCardSkeleton />
                  <InvestmentCardSkeleton />
                </div>
              </div>
            )}
            
            {currentDemo === 'empty' && (
              <div className="space-y-8">
                <ProfessionalEmptyState
                  type="investments"
                  onAction={() => alert('This would navigate to available opportunities')}
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <ProfessionalEmptyState
                    type="portfolio"
                    showTrustIndicators={false}
                  />
                  <ProfessionalEmptyState
                    type="applications"
                    showTrustIndicators={false}
                  />
                </div>
              </div>
            )}
            
            {currentDemo === 'success' && (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Click the buttons below to see different success confirmation styles:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button onClick={() => setShowSuccess('consultation')}>Schedule Consultation</Button>
                    <Button variant="outline" onClick={() => setShowSuccess('prospectus')}>Download Prospectus</Button>
                    <Button variant="outline" onClick={() => setShowSuccess('application')}>Submit Application</Button>
                    <Button variant="outline" onClick={() => setShowSuccess('investment')}>Confirm Investment</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Success Modal */}
      {showSuccess && (
        <SuccessConfirmation
          type={showSuccess as any}
          onClose={() => setShowSuccess(false)}
          onContinue={() => {
            setShowSuccess(false)
            alert('This would navigate to the next step in the real application')
          }}
        />
      )}
    </div>
  )
}