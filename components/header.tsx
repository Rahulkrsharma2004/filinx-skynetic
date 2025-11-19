"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">F</span>
          </div>
          <span className="text-gray-900">FILINX</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            "How it Works",
            "Pricing",
            "Licenses",
            "Why Filinx",
            "Resources",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-gray-900 transition text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hover:bg-gray-100 rounded-lg transition">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
          <Link
            href="#"
            className="text-gray-900 font-medium text-sm hover:text-blue-600 transition"
          >
            <span className="block md:hidden">Call Us</span>
            <span className="hidden md:block">Talk to an Expert</span>
          </Link>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Start Setup →
          </Button>
        </div>
      </div>
    </header>
  );
}
