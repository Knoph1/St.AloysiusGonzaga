import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">Latest Videos</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-serif">The 20th Anniversary Mass</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The 20th Anniversary Mass at St. Aloysius Gonzaga High School, Kibera, Kenya, 2024.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="group overflow-hidden hover:shadow-xl transition-shadow">
            <a href="https://www.youtube.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer">
              <div className="relative h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                <img 
                  src="https://staloysiusgonzaga.org/storage/static_page_images/LoPlOK0j2RhAmzX6XadpsdWRNJNs7tgUhqDWqPYr.jpg"
                  alt="20th Anniversary Mass"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all group-hover:scale-110" aria-label="Play video">
                    <Play className="h-6 w-6 text-primary fill-primary" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">20th Anniversary Mass</h4>
                <p className="text-sm text-muted-foreground">Celebrating two decades of service and excellence</p>
              </CardContent>
            </a>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-shadow">
            <a href="https://www.youtube.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer">
              <div className="relative h-48 bg-gradient-to-br from-secondary to-accent overflow-hidden">
                <img 
                  src="https://staloysiusgonzaga.org/storage/static_page_images/kVgu4U1a67hAgpb1Cz3hKIwbabvpGGvsdZX2Oq8n.jpg"
                  alt="School Life"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all group-hover:scale-110" aria-label="Play video">
                    <Play className="h-6 w-6 text-secondary fill-secondary" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">A Day in the Life</h4>
                <p className="text-sm text-muted-foreground">Experience student life at St. Aloysius</p>
              </CardContent>
            </a>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-shadow">
            <a href="https://www.youtube.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer">
              <div className="relative h-48 bg-gradient-to-br from-accent to-primary overflow-hidden">
                <img 
                  src="https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg"
                  alt="Graduation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all group-hover:scale-110" aria-label="Play video">
                    <Play className="h-6 w-6 text-accent fill-accent" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Graduation Ceremony</h4>
                <p className="text-sm text-muted-foreground">Our graduates' success stories</p>
              </CardContent>
            </a>
          </Card>
        </div>

        <div className="text-center">
          <a href="/gallery">
            <Button variant="outline" size="lg" className="border-2">
              View All Videos & Media
            </Button>
          </a>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Call Now</h3>
            <a href="tel:0113534760" className="text-3xl font-bold hover:underline">
              0113534760
            </a>
          </div>
          <p className="text-lg mt-4 md:mt-0">
            Get in touch with us for admissions and inquiries
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
