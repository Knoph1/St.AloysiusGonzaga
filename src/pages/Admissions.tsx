import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, FileText, Users, CheckCircle } from "lucide-react";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "We will contact you shortly with further instructions.",
    });
    setFormData({ studentName: "", parentName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl max-w-2xl mx-auto">Join Our Community of Excellence</p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>1. Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Fill out the admission form with accurate student information</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>2. Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Attend a scheduled interview with the student and parents</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>3. Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Student takes an entrance assessment exam</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>4. Enrollment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete registration and fee payment to secure admission</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Required Documents</h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Original and copy of birth certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>KCPE certificate and result slip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Transfer certificate from previous school (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Two recent passport-size photographs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Medical examination report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Parents/Guardians identification documents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Inquiry</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student's Full Name</Label>
                    <Input
                      id="studentName"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Enter student's name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Enter parent's name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0712345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message/Questions</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
