import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import DepartmentSection from "@/components/DepartmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <HeroCarousel />
        <AboutSection />
        <VideoSection />
        <DepartmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
