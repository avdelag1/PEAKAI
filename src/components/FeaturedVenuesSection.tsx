import { Link } from "react-router-dom";
import VenueCard from "./VenueCard";
import { getFeaturedVenues } from "@/data/venues";
import { Button } from "./ui/button";

const FeaturedVenuesSection = () => {
  const featuredVenues = getFeaturedVenues().slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
              Featured
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Top <span className="text-gradient-gold">Venues</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked exclusive experiences from our global network
            </p>
          </div>
          
          <Link to="/search">
            <Button variant="luxuryOutline">
              View All Venues
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenuesSection;