import { Venue } from './types';

export const venues: Venue[] = [
  // MONACO VENUES
  {
    id: 'jimmy-z-monaco',
    name: "Jimmy'z Monte-Carlo",
    slug: 'jimmyz-monte-carlo',
    destinationSlug: 'monaco',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800',
      'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800',
    ],
    rating: 4.9,
    reviewCount: 342,
    description: "Monaco's most legendary nightclub, Jimmy'z has been the playground of royalty, celebrities, and the global elite since 1971. Set in the prestigious Sporting Monte-Carlo complex, this open-air club offers an unmatched atmosphere under the stars with world-class DJs and impeccable service.",
    shortDescription: "Monaco's legendary open-air nightclub for the elite",
    amenities: ['VIP Tables', 'Bottle Service', 'Valet Parking', 'Private Security', 'Outdoor Terrace'],
    highlights: ['Open-air dance floor', 'Celebrity hotspot', 'Mediterranean views'],
    hours: { open: '23:30', close: '06:00', days: 'Wed-Sun (Summer)' },
    dressCode: 'Elegant chic - No sportswear, sneakers, or shorts',
    priceLevel: 4,
    address: 'Sporting Monte-Carlo, Avenue Princesse Grace, Monaco',
    featured: true,
    tags: ['nightlife', 'celebrity', 'outdoor', 'exclusive'],
  },
  {
    id: 'le-louis-xv',
    name: 'Le Louis XV - Alain Ducasse',
    slug: 'le-louis-xv',
    destinationSlug: 'monaco',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    ],
    rating: 5.0,
    reviewCount: 189,
    description: 'The first hotel restaurant to receive three Michelin stars, Le Louis XV offers an unparalleled culinary journey. Chef Alain Ducasse presents Mediterranean cuisine at its finest in the opulent setting of the Hôtel de Paris, featuring gilded ceilings, crystal chandeliers, and impeccable service.',
    shortDescription: 'Three Michelin star Mediterranean excellence',
    amenities: ['Private Dining', 'Sommelier Service', 'Valet Parking', 'Jacket Required'],
    highlights: ['3 Michelin stars', 'Historic setting', 'Wine cellar with 400,000 bottles'],
    hours: { open: '19:30', close: '22:00', days: 'Wed-Sun' },
    dressCode: 'Formal - Jacket required for gentlemen',
    priceLevel: 4,
    address: 'Hôtel de Paris, Place du Casino, Monaco',
    featured: true,
    tags: ['fine-dining', 'michelin', 'romantic', 'french'],
  },
  {
    id: 'sass-cafe-monaco',
    name: 'Sass Café',
    slug: 'sass-cafe',
    destinationSlug: 'monaco',
    category: 'lounge',
    images: [
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
    ],
    rating: 4.7,
    reviewCount: 256,
    description: 'An institution in Monaco nightlife, Sass Café combines Italian cuisine with vibrant entertainment. Live music, dancing on tables, and an electric atmosphere make this the perfect spot for those who want dinner to become a celebration.',
    shortDescription: 'Where dinner transforms into celebration',
    amenities: ['Live Music', 'Dancing', 'Italian Cuisine', 'Late Night'],
    highlights: ['Live entertainment', 'Italian fine dining', 'Festive atmosphere'],
    hours: { open: '20:00', close: '04:00', days: 'Daily' },
    dressCode: 'Smart casual to elegant',
    priceLevel: 3,
    address: '11 Avenue Princesse Grace, Monaco',
    tags: ['dinner', 'entertainment', 'italian', 'live-music'],
  },
  {
    id: 'buddha-bar-monaco',
    name: 'Buddha-Bar Monte-Carlo',
    slug: 'buddha-bar-monaco',
    destinationSlug: 'monaco',
    category: 'bar',
    images: [
      'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800',
    ],
    rating: 4.6,
    reviewCount: 198,
    description: 'Set within the iconic Casino de Monte-Carlo, Buddha-Bar brings its signature Asian-fusion concept to the Riviera. Towering Buddha statues, world music, and innovative cocktails create an exotic escape in the heart of Monaco.',
    shortDescription: 'Asian-fusion cocktails in the Casino',
    amenities: ['Cocktail Menu', 'Asian Cuisine', 'DJ Sets', 'Casino Access'],
    highlights: ['Casino setting', 'Signature cocktails', 'Asian-fusion menu'],
    hours: { open: '19:00', close: '02:00', days: 'Daily' },
    dressCode: 'Smart elegant',
    priceLevel: 3,
    address: 'Place du Casino, Monaco',
    tags: ['cocktails', 'asian', 'lounge', 'casino'],
  },
  {
    id: 'blue-bay-monaco',
    name: 'Blue Bay',
    slug: 'blue-bay',
    destinationSlug: 'monaco',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76978e8e9c4?w=800',
    ],
    rating: 4.8,
    reviewCount: 145,
    description: 'Chef Marcel Ravin brings Caribbean soul to Michelin-starred dining at the Monte-Carlo Bay Hotel. Tropical flavors meet French technique in a stunning waterfront setting with panoramic Mediterranean views.',
    shortDescription: 'Caribbean-inspired Michelin excellence',
    amenities: ['Terrace Dining', 'Sea Views', 'Sommelier', 'Private Events'],
    highlights: ['1 Michelin star', 'Caribbean fusion', 'Waterfront terrace'],
    hours: { open: '19:30', close: '22:00', days: 'Tue-Sat' },
    dressCode: 'Smart casual',
    priceLevel: 4,
    address: 'Monte-Carlo Bay Hotel, Avenue Princesse Grace, Monaco',
    tags: ['michelin', 'caribbean', 'seafood', 'terrace'],
  },

  // DUBAI VENUES
  {
    id: 'white-dubai',
    name: 'WHITE Dubai',
    slug: 'white-dubai',
    destinationSlug: 'dubai',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    ],
    rating: 4.8,
    reviewCount: 567,
    description: 'Perched atop the Meydan Racecourse with panoramic Dubai skyline views, WHITE Dubai redefines nightlife with international DJs, stunning production, and an exclusive crowd. The rooftop setting offers an unmatched party experience.',
    shortDescription: 'Rooftop nightclub with skyline views',
    amenities: ['Rooftop', 'VIP Tables', 'International DJs', 'Bottle Service'],
    highlights: ['Skyline views', 'World-class DJs', 'Open-air rooftop'],
    hours: { open: '23:00', close: '04:00', days: 'Thu-Sat' },
    dressCode: 'Trendy and stylish - No sportswear',
    priceLevel: 4,
    address: 'Meydan Racecourse, Nad Al Sheba, Dubai',
    featured: true,
    tags: ['rooftop', 'edm', 'views', 'exclusive'],
  },
  {
    id: 'ossiano-dubai',
    name: 'Ossiano',
    slug: 'ossiano',
    destinationSlug: 'dubai',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    ],
    rating: 4.9,
    reviewCount: 312,
    description: 'Dine surrounded by 65,000 marine animals at Atlantis The Palm. Chef Grégoire Berger delivers innovative seafood in an underwater wonderland, where floor-to-ceiling aquarium windows create a truly surreal fine dining experience.',
    shortDescription: 'Underwater fine dining at Atlantis',
    amenities: ['Aquarium Views', 'Private Dining', 'Tasting Menu', 'Wine Pairing'],
    highlights: ['Underwater setting', '1 Michelin star', 'Unique atmosphere'],
    hours: { open: '18:30', close: '23:00', days: 'Tue-Sun' },
    dressCode: 'Smart elegant',
    priceLevel: 4,
    address: 'Atlantis The Palm, Palm Jumeirah, Dubai',
    featured: true,
    tags: ['underwater', 'seafood', 'romantic', 'unique'],
  },
  {
    id: 'zeta-dubai',
    name: 'Zeta',
    slug: 'zeta',
    destinationSlug: 'dubai',
    category: 'lounge',
    images: [
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
    ],
    rating: 4.7,
    reviewCount: 234,
    description: 'A sophisticated Asian-inspired cocktail lounge at Address Downtown. Zeta offers inventive drinks, dim sum, and stunning Burj Khalifa views in an intimate, stylish setting perfect for pre-dinner drinks or late-night conversations.',
    shortDescription: 'Chic cocktails with Burj Khalifa views',
    amenities: ['Craft Cocktails', 'Asian Bites', 'Terrace', 'Burj Views'],
    highlights: ['Burj Khalifa views', 'Signature cocktails', 'Dim sum'],
    hours: { open: '17:00', close: '02:00', days: 'Daily' },
    dressCode: 'Smart casual',
    priceLevel: 3,
    address: 'Address Downtown, Sheikh Mohammed bin Rashid Blvd, Dubai',
    tags: ['cocktails', 'views', 'asian', 'sophisticated'],
  },
  {
    id: 'nikki-beach-dubai',
    name: 'Nikki Beach Dubai',
    slug: 'nikki-beach-dubai',
    destinationSlug: 'dubai',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    rating: 4.6,
    reviewCount: 445,
    description: 'The world-famous beach club brings Miami vibes to Pearl Jumeira. Pristine white beds, Mediterranean cuisine, and resident DJs create the ultimate poolside party atmosphere with stunning sea views.',
    shortDescription: 'Iconic beach club with Miami vibes',
    amenities: ['Beach Access', 'Pool', 'Day Beds', 'Restaurant', 'DJ'],
    highlights: ['Beach & pool', 'International cuisine', 'Party atmosphere'],
    hours: { open: '11:00', close: '20:00', days: 'Daily' },
    dressCode: 'Beach chic',
    priceLevel: 3,
    address: 'Pearl Jumeira, Dubai',
    tags: ['beach', 'pool', 'brunch', 'party'],
  },
  {
    id: 'nobu-dubai',
    name: 'Nobu Dubai',
    slug: 'nobu-dubai',
    destinationSlug: 'dubai',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800',
    ],
    rating: 4.8,
    reviewCount: 389,
    description: 'The legendary Japanese-Peruvian restaurant at Atlantis The Palm. Chef Nobu Matsuhisa\'s signature dishes, including black cod miso and yellowtail sashimi, are served in a dramatic space overlooking the Arabian Gulf.',
    shortDescription: 'Japanese-Peruvian excellence at Atlantis',
    amenities: ['Sea Views', 'Omakase', 'Private Dining', 'Sake Bar'],
    highlights: ['Celebrity chef', 'Signature dishes', 'Ocean views'],
    hours: { open: '18:00', close: '23:30', days: 'Daily' },
    dressCode: 'Smart casual',
    priceLevel: 4,
    address: 'Atlantis The Palm, Palm Jumeirah, Dubai',
    tags: ['japanese', 'sushi', 'celebrity-chef', 'seafood'],
  },
  {
    id: 'soho-garden-dubai',
    name: 'Soho Garden',
    slug: 'soho-garden',
    destinationSlug: 'dubai',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800',
    ],
    rating: 4.5,
    reviewCount: 678,
    description: 'A sprawling entertainment complex featuring multiple venues, from underground techno to mainstream hits. Soho Garden is Dubai\'s go-to destination for nightlife diversity and world-class electronic music.',
    shortDescription: 'Multi-venue entertainment complex',
    amenities: ['Multiple Venues', 'Outdoor Areas', 'Food Trucks', 'VIP'],
    highlights: ['Multiple music genres', 'Outdoor space', 'Festival vibes'],
    hours: { open: '21:00', close: '04:00', days: 'Thu-Sat' },
    dressCode: 'Trendy - No sportswear',
    priceLevel: 3,
    address: 'Meydan, Dubai',
    tags: ['electronic', 'multi-venue', 'outdoor', 'diverse'],
  },

  // MYKONOS VENUES
  {
    id: 'nammos-mykonos',
    name: 'Nammos',
    slug: 'nammos-mykonos',
    destinationSlug: 'mykonos',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    rating: 4.9,
    reviewCount: 567,
    description: 'The most exclusive beach club in Greece, Nammos on Psarou Beach defines Mykonos luxury. Crystal-clear waters, gourmet Mediterranean cuisine, and a legendary party atmosphere attract celebrities and jetsetters from around the world.',
    shortDescription: "Greece's most exclusive beach club",
    amenities: ['Beach Service', 'Gourmet Dining', 'Champagne Bar', 'Water Sports'],
    highlights: ['Psarou Beach', 'Celebrity hotspot', 'Champagne culture'],
    hours: { open: '10:00', close: '01:00', days: 'Daily (Summer)' },
    dressCode: 'Beach elegant',
    priceLevel: 4,
    address: 'Psarou Beach, Mykonos',
    featured: true,
    tags: ['beach', 'luxury', 'celebrity', 'champagne'],
  },
  {
    id: 'scorpios-mykonos',
    name: 'Scorpios',
    slug: 'scorpios-mykonos',
    destinationSlug: 'mykonos',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    ],
    rating: 4.8,
    reviewCount: 423,
    description: 'A bohemian paradise at Paraga Beach, Scorpios offers a more soulful Mykonos experience. Sunset rituals, world music, organic cuisine, and a creative crowd create an atmosphere that\'s both exclusive and welcoming.',
    shortDescription: 'Bohemian-chic sunset rituals',
    amenities: ['Sunset Sessions', 'Organic Menu', 'Boutique', 'Yoga'],
    highlights: ['Sunset rituals', 'World music', 'Bohemian vibe'],
    hours: { open: '11:00', close: '03:00', days: 'Daily (Summer)' },
    dressCode: 'Bohemian chic',
    priceLevel: 3,
    address: 'Paraga Beach, Mykonos',
    tags: ['sunset', 'bohemian', 'music', 'organic'],
  },
  {
    id: 'cavo-paradiso-mykonos',
    name: 'Cavo Paradiso',
    slug: 'cavo-paradiso',
    destinationSlug: 'mykonos',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    ],
    rating: 4.7,
    reviewCount: 345,
    description: 'Built into the cliffs above Paradise Beach, Cavo Paradiso is a legendary open-air club hosting the world\'s top DJs. Dance until sunrise with the Aegean Sea as your backdrop in one of the most iconic club settings on Earth.',
    shortDescription: 'Legendary cliff-side open-air club',
    amenities: ['Cliff Views', 'Pool', 'International DJs', 'Sunrise Parties'],
    highlights: ['Cliffside setting', 'Sunrise parties', 'Legendary DJs'],
    hours: { open: '23:00', close: '10:00', days: 'Daily (Summer)' },
    dressCode: 'Club casual',
    priceLevel: 3,
    address: 'Paradise Beach, Mykonos',
    tags: ['cliff', 'sunrise', 'electronic', 'legendary'],
  },
  {
    id: 'interni-mykonos',
    name: 'Interni',
    slug: 'interni-mykonos',
    destinationSlug: 'mykonos',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
    ],
    rating: 4.8,
    reviewCount: 234,
    description: 'Hidden in the heart of Mykonos Town, Interni combines sophisticated Mediterranean cuisine with late-night energy. The minimalist-chic courtyard transforms from fine dining destination to vibrant party as the night progresses.',
    shortDescription: 'Fine dining meets nightlife',
    amenities: ['Courtyard Dining', 'DJ', 'Late Night', 'Cocktails'],
    highlights: ['Dinner-to-party transition', 'Hidden gem', 'Local crowd'],
    hours: { open: '20:00', close: '04:00', days: 'Daily (Summer)' },
    dressCode: 'Smart elegant',
    priceLevel: 3,
    address: 'Matogianni Street, Mykonos Town',
    tags: ['dinner', 'party', 'local', 'courtyard'],
  },
  {
    id: 'buddha-bar-mykonos',
    name: 'Buddha-Bar Beach Mykonos',
    slug: 'buddha-bar-mykonos',
    destinationSlug: 'mykonos',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    rating: 4.6,
    reviewCount: 189,
    description: 'The iconic Buddha-Bar concept reimagined for the beach. Asian-fusion cuisine, signature cocktails, and the famous Buddha-Bar music mix create an exotic escape on the shores of Ornos Bay.',
    shortDescription: 'Asian-fusion beach experience',
    amenities: ['Beach Service', 'Asian Cuisine', 'Cocktails', 'Sunset Views'],
    highlights: ['Buddha-Bar brand', 'Fusion cuisine', 'Beach setting'],
    hours: { open: '10:00', close: '01:00', days: 'Daily (Summer)' },
    dressCode: 'Beach elegant',
    priceLevel: 3,
    address: 'Ornos Beach, Mykonos',
    tags: ['asian', 'beach', 'cocktails', 'brand'],
  },

  // IBIZA VENUES
  {
    id: 'pacha-ibiza',
    name: 'Pacha Ibiza',
    slug: 'pacha-ibiza',
    destinationSlug: 'ibiza',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800',
      'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800',
    ],
    rating: 4.9,
    reviewCount: 1234,
    description: 'The cherry-branded institution that defined Ibiza nightlife since 1973. Pacha remains the beating heart of the island, hosting legendary residents and one-off performances in its iconic multi-room venue.',
    shortDescription: 'The legendary home of Ibiza nightlife',
    amenities: ['Multiple Rooms', 'VIP Area', 'Terrace', 'Restaurant'],
    highlights: ['Since 1973', 'Legendary residents', 'Iconic venue'],
    hours: { open: '23:00', close: '06:00', days: 'Daily (Summer)' },
    dressCode: 'Club elegant',
    priceLevel: 4,
    address: 'Av. 8 d\'Agost, Ibiza Town',
    featured: true,
    tags: ['legendary', 'institution', 'house', 'iconic'],
  },
  {
    id: 'destino-pacha-ibiza',
    name: 'Destino Pacha Ibiza',
    slug: 'destino-pacha',
    destinationSlug: 'ibiza',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800',
    ],
    rating: 4.8,
    reviewCount: 456,
    description: 'Pacha\'s daytime counterpart, Destino offers cliffside luxury with infinity pools overlooking Talamanca Bay. Sunset sessions with world-class DJs, gourmet dining, and an effortlessly cool crowd.',
    shortDescription: 'Cliffside pools and sunset sessions',
    amenities: ['Infinity Pool', 'Cliff Views', 'DJ Sessions', 'Restaurant'],
    highlights: ['Sunset views', 'Pool parties', 'Pacha quality'],
    hours: { open: '13:00', close: '00:00', days: 'Daily (Summer)' },
    dressCode: 'Pool chic',
    priceLevel: 4,
    address: 'Cap Martinet, Ibiza',
    tags: ['pool', 'sunset', 'daytime', 'views'],
  },
  {
    id: 'heart-ibiza',
    name: 'Heart Ibiza',
    slug: 'heart-ibiza',
    destinationSlug: 'ibiza',
    category: 'restaurant',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    ],
    rating: 4.9,
    reviewCount: 345,
    description: 'A collaboration between Cirque du Soleil and the Adrià brothers, Heart transforms dining into theatrical art. Avant-garde cuisine meets spectacular performances in a venue where gastronomy and entertainment become one.',
    shortDescription: 'Where dining meets theatrical art',
    amenities: ['Show Dining', 'Multiple Spaces', 'Cocktails', 'Performance'],
    highlights: ['Cirque du Soleil shows', 'Adrià cuisine', 'Immersive experience'],
    hours: { open: '20:00', close: '06:00', days: 'Daily (Summer)' },
    dressCode: 'Creative elegant',
    priceLevel: 4,
    address: 'Paseo Juan Carlos I, Ibiza Marina',
    tags: ['show', 'gastronomy', 'unique', 'art'],
  },
  {
    id: 'blue-marlin-ibiza',
    name: 'Blue Marlin Ibiza',
    slug: 'blue-marlin',
    destinationSlug: 'ibiza',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    ],
    rating: 4.7,
    reviewCount: 678,
    description: 'The ultimate beach club experience in Cala Jondal. Crystal waters, Balinese beds, Mediterranean cuisine, and a sophisticated party atmosphere make Blue Marlin the daytime destination for Ibiza\'s in-crowd.',
    shortDescription: 'Ultimate Cala Jondal beach experience',
    amenities: ['Beach Service', 'Balinese Beds', 'Restaurant', 'DJ'],
    highlights: ['Cala Jondal', 'Daytime parties', 'Jet-set crowd'],
    hours: { open: '11:00', close: '00:00', days: 'Daily (Summer)' },
    dressCode: 'Beach chic',
    priceLevel: 4,
    address: 'Cala Jondal, Ibiza',
    tags: ['beach', 'daytime', 'party', 'luxury'],
  },
  {
    id: 'amnesia-ibiza',
    name: 'Amnesia',
    slug: 'amnesia-ibiza',
    destinationSlug: 'ibiza',
    category: 'nightclub',
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    ],
    rating: 4.8,
    reviewCount: 987,
    description: 'Home of the famous foam parties and sunrise sessions, Amnesia is a temple of electronic music. Two massive rooms cater to different vibes, united by the legendary Ibiza spirit that keeps you dancing until well past dawn.',
    shortDescription: 'Temple of sunrise sessions',
    amenities: ['Two Rooms', 'Terrace', 'VIP Area', 'Foam Parties'],
    highlights: ['Sunrise sessions', 'Foam parties', 'Twin rooms'],
    hours: { open: '00:00', close: '08:00', days: 'Daily (Summer)' },
    dressCode: 'Club casual',
    priceLevel: 3,
    address: 'San Rafael, Ibiza',
    tags: ['sunrise', 'techno', 'foam', 'legendary'],
  },
  {
    id: 'experimental-beach-ibiza',
    name: 'Experimental Beach',
    slug: 'experimental-beach',
    destinationSlug: 'ibiza',
    category: 'beach-club',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    rating: 4.6,
    reviewCount: 234,
    description: 'Bohemian luxury meets sustainable ethos at this hidden gem in Cap des Falcó. Organic ingredients, natural materials, and breathtaking sunset views create a more mindful beach club experience.',
    shortDescription: 'Bohemian luxury with sunset views',
    amenities: ['Sunset Views', 'Organic Menu', 'Cocktails', 'Lounge'],
    highlights: ['Secret location', 'Sunset views', 'Eco-conscious'],
    hours: { open: '12:00', close: '00:00', days: 'Daily (Summer)' },
    dressCode: 'Bohemian chic',
    priceLevel: 3,
    address: 'Cap des Falcó, Ibiza',
    tags: ['sunset', 'bohemian', 'organic', 'hidden'],
  },
];

