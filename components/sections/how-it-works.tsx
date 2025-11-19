'use client'

import { Badge } from '@/components/ui/badge'
import { Users, DollarSign, Upload, PenTool } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: 'Answer 5 quick questions',
      description: 'Tell us about your business structure, directors, and location. Get instant entity recommendation.',
      bullets: [
        'Number of directors and shareholders',
        'Business activity & industry',
        'Registered office location',
        'Personalized entity recommendation with reasons',
      ],
    },
    {
      number: 2,
      icon: DollarSign,
      title: 'See plan & cost breakdown',
      description: 'Transparent pricing with government vs service fees. Choose add-ons like GST registration.',
      bullets: [
        'Must-have vs optional services',
        'Real-time timeline estimates',
        'Add-ons: GST, Trade License, etc.',
        'Lock your quote and timeline',
      ],
    },
    {
      number: 3,
      icon: Upload,
      title: 'Upload & verify docs',
      description: 'Smart OCR auto-fills forms. Get mismatch alerts before filing to avoid rejections.',
      bullets: [
        'Google Drive / Dropbox import',
        'OCR extracts data automatically',
        'Real-time validation checks',
        'Fix issues before MCA submission',
      ],
    },
    {
      number: 4,
      icon: PenTool,
      title: 'e-Sign & track approval',
      description: 'DSC slots for directors. Track filing to approval with WhatsApp updates at every step.',
      bullets: [
        'Digital signature coordination',
        'SPICe+ filing by CA/CS',
        'Live status updates via WhatsApp',
        'Certificate delivered on approval',
      ],
    },
  ]

  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">How it works</h2>
          <p className="text-lg text-gray-600">Four simple steps to get your company registered</p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              {/* Number Circle */}
              <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
