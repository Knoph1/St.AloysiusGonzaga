import { Users, GraduationCap, Award, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Students",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    value: "95%",
    label: "University Admission",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Award,
    value: "30+",
    label: "Years of Excellence",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Building,
    value: "50+",
    label: "Qualified Staff",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <CardContent className="p-6 text-center">
                  <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/20`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-white/90 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
