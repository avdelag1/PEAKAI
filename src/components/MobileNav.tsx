import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useFavorites } from "@/hooks/useFavorites";

const navLinks = [
  { label: "Destinations", href: "/search?view=destinations" },
  { label: "Experiences", href: "/category/experience" },
  { label: "Nightlife", href: "/category/nightclub" },
  { label: "Contact", href: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { count } = useFavorites();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-charcoal border-gold/20">
        <SheetHeader>
          <SheetTitle className="text-gradient-gold font-serif text-2xl">
            Mercur
          </SheetTitle>
        </SheetHeader>
        
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="border-t border-gold/20 my-4" />
          
          <Link
            to="/favorites"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-300 font-medium flex items-center gap-3"
          >
            <Heart className="h-4 w-4" />
            Favorites
            {count > 0 && (
              <span className="ml-auto bg-gold text-background text-xs font-bold px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </Link>
          
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-300 font-medium flex items-center gap-3"
          >
            <User className="h-4 w-4" />
            Profile
          </Link>
          
          <div className="border-t border-gold/20 my-4" />
          
          <div className="flex flex-col gap-3 px-4">
            <Link to="/sign-in" onClick={() => setOpen(false)}>
              <Button variant="luxuryOutline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up" onClick={() => setOpen(false)}>
              <Button variant="gold" className="w-full">
                Get Access
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
