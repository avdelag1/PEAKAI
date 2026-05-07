import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Target, Plus, Brain, ChevronRight, Zap, Trophy, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';

const Goals = () => {
  const navigate = useNavigate();

  const visions = [
    { 
      title: 'Liquid $10M Milestone', 
      progress: 65, 
      status: 'Synchronizing', 
      action: 'Visualized Payout',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop',
      color: 'from-primary/20'
    },
    { 
      title: 'Elite Physique: 10% BF', 
      progress: 42, 
      status: 'Manifesting', 
      action: '100g Protein Ingested',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop',
      color: 'from-secondary/20'
    },
    { 
      title: 'The Dream Villa', 
      progress: 12, 
      status: 'Seed Phase', 
      action: 'Browsed Listing',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2670&auto=format&fit=crop',
      color: 'from-accent/20'
    }
  ];

  return (
    <PageShell className="pb-32">
      <header className="p-6 bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Target className="text-primary w-6 h-6" />
            Visions
          </h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Claiming your future reality</p>
        </div>
        <Button 
          onClick={() => navigate('/goals/new')}
          size="icon" 
          className="rounded-2xl peak-gradient glow-pink"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </header>

      <main className="p-6 space-y-8 max-w-lg mx-auto">
        {/* Vision Grid */}
        <div className="grid grid-cols-1 gap-6">
          {visions.map((vision, i) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group glass rounded-[2.5rem] overflow-hidden border-white/5 bg-gradient-to-br ${vision.color} to-transparent`}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={vision.image} 
                  alt={vision.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-primary">
                    {vision.status}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold mb-4">{vision.title}</h4>
                
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Status</p>
                    <p className="text-sm font-bold text-primary uppercase tracking-tighter">{vision.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Sync</p>
                    <p className="text-sm font-bold text-white">{vision.progress}%</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${vision.progress}%` }}
                      className="h-full peak-gradient" 
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold tracking-widest gap-2 hover:bg-white/5">
                      <Trophy className="w-3 h-3 text-primary" /> Milestone
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold tracking-widest gap-2 hover:bg-white/5">
                      <ImageIcon className="w-3 h-3 text-primary" /> Detail
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{vision.action}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Suggestion */}
        <div className="glass p-8 rounded-[3rem] border-primary/20 bg-primary/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(228,0,124,0.15),transparent_70%)]" />
          <Brain className="w-10 h-10 text-primary mx-auto mb-4" />
          <h4 className="font-bold mb-2 uppercase tracking-widest">Expanding the Reality</h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-6 italic">
            "Your brain has adapted to the ARR milestone. I suggest activating the 'Global Expansion' signal pack."
          </p>
          <Button className="w-full h-14 rounded-2xl peak-gradient font-bold uppercase tracking-widest text-[10px]">
            Activate Suggestion
          </Button>
        </div>
      </main>

      <BottomNav />
    </PageShell>
  );
};

export default Goals;
