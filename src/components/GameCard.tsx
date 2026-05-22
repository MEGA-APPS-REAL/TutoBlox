import { motion } from 'motion/react';
import { Game } from '../types';
import { Eye, ThumbsUp, ChevronRight } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

export const GameCard = ({ game, onClick }: GameCardProps) => {
  return (
    <motion.div
      layoutId={`game-${game.id}`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-[#0c1e1c]/70 rounded-2xl overflow-hidden cursor-pointer border border-[#285A48]/20 hover:border-[#3ba381]/50 hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] group transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-[#285A48]/20 text-[#3ba381] text-xs font-semibold rounded-full uppercase tracking-wider border border-[#285A48]/35">
            {game.genre}
          </span>
          <div className="flex items-center text-[#3ba381] space-x-1">
            <ThumbsUp size={15} className="fill-[#3ba381]/15" />
            <span className="text-sm font-bold text-slate-300">{game.rating}</span>
          </div>
        </div>

        {/* Promotional Video Placeholder */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#06100f] border border-[#285A48]/20 mb-4 flex items-center justify-center group/video group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-300">
          {game.thumbnail ? (
            <img 
              src={game.thumbnail} 
              alt={game.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#2a6450_1px,transparent_1px),linear-gradient(to_bottom,#2a6450_1px,transparent_1px)] bg-[size:16px_16px]" />
          )}
          
          {/* Video backdrop styles */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040a09] via-transparent to-transparent opacity-80 z-10" />
          
          {/* Ambient light ring */}
          <div className="absolute inset-4 rounded-lg border border-[#285A48]/5 group-hover/video:border-[#3ba381]/10 transition-colors pointer-events-none" />
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-[#3ba381] transition-colors">
          {game.name}
        </h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {game.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-slate-400 text-sm">
            <Eye size={16} className="mr-1.5 text-[#3ba381]" />
            <span>{game.visits} visits</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#285A48]/10 border border-[#285A48]/20 flex items-center justify-center text-[#3ba381] group-hover:bg-[#285A48] group-hover:text-white group-hover:border-transparent transition-all duration-300">
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
