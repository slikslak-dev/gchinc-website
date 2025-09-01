import { Metadata } from 'next'
import { Building2, Mail, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Under Construction | GCHI - Golden Canadian Homes Inc.',
  description: 'We are working on something amazing. Our Sharia-compliant real estate investment platform is coming soon.',
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-blue-600 rounded-full mb-4 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GCHI</h1>
          <p className="text-gray-600">Golden Canadian Homes Inc.</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We're Building Something Special
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is working hard to bring you Ontario's premier Sharia-compliant 
              real estate investment platform. We're putting the finishing touches on an 
              exceptional investment experience.
            </p>

            {/* Features Coming Soon */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">100% Halal Investments</h3>
                  <p className="text-sm text-gray-600">Fully Sharia-compliant opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Real Estate Partnerships</h3>
                  <p className="text-sm text-gray-600">Direct property investments in Ontario</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-600 font-bold">%</div>
                <div>
                  <h3 className="font-semibold text-gray-900">5-6% Target Returns</h3>
                  <p className="text-sm text-gray-600">Competitive profit-sharing model</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600 font-bold">$0</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Zero Investor Fees</h3>
                  <p className="text-sm text-gray-600">No hidden costs or management fees</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>85% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-600 to-blue-600 h-3 rounded-full transition-all duration-1000 animate-pulse"
                  style={{ width: '85%' }}
                />
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-900 font-semibold">
                🚀 Expected Launch: Coming Soon
              </p>
              <p className="text-blue-700 text-sm mt-1">
                Join our waitlist to be the first to know when we launch
              </p>
            </div>

            {/* Contact Section */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in being among the first to explore our investment opportunities? 
                Reach out to our team for early access and exclusive updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@gchi.ca"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>© 2025 Golden Canadian Homes Inc. All rights reserved.</p>
          <p className="mt-2">Building trust through transparent, Sharia-compliant investments.</p>
        </div>
      </div>
    </div>
  )
}
