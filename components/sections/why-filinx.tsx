'use client'

import { Badge } from '@/components/ui/badge'

export default function WhyFilinx() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Social Proof */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-8">Trusted by 2,000+ founders across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Startup India', 'YC', 'AngelList', 'Product Hunt', 'TechCrunch', 'Forbes'].map((logo) => (
              <span key={logo} className="text-gray-500 font-semibold text-lg">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Why founders choose Filinx</h2>
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
