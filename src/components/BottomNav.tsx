import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Target, Mic, Brain, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Zap, label: "Home", path: "/" },
  { icon: Target, label: "Goals", path: "/goals" },
  { icon: Mic, label: "Journal", path: "/journal" },
  { icon: Brain, label: "Signals", path: "/signals" },
  { icon: User, label: "Me", path: "/profile" },
];

const BottomNav = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();

  return (
    <nav 
      ref={ref} 
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5 md:hidden px-4 pb-safe pt-2 rounded-t-[2.5rem]"
    >
      <div className="flex items-center justify-around py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1.5 px-3 py-2 transition-all duration-300",
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-white"
              )}
            >
              <item.icon className={cn("h-6 w-6 transition-all", isActive && "drop-shadow-[0_0_8px_rgba(228,0,124,0.5)]")} />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

BottomNav.displayName = "BottomNav";

export default BottomNav;
