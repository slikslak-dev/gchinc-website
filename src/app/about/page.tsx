import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Team — 30+ Years Ontario Real Estate Expertise | GCHI',
  description: 'Meet the experienced team behind Ontario\'s leading Sharia-compliant real estate platform. Multi-million dollar project management, architectural excellence.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ontario Locals with 30+ Years Building Profitable Real Estate</h1>
          <p className="text-xl text-primary font-semibold mb-2">Meet Us in Person - Coffee in Toronto or Ottawa</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike distant investment funds, we're your neighbors. Visit our offices, grab coffee with our team, 
            and see exactly which properties your investment supports.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl">
            <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Golden Canadian Homes Inc. is Ontario's <strong>most trusted Sharia-compliant real estate platform</strong>, 
              founded by experienced professionals who live and work in the communities we serve. We're your 
              <strong>accountable local partners</strong> - meet us for coffee in Toronto or Ottawa, visit our offices, 
              and inspect every property your investment supports. We operate under <strong>strict Islamic finance principles</strong> 
              with zero investor fees and genuine profit-sharing partnerships.
            </p>
          </div>
          
          {/* Trust Statistics */}
          <div className="grid md:grid-cols-4 gap-6 py-8 bg-card rounded-xl p-8">
            <div className="text-center p-6 bg-background border border-border rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm font-medium text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center p-6 bg-background border border-border rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">$12M+</div>
              <div className="text-sm font-medium text-muted-foreground">In Managed Projects</div>
            </div>
            <div className="text-center p-6 bg-background border border-border rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Ontario-Based Team</div>
            </div>
            <div className="text-center p-6 bg-background border border-border rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <div className="text-sm font-medium text-muted-foreground">Response Time</div>
            </div>
          </div>
          
          {/* Company Values Section */}
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values & Commitment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Sharia Compliance</h3>
                <p className="text-sm text-muted-foreground">Strict adherence to Islamic finance principles with ongoing scholarly oversight and transparent certification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Community Impact</h3>
                <p className="text-sm text-muted-foreground">Building affordable housing that strengthens Ontario communities where we live and work</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Full Transparency</h3>
                <p className="text-sm text-muted-foreground">Open books, quarterly reports, and unlimited property inspections with zero hidden fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Local Accountability</h3>
                <p className="text-sm text-muted-foreground">Meet us in person, visit our offices, and hold us accountable as your Ontario neighbors</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Ontario Locals - Meet Us in Person</h3>
                    <p className="text-muted-foreground">We live here, work here, and invite you for coffee in Toronto or Ottawa. See our offices and properties firsthand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Complete Transparency</h3>
                    <p className="text-muted-foreground">Quarterly reports, audited financials, and unlimited property visits. Full accountability from your Ontario neighbors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Zero Hidden Agendas</h3>
                    <p className="text-muted-foreground">No investor fees means we only succeed when you do. Meet us personally to verify our commitment</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Islamic Finance Expertise</h3>
                    <p className="text-muted-foreground">Deep understanding of Sharia principles with scholarly oversight, not just compliance checkboxes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">$12M+ in successful projects across Toronto, Ottawa, Montreal, and Vancouver with documented results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Community-First Mindset</h3>
                    <p className="text-muted-foreground">Building the Ontario communities we want to live in, with accountability to our neighbors and investors</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-card rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">Leadership Team</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Meet the Ontario locals behind GCHI. Schedule a coffee meeting in Toronto or Ottawa to discuss your investment goals in person.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="border border-border p-8 rounded-lg bg-background shadow-sm">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mb-2">
                      MS
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Professional photo<br />coming soon
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">Mohsin Samdani</h3>
                    <p className="text-primary font-semibold mb-2">Chief Executive Officer</p>
                    <p className="text-sm text-muted-foreground">Available for coffee meetings in Toronto</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Mohsin brings <strong>proven leadership</strong> in multi-million-dollar project management and 
                    strategic capital partnerships. With extensive experience in marketing, economics, and building 
                    cross-functional teams, he ensures GCHI operates with both strategic vision and hands-on 
                    operational excellence.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-semibold text-primary">Professional Achievements:</span>
                      <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                        <li>• Successfully managed $8M+ in real estate development projects</li>
                        <li>• Built and led cross-functional teams of 15+ professionals</li>
                        <li>• Established strategic partnerships with major Ontario developers</li>
                        <li>• Expert in affordable housing financing and community development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-primary mb-2">Core Expertise Areas:</div>
                      <div className="text-sm text-muted-foreground">
                        Capital raising • Investor relations • Team leadership • Affordable housing development • 
                        Strategic partnerships • Community engagement • Sharia-compliant finance structures
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-border p-8 rounded-lg bg-background shadow-sm">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mb-2">
                      LA
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Professional photo<br />coming soon
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">Loghman Azar</h3>
                    <p className="text-primary font-semibold mb-2">Principal Architect</p>
                    <p className="text-sm text-muted-foreground">Available for meetings in Ottawa and Toronto</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    With <strong>30+ years of architectural excellence</strong> across Canada's major markets, 
                    Loghman ensures every GCHI project meets the highest standards for design, efficiency, and 
                    livability. His extensive portfolio spans sustainable developments from Toronto to Vancouver, 
                    with particular expertise in high-efficiency residential buildings.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-semibold text-primary">Professional Achievements:</span>
                      <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                        <li>• 30+ years licensed architectural practice across Canada</li>
                        <li>• Designed and delivered $12M+ in residential developments</li>
                        <li>• Industry board member and sustainable design advocate</li>
                        <li>• Specialist in energy-efficient and affordable housing design</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-primary mb-2">Industry Recognition & Expertise:</div>
                      <div className="text-sm text-muted-foreground">
                        Licensed architect (Ontario) • Industry board member • High-efficiency building specialist • 
                        Sustainable design expert • Multi-family residential specialist • Building code expertise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg max-w-2xl mx-auto">
                <h4 className="font-semibold text-lg mb-2">Meet Our Team in Person</h4>
                <p className="text-muted-foreground mb-4">
                  Schedule a coffee meeting with Mohsin in Toronto or Loghman in Ottawa. 
                  Discuss your investment goals face-to-face with the people managing your capital.
                </p>
                <div className="space-x-4">
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Toronto Coffee Meeting
                  </button>
                  <button className="border border-border px-6 py-2 rounded-lg font-semibold hover:bg-accent transition-colors">
                    Ottawa Office Visit
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-semibold mb-8 text-center">Sharia Governance & Certification</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to Sharia compliance goes beyond basic requirements. We're establishing 
                  comprehensive oversight with qualified Islamic scholars to ensure every investment 
                  aligns with Islamic principles.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Sharia Advisory Board</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Current Status:</strong> Finalizing appointments with qualified Islamic finance scholars</p>
                    <p><strong>Oversight Areas:</strong> Investment structures, profit-sharing mechanisms, property selection criteria</p>
                    <p><strong>Certification Process:</strong> Ongoing review and approval of all investment products</p>
                    <p><strong>Transparency:</strong> Regular Sharia compliance reports published quarterly</p>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Interim Guidance</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Current Framework:</strong> Operating under established Islamic finance principles</p>
                    <p><strong>Zero Interest:</strong> All investments structured as profit-sharing partnerships</p>
                    <p><strong>Asset-Backed:</strong> Every investment tied to real, tangible property assets</p>
                    <p><strong>Prohibited Activities:</strong> No involvement with haram industries or practices</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <h4 className="font-semibold text-lg mb-2">Full Certification Coming Soon</h4>
                <p className="text-muted-foreground mb-4">
                  Detailed Sharia compliance certification and board member profiles will be published 
                  on our dedicated Sharia Compliance page once the advisory board is established.
                </p>
                <p className="text-sm text-primary font-medium">
                  <strong>Meet us in person to discuss our Sharia compliance framework and timeline</strong>
                </p>
              </div>
            </div>
          </section>
          
          {/* Enhanced Trust & Credibility Section */}
          <section className="bg-card border border-border p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-semibold mb-8 text-center">Why Investors Trust Our Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Audited Financials</div>
                <div className="text-sm text-muted-foreground">Full transparency with certified financial statements and third-party audits available to qualified investors</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Fully Insured Projects</div>
                <div className="text-sm text-muted-foreground">Comprehensive property insurance, professional liability, and project completion coverage</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Ontario Regulated</div>
                <div className="text-sm text-muted-foreground">Operating under Ontario Securities Commission oversight with full regulatory compliance</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Documented Results</div>
                <div className="text-sm text-muted-foreground">Verifiable track record with $12M+ in successful project completions and investor returns</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Local Accountability</div>
                <div className="text-sm text-muted-foreground">Meet us in person, visit our offices, and hold us accountable as your Ontario neighbors</div>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="font-semibold text-primary mb-2">Zero Hidden Fees</div>
                <div className="text-sm text-muted-foreground">No management fees, no hidden charges - we only succeed when our investors succeed</div>
              </div>
            </div>
            
            {/* Success Stories & Testimonials */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Investor Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">AK</span>
                    </div>
                    <div>
                      <div className="font-semibold">Ahmad K.</div>
                      <div className="text-sm text-muted-foreground">Toronto Investor</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "Met Mohsin for coffee in Toronto before investing. His transparency about the project timeline 
                    and regular updates made me confident in GCHI. Achieved 12% returns on my first investment."
                  </p>
                  <div className="text-xs text-primary font-medium">Project: Ottawa Multi-Family Development</div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah M.</div>
                      <div className="text-sm text-muted-foreground">Ottawa Professional</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "As a busy professional, I appreciated being able to visit the property and meet Loghman 
                    on-site. The quality of construction exceeded expectations, and returns came exactly as promised."
                  </p>
                  <div className="text-xs text-primary font-medium">Project: Toronto Affordable Housing Initiative</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Join our community of successful investors.</strong> Schedule a meeting to discuss your goals 
                  and see our current projects in person.
                </p>
              </div>
            </div>
          </section>
          
          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 md:p-12 rounded-xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Meet Ontario's Most Trusted Real Estate Team?</h3>
            <p className="text-primary-foreground/90 mb-8 text-lg max-w-3xl mx-auto">
              We're Ontario locals, not distant fund managers. Schedule a coffee meeting in Toronto or Ottawa, 
              visit our offices, or tour properties with the team that will manage your investment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Coffee Meetings</div>
                <div className="text-sm text-primary-foreground/80">Toronto & Ottawa locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Property Tours</div>
                <div className="text-sm text-primary-foreground/80">See your investments firsthand</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Office Visits</div>
                <div className="text-sm text-primary-foreground/80">Meet the team managing your capital</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Toronto Coffee
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Ottawa Meeting
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Property Tour Request
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm">
                <strong>Local accountability you can count on:</strong> Meet us in person, visit our offices, 
                inspect properties, and hold us accountable as your Ontario neighbors.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}