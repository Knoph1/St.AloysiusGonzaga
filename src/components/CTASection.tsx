import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Begin your journey towards academic excellence and holistic development. 
            Enroll at St. Aloysius Gonzaga Secondary School today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/admissions">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold gap-2 btn-glow"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:0113534760">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Us: 0113534760
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
