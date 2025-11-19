'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  'What documents do I need for KYC?',
  'How long does DSC and filing take?',
  'Can I use a residential address?',
  'What if we have multiple directors with different roles?',
  'Do you offer refunds if MCA rejects the application?',
  'What happens after company registration?',
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about company registration</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition flex items-center justify-between group"
            >
              <span className="font-medium text-gray-900">{faq}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition transform ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
