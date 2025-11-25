"use client"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      region: "India",
      features: ["✓ Guided wizard", "✓ Filings & DIN/DSC", "✓ Tracker", "✓ WhatsApp", "✓ Vault"],
      cta: "Get started",
    },
    {
      name: "Growth",
      region: "India + Licences",
      badge: true,
      features: ["✓ Everything in Starter", "✓ GST Registration", "✓ MSME/Udyam", "✓ IEC basics", "✓ PF/ESI add-ons"],
      cta: "Get started",
      highlighted: true,
    },
    {
      name: "Global Launch",
      region: "International",
      features: ["✓ US/SG/UK/Dubai setup", "✓ EIN/Tax IDs", "✓ Registered agent", "✓ Banking intro*"],
      cta: "Get started",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your journey—scale up anytime</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 transition ${
                plan.highlighted ? "bg-white border-2 border-blue-600 shadow-lg" : "bg-white border border-gray-200"
              }`}
            >
              {plan.badge && (
                <div className="flex justify-center mb-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.region}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-3">
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
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          * Banking introductions subject to partner availability
        </p>
      </div>
    </section>
  )
}
