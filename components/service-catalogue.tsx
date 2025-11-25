"use client"

import { useState } from "react"

export default function ServiceCatalogue() {
  const [activeTab, setActiveTab] = useState("india")

  const services = {
    india: [
      {
        icon: "🏢",
        title: "Private Limited Company",
        desc: "Best for funded startups with investor readiness",
        link: "Learn more →",
      },
      {
        icon: "⚖️",
        title: "Limited Liability Partnership (LLP)",
        desc: "Flexible structure for professional services",
        link: "Learn more →",
      },
      {
        icon: "👤",
        title: "One Person Company (OPC)",
        desc: "Ideal for solo founders with limited liability",
        link: "Learn more →",
      },
      {
        icon: "🤝",
        title: "Partnership Firm",
        desc: "Simple structure for 2+ partners in business",
        link: "Learn more →",
      },
      {
        icon: "💼",
        title: "Sole Proprietorship",
        desc: "Quick setup for freelancers and consultants",
        link: "Learn more →",
      },
      {
        icon: "🚀",
        title: "Startup India Registration",
        desc: "Certifications and benefits for recognized startups",
        link: "Learn more →",
      },
    ],
    international: [
      {
        icon: "🌍",
        title: "US/SG/UK/Dubai setup",
        desc: "Global entity registration for international expansion",
        link: "Learn more →",
      },
      {
        icon: "📋",
        title: "EIN/Tax IDs",
        desc: "Tax identification numbers for foreign entities",
        link: "Learn more →",
      },
      {
        icon: "🏛️",
        title: "Registered agent",
        desc: "Legal compliance and registered office service",
        link: "Learn more →",
      },
      {
        icon: "🏦",
        title: "Banking intro",
        desc: "Facilitate overseas bank account setup",
        link: "Learn more →",
      },
    ],
    licences: [
      {
        icon: "🔒",
        title: "GST Registration",
        desc: "Goods and Services Tax compliance setup",
        link: "Learn more →",
      },
      {
        icon: "📱",
        title: "MSME/Udyam",
        desc: "Micro, Small, and Medium Enterprise registration",
        link: "Learn more →",
      },
      {
        icon: "🏷️",
        title: "IEC basics",
        desc: "Importer Exporter Code for international trade",
        link: "Learn more →",
      },
      {
        icon: "⚙️",
        title: "PF/ESI add-ons",
        desc: "Employee benefit compliance setup",
        link: "Learn more →",
      },
    ],
    ip: [
      {
        icon: "™️",
        title: "Trademark Registration",
        desc: "Protect your brand identity and IP",
        link: "Learn more →",
      },
      {
        icon: "📜",
        title: "Copyright Filing",
        desc: "Intellectual property protection service",
        link: "Learn more →",
      },
      {
        icon: "🔍",
        title: "Patent Basics",
        desc: "Guide for innovation protection",
        link: "Learn more →",
      },
    ],
  }

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Complete service catalogue</h2>
          <p className="text-gray-600 text-lg">From entity formation to specialized licenses, we've got you covered</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap border-b border-gray-200 pb-4">
          {[
            { id: "india", label: "India" },
            { id: "international", label: "International" },
            { id: "licences", label: "Licences" },
            { id: "ip", label: "IP" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services[activeTab].map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                {service.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
