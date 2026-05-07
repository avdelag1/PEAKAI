import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { PhantomToast, type PhantomSignal } from '@/components/ui/PhantomToast';
import { 
  Brain, 
  Zap, 
  Trophy, 
  Mic, 
  ChevronRight, 
  Plus, 
  Send,
  MoreVertical,
  CheckCircle2,
  Bell,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { toast } from 'sonner';
import { useNavigate, Route } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import NeuralSyncGraph from '@/components/NeuralSyncGraph';
import FocusMode from "./pages/FocusMode";
import ProtectedRoute from "./components/ProtectedRoute";

const Dashboard = () => {
  const [score, setScore] = useState(6.5);
  const [activeSignal, setActiveSignal] = useState<PhantomSignal | null>(null);
  const navigate = useNavigate();

  const phantomTemplates = [
    { id: '1', title: 'STRIPE PAYOUT', message: 'Deposit of $12,450.00 confirmed.', emoji: '💰' },
    { id: '2', title: 'NEW MATCH', message: 'Someone high-value just liked you.', emoji: '🔥' },
    { id: '3', title: 'FAT LOSS', message: 'Body fat dropped by 0.8% this week.', emoji: '💪' },
    { id: '4', title: 'DEEP WORK', message: 'You reached 4 hours of flow state.', emoji: '🧠' },
  ];

  const triggerSignal = (template: typeof phantomTemplates[0]) => {
    setActiveSignal(template);
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    // Sound would play here
  };

  return (
    <PageShell className="pb-32">
      {/* Phantom Signal Toast */}
      <PhantomToast 
        signal={activeSignal} 
        onDismiss={() => setActiveSignal(null)} 
      />

      <header className="p-6 flex justify-between items-center bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg peak-gradient flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">PEAK</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="w-5 h-5" />
          </Button>
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
            <User className="w-6 h-6 text-primary" />
          </div>
        </div>
      </header>

      <main className="p-6 space-y-8 max-w-lg mx-auto">
        {/* Future Self Score Ring */}
        <section className="relative flex flex-col items-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                className="text-white/5"
              />
              <motion.circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 110}
                initial={{ strokeDashoffset: 2 * Math.PI * 110 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 110 * (1 - score / 10) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-primary"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Neural Score</span>
              <motion.span 
                key={score}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl font-bold font-mono"
              >
                {score.toFixed(1)}
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-2">Active Protocol</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button 
              onClick={() => setScore(s => Math.max(0, Number((s - 0.5).toFixed(1))))}
              variant="outline" 
              size="sm" 
              className="h-10 px-4 rounded-xl border-white/5 bg-white/5"
            >
              - 0.5
            </Button>
            <Button 
              onClick={() => setScore(s => Math.min(10, Number((s + 0.5).toFixed(1))))}
              variant="outline" 
              size="sm" 
              className="h-10 px-4 rounded-xl border-white/5 bg-white/5"
            >
              + 0.5
            </Button>
          </div>

          {/* Neural Sync Visualization */}
          <div className="w-full mt-6">
            <NeuralSyncGraph />
            <p className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">
              Neural Alignment: <span className="text-primary font-bold">Synchronizing...</span>
            </p>
          </div>
        </section>

        {/* Send Phantom Signal Button */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full h-20 rounded-[2rem] peak-gradient glow-pink text-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform">
              <Zap className="w-6 h-6 fill-white" />
              SEND PHANTOM SIGNAL
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-background border-white/10 px-6 pb-12">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold">Neural Ignition Pack</DrawerTitle>
            </DrawerHeader>
            <div className="grid grid-cols-1 gap-3 mt-4">
              {phantomTemplates.map(template => (
                <Button
                  key={template.id}
                  onClick={() => triggerSignal(template)}
                  variant="outline"
                  className="h-20 rounded-2xl border-white/5 bg-white/5 flex items-center justify-start gap-4 px-6 hover:bg-primary/10 hover:border-primary/30 group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{template.emoji}</span>
                  <div className="text-left">
                    <p className="font-bold">{template.title}</p>
                    <p className="text-xs text-muted-foreground">{template.message}</p>
                  </div>
                </Button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>

        {/* Activation Cards */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Today's Activation</h3>
            <Button variant="ghost" size="sm" className="text-primary font-bold">View Protocol</Button>
          </div>
          
          <div className="glass p-6 rounded-[2rem] border-white/5 bg-white/5 flex items-center gap-4 group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/30 shrink-0">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Keystone Repetition</h4>
              <p className="text-sm text-muted-foreground">Perform 10 minute future-self visualization.</p>
            </div>
            <ChevronRight className="text-muted-foreground w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </section>

        {/* Goals Summary */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Active Protocols</h3>
            <Plus className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['Wealth', 'Body', 'Status'].map(goal => (
              <div key={goal} className="glass min-w-[140px] p-5 rounded-3xl border-white/5 bg-white/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-3 border border-secondary/30">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <p className="font-bold text-sm">{goal}</p>
                <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-secondary" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 px-6">
          <Button 
            onClick={() => navigate('/focus')}
            className="w-full h-20 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-between px-8 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Shield className="text-primary w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Enter Focus Mode</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Distort Reality</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
          </Button>
        </section>
      </main>

      {/* Floating Mic FAB */}
      <Button className="fixed bottom-24 right-6 w-16 h-16 rounded-full peak-gradient shadow-2xl glow-pink z-50 flex items-center justify-center group active:scale-90 transition-transform">
        <Mic className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Bottom Nav */}
      <BottomNav />
    </PageShell>
  );
};

const User = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Target = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;

export default Dashboard;
