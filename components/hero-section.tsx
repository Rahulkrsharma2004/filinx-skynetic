import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="pt-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2 leading-tight">Register your company.</h1>
            <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6 leading-tight">Fast. Transparent. Done.</p>
            <p className="text-gray-600 text-lg mb-8">
              Expert CA / CS guided business setup powered by AI to empower you with a error free, fast, transparent
              incorporation and licenses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-12 py-4 rounded-full h-auto w-full sm:w-auto">
                Start Setup
              </Button>
              <button className="border-2 border-gray-300 text-gray-900 font-semibold px-12 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition bg-white w-full sm:w-auto">
                Talk to Expert
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Transparent pricing
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                WhatsApp updates
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure document vault
              </div>
            </div>
          </div>

          {/* Right Content - Entity Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Recommended
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entity & Scope</h3>
              <p className="text-sm text-gray-600 mb-4">Based on your answers</p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Team: 2-5 members</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Funding: Seeking investment</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Risk: Limited liability preferred</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Private Limited Company</h4>
                  <p className="text-xs text-gray-500">Best for funded startups</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Investor-ready structure</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Limited personal liability</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Separate legal entity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-8">Trusted by founders & early teams</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center">
            {[
              "Acme Inc",
              "TechStart",
              "Innovate Co",
              "BuildFast",
              "CloudScale",
              "DataFlow",
              "NextGen",
              "Vertex Labs",
            ].map((company) => (
              <div key={company} className="text-center text-xs text-gray-400 font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
