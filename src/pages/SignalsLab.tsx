import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhantomToast, type PhantomSignal } from '@/components/ui/PhantomToast';
import { 
  Zap, 
  Search, 
  Plus, 
  Flame, 
  Trophy, 
  Heart, 
  Drip, 
  Sparkles, 
  ArrowLeft,
  Settings2,
  Play,
  Clock,
  ThumbsUp,
  Smile,
  ZapOff
} from 'lucide-react';
import { toast } from 'sonner';
import BottomNav from '@/components/BottomNav';

const packs = [
  { id: 'wealth', title: 'Wealth Explosion', emoji: '💰', color: 'text-primary' },
  { id: 'dating', title: 'Magnetic Dating', emoji: '❤️', color: 'text-secondary' },
  { id: 'body', title: 'Body Transformation', emoji: '💪', color: 'text-accent' },
  { id: 'focus', title: 'Deep Focus', emoji: '🧠', color: 'text-primary' },
  { id: 'freedom', title: 'Nicotine Freedom', emoji: '🚭', color: 'text-secondary' },
];

const history = [
  { id: 'h1', title: 'Bank Deposit $10,000', message: 'Stripe Payout complete', sent_at: '2m ago', reaction: '🔥' },
  { id: 'h2', title: 'Body Fat: 10.2%', message: 'Bio-feedback synced', sent_at: '1h ago', reaction: '✅' },
  { id: 'h3', title: 'Deep Work: 4h', message: 'Flow state achieved', sent_at: '3h ago', reaction: '🧠' },
];

const SignalsLab = () => {
  const navigate = useNavigate();
  const [activeSignal, setActiveSignal] = useState<PhantomSignal | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPack, setSelectedPack] = useState('wealth');

  const triggerPreview = (title: string, message: string, emoji: string) => {
    setActiveSignal({ id: 'preview', title, message, emoji });
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  };

  return (
    <PageShell className="pb-24">
      <PhantomToast signal={activeSignal} onDismiss={() => setActiveSignal(null)} />

      <header className="p-6 bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" className="text-muted-foreground"><ArrowLeft /></Button>
          <h1 className="text-2xl font-bold">Signals Lab</h1>
          <div className="ml-auto flex items-center gap-2">
             <Button variant="ghost" size="icon" className="text-muted-foreground"><Settings2 /></Button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search neural triggers..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-12 h-14 rounded-2xl bg-black/40 border-white/10"
          />
        </div>
      </header>

      <main className="p-6 space-y-10 max-w-lg mx-auto">
        {/* Pack Browser */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Phantom Packs</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {packs.map(pack => (
              <button
                key={pack.id}
                onClick={() => setSelectedPack(pack.id)}
                className={`flex flex-col items-center gap-2 min-w-[100px] glass p-4 rounded-3xl border-white/5 transition-all ${
                  selectedPack === pack.id ? 'border-primary bg-primary/10' : 'bg-white/5 opacity-60'
                }`}
              >
                <span className="text-3xl">{pack.emoji}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{pack.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Templates</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/signals/create')}
              className="text-muted-foreground text-xs font-bold flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Custom
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { title: 'STRIPE PAYOUT', message: 'Deposit of $5,000.00 confirmed.', emoji: '💰' },
              { title: 'CLIENT SIGNED', message: 'New contract for $12k/mo active.', emoji: '✍️' },
              { title: 'VIRAL ALERT', message: 'Your post reached 100k impressions.', emoji: '📈' },
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => triggerPreview(t.title, t.message, t.emoji)}
                className="glass p-5 rounded-[1.5rem] border-white/5 bg-white/5 flex items-center gap-4 cursor-pointer hover:bg-white/10 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <span className="text-2xl">{t.emoji}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm uppercase tracking-wide">{t.title}</h4>
                  <p className="text-xs text-muted-foreground">{t.message}</p>
                </div>
                <Play className="w-4 h-4 text-primary opacity-40" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Neural History */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Clock className="w-4 h-4" /> Neural History
          </h3>
          <div className="space-y-3">
            {history.map(item => (
              <div key={item.id} className="glass p-5 rounded-[1.5rem] border-white/5 bg-white/5/30 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <span className="text-[10px] text-muted-foreground uppercase">{item.sent_at}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{item.message}</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs flex items-center gap-2 hover:bg-primary/20 hover:border-primary/40 transition-colors">
                    {item.reaction} Reinforce
                  </button>
                  <button className="p-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white transition-colors">
                    <Smile className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </PageShell>
  );
};

export default SignalsLab;
