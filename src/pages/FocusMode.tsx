import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Zap, X, Shield, Lock, Brain, Trophy, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const FocusMode = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [showWin, setShowWin] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
        
        // Randomly trigger a Phantom Win every 2-3 minutes
        if (Math.random() > 0.99) {
          setShowWin(true);
          setTimeout(() => setShowWin(false), 5000);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
    toast.info('Reality Distortion Field Active.');
  };

  return (
    <PageShell className="bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-primary/10 rounded-full blur-[150px]" 
      />

      {/* Floating Win Notification (Phantom) */}
      <AnimatePresence>
        {showWin && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-6 right-6 z-[60] glass p-4 rounded-[1.5rem] border-primary/40 bg-primary/5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40">
              <DollarSign className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">STRIPE</p>
              <p className="text-sm font-bold text-white">Deposit of $2,000.00 confirmed</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="absolute top-10 left-0 right-0 flex justify-between px-10 items-center">
        <div className="flex items-center gap-2">
          <Shield className="text-primary w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Focus Mode</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="text-white/40 hover:text-white"
        >
          <X />
        </Button>
      </header>

      <main className="text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12"
        >
          <div className="relative inline-block">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-10 border border-white/5 rounded-full border-dashed"
             />
             <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-white tabular-nums">
               {formatTime(timeLeft)}
             </h1>
          </div>
        </motion.div>

        <div className="space-y-6">
          {!isActive ? (
            <Button 
              onClick={handleStart}
              className="h-20 px-16 rounded-[2.5rem] peak-gradient text-xl font-black uppercase tracking-[0.2em] glow-pink hover:scale-105 transition-transform"
            >
              Initiate Distortion
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest animate-pulse">
                <Zap className="w-4 h-4 fill-primary" /> Reality Distorted
              </div>
              <Button 
                variant="ghost"
                onClick={() => setIsActive(false)}
                className="text-white/20 hover:text-white uppercase tracking-widest text-[10px]"
              >
                End Session
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-center opacity-30">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Neural Sync: 98%</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-[8px] uppercase tracking-widest font-bold">2 Phantom Wins Fired</span>
        </div>
      </footer>
    </PageShell>
  );
};

export default FocusMode;
