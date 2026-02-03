import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold text-gradient-gold mb-4 block">
              Mercur
            </span>
            <p className="text-muted-foreground text-sm mb-6">
              Your gateway to extraordinary experiences in the world's most prestigious destinations.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full luxury-border flex items-center justify-center hover:border-gold/50 hover:text-gold transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full luxury-border flex items-center justify-center hover:border-gold/50 hover:text-gold transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full luxury-border flex items-center justify-center hover:border-gold/50 hover:text-gold transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              {["Monaco", "Dubai", "Mykonos", "Ibiza", "Miami", "Saint-Tropez"].map((city) => (
                <li key={city}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Experiences
            </h4>
            <ul className="space-y-3">
              {["Nightclubs", "Fine Dining", "Rooftop Bars", "Private Events", "Yacht Charters", "Wellness"].map((exp) => (
                <li key={exp}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
                    {exp}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                concierge@mercur.com
              </li>
              <li className="text-sm text-muted-foreground">
                24/7 Concierge Support
              </li>
              <li className="text-sm text-muted-foreground">
                Worldwide Coverage
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mercur. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
