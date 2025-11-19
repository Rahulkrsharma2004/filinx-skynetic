import Header from '@/components/header'
import Hero from '@/components/sections/hero'
import WhyFilinx from '@/components/sections/why-filinx'
import HowItWorks from '@/components/sections/how-it-works'
import AIRecommendation from '@/components/sections/ai-recommendation'
import Pricing from '@/components/sections/pricing'
import AddOns from '@/components/sections/add-ons'
import Features from '@/components/sections/features'
import Support from '@/components/sections/support'
import FAQ from '@/components/sections/faq'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Filinx - Company Registration Made Simple',
  description: 'Stay compliant without babysitting it. Fast, transparent, and hassle-free company registration.',
}

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      {/* 1. Hero section - Register your company in 5–7 days */}
      <Hero />
      {/* 2. Why Founders choose Us */}
      <WhyFilinx />
      {/* 3. How it works */}
      <HowItWorks />
      {/* 4. Get the right recommendation, instantly */}
      <AIRecommendation />
      {/* 5. Simple, transparent Pricing */}
      <Pricing />
      {/* 6. Optional Add-ons */}
      <AddOns />
      {/* 7. Stay Compliant */}
      {/* <Features /> */}
      {/* 8. Human Support, AI assistance — right where you are */}
      <Support />
      {/* 9. Frequently asked questions */}
      <FAQ />
      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
