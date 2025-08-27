import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-primary mb-4">
              Golden Canadian Homes Inc.
            </h3>
            <p className="text-sm text-muted-foreground">
              Ontario-based real estate developer focused on income-producing rentals and mixed-use projects.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Investment</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/invest" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Tiers
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-muted-foreground hover:text-foreground transition-colors">
                  Apply to Invest
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Legal Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golden Canadian Homes Inc. All rights reserved.</p>
          <p className="mt-2">
            For accredited investors and investors eligible under the Offering Memorandum exemption in Ontario, Canada.
          </p>
        </div>
      </div>
    </footer>
  )
}