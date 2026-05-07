import React from 'react';
import { motion } from 'framer-motion';

export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Liquid Blobs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-primary/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] bg-secondary/15 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, 20, 90, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[10%] w-[45%] h-[45%] bg-accent/10 blur-[150px] rounded-full"
      />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full z-[1]"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
};
