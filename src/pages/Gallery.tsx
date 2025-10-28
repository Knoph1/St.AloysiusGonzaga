import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const categories = ["All", "Events", "Sports", "Academics", "Infrastructure"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800", category: "Events", title: "Annual Day Celebration" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", category: "Academics", title: "Science Laboratory" },
    { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800", category: "Sports", title: "Football Match" },
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800", category: "Infrastructure", title: "School Building" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", category: "Sports", title: "Basketball Court" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800", category: "Events", title: "Cultural Festival" },
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800", category: "Academics", title: "Library" },
    { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800", category: "Infrastructure", title: "School Grounds" },
    { src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800", category: "Events", title: "Prize Distribution" },
  ];

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">Capturing Moments of Excellence</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={selectedCategory} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-shadow cursor-pointer aspect-video"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-lg">{image.title}</h3>
                          <p className="text-white/80 text-sm">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
