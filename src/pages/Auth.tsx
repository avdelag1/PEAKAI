import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageShell } from '@/components/ui/PageShell';
import { useAuth } from '@/contexts/AuthContext';
import { Brain, Mail, Lock, Chrome, ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignIn) {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast.success('Welcome back to your PEAK.');
        navigate('/', { replace: true });
      } else {
        const { error } = await signUp(email, password);
        if (error) throw error;
        toast.success('Check your email for the verification link!');
      }
    } catch (error: any) {
      toast.error(error.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error: any) {
      toast.error(error.message || 'Google sign in failed');
    }
  };

  return (
    <PageShell className="flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex p-4 rounded-[2rem] glass-pink mb-6">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {isSignIn ? 'Welcome to PEAK' : 'Join the Protocol'}
          </h1>
          <p className="text-muted-foreground">
            {isSignIn ? 'Sign in to access your neural dashboard' : 'Start your brain-rewiring journey today'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-[2.5rem] border-white/5"
        >
          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 rounded-2xl bg-black/40 border-white/10 focus:border-primary/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                {isSignIn && (
                  <button type="button" className="text-xs text-primary hover:underline">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-14 rounded-2xl bg-black/40 border-white/10 focus:border-primary/50"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-2xl peak-gradient text-lg font-bold glow-pink"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  {isSignIn ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground tracking-widest">Or continue with</span>
            </div>
          </div>

          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 flex items-center gap-3"
          >
            <Chrome className="w-5 h-5" />
            Google
          </Button>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isSignIn ? (
                <span>Don't have an account? <strong className="text-primary font-bold">Sign up</strong></span>
              ) : (
                <span>Already have an account? <strong className="text-primary font-bold">Sign in</strong></span>
              )}
            </button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-[10px] text-muted-foreground uppercase tracking-[0.2em]"
        >
          Secured by Phantom Neural Protocol
        </motion.p>
      </div>
    </PageShell>
  );
};

export default Auth;
