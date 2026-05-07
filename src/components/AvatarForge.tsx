import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw, CheckCircle2, Crown, Camera } from 'lucide-react';
import { toast } from 'sonner';

const AvatarForge = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasAvatar, setHasAvatar] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasAvatar(true);
      toast.success('Future Identity Synchronized.');
    }, 4000);
  };

  return (
    <div className="glass p-8 rounded-[3rem] border-white/5 relative overflow-hidden group mb-8">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <Crown className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Future Identity Forge</h3>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Neural Visualization (Pro)</p>
        </div>
      </div>

      <div className="aspect-square rounded-[2rem] bg-black/40 border border-white/5 mb-6 flex items-center justify-center relative overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {!hasAvatar && !isGenerating ? (
            <motion.div 
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center p-8"
            >
              <Camera className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground italic font-serif">
                "Visualization is the first step of manifestation."
              </p>
            </motion.div>
          ) : hasAvatar && !isGenerating ? (
            <motion.div 
              key="avatar"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Future Self" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Identity Synced
                </div>
                <p className="text-2xl font-black text-white tracking-tight leading-tight">THE ASCENSION <br/>VERSION</p>
              </div>
            </motion.div>
          ) : null}

          {isGenerating && (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
            >
              <RefreshCw className="w-10 h-10 text-primary animate-spin mb-4 shadow-[0_0_20px_rgba(255,46,126,0.3)]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] animate-pulse text-white">Analyzing Neural Goals...</p>
              <p className="text-[10px] text-muted-foreground mt-2">Constructing visual manifestation from your vision board.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button 
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full h-14 rounded-2xl peak-gradient glow-pink uppercase font-bold tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95"
      >
        <Sparkles className="w-5 h-5" />
        {hasAvatar ? 'Regenerate Identity' : 'Forge Future Self'}
      </Button>
    </div>
  );
};

export default AvatarForge;
