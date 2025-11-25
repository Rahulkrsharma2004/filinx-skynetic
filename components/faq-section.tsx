"use client"

import { useState } from "react"

export default function FAQSection() {
  const [expandedIdx, setExpandedIdx] = useState(0)

  const faqs = [
    {
      q: "How long does incorporation take?",
      a: "Typically 7-14 business days for a Private Limited Company in India, depending on government processing times and document completeness. Our live tracker keeps you updated at every stage.",
    },
    {
      q: "Which entity should I choose?",
      a: "It depends on your structure, funding plans, and liability preferences. Our AI wizard asks 5 quick questions and recommends the best entity for your business with a detailed breakdown of pros and cons.",
    },
    {
      q: "What documents are needed?",
      a: "Basic documents include director IDs (PAN), address proof, and bank details. Our smart form auto-fills from uploaded documents and flags any missing information before filing.",
    },
    {
      q: "How do OTPs and e-sign work?",
      a: "DSC (Digital Signature Certificate) holders receive OTP reminders on WhatsApp. You e-sign documents via the government portal. We guide you through each step with real-time notifications.",
    },
    {
      q: "Can I add licences later?",
      a: "Start with entity incorporation and add GST, MSME, or other licenses anytime. Our experts will guide you on the right sequence and timing.",
    },
    {
      q: "Support for NRIs and foreign founders?",
      a: "Yes, we support NRI and foreign founders. Special provisions apply for PIO/OCI and foreign shareholders. Talk to our experts for customized guidance.",
    },
    {
      q: "Is my data secure?",
      a: "Your data is encrypted and stored in a secure vault. We comply with data protection regulations and never share your information without consent.",
    },
    {
      q: "What happens if my name is rejected?",
      a: "If a name is rejected by the registrar, we help you modify it or suggest alternatives. Our team will re-file quickly to minimize delays.",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about incorporating with Filinx</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition">
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <svg
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    expandedIdx === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {expandedIdx === idx && (
                <div className="px-6 pb-4 border-t border-gray-200 text-gray-600">
                  <p className="text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
