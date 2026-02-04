import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug } from "@/data/categories";
import { getVenuesByCategory } from "@/data/venues";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = getCategoryBySlug(slug || "");
  const venues = getVenuesByCategory(slug || "");

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Category not found</h1>
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
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Venues Grid */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-6">
              {venues.length} {venues.length === 1 ? "venue" : "venues"} found
            </p>
          </div>

          {venues.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No venues found in this category.</p>
              <Link to="/search">
                <Button variant="gold">Browse All Venues</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;