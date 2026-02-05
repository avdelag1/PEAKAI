import { Wine, Music, Utensils, Sparkles, Plane, Gem } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    icon: Music,
    title: "Nightclubs",
    description: "Access to the world's most exclusive clubs with VIP tables and priority entry.",
    count: 500,
     slug: "nightclub",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Michelin-starred restaurants and hidden culinary gems with reserved tables.",
    count: 850,
     slug: "restaurant",
  },
  {
    icon: Wine,
    title: "Rooftop Bars",
    description: "Elevated experiences at the most stunning rooftop venues across the globe.",
    count: 320,
     slug: "bar",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    description: "Exclusive access to fashion shows, art exhibitions, and VIP parties.",
    count: 200,
     slug: "experience",
  },
  {
    icon: Plane,
    title: "Yacht & Jets",
    description: "Luxury transportation and unforgettable experiences on water and in the sky.",
    count: 150,
     slug: "yacht",
  },
  {
    icon: Gem,
    title: "Wellness & Spa",
    description: "World-renowned spas and wellness retreats for ultimate relaxation.",
    count: 280,
     slug: "lounge",
  },
];

const CategoriesSection = () => {
  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider mb-4 block">
            Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What We <span className="text-gradient-gold">Curate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From exclusive nightlife to intimate dining experiences, we connect you with the finest venues and services worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
