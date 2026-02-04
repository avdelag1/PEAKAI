import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'mercur_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = useCallback((venueId: string) => {
    setFavorites(prev => {
      if (prev.includes(venueId)) return prev;
      return [...prev, venueId];
    });
  }, []);

  const removeFavorite = useCallback((venueId: string) => {
    setFavorites(prev => prev.filter(id => id !== venueId));
  }, []);

  const toggleFavorite = useCallback((venueId: string) => {
    setFavorites(prev => {
      if (prev.includes(venueId)) {
        return prev.filter(id => id !== venueId);
      }
      return [...prev, venueId];
    });
  }, []);

  const isFavorite = useCallback((venueId: string) => {
    return favorites.includes(venueId);
  }, [favorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    count: favorites.length,
  };
}
