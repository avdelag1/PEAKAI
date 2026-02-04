import { Category } from './types';

export const categories: Category[] = [
  {
    id: 'nightclub',
    name: 'Nightclubs',
    icon: 'Music',
    description: 'World-renowned clubs with legendary DJs and unforgettable nights',
  },
  {
    id: 'restaurant',
    name: 'Fine Dining',
    icon: 'UtensilsCrossed',
    description: 'Michelin-starred restaurants and exclusive culinary experiences',
  },
  {
    id: 'bar',
    name: 'Cocktail Bars',
    icon: 'Wine',
    description: 'Sophisticated lounges with expert mixologists',
  },
  {
    id: 'lounge',
    name: 'Lounges',
    icon: 'Sofa',
    description: 'Intimate settings for refined conversations and premium spirits',
  },
  {
    id: 'beach-club',
    name: 'Beach Clubs',
    icon: 'Umbrella',
    description: 'Exclusive beachfront venues with cabanas and bottle service',
  },
  {
    id: 'yacht',
    name: 'Yacht Charters',
    icon: 'Anchor',
    description: 'Private yacht experiences on crystal-clear waters',
  },
  {
    id: 'experience',
    name: 'Experiences',
    icon: 'Sparkles',
    description: 'Curated adventures and one-of-a-kind moments',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.id === slug);
};
