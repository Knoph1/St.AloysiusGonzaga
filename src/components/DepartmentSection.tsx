import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Science Department",
    description: "At St. Aloysius Gonzaga Secondary School, the Science department is not just a place to memorize formulas but it's a launchpad for curiosity, creativity, and real-world problem-solving. The department comprises of four subjects; Biology, Physics, computer studies, and Chemistry.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500"
  },
  {
    title: "Languages Department",
    description: "The Languages Department nurtures communication skills and cultural appreciation through English, Kiswahili, and French. Our dedicated team of educators helps students develop fluency, critical thinking, and a love for literature.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500"
  },
  {
    title: "Maintenance Department",
    description: "The Maintenance Department plays a vital role in ensuring that the institution's facilities are in optimal condition to support learning and administrative operations. Their work includes routine repairs, plumbing, electrical maintenance, painting, and general cleanliness.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
  },
  {
    title: "Sanitation Department",
    description: "The Sanitation Department plays a crucial role in maintaining a clean, healthy, and safe environment for students, staff, and visitors. With a dedicated team, the department ensures that classrooms, offices, dormitories, washrooms, and common areas are kept spotless and hygienic.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500"
  }
];

const DepartmentSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-secondary font-semibold text-sm">Department</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 font-serif">Browse Our Department</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our academic and non-academic departments dedicated to excellence in education and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {dept.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {dept.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2">
            View All Departments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
