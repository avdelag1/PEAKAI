import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-lg font-serif font-semibold tracking-wide text-foreground">
              TULUM LOCAL
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to={user ? "/profile" : "/sign-in"}>
              <Button variant="ghost" size="icon" className="rounded-full bg-muted">
                <User className="h-5 w-5 text-foreground/70" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
