import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Search, label: "Search", path: "/search" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: Calendar, label: "Bookings", path: "/profile" },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomNav = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();

  return (
    <nav ref={ref} className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around py-2 pb-safe">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "fill-current")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

BottomNav.displayName = "BottomNav";

export default BottomNav;
