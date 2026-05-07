import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Rocket, Brain, Shield, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'Ignition',
      price: '$0',
      desc: 'Basic neural rewiring',
      features: ['1 Active Vision', 'System Notifications', '5h Check-in interval', 'Basic Daily Resume'],
      button: 'Current Plan',
      premium: false
    },
    {
      name: 'Neural Pro',
      price: '$29',
      period: '/mo',
      desc: 'Total reality distortion',
      features: ['Unlimited Visions', 'WhatsApp & Telegram Skins', '1h Neural Pulse', 'AI Voice Check-ins', 'Future Self Avatar'],
      button: 'Upgrade to Pro',
      premium: true,
      popular: true
    },
    {
      name: 'Ascension',
      price: '$499',
      period: 'Lifetime',
      desc: 'Founder status forever',
      features: ['Priority Neural Link', 'Dedicated AI Coach', 'Beta Access to VR Vision', 'Lifetime History', 'Founder Profile Badge'],
      button: 'Claim Ascension',
      premium: true
    }
  ];

  return (
    <PageShell className="pb-20">
      <header className="p-10 text-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4"
        >
          <Crown className="w-8 h-8 text-primary" />
        </motion.div>
        <h1 className="text-4xl font-bold">Select Your Tier</h1>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Choose the intensity of your neural transformation.
        </p>
      </header>

      <main className="px-6 space-y-6 max-w-lg mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass p-8 rounded-[3rem] relative overflow-hidden ${
              tier.popular ? 'border-primary/50 bg-primary/5' : 'border-white/5 bg-white/5'
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-bl-2xl text-white">
                Most Effective
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{tier.desc}</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-black">{tier.price}</span>
              <span className="text-muted-foreground text-sm">{tier.period}</span>
            </div>

            <ul className="space-y-4 mb-10">
              {tier.features.map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              className={`w-full h-14 rounded-2xl font-bold uppercase tracking-widest transition-all ${
                tier.premium ? 'peak-gradient glow-pink hover:scale-105' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {tier.button}
            </Button>
          </motion.div>
        ))}

        <p className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.3em] py-10">
          Neural Subscription Powered by Stripe
        </p>
      </main>
    </PageShell>
  );
};

export default Pricing;
