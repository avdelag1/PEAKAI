import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhantomToast } from '@/components/ui/PhantomToast';
import { MessageCircle, Send, Instagram, Zap, DollarSign, Image as ImageIcon, Sparkles, Save } from 'lucide-react';
import { toast } from 'sonner';
import BottomNav from '@/components/BottomNav';

const SignalCreator = () => {
  const [source, setSource] = useState<'System' | 'WhatsApp' | 'Telegram' | 'Instagram' | 'Stripe'>('WhatsApp');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [emoji, setEmoji] = useState('✨');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const platforms = [
    { id: 'WhatsApp', icon: MessageCircle, color: 'bg-[#25D366]' },
    { id: 'Telegram', icon: Send, color: 'bg-[#0088cc]' },
    { id: 'Instagram', icon: Instagram, color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]' },
    { id: 'Stripe', icon: DollarSign, color: 'bg-[#635bff]' },
    { id: 'System', icon: Zap, color: 'peak-gradient' },
  ];

  const handleSave = () => {
    toast.success('Signal saved to your Neural Library!');
  };

  return (
    <PageShell className="pb-32">
      <header className="p-6 bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-primary w-6 h-6" />
          Signal Creator
        </h1>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Design your win</p>
      </header>

      <main className="p-6 space-y-8 max-w-lg mx-auto">
        {/* Platform Selection */}
        <div className="space-y-4">
          <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Choose Platform</Label>
          <div className="flex justify-between gap-2">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setSource(p.id as typeof source)}
                className={`flex-1 aspect-square rounded-2xl flex items-center justify-center transition-all ${
                  source === p.id ? `${p.color} scale-110 shadow-lg` : 'bg-white/5 grayscale opacity-50'
                }`}
              >
                <p.icon className="text-white w-6 h-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="glass p-8 rounded-[3rem] border-white/5 space-y-6">
          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Sender Name</Label>
            <Input 
              placeholder="e.g. Stripe, Sofia, Boss..." 
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="h-12 rounded-xl bg-black/40 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Notification Title</Label>
            <Input 
              placeholder="e.g. New Deposit, Match!, PR Alert..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 rounded-xl bg-black/40 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Visual Message</Label>
            <textarea 
              placeholder="The specific win you want to see..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[100px] p-4 rounded-xl bg-black/40 border-white/10 text-sm focus:outline-none focus:border-primary/50"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Signal Emoji</Label>
              <Input 
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                className="h-12 rounded-xl bg-black/40 border-white/10 text-center text-xl"
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Avatar</Label>
              <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 bg-white/5">
                <ImageIcon className="w-5 h-5 mr-2" /> Select
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => setIsPreviewOpen(true)}
            className="flex-1 h-14 rounded-2xl border-white/10 bg-white/5 uppercase font-bold tracking-widest"
          >
            Preview
          </Button>
          <Button 
            onClick={handleSave}
            className="flex-1 h-14 rounded-2xl peak-gradient glow-pink uppercase font-bold tracking-widest"
          >
            <Save className="w-5 h-5 mr-2" /> Save Signal
          </Button>
        </div>
      </main>

      <PhantomToast 
        show={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)}
        title={title || 'Example Title'}
        message={message || 'This is how your win will look.'}
        emoji={emoji}
        source={source}
        sender={sender}
      />

      <BottomNav />
    </PageShell>
  );
};

export default SignalCreator;
