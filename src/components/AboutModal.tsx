import { motion, AnimatePresence } from 'motion/react';
import { X, Gamepad2, Compass, Shield, Stars, Github } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal = ({ onClose }: AboutModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 cursor-default">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85"
        id="about-backdrop"
      />

      {/* Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full max-w-xl bg-[#091413] border border-[#285A48]/30 rounded-3xl shadow-[0_0_50px_rgba(40,90,72,0.25)] overflow-hidden max-h-[85vh] flex flex-col z-10"
        id="about-modal-content"
      >
          {/* Header */}
          <div className="p-6 border-b border-emerald-950/40 flex justify-between items-center bg-[#091413] sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#285A48]/30 border border-[#3ba381]/30 flex items-center justify-center text-[#3ba381] shadow-sm shadow-[#285A48]/10">
                <Gamepad2 size={22} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-tight">About TutoBlox</h2>
                <p className="text-[#3ba381] text-xs font-semibold">The Ultimate Roblox Directory</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-900/60 text-slate-400 hover:text-slate-100 rounded-full transition-colors"
              aria-label="Close About Modal"
              id="close-about-btn"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-300">
            {/* Introductory Statement */}
            <section className="bg-[#0c1e1c]/40 border border-[#285A48]/25 p-5 rounded-2xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white font-semibold">TutoBlox</strong> is a premium, beautifully curated directory for gamers seeking to conquer the most popular universes on Roblox. We gather high-tier guidelines, hidden mechanics, and professional-grade tips to optimize your playing experience.
              </p>
            </section>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-3 hover:bg-[#0c1e1c]/20 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#285A48]/25 flex items-center justify-center text-[#3ba381]">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm mb-1">Interactive Navigation</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Quickly search through billions of historical game plays and filter exact procedural tactics for standard play styles.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 hover:bg-[#0c1e1c]/20 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#285A48]/25 flex items-center justify-center text-[#3ba381]">
                  <ShadowComponentShim />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm mb-1">Authentic Community Ratings</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">All metrics are direct reflections of genuine Roblox user ratings, showing exact approval indices and active subscriber preferences.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 hover:bg-[#0c1e1c]/20 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#285A48]/25 flex items-center justify-center text-[#3ba381]">
                  <Stars size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm mb-1">Professional Tactics</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Curated sequential instructions, beginner traps, and endgame goals built by elite players who understand the algorithms.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="pt-4 border-t border-emerald-950/20 text-center">
              <p className="text-slate-500 text-xs leading-relaxed">
                This hub is fan-crafted and operates independently. It is not affiliated with, authorized, or approved by Roblox Corporation.
              </p>
            </div>
          </div>

          {/* Footer close button */}
          <div className="p-4 bg-slate-900/10 border-t border-emerald-950/20 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#285A48] hover:bg-[#34755d] text-white font-semibold text-xs rounded-xl shadow-lg shadow-[#285A48]/15 transition-all text-center"
              id="confirm-about-btn"
            >
              Back to Games
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

// Simple internal helper icon to bypass dynamic loader
function ShadowComponentShim() {
  return <Shield size={18} />;
}
