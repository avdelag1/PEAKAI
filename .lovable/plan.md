

# Mercur Concierge App - Completion Plan (Phase 2)

## Overview
The core functionality is in place. This phase focuses on completing missing features, improving navigation connections, adding polish with loading states, and enhancing the user experience for a production-ready app.

---

## What's Already Built
- All 10 pages (Index, Destination, Venue, Search, Category, Favorites, SignIn, SignUp, Profile, Contact)
- Mobile navigation with Sheet component
- 22 venues across 4 destinations with comprehensive mock data
- Search with destination, category, and rating filters
- Favorites system with localStorage persistence
- Reservation modal with form validation
- Testimonials section on homepage
- VenueCard with favorites and pricing badges

---

## Remaining Work

### 1. Fix Hero Section Search
The hero search bar on the homepage doesn't navigate anywhere when users click "Explore".

**Implementation:**
- Connect the search input to navigate to `/search?q={query}`
- Make popular search chips navigate to search with pre-filled query
- Add form submission handling

---

### 2. Add Loading/Skeleton States
Create luxury-themed skeleton loaders for a polished loading experience.

**Components to add:**
- `VenueCardSkeleton` - Animated placeholder matching VenueCard layout
- `DestinationCardSkeleton` - Placeholder for destination grid
- Skeleton states for Venue detail page during data load

**Styling:**
- Use `bg-gold/5` for skeleton background (matching luxury theme)
- Subtle shimmer animation with gold gradient

---

### 3. Enhanced Image Gallery
Improve the venue page image gallery with professional features.

**Features to add:**
- Lightbox/full-screen modal view
- Thumbnail navigation strip below main image
- Keyboard navigation (arrow keys, Escape to close)
- Touch swipe support on mobile (using existing embla-carousel)

---

### 4. Connect Footer Links
Footer destination and experience links use `#` placeholders.

**Implementation:**
- Destinations (Monaco, Dubai, etc.) link to `/destination/{slug}`
- Experiences (Nightclubs, Fine Dining, etc.) link to `/category/{slug}`

---

### 5. Make Category Cards Clickable
The CategoryCard component in CategoriesSection isn't linked to category pages.

**Implementation:**
- Add click handler or wrap in Link component
- Navigate to `/category/{category-slug}`

---

### 6. Add Price Range Filter to Search
The search page has destination, category, and rating filters but no price filter.

**Implementation:**
- Add price level selector ($ to $$$$)
- Update `filterVenues()` to support price filtering
- Display as button group matching existing filter UI

---

### 7. Add Sort Options to Search
Search results need sorting capability.

**Options:**
- Rating (High to Low)
- Price (Low to High / High to Low)
- Name (A-Z)

**Implementation:**
- Add sort dropdown or button group
- Sort results before rendering

---

### 8. Create Forgot Password Page
The Sign In page links to `/forgot-password` which doesn't exist.

**Implementation:**
- Create simple form with email input
- Show success message (placeholder for backend)
- Link back to Sign In

---

### 9. Quick View Modal for Venue Cards
Add a "quick peek" feature without navigating to full venue page.

**Implementation:**
- Add eye icon button on VenueCard hover
- Open modal with key venue info (images, rating, description)
- "View Full Details" button to navigate to venue page

---

## File Changes Summary

| Action | File | Description |
|--------|------|-------------|
| Modify | `src/components/HeroSection.tsx` | Add navigation on search |
| Create | `src/components/VenueCardSkeleton.tsx` | Skeleton loader component |
| Create | `src/components/DestinationCardSkeleton.tsx` | Skeleton loader component |
| Create | `src/components/VenueGalleryModal.tsx` | Full-screen lightbox |
| Modify | `src/pages/Venue.tsx` | Integrate gallery modal |
| Modify | `src/components/Footer.tsx` | Connect links to routes |
| Modify | `src/components/CategoryCard.tsx` | Make clickable |
| Modify | `src/components/CategoriesSection.tsx` | Pass link props |
| Modify | `src/pages/Search.tsx` | Add price filter + sort |
| Modify | `src/data/venues.ts` | Update filter function |
| Create | `src/pages/ForgotPassword.tsx` | Password reset form |
| Modify | `src/App.tsx` | Add forgot password route |
| Create | `src/components/VenueQuickView.tsx` | Quick view modal |
| Modify | `src/components/VenueCard.tsx` | Add quick view button |

---

## Technical Details

### Skeleton Components Pattern
```text
- Use Skeleton from ui/skeleton.tsx
- Match exact dimensions of real components
- Add custom gold-tinted background: bg-charcoal/50
- Apply shimmer animation class from index.css
```

### Gallery Modal Implementation
```text
- Use Dialog component for modal wrapper
- Embed embla-carousel for swiping
- Add keyboard event listeners for arrow keys
- Thumbnail strip using horizontal scroll
```

### Search Enhancements
```text
- Price filter: array of selected price levels [1,2,3,4]
- Sort: new URL param 'sort' with values rating|price-low|price-high|name
- Update filterVenues to accept priceLevel array
```

---

## Implementation Order

1. Hero section search navigation (quick fix)
2. Footer link connections (quick fix)
3. CategoryCard links (quick fix)
4. Forgot Password page (new route)
5. Price filter in search
6. Sort options in search
7. Skeleton components
8. Gallery lightbox modal
9. Quick view modal (optional enhancement)

---

## Estimated Complexity

- **Quick fixes (1-4):** 4 files, minimal changes
- **Search enhancements (5-6):** 2 files, moderate logic
- **Skeleton states (7):** 2 new components
- **Gallery modal (8):** 1 new component + integration
- **Quick view (9):** 1 new component + VenueCard update

