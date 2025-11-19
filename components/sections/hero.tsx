'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Star, Lock } from 'lucide-react'

export default function Hero() {
  const [selectedDirectors, setSelectedDirectors] = useState('solo')
  const [currentStep, setCurrentStep] = useState(1)

  const directorOptions = [
    { id: 'solo', label: 'Just me (1 director)', subtitle: 'Best for solo founders' },
    { id: '2', label: '2 directors', subtitle: 'Most common setup' },
    { id: '3plus', label: '3+ directors', subtitle: 'Larger founding team' },
  ]

  return (
    <section className="w-full py-20 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <Badge className="mb-8 bg-blue-50 text-blue-600 border-blue-200 text-xs font-semibold px-3 py-1">
              MCA-READY • SAME-DAY FILING SLOTS AVAILABLE
            </Badge>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Register your company in{' '}
              <span className="text-blue-600">5–7 days</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Pvt Ltd, LLP, OPC — plus GST & Shops & Establishment — in one guided flow with human CA/CS support and WhatsApp updates.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Transparent fees</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 fill-yellow-500" />
                <span className="text-gray-700 font-medium">4.8★ by founders</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">CA/CS verified</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Start Setup →
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-lg font-semibold">
                Talk to an Expert
              </Button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {/* Step Indicator */}
            <div className="mb-8">
              <div className="text-sm text-gray-600 font-medium mb-3">
                Step {currentStep}/4
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              How many directors?
            </h2>
            <p className="text-gray-600 mb-8">
              This helps us recommend the right entity structure
            </p>

            {/* Director Options */}
            <div className="space-y-3 mb-8">
              {directorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDirectors(option.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedDirectors === option.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900">
                    {option.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {option.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 py-3 rounded-lg font-semibold"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              >
                Back
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              >
                Continue →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
