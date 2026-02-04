import { Link } from "react-router-dom";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/useFavorites";
import { getVenueById } from "@/data/venues";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();
  
  const favoriteVenues = favorites
    .map(id => getVenueById(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-gold fill-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Your Favorites
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Venues you've saved for later
            </p>
          </div>

          {favoriteVenues.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteVenues.map((venue) => venue && (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-2xl">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                No favorites yet
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start exploring our curated selection of exclusive venues and save your favorites for easy access.
              </p>
              <Link to="/search">
                <Button variant="gold">Explore Venues</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;