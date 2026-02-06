

# TULUM LOCAL - Mobile-First Redesign

## Overview
Transform the current "THE TULUM EXPERT" website into "TULUM LOCAL" with a mobile-first design inspired by the provided reference images. The new design will feature a clean, card-based interface with a prominent sunset beach background, personalized greeting, and a mobile app-style navigation.

---

## Key Design Changes

### Visual Style (From Reference Images)
- **Clean white/cream background** with rounded card overlays
- **Large hero image** covering upper portion with search overlay
- **Personalized greeting** ("Hey, there! Tell us where you want to go")
- **Pill-shaped category tabs** (Home, Experiences, Services)
- **Rounded venue cards** with large images, heart favorites, ratings, and pricing
- **Mobile bottom navigation bar** with icons (Search, Favorites, Bookings, Profile)
- **Minimal header** - just logo and user avatar

### Brand Update
- Name: **TULUM LOCAL**
- Background: Replace current hero with **Tulum sunset beach image**
- Maintain the warm, earthy color palette already in place

---

## File Changes

### 1. Replace Hero Background Image
- Generate/add a new **Tulum sunset beach** image as `src/assets/hero-tulum-sunset.jpg`
- This will be the prominent visual element covering the top portion of the home screen

### 2. Update Header Component (`src/components/Header.tsx`)
- Change brand name to **"TULUM LOCAL"**
- Simplify to minimal header with logo on left, user avatar on right
- Remove desktop navigation links (move to bottom nav for mobile-first design)
- Add notification bell icon

### 3. Redesign Hero Section (`src/components/HeroSection.tsx`)
- Full-width sunset beach image covering ~60% of viewport height
- Overlay with personalized greeting: "Hey, there! Tell us where you want to go"
- Floating rounded search bar with icon: "Search places"
- Remove the current scroll indicator

### 4. Create Category Tabs Component
- New component: `src/components/CategoryTabs.tsx`
- Horizontal scrollable pill-shaped tabs (Home, Experiences, Services, Beach Clubs, etc.)
- Positioned below the hero section

### 5. Update Venue Cards (`src/components/VenueCard.tsx`)
- Increase image height ratio (4:5 instead of 4:3)
- Larger rounded corners (2xl)
- Heart button in top-right with white/filled styling
- Show rating with star, guest capacity, and nightly price
- Cleaner typography with less text

### 6. Redesign Featured Section (`src/components/FeaturedVenuesSection.tsx`)
- Section title: "The most relevant" (matching reference)
- Horizontal scroll on mobile, grid on desktop
- Remove the "View All" button, integrate into tabs

### 7. Create Mobile Bottom Navigation
- New component: `src/components/BottomNav.tsx`
- Fixed to bottom of screen on mobile
- Icons: Search (magnifier), Favorites (heart), Bookings (calendar), Messages/Profile (user)
- Active state indicator

### 8. Simplify/Remove Sections
- Remove or hide on mobile: TestimonialsSection, CTASection
- Simplify DestinationsSection to "Discover new places" horizontal scroll
- Remove CategoriesSection (replaced by tabs)

### 9. Update Index Page (`src/pages/Index.tsx`)
- New layout order:
  1. Minimal Header
  2. Hero with sunset + greeting + search
  3. Category Tabs
  4. "The most relevant" venues
  5. "Discover new places" destinations
  6. Bottom Navigation (mobile)
  7. Footer (desktop only)

### 10. Update Global Styles (`src/index.css`)
- Adjust card styling for more rounded corners
- Update glass-card effect for search bar overlay
- Ensure warm cream/beige background remains

### 11. Update Footer & Mobile Nav
- `src/components/Footer.tsx`: Update brand name to "TULUM LOCAL"
- `src/components/MobileNav.tsx`: Update brand name (though may be replaced by bottom nav)

---

## Component Architecture

```text
Index Page (Mobile-First Layout)
├── Header (minimal: logo + avatar)
├── HeroSection
│   ├── Sunset Beach Background Image
│   ├── Greeting Text Overlay
│   └── Floating Search Bar
├── CategoryTabs (horizontal scroll)
├── FeaturedVenuesSection ("The most relevant")
│   └── VenueCard (redesigned)
├── DestinationsSection ("Discover new places")
│   └── DestinationCard (horizontal scroll)
├── Footer (hidden on mobile)
└── BottomNav (fixed, mobile only)
```

---

## Technical Details

### Hero Section Redesign
- Full-width image with aspect ratio ~16:10 on mobile
- Gradient overlay: transparent to white at bottom
- Greeting positioned at bottom of image area
- Search bar: white rounded pill with shadow, positioned just below greeting

### Bottom Navigation Implementation
- Fixed position at bottom (`fixed bottom-0 left-0 right-0`)
- White background with subtle top shadow
- 4 icon buttons with labels
- Hide on desktop (`md:hidden`)
- Add padding to main content to account for nav height

### Venue Card Updates
- Border radius: `rounded-2xl`
- Image: `aspect-[4/5]` with `rounded-t-2xl`
- Heart: white circle background, positioned `top-4 right-4`
- Content: title, rating with star, beds/guests info, price per night
- Shadow: subtle drop shadow for card elevation

### Category Tabs
- Horizontal scroll container with hidden scrollbar
- Pills: `rounded-full`, dark fill for active, outline for inactive
- Gap between pills: 8px
- Padding: horizontal 16px

---

## Implementation Order

1. Generate Tulum sunset beach hero image
2. Update Header with new brand name and minimal design
3. Redesign HeroSection with new layout
4. Create CategoryTabs component
5. Update VenueCard styling
6. Update FeaturedVenuesSection
7. Create BottomNav component
8. Update Index page layout
9. Update Footer brand name
10. Hide unnecessary sections on mobile
11. Final polish and responsive adjustments

