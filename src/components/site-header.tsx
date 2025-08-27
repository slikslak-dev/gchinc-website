import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Golden Canadian Homes
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="/invest" className="text-foreground hover:text-primary transition-colors">
            Invest
          </Link>
          <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/faqs" className="text-foreground hover:text-primary transition-colors">
            FAQs
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/legal">Legal</Link>
          </Button>
          <Button asChild>
            <Link href="/apply">Apply to Invest</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}