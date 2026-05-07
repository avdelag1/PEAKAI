import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/ui/PageShell';
import { Sparkles, Brain, Zap, Trophy, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const slides = [
  {
    title: 'Presence',
    icon: Sparkles,
    color: 'text-primary',
    bg: 'bg-primary/10',
    description: 'The observer effect. By simply acknowledging your current state without judgment, you begin the process of detachment from the animal brain.',
    detail: 'Presence is the anchor. You cannot rewire what you cannot see.'
  },
  {
    title: 'Emotion',
    icon: Brain,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    description: 'Neural pathways are paved with high-vibration emotion. Feel the victory as if it has already happened. The brain does not know the difference.',
    detail: 'Phantom signals trigger the same dopamine spikes as real wins.'
  },
  {
    title: 'Activation',
    icon: Zap,
    color: 'text-accent',
    bg: 'bg-accent/10',
    description: 'Keystone actions that lock in the new identity. Small, repeating gestures that signal your commitment to the PEAK protocol.',
    detail: 'Every signal sent is a vote for your future self.'
  },
  {
    title: 'Keystone Repetition',
    icon: Trophy,
    color: 'text-primary',
    bg: 'bg-primary/10',
    description: 'Consistency is the ultimate brain hack. By bombarding the subconscious with phantom wins, you force your reality to catch up.',
    detail: 'Ready to declare your first goal?'
  }
];

const Onboarding = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleNext = async () => {
    if (!emblaApi) return;
    if (selectedIndex === slides.length - 1) {
      // Finalize onboarding
      if (user) {
        await supabase
          .from('profiles')
          .update({ onboarded_at: new Date().toISOString() })
          .eq('id', user.id);
      }
      navigate('/goals/new');
    } else {
      emblaApi.scrollNext();
    }
  };

  return (
    <PageShell className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 relative overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={selectedIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg space-y-8"
              >
                <div className={`inline-flex p-8 rounded-[3rem] ${slide.bg} mb-4 relative group`}>
                  <div className="absolute inset-0 bg-primary/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <slide.icon className={`w-20 h-20 ${slide.color} relative z-10`} />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                <div className="glass p-6 rounded-3xl border-white/5 bg-white/5 italic text-sm text-primary/80">
                  "{slide.detail}"
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-8 pb-safe bg-background/80 backdrop-blur-md border-t border-white/5 relative z-20">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i ? 'w-8 bg-primary' : 'w-2 bg-white/10'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={handleNext}
            size="lg"
            className="peak-gradient h-14 px-8 rounded-2xl text-lg font-bold glow-pink flex items-center gap-2 group"
          >
            {selectedIndex === slides.length - 1 ? 'Get Started' : 'Next'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Triune Brain Visual Overlay (Decorative) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-5 flex flex-col items-center">
        <Brain className="w-96 h-96" />
        <span className="text-[100px] font-bold mt-[-50px]">PEAK</span>
      </div>
    </PageShell>
  );
};

export default Onboarding;
