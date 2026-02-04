// Core data types for Mercur Concierge App

export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  image: string;
  description: string;
  venueCount: number;
  rating: number;
  highlights: string[];
}

export interface Venue {
  id: string;
  name: string;
  slug: string;
  destinationSlug: string;
  category: CategoryType;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  amenities: string[];
  highlights: string[];
  hours: {
    open: string;
    close: string;
    days: string;
  };
  dressCode: string;
  priceLevel: 1 | 2 | 3 | 4; // $ to $$$$
  contactPhone?: string;
  contactEmail?: string;
  website?: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  featured?: boolean;
  tags: string[];
}

export type CategoryType = 
  | 'nightclub'
  | 'restaurant'
  | 'bar'
  | 'lounge'
  | 'beach-club'
  | 'yacht'
  | 'experience';

export interface Category {
  id: CategoryType;
  name: string;
  icon: string;
  description: string;
  venueCount?: number;
}

export interface SearchFilters {
  query?: string;
  destination?: string;
  category?: CategoryType;
  priceLevel?: number[];
  rating?: number;
  sortBy?: 'rating' | 'popularity' | 'price-low' | 'price-high';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  destination: string;
}

export interface ReservationRequest {
  venueId: string;
  date: Date;
  partySize: number;
  specialRequests?: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}
