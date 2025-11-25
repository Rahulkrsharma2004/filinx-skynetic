export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Answer 5 quick questions",
      description: "Tell us about your structure, directors, and location. Get an instant entity recommendation.",
      items: ["Directors & shareholders", "Office location"],
      icon: "📋",
    },
    {
      number: "2",
      title: "See plan & cost breakdown",
      description: "Transparent pricing with government vs service fees.",
      items: ["Govt vs service split", "Timeline estimate"],
      icon: "💰",
      link: "Learn more →",
    },
    {
      number: "3",
      title: "Upload & verify docs",
      description: "Smart OCR auto-fills and flags mismatches before filing.",
      items: ["Drive / Dropbox import", "Real-time checks"],
      icon: "📄",
      link: "Learn more →",
    },
    {
      number: "4",
      title: "e-Sign & track approval",
      description: "DSC slots and live status—right on WhatsApp.",
      items: ["DSC confirmation", "WhatsApp updates"],
      icon: "✅",
      link: "Learn more →",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How it works</h2>
          <p className="text-gray-600 text-lg">Four simple steps to get your company registered</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>

              <div className="ml-16 space-y-2">
                {step.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-blue-600">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {step.link && (
                <div className="ml-16 mt-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                    {step.link}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
