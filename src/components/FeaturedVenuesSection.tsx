import VenueCard from "./VenueCard";
import { getFeaturedVenues } from "@/data/venues";

const FeaturedVenuesSection = () => {
  const featuredVenues = getFeaturedVenues().slice(0, 6);

  return (
    <section className="py-6">
      <div className="px-4">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-serif font-semibold text-foreground">
            The most relevant
          </h2>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {featuredVenues.map((venue) => (
            <VenueCard 
              key={venue.id} 
              venue={venue} 
              className="min-w-[260px] md:min-w-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenuesSection;
