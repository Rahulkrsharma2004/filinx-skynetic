'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function Setup() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-0">MCA-READY • SAME-DAY FILING SLOTS AVAILABLE</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Register your company in <span className="text-blue-600">5–7 days</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Pvt Ltd, LLP, OPC — plus GST & Shops & Establishment — in one guided flow with human CA/CS support and WhatsApp updates.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: CheckCircle, label: 'Transparent fees' },
                { icon: Star, label: '4.8★ by founders' },
                { icon: Shield, label: 'CA/CS verified' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start Setup →</Button>
              <Button variant="outline" className="text-gray-900 border-gray-300">
                Talk to an Expert
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Step 1/4</p>
              <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-blue-600"></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">How many directors?</h3>
            <p className="text-gray-600 mb-6">This helps us recommend the right entity structure</p>

            <div className="space-y-3">
              {[
                { label: 'Just me (1 director)', sub: 'Best for solo founders', selected: true },
                { label: '2 directors', sub: 'Most common setup', selected: false },
                { label: '3+ directors', sub: 'Larger founding team', selected: false },
              ].map((option, i) => (
                <button
                  key={i}
                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                    option.selected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.sub}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Button variant="outline" className="flex-1 text-gray-900 border-gray-300">
                Back
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Continue →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Star = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const Shield = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
)
