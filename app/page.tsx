import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import WhyFounders from "@/components/why-founders"
import SeeInAction from "@/components/see-in-action"
import WhatsAppFlow from "@/components/whatsapp-flow"
import AIAssisted from "@/components/ai-assisted"
import ReviewExpert from "@/components/review-expert"
import ServiceCatalogue from "@/components/service-catalogue"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "FILINX™ - Register you company fast and easy",
  description: "Register you company fast and easy",
};


export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyFounders />
      <SeeInAction />
      <WhatsAppFlow />
      <AIAssisted />
      <ReviewExpert />
      <ServiceCatalogue />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
