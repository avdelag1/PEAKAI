import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PageShell } from '@/components/ui/PageShell';
import { 
  Brain, 
  Target, 
  Image as ImageIcon, 
  Bell, 
  Mic, 
  ArrowRight, 
  ArrowLeft, 
  Briefcase, 
  Activity, 
  Users,
  Flame,
  Heart,
  Zap,
  User
} from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  { id: 'brain', title: 'Brain', icon: Brain, color: 'text-primary' },
  { id: 'body', title: 'Body', icon: Activity, color: 'text-secondary' },
  { id: 'business', title: 'Business', icon: Briefcase, color: 'text-accent' },
  { id: 'behavior', title: 'Behavior', icon: Zap, color: 'text-primary' },
];

const phantomPacks = [
  { id: 'wealth', title: 'Wealth Explosion', emoji: '💰' },
  { id: 'dating', title: 'Magnetic Dating', emoji: '❤️' },
  { id: 'body', title: 'Body Transformation', emoji: '💪' },
  { id: 'focus', title: 'Deep Focus', emoji: '🧠' },
  { id: 'confidence', title: 'Confidence', emoji: '🔥' },
];

const nudgeFrequencies = ['5 min', '15 min', '30 min', '1 hour', 'Daily', 'Weekly'];
const voiceStyles = ['Hype', 'Loving', 'Calm', 'Mentor'];

const GoalWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    deadline: '',
    emotionalWhy: '',
    visionImages: [] as string[],
    phantomPack: '',
    nudgeFrequency: '1 hour',
    voiceStyle: 'Hype',
  });
  const navigate = useNavigate();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleFinish = async () => {
    toast.success('PEAK Protocol Activated.');
    navigate('/');
  };

  return (
    <PageShell className="p-6 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                step >= i ? 'bg-primary' : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Select Domain</h1>
                <p className="text-muted-foreground text-lg">Where will you reach your PEAK?</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setFormData({ ...formData, category: cat.id }); nextStep(); }}
                    className={`glass p-8 rounded-[2rem] text-left hover:border-primary/50 transition-all group ${
                      formData.category === cat.id ? 'border-primary bg-primary/10' : 'border-white/5'
                    }`}
                  >
                    <cat.icon className={`w-10 h-10 mb-4 ${cat.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">The Vision</h1>
                <p className="text-muted-foreground text-lg">Define the victory with surgical precision.</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Goal Title</Label>
                  <Input 
                    placeholder="e.g. Become a Multi-Millionaire" 
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="h-14 rounded-2xl bg-black/40 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Input 
                    type="date"
                    value={formData.deadline}
                    onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                    className="h-14 rounded-2xl bg-black/40 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Emotional Why (Fuel for the brain)</Label>
                  <Textarea 
                    placeholder="How will it feel when the $10M hits your account?"
                    value={formData.emotionalWhy}
                    onChange={e => setFormData({ ...formData, emotionalWhy: e.target.value })}
                    className="min-h-[120px] rounded-2xl bg-black/40 border-white/10 p-4"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-white/10">Back</Button>
                <Button onClick={nextStep} className="flex-1 h-14 rounded-2xl peak-gradient glow-pink">Next Step</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Neural Imprints</h1>
                <p className="text-muted-foreground text-lg">Upload images of your future reality.</p>
              </div>
              <div className="glass aspect-video rounded-[2.5rem] border-dashed border-2 border-white/10 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                <div className="p-6 rounded-[2rem] bg-primary/10 mb-4">
                  <ImageIcon className="w-12 h-12 text-primary" />
                </div>
                <p className="font-bold">Select Vision Images</p>
                <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-white/10">Back</Button>
                <Button onClick={nextStep} className="flex-1 h-14 rounded-2xl peak-gradient glow-pink">Next Step</Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Phantom Pack</h1>
                <p className="text-muted-foreground text-lg">Pick your signal frequency & style.</p>
              </div>
              <div className="space-y-4">
                {phantomPacks.map(pack => (
                  <button
                    key={pack.id}
                    onClick={() => setFormData({ ...formData, phantomPack: pack.id })}
                    className={`w-full glass p-6 rounded-2xl text-left flex items-center gap-4 hover:border-primary/50 transition-all ${
                      formData.phantomPack === pack.id ? 'border-primary bg-primary/10' : 'border-white/5'
                    }`}
                  >
                    <span className="text-3xl">{pack.emoji}</span>
                    <span className="text-xl font-bold">{pack.title}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-white/10">Back</Button>
                <Button onClick={nextStep} className="flex-1 h-14 rounded-2xl peak-gradient glow-pink">Next Step</Button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Activation Pulse</h1>
                <p className="text-muted-foreground text-lg">How often should the brain be nudged?</p>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-sm font-bold uppercase tracking-widest text-primary">Nudge Frequency</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {nudgeFrequencies.map(freq => (
                      <Button
                        key={freq}
                        variant={formData.nudgeFrequency === freq ? 'default' : 'outline'}
                        onClick={() => setFormData({ ...formData, nudgeFrequency: freq })}
                        className={`h-12 rounded-xl text-xs font-bold uppercase ${
                          formData.nudgeFrequency === freq ? 'peak-gradient glow-pink border-none' : 'border-white/5 bg-white/5'
                        }`}
                      >
                        {freq}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-bold uppercase tracking-widest text-primary">Voice Style</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {voiceStyles.map(style => (
                      <Button
                        key={style}
                        variant={formData.voiceStyle === style ? 'default' : 'outline'}
                        onClick={() => setFormData({ ...formData, voiceStyle: style })}
                        className={`h-14 rounded-xl text-sm font-bold flex items-center gap-2 ${
                          formData.voiceStyle === style ? 'peak-gradient glow-pink border-none' : 'border-white/5 bg-white/5'
                        }`}
                      >
                        <Mic className="w-4 h-4 opacity-50" />
                        {style}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl border-white/10">Back</Button>
                <Button onClick={handleFinish} className="flex-1 h-14 rounded-2xl peak-gradient glow-pink">Activate Protocol</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageShell>
  );
};

export default GoalWizard;
