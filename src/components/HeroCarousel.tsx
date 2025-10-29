import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Human Dignity",
    subtitle: "Recognizing the inherent worth of every individual",
    description: "Our school upholds human dignity as a foundational value, recognizing the inherent worth of every individual as created in the image of God. Inspired by Jesuit and Ignatian principles, the school cultivates a respectful and inclusive environment where every student, teacher, and staff member is valued, listened to, and treated with compassion.",
    image: "https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg"
  },
  {
    title: "Learn, Love and Serve",
    subtitle: "Our Motto",
    description: "We learn to grow in knowledge, faith, and character. We love by showing compassion, respect, and care for one another. We serve by using our gifts to make a positive impact in our community and beyond.",
    image: "https://staloysiusgonzaga.org/storage/static_page_images/LoPlOK0j2RhAmzX6XadpsdWRNJNs7tgUhqDWqPYr.jpg"
  },
  {
    title: "The School of Hope",
    subtitle: "Empowering vulnerable youth",
    description: "St. Aloysius Gonzaga Secondary School stands as a true School of Hope for the orphans and vulnerable youth of Kibera slums. In a community marked by hardship and limited opportunities, the school offers a lifeline—providing quality education, spiritual formation, and personal support to those who have lost parents but not their potential.",
    image: "https://staloysiusgonzaga.org/storage/static_page_images/kVgu4U1a67hAgpb1Cz3hKIwbabvpGGvsdZX2Oq8n.jpg"
  },
  {
    title: "Holistic Programs",
    subtitle: "Nurturing mind, body, and spirit",
    description: "Our school offers a wide range of rich and holistic programs designed to nurture the mind, body, and spirit. Beyond academic excellence, students benefit from spiritual formation, life skills training, leadership development, sports, and creative arts.",
    image: "https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg"
  },
  {
    title: "Integrity",
    subtitle: "Building character and moral conviction",
    description: "We are deeply rooted in the value of integrity, a core principle that shapes the character and conduct of its entire community. Inspired by the life of St. Aloysius Gonzaga—who was known for his unwavering moral conviction, honesty, and dedication to truth—the school fosters an environment where students are encouraged to act with sincerity, uphold ethical standards, and make responsible choices.",
    image: "https://staloysiusgonzaga.org/storage/static_page_images/LoPlOK0j2RhAmzX6XadpsdWRNJNs7tgUhqDWqPYr.jpg"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
                {slide.subtitle}
              </h6>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                {slide.title}
              </h1>
              <p className="text-lg mb-8 text-white/95 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <a href="/about">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold btn-glow"
                  >
                    About Us
                  </Button>
                </a>
                <a href="/admissions">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
