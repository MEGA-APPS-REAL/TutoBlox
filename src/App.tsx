import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Game } from './types';
import { GAMES } from './data';
import { GameCard } from './components/GameCard';
import { TutorialModal } from './components/TutorialModal';
import { AboutModal } from './components/AboutModal';
import { ParticlesBackground } from './components/ParticlesBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Gamepad2, Search, MessageSquare, ChevronRight, Filter, Info, Star, RefreshCw } from 'lucide-react';
import { ProgressionGuidePage } from './components/ProgressionGuidePage';
import { PopularGames } from './components/PopularGames';

const CATEGORIES = [
  { id: 'All', label: 'All Guides' },
  { id: 'Roleplay', label: 'Roleplay & SIM', match: ['Roleplay', 'Roleplay / SIM', 'Roleplay / Fantasy'] },
  { id: 'Action', label: 'Action & Combat', match: ['Adventure / Combat', 'Action / Sports', 'FPS', 'Strategy / PvP'] },
  { id: 'Horror', label: 'Horror & Survival', match: ['Horror / Strategy', 'Horror / Puzzle', 'Survival / Horror'] },
  { id: 'Simulator', label: 'Obby & Simulators', match: ['Obby / Parkour', 'Simulator'] },
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showProgressionGuide, setShowProgressionGuide] = useState(false);
  const [showPopular, setShowPopular] = useState(false);

  const filteredGames = GAMES.filter(game => {
    // 1. Category filter check
    if (selectedCategory !== 'All') {
      const cat = CATEGORIES.find(c => c.id === selectedCategory);
      if (cat?.match && !cat.match.includes(game.genre)) {
        return false;
      }
    }
    // 2. Search query filter check
    return (
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="app-preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#091413] text-slate-100 font-sans tracking-normal relative overflow-x-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Decorative Background Neon Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#285A48]/10 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#285A48]/5 rounded-full blur-[128px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#091413]/80 backdrop-blur-md border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              onClick={() => { setSearchQuery(''); setShowProgressionGuide(false); setShowPopular(false); }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="bg-[#285A48] p-1.5 rounded-lg shadow-lg shadow-[#285A48]/20">
                <Gamepad2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-black tracking-tight text-white select-none">
                TUTO<span className="text-[#3ba381] drop-shadow-[0_0_8px_rgba(40,90,72,0.8)]">BLOX</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setSearchQuery(''); setShowProgressionGuide(false); setShowPopular(false); }}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${(!showProgressionGuide && !showPopular) ? 'text-[#3ba381]' : 'text-slate-400 hover:text-[#3ba381]'}`}
                >
                  Tutorials
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setShowPopular(true); setShowProgressionGuide(false); setSearchQuery(''); }}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${showPopular ? 'text-[#3ba381]' : 'text-slate-400 hover:text-[#3ba381]'}`}
                >
                  Popular
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); }}
                  className="text-sm font-semibold text-slate-400 hover:text-[#3ba381] transition-colors cursor-pointer"
                >
                  About
                </a>
              </div>
              
              <a 
                href="https://discord.gg/Qj6PkFeD83" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#285A48]/20 hover:bg-[#285A48]/40 border border-[#3ba381]/35 hover:border-[#3ba381]/70 text-white rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-emerald-950/20 active:scale-95 transition-all duration-200"
              >
                <MessageSquare size={15} className="text-[#3ba381]" />
                <span>Community</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {showProgressionGuide ? (
          <ProgressionGuidePage onBack={() => setShowProgressionGuide(false)} />
        ) : showPopular ? (
          <PopularGames onBack={() => setShowPopular(false)} onSelectGame={(game) => setSelectedGame(game)} />
        ) : (
          <>
        {/* Hero Section */}
        <div className="text-center mb-16 px-4">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Master <br />
            <span className="text-[#3ba381] drop-shadow-[0_0_15px_rgba(40,90,72,0.5)]">Roblox Games</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Comprehensive, step-by-step tutorials for the most played Roblox games. 
            From hidden secrets to pro survival tactics.
          </motion.p>
 
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto group"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3ba381]/50 group-focus-within:text-[#3ba381] transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search games or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#0c1e1c]/60 border border-[#285A48]/20 rounded-2xl shadow-inner hover:border-[#3ba381]/40 focus:border-[#3ba381]/80 focus:ring-2 focus:ring-[#285A48]/50 focus:shadow-[0_0_25px_rgba(40,90,72,0.35)] outline-none transition-all text-slate-100 placeholder-slate-500 font-medium"
            />
          </motion.div>
        </div>

        {/* Statistics highlights row for an premium wiki feel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-12 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-2 bg-[#0c1e1c]/40 border border-[#285A48]/15 px-4 py-2 rounded-2xl shadow-inner backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#3ba381] animate-pulse shadow-[0_0_8px_#3ba381]" />
            <span className="font-mono text-emerald-400 font-bold">3</span>
            <span className="text-slate-400">Pro Guides</span>
          </div>
        </motion.div>

        {/* Featured Game Spotlight Section */}
        {selectedCategory === 'All' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-14 bg-gradient-to-br from-[#0c1e1c]/90 via-[#091413] to-[#052d1f]/15 border border-[#3ba381]/30 rounded-3xl overflow-hidden shadow-2xl relative group hover:border-[#3ba381]/50 hover:shadow-[0_0_40px_rgba(40,90,72,0.2)] transition-all duration-500"
          >
            {/* Ambient visual badge background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#285A48]/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#285A48]/20 transition-all duration-500" />
            
            <div className="p-8 md:p-12 relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#3ba381]/15 text-[#3ba381] text-[10px] font-black tracking-widest uppercase rounded-full border border-[#3ba381]/30 shadow-lg shadow-emerald-950/20">
                    FEATURED GUIDE
                  </span>
                  <span className="text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    39.0B+ VISITS
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none">
                  Blox Fruits Master Study
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed max-w-2xl">
                  Uncover the legendary path to becoming the strongest marine or pirate. Learn fruit spawning mechanics, unlock fighting style mastery rapidly, and conquer boss fights with pro strategies.
                </p>
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-8 font-mono">
                  <span className="bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-[#285A48]/25 text-[#3ba381] font-bold">92% Rating</span>
                  <span className="bg-[#091413]/60 px-3 py-1.5 rounded-xl border border-[#285A48]/15">Sea 1st to 3rd Guide</span>
                  <span className="bg-[#091413]/60 px-3 py-1.5 rounded-xl border border-[#285A48]/15">Awakenings</span>
                </div>
                
                <div>
                  <button 
                    onClick={() => setShowProgressionGuide(true)}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#285A48] to-[#3ba381] hover:from-[#3ba381] hover:to-[#50cb9f] text-white font-bold rounded-2xl shadow-xl shadow-emerald-950/50 hover:shadow-[#3ba381]/25 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>Read Spotlight Tutorial</span>
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Graphic cards accent layout */}
              <div className="w-full lg:w-80 flex flex-col justify-center gap-4">
                <div className="bg-[#091413]/85 border border-[#285A48]/20 rounded-2xl p-5 hover:border-[#3ba381]/30 transition-all duration-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3ba381]">SECRET TIP</span>
                  <h4 className="text-white font-bold text-sm mt-1 mb-1">XP Rotation Mastery</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Learn the absolute fastest paths to maximize level gain before moving to Second Sea.</p>
                </div>
                <div className="bg-[#091413]/85 border border-[#285A48]/20 rounded-2xl p-5 hover:border-[#3ba381]/30 transition-all duration-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3ba381]">BEGINNER TIP</span>
                  <h4 className="text-white font-bold text-sm mt-1 mb-1">Elemental Logia Immunity</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Leverage Logia status bonuses to farm peacefully and bypass low-level enemies entirely.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Tab Selection Filters with matching counter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center items-center gap-2 px-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide select-none outline-none transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'text-white border-[#3ba381] bg-[#285A48]/25 shadow-lg shadow-emerald-950/45'
                      : 'text-slate-400 hover:text-slate-200 border-[#285A48]/20 bg-[#0c1e1c]/40 hover:bg-[#0c1e1c]/70 hover:border-[#285A48]/40'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && <Filter size={12} className="text-[#3ba381]" />}
                    {cat.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBorderGlow"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#3ba381] to-transparent rounded-full shadow-[0_0_8px_rgba(59,163,129,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <span className="text-[10px] font-mono tracking-widest text-[#3ba381]/70 uppercase">
              {filteredGames.length} {filteredGames.length === 1 ? 'guide found' : 'guides available'}
            </span>
          </div>
        </motion.div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
            >
              <GameCard 
                game={game} 
                onClick={() => setSelectedGame(game)} 
              />
            </motion.div>
          ))}
        </div>
 
        {filteredGames.length === 0 && (
          <div className="text-center py-20 bg-[#0c1e1c]/20 border border-[#285A48]/10 rounded-3xl p-8 max-w-xl mx-auto">
            <Info className="mx-auto text-[#3ba381]/50 mb-4" size={40} />
            <h3 className="text-lg font-bold text-white mb-2">No Guides Found</h3>
            <p className="text-slate-400 text-sm mb-6">No premium Roblox guides matched your search query or selected genre combination.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#285A48]/30 hover:bg-[#285A48]/50 border border-[#3ba381]/30 hover:border-[#3ba381]/65 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer"
            >
              <RefreshCw size={14} className="animate-spin-slow" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
          </>
        )}
      </main>
 
      {/* Footer */}
      <footer className="bg-[#070f0e]/80 border-t border-emerald-950/30 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-[#285A48]/20 p-1.5 rounded-lg border border-[#285A48]/30">
              <Gamepad2 className="text-[#3ba381]" size={16} />
            </div>
            <span className="font-bold tracking-tight text-white">
              TUTO<span className="text-[#3ba381] drop-shadow-[0_0_8px_rgba(40,90,72,0.8)]">BLOX</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6 text-sm text-slate-400 font-medium">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setSearchQuery(''); setShowProgressionGuide(false); setShowPopular(false); }}
              className="hover:text-[#3ba381] transition-colors"
            >
              Home
            </a>
            <span className="text-slate-700 select-none hidden sm:inline">•</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setShowPopular(true); setShowProgressionGuide(false); setSearchQuery(''); }}
              className="hover:text-[#3ba381] transition-colors"
            >
              Popular
            </a>
            <span className="text-slate-700 select-none hidden sm:inline">•</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); }}
              className="hover:text-[#3ba381] transition-colors"
            >
              About
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 TutoBlox Hub. All game materials are property of their respective creators.
          </p>
        </div>
      </footer>

      {/* Tutorial Overlay */}
      <AnimatePresence>
        {selectedGame && (
          <TutorialModal 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>

      {/* About Overlay */}
      <AnimatePresence>
        {isAboutOpen && (
          <AboutModal 
            onClose={() => setIsAboutOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

