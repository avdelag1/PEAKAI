import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, MessageCircle, DollarSign, Instagram, Send } from 'lucide-react';

const SIGNALS = [
  { id: 1, type: 'Stripe', message: 'New Deposit: $2,500.00', sender: 'Payout Protocol', icon: DollarSign, color: 'text-green-400' },
  { id: 2, type: 'WhatsApp', message: 'Meeting confirmed with Tier 1 Partner', sender: 'Executive Assistant', icon: MessageCircle, color: 'text-blue-400' },
  { id: 3, type: 'System', message: 'Neural Sync: 98% Identity Alignment', sender: 'PEAK AI', icon: Zap, color: 'text-primary' },
  { id: 4, type: 'Instagram', message: 'New Follower: Strategic Influencer', sender: 'Social Pulse', icon: Instagram, color: 'text-pink-400' },
];

export const GlobalPulse = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SIGNALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const signal = SIGNALS[index];

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={signal.id}
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="glass mx-auto p-4 rounded-2xl border-white/10 bg-black/40 backdrop-blur-2xl flex items-center gap-4 shadow-2xl shadow-primary/10"
        >
          <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0`}>
            <signal.icon className={`w-5 h-5 ${signal.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">{signal.type} Pulse</span>
              <span className="text-[8px] font-bold text-primary animate-pulse">LIVE</span>
            </div>
            <p className="text-[11px] font-bold text-white truncate">{signal.message}</p>
            <p className="text-[9px] text-white/30 truncate uppercase tracking-widest">{signal.sender}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
