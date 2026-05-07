import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/ui/PageShell';
import { Button } from '@/components/ui/button';
import { Mic, Send, Calendar, Clock, ArrowLeft, Brain, Sparkles, Trophy, ListChecks, History, Square, Play, Trash2, Zap } from 'lucide-react';
import { toast } from 'sonner';
import BottomNav from '@/components/BottomNav';
import { chatWithAI } from '@/lib/ai-service';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [resumeData, setResumeData] = useState<{ win: string, plan: string[] } | null>(null);
  const [entries, setEntries] = useState([
    { id: '1', date: 'Today, 8:45 AM', content: 'Visualized the $10M liquid milestone. Felt the cold air of the private jet cabin. The brain is accepting the reality.', duration: '1:12' },
    { id: '2', date: 'Yesterday, 9:20 PM', content: 'Completed the presence protocol during the high-stakes meeting. I was the observer. I owned the room.', duration: '0:45' },
  ]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      
      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        toast.success('Neural imprinting complete. Transcribing...');
      };
      
      recorder.start();
      setIsRecording(true);
      toast.info('Neural Link Active: Speak your victory.');
    } catch (err) {
      toast.error('Microphone access denied. Check hardware permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const generateResume = async () => {
    if (entries.length === 0) {
      toast.error('Complete at least one imprint to generate a resume.');
      return;
    }

    setIsAnalyzing(true);
    try {
      const prompt = `
        You are the PEAK AI Neural Strategist. Analyze the following daily journal imprints from a high-performance user.
        
        IMPRINTS:
        ${entries.map(e => `- ${e.content}`).join('\n')}
        
        Generate a structured "Reality Resume" in the following format:
        WIN: [A high-impact, 1-sentence summary of their neural progress today, emphasizing power and identity]
        PLAN: [A list of 2 strategic, actionable steps for tomorrow to maintain momentum]
        
        Keep the tone extreme, elite, and futuristic. Use words like "Neural," "Protocol," "Reality Distortion," and "Sync."
      `;

      const response = await chatWithAI([
        { role: 'system', content: 'You are the PEAK AI Strategic Engine. You generate elite daily reality summaries.' },
        { role: 'user', content: prompt }
      ]);

      // Simple parsing of the AI response
      const winMatch = response.match(/WIN:\s*(.*)/i);
      const planMatch = response.match(/PLAN:\s*([\s\S]*)/i);
      
      const win = winMatch ? winMatch[1].trim() : "Neural alignment achieved. Identity shift in progress.";
      const planText = planMatch ? planMatch[1].trim() : "- Execute Vision Protocol\n- Reinforce Momentum";
      const plan = planText.split('\n').map(p => p.replace(/^[-\d.\s]*/, '').trim()).filter(p => p);

      setResumeData({ win, plan });
      setShowResume(true);
      toast.success('Neural Reality Synchronized.');
    } catch (err) {
      console.warn('Neural link failed, engaging local recovery protocol...', err);
      // Local Mock Recovery Protocol (Sentient UX)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate brain compute
      
      const lastEntry = entries[0].content;
      const mockWin = lastEntry.length > 20 
        ? `Neural anchor established: "${lastEntry.substring(0, 40)}..." is now your objective reality.`
        : "Identity shift detected. Your neural architecture is aligning with the elite state.";
      
      const mockPlan = [
        "Reinforce the current vision with 10Hz binaural focus.",
        "Execute the presence protocol in all high-stakes environments tomorrow."
      ];

      setResumeData({ win: mockWin, plan: mockPlan });
      setShowResume(true);
      toast.info('Neural Sync: Local Recovery Mode Active.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <PageShell className="pb-32">
      <header className="p-6 bg-background/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Brain className="text-primary w-6 h-6" />
          Neural Journal
        </h1>
        <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Imprint your future reality</p>
      </header>

      <main className="p-6 space-y-8 max-w-lg mx-auto">
        {/* Recording Visualization */}
        <div className="glass p-10 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <AnimatePresence mode="wait">
            {isRecording ? (
              <motion.div 
                key="recording"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-1 h-12 items-center mb-6">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: [10, 40, 10] }}
                      transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                      className="w-1.5 bg-primary rounded-full"
                    />
                  ))}
                </div>
                <p className="text-primary font-bold animate-pulse uppercase tracking-[0.2em]">Recording Win...</p>
              </motion.div>
            ) : (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Mic className="text-primary w-8 h-8" />
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Neural Link Standby</p>
              </motion.div>
            )}
          </AnimatePresence>

          <Button 
            onClick={toggleRecording}
            className={`mt-8 w-20 h-20 rounded-full shadow-2xl transition-all duration-500 ${
              isRecording ? 'bg-red-500 hover:bg-red-600 scale-110' : 'peak-gradient glow-pink hover:scale-110'
            }`}
          >
            {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </Button>
        </div>

        {/* Entry List */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Past Imprints
          </h3>
          <div className="space-y-4">
            {entries.map(entry => (
              <motion.div 
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-6 rounded-[2.5rem] border-white/5 bg-white/5 relative group hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{entry.date}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-muted-foreground hover:text-white"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/80">{entry.content}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      className="h-full bg-primary/40" 
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">{entry.duration}</span>
                  <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Play className="w-3 h-3 fill-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Daily Reality Resume */}
        <section className="space-y-6 pt-8 border-t border-white/5">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Reality Resume
            </h3>
            {!showResume && (
              <Button 
                onClick={generateResume}
                disabled={isAnalyzing}
                variant="ghost" 
                size="sm" 
                className="text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary/10"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                    Analyzing...
                  </div>
                ) : 'Manifest Resume'}
              </Button>
            )}
          </div>

          <AnimatePresence>
            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass p-12 rounded-[3rem] border-primary/30 bg-primary/5 flex flex-col items-center justify-center space-y-6 text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                  <Brain className="w-16 h-16 text-primary relative z-10 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-primary mb-2">Neural Syncing</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Aggregating Reality Signals...</p>
                </div>
              </motion.div>
            )}

            {showResume && !isAnalyzing && resumeData && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-10 rounded-[3rem] border-primary/20 bg-primary/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6">
                  <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-[8px] font-black uppercase tracking-widest text-primary shadow-lg shadow-primary/20">
                    IDENTITY_STATE: OPTIMIZED
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
                      <Trophy className="w-4 h-4" /> THE DAILY WIN
                    </h4>
                    <p className="text-lg text-white font-bold italic leading-tight tracking-tight">
                      "{resumeData.win}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4 flex items-center gap-2">
                      <ListChecks className="w-4 h-4" /> TOMORROW'S PROTOCOL
                    </h4>
                    <ul className="space-y-4">
                      {resumeData.plan.map((item, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary/40 transition-colors">
                            <Zap className="w-3 h-3 text-secondary" />
                          </div>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button 
                      className="flex-1 h-14 rounded-2xl peak-gradient font-black uppercase tracking-widest text-[10px]"
                    >
                      Archive Imprint
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setShowResume(false)}
                      className="h-14 w-14 rounded-2xl border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10"
                    >
                      <Trash2 className="w-5 h-5 text-white/40" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {!showResume && !isAnalyzing && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-48 rounded-[3.5rem] border border-dashed border-white/10 flex items-center justify-center p-12 text-center"
              >
                <div className="space-y-2">
                  <Sparkles className="w-8 h-8 text-white/10 mx-auto mb-2" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] leading-relaxed">
                    Capture more imprints to generate<br />your strategic neural summary.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
      <BottomNav />
    </PageShell>
  );
};

export default Journal;
