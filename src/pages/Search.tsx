import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import DestinationHeroCard from "@/components/DestinationHeroCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/data/destinations";
import { filterVenues, venues as allVenues } from "@/data/venues";
import { categories } from "@/data/categories";
import { CategoryType } from "@/data/types";
import { cn } from "@/lib/utils";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const query = searchParams.get("q") || "";
  const destinationFilter = searchParams.get("destination") || "";
  const categoryFilter = searchParams.get("category") as CategoryType | null;
  const minRating = Number(searchParams.get("rating")) || 0;
  const view = searchParams.get("view") || "venues";

  const updateSearch = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({ view });
  };

  const results = useMemo(() => {
    return filterVenues({
      query: query || undefined,
      destination: destinationFilter || undefined,
      category: categoryFilter || undefined,
      minRating: minRating || undefined,
    });
  }, [query, destinationFilter, categoryFilter, minRating]);

  const hasActiveFilters = destinationFilter || categoryFilter || minRating;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
              {view === "destinations" ? "Explore Destinations" : "Search Venues"}
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                variant="search"
                placeholder="Search venues, destinations, or experiences..."
                value={query}
                onChange={(e) => updateSearch("q", e.target.value)}
              />
            </div>
          </div>

          {/* View Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gold/10 pb-4">
            <button
              onClick={() => updateSearch("view", "venues")}
              className={cn(
                "text-sm font-medium transition-colors",
                view === "venues" ? "text-gold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              All Venues
            </button>
            <button
              onClick={() => updateSearch("view", "destinations")}
              className={cn(
                "text-sm font-medium transition-colors",
                view === "destinations" ? "text-gold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Destinations
            </button>
          </div>

          {view === "destinations" ? (
            /* Destinations Grid */
            <div className="grid md:grid-cols-2 gap-6">
              {destinations.map((destination) => (
                <DestinationHeroCard 
                  key={destination.id} 
                  destination={destination}
                  size="large"
                />
              ))}
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Filters Sidebar */}
              <aside className={cn(
                "lg:col-span-1 mb-8 lg:mb-0",
                showFilters ? "block" : "hidden lg:block"
              )}>
                <div className="glass-card p-6 rounded-xl sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif font-semibold text-foreground">Filters</h2>
                    {hasActiveFilters && (
                      <button 
                        onClick={clearFilters}
                        className="text-sm text-gold hover:text-gold/80"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  {/* Destination Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-foreground mb-3">Destination</h3>
                    <div className="space-y-2">
                      {destinations.map((dest) => (
                        <button
                          key={dest.id}
                          onClick={() => updateSearch("destination", destinationFilter === dest.slug ? "" : dest.slug)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            destinationFilter === dest.slug 
                              ? "bg-gold text-background" 
                              : "text-muted-foreground hover:bg-gold/10 hover:text-foreground"
                          )}
                        >
                          {dest.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => updateSearch("category", categoryFilter === cat.id ? "" : cat.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            categoryFilter === cat.id 
                              ? "bg-gold text-background" 
                              : "text-muted-foreground hover:bg-gold/10 hover:text-foreground"
                          )}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Minimum Rating</h3>
                    <div className="flex gap-2">
                      {[4, 4.5, 4.8].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => updateSearch("rating", minRating === rating ? "" : String(rating))}
                          className={cn(
                            "flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors",
                            minRating === rating 
                              ? "bg-gold text-background" 
                              : "text-muted-foreground hover:bg-gold/10 hover:text-foreground"
                          )}
                        >
                          <Star className="h-3 w-3" />
                          {rating}+
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Results */}
              <div className="lg:col-span-3">
                {/* Mobile Filter Toggle */}
                <Button
                  variant="luxuryOutline"
                  size="sm"
                  className="lg:hidden mb-6"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destinationFilter && (
                      <Badge 
                        variant="outline" 
                        className="border-gold/30 text-foreground capitalize pr-1"
                      >
                        {destinationFilter}
                        <button
                          onClick={() => updateSearch("destination", "")}
                          className="ml-2 hover:text-gold"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {categoryFilter && (
                      <Badge 
                        variant="outline" 
                        className="border-gold/30 text-foreground capitalize pr-1"
                      >
                        {categoryFilter.replace('-', ' ')}
                        <button
                          onClick={() => updateSearch("category", "")}
                          className="ml-2 hover:text-gold"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {minRating > 0 && (
                      <Badge 
                        variant="outline" 
                        className="border-gold/30 text-foreground pr-1"
                      >
                        {minRating}+ stars
                        <button
                          onClick={() => updateSearch("rating", "")}
                          className="ml-2 hover:text-gold"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                )}

                {/* Results Count */}
                <p className="text-muted-foreground mb-6">
                  {results.length} {results.length === 1 ? "venue" : "venues"} found
                  {query && ` for "${query}"`}
                </p>

                {/* Results Grid */}
                {results.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {results.map((venue) => (
                      <VenueCard key={venue.id} venue={venue} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">No venues match your search criteria.</p>
                    <Button variant="gold" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;