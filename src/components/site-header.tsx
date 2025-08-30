"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'border-b border-border/80 bg-background/98 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/95' 
        : 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }`}>
      <div className={`container mx-auto flex max-w-screen-2xl items-center transition-all duration-300 ${
        scrolled ? 'h-12' : 'h-14'
      }`}>
        <div className="mr-4 hidden md:flex">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2 group" 
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <span className={`font-serif font-bold text-primary transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            } ${
              logoHovered ? 'scale-110 tracking-wider' : ''
            }`}>
              GCHI
            </span>
            {logoHovered && (
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary/10 rounded-lg blur-sm -z-10 animate-pulse" />
            )}
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/how-it-works" 
              className="relative group transition-all duration-300 text-foreground/60 hover:text-primary hover:scale-105"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/invest" 
              className="relative group transition-all duration-300 text-foreground/60 hover:text-primary hover:scale-105"
            >
              Invest
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/portfolio" 
              className="relative group transition-all duration-300 text-foreground/60 hover:text-primary hover:scale-105"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/sharia-compliance" 
              className="relative group transition-all duration-300 text-foreground/60 hover:text-primary hover:scale-105"
            >
              Sharia Compliance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/faqs" 
              className="relative group transition-all duration-300 text-foreground/60 hover:text-primary hover:scale-105"
            >
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <span className="font-serif font-bold text-primary">Golden Canadian Homes</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link href="/how-it-works" className="text-foreground hover:text-primary">
                  How It Works
                </Link>
                <Link href="/invest" className="text-foreground hover:text-primary">
                  Invest
                </Link>
                <Link href="/portfolio" className="text-foreground hover:text-primary">
                  Portfolio
                </Link>
                <Link href="/sharia-compliance" className="text-foreground hover:text-primary">
                  Sharia Compliance
                </Link>
                <Link href="/faqs" className="text-foreground hover:text-primary">
                  FAQs
                </Link>
                <div className="flex flex-col space-y-2 pt-6">
                  <Button variant="outline" asChild>
                    <Link href="/legal">Legal</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/apply">Apply to Invest</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="md:hidden">
              <span className="font-serif font-bold text-primary">GCHI</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="hidden md:inline-flex transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Link href="/legal">Legal</Link>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className="hidden md:inline-flex transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            >
              <Link href="/apply">Apply to Invest</Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}