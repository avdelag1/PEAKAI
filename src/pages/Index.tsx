import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Zap, Trophy, ArrowRight, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Dashboard from './Dashboard';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Dashboard />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent opacity-50 pointer-events-none" />

      <main className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
            Fake it until you make it
          </span>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Fake the win. <br />
            <span className="gradient-text">Activate the brain.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-10"
          >
            Reach your <span className="text-foreground">PEAK</span> with the world's first phantom neural activation protocol.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => navigate('/auth')}
              size="lg" 
              className="peak-gradient h-14 px-10 rounded-2xl text-lg font-bold glow-pink hover:scale-105 transition-transform"
            >
              Start Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => navigate('/auth')}
              variant="outline" 
              size="lg" 
              className="h-14 px-10 rounded-2xl border-primary/20 bg-primary/5 text-lg font-medium hover:bg-primary/10"
            >
              Sign In
            </Button>
          </motion.div>
        </div>

        {/* iOS Notification Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto mb-24"
        >
          <div className="glass p-4 rounded-[2.5rem] relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-[2rem] p-4 border border-white/5">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                <Bell className="text-primary w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold tracking-tight">BANKING</span>
                  <span className="text-[10px] text-muted-foreground">now</span>
                </div>
                <p className="text-sm font-bold text-white mb-0.5">Bank Deposit $10,000</p>
                <p className="text-xs text-muted-foreground">from STRIPE PAYOUTS</p>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4 italic">Phantom signals rewire your neural pathways.</p>
        </motion.div>

        {/* P.E.A.K. Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { icon: Sparkles, title: 'Presence', color: 'text-primary', desc: 'Become the observer of your reality.' },
            { icon: Brain, title: 'Emotion', color: 'text-secondary', desc: 'Feel the win before it happens.' },
            { icon: Zap, title: 'Activation', color: 'text-accent', desc: 'Daily keystone actions that compound.' },
            { icon: Trophy, title: 'Keystone Repetition', color: 'text-primary', desc: 'Constant phantom reinforcement.' },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/40 transition-colors"
            >
              <pillar.icon className={`${pillar.color} w-10 h-10 mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Next Footer Card */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-3xl font-bold mb-6">Phase 1: Neural Ignition</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We're building the first-ever neural dashboard. 
            Custom signals, future-self tracking, and deep focus mode.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Coming soon
          </div>
        </motion.div>
      </main>

      {/* Bottom Nav Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/5 py-4 px-8 flex justify-around items-center rounded-t-[2.5rem]">
        <Button variant="ghost" size="icon" className="text-primary"><Zap /></Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground"><Brain /></Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground"><Trophy /></Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground"><Sparkles /></Button>
      </div>
    </div>
  );
};

export default Index;
