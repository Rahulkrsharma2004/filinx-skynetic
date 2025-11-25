export default function WhyFounders() {
  const features = [
    {
      title: "AI copilot does the heavy lifting",
      description: "Auto-fill forms, catch errors early, explain requirements.",
      items: ["Pre-fill from docs · inline validations"],
      icon: "🤖",
    },
    {
      title: "In-house CA/CS experts guide & review",
      description: "Dedicated professionals review before submission and answer when needed.",
      items: ["Pre-submission audit · Clarification handling"],
      icon: "👔",
    },
    {
      title: "End-to-end, done for you",
      description: "From KYC to approval, we coordinate DSC, filing, clarifications, and delivery.",
      items: ["Live tracker + SLA clocks · WhatsApp updates"],
      icon: "✓",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Why founders choose Filinx</h2>
          <p className="text-gray-600 text-lg">
            Built for speed, clarity, and trust. End-to-end—done for you by AI + in-house experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Done for you guarantee */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 flex items-center justify-between">
          <p className="font-semibold text-gray-900">Filinx ensures we get it done for you</p>
          <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Done-for-you guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
