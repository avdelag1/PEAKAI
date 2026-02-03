import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gradient-gold">
              Mercur
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide">
              Destinations
            </a>
            <a href="#experiences" className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide">
              Experiences
            </a>
            <a href="#clubs" className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide">
              Nightlife
            </a>
            <a href="#about" className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="luxuryOutline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button variant="gold" size="sm" className="hidden md:flex">
              Get Access
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
