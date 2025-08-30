import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Golden Canadian Homes Inc.',
  description: 'Terms and conditions for using the Golden Canadian Homes Inc. website and investment services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Terms and conditions governing your use of the Golden Canadian Homes Inc. website 
              and investment services in Ontario, Canada.
            </p>
            <div className="mt-4 text-sm text-primary font-semibold">
              Last Updated: August 28, 2025
            </div>
          </div>

          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the website and services 
                  provided by Golden Canadian Homes Inc. ("GCHI", "we", "us", or "our"). By accessing our 
                  website, using our services, or providing personal information, you agree to be bound by these Terms.
                </p>
                <p>
                  <strong>If you do not agree to these Terms, do not use our website or services.</strong> We reserve 
                  the right to modify these Terms at any time by posting updated Terms on our website with an updated 
                  "Last Updated" date.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    Important: These Terms contain binding arbitration and class action waiver provisions in Section 13 
                    that affect your legal rights. Please read them carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility and Account Access */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">2. Eligibility and Account Access</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.1 General Eligibility</h3>
                  <p className="text-muted-foreground mb-4">To use our services, you must:</p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Be at least 18 years of age (or age of majority in your jurisdiction)</li>
                    <li>• Be a Canadian resident or eligible non-resident</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Comply with all applicable Canadian laws and regulations</li>
                    <li>• Not be subject to economic sanctions or prohibited person lists</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.2 Investment Eligibility</h3>
                  <p className="text-muted-foreground mb-4">
                    Our investment opportunities are available only to investors who qualify under Ontario securities laws:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• <strong>Accredited Investors:</strong> As defined in National Instrument 45-106</li>
                    <li>• <strong>OM Eligible Investors:</strong> Meeting Offering Memorandum exemption requirements</li>
                    <li>• Residents of Ontario, Canada (primary focus)</li>
                    <li>• Other qualifying investors as permitted by applicable securities legislation</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.3 Account Security</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                    <p><strong>You agree to:</strong></p>
                    <ul className="space-y-1 ml-6">
                      <li>• Use strong, unique passwords</li>
                      <li>• Notify us immediately of any unauthorized access</li>
                      <li>• Log out of your account when finished</li>
                      <li>• Not share your account with others</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Website Use and Restrictions */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">3. Website Use and Restrictions</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.1 Permitted Use</h3>
                  <p className="text-muted-foreground mb-4">You may use our website and services for:</p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Researching investment opportunities</li>
                    <li>• Accessing educational content and resources</li>
                    <li>• Submitting investment applications (if eligible)</li>
                    <li>• Managing your investor account and reviewing reports</li>
                    <li>• Communicating with our team regarding investments</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.2 Prohibited Activities</h3>
                  <p className="text-muted-foreground mb-4">You agree NOT to:</p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• Use our services for any unlawful purpose</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Distribute malware, viruses, or harmful code</li>
                    <li>• Scrape, mine, or harvest data from our website</li>
                    <li>• Impersonate GCHI or other users</li>
                    <li>• Interfere with the proper functioning of our services</li>
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Share proprietary investment information publicly</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.3 Content Standards</h3>
                  <p className="text-muted-foreground">
                    Any content you submit through our website must be accurate, lawful, and respectful. 
                    We reserve the right to remove content that violates these standards or our policies.
                  </p>
                </div>
              </div>
            </section>

            {/* Investment Services */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">4. Investment Services</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.1 Nature of Services</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      GCHI provides Sharia-compliant real estate investment opportunities through profit-sharing 
                      partnerships. We are not a registered investment dealer, investment fund manager, or financial advisor.
                    </p>
                    <p>
                      <strong>Our services include:</strong>
                    </p>
                    <ul className="space-y-1 ml-6">
                      <li>• Real estate acquisition and development</li>
                      <li>• Property management and administration</li>
                      <li>• Investor relations and reporting</li>
                      <li>• Sharia compliance oversight</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.2 Investment Process</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Investment opportunities are offered through specific legal documents including:</p>
                    <ul className="space-y-1 ml-6">
                      <li>• Offering Memorandum or Private Placement Memorandum</li>
                      <li>• Subscription Agreement</li>
                      <li>• Partnership or Joint Venture Agreement</li>
                      <li>• Risk Acknowledgement Forms</li>
                    </ul>
                    <p className="mt-3">
                      <strong>These legal documents govern your investment, not this website's terms.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.3 No Investment Advice</h3>
                  <p className="text-muted-foreground">
                    We do not provide investment advice, recommendations, or suitability assessments. 
                    All information on our website is for educational and informational purposes only. 
                    You should consult with qualified advisors before making investment decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">5. Intellectual Property Rights</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.1 Our Intellectual Property</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      All content on our website, including but not limited to text, graphics, logos, images, 
                      videos, software, and other materials, is owned by GCHI or our licensors and is protected 
                      by Canadian and international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p><strong>This includes:</strong></p>
                    <ul className="space-y-1 ml-6">
                      <li>• "Golden Canadian Homes Inc." and "GCHI" trademarks</li>
                      <li>• Our distinctive logo and branding elements</li>
                      <li>• Proprietary investment methodologies and frameworks</li>
                      <li>• Website design, layout, and user interface</li>
                      <li>• Educational content and market analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.2 Limited License</h3>
                  <p className="text-muted-foreground">
                    We grant you a limited, non-exclusive, non-transferable license to access and use our website 
                    for personal, non-commercial purposes. This license does not include the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6 mt-3">
                    <li>• Reproduce, distribute, or publicly display our content</li>
                    <li>• Create derivative works from our materials</li>
                    <li>• Use our trademarks or logos without permission</li>
                    <li>• Reverse engineer our software or systems</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.3 User Content</h3>
                  <p className="text-muted-foreground">
                    By submitting content to our website (such as comments, documents, or feedback), you grant 
                    GCHI a non-exclusive, royalty-free license to use, modify, and display such content in 
                    connection with our business operations, subject to our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers and Risk Warnings */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">6. Investment Risk Disclaimers</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-red-800">IMPORTANT RISK WARNINGS</h3>
                  <div className="space-y-3 text-red-700 text-sm">
                    <p><strong>Real estate investments involve significant risks, including:</strong></p>
                    <ul className="space-y-1 ml-6">
                      <li>• Loss of principal investment</li>
                      <li>• No guarantee of returns or profit distributions</li>
                      <li>• Illiquidity - investments may not be easily sold</li>
                      <li>• Market volatility and economic downturns</li>
                      <li>• Property-specific risks (damage, vacancy, etc.)</li>
                      <li>• Regulatory and legal changes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.1 No Guarantees</h3>
                  <p className="text-muted-foreground">
                    Target profit-share rates (5%-6%) are projections only and not guaranteed. Past performance 
                    does not indicate future results. All investments may result in partial or total loss of capital.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.2 Forward-Looking Statements</h3>
                  <p className="text-muted-foreground">
                    Our website contains forward-looking statements about expected returns, market conditions, 
                    and business plans. These statements involve risks and uncertainties, and actual results 
                    may differ materially from those expressed or implied.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.3 Regulatory Compliance</h3>
                  <p className="text-muted-foreground">
                    Our investment offerings are made pursuant to exemptions from prospectus requirements under 
                    Ontario securities legislation. These investments are not publicly traded and may have 
                    limited liquidity. Investors should carefully review all offering documents.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">7. Limitation of Liability</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">7.1 Website Services Disclaimer</h3>
                  <p className="text-muted-foreground mb-4">
                    OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. 
                    WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>• NON-INFRINGEMENT OF THIRD PARTY RIGHTS</li>
                    <li>• ACCURACY, COMPLETENESS, OR TIMELINESS OF INFORMATION</li>
                    <li>• UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                    <li>• SECURITY OF DATA TRANSMISSION</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">7.2 Liability Limitations</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, GCHI SHALL NOT BE LIABLE FOR ANY 
                      INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM:
                    </p>
                    <ul className="space-y-1 ml-6">
                      <li>• Use of or inability to use our website or services</li>
                      <li>• Investment losses or poor investment performance</li>
                      <li>• Errors in information or calculations</li>
                      <li>• System failures or security breaches</li>
                      <li>• Third-party actions or services</li>
                    </ul>
                    <p className="mt-3">
                      Our total liability for any claim shall not exceed the amount you paid to us for 
                      the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">7.3 Provincial Law Compliance</h3>
                  <p className="text-muted-foreground">
                    Some provinces may not allow the exclusion of certain warranties or limitation of liability. 
                    In such cases, our liability will be limited to the greatest extent permitted by applicable law.
                  </p>
                </div>
              </div>
            </section>

            {/* Indemnification */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">8. Indemnification</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless GCHI, its officers, directors, employees, 
                  agents, and affiliates from and against any and all claims, damages, losses, costs, and 
                  expenses (including reasonable attorney fees) arising from:
                </p>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <ul className="space-y-2 ml-6">
                    <li>• Your use of our website or services</li>
                    <li>• Your violation of these Terms</li>
                    <li>• Your violation of any applicable laws or regulations</li>
                    <li>• Your infringement of third-party rights</li>
                    <li>• Any false or misleading information you provide</li>
                    <li>• Your investment decisions and their consequences</li>
                  </ul>
                </div>
                
                <p>
                  This indemnification obligation survives termination of your use of our services and 
                  continues for the applicable statute of limitations period.
                </p>
              </div>
            </section>

            {/* Privacy and Data Protection */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">9. Privacy and Data Protection</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal 
                  information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Key Privacy Points</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• We comply with PIPEDA and provincial privacy laws</li>
                    <li>• Personal information is collected only for legitimate business purposes</li>
                    <li>• We implement appropriate security safeguards</li>
                    <li>• You have rights regarding your personal information</li>
                    <li>• We do not sell your information to third parties</li>
                  </ul>
                </div>
                
                <p>
                  Please review our Privacy Policy for complete details about how we handle your personal information.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">10. Governing Law and Jurisdiction</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">10.1 Applicable Law</h3>
                  <p className="text-muted-foreground">
                    These Terms are governed by and construed in accordance with the laws of the Province of Ontario 
                    and the federal laws of Canada applicable therein, without regard to conflict of law principles.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">10.2 Jurisdiction</h3>
                  <p className="text-muted-foreground">
                    Subject to the arbitration provisions below, any legal action or proceeding arising under these 
                    Terms shall be brought exclusively in the courts of Ontario, and you consent to the jurisdiction 
                    of such courts.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">10.3 Securities Law Compliance</h3>
                  <p className="text-muted-foreground">
                    Investment-related disputes may be subject to the jurisdiction of securities regulators, 
                    including the Ontario Securities Commission, in addition to or instead of court proceedings.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">11. Termination</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">11.1 Termination by You</h3>
                  <p className="text-muted-foreground">
                    You may stop using our website and services at any time. However, certain obligations 
                    (including indemnification and liability limitations) survive termination. Investment 
                    commitments are governed by separate legal agreements.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">11.2 Termination by GCHI</h3>
                  <p className="text-muted-foreground mb-4">
                    We may suspend or terminate your access to our website and services, with or without notice, if:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• You violate these Terms or applicable laws</li>
                    <li>• You provide false or misleading information</li>
                    <li>• Your actions pose risks to other users or our business</li>
                    <li>• We cease operations or materially change our business model</li>
                    <li>• Required by law or regulatory authorities</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">11.3 Effect of Termination</h3>
                  <p className="text-muted-foreground">
                    Upon termination, your right to use our website ends immediately. Existing investment 
                    commitments continue to be governed by their respective legal agreements. Sections of 
                    these Terms that by their nature should survive (such as liability limitations and 
                    governing law) remain in effect.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">12. Dispute Resolution</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">12.1 Informal Resolution</h3>
                  <p className="text-muted-foreground">
                    Before pursuing formal legal action, we encourage you to contact us directly to resolve 
                    any disputes. Many issues can be resolved quickly through direct communication.
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <p><strong>Contact Information:</strong></p>
                    <p>Email: legal@gchinc.ca</p>
                    <p>Phone: 1-800-GCHI-INV</p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">12.2 Mediation</h3>
                  <p className="text-muted-foreground">
                    If informal resolution is unsuccessful, we agree to participate in mediation through 
                    a recognized mediation service in Toronto, Ontario, before pursuing litigation or arbitration.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">12.3 Arbitration (Non-Securities Disputes)</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      For disputes not related to securities laws or investment activities, you agree that 
                      any remaining dispute shall be resolved through binding arbitration in Toronto, Ontario, 
                      under the rules of the ADR Institute of Canada.
                    </p>
                    <p className="text-sm">
                      <strong>Note:</strong> Securities-related disputes may be subject to different resolution 
                      procedures as set forth in investment agreements or applicable regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* General Provisions */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">13. General Provisions</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.1 Entire Agreement</h3>
                    <p className="text-muted-foreground text-sm">
                      These Terms, together with our Privacy Policy, constitute the entire agreement between 
                      you and GCHI regarding use of our website and services.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.2 Severability</h3>
                    <p className="text-muted-foreground text-sm">
                      If any provision of these Terms is found invalid or unenforceable, the remaining 
                      provisions continue in full force and effect.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.3 Assignment</h3>
                    <p className="text-muted-foreground text-sm">
                      You may not assign these Terms without our written consent. We may assign these Terms 
                      in connection with a merger, acquisition, or sale of assets.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.4 Waiver</h3>
                    <p className="text-muted-foreground text-sm">
                      Our failure to enforce any provision of these Terms does not constitute a waiver of 
                      our right to enforce that provision in the future.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.5 Force Majeure</h3>
                    <p className="text-muted-foreground text-sm">
                      We are not liable for delays or failures in performance due to circumstances beyond 
                      our reasonable control, including natural disasters, government actions, or pandemics.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-3">13.6 Language</h3>
                    <p className="text-muted-foreground text-sm">
                      These Terms are prepared in English. Any translation is for convenience only, and 
                      the English version governs in case of discrepancy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">14. Contact Information</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Legal Department</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Golden Canadian Homes Inc.</strong></p>
                      <p>Email: legal@gchinc.ca</p>
                      <p>Phone: 1-800-GCHI-INV</p>
                      <p>Mail: Legal Department<br />Golden Canadian Homes Inc.<br />Toronto, ON Canada</p>
                    </div>
                  </div>
                  
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                      <p><strong>Response Time:</strong> Within 2 business days</p>
                      <p><strong>Urgent Legal Matters:</strong> Call our main line and request immediate escalation</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-muted-foreground">
                    <strong>Alternative Dispute Resolution:</strong> We are committed to resolving disputes fairly 
                    and efficiently. Please contact us directly before pursuing formal legal action.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Notice */}
            <div className="mt-12 bg-muted p-6 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> August 28, 2025<br />
                These Terms of Service are effective immediately and govern your use of our website and services. 
                Investment-specific terms are governed by separate legal agreements.<br /><br />
                <strong>© 2025 Golden Canadian Homes Inc. All rights reserved.</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}