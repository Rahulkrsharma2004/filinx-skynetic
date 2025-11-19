'use client'

export default function Features() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why founders choose Filinx</h2>
          <p className="text-lg text-gray-600">
            Fast, transparent, and hassle-free company registration with expert support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⏱',
              title: 'Predictable timelines',
              description: 'Live tracker: KYC → Filing → Govt review → Approval with EIAs. Know exactly when each step will complete.',
            },
            {
              icon: '$',
              title: 'Transparent pricing',
              description: 'Government vs Professional fees shown separately. No hidden charges, no surprises at checkout.',
            },
            {
              icon: '📋',
              title: 'Less paperwork',
              description: 'Drive auto-import, OCR checks, mismatch flags before filing. Upload once, use everywhere.',
            },
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
