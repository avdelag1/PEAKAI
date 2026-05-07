import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { PhantomToast, type PhantomSignal } from "@/components/ui/PhantomToast";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Destination from "./pages/Destination";
import Venue from "./pages/Venue";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Coach from "./pages/Coach";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import GoalWizard from "./pages/GoalWizard";
import SignalsLab from "./pages/SignalsLab";
import Journal from "./pages/Journal";
import Goals from "./pages/Goals";
import Pricing from "./pages/Pricing";
import SignalCreator from "./pages/SignalCreator";
import FocusMode from "./pages/FocusMode";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const AppContent = () => {
  const [activePulse, setActivePulse] = useState<PhantomSignal | null>(null);

  useEffect(() => {
    // Neural Pulse: Fires a random "Win" occasionally
    const triggerRandomWin = () => {
      const wins = [
        { id: 'p1', title: 'STRIPE PAYOUT', message: 'New deposit of $2,500.00 confirmed.', emoji: '💰', source: 'Stripe' as const },
        { id: 'p2', title: 'New Match!', message: 'Someone high-value is interested in you.', emoji: '❤️', source: 'Instagram' as const },
        { id: 'p3', title: 'Brain Sync', message: 'Neural focus at 98% efficiency.', emoji: '🧠', source: 'System' as const },
      ];
      const win = wins[Math.floor(Math.random() * wins.length)];
      setActivePulse(win);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.8) triggerRandomWin();
    }, 60000); // Check every 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PhantomToast signal={activePulse} onDismiss={() => setActivePulse(null)} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destination/:slug" element={<Destination />} />
        <Route path="/venue/:slug" element={<Venue />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/goals/new" element={<ProtectedRoute><GoalWizard /></ProtectedRoute>} />
        <Route path="/signals" element={<ProtectedRoute><SignalsLab /></ProtectedRoute>} />
        <Route path="/signals/create" element={<ProtectedRoute><SignalCreator /></ProtectedRoute>} />
        <Route path="/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/focus" element={<ProtectedRoute><FocusMode /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
