"use client"

export default function WhatsAppFlow() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">WhatsApp integrated flow</h2>
          <p className="text-gray-600 text-lg">
            Live status, OTP reminders, and quick actions right where you already work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* <img
                src="/images/image.png"
                alt="WhatsApp Integration"
                className="w-full h-auto"
              /> */}
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-3 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-teal-700 text-white px-4 py-3 text-center text-sm font-semibold">
                    <div className="flex items-center justify-between mb-1">
                      <span>Filinx Register</span>
                    </div>
                    <span className="text-xs">Online</span>
                  </div>

                  {/* Chat */}
                  <div className="bg-gray-100 p-4 min-h-96 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-center text-xs text-gray-600 py-2">Today</div>

                      <div className="flex justify-end">
                        <div className="bg-gray-300 text-gray-900 rounded-lg rounded-tr-none p-2 max-w-xs text-sm">
                          Good news! Your SPICe+ Part A has been filed successfully ✓
                        </div>
                      </div>

                      <div className="text-xs text-gray-400 text-right">10:24 AM</div>

                      <div className="flex justify-end">
                        <div className="bg-gray-300 text-gray-900 rounded-lg rounded-tr-none p-2 max-w-xs text-sm">
                          Name approvedTECHSTART SOLUTIONS PRIVATE LIMITED
                        </div>
                      </div>

                      <div className="text-xs text-gray-400 text-right">10:25 AM</div>

                      <div className="flex justify-start">
                        <div className="bg-green-100 text-gray-900 rounded-lg rounded-tl-none p-2 max-w-xs text-sm">
                          Great! What's next?
                        </div>
                      </div>

                      <div className="text-xs text-gray-400 text-left">10:28 AM</div>

                      <div className="flex justify-end">
                        <div className="bg-gray-300 text-gray-900 rounded-lg rounded-tr-none p-2 max-w-xs text-sm">
                          Now we're filing SPICe+ Part B. You'll receive OTP shortly.
                        </div>
                      </div>

                      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-2 rounded text-xs text-yellow-900 my-2">
                        <div className="font-semibold">⏱ OTP Window Active</div>
                        <div>Time remaining: 6:32</div>
                      </div>

                      <div className="flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-semibold">
                          I'm ready for OTP
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Tracker</h3>
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                In Progress
              </span>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Overall Progress</span>
                <span className="text-sm font-bold text-gray-900">60%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            {/* Status Items */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">SPICe+ Part A Filed</p>
                  <p className="text-xs text-gray-600">Name approved: TECHSTART SOLUTIONS</p>
                  <span className="text-xs text-green-600 font-semibold">Complete</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-lg">
                <div className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">SPICe+ Part B Filing</p>
                  <p className="text-xs text-gray-600">OTP window: 6:32 remaining</p>
                  <span className="text-xs text-yellow-600 font-semibold">OTP Required</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400 p-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-gray-700 text-sm">Under Scrutiny</p>
                  <p className="text-xs text-gray-500">SLA: 2-3 business days</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400 p-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold text-gray-700 text-sm">Certificate Issued</p>
                  <p className="text-xs text-gray-500">After scrutiny approval</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  OTP windows and retries: Never miss a filing window with smart reminders
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Clarification upload from chat: Send documents directly via WhatsApp
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Real-time milestone updates: Get notified the moment status changes
                </span>
              </div>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.02.04.038.082.054.124 1.2 2.423 3.965 5.974 6.55 7.957l.996-1.193a1 1 0 011.068-.25l4.434.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.235 0-15-6.765-15-15V3z" />
              </svg>
              Track on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
