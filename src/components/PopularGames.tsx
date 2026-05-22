import { motion } from 'motion/react';
import { GAMES } from '../data';
import { Game } from '../types';
import { ArrowLeft, Trophy, ThumbsUp, Eye, Flame, ChevronRight, Gamepad2, Sparkles } from 'lucide-react';

interface PopularGamesProps {
  onBack: () => void;
  onSelectGame: (game: Game) => void;
}

export const PopularGames = ({ onBack, onSelectGame }: PopularGamesProps) => {
  // Sort games dynamically based on total Roblox visits parsed from 'visits' field (e.g., '52.0B+' -> 52.0)
  const sortedPopularGames = [...GAMES]
    .sort((a, b) => {
      const parseVisits = (v: string) => {
        const num = parseFloat(v.replace(/[^0-9.]/g, ''));
        if (v.includes('B')) return num * 1000000000;
        if (v.includes('M')) return num * 1000000;
        return num;
      };
      return parseVisits(b.visits) - parseVisits(a.visits);
    })
    .slice(0, 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <div className="animate-fade-in">
      {/* Return back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#3ba381] hover:text-[#50cb9f] text-sm font-bold mb-8 transition-colors group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Return to Guides</span>
      </button>

      {/* Hero Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#285A48]/20 border border-[#3ba381]/30 rounded-full text-xs font-bold text-[#3ba381] mb-4">
          <Flame size={12} fill="currentColor" className="animate-pulse" />
          <span>OFFICIAL ROBLOX STATS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Trending <span className="text-[#3ba381] drop-shadow-[0_0_15px_rgba(40,90,72,0.4)]">Popular Games</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          The top 5 most played and requested Roblox blockbusters of the season, ranked officially by total game visits on the Roblox platform. Select any game below to view its full progression tutorial.
        </p>
      </div>

      {/* Rank Grid and Stack */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {sortedPopularGames.map((game, idx) => {
          const rankNum = idx + 1;
          
          // Uniform grey and theme brand color styling for clean modern aesthetic without flashiness
          const bgColors = "bg-[#0c1e1c]/45 border-[#285A48]/15 hover:border-[#3ba381]/40 shadow-sm";
          const badgeColor = "bg-[#091413] border-[#285A48]/30 text-slate-400 font-black";

          return (
            <motion.div
              key={game.id}
              variants={itemVariants}
              onClick={() => onSelectGame(game)}
              className={`relative ${bgColors} border rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden`}
            >
              {/* Left element row for badge and title details */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 flex-1 select-none">
                {/* Visual Rank Badge */}
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-lg shadow-inner flex-shrink-0 ${badgeColor}`}>
                  <span className="font-extrabold">{rankNum}</span>
                </div>

                {/* Game Title Details */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#3ba381] transition-colors flex items-center gap-2">
                      {game.name}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-[#285A48]/25 text-[#3ba381] text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider border border-[#285A48]/35">
                      {game.genre}
                    </span>
                    {rankNum === 1 && (
                      <span className="text-[10px] font-mono font-bold text-[#3ba381] bg-[#285A48]/10 border border-[#285A48]/25 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ThumbsUp size={10} fill="currentColor" />
                        NO. 1 VISITED
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-lg line-clamp-1 group-hover:text-slate-300 transition-colors">
                    {game.description}
                  </p>
                </div>
              </div>

              {/* Right side stats row */}
              <div className="flex items-center justify-between sm:justify-end gap-x-8 gap-y-2 border-t sm:border-t-0 border-[#285A48]/15 pt-4 sm:pt-0">
                <div className="flex flex-wrap gap-4 sm:gap-6 font-semibold">
                  {/* Visits */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">VISITS</span>
                    <span className="text-slate-200 text-sm font-bold flex items-center gap-1 mt-0.5">
                      <Eye size={12} className="text-[#3ba381]" />
                      {game.visits}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">OFFICIAL RATING</span>
                    <span className="text-[#3ba381] text-sm font-bold flex items-center gap-1 mt-0.5">
                      <ThumbsUp size={12} fill="currentColor" className="text-[#3ba381]" />
                      {game.rating}
                    </span>
                  </div>
                </div>

                {/* Tutorial Action Trigger button */}
                <div className="w-10 h-10 rounded-2xl bg-[#285A48]/10 border border-[#285A48]/25 flex items-center justify-center text-[#3ba381] group-hover:bg-[#285A48] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md">
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
