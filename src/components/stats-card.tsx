"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { useState, useEffect } from "react"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon?: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  highlight?: boolean
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  highlight = false,
}: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animatedValue, setAnimatedValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  // Extract number from value for animation
  const numericValue = value.match(/\d+/)?.[0]
  const valuePrefix = value.match(/^[^\d]*/)?.[0] || ''
  const valueSuffix = value.replace(/^[^\d]*\d+/, '') || ''

  useEffect(() => {
    // Animate value on mount
    setIsVisible(true)
    
    if (numericValue) {
      const targetNum = parseInt(numericValue)
      let current = 0
      const increment = Math.ceil(targetNum / 30)
      
      const timer = setInterval(() => {
        current += increment
        if (current >= targetNum) {
          current = targetNum
          clearInterval(timer)
        }
        setAnimatedValue(`${valuePrefix}${current}${valueSuffix}`)
      }, 50)
      
      return () => clearInterval(timer)
    } else {
      setAnimatedValue(value)
    }
  }, [value, numericValue, valuePrefix, valueSuffix])
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-500 group cursor-pointer ${
        highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''
      } ${
        isHovered 
          ? 'shadow-xl shadow-primary/10 -translate-y-2 scale-[1.03]' 
          : 'hover:shadow-md'
      } ${
        isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4 duration-700' : 'opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
              isHovered ? 'text-primary' : 'text-muted-foreground'
            }`}>
              {title}
            </p>
            <p className={`text-3xl font-bold font-mono transition-all duration-300 ${
              isHovered ? 'text-primary scale-105' : 'text-card-foreground'
            }`}>
              {animatedValue}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {trend && (
              <div className={`flex items-center text-sm font-medium transition-all duration-300 ${
                trend.isPositive ? 'text-primary' : 'text-maple-red-600'
              } ${
                isHovered ? 'translate-x-1' : ''
              }`}>
                <span className={`mr-1 transition-transform duration-300 ${
                  isHovered ? 'scale-125' : ''
                }`}>
                  {trend.isPositive ? '↗' : '↘'}
                </span>
                {trend.value}
              </div>
            )}
          </div>
          {Icon && (
            <div className={`p-2 rounded-lg transition-all duration-500 ${
              highlight 
                ? 'bg-primary/20 text-primary' 
                : 'bg-muted text-muted-foreground'
            } ${
              isHovered 
                ? highlight
                  ? 'bg-primary/30 scale-110 rotate-3 shadow-lg'
                  : 'bg-primary/10 text-primary scale-110 rotate-3 shadow-md'
                : ''
            }`}>
              <Icon className={`h-5 w-5 transition-all duration-300 ${
                isHovered ? 'scale-110' : ''
              }`} />
            </div>
          )}
        </div>
        
        {/* Subtle glow effect for highlighted cards */}
        {highlight && (
          <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
            isHovered 
              ? 'bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-100'
              : 'opacity-0'
          }`} />
        )}
        
        {/* Professional pulse effect */}
        {highlight && isHovered && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/20 rounded-lg blur-sm -z-10 animate-pulse" />
        )}
      </CardContent>
    </Card>
  )
}