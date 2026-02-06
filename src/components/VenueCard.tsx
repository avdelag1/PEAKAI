import { Link } from "react-router-dom";
import { Star, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Venue } from "@/data/types";
import { useFavorites } from "@/hooks/useFavorites";

interface VenueCardProps {
  venue: Venue;
  className?: string;
  showDestination?: boolean;
}

const priceLabels = ['$50', '$100', '$200', '$400'];

const VenueCard = ({ venue, className }: VenueCardProps) => {
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
        "group relative block overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={venue.images[0]}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={cn(
            "absolute top-3 right-3 p-2.5 rounded-full transition-all duration-300",
            favorite 
              ? "bg-background text-destructive" 
              : "bg-background/90 text-foreground/60 hover:text-destructive"
          )}
        >
          <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif font-semibold text-foreground text-lg mb-2 line-clamp-1">
          {venue.name}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-foreground font-medium text-sm">{venue.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Users className="h-4 w-4" />
            <span>2-8 guests</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm capitalize">
            {venue.category.replace('-', ' ')}
          </span>
          <span className="text-foreground font-semibold">
            {priceLabels[venue.priceLevel - 1]}<span className="text-muted-foreground font-normal text-sm">/night</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;
