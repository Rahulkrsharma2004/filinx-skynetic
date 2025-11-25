"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-blue-600 font-bold text-lg">◆</span>
            <span className="font-bold text-lg">FILINX</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="#services" className="hover:text-gray-900">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#resources" className="hover:text-gray-900">
              Resources
            </Link>
            <Link href="#support" className="hover:text-gray-900">
              Support
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-gray-900">Talk to Expert</button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Setup</Button>
        </div>
      </div>
    </header>
  )
}
