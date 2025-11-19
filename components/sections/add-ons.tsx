'use client'

import { Button } from '@/components/ui/button'
import { HelpCircle } from 'lucide-react'

export default function AddOns() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Optional Add-ons</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'GST Registration',
              description: 'Required for businesses with turnover >20L',
              price: '₹2,999',
              time: '3-5 days',
            },
            {
              title: 'Shops & Establishment',
              description: 'State-level business license',
              price: '₹1,499',
              time: '7-10 days',
            },
            {
              title: 'Trade License',
              description: 'Municipal corporation approval',
              price: '₹2,499',
              time: '10-15 days',
            },
          ].map((addon, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{addon.title}</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-6">{addon.description}</p>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">{addon.price}</span>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L9 8.586V7a1 1 0 00-2 0v2a1 1 0 001 1h2v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {addon.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Lock My Quote</Button>
        </div>
      </div>
    </section>
  )
}
