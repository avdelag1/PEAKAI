import { Destination } from './types';
import monacoImg from '@/assets/destination-monaco.jpg';
import dubaiImg from '@/assets/destination-dubai.jpg';
import mykonosImg from '@/assets/destination-mykonos.jpg';
import ibizaImg from '@/assets/destination-ibiza.jpg';

export const destinations: Destination[] = [
  {
    id: 'monaco',
    name: 'Monaco',
    slug: 'monaco',
    country: 'French Riviera',
    image: monacoImg,
    description: 'The ultimate playground for the global elite. Monaco offers unparalleled luxury with its legendary casino, glamorous harbor filled with superyachts, and world-class dining. Experience Formula 1 glamour year-round in this jewel of the Mediterranean.',
    venueCount: 45,
    rating: 4.9,
    highlights: ['Casino de Monte-Carlo', 'Grand Prix Circuit', 'Superyacht Harbor', 'Michelin Restaurants'],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    country: 'UAE',
    image: dubaiImg,
    description: 'Where impossible becomes reality. Dubai pushes the boundaries of luxury with sky-high penthouses, underwater restaurants, and desert adventures. The city that never sleeps offers 24/7 entertainment and shopping in climate-controlled opulence.',
    venueCount: 120,
    rating: 4.8,
    highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Desert Experiences', 'World-Class Shopping'],
  },
  {
    id: 'mykonos',
    name: 'Mykonos',
    slug: 'mykonos',
    country: 'Greece',
    image: mykonosImg,
    description: 'The island of the winds where bohemian spirit meets exclusive luxury. Mykonos captivates with whitewashed villas, legendary beach clubs, and sunset parties that last until dawn. A summer haven for the international jet set.',
    venueCount: 35,
    rating: 4.7,
    highlights: ['Beach Clubs', 'Little Venice', 'Sunset Views', 'Island Hopping'],
  },
  {
    id: 'ibiza',
    name: 'Ibiza',
    slug: 'ibiza',
    country: 'Spain',
    image: ibizaImg,
    description: 'The white isle where electronic music was born and nightlife became an art form. Beyond the clubs, discover hidden coves, wellness retreats, and a bohemian charm that has attracted artists and free spirits for decades.',
    venueCount: 80,
    rating: 4.8,
    highlights: ['Legendary Clubs', 'Hidden Beaches', 'Sunset Strips', 'Wellness Retreats'],
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};
