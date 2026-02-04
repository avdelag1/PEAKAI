import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Filter } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDestinationBySlug } from "@/data/destinations";
import { getVenuesByDestination } from "@/data/venues";
import { categories } from "@/data/categories";
import { CategoryType } from "@/data/types";

const Destination = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

  const destination = getDestinationBySlug(slug || "");
  const allVenues = getVenuesByDestination(slug || "");
  
  const venues = selectedCategory 
    ? allVenues.filter(v => v.category === selectedCategory)
    : allVenues;

  const availableCategories = categories.filter(cat => 
    allVenues.some(v => v.category === cat.id)
  );

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Destination not found</h1>
          <Link to="/">
            <Button variant="gold">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="h-4 w-4" />
              <span>{destination.country}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4">
              {destination.name}
            </h1>
            
            <p className="text-muted-foreground max-w-2xl text-lg mb-6">
              {destination.description}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span className="text-foreground font-semibold text-lg">{destination.rating}</span>
              </div>
              <span className="text-muted-foreground">
                {destination.venueCount} exclusive venues
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {destination.highlights.map((highlight) => (
              <Badge 
                key={highlight} 
                variant="outline" 
                className="border-gold/30 text-foreground px-4 py-2"
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {venues.length} Venues in {destination.name}
            </h2>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "gold" : "luxuryOutline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {availableCategories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "gold" : "luxuryOutline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Venue Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <VenueCard 
                key={venue.id} 
                venue={venue} 
                showDestination={false}
              />
            ))}
          </div>

          {venues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No venues found for this category.</p>
              <Button 
                variant="luxuryOutline" 
                className="mt-4"
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destination;