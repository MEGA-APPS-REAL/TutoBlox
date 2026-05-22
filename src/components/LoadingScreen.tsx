import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Gamepad2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increase progress smoothly over 2.4 seconds
    const intervalTime = 2400 / 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Small organic variable increments
        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(100, prev + increment);
      });
    }, intervalTime);

    // Hard timeout at 2.8 seconds to trigger final completion safely
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      // Wait for a brief moment at 100% before fading out
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 2600);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  const brandText = "TUTOBLOX";

  // Stagger configurations for standard text wave
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    initial: { y: 15, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 1.4,
          ease: "easeInOut",
        },
        opacity: { duration: 0.4 }
      },
    },
  };

  return (
    <motion.div
      id="tutoblox-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-[#091413] flex flex-col items-center justify-center overflow-hidden font-sans select-none"
    >
      {/* Immersive cybernetic scale effects behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,90,72,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#3ba381 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Pulsing visual energy fields */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#285A48] rounded-full blur-[140px] pointer-events-none z-0" 
      />

      {/* Core Loader visual elements */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated App Icon Launcher */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 bg-[#285A48] p-4 rounded-2xl shadow-xl shadow-[#285A48]/30 border border-[#3ba381]/30 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Gamepad2 className="text-white w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Dynamic Wave-Flowy Brand Text Typography */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex items-center justify-center space-x-1 h-14 mb-8 select-none"
        >
          {brandText.split("").map((letter, index) => {
            // Give BLOX letters a distinct highlighted theme color
            const isHighlighted = index >= 4; 
            return (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`text-4xl md:text-5xl font-black tracking-tight ${
                  isHighlighted 
                    ? 'text-[#3ba381] drop-shadow-[0_0_15px_rgba(59,163,129,0.7)]' 
                    : 'text-white'
                }`}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Progress status loader with clean numbers */}
        <div className="w-56 md:w-64">
          <div className="flex justify-between items-end mb-2.5 font-mono">
            <span className="text-[#3ba381] font-black tracking-[0.25em] mr-[-0.25em] text-[10px] animate-pulse drop-shadow-[0_0_10px_rgba(59,163,129,0.5)]">PREPARING...</span>
            <span className="text-white text-xs font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{progress}%</span>
          </div>

          {/* Loader bar container */}
          <div className="w-full h-1.5 bg-[#0c1e1c] rounded-full overflow-hidden border border-[#285A48]/20 shadow-inner shadow-black/80">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#285A48] via-[#3ba381] to-[#60e0b4] rounded-full relative"
              style={{ width: `${progress}%` }}
              layoutId="progressBarFiller"
              transition={{ type: "spring", stiffness: 85, damping: 15 }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Action micro-label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 text-[10px] font-mono tracking-[0.28em] mr-[-0.28em] text-center uppercase text-slate-400 bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] filter brightness-110"
        >
          Your Gateway to Roblox Mastery
        </motion.p>
      </div>
    </motion.div>
  );
}
