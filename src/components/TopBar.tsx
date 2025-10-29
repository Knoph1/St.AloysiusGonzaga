import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2">
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <a href="https://maps.google.com/?q=Chweya+Lane+Nairobi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <MapPin className="h-4 w-4" />
            <span>Chweya Lane, Nairobi</span>
          </a>
          <a href="mailto:ict@staloysiusgonzaga.ac.ke" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>ict@staloysiusgonzaga.ac.ke</span>
          </a>
          <a href="tel:0113534760" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span>0113534760</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium">Follow Us:</span>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="hover:bg-white/20 p-1.5 rounded-full transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="hover:bg-white/20 p-1.5 rounded-full transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/staloysiusgonzaga" target="_blank" rel="noopener noreferrer" className="hover:bg-white/20 p-1.5 rounded-full transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
