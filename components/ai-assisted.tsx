"use client"

import { useState } from "react"

export default function AIAssisted() {
  const [activeTab, setActiveTab] = useState("setup")

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">AI assisted setup</h2>
          <p className="text-gray-600 text-lg">
            Auto-fill government forms, flag mismatches instantly, and get plain-English explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - AI Wizard */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  ⚡
                </div>
                <span className="font-semibold text-gray-900">AI Assist</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  💡
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Recommendation wizard
                </span>
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <p className="text-sm text-gray-600 mb-4">Step 1 of 3</p>
              <h3 className="text-xl font-bold text-gray-900">What type of business are you planning to start?</h3>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { icon: "🏢", title: "Service Business", desc: "Consulting, agency, professional services" },
                { icon: "📦", title: "Product Business", desc: "Manufacturing, retail, e-commerce" },
                { icon: "💻", title: "Tech Startup", desc: "Software, app, SaaS platform" },
                { icon: "🏭", title: "Industrial", desc: "Manufacturing, processing, heavy industry" },
              ].map((option, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 cursor-pointer transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{option.title}</p>
                      <p className="text-xs text-gray-600">{option.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:border-gray-400">
                Back
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                Continue
              </button>
            </div>
          </div>

          {/* Right - Smart Suggestions */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  ⚡
                </div>
                <span className="font-semibold text-gray-900">AI Assist</span>
                <span className="text-xs text-gray-500 ml-auto">Smart suggestions active</span>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Pre-filled from PAN</p>
                    <p className="text-xs text-gray-600">
                      Director names and details auto-populated from submitted documents
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">All directors matched</p>
                    <p className="text-xs text-gray-600">Cross-verified with ICAI and MCA databases</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-yellow-900 text-sm">Address proof older than 2 months</p>
                    <p className="text-xs text-yellow-800">Government requires proof within 60 days of filing</p>
                    <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded text-sm">
                      Upload New Proof
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fix Issues Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">How AI Assist works</h3>
              <button className="w-full text-gray-600 hover:text-gray-900 font-semibold py-2">
                <div className="flex items-center justify-between">
                  <span>Learn more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
              Fix Issues Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
