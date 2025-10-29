import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import DepartmentSection from "@/components/DepartmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main role="main">
        <HeroCarousel />
        <AboutSection />
        <StatsSection />
        <VideoSection />
        <DepartmentSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
