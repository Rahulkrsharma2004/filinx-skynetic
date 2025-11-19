'use client'

import { Badge } from '@/components/ui/badge'
import { MessageCircle, Bell, Users, FileText } from 'lucide-react'

export default function Support() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-6 bg-green-100 text-green-700 border-0">WHATSAPP UPDATES</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Human support, AI assistance — right where you are
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get real-time updates on WhatsApp. Ask questions, upload docs, and track progress — all without
              leaving your chat.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  title: 'Instant notifications',
                  description: 'Filing confirmations, approval alerts, document requests',
                },
                {
                  icon: Users,
                  title: 'Human CA/CS support',
                  description: 'Available 9 AM – 7 PM on working days',
                },
                {
                  icon: FileText,
                  title: 'Document delivery',
                  description: 'Certificates, receipts, and reports sent instantly',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <item.icon className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chat */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                F
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Filinx Support</h3>
                <p className="text-xs text-gray-600">online • responds in minutes</p>
              </div>
            </div>

            <div className="space-y-4 mb-4">
              <div className="bg-white p-4 rounded-lg max-w-xs">
                <p className="text-sm text-gray-900 mb-2">Hi! Your SPICe+ form has been filed with MCA. 📋</p>
                <p className="text-xs text-gray-500">10:45 AM</p>
              </div>

              <div className="bg-white p-4 rounded-lg max-w-xs">
                <p className="text-sm text-gray-900">Expected approval: 3-5 business days</p>
                <p className="text-xs text-gray-500">10:45 AM</p>
              </div>

              <div className="bg-blue-600 p-4 rounded-lg max-w-xs ml-auto">
                <p className="text-sm text-white">Great! When will I get the certificate?</p>
                <p className="text-xs text-blue-100">10:47 AM ✓</p>
              </div>

              <div className="bg-white p-4 rounded-lg max-w-xs">
                <p className="text-sm text-gray-900 mb-3">
                  You'll get it immediately after MCA approval. We'll send it here + email 📧
                </p>
                <div className="bg-blue-50 p-3 rounded flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">filing_receipt.pdf</p>
                    <p className="text-xs text-gray-600">124 KB</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">11:02 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
