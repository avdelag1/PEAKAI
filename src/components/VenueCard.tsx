import { Link } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Venue } from "@/data/types";
import { useFavorites } from "@/hooks/useFavorites";
import { Badge } from "./ui/badge";

interface VenueCardProps {
  venue: Venue;
  className?: string;
  showDestination?: boolean;
}

const priceLabels = ['$', '$$', '$$$', '$$$$'];

const VenueCard = ({ venue, className, showDestination = true }: VenueCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(venue.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(venue.id);
  };

  return (
    <Link
      to={`/venue/${venue.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl bg-charcoal border border-gold/10 hover:border-gold/30 transition-all duration-500",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={venue.images[0]}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300",
            favorite 
              ? "bg-gold text-background" 
              : "bg-background/20 text-foreground hover:bg-gold/20 hover:text-gold"
          )}
        >
          <Heart className={cn("h-4 w-4", favorite && "fill-current")} />
        </button>

        {/* Featured Badge */}
        {venue.featured && (
          <Badge className="absolute top-3 left-3 bg-gold text-background border-0">
            Featured
          </Badge>
        )}

        {/* Category Badge */}
        <Badge 
          variant="outline" 
          className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm border-gold/30 text-foreground capitalize"
        >
          {venue.category.replace('-', ' ')}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-1">
            {venue.name}
          </h3>
          <span className="text-gold text-sm font-medium shrink-0">
            {priceLabels[venue.priceLevel - 1]}
          </span>
        </div>

        {showDestination && (
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3 w-3" />
            <span className="capitalize">{venue.destinationSlug}</span>
          </div>
        )}

        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {venue.shortDescription}
        </p>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="text-foreground font-medium">{venue.rating}</span>
          <span className="text-muted-foreground text-sm">
            ({venue.reviewCount} reviews)
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;
