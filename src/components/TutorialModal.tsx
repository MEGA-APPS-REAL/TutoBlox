import { motion, AnimatePresence } from 'motion/react';
import { Game } from '../types';
import { X, Gamepad2, Info, BookOpen, Lightbulb, Trophy, Sparkles, Star, Target } from 'lucide-react';

interface TutorialModalProps {
  game: Game | null;
  onClose: () => void;
}

export const TutorialModal = ({ game, onClose }: TutorialModalProps) => {
  if (!game) return null;

  // Animation variants for staggered content entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 cursor-default">
      {/* Immersive Blur Backdrop covering entire screen */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 pointer-events-auto"
      />
      
      {/* Modal Main container */}
      <motion.div
        layoutId={`game-${game.id}`}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          type: 'spring',
          damping: 26,
          stiffness: 170,
          mass: 0.9
        }}
        className="relative w-full max-w-2xl bg-[#091413] border border-[#285A48]/30 rounded-3xl shadow-[0_0_50px_rgba(40,90,72,0.3)] overflow-hidden max-h-[90vh] flex flex-col z-10"
      >
          {/* Header */}
          <div className="p-6 border-b border-emerald-950/40 flex justify-between items-center bg-[#091413] sticky top-0 z-10 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#285A48]/30 border border-[#3ba381]/30 flex items-center justify-center text-[#3ba381] shadow-sm shadow-[#285A48]/10">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{game.name}</h2>
                <p className="text-[#3ba381] text-sm font-semibold">{game.genre}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#0c1e1c]/60 text-slate-400 hover:text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#091413] text-slate-300"
          >
            <motion.section variants={itemVariants}>
              <div className="flex items-center space-x-2 text-white mb-3">
                <Info size={18} className="text-[#3ba381] font-bold" />
                <h3 className="text-lg font-bold">About the Game</h3>
              </div>
              <p className="text-slate-200 leading-relaxed bg-[#0c1e1c]/40 p-5 rounded-2xl border border-[#285A48]/25 shadow-inner">
                {game.description}
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <div className="flex items-center space-x-2 text-white mb-6">
                <BookOpen size={18} className="text-[#3ba381] font-bold" />
                <h3 className="text-lg font-bold">How to Play Tutorial</h3>
              </div>
              
              {game.richTutorial ? (
                <div className="space-y-10">
                  {/* Rich Tutorial Steps */}
                  <div className="space-y-8">
                    {game.richTutorial.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="border-b border-[#285A48]/15 pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#285A48]/35 text-[#3ba381] border border-[#285A48]/30 flex items-center justify-center font-bold text-sm shadow-sm shadow-[#285A48]/10">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-md pt-1">{step.title}</h4>
                            {step.description && (
                              <p className="text-slate-300 text-sm leading-relaxed mt-1">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Step Bullets (if exists) */}
                        {step.bullets && (
                          <div className="ml-12 mt-2 space-y-2">
                            {step.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-[#3ba381] mt-1.5 font-bold text-xs">•</span>
                                <p className="text-slate-300 text-sm leading-relaxed">{bullet}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Step Cards (if exists) */}
                        {step.cards && (
                          <div className="ml-12 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.cards.map((card, idx) => (
                              <div key={idx} className="bg-[#0c1e1c]/50 border border-[#285A48]/20 p-3.5 rounded-xl hover:border-[#3ba381]/30 transition-all shadow-sm">
                                <h5 className="font-bold text-white text-xs uppercase tracking-wide mb-1 flex items-center gap-1.5">
                                  <Sparkles size={12} className="text-[#3ba381]" />
                                  {card.title}
                                </h5>
                                <p className="text-slate-300 text-xs leading-relaxed">{card.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Tips Callout */}
                  {game.richTutorial.tips && (
                    <motion.div variants={itemVariants} className="bg-[#285A48]/10 border border-[#285A48]/25 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4 text-[#3ba381]">
                        <Lightbulb size={20} fill="currentColor" className="text-[#3ba381]" />
                        <h4 className="font-bold text-md text-white">Pro Beginner Tips</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {game.richTutorial.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#285A48]/30 text-[#3ba381] border border-[#285A48]/20 flex items-center justify-center font-bold text-xs">
                              ✓
                            </span>
                            <p className="text-slate-300 text-xs leading-relaxed font-medium">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Ultimate Goal Callout */}
                  {game.richTutorial.goals && (
                    <motion.div variants={itemVariants} className="bg-[#285A48]/15 border border-[#285A48]/30 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4 text-emerald-300">
                        <Trophy size={20} fill="currentColor" className="text-[#3ba381]" />
                        <h4 className="font-bold text-md">{game.richTutorial.goalTitle || "Goal of the Game"}</h4>
                      </div>
                      <div className="space-y-2.5 ml-1">
                        {game.richTutorial.goals.map((goal, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <Target size={14} className="text-[#3ba381] flex-shrink-0" />
                            <p className={idx === 0 ? "text-emerald-100 font-semibold text-sm animate-pulse" : "text-emerald-200/80 text-xs leading-relaxed font-semibold ml-4"}>
                              {goal}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {game.tutorial.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#285A48]/25 text-[#3ba381] border border-[#285A48]/35 flex items-center justify-center font-bold text-sm shadow-sm shadow-[#285A48]/10">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.section>
          </motion.div>

          {/* Footer */}
          <div className="p-6 bg-[#0c1e1c]/40 border-t border-emerald-950/40 flex justify-center">
            <a
              href={game.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#285A48] text-white font-bold rounded-2xl hover:bg-[#34755d] transition-all shadow-lg shadow-[#285A48]/20 hover:shadow-[#285A48]/40 inline-flex items-center justify-center text-center cursor-pointer"
            >
              Start Playing Now!
            </a>
          </div>
        </motion.div>
      </div>
    );
  };
