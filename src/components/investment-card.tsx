"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, MapPin, Users, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"

interface InvestmentCardProps {
  title: string
  location: string
  totalValue: string
  units: number
  occupancyRate: string
  targetReturn: string
  status: "active" | "pending" | "completed"
  investors: number
  description: string
}

export function InvestmentCard({
  title,
  location,
  totalValue,
  units,
  occupancyRate,
  targetReturn,
  status,
  investors,
  description,
}: InvestmentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animatedInvestors, setAnimatedInvestors] = useState(0)
  const [animatedOccupancy, setAnimatedOccupancy] = useState(0)

  const statusConfig = {
    active: { variant: "default" as const, label: "Active", color: "text-primary" },
    pending: { variant: "secondary" as const, label: "Pending", color: "text-charcoal-600" },
    completed: { variant: "outline" as const, label: "Completed", color: "text-charcoal-500" }
  }

  const config = statusConfig[status]
  const occupancyNumber = parseInt(occupancyRate.replace('%', '').replace('+', ''))

  // Animate numbers on mount
  useEffect(() => {
    const investorTimer = setTimeout(() => {
      let current = 0
      const timer = setInterval(() => {
        current += Math.ceil(investors / 20)
        if (current >= investors) {
          current = investors
          clearInterval(timer)
        }
        setAnimatedInvestors(current)
      }, 50)
    }, 200)

    const occupancyTimer = setTimeout(() => {
      let current = 0
      const timer = setInterval(() => {
        current += Math.ceil(occupancyNumber / 20)
        if (current >= occupancyNumber) {
          current = occupancyNumber
          clearInterval(timer)
        }
        setAnimatedOccupancy(current)
      }, 50)
    }, 400)

    return () => {
      clearTimeout(investorTimer)
      clearTimeout(occupancyTimer)
    }
  }, [investors, occupancyNumber])

  return (
    <Card 
      className={`h-full transition-all duration-500 border-border/50 group cursor-pointer ${
        isHovered 
          ? 'shadow-2xl shadow-primary/10 border-primary/30 -translate-y-1 scale-[1.02]' 
          : 'hover:shadow-lg hover:border-border'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className={`text-xl font-semibold transition-colors duration-300 ${
              isHovered ? 'text-primary' : 'text-card-foreground'
            }`}>
              {title}
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className={`h-4 w-4 mr-1 transition-all duration-300 ${
                isHovered ? 'text-primary scale-110' : ''
              }`} />
              {location}
            </div>
          </div>
          <Badge 
            variant={config.variant} 
            className={`shrink-0 transition-all duration-300 ${
              isHovered ? 'scale-105 shadow-md' : ''
            }`}
          >
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Total Value
              </span>
              <DollarSign className="h-3 w-3 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold font-mono text-card-foreground">
              {totalValue}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Target Return
              </span>
              <TrendingUp className={`h-3 w-3 text-primary transition-all duration-300 ${
                isHovered ? 'scale-125 rotate-12' : ''
              }`} />
            </div>
            <p className="text-lg font-semibold font-mono text-primary">
              {targetReturn}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Units
              </span>
            </div>
            <p className="text-sm font-medium text-card-foreground">
              {units} rental units
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Occupancy
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-primary font-mono">
                {animatedOccupancy}%{occupancyRate.includes('+') ? '+' : ''}
              </p>
              <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${animatedOccupancy}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className={`h-4 w-4 mr-1 transition-all duration-300 ${
              isHovered ? 'text-primary scale-110' : ''
            }`} />
            <span className="font-mono">{animatedInvestors}</span> investors
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-xs transition-all duration-300 ${
              isHovered 
                ? 'bg-primary text-primary-foreground border-primary shadow-md transform scale-105' 
                : ''
            }`}
          >
            View Details
            <TrendingUp className={`ml-1 h-3 w-3 transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}