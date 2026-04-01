import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import HomesForHeroes from "@/components/HomesForHeroes";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseMe />
      <HomesForHeroes />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Index;
