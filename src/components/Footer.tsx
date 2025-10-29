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
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="/admissions" className="opacity-80 hover:opacity-100 transition-opacity">Admissions</a></li>
              <li><a href="/news" className="opacity-80 hover:opacity-100 transition-opacity">News</a></li>
              <li><a href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/admissions" className="opacity-80 hover:opacity-100 transition-opacity">Apply Online</a></li>
              <li><a href="/news" className="opacity-80 hover:opacity-100 transition-opacity">Latest News</a></li>
              <li><a href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Photo Gallery</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">School History</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Get Directions</a></li>
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
              <a href="https://www.facebook.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p className="mb-2">&copy; {new Date().getFullYear()} St. Aloysius Gonzaga Secondary School. All rights reserved.</p>
          <p className="text-xs">
            Project: <span className="font-semibold">St.AloysiusGonzaga</span> | Version: <span className="font-semibold">1.3.0</span> | 
            Developed by <a href="https://github.com/Knoph1" className="hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Knoph O. Ayieko</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
