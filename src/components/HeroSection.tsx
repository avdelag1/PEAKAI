 import { Search, MapPin, Sparkles } from "lucide-react";
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

 const HeroSection = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const navigate = useNavigate();
 
   const handleSearch = (query?: string) => {
     const q = query || searchQuery;
     if (q.trim()) {
       navigate(`/search?q=${encodeURIComponent(q.trim())}`);
     } else {
       navigate('/search');
     }
   };
 
   const handleKeyDown = (e: React.KeyboardEvent) => {
     if (e.key === 'Enter') {
       handleSearch();
     }
   };

  const popularSearches = ["Dubai", "Monaco", "Ibiza", "Mykonos", "Miami", "Saint-Tropez"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full luxury-border-glow bg-charcoal/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-champagne">Your World-Class Concierge</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Unlock
            <span className="text-gradient-gold"> Extraordinary</span>
            <br />
            Experiences
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From exclusive nightclubs to hidden gems, we curate unforgettable moments in the world's most prestigious destinations.
          </p>

          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
               <Input
                 variant="search"
                 placeholder="Where are you heading?"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 onKeyDown={handleKeyDown}
                 className="pr-36"
               />
               <Button 
                 variant="gold" 
                 className="absolute right-2 top-1/2 -translate-y-1/2 h-10"
                 onClick={() => handleSearch()}
               >
                <Search className="w-4 h-4 mr-2" />
                Explore
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {popularSearches.map((city) => (
               <button
                 key={city}
                 onClick={() => handleSearch(city)}
                 className="px-4 py-2 rounded-full text-sm font-medium luxury-border bg-charcoal/50 backdrop-blur-sm hover:border-gold/50 hover:text-gold transition-all duration-300"
               >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
