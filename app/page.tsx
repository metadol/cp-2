import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import Benefits from "@/components/sections/Benefits";
import Built from "@/components/sections/Built";
import Built2 from "@/components/sections/Built2";
import Built3 from "@/components/sections/Built3";
import Cta from "@/components/sections/CTA";
import CTASection from "@/components/sections/CTA-Cpy";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import LampDemo from "@/components/ui/lamp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <Built />
      <Built2 />
      <Built3 />
      <Features />
      <Integrations />
      <Pricing />
      <Faq />
      {/* <LampDemo/> */}
      {/* <Cta /> */}
      <CTASection />
      <Footer />
    </div>
  );
}
