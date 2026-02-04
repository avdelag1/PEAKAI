import { Link } from "react-router-dom";
import { ArrowLeft, User, Heart, Calendar, Crown } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/hooks/useFavorites";
import { getVenueById } from "@/data/venues";

const Profile = () => {
  const { favorites } = useFavorites();
  const favoriteVenues = favorites.slice(0, 3).map(id => getVenueById(id)).filter(Boolean);

  // Mock user data
  const user = {
    name: "Guest User",
    email: "guest@example.com",
    membershipTier: "Gold",
    memberSince: "2024",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Profile Header */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-gold/20 flex items-center justify-center">
                <User className="h-12 w-12 text-gold" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-serif font-bold text-foreground">
                    {user.name}
                  </h1>
                  <Badge className="bg-gold text-background border-0">
                    <Crown className="h-3 w-3 mr-1" />
                    {user.membershipTier}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Member since {user.memberSince}
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="luxuryOutline">Edit Profile</Button>
                <Button variant="gold">Upgrade Membership</Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="font-serif font-semibold text-foreground mb-4">Quick Stats</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-gold" />
                      <span className="text-muted-foreground">Saved Venues</span>
                    </div>
                    <span className="font-semibold text-foreground">{favorites.length}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gold" />
                      <span className="text-muted-foreground">Reservations</span>
                    </div>
                    <span className="font-semibold text-foreground">0</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h2 className="font-serif font-semibold text-foreground mb-4">Membership Benefits</h2>
                
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Priority reservations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    VIP table guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Personal concierge
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Event invitations
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Saved Venues */}
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif font-semibold text-foreground">Saved Venues</h2>
                  <Link to="/favorites" className="text-gold hover:text-gold/80 text-sm">
                    View all
                  </Link>
                </div>

                {favoriteVenues.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {favoriteVenues.map((venue) => venue && (
                      <VenueCard key={venue.id} venue={venue} className="bg-background" />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No saved venues yet</p>
                    <Link to="/search">
                      <Button variant="gold" size="sm">Explore Venues</Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Booking History */}
              <div className="glass-card rounded-xl p-6">
                <h2 className="font-serif font-semibold text-foreground mb-6">Booking History</h2>
                
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No reservations yet</p>
                  <Link to="/search">
                    <Button variant="gold" size="sm">Book Your First Experience</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;