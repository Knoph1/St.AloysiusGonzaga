import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="St. Aloysius Gonzaga Logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary leading-tight">St. Aloysius Gonzaga</span>
              <span className="text-xs text-muted-foreground">Secondary School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background">
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Our Story
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Mission & Vision
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Core Values
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background">
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Curriculum
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Departments
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/about">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Academic Calendar
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background">
                      <Link to="/admissions">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          How to Apply
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/admissions">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Requirements
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media Centre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background">
                      <Link to="/gallery">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Gallery
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/gallery">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Videos
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/news">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          News
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background">
                      <Link to="/news">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          News & Events
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/contact">
                        <NavigationMenuLink className="block px-4 py-2 hover:bg-muted rounded-md">
                          Support & FAQ
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 hover:bg-muted rounded-md">Home</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-muted rounded-md">About Us</Link>
              <Link to="/admissions" className="px-4 py-2 hover:bg-muted rounded-md">Admissions</Link>
              <Link to="/gallery" className="px-4 py-2 hover:bg-muted rounded-md">Gallery</Link>
              <Link to="/news" className="px-4 py-2 hover:bg-muted rounded-md">News</Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-muted rounded-md">Contact</Link>
              <div className="px-4 pt-2 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
