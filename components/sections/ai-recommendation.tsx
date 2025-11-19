'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Zap, Clock, CheckSquare, Lightbulb } from 'lucide-react'

export default function AIRecommendation() {
  return (
    <section className="w-full py-20 bg-blue-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-6 bg-blue-600 text-white border-0">AI-POWERED</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Get the right recommendation, instantly
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: 'Fit score & reasons',
                  description: 'Why Private Limited vs LLP vs OPC for your specific case',
                },
                {
                  icon: Clock,
                  title: 'Timeline estimate',
                  description: '5-7 days for Pvt Ltd including name approval',
                },
                {
                  icon: CheckSquare,
                  title: 'Required documents',
                  description: "Checklist of what you'll need to upload",
                },
                {
                  icon: Lightbulb,
                  title: 'Suggested add-ons',
                  description: 'GST, Shops & Establishment, Trade License',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8">
              Start Setup →
            </Button>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Recommended for you</h3>
                <p className="text-sm text-gray-600">Based on your answers</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-gray-900 mb-4">Private Limited Company</h4>

            <div className="flex gap-3 mb-6">
              <Badge className="bg-green-100 text-green-700 border-0">95% Match</Badge>
              <Badge variant="outline">5-7 days</Badge>
              <Badge variant="outline">₹11,499</Badge>
            </div>

            <h5 className="font-semibold text-gray-900 mb-3">Why this works for you:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Limited liability protection for 2 directors</li>
              <li>• Easy to raise funds from investors</li>
              <li>• ESOP-friendly structure for hiring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
