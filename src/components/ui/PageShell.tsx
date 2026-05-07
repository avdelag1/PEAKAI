import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NeuralBackground } from '../NeuralBackground';
import { GlobalPulse } from '../GlobalPulse';

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
}

export const PageShell = ({ children, className, withGlow = true }: PageShellProps) => {
  return (
    <div className={cn("min-h-screen text-foreground relative overflow-x-hidden", className)}>
      {withGlow && <NeuralBackground />}
      <GlobalPulse />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};
