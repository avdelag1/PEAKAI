import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Heart, Calendar, LogOut } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import VenueCard from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/useFavorites";
import { getVenueById } from "@/data/venues";
import { useAuth } from "@/contexts/AuthContext";

const Profile = () => {
  const { user, signOut, loading } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const favoriteVenues = favorites.slice(0, 3).map(id => getVenueById(id)).filter(Boolean);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        
        <main className="pt-20 pb-16 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 text-center">
            <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-serif font-semibold text-foreground mb-2">
              Sign in to view your profile
            </h1>
            <p className="text-muted-foreground mb-6">
              Create an account to save your favorites and manage bookings
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/sign-in">
                <Button variant="outline" className="rounded-xl">Sign In</Button>
              </Link>
              <Link to="/sign-up">
                <Button className="rounded-xl bg-foreground text-background">Sign Up</Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          {/* Profile Header */}
          <div className="bg-card rounded-2xl p-6 border border-border mb-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-xl font-serif font-semibold text-foreground">
                  {user.user_metadata?.display_name || 'User'}
                </h1>
                <p className="text-muted-foreground text-sm">{user.email}</p>
              </div>

              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-2xl font-semibold text-foreground">{favorites.length}</p>
                  <p className="text-sm text-muted-foreground">Saved</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-2xl font-semibold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Bookings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Saved Venues */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-semibold text-foreground">Saved Places</h2>
              <Link to="/favorites" className="text-muted-foreground hover:text-foreground text-sm">
                View all
              </Link>
            </div>

            {favoriteVenues.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {favoriteVenues.map((venue) => venue && (
                  <VenueCard key={venue.id} venue={venue} className="min-w-[240px]" />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Heart className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground text-sm mb-3">No saved places yet</p>
                <Link to="/search">
                  <Button size="sm" className="rounded-xl bg-foreground text-background">
                    Explore
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Profile;
