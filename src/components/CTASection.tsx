import { ArrowRight, Crown } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto mb-8 flex items-center justify-center animate-pulse-gold">
            <Crown className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Content */}
           <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-6">
             Ready to Explore <span className="text-gold">Tulum</span>?
          </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
             Let us help you discover the best of Tulum — from hidden cenotes to beachfront dining and wellness retreats.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Request Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="luxuryOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
               <span className="text-2xl font-bold text-gold">10k+</span>
               <span className="text-sm">Happy Guests</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
               <span className="text-2xl font-bold text-gold">200+</span>
               <span className="text-sm">Local Venues</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
               <span className="text-2xl font-bold text-gold">5★</span>
               <span className="text-sm">Rated Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
