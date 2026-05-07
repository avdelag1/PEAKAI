import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Brain, Target, Zap, Shield, Crown, MessageSquare, Terminal, History, ChevronRight } from 'lucide-react';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import { useAI } from '@/hooks/useAI';

const Coach = () => {
  const { messages, isLoading, sendMessage } = useAI();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    const msg = input;
    setInput('');
    await sendMessage(msg);
  };

  return (
    <PageShell className="bg-[#050505] min-h-screen flex flex-col">
      <header className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl peak-gradient flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight">NEURAL COACH</h1>
            <p className="text-[10px] text-primary uppercase tracking-[0.2em]">Operational Mode</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-white/40">
          <History className="w-5 h-5" />
        </Button>
      </header>

      <main 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 pb-40 scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {messages.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                <Brain className="w-24 h-24 text-primary relative z-10 animate-pulse" />
              </div>
              <div className="max-w-xs space-y-3">
                <h2 className="text-2xl font-black italic tracking-tighter">PHANTOM INTEL</h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  The Neural Coach is online. Present your reality claims or seek protocol optimization.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
                {[
                  "Optimize my morning routine",
                  "Review my reality claims",
                  "Initiate focus protocol"
                ].map((suggestion) => (
                  <Button 
                    key={suggestion}
                    variant="outline"
                    onClick={() => setInput(suggestion)}
                    className="h-14 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 text-left justify-start px-6 text-xs font-bold uppercase tracking-wider"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </motion.div>
          ) : (
            messages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-5 rounded-3xl ${
                    message.role === 'user' 
                      ? 'peak-gradient text-white font-bold shadow-lg shadow-primary/20' 
                      : 'bg-white/5 border border-white/10 text-white/90'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <div className={`mt-2 flex items-center gap-1 opacity-40 text-[10px] ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'user' ? <Terminal className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                    <span>{message.role === 'user' ? 'INPUT_ACCEPTED' : 'NEURAL_GEN'}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Processing...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="p-6 pb-safe bg-black/80 backdrop-blur-xl border-t border-white/5 fixed bottom-16 left-0 right-0 z-40">
        <form onSubmit={handleSend} className="max-w-lg mx-auto relative flex gap-3">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="TYPE YOUR CLAIM..."
            className="h-16 rounded-3xl bg-white/5 border-white/10 pl-8 pr-14 focus:border-primary/50 text-xs font-bold tracking-widest uppercase"
          />
          <Button 
            type="submit"
            disabled={isLoading || !input.trim()}
            size="icon"
            className="h-16 w-16 rounded-3xl peak-gradient glow-pink shrink-0 active:scale-95 transition-transform"
          >
            <Send className="w-6 h-6" />
          </Button>
        </form>
      </div>

      <BottomNav />
    </PageShell>
  );
};

export default Coach;
