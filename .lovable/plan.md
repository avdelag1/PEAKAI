
# Mercur Concierge App - Complete Build Plan

## Overview
Transform the current landing page into a fully functional luxury concierge application with search, browsing, venue details, user authentication, and booking capabilities.

---

## Phase 1: Core Pages and Navigation

### 1.1 Mobile Navigation Menu
Add a slide-out mobile menu using the Sheet component for the hamburger menu button.

### 1.2 Destination Detail Page
Create `/destination/:slug` route showing:
- Hero image with destination name and stats
- Grid of venues in that destination
- Filter by category (Nightclubs, Dining, Bars, etc.)
- Map placeholder for future integration

### 1.3 Venue Detail Page
Create `/venue/:id` route showing:
- Image gallery carousel
- Venue name, rating, location, and description
- Amenities and highlights
- Opening hours and dress code
- "Request Reservation" button
- Similar venues section

### 1.4 Search Results Page
Create `/search` route with:
- Search input at top
- Filter sidebar (destination, category, rating, price range)
- Results grid with venue cards
- Sort options (rating, popularity, distance)

---

## Phase 2: Data Architecture

### 2.1 Data Types and Mock Data
Create TypeScript types for:
- `Destination` - name, slug, country, image, description, venueCount
- `Venue` - id, name, destination, category, images, rating, description, amenities, hours, dressCode, priceLevel
- `Category` - id, name, icon, description

Create comprehensive mock data with 20+ venues across 4 destinations.

### 2.2 Data Hooks
Build custom hooks using React Query:
- `useDestinations()` - fetch all destinations
- `useDestination(slug)` - fetch single destination with venues
- `useVenues(filters)` - search and filter venues
- `useVenue(id)` - fetch single venue details
- `useFeaturedVenues()` - homepage featured venues

---

## Phase 3: Interactive Features

### 3.1 Search Functionality
- Real-time search with debouncing
- Search across venue names, destinations, and categories
- Popular searches auto-complete
- Recent searches (localStorage)

### 3.2 Filter System
Create reusable filter components:
- Category filter (multi-select)
- Price range slider
- Rating filter
- Destination filter
- Reset all filters button

### 3.3 Category Page
Create `/category/:slug` route showing all venues of a specific category across all destinations.

---

## Phase 4: User Experience Enhancements

### 4.1 Image Gallery Component
Carousel with:
- Full-screen modal view
- Thumbnail navigation
- Swipe gestures on mobile
- Keyboard navigation

### 4.2 Venue Cards
Enhanced venue cards with:
- Hover effects showing quick info
- Favorite button (heart icon)
- Quick view modal
- Category and price badges

### 4.3 Loading States
Add skeleton loaders matching the luxury aesthetic for:
- Destination cards
- Venue cards
- Detail pages

### 4.4 Testimonials Section
Add a testimonials/reviews section to the homepage with member quotes.

---

## Phase 5: Authentication and User Features

### 5.1 Authentication Pages
- Sign In page with email/password
- Sign Up page with membership tier selection
- Forgot Password flow

### 5.2 User Profile
- Profile page with avatar and details
- Saved favorites list
- Booking history (placeholder)
- Membership tier display

### 5.3 Favorites System
- Heart button on venue cards
- Save to localStorage initially
- Favorites page to view saved venues

---

## Phase 6: Booking and Contact

### 6.1 Reservation Request Modal
Modal form with:
- Date picker
- Party size selector
- Special requests textarea
- Contact information
- Submit with success toast notification

### 6.2 Contact/Support Page
- Contact form
- FAQ accordion
- 24/7 concierge messaging placeholder
- Social links

---

## File Structure

```text
src/
├── components/
│   ├── ui/                    (existing)
│   ├── layout/
│   │   ├── Header.tsx         (update)
│   │   ├── Footer.tsx         (existing)
│   │   └── MobileNav.tsx      (new)
│   ├── destinations/
│   │   ├── DestinationCard.tsx
│   │   ├── DestinationHero.tsx
│   │   └── DestinationGrid.tsx
│   ├── venues/
│   │   ├── VenueCard.tsx
│   │   ├── VenueGallery.tsx
│   │   ├── VenueDetails.tsx
│   │   └── VenueGrid.tsx
│   ├── search/
│   │   ├── SearchBar.tsx
│   │   ├── SearchFilters.tsx
│   │   └── SearchResults.tsx
│   ├── booking/
│   │   └── ReservationModal.tsx
│   └── auth/
│       ├── SignInForm.tsx
│       └── SignUpForm.tsx
├── pages/
│   ├── Index.tsx              (existing)
│   ├── Destination.tsx        (new)
│   ├── Venue.tsx              (new)
│   ├── Search.tsx             (new)
│   ├── Category.tsx           (new)
│   ├── SignIn.tsx             (new)
│   ├── SignUp.tsx             (new)
│   ├── Profile.tsx            (new)
│   ├── Favorites.tsx          (new)
│   └── Contact.tsx            (new)
├── data/
│   ├── types.ts               (new)
│   ├── destinations.ts        (new)
│   ├── venues.ts              (new)
│   └── categories.ts          (new)
├── hooks/
│   ├── useDestinations.ts     (new)
│   ├── useVenues.ts           (new)
│   ├── useSearch.ts           (new)
│   └── useFavorites.ts        (new)
└── lib/
    └── utils.ts               (existing)
```

---

## Routes to Add

| Route | Page | Description |
|-------|------|-------------|
| `/destination/:slug` | Destination | Browse venues in a destination |
| `/venue/:id` | Venue | Venue details and booking |
| `/search` | Search | Search results with filters |
| `/category/:slug` | Category | Venues by category |
| `/sign-in` | SignIn | User sign in |
| `/sign-up` | SignUp | User registration |
| `/profile` | Profile | User profile and settings |
| `/favorites` | Favorites | Saved venues |
| `/contact` | Contact | Contact and FAQ |

---

## Technical Implementation Notes

- All data will be mock data initially (easily replaceable with API/Supabase later)
- Use React Router for navigation with proper Link components
- Implement responsive design throughout (mobile-first)
- Maintain the luxury dark theme with gold accents consistently
- Use React Query for data fetching patterns (ready for real backend)
- LocalStorage for favorites and recent searches until backend is added
- Form validation using react-hook-form and zod
- Toast notifications for user feedback (already have sonner)

---

## Implementation Order

1. Data types and mock data (foundation)
2. Mobile navigation menu (quick win)
3. Search functionality on homepage
4. Destination detail page + routing
5. Venue detail page
6. Search results page with filters
7. Category pages
8. Favorites system (localStorage)
9. Reservation request modal
10. Auth pages (placeholder forms)
11. User profile and favorites page
12. Loading states and polish
