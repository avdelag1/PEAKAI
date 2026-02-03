import { MapPin, Star, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  rating: number;
  venues: number;
  featured?: boolean;
}

const DestinationCard = ({ name, country, image, rating, venues, featured }: DestinationCardProps) => {
  return (
    <div className={`group relative rounded-2xl overflow-hidden hover-lift cursor-pointer ${featured ? 'col-span-2 row-span-2' : ''}`}>
      {/* Image */}
      <div className="aspect-[4/5] w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-charcoal/80 backdrop-blur-sm">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            Featured
          </div>
        )}

        {/* Location */}
        <div className="flex items-center gap-2 text-gold mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{country}</span>
        </div>

        {/* Name */}
        <h3 className={`font-serif font-bold text-foreground mb-2 ${featured ? 'text-3xl' : 'text-xl'}`}>
          {name}
        </h3>

        {/* Stats */}
        <p className="text-sm text-muted-foreground mb-4">
          {venues}+ premium venues
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-medium">Explore</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default DestinationCard;
