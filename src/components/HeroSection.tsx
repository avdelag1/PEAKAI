 import { Search, MapPin, Sun } from "lucide-react";
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

   const popularSearches = ["Beach Clubs", "Cenotes", "Restaurants", "Nightlife", "Wellness", "Tours"];

  return (
     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      {/* Content */}
       <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
         <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm mb-8 animate-fade-in border border-border">
             <Sun className="w-4 h-4 text-terracotta" />
             <span className="text-sm font-medium text-foreground/80">Your Local Tulum Guide</span>
          </div>

          {/* Headline */}
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s" }}>
             Discover the Magic
             <span className="block text-gold mt-2">of Tulum</span>
          </h1>

          {/* Subheadline */}
           <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
             Beach clubs, cenotes, restaurants, and hidden gems — curated by locals who know Tulum best.
          </p>

          {/* Search Box */}
           <div className="relative max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
               <Input
                 variant="search"
                 placeholder="What are you looking for?"
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
             <span className="text-sm text-muted-foreground">Explore:</span>
            {popularSearches.map((city) => (
               <button
                 key={city}
                 onClick={() => handleSearch(city.toLowerCase())}
                 className="px-4 py-2 rounded-full text-sm font-medium bg-background/80 backdrop-blur-sm border border-border hover:border-gold hover:text-gold transition-all duration-300"
               >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
