'use client'

import { Button } from '@/components/ui/button'
import { LeadMagnetModal } from '@/components/lead-magnet-modal'
import { useLeadMagnet } from '@/hooks/use-lead-magnet'

interface LeadMagnetCTAProps {
  variant?: 'default' | 'compact' | 'banner' | 'inline'
  leadMagnetType: 'halal-investing-guide' | 'sharia-questions' | 'ontario-market-outlook'
  source: string
  className?: string
}

export function LeadMagnetCTA({ 
  variant = 'default', 
  leadMagnetType, 
  source, 
  className = '' 
}: LeadMagnetCTAProps) {
  const { openModal, closeModal, isModalOpen, currentMagnet } = useLeadMagnet()
  
  const handleClick = () => {
    openModal(leadMagnetType, source)
  }

  const leadMagnets = {
    'halal-investing-guide': {
      title: 'Halal Investing Guide',
      subtitle: 'Real Estate vs. Stocks',
      icon: '📚',
      cta: 'Get Free Guide',
      description: 'Compare Sharia-compliant investment options'
    },
    'sharia-questions': {
      title: '5 Sharia Questions',
      subtitle: 'Verify Any Investment',
      icon: '🔍',
      cta: 'Get Free Checklist',
      description: 'Essential questions to verify halal compliance'
    },
    'ontario-market-outlook': {
      title: 'Ontario Market Outlook',
      subtitle: '2024-2025 Report',
      icon: '📈',
      cta: 'Get Free Report',
      description: 'Exclusive market insights for halal investors'
    }
  }

  const magnet = leadMagnets[leadMagnetType]

  if (variant === 'compact') {
    return (
      <>
        <Button
          onClick={handleClick}
          variant="outline"
          className={`text-primary border-primary hover:bg-primary/10 ${className}`}
        >
          {magnet.icon} {magnet.cta}
        </Button>
        
        {currentMagnet && (
          <LeadMagnetModal
            isOpen={isModalOpen}
            onClose={closeModal}
            leadMagnetType={currentMagnet.type}
            title={currentMagnet.title}
            description={currentMagnet.description}
            source={source}
          />
        )}
      </>
    )
  }

  if (variant === 'banner') {
    return (
      <>
        <div className={`bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 ${className}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{magnet.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{magnet.title}</h3>
                <p className="text-muted-foreground text-sm">{magnet.description}</p>
              </div>
            </div>
            <Button onClick={handleClick} className="flex-shrink-0">
              {magnet.cta}
            </Button>
          </div>
        </div>
        
        {currentMagnet && (
          <LeadMagnetModal
            isOpen={isModalOpen}
            onClose={closeModal}
            leadMagnetType={currentMagnet.type}
            title={currentMagnet.title}
            description={currentMagnet.description}
            source={source}
          />
        )}
      </>
    )
  }

  if (variant === 'inline') {
    return (
      <>
        <div className={`border border-primary/20 bg-primary/5 rounded-lg p-4 ${className}`}>
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0 mt-1">{magnet.icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">{magnet.title}: {magnet.subtitle}</h4>
              <p className="text-xs text-muted-foreground mb-3">{magnet.description}</p>
              <Button 
                onClick={handleClick} 
                size="sm" 
                className="text-xs py-2 px-3"
              >
                {magnet.cta}
              </Button>
            </div>
          </div>
        </div>
        
        {currentMagnet && (
          <LeadMagnetModal
            isOpen={isModalOpen}
            onClose={closeModal}
            leadMagnetType={currentMagnet.type}
            title={currentMagnet.title}
            description={currentMagnet.description}
            source={source}
          />
        )}
      </>
    )
  }

  // Default variant
  return (
    <>
      <div className={`text-center bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
        <div className="text-4xl mb-4">{magnet.icon}</div>
        <h3 className="text-xl font-bold mb-2">{magnet.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{magnet.subtitle}</p>
        <p className="text-xs text-muted-foreground mb-6">{magnet.description}</p>
        <Button onClick={handleClick} className="w-full">
          {magnet.cta}
        </Button>
      </div>
      
      {currentMagnet && (
        <LeadMagnetModal
          isOpen={isModalOpen}
          onClose={closeModal}
          leadMagnetType={currentMagnet.type}
          title={currentMagnet.title}
          description={currentMagnet.description}
          source={source}
        />
      )}
    </>
  )
}

// Multi-magnet CTA component
export function MultiLeadMagnetCTA({ 
  source, 
  className = '',
  title = 'Free Resources for Halal Investors'
}: { 
  source: string
  className?: string
  title?: string
}) {
  return (
    <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          Essential guides to help you make confident, Sharia-compliant investment decisions
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <LeadMagnetCTA
          leadMagnetType="halal-investing-guide"
          source={source}
        />
        <LeadMagnetCTA
          leadMagnetType="sharia-questions"
          source={source}
        />
        <LeadMagnetCTA
          leadMagnetType="ontario-market-outlook"
          source={source}
        />
      </div>
      
      <div className="text-center mt-6">
        <p className="text-xs text-muted-foreground">
          100% Free • No Spam • Unsubscribe Anytime
        </p>
      </div>
    </div>
  )
}