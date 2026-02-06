import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const categories = [
  { id: "home", label: "Home", path: "/" },
  { id: "experiences", label: "Experiences", path: "/category/experience" },
  { id: "beach-clubs", label: "Beach Clubs", path: "/category/beach-club" },
  { id: "restaurants", label: "Restaurants", path: "/category/restaurant" },
  { id: "nightlife", label: "Nightlife", path: "/category/nightclub" },
  { id: "wellness", label: "Wellness", path: "/category/wellness" },
];

interface CategoryTabsProps {
  activeTab?: string;
}

const CategoryTabs = ({ activeTab = "home" }: CategoryTabsProps) => {
  const [active, setActive] = useState(activeTab);
  const navigate = useNavigate();

  const handleTabClick = (category: typeof categories[0]) => {
    setActive(category.id);
    navigate(category.path);
  };

  return (
    <div className="px-4 py-4">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleTabClick(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
              active === category.id
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
