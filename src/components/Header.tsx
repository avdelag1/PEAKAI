import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { useFavorites } from "@/hooks/useFavorites";

const Header = () => {
  const { count } = useFavorites();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gradient-gold">
              Mercur
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/search?view=destinations" 
              className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Destinations
            </Link>
            <Link 
              to="/category/experience" 
              className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Experiences
            </Link>
            <Link 
              to="/category/nightclub" 
              className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Nightlife
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/favorites" className="relative hidden md:flex">
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-gold">
                <Heart className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-background text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="luxuryOutline" size="sm" className="hidden md:flex">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="gold" size="sm" className="hidden md:flex">
                Get Access
              </Button>
            </Link>
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