// Helper functions
export const getVenueById = (id: string): Venue | undefined => {
  return venues.find(venue => venue.id === id);
};

export const getVenueBySlug = (slug: string): Venue | undefined => {
  return venues.find(venue => venue.slug === slug);
};

export const getVenuesByDestination = (destinationSlug: string): Venue[] => {
  return venues.filter(venue => venue.destinationSlug === destinationSlug);
};

export const getVenuesByCategory = (category: string): Venue[] => {
  return venues.filter(venue => venue.category === category);
};

export const getFeaturedVenues = (): Venue[] => {
  return venues.filter(venue => venue.featured);
};

export const searchVenues = (query: string): Venue[] => {
  const lowerQuery = query.toLowerCase();
  return venues.filter(venue => 
    venue.name.toLowerCase().includes(lowerQuery) ||
    venue.shortDescription.toLowerCase().includes(lowerQuery) ||
    venue.tags.some(tag => tag.includes(lowerQuery)) ||
    venue.destinationSlug.includes(lowerQuery) ||
    venue.category.includes(lowerQuery)
  );
};

export const filterVenues = (filters: {
  destination?: string;
  category?: string;
  priceLevel?: number[];
  minRating?: number;
  query?: string;
}): Venue[] => {
  return venues.filter(venue => {
    if (filters.destination && venue.destinationSlug !== filters.destination) return false;
    if (filters.category && venue.category !== filters.category) return false;
    if (filters.priceLevel?.length && !filters.priceLevel.includes(venue.priceLevel)) return false;
    if (filters.minRating && venue.rating < filters.minRating) return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      if (!venue.name.toLowerCase().includes(q) && 
          !venue.shortDescription.toLowerCase().includes(q) &&
          !venue.tags.some(t => t.includes(q))) return false;
    }
    return true;
  });
};
