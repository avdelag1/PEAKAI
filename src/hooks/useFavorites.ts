import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const FAVORITES_KEY = 'tulum_local_favorites';

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load favorites on mount or when user changes
  useEffect(() => {
    const loadFavorites = async () => {
      if (user) {
        // Load from database for logged-in users
        const { data, error } = await supabase
          .from('favorites')
          .select('venue_id')
          .eq('user_id', user.id);
        
        if (!error && data) {
          setFavorites(data.map(f => f.venue_id));
        }
      } else {
        // Load from localStorage for guests
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
          try {
            setFavorites(JSON.parse(stored));
          } catch {
            setFavorites([]);
          }
        }
      }
      setLoading(false);
    };

    loadFavorites();
  }, [user]);

  // Sync localStorage favorites to database when user logs in
  useEffect(() => {
    const syncFavorites = async () => {
      if (user) {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
          try {
            const localFavorites = JSON.parse(stored) as string[];
            if (localFavorites.length > 0) {
              // Add local favorites to database
              const inserts = localFavorites.map(venue_id => ({
                user_id: user.id,
                venue_id,
              }));
              
              await supabase.from('favorites').upsert(inserts, {
                onConflict: 'user_id,venue_id',
                ignoreDuplicates: true,
              });
              
              // Clear localStorage after sync
              localStorage.removeItem(FAVORITES_KEY);
              
              // Reload favorites from database
              const { data } = await supabase
                .from('favorites')
                .select('venue_id')
                .eq('user_id', user.id);
              
              if (data) {
                setFavorites(data.map(f => f.venue_id));
              }
            }
          } catch {
            // Ignore sync errors
          }
        }
      }
    };

    syncFavorites();
  }, [user]);

  const addFavorite = useCallback(async (venueId: string) => {
    if (user) {
      // Add to database
      const { error } = await supabase
        .from('favorites')
        .insert({ user_id: user.id, venue_id: venueId });
      
      if (!error) {
        setFavorites(prev => [...prev, venueId]);
      }
    } else {
      // Add to localStorage
      setFavorites(prev => {
        if (prev.includes(venueId)) return prev;
        const newFavorites = [...prev, venueId];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return newFavorites;
      });
    }
  }, [user]);

  const removeFavorite = useCallback(async (venueId: string) => {
    if (user) {
      // Remove from database
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('venue_id', venueId);
      
      if (!error) {
        setFavorites(prev => prev.filter(id => id !== venueId));
      }
    } else {
      // Remove from localStorage
      setFavorites(prev => {
        const newFavorites = prev.filter(id => id !== venueId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return newFavorites;
      });
    }
  }, [user]);

  const toggleFavorite = useCallback(async (venueId: string) => {
    if (favorites.includes(venueId)) {
      await removeFavorite(venueId);
    } else {
      await addFavorite(venueId);
    }
  }, [favorites, addFavorite, removeFavorite]);

  const isFavorite = useCallback((venueId: string) => {
    return favorites.includes(venueId);
  }, [favorites]);

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    count: favorites.length,
  };
}
