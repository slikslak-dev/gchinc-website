"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InvestmentCard } from '@/components/investment-card'
import { StatsCard } from '@/components/stats-card'
import { Card } from '@/components/ui/card'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Star,
  DollarSign
} from 'lucide-react'
import { useState, useEffect } from 'react'

// Note: metadata moved to layout.tsx for client component compatibility

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [ctaHovered, setCTAHovered] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-background"></div>
        {/* Subtle animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        
        <div className="relative container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible 
              ? 'animate-in fade-in-0 slide-in-from-bottom-8' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Badge 
              variant="outline" 
              className={`mb-6 font-medium transition-all duration-700 hover:scale-105 hover:shadow-md hover:bg-primary/10 hover:border-primary/50 ${
                isVisible ? 'animate-in fade-in-0 slide-in-from-top-4' : 'opacity-0'
              }`}
              style={{animationDelay: '300ms'}}
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Institutional Grade • Sharia Certified
              </span>
            </Badge>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight transition-all duration-1000 ${
              isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-6' : 'opacity-0 translate-y-6'
            }`} style={{animationDelay: '500ms'}}>
              Professional Real Estate
              <span className={`text-primary block transition-all duration-1000 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent ${
                isVisible ? 'animate-in fade-in-0 slide-in-from-right-8' : 'opacity-0 translate-x-8'
              }`} style={{animationDelay: '800ms'}}>
                Investment Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join institutional and accredited investors accessing professionally managed 
              Ontario real estate opportunities with transparent reporting and Sharia compliance.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Ontario Registered</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Audited Financials</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Institutional Insurance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Sharia Board Certified</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 ${
              isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0 translate-y-8'
            }`} style={{animationDelay: '1200ms'}}>
              <Button 
                size="lg" 
                className={`text-base font-semibold px-8 transition-all duration-500 relative overflow-hidden group ${
                  ctaHovered === 'primary' 
                    ? 'scale-110 shadow-2xl shadow-primary/30' 
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
                onMouseEnter={() => setCTAHovered('primary')}
                onMouseLeave={() => setCTAHovered('')}
              >
                <span className="relative z-10 flex items-center">
                  Schedule Consultation
                  <ArrowRight className={`ml-2 h-4 w-4 transition-all duration-300 ${
                    ctaHovered === 'primary' ? 'translate-x-1 scale-110' : ''
                  }`} />
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transition-all duration-300 ${
                  ctaHovered === 'primary' ? 'translate-x-0' : '-translate-x-full'
                }`} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={`text-base font-semibold px-8 transition-all duration-500 relative ${
                  ctaHovered === 'secondary'
                    ? 'scale-105 shadow-lg border-primary/50 bg-primary/10 text-primary'
                    : 'hover:scale-105 hover:shadow-md hover:border-primary/30'
                }`}
                onMouseEnter={() => setCTAHovered('secondary')}
                onMouseLeave={() => setCTAHovered('')}
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Performance Metrics */}
      <section className={`py-16 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-4' : 'opacity-0'
      }`} style={{animationDelay: '1500ms'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Investment Performance Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent metrics from our professionally managed real estate portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats cards will have staggered animations via their internal logic */}
            <StatsCard
              title="Properties Under Management"
              value="2"
              description="18 rental units generating stable income"
              icon={Building2}
              highlight
            />
            <StatsCard
              title="Management Fees"
              value="$0"
              description="100% profit sharing with investors"
              icon={DollarSign}
            />
            <StatsCard
              title="Target Annual Return"
              value="5-6%"
              description="Quarterly profit distributions"
              icon={TrendingUp}
              trend={{ value: "Consistent performance", isPositive: true }}
            />
            <StatsCard
              title="Compliance Rating"
              value="100%"
              description="Certified Sharia compliance"
              icon={Shield}
            />
          </div>
        </div>
      </section>
      
      {/* Investment Opportunities Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Current Investment Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionally vetted Ontario real estate investments with transparent reporting
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-6' : 'opacity-0 translate-y-6'
          }`} style={{animationDelay: '2000ms'}}>
            <InvestmentCard
              title="Emmaville Property"
              location="Emmaville, Ontario"
              totalValue="$1.8M"
              units={18}
              occupancyRate="95%+"
              targetReturn="5.5%"
              status="active"
              investors={32}
              description="Multi-unit residential property generating stable rental income with strong occupancy rates and professional property management."
            />
            <InvestmentCard
              title="Ottawa East Development"
              location="Ottawa, Ontario"
              totalValue="$2.4M"
              units={12}
              occupancyRate="100%"
              targetReturn="6.2%"
              status="pending"
              investors={18}
              description="Strategic development project in high-growth Ottawa market with pre-qualified tenants and institutional-grade financing."
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose GCHI - Professional Differentiators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Professional Investment Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Institutional-grade processes, transparent reporting, and Sharia-compliant structures 
              designed for sophisticated investors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                <Building2 className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:text-primary">Tangible Assets</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Direct ownership in physical Ontario real estate properties, not shares or funds.
              </p>
            </Card>
            
            <Card className="text-center p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                <Shield className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:text-primary">Regulatory Compliance</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Full Ontario regulatory compliance with independent auditing and legal oversight.
              </p>
            </Card>
            
            <Card className="text-center p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                <Users className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:text-primary">Local Expertise</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                30+ years Ontario market experience with established local professional networks.
              </p>
            </Card>
            
            <Card className="text-center p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                <Star className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:text-primary">Sharia Certified</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Independent Islamic finance board oversight ensuring genuine compliance.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Explore Professional Real Estate Investment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join institutional and accredited investors accessing professionally managed Ontario 
              real estate opportunities with transparent reporting and genuine Sharia compliance.
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 transition-all duration-1000 ${
              isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-6' : 'opacity-0 translate-y-6'
            }`} style={{animationDelay: '2500ms'}}>
              <Button 
                size="lg" 
                className={`text-base font-semibold px-8 transition-all duration-500 relative overflow-hidden group ${
                  ctaHovered === 'final-primary' 
                    ? 'scale-110 shadow-2xl shadow-primary/30' 
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
                onMouseEnter={() => setCTAHovered('final-primary')}
                onMouseLeave={() => setCTAHovered('')}
              >
                <span className="relative z-10 flex items-center">
                  Schedule Professional Consultation
                  <ArrowRight className={`ml-2 h-4 w-4 transition-all duration-300 ${
                    ctaHovered === 'final-primary' ? 'translate-x-1 scale-110' : ''
                  }`} />
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transition-all duration-300 ${
                  ctaHovered === 'final-primary' ? 'translate-x-0' : '-translate-x-full'
                }`} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={`text-base font-semibold px-8 transition-all duration-500 ${
                  ctaHovered === 'final-secondary'
                    ? 'scale-105 shadow-lg border-primary/50 bg-primary/10 text-primary'
                    : 'hover:scale-105 hover:shadow-md hover:border-primary/30'
                }`}
                onMouseEnter={() => setCTAHovered('final-secondary')}
                onMouseLeave={() => setCTAHovered('')}
              >
                Request Investment Prospectus
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No obligation consultation</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Institutional grade processes</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Professional management</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Sharia certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}