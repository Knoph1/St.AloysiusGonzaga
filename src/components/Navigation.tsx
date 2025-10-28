import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <div className="flex items-center gap-3">
            <img 
              src="https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg" 
              alt="St. Aloysius Logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary leading-tight">St. Aloysius</span>
              <span className="text-xs text-muted-foreground">Secondary School</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink href="/about" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Our Story
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/mission-vision" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Mission & Vision
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/core-values" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Core Values
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink href="/departments" className="block px-4 py-2 hover:bg-muted rounded-md">
                        All Departments
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/science" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Science
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/languages" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Languages
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink href="/admissions" className="block px-4 py-2 hover:bg-muted rounded-md">
                        How to Apply
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/requirements" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Requirements
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media Centre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink href="/gallery" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Gallery
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/videos" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Videos
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/news" className="block px-4 py-2 hover:bg-muted rounded-md">
                        News
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>School Portals</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink href="/student-portal" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Student Portal
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/staff-portal" className="block px-4 py-2 hover:bg-muted rounded-md">
                        Staff Portal
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-accent hover:bg-accent/90">Support Us</Button>
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
              <a href="/" className="px-4 py-2 hover:bg-muted rounded-md">Home</a>
              <a href="/about" className="px-4 py-2 hover:bg-muted rounded-md">About Us</a>
              <a href="/departments" className="px-4 py-2 hover:bg-muted rounded-md">Departments</a>
              <a href="/admissions" className="px-4 py-2 hover:bg-muted rounded-md">Admissions</a>
              <a href="/gallery" className="px-4 py-2 hover:bg-muted rounded-md">Media Centre</a>
              <a href="/student-portal" className="px-4 py-2 hover:bg-muted rounded-md">School Portals</a>
              <Button className="bg-accent hover:bg-accent/90 mt-2">Support Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
