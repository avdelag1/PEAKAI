import React from 'react';
import { motion } from 'framer-motion';

const NeuralSyncGraph = () => {
  // Simulated neural activity data points
  const points = [
    { x: 0, y: 40 },
    { x: 10, y: 45 },
    { x: 20, y: 35 },
    { x: 30, y: 60 },
    { x: 40, y: 55 },
    { x: 50, y: 80 },
    { x: 60, y: 75 },
    { x: 70, y: 90 },
    { x: 80, y: 85 },
    { x: 90, y: 95 },
    { x: 100, y: 100 },
  ];

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${100 - p.y}`)
    .join(' ');

  return (
    <div className="w-full h-24 relative overflow-hidden mt-8">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        {/* Glow Effect */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Main Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff2e7e" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ff2e7e" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff2e7e" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex justify-between items-end px-2 pb-1">
        <span className="text-[8px] text-muted-foreground uppercase tracking-widest">Sleep</span>
        <span className="text-[8px] text-muted-foreground uppercase tracking-widest">Ignition</span>
        <span className="text-[8px] text-primary font-bold uppercase tracking-widest animate-pulse">Syncing...</span>
      </div>
    </div>
  );
};

export default NeuralSyncGraph;
