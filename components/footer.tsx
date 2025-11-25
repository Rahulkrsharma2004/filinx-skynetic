export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to incorporate?</h2>
          <p className="text-white text-lg mb-8 opacity-95">
            Start your guided setup in minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Start Setup
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition">
              Schedule a free consult
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-gray-900 text-gray-300 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-1">
              <p className="text-sm text-gray-400 leading-relaxed">
                Fast, transparent company registration with guided workflows and live tracking
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Licences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    International
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Glossary
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Chat with us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Book a call
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2025 Filinx Fintech LLP. All rights reserved.</p>
              <p>
                Filinx is not a law firm and does not provide legal advice. Services include filing assistance and
                document management.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
