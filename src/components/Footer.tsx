import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://staloysiusgonzaga.org/storage/static_page_images/qDlgzmgWxIJaEWZ5UHHsjfUDPIjAvKuq41oMNG67.jpg" 
                alt="St. Aloysius Logo" 
                className="h-12 w-12 object-contain bg-white rounded"
              />
              <div>
                <h3 className="font-bold text-lg">St. Aloysius</h3>
                <p className="text-xs opacity-80">Secondary School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Learn, Love and Serve. Providing quality education to vulnerable youth of Kibera since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/admissions" className="opacity-80 hover:opacity-100 transition-opacity">Admissions</a></li>
              <li><a href="/departments" className="opacity-80 hover:opacity-100 transition-opacity">Departments</a></li>
              <li><a href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-lg mb-4">Departments</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/science" className="opacity-80 hover:opacity-100 transition-opacity">Science</a></li>
              <li><a href="/languages" className="opacity-80 hover:opacity-100 transition-opacity">Languages</a></li>
              <li><a href="/mathematics" className="opacity-80 hover:opacity-100 transition-opacity">Mathematics</a></li>
              <li><a href="/humanities" className="opacity-80 hover:opacity-100 transition-opacity">Humanities</a></li>
              <li><a href="/sports" className="opacity-80 hover:opacity-100 transition-opacity">Sports</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 opacity-80" />
                <span className="opacity-80">Chweya Lane, Kibera, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a href="mailto:ict@staloysiusgonzaga.ac.ke" className="opacity-80 hover:opacity-100 transition-opacity">
                  ict@staloysiusgonzaga.ac.ke
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-80" />
                <a href="tel:0113534760" className="opacity-80 hover:opacity-100 transition-opacity">
                  0113534760
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} St. Aloysius Gonzaga Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
