import { useState, useEffect, useMemo, useCallback } from 'react';
import { venues, searchVenues, filterVenues } from '@/data/venues';
import { Venue, SearchFilters } from '@/data/types';

const RECENT_SEARCHES_KEY = 'mercur_recent_searches';
const MAX_RECENT_SEARCHES = 5;

export function useSearch() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch {
        setRecentSearches([]);
      }
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s.toLowerCase() !== searchQuery.toLowerCase());
      const updated = [searchQuery, ...filtered].slice(0, MAX_RECENT_SEARCHES);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  }, []);

  // Search results
  const results = useMemo((): Venue[] => {
    if (!query && Object.keys(filters).length === 0) {
      return [];
    }

    return filterVenues({
      query,
      destination: filters.destination,
      category: filters.category,
      priceLevel: filters.priceLevel,
      minRating: filters.rating,
    });
  }, [query, filters]);

  // Suggestions based on partial query
  const suggestions = useMemo((): string[] => {
    if (!query || query.length < 2) return [];
    
    const matches = searchVenues(query);
    const venueNames = matches.slice(0, 5).map(v => v.name);
    return venueNames;
  }, [query]);

  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    query,
    setQuery,
    filters,
    updateFilters,
    clearFilters,
    results,
    suggestions,
    recentSearches,
    saveRecentSearch,
    clearRecentSearches,
    isSearching: query.length > 0 || Object.keys(filters).length > 0,
  };
}
