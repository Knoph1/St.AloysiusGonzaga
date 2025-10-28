import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Outstanding KCSE Results 2024",
      excerpt: "St. Aloysius Gonzaga achieves remarkable performance with 95% qualifying for university admission.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      date: "March 15, 2024",
      author: "School Admin",
      category: "Academics",
    },
    {
      id: 2,
      title: "New Science Laboratory Inauguration",
      excerpt: "State-of-the-art science lab officially opened to enhance practical learning experiences.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      date: "March 10, 2024",
      author: "Principal",
      category: "Infrastructure",
    },
    {
      id: 3,
      title: "Sports Day Champions",
      excerpt: "Annual sports day concludes with record-breaking performances across multiple disciplines.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      date: "March 5, 2024",
      author: "Sports Department",
      category: "Sports",
    },
    {
      id: 4,
      title: "Scholarship Program Announcement",
      excerpt: "New merit-based scholarship opportunities announced for exceptional students.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      date: "February 28, 2024",
      author: "School Admin",
      category: "Admissions",
    },
    {
      id: 5,
      title: "Cultural Week Celebrations",
      excerpt: "Students showcase diverse talents and cultural heritage during annual cultural week.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      date: "February 20, 2024",
      author: "Events Team",
      category: "Events",
    },
    {
      id: 6,
      title: "STEM Competition Winners",
      excerpt: "Our students clinch top positions in national STEM innovation competition.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      date: "February 15, 2024",
      author: "Science Department",
      category: "Academics",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Articles</h1>
            <p className="text-xl max-w-2xl mx-auto">Stay Updated with Latest School News</p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="overflow-hidden mb-12">
              <div className="grid md:grid-cols-2">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{newsArticles[0].category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{newsArticles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {newsArticles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {newsArticles[0].author}
                    </span>
                  </div>
                  <Button>Read Full Article</Button>
                </CardContent>
              </div>
            </Card>

            {/* News Grid */}
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-hover transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge className="mb-3">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
