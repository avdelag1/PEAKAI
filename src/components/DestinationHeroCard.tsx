import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Destination } from "@/data/types";

interface DestinationHeroCardProps {
  destination: Destination;
  className?: string;
  size?: "default" | "large";
}

const DestinationHeroCard = ({ destination, className, size = "default" }: DestinationHeroCardProps) => {
  return (
    <Link
      to={`/destination/${destination.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl",
        size === "large" ? "aspect-[16/9]" : "aspect-[4/3]",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 text-gold mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{destination.country}</span>
        </div>
        
        <h3 className={cn(
          "font-serif font-bold text-foreground mb-2 group-hover:text-gold transition-colors",
          size === "large" ? "text-4xl" : "text-2xl"
        )}>
          {destination.name}
        </h3>
        
        <p className={cn(
          "text-muted-foreground mb-4 line-clamp-2",
          size === "large" ? "text-base max-w-xl" : "text-sm"
        )}>
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="text-foreground font-medium">{destination.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">
              {destination.venueCount} venues
            </span>
          </div>
          
          <span className="flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationHeroCard;
