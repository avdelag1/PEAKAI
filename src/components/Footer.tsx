 import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const destinationLinks = [
   { name: "Monaco", slug: "monaco" },
   { name: "Dubai", slug: "dubai" },
   { name: "Mykonos", slug: "mykonos" },
   { name: "Ibiza", slug: "ibiza" },
 ];
 
 const experienceLinks = [
   { name: "Nightclubs", slug: "nightclub" },
   { name: "Fine Dining", slug: "restaurant" },
   { name: "Rooftop Bars", slug: "bar" },
   { name: "Beach Clubs", slug: "beach-club" },
   { name: "Lounges", slug: "lounge" },
 ];

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
             <span className="text-xl font-serif font-semibold tracking-wide text-foreground mb-4 block">
               THE TULUM EXPERT
            </span>
            <p className="text-muted-foreground text-sm mb-6">
               Your local guide to the best experiences in Tulum and the Riviera Maya.
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
               {destinationLinks.map((dest) => (
                 <li key={dest.slug}>
                   <Link 
                     to={`/destination/${dest.slug}`} 
                     className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                   >
                     {dest.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           <div>
             <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
               Experiences
             </h4>
             <ul className="space-y-3">
               {experienceLinks.map((exp) => (
                 <li key={exp.slug}>
                   <Link 
                     to={`/category/${exp.slug}`} 
                     className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                   >
                     {exp.name}
                   </Link>
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
             <Link to="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
               Privacy Policy
             </Link>
             <Link to="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300">
               Terms of Service
             </Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
