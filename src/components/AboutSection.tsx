import { BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg"
              alt="About St. Aloysius"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">30 Years Of</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 font-serif">Quality Service</h2>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              About Us
            </p>
            <h3 className="text-2xl font-bold mb-4">Motto: Learn, Love and Serve.</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our motto, Learn, Love, and Serve, embodies our mission to cultivate knowledge, nurture compassion, and inspire selfless service, forming individuals who impact the world with wisdom and integrity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-3">Core Values</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                1. Human Dignity - 2. Integrity - 3. Ignatian Spirituality - 4. Social Justice - 5. Solidarity
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-3">Mission</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide quality education to bright and deserving vulnerable youth of Kibera through scholarships and enriching programs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-bold text-lg mb-3">Vision</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To be a centre of excellence that provides holistic and transformative education rooted in Christian values.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
