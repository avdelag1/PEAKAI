import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { User, Settings, Shield, Zap, Trophy, CreditCard, LogOut, ChevronRight, Sparkles, Brain, Clock, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import AvatarForge from '@/components/AvatarForge';
import { toast } from 'sonner';

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState('1 hour');

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const updateFrequency = (val: string) => {
    setFrequency(val);
    toast.success(`Neural check-in set to every ${val}`);
  };

  return (
    <PageShell className="pb-32">
      <header className="p-6 bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Protocol Status</h1>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="p-6 space-y-8 max-w-lg mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur opacity-30 group-hover:opacity-60 transition-opacity" />
            <div className="relative w-24 h-24 rounded-full bg-black border-2 border-primary/40 flex items-center justify-center overflow-hidden">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full peak-gradient border-2 border-black flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold">{user?.email?.split('@')[0] || 'Neural Candidate'}</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Tier: Ignition Phase</p>
          
          <Button 
            onClick={() => navigate('/pricing')}
            className="mt-6 h-10 px-6 rounded-full peak-gradient glow-pink text-[10px] font-bold uppercase tracking-widest"
          >
            Upgrade to Pro
          </Button>
        </div>

        {/* Future Identity Forge */}
        <AvatarForge />

        {/* Neural Pulse Settings */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Bell className="w-4 h-4" /> Neural Pulse Settings
          </h3>
          <div className="glass p-6 rounded-[2rem] border-white/5 bg-white/5 space-y-6">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4">Check-in Frequency</p>
              <div className="grid grid-cols-3 gap-2">
                {['1 hour', '3 hours', '5 hours'].map((val) => (
                  <button
                    key={val}
                    onClick={() => updateFrequency(val)}
                    className={`py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                      frequency === val 
                        ? 'peak-gradient text-white glow-pink' 
                        : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed italic">
                "The AI will wake up at this interval to listen to your progress and refine your reality."
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-6 rounded-3xl border-white/5 bg-white/5 text-center">
            <span className="text-2xl font-bold text-primary">14</span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Days Active</p>
          </div>
          <div className="glass p-6 rounded-3xl border-white/5 bg-white/5 text-center">
            <span className="text-2xl font-bold text-secondary">842</span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Phantom Wins</p>
          </div>
        </div>

        {/* System Permissions */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Shield className="w-4 h-4" /> Hardware Synchronization
          </h3>
          <div className="space-y-2">
            <Button 
              onClick={async () => {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                  toast.success('External Neural Pulse enabled.');
                } else {
                  toast.error('Notification permission denied.');
                }
              }}
              variant="outline" 
              className="w-full h-16 rounded-2xl border-white/5 bg-white/5 flex items-center justify-between px-6 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">System Notifications</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">For Phantom Wins</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>

            <Button 
              onClick={async () => {
                try {
                  await navigator.mediaDevices.getUserMedia({ audio: true });
                  toast.success('Microphone synchronization active.');
                } catch (err) {
                  toast.error('Microphone access denied.');
                }
              }}
              variant="outline" 
              className="w-full h-16 rounded-2xl border-white/5 bg-white/5 flex items-center justify-between px-6 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Audio Interface</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">For Neural Journal</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
          </div>
        </section>

        {/* Settings List */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">System</h3>
          
          <div className="space-y-2">
            {[
              { icon: Shield, label: 'Neural Security', color: 'text-blue-400' },
              { icon: Trophy, label: 'Achievement Hub', color: 'text-yellow-400' },
              { icon: CreditCard, label: 'Stripe Billing', color: 'text-emerald-400' },
            ].map((item) => (
              <button key={item.label} className="w-full glass p-5 rounded-2xl border-white/5 bg-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="flex-1 text-left font-medium text-sm">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        <Button 
          onClick={handleSignOut}
          variant="outline" 
          className="w-full h-14 rounded-2xl border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500/10 flex items-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Terminate Session
        </Button>
      </main>

      <BottomNav />
    </PageShell>
  );
};

export default Profile;
