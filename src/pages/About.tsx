import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About St. Aloysius Gonzaga</h1>
            <p className="text-xl max-w-2xl mx-auto">Excellence in Education Since Our Foundation</p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" 
                  alt="School History" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  St. Aloysius Gonzaga Secondary School has been a beacon of educational excellence, 
                  nurturing young minds and shaping future leaders. Our institution stands on the 
                  foundation of strong Catholic values and academic rigor.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we have produced outstanding scholars, leaders, and professionals 
                  who contribute meaningfully to society. Our commitment to holistic education ensures 
                  that every student receives not just academic knowledge, but also character formation 
                  and life skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Core Values */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be a center of academic excellence, producing holistic individuals who are 
                    morally upright, academically competent, and socially responsible.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide quality education that nurtures talents, builds character, and 
                    prepares students for meaningful contribution to society through faith-based 
                    learning and holistic development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Core Values</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Academic Excellence</li>
                    <li>• Integrity</li>
                    <li>• Discipline</li>
                    <li>• Service to Others</li>
                    <li>• Faith in God</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Principal's Message</h2>
            <div className="bg-card p-8 rounded-lg shadow-card">
              <p className="text-muted-foreground mb-4 italic">
                "Welcome to St. Aloysius Gonzaga Secondary School. We are committed to providing 
                an environment where every student can thrive academically, spiritually, and socially. 
                Our dedicated staff works tirelessly to ensure that each child reaches their full potential."
              </p>
              <p className="font-semibold">- Principal, St. Aloysius Gonzaga</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
