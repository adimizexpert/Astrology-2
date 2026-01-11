import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import TopBar from "@/components/TopBar";

const Index = () => {
  return (
    <div className="min-h-screen pt-10">
      <TopBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
