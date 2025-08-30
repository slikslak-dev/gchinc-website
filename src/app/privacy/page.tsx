import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Golden Canadian Homes Inc.',
  description: 'How we collect, use, and protect your personal information in compliance with PIPEDA and Canadian privacy laws.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Golden Canadian Homes Inc. collects, uses, and protects your personal information 
              in compliance with PIPEDA and Canadian privacy laws.
            </p>
            <div className="mt-4 text-sm text-primary font-semibold">
              Last Updated: August 28, 2025
            </div>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">1. Introduction</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Golden Canadian Homes Inc. ("GCHI", "we", "us", or "our") is committed to protecting your privacy 
                  and personal information. This Privacy Policy explains how we collect, use, disclose, and protect 
                  your personal information in accordance with the Personal Information Protection and Electronic 
                  Documents Act ("PIPEDA") and applicable provincial privacy laws.
                </p>
                <p>
                  By accessing our website, using our services, or providing us with your personal information, 
                  you consent to the collection, use, and disclosure of your information as described in this policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">2. Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.1 Personal Information</h3>
                  <p className="text-muted-foreground mb-4">We may collect the following types of personal information:</p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Contact information (name, email address, phone number, mailing address)</li>
                    <li>• Financial information (income, net worth, investment experience, accredited investor status)</li>
                    <li>• Identity verification documents (government-issued ID, proof of address)</li>
                    <li>• Investment preferences and risk tolerance</li>
                    <li>• Communication records and correspondence</li>
                    <li>• Website usage data and analytics</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.2 Technical Information</h3>
                  <p className="text-muted-foreground mb-4">We automatically collect certain technical information when you visit our website:</p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• IP address and geographical location</li>
                    <li>• Browser type and version</li>
                    <li>• Device type and operating system</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referral sources and exit pages</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">3. How We Use Your Information</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.1 Primary Purposes</h3>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Verify your identity and accredited investor status</li>
                    <li>• Assess your suitability for our investment offerings</li>
                    <li>• Process your investment applications and transactions</li>
                    <li>• Provide ongoing investor services and communications</li>
                    <li>• Comply with regulatory requirements and legal obligations</li>
                    <li>• Maintain accurate investor records and reporting</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.2 Secondary Purposes</h3>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Improve our website and user experience</li>
                    <li>• Conduct market research and analytics</li>
                    <li>• Send newsletters and investment updates (with consent)</li>
                    <li>• Prevent fraud and ensure website security</li>
                    <li>• Respond to inquiries and provide customer support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">4. Information Sharing and Disclosure</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, rent, or trade your personal information to third parties. We may share your 
                  information only in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">4.1 Service Providers</h3>
                    <p className="text-muted-foreground">
                      We may share information with trusted service providers who assist us in operating our 
                      business, including legal counsel, accountants, auditors, and technology service providers.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">4.2 Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      We may disclose information to comply with applicable laws, regulations, legal processes, 
                      or requests from regulatory authorities, including the Ontario Securities Commission.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">4.3 Business Transfers</h3>
                    <p className="text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may be 
                      transferred as part of the transaction, subject to appropriate confidentiality protections.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">5. Data Protection and Security</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We implement appropriate technical, administrative, and physical safeguards to protect your 
                  personal information against unauthorized access, disclosure, alteration, or destruction.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">Technical Safeguards</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure server infrastructure</li>
                      <li>• Regular security updates and monitoring</li>
                      <li>• Access controls and authentication</li>
                    </ul>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">Administrative Safeguards</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Employee privacy training</li>
                      <li>• Limited access on need-to-know basis</li>
                      <li>• Confidentiality agreements</li>
                      <li>• Regular privacy policy reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">6. Cookies and Website Analytics</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.1 Cookie Usage</h3>
                  <p className="text-muted-foreground mb-4">
                    Our website uses cookies and similar technologies to enhance your browsing experience 
                    and analyze website traffic. Cookies are small text files stored on your device.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Essential Cookies</h4>
                      <p className="text-muted-foreground text-sm">
                        Required for basic website functionality, including security and user authentication.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Analytics Cookies</h4>
                      <p className="text-muted-foreground text-sm">
                        Help us understand how visitors use our website to improve user experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.2 Managing Cookies</h3>
                  <p className="text-muted-foreground">
                    You can control cookie settings through your browser preferences. However, disabling 
                    certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">7. Your Privacy Rights</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>Under PIPEDA and applicable privacy laws, you have the following rights regarding your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Access</h3>
                      <p className="text-sm text-muted-foreground">Request copies of your personal information we hold</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Correction</h3>
                      <p className="text-sm text-muted-foreground">Request correction of inaccurate or incomplete information</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Withdraw Consent</h3>
                      <p className="text-sm text-muted-foreground">Withdraw consent for certain uses of your information</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Complaint</h3>
                      <p className="text-sm text-muted-foreground">File complaints with privacy regulators</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Explanation</h3>
                      <p className="text-sm text-muted-foreground">Understand how your information is being used</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-primary mb-2">Right to Portability</h3>
                      <p className="text-sm text-muted-foreground">Request your information in a structured format</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">8. Data Retention</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes for 
                  which it was collected and to comply with legal and regulatory requirements.
                </p>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Retention Periods</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Investor records: 7 years after account closure (regulatory requirement)</li>
                    <li>• Financial transaction records: 7 years (tax and regulatory compliance)</li>
                    <li>• Marketing communications: Until consent is withdrawn</li>
                    <li>• Website analytics: 2 years for performance analysis</li>
                    <li>• Identity verification documents: As required by anti-money laundering laws</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* International Transfers */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">9. International Data Transfers</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your personal information is primarily stored and processed in Canada. In some cases, 
                  information may be transferred to service providers located outside Canada, including 
                  cloud storage providers in the United States.
                </p>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">International Transfer Safeguards</h3>
                  <ul className="space-y-2 ml-6 text-sm">
                    <li>• Service providers bound by contractual privacy obligations</li>
                    <li>• Appropriate technical and organizational security measures</li>
                    <li>• Regular compliance monitoring and audits</li>
                    <li>• Data transfer agreements meeting Canadian privacy standards</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">10. Changes to This Privacy Policy</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. We will notify you of material changes 
                  by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
                
                <p>
                  For significant changes that affect how we use your personal information, we will 
                  provide additional notice through email or other appropriate means.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">11. Contact Information</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                  please contact our Privacy Officer:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Privacy Officer</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Golden Canadian Homes Inc.</strong></p>
                      <p>Email: privacy@gchinc.ca</p>
                      <p>Phone: 1-800-GCHI-INV</p>
                      <p>Mail: Privacy Officer<br />Golden Canadian Homes Inc.<br />Toronto, ON Canada</p>
                    </div>
                  </div>
                  
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Privacy Regulator</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Office of the Privacy Commissioner of Canada</strong></p>
                      <p>Website: priv.gc.ca</p>
                      <p>Phone: 1-800-282-1376</p>
                      <p>Email: info@priv.gc.ca</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-muted-foreground">
                    <strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days, 
                    as required by PIPEDA. For urgent matters, please call our investor relations line.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Notice */}
            <div className="mt-12 bg-muted p-6 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> August 28, 2025<br />
                This Privacy Policy is effective immediately and governs our collection, use, and disclosure 
                of personal information. Please review this policy regularly for any updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}