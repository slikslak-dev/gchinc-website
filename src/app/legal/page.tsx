import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Disclaimers — Golden Canadian Homes Inc.',
  description: 'Important legal notices, disclaimers, and compliance information for accredited and OM-eligible investors in Ontario, Canada.',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Disclaimers</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Important legal and compliance notices for investors in Sharia-compliant real estate 
              opportunities in Ontario, Canada. Please read carefully before investing.
            </p>
            <div className="mt-4 text-sm text-primary font-semibold">
              Last Updated: August 28, 2025
            </div>
          </div>

          <div className="space-y-12">
            {/* Investment Risk Warning */}
            <section className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">!</span>
                </div>
                <h2 className="text-2xl font-bold text-red-800">IMPORTANT INVESTMENT RISK WARNING</h2>
              </div>
              
              <div className="space-y-4 text-red-700">
                <p className="font-semibold text-lg">
                  ALL INVESTMENTS CARRY SIGNIFICANT RISKS. YOU MAY LOSE PART OR ALL OF YOUR INVESTMENT.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-red-200">
                  <h3 className="font-semibold mb-3 text-red-800">Key Investment Risks Include:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Loss of Principal:</strong> You may lose some or all of your invested capital</li>
                    <li>• <strong>No Guaranteed Returns:</strong> Target profit-share rates (5%-6%) are projections only</li>
                    <li>• <strong>Illiquidity:</strong> Your investment may not be easily sold or transferred</li>
                    <li>• <strong>Market Risk:</strong> Real estate markets can decline significantly</li>
                    <li>• <strong>Economic Risk:</strong> Economic downturns may impact property values and rental income</li>
                    <li>• <strong>Property-Specific Risks:</strong> Damage, vacancy, construction delays, cost overruns</li>
                    <li>• <strong>Regulatory Risk:</strong> Changes in laws may affect investment returns</li>
                    <li>• <strong>Interest Rate Risk:</strong> Rising rates may negatively impact real estate values</li>
                  </ul>
                </div>
                
                <p className="font-medium">
                  <strong>Only invest money you can afford to lose.</strong> Consult with qualified financial, 
                  legal, and tax advisors before making any investment decisions.
                </p>
              </div>
            </section>

            {/* Investor Eligibility */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">1. Investor Eligibility Requirements</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">1.1 Ontario Securities Law Compliance</h3>
                  <p className="text-muted-foreground mb-4">
                    Our investment offerings are available only to investors who qualify under exemptions 
                    from prospectus requirements in Ontario securities legislation, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• <strong>Accredited Investors</strong> as defined in National Instrument 45-106</li>
                    <li>• <strong>OM Eligible Investors</strong> meeting Offering Memorandum exemption requirements</li>
                    <li>• Investors meeting minimum income and financial thresholds</li>
                    <li>• Institutional and sophisticated investors</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">1.2 Accredited Investor Definition</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p><strong>An accredited investor includes individuals who:</strong></p>
                    <ul className="space-y-1 ml-6">
                      <li>• Have individual income exceeding $200,000 (or $300,000 combined with spouse) in each of the two most recent years</li>
                      <li>• Have net worth exceeding $1,000,000 (excluding principal residence)</li>
                      <li>• Have net worth exceeding $5,000,000 (including principal residence)</li>
                      <li>• Are directors, executive officers, or control persons of the issuer</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">
                      <strong>Verification Required:</strong> All investors must provide documentation verifying their accredited status.
                    </p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">1.3 OM Exemption Requirements</h3>
                  <p className="text-muted-foreground text-sm">
                    Investors utilizing the Offering Memorandum exemption must meet specific criteria including 
                    investment limits, risk acknowledgement, and receipt of proper disclosure documents. 
                    All OM investors have statutory rights including withdrawal and rescission rights.
                  </p>
                </div>
              </div>
            </section>

            {/* No Investment Advice */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">2. No Investment Advice or Recommendations</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-amber-800">Important Advisory Notice</h3>
                  <p className="text-amber-700 mb-4">
                    <strong>GCHI does not provide investment advice, recommendations, or suitability assessments.</strong> 
                    All information on this website is for educational and informational purposes only.
                  </p>
                  <ul className="space-y-2 text-amber-700 text-sm ml-6">
                    <li>• We are not registered investment advisors, dealers, or fund managers</li>
                    <li>• No content constitutes personalized investment advice</li>
                    <li>• We do not assess investor suitability or risk tolerance</li>
                    <li>• All investment decisions are solely your responsibility</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.1 Consult Professional Advisors</h3>
                  <p className="text-muted-foreground mb-4">
                    Before making any investment decisions, you should consult with qualified professionals including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• <strong>Financial Advisors:</strong> Investment suitability and portfolio allocation</li>
                      <li>• <strong>Legal Counsel:</strong> Legal implications and documentation review</li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• <strong>Tax Professionals:</strong> Tax consequences and planning strategies</li>
                      <li>• <strong>Islamic Scholars:</strong> Sharia compliance verification if desired</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">2.2 Independent Due Diligence Required</h3>
                  <p className="text-muted-foreground text-sm">
                    You are responsible for conducting your own due diligence, including reviewing all 
                    offering documents, financial statements, property reports, and market analyses. 
                    Past performance information does not predict future results.
                  </p>
                </div>
              </div>
            </section>

            {/* Sharia Compliance */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">3. Sharia Compliance Framework</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.1 Islamic Finance Principles</h3>
                  <p className="text-muted-foreground mb-4">
                    GCHI aims to structure all investment opportunities in accordance with Islamic finance principles, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li>• <strong>Prohibition of Riba (Interest):</strong> No interest-based financing or returns</li>
                    <li>• <strong>Asset-Backed Investments:</strong> All investments tied to tangible real estate assets</li>
                    <li>• <strong>Profit and Loss Sharing:</strong> Genuine risk and reward sharing partnerships</li>
                    <li>• <strong>Halal Activities:</strong> No involvement with prohibited industries or practices</li>
                    <li>• <strong>Transparency:</strong> Full disclosure of investment structures and activities</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.2 Sharia Advisory Board Status</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Current Status:</strong> GCHI is in the process of establishing a formal Sharia Advisory Board 
                      with qualified Islamic finance scholars to provide ongoing oversight and certification.
                    </p>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Interim Framework</h4>
                      <p className="text-sm text-muted-foreground">
                        Until formal certification is complete, we operate under established Islamic finance principles 
                        and consult with qualified scholars on specific transactions. We will publish detailed 
                        Sharia compliance documentation once our advisory board is established.
                      </p>
                    </div>
                    
                    <p className="text-sm">
                      <strong>Important:</strong> Investors seeking strict Sharia compliance should conduct their own 
                      due diligence and consult with their preferred Islamic scholars before investing.
                    </p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">3.3 Religious Guidance Disclaimer</h3>
                  <p className="text-muted-foreground text-sm">
                    GCHI does not provide religious guidance or rulings. While we aim for Sharia compliance, 
                    investors must make their own determinations about religious permissibility. In case of 
                    any conflict between this website and formal Sharia advisor guidance, the advisor's 
                    determination governs.
                  </p>
                </div>
              </div>
            </section>

            {/* Forward-Looking Statements */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">4. Forward-Looking Statements</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.1 Cautionary Statement</h3>
                  <p className="text-muted-foreground mb-4">
                    This website contains forward-looking statements regarding GCHI's business, financial condition, 
                    results of operations, and prospects. These statements involve risks and uncertainties.
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    <strong>Forward-looking statements include information concerning:</strong>
                  </p>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-6 mt-2">
                    <li>• Projected profit-share rates and investment returns</li>
                    <li>• Expected property appreciation and rental income</li>
                    <li>• Market conditions and economic outlook</li>
                    <li>• Business expansion and development plans</li>
                    <li>• Regulatory environment and compliance expectations</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.2 Risk Factors</h3>
                  <p className="text-muted-foreground mb-4">
                    Actual results may differ materially from forward-looking statements due to various factors:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• Changes in economic conditions</li>
                      <li>• Real estate market fluctuations</li>
                      <li>• Interest rate movements</li>
                      <li>• Regulatory changes</li>
                      <li>• Construction and development risks</li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• Natural disasters and force majeure events</li>
                      <li>• Changes in tax laws</li>
                      <li>• Competition in target markets</li>
                      <li>• Availability of financing</li>
                      <li>• Management execution risks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">4.3 No Obligation to Update</h3>
                  <p className="text-muted-foreground text-sm">
                    GCHI undertakes no obligation to publicly update or revise forward-looking statements, 
                    whether as a result of new information, future events, or otherwise, except as required by law.
                  </p>
                </div>
              </div>
            </section>

            {/* Ontario Securities Commission */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">5. Ontario Securities Commission Compliance</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.1 Regulatory Framework</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      GCHI operates under the regulatory oversight of the Ontario Securities Commission (OSC) 
                      and complies with applicable Ontario securities legislation.
                    </p>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• <strong>Prospectus Exemptions:</strong> Investments offered under recognized exemptions</li>
                      <li>• <strong>Know Your Client:</strong> Enhanced due diligence on all investors</li>
                      <li>• <strong>Anti-Money Laundering:</strong> Full AML/CTF compliance procedures</li>
                      <li>• <strong>Disclosure Requirements:</strong> Comprehensive investor documentation</li>
                      <li>• <strong>Ongoing Reporting:</strong> Regular regulatory filings and updates</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.2 Investor Protection</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Ontario securities laws provide important investor protections, including:</p>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• <strong>Statutory Rights:</strong> Right of rescission and withdrawal (where applicable)</li>
                      <li>• <strong>Disclosure Standards:</strong> Required risk disclosure and financial information</li>
                      <li>• <strong>Cooling-Off Periods:</strong> Time to reconsider investment decisions</li>
                      <li>• <strong>Complaint Mechanisms:</strong> Access to regulatory dispute resolution</li>
                    </ul>
                    
                    <div className="bg-primary/10 p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong>OSC Contact Information:</strong><br />
                        Ontario Securities Commission<br />
                        20 Queen Street West, 22nd Floor<br />
                        Toronto, ON M5H 3S8<br />
                        Phone: 416-593-8314 | Toll-free: 1-877-785-1555
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">5.3 Regulatory Reporting</h3>
                  <p className="text-muted-foreground text-sm">
                    GCHI files all required regulatory reports and maintains records in accordance with OSC 
                    requirements. Qualified investors may request access to regulatory filings and 
                    additional disclosure documents.
                  </p>
                </div>
              </div>
            </section>

            {/* Professional Services */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">6. Professional Services and Third Parties</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.1 Professional Team</h3>
                  <p className="text-muted-foreground mb-4">
                    GCHI works with qualified professionals to ensure compliance and operational excellence:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• <strong>Legal Counsel:</strong> Qualified Ontario lawyers</li>
                      <li>• <strong>Accounting:</strong> Chartered Professional Accountants</li>
                      <li>• <strong>Auditing:</strong> Independent certified public accountants</li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-6">
                      <li>• <strong>Property Management:</strong> Licensed property managers</li>
                      <li>• <strong>Construction:</strong> Licensed contractors and engineers</li>
                      <li>• <strong>Insurance:</strong> Commercial insurance specialists</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.2 Third-Party Information</h3>
                  <p className="text-muted-foreground text-sm">
                    Some information on this website may be sourced from third parties including market 
                    data, property valuations, and economic analyses. While we believe this information 
                    to be reliable, we do not guarantee its accuracy or completeness. Third-party information 
                    is used for illustrative purposes only.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">6.3 Professional Liability</h3>
                  <p className="text-muted-foreground text-sm">
                    Our professional service providers maintain appropriate professional liability insurance. 
                    However, investors should understand that professional opinions and advice do not 
                    guarantee investment outcomes or eliminate investment risks.
                  </p>
                </div>
              </div>
            </section>

            {/* Document Hierarchy */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">7. Document Hierarchy and Legal Precedence</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-amber-800">Critical Legal Notice</h3>
                  <p className="text-amber-700 font-medium mb-3">
                    In case of conflict between documents, the following hierarchy applies:
                  </p>
                  <ol className="space-y-2 text-amber-700 text-sm ml-6">
                    <li><strong>1. Executed Investment Agreements</strong> (Partnership agreements, subscription agreements)</li>
                    <li><strong>2. Offering Memorandum or Private Placement Memorandum</strong></li>
                    <li><strong>3. Formal Sharia Advisory Board Rulings</strong> (when established)</li>
                    <li><strong>4. Audited Financial Statements and Legal Opinions</strong></li>
                    <li><strong>5. Website Terms of Service and Privacy Policy</strong></li>
                    <li><strong>6. General Website Content and Marketing Materials</strong></li>
                  </ol>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">7.1 Investment Documents Control</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>Any investment will be governed solely by executed legal documents</strong> including 
                    offering memoranda, subscription agreements, and partnership documents. This website 
                    provides general information only and does not create binding investment obligations.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">7.2 Professional Review Required</h3>
                  <p className="text-muted-foreground text-sm">
                    All potential investors must review formal legal documents with qualified counsel 
                    before making investment commitments. Website information supplements but does not 
                    replace comprehensive due diligence and professional review.
                  </p>
                </div>
              </div>
            </section>

            {/* Tax and Accounting */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">8. Tax and Accounting Considerations</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">8.1 Tax Implications</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Real estate investments have complex tax implications that vary based on individual circumstances:
                    </p>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• <strong>Income Tax:</strong> Profit distributions may be subject to income tax</li>
                      <li>• <strong>Capital Gains:</strong> Property appreciation may trigger capital gains tax</li>
                      <li>• <strong>Depreciation:</strong> Different treatment for direct vs. partnership ownership</li>
                      <li>• <strong>Foreign Tax:</strong> Non-resident investors may face withholding taxes</li>
                      <li>• <strong>Provincial Tax:</strong> Varying provincial tax rates and rules</li>
                    </ul>
                    
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                      <p className="text-red-700 text-sm font-medium">
                        <strong>Consult Tax Professionals:</strong> All investors must obtain independent tax 
                        advice regarding their specific situation. GCHI does not provide tax advice or planning services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">8.2 Reporting Requirements</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>Investors may receive various tax documents including:</p>
                    <ul className="space-y-1 ml-6">
                      <li>• T5 slips for investment income</li>
                      <li>• Partnership information returns (T5013)</li>
                      <li>• Capital gains/loss statements</li>
                      <li>• Foreign property reporting forms (if applicable)</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Record Keeping:</strong> Maintain detailed records of all investment-related 
                      transactions, expenses, and correspondence for tax purposes.
                    </p>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">8.3 Accounting Standards</h3>
                  <p className="text-muted-foreground text-sm">
                    GCHI maintains accounting records in accordance with Canadian Generally Accepted 
                    Accounting Principles (GAAP) and provides audited financial statements to investors. 
                    Investment valuations may be based on appraised values, market comparisons, or 
                    management estimates.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">9. Limitation of Liability and Disclaimers</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">9.1 Website Information Disclaimers</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>INFORMATION PROVIDED "AS IS":</strong> All website content is provided for 
                      informational purposes only without warranties of any kind, express or implied.
                    </p>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• No guarantee of accuracy, completeness, or timeliness</li>
                      <li>• Market data and projections are estimates only</li>
                      <li>• Property information subject to change without notice</li>
                      <li>• No warranty of uninterrupted website access</li>
                      <li>• Third-party information not independently verified</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">9.2 Investment Performance Disclaimers</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p><strong>NO PERFORMANCE GUARANTEES:</strong></p>
                    <ul className="space-y-1 ml-6">
                      <li>• Past performance does not indicate future results</li>
                      <li>• Target returns are projections, not promises</li>
                      <li>• Market conditions may significantly impact performance</li>
                      <li>• Individual investment results may vary substantially</li>
                      <li>• Economic factors beyond our control may affect outcomes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">9.3 Liability Limitations</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>
                      <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> GCHI, its officers, 
                      directors, employees, and agents shall not be liable for any direct, indirect, 
                      incidental, or consequential damages arising from:
                    </p>
                    <ul className="space-y-1 ml-6">
                      <li>• Use of website information or services</li>
                      <li>• Investment decisions based on our materials</li>
                      <li>• Market losses or poor investment performance</li>
                      <li>• Errors, omissions, or delays in information</li>
                      <li>• Technical problems or system failures</li>
                      <li>• Third-party actions or services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact and Updates */}
            <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">10. Contact Information and Updates</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Legal and Compliance</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Golden Canadian Homes Inc.</strong></p>
                      <p>Email: legal@gchinc.ca</p>
                      <p>Phone: 1-800-GCHI-INV</p>
                      <p>Address: Toronto, ON Canada</p>
                    </div>
                  </div>
                  
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-lg mb-4">Investor Relations</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: investors@gchinc.ca</p>
                      <p>Phone: 1-800-GCHI-INV</p>
                      <p><strong>Response Time:</strong> 24-48 hours</p>
                      <p><strong>Office Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-4">Document Updates</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      These legal disclaimers may be updated from time to time to reflect changes in 
                      our business, regulatory requirements, or legal developments. Material changes 
                      will be communicated to active investors.
                    </p>
                    <p className="text-sm">
                      <strong>Current Version:</strong> August 28, 2025<br />
                      <strong>Review Schedule:</strong> Quarterly or as needed for regulatory compliance
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="font-semibold text-lg mb-3">Regulatory Resources</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p><strong>Ontario Securities Commission</strong></p>
                      <p>osc.gov.on.ca</p>
                      <p>416-593-8314</p>
                    </div>
                    <div>
                      <p><strong>Canadian Securities Administrators</strong></p>
                      <p>securities-administrators.ca</p>
                      <p>Securities regulation info</p>
                    </div>
                    <div>
                      <p><strong>OBSI (Investment Disputes)</strong></p>
                      <p>obsi.ca</p>
                      <p>1-888-451-4519</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Notice */}
            <div className="mt-12 bg-muted p-6 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> August 28, 2025<br />
                These legal disclaimers are subject to change and govern your use of our website and consideration 
                of our investment opportunities. Investment-specific terms are governed by separate legal agreements.<br /><br />
                <strong>© 2025 Golden Canadian Homes Inc. All rights reserved.</strong><br />
                <strong>Investment opportunities available to qualified investors in Ontario, Canada only.</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}