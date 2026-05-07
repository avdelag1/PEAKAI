import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroSunset from "@/assets/hero-tulum-sunset.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/search');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative pt-14">
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[320px] max-h-[480px] overflow-hidden">
        <img
          src="/assets/hero-peak.png"
          alt="PEAK Performance Brain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        {/* Greeting Overlay */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-white drop-shadow-lg mb-2">
            Rewire Your Brain.
          </h1>
          <p className="text-gold text-lg drop-shadow-md font-medium">
            Unlock P.E.A.K. performance today.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="px-4 -mt-6 relative z-10">
        <div 
          className="bg-card rounded-2xl shadow-elegant p-3 flex items-center gap-3 border border-border cursor-pointer"
          onClick={() => navigate('/search')}
        >
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search places"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
