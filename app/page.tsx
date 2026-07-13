import Navbar from "@/components/home/Navbar";
import TrustSection from "@/components/home/TrustSection";
import WhyLinkFinity from "@/components/home/WhyLinkFinity";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PricingSection from "@/components/home/PricingSection";
import Hero_Final from "@/components/home/Hero_Final";

export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero_Final />

      <TrustSection />

      <WhyLinkFinity />

      <FeaturesSection />

      <IndustriesSection />

      <PricingSection />

    </main>

  )

}