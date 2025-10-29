import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    role: "Class of 2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    quote: "St. Aloysius Gonzaga gave me not just education, but a foundation for life. The values and discipline I learned here continue to guide me.",
  },
  {
    name: "Mary Wanjiku",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    quote: "As a parent, I'm grateful for the holistic education my child receives. The school truly cares about each student's growth.",
  },
  {
    name: "Peter Odhiambo",
    role: "Alumni - Class of 2020",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    quote: "The education I received at St. Aloysius opened doors I never thought possible. I'm now pursuing my dream career thanks to the foundation built here.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="section-heading">What People Say About Us</h2>
          <p className="section-subheading">
            Hear from our students, parents, and alumni about their experiences at St. Aloysius Gonzaga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 card-hover">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
