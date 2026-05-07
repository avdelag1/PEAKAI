import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { MessageCircle, Send, Instagram, Zap, DollarSign } from 'lucide-react';

interface PhantomToastProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  emoji?: string;
  source?: 'System' | 'WhatsApp' | 'Telegram' | 'Instagram' | 'Stripe';
  sender?: string;
  avatar?: string;
}

export const PhantomToast = ({ show, onClose, title, message, emoji, source = 'System', sender, avatar }: PhantomToastProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const getSourceStyles = () => {
    switch (source) {
      case 'WhatsApp': return { bg: 'bg-[#25D366]', icon: MessageCircle, brand: 'WhatsApp' };
      case 'Telegram': return { bg: 'bg-[#0088cc]', icon: Send, brand: 'Telegram' };
      case 'Instagram': return { bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]', icon: Instagram, brand: 'Instagram' };
      case 'Stripe': return { bg: 'bg-[#635bff]', icon: DollarSign, brand: 'Stripe' };
      default: return { bg: 'peak-gradient', icon: Zap, brand: 'Phantom PEAK' };
    }
  };

  const styles = getSourceStyles();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.9 }}
          className="fixed top-4 left-4 right-4 z-[100] flex justify-center pointer-events-none"
        >
          <div className="w-full max-w-sm glass rounded-[2rem] p-4 shadow-2xl border-white/10 pointer-events-auto active:scale-95 transition-transform">
            <div className="flex gap-4 items-center">
              {/* Icon/Avatar Container */}
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative", styles.bg)}>
                {avatar ? (
                  <img src={avatar} alt="Sender" className="w-full h-full rounded-2xl object-cover" />
                ) : (
                  <styles.icon className="text-white w-6 h-6" />
                )}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center border-2 border-black">
                   <span className="text-[10px]">{emoji || '✨'}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{styles.brand}</span>
                  <span className="text-[10px] text-muted-foreground">Now</span>
                </div>
                <h4 className="font-bold text-sm truncate text-white">{sender || title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
            
            {/* iOS Interaction Bar */}
            <div className="mt-3 h-1 w-12 bg-white/20 rounded-full mx-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
