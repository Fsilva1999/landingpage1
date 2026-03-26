import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
