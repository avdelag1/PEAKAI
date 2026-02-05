 import { useParams, Link } from "react-router-dom";
 import { useState } from "react";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Shirt, 
  Phone, 
  Mail, 
  Globe,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import ReservationModal from "@/components/ReservationModal";
 import VenueGalleryModal from "@/components/VenueGalleryModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVenueBySlug, getVenuesByDestination } from "@/data/venues";
import { getDestinationBySlug } from "@/data/destinations";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

const priceLabels = ['$', '$$', '$$$', '$$$$'];

const Venue = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);
   const [galleryOpen, setGalleryOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  const venue = getVenueBySlug(slug || "");
  
  if (!venue) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Venue not found</h1>
          <Link to="/">
            <Button variant="gold">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const destination = getDestinationBySlug(venue.destinationSlug);
  const similarVenues = getVenuesByDestination(venue.destinationSlug)
    .filter(v => v.id !== venue.id && v.category === venue.category)
    .slice(0, 3);

  const favorite = isFavorite(venue.id);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % venue.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + venue.images.length) % venue.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Image Gallery */}
      <section className="pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
           <img
             src={venue.images[currentImage]}
             alt={venue.name}
             className="h-full w-full object-cover cursor-pointer"
             onClick={() => setGalleryOpen(true)}
           />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          
          {/* Navigation Arrows */}
          {venue.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          
          {/* Image Indicators */}
          {venue.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {venue.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentImage === index ? "bg-gold w-6" : "bg-foreground/50"
                  )}
                />
              ))}
            </div>
          )}

          {/* Back Link */}
          <Link 
            to={`/destination/${venue.destinationSlug}`}
            className="absolute top-24 left-6 inline-flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {destination?.name || 'Destination'}
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge 
                    variant="outline" 
                    className="border-gold/30 text-foreground capitalize"
                  >
                    {venue.category.replace('-', ' ')}
                  </Badge>
                  <span className="text-gold font-medium">{priceLabels[venue.priceLevel - 1]}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  {venue.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-gold text-gold" />
                    <span className="text-foreground font-semibold">{venue.rating}</span>
                    <span>({venue.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{venue.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {venue.description}
                </p>
              </div>

              {/* Highlights */}
              {venue.highlights.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Highlights</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {venue.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {venue.amenities.map((amenity) => (
                    <Badge 
                      key={amenity} 
                      variant="outline" 
                      className="border-gold/20 text-muted-foreground"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Action Card */}
                <div className="glass-card p-6 rounded-2xl">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Hours</p>
                        <p className="text-foreground">{venue.hours.open} - {venue.hours.close}</p>
                        <p className="text-sm text-muted-foreground">{venue.hours.days}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Shirt className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dress Code</p>
                        <p className="text-foreground">{venue.dressCode}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="gold" 
                    className="w-full mb-3"
                    onClick={() => setReservationOpen(true)}
                  >
                    Request Reservation
                  </Button>
                  
                  <Button 
                    variant="luxuryOutline" 
                    className="w-full"
                    onClick={() => toggleFavorite(venue.id)}
                  >
                    <Heart className={cn("h-4 w-4 mr-2", favorite && "fill-current")} />
                    {favorite ? 'Saved' : 'Save to Favorites'}
                  </Button>
                </div>

                {/* Contact */}
                {(venue.contactPhone || venue.contactEmail || venue.website) && (
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="font-serif font-semibold text-foreground mb-4">Contact</h3>
                    <div className="space-y-3">
                      {venue.contactPhone && (
                        <a 
                          href={`tel:${venue.contactPhone}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          {venue.contactPhone}
                        </a>
                      )}
                      {venue.contactEmail && (
                        <a 
                          href={`mailto:${venue.contactEmail}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          {venue.contactEmail}
                        </a>
                      )}
                      {venue.website && (
                        <a 
                          href={venue.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Venues */}
      {similarVenues.length > 0 && (
        <section className="py-16 border-t border-gold/10">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Similar Venues in {destination?.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarVenues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} showDestination={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ReservationModal 
        open={reservationOpen} 
        onOpenChange={setReservationOpen}
        venue={venue}
      />
 
       <VenueGalleryModal
         images={venue.images}
         initialIndex={currentImage}
         open={galleryOpen}
         onOpenChange={setGalleryOpen}
         venueName={venue.name}
       />

      <Footer />
    </div>
  );
};

export default Venue;