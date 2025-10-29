import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-2xl mx-auto py-16">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Search className="h-5 w-5" />
              <p className="text-xl">Page Not Found</p>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="gap-2 btn-glow">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/about" className="link-hover">About Us</Link>
              <Link to="/admissions" className="link-hover">Admissions</Link>
              <Link to="/contact" className="link-hover">Contact</Link>
              <Link to="/gallery" className="link-hover">Gallery</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
