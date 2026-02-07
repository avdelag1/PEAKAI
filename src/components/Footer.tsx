import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-card border-t border-border py-8 hidden md:block">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="font-serif font-semibold text-foreground">
            TULUM LOCAL
          </Link>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/search" className="hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link to="/favorites" className="hover:text-foreground transition-colors">
              Favorites
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Tulum Local. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
