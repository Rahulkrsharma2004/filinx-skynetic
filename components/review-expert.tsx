export default function ReviewExpert() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Reviewed & guided by expert CA/CS</h2>
          <p className="text-gray-600 text-lg">
            Human oversight where it matters—every filing reviewed before submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expert Profile */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  PS
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">Priya Sharma</h3>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Chartered Accountant • Company Secretary</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-semibold">8+ years experience</span> •{" "}
                    <span className="font-semibold">500+ filings</span>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 italic">
                  "Everything looks good! I've reviewed your documents and forms. We're ready to file SPICe+ Part B.
                  You'll receive OTP notifications on your registered mobile number."
                </p>
                <p className="text-xs text-gray-500 mt-3">— Priya, 2 hours ago</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">Pre-submission Checklist</h4>
              <div className="space-y-3">
                {[
                  "All director KYC documents verified",
                  "Name availability confirmed",
                  "Registered office proof within 60 days",
                  "MOA/AOA compliant with Companies Act",
                  "Capital structure validated",
                  "DSC signatures ready for all directors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">What We'll Do Next</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h4 className="font-semibold text-gray-900">File with MCA</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    Submit SPICe+ Part B with all attachments. Typical processing: 2-3 business days.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h4 className="font-semibold text-gray-900">Obtain CIN & PAN</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    Once approved, receive Corporate Identity Number, PAN, and TAN automatically.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h4 className="font-semibold text-gray-900">Guide Next Steps</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    Help you open a current account, file first GST return, and maintain compliance calendar.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-3">
              {[
                { icon: "🏦", title: "Bank Account", desc: "Ready to assist" },
                { icon: "📋", title: "GST Filing", desc: "Add-on service" },
                { icon: "✅", title: "Final Review", desc: "Before submit" },
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{service.title}</p>
                    <p className="text-xs text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expert Support */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">Expert Support Includes</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Dedicated CA/CS assigned to your file</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Pre-submission audit of all documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Clear next steps after incorporation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Direct chat access for questions</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
              Talk to expert →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
