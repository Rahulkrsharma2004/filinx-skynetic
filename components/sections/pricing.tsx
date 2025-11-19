'use client'

import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">
            Government fees and professional fees shown separately. No hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Government Fees */}
          <div className="p-8 rounded-xl border-2 border-gray-200 bg-white">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4 bg-gray-50">
                GOVT
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Government Fees</h3>
              <p className="text-gray-600">Mandatory statutory fees</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900">₹6,500</div>
            </div>
            <ul className="space-y-3">
              {[
                'Name reservation (RUN)',
                'SPICe+ filing fee',
                'Certificate of Incorporation',
                'PAN & TAN issuance',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Fees */}
          <div className="p-8 rounded-xl border-4 border-blue-600 bg-blue-50 relative">
            <Badge className="absolute top-6 right-6 bg-blue-600 text-white border-0">RECOMMENDED</Badge>
            <div className="mb-6">
              <Badge variant="outline" className="mb-4 bg-white text-gray-900">
                SERVICE
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Fees</h3>
              <p className="text-gray-600">One-time service charge</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900">₹4,999</div>
            </div>
            <ul className="space-y-3">
              {[
                'Guided wizard + recommendation',
                'Document verification (OCR)',
                'CA/CS filing & review',
                'WhatsApp updates + priority support',
                'Document vault (lifetime)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
