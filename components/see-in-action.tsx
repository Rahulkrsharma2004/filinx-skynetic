"use client"

export default function SeeInAction() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">See it in action</h2>
          <p className="text-gray-600 text-lg">
            Get a preview of the guided experience that makes incorporation simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Entity & Scope Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 overflow-hidden">
            <h3 className="font-bold text-gray-900 mb-2">Entity & Scope</h3>
            <p className="text-sm text-gray-600 mb-6">Based on your answers</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Team: 2-5 members</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Funding: Seeking investment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Risk: Limited liability preferred</span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
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
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Investor-ready structure</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Limited personal liability</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

          {/* Plan Snapshot Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Plan Snapshot</h3>
              <span className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">Your registration journey</p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Overall Progress</span>
                <span className="text-sm font-bold text-gray-900">25%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Entity Selection</p>
                  <p className="text-sm text-green-600">Complete</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">KYC & Documents</p>
                  <p className="text-sm text-gray-500">3 of 4 documents uploaded</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Name Reservation</p>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">SPICe+ Filing</p>
                  <p className="text-sm text-gray-500">Queued</p>
                  <p className="text-xs text-gray-400">Estimated 5-7 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
