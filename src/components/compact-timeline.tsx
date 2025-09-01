"use client"

import { useState } from 'react'
import { ChevronRight, Clock, Check, ArrowRight } from 'lucide-react'

interface TimelineStep {
  phase: string
  title: string
  description: string
  details: string[]
  timeframe: string
}

interface CompactTimelineProps {
  steps: TimelineStep[]
}

export function CompactTimeline({ steps }: CompactTimelineProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="bg-gradient-to-r from-surface-1 to-surface-2 p-6 rounded-xl border border-border/50">
      <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
        Your Investment Timeline
      </h3>
      
      <div className="space-y-1">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div 
              className={`
                border border-border/30 rounded-lg transition-all duration-300 overflow-hidden
                ${expandedStep === index ? 'bg-primary/5 border-primary/30 shadow-md' : 'bg-background hover:bg-surface-2'}
                ${hoveredStep === index ? 'shadow-sm' : ''}
              `}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Compact Header */}
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                    ${expandedStep === index 
                      ? 'bg-primary text-primary-foreground scale-110' 
                      : 'bg-charcoal-100 text-charcoal-600 group-hover:bg-primary/10 group-hover:text-primary'
                    }
                  `}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                      <span className={`
                        text-xs font-medium px-2 py-1 rounded-full transition-colors duration-300
                        ${expandedStep === index 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-charcoal-100 text-charcoal-600'
                        }
                      `}>
                        {step.phase}
                      </span>
                      <h4 className={`
                        font-medium text-sm transition-colors duration-300
                        ${expandedStep === index ? 'text-primary' : 'text-foreground'}
                      `}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{step.timeframe}</span>
                  </div>
                </div>
                
                <div className={`
                  transition-transform duration-300 text-charcoal-400
                  ${expandedStep === index ? 'rotate-90' : 'group-hover:text-primary'}
                `}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedStep === index && (
                <div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="border-t border-border/30 pt-4">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {step.details.length > 0 && (
                      <div className="space-y-2">
                        <h5 className="text-xs font-medium text-primary uppercase tracking-wide">
                          Key Activities
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowRight className="w-4 h-4 text-charcoal-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Complete Process: 14 days average</span>
          <span>{steps.length} steps total</span>
        </div>
        <div className="w-full bg-charcoal-100 rounded-full h-2 mt-2">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
            style={{ width: `${expandedStep !== null ? ((expandedStep + 1) / steps.length) * 100 : 20}%` }}
          />
        </div>
      </div>
    </div>
  )
}