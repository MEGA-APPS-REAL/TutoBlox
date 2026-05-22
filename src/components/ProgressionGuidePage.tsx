import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Sword, Shield, Compass, Star, Target, Trophy, 
  ChevronRight, Award, Flame, ScrollText, Play, CheckSquare, Square
} from 'lucide-react';

interface ProgressionGuidePageProps {
  onBack: () => void;
}

export const ProgressionGuidePage = ({ onBack }: ProgressionGuidePageProps) => {
  const [activeTab, setActiveTab] = useState<'beginner' | 'mid' | 'advanced' | 'endgame' | 'summary'>('beginner');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  // Interactive Checklist to calculate progress rate
  const toggleStep = (stepId: string) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const stepsList = {
    beginner: [
      { id: 'b1', title: 'Choose Your Path', desc: 'Select Pirate or Marine. Progression remains identical.' },
      { id: 'b2', title: 'Establish Quest Loop', desc: 'Accept NPC quest, eliminate targets, turn in, repeat.' },
      { id: 'b3', title: 'Optimized Stat Points', desc: 'Focus strictly on Melee, Defense, and active Blox Fruit.' },
      { id: 'b4', title: 'Secure Beginner Fruit', desc: 'Acquire Light, Ice, Flame, or Magma for early farming.' },
      { id: 'b5', title: 'Unlock Starter Fighting Style', desc: 'Obtain Dark Step or Electric to boost basic attacks.' },
      { id: 'b6', title: 'Navigate First Sea Zones', desc: 'Advance through designated island tiers to reach level 700.' }
    ],
    mid: [
      { id: 'm1', title: 'Unlock Second Sea', desc: 'Defeat Ice Admiral and transfer to the Kingdom of Rose.' },
      { id: 'm2', title: 'Efficient Boss Rotations', desc: 'Incorporate boss farming and server hopping into leveling.' },
      { id: 'm3', title: 'Learn the Trading Market', desc: 'Understand values of rare fruits and execute strategic trades.' },
      { id: 'm4', title: 'Commence Raid System', desc: 'Participate in raids to secure fragments and activate awakenings.' },
      { id: 'm5', title: 'Awaken Core Fruits', desc: 'Upgrade elemental abilities starting with Light, Flame, or Ice.' },
      { id: 'm6', title: 'Upgrade Fighting Style', desc: 'Unlock Water Kung Fu or start paths to Electric Claw.' }
    ],
    advanced: [
      { id: 'a1', title: 'Journey to Third Sea', desc: 'Reach level 1500 and conquer the rip_indra challenge.' },
      { id: 'a2', title: 'Elite Pirate Hunting', desc: 'Hunt rare boss spawns on high-level islands.' },
      { id: 'a3', title: 'Master Advanced Fighting Styles', desc: 'Grind masteries toward Superhuman and Godhuman.' },
      { id: 'a4', title: 'Acquire Meta Tier Fruits', desc: 'Acquire PvP powerhouses like Dough, Kitsune, or Leopard.' },
      { id: 'a5', title: 'Obtain Stat-Boosting Accessories', desc: 'Farm rare swords and accessories to complete your setup.' },
      { id: 'a6', title: 'Initiate Race Awakening', desc: 'Unlock special challenges for Human, Shark, Mink, or Angel.' }
    ],
    endgame: [
      { id: 'e1', title: 'Perfect PvP Combo Slashes', desc: 'Master prediction, dash timings, and absolute control.' },
      { id: 'e2', title: 'Bounty and Honor Farming', desc: 'Challenge high-tier players to scale global ranks.' },
      { id: 'e3', title: 'Finalize End-game Loadout', desc: 'Equip Godhuman, peak S-Tier fruits, and optimized gear.' },
      { id: 'e4', title: 'Race V4 Full Transformation', desc: 'Complete high-difficulty trial puzzles to awaken true peak.' },
      { id: 'e5', title: 'Dominate the Competitive Loop', desc: 'Unite PvP, raid rotations, trading, and trial carries.' }
    ]
  };

  // Calculate total progress
  const allSubSteps = [...stepsList.beginner, ...stepsList.mid, ...stepsList.advanced, ...stepsList.endgame];
  const progressPercent = Math.round((completedSteps.length / allSubSteps.length) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      {/* Header Back Link */}
      <button 
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#3ba381] hover:text-[#50cb9f] text-sm font-bold mb-8 transition-colors group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Return to Guides</span>
      </button>

      {/* Hero Banner Grid Card */}
      <div className="bg-gradient-to-br from-[#0c1e1c]/90 via-[#091413] to-[#052d1f]/35 border border-[#3ba381]/35 rounded-3xl p-8 md:p-10 mb-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#285A48]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3ba381]/15 border border-[#3ba381]/30 px-3 py-1 rounded-full mb-3 text-[10px] font-black tracking-widest text-[#3ba381] uppercase">
              ULTIMATE WALKTHROUGH
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 uppercase select-none">
              Blox Fruits Full Progression Guide
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              A master class journey mapping your rise through the seas. Complete milestones to monitor your readiness for the ultimate PvP stage.
            </p>
          </div>

          {/* Interactive Progress Meter Widget */}
          <div className="bg-[#091413]/85 border border-[#285A48]/30 px-6 py-5 rounded-2xl w-full md:w-64">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#3ba381] uppercase">READiness rate</span>
              <span className="text-white text-sm font-bold font-mono">{progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full bg-[#0c1e1c] rounded-full overflow-hidden border border-[#285A48]/15">
              <div 
                className="h-full bg-gradient-to-r from-[#285A48] to-[#3ba381] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(59,163,129,0.5)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-mono text-center">
              {completedSteps.length} of {allSubSteps.length} Milestones Checked
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-[#285A48]/20 pb-4 justify-start sm:justify-center">
        {[
          { id: 'beginner', label: '1. Beginner (lvl 1-700)', icon: Compass },
          { id: 'mid', label: '2. Mid Game (lvl 700-1500)', icon: Sword },
          { id: 'advanced', label: '3. Advanced (lvl 1500-2450)', icon: Shield },
          { id: 'endgame', label: '4. End Game (Max lvl 2450+)', icon: Trophy },
          { id: 'summary', label: 'Master Summary', icon: ScrollText }
        ].map(tab => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide select-none outline-none transition-all duration-200 cursor-pointer border ${
                isActive
                  ? 'text-white border-[#3ba381] bg-[#285A48]/35 shadow-lg shadow-emerald-950/45'
                  : 'text-slate-400 hover:text-slate-200 border-transparent bg-transparent hover:bg-[#0c1e1c]/30'
              }`}
            >
              <IconComponent size={14} className={isActive ? 'text-[#3ba381]' : 'text-slate-500'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Panel Content */}
      <div className="bg-[#091413] border border-[#285A48]/15 rounded-3xl p-6 md:p-8 shadow-xl min-h-[400px]">
        {activeTab === 'beginner' && (
          <div className="space-y-8">
            <div className="border-b border-[#285A48]/15 pb-5 mb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono text-[#3ba381] font-bold tracking-widest uppercase block mb-1">SECTION ONE</span>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Beginner Stage (Level 1–700) — First Sea</h2>
              </div>
              <div className="bg-[#0c1e1c]/60 px-4 py-2 rounded-xl border border-[#285A48]/20 text-xs text-slate-300">
                <span className="text-slate-400">Main Goal:</span> <strong className="text-white">Learn basics, level up fast, and get your first strong fruit</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Detailed Progression Steps */}
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    id: 'b1',
                    step: 'Step 1',
                    title: 'Choose Your Path',
                    desc: 'You start as either a Pirate or a Marine. Pirates focus on offensive progression and bounty hunting down the line, while Marines provide structured progression with matching leveling speeds. Note that choice does not impact your actual leveling efficiency, only your roleplay style and PvP faction identity.'
                  },
                  {
                    id: 'b2',
                    step: 'Step 2',
                    title: 'Start Grinding Immediately',
                    desc: 'Avoid wandering between targets pointlessly. Strictly commit to this loop: accept safe NPC island quest, slay the specified enemies, return to claim experience, and immediately restart. This core loop represents the fastest source of experience points in the entire game.'
                  },
                  {
                    id: 'b3',
                    step: 'Step 3',
                    title: 'Stat Point Setup (Very Important)',
                    desc: 'Configure your early setup carefully: assign points primarily to Melee to increase energy capacity and physical strength, and secondarily to Defense to improve survivability against high-lvl NPC mobs. Allocate to Blox Fruit only if you have acquired an active premium farming fruit. Never spread status points evenly as it significantly impairs your damage output.'
                  },
                  {
                    id: 'b4',
                    step: 'Step 4',
                    title: 'First Fruit Strategy',
                    desc: 'Your active target is to refrain from collecting arbitrary low-tier fruits. Seek optimal starter choices: Light (provides maximum flight speed and clean farming capabilities), Ice (delivers stunning effects and control), Flame (well-balanced damage stats), or Magma (scales extreme damage output later). Do not waste valuable Beli on weak options early.'
                  },
                  {
                    id: 'b5',
                    step: 'Step 5',
                    title: 'Unlock Fighting Style',
                    desc: 'Transition away from the starter physical combat attacks as soon as possible. Pick up early styles such as Dark Step (heavy elemental kicks) or Electric (lightning speed physical hits). Ensure you upgrade fighting styles even if you are heavily reliant on primary fruit abilities.'
                  },
                  {
                    id: 'b6',
                    step: 'Step 6',
                    title: 'First Sea Progression Zones',
                    desc: 'Follow the specific islands structure in perfect order: Starter Island, Jungle, Desert, Frozen Village, Marine Fortress, Skylands, Prison, Colosseum, Magma Village, and and the final Level 700 island to finish the First Sea map.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                    className="relative group p-5 bg-[#0c1e1c]/30 rounded-2xl border border-[#285A48]/10 hover:border-[#3ba381]/25 transition-all"
                  >
                    <button 
                      onClick={() => toggleStep(item.id)}
                      className="absolute top-5 right-5 text-[#3ba381] hover:text-[#50cb9f] transition-all cursor-pointer"
                    >
                      {completedSteps.includes(item.id) ? (
                        <CheckSquare size={20} className="text-[#3ba381]" />
                      ) : (
                        <Square size={20} className="text-slate-500 group-hover:text-[#3ba381]" />
                      )}
                    </button>

                    <div className="pr-10">
                      <span className="text-[10px] font-mono text-[#3ba381]/80 font-bold block mb-1 uppercase">{item.step}</span>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar stats & targets */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-[#0c1e1c]/50 border border-[#285A48]/15 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-4 uppercase flex items-center gap-2">
                    <Target size={16} className="text-[#3ba381]" />
                    <span>First Sea Objectives</span>
                  </h4>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Reach level 700 with high-efficiency quests</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Maximize physical combat stats (Melee focus to 400+)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Prepare 1,000,000+ general Beli currency to unlock Second Sea content</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#285A48]/10 to-transparent border border-[#285A48]/25 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-2 uppercase">Pro Farming Tip</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Always leverage elemental Logia immunity. If your physical level is higher than the enemy NPCs, you become completely immune to standard physical strikes, letting you group up large packs and wipe them out without taking damage.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'mid' && (
          <div className="space-y-8">
            <div className="border-b border-[#285A48]/15 pb-5 mb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono text-[#3ba381] font-bold tracking-widest uppercase block mb-1">SECTION TWO</span>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Mid Game (Level 700–1500) — Second Sea</h2>
              </div>
              <div className="bg-[#0c1e1c]/60 px-4 py-2 rounded-xl border border-[#285A48]/20 text-xs text-slate-300">
                <span className="text-slate-400">Main Goal:</span> <strong className="text-white">Unlock powerful systems including raids, trading, and awakened fruits</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    id: 'm1',
                    step: 'Step 1',
                    title: 'Unlock Second Sea',
                    desc: 'After reaching verified Level 700, return to the prison area, eliminate the formidable Ice Admiral candidate, get key instructions, and journey with the special captain NPC directly to access the Kingdom of Rose in the Second Sea.'
                  },
                  {
                    id: 'm2',
                    step: 'Step 2',
                    title: 'Focus on Efficient Grinding',
                    desc: 'The XP cycle shifts away from simple quests. Combine standard quest farming, boss defeat encounters, and moderate server hopping to fight rare bosses who grant massive payouts.'
                  },
                  {
                    id: 'm3',
                    step: 'Step 3',
                    title: 'Learn Trading System',
                    desc: 'Access the dedicated trading inventory in Rose Cafe. Never agree to fast trades without cross-verifying value. High-demand mythical fruits carry massive trading leverage.'
                  },
                  {
                    id: 'm4',
                    step: 'Step 4',
                    title: 'Begin Raid System',
                    desc: 'Engaging in global co-op raids is highly critical. Completing raids unlocks currency Fragments necessary to transform base fruits and awaken your advanced capabilities.'
                  },
                  {
                    id: 'm5',
                    step: 'Step 5',
                    title: 'Awakening Fruits',
                    desc: 'Awakening grants high damage, brand new skill slots, and rapid PVP stun combos. Prioritize completing active awakenings for Light, Flame, or Ice to build solid utility.'
                  },
                  {
                    id: 'm6',
                    step: 'Step 6',
                    title: 'Better Fighting Styles',
                    desc: 'Trade physical skills for premium styles: acquire Water Kung Fu from the deep guards or electric claw components to dominate close-range combat scenarios.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                    className="relative group p-5 bg-[#0c1e1c]/30 rounded-2xl border border-[#285A48]/10 hover:border-[#3ba381]/25 transition-all"
                  >
                    <button 
                      onClick={() => toggleStep(item.id)}
                      className="absolute top-5 right-5 text-[#3ba381] hover:text-[#50cb9f] transition-all cursor-pointer"
                    >
                      {completedSteps.includes(item.id) ? (
                        <CheckSquare size={20} className="text-[#3ba381]" />
                      ) : (
                        <Square size={20} className="text-slate-500 group-hover:text-[#3ba381]" />
                      )}
                    </button>

                    <div className="pr-10">
                      <span className="text-[10px] font-mono text-[#3ba381]/80 font-bold block mb-1 uppercase">{item.step}</span>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-[#0c1e1c]/50 border border-[#285A48]/15 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-4 uppercase flex items-center gap-2">
                    <Target size={16} className="text-[#3ba381]" />
                    <span>Second Sea Objectives</span>
                  </h4>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Prepare build configuration for competitive PvP</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Awaken at least one high-tier farming fruit fully</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Acquire essential fragments by completing server raids</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#285A48]/10 to-transparent border border-[#285A48]/25 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-2 uppercase">Core Raid Advice</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Start with the Flame Raid or Light Raid. They have the simplest structures and can be easily cleared even with basic teams, helping you stack fragments quickly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div className="space-y-8">
            <div className="border-b border-[#285A48]/15 pb-5 mb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono text-[#3ba381] font-bold tracking-widest uppercase block mb-1">SECTION THREE</span>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Advanced Game (Level 1500–2450) — Third Sea</h2>
              </div>
              <div className="bg-[#0c1e1c]/60 px-4 py-2 rounded-xl border border-[#285A48]/20 text-xs text-slate-300">
                <span className="text-slate-400">Main Goal:</span> <strong className="text-white">Become powerful enough for PvP dominance and endgame content</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    id: 'a1',
                    step: 'Step 1',
                    title: 'Unlock Third Sea',
                    desc: 'You must reach Level 1500+ and defeat the rip_indra requirement quest line to gain clearance credentials for Port Town in the Third Sea.'
                  },
                  {
                    id: 'a2',
                    step: 'Step 2',
                    title: 'Endgame Grinding Methods',
                    desc: 'Rotate challenges by hunting down Elite Pirates on the high-level islands, coordinating boss-rushes, and completing fast quests.'
                  },
                  {
                    id: 'a3',
                    step: 'Step 3',
                    title: 'Strong Fighting Styles',
                    desc: 'Devote hours to grinding mastery tracks: max out Superhuman, Death Step, Dragon Talon, and lay foundations to secure the premier Godhuman style.'
                  },
                  {
                    id: 'a4',
                    step: 'Step 4',
                    title: 'Strong Fruits (Meta Tier)',
                    desc: 'Shift focusing toward high PvP meta fruits including Leopard, Dragon, Dough, Spirit, and Kitsune for unmatched damage and combat swiftness.'
                  },
                  {
                    id: 'a5',
                    step: 'Step 5',
                    title: 'Accessories & Gear',
                    desc: 'Farm high-difficulty legendary swords and premium utility accessories from final map bosses to unlock massive stat configurations.'
                  },
                  {
                    id: 'a6',
                    step: 'Step 6',
                    title: 'Race Awakening Progression',
                    desc: 'Initiate specialized trials to unlock latent abilities in your chosen race: Human, Shark, Mink, Angel, Ghoul, or Cyborg.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                    className="relative group p-5 bg-[#0c1e1c]/30 rounded-2xl border border-[#285A48]/10 hover:border-[#3ba381]/25 transition-all"
                  >
                    <button 
                      onClick={() => toggleStep(item.id)}
                      className="absolute top-5 right-5 text-[#3ba381] hover:text-[#50cb9f] transition-all cursor-pointer"
                    >
                      {completedSteps.includes(item.id) ? (
                        <CheckSquare size={20} className="text-[#3ba381]" />
                      ) : (
                        <Square size={20} className="text-slate-500 group-hover:text-[#3ba381]" />
                      )}
                    </button>

                    <div className="pr-10">
                      <span className="text-[10px] font-mono text-[#3ba381]/80 font-bold block mb-1 uppercase">{item.step}</span>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-[#0c1e1c]/50 border border-[#285A48]/15 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-4 uppercase flex items-center gap-2">
                    <Target size={16} className="text-[#3ba381]" />
                    <span>Third Sea Objectives</span>
                  </h4>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Maximize physical and weapon masteries to 600</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Defeat the critical rip_indra boss and unlock elite content</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Acquire legendary swords such as Tushita/Yama</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#285A48]/10 to-transparent border border-[#285A48]/25 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-2 uppercase">Third Sea Tip</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Always hunt Elite Pirates when you hear server-wide alerts. They provide massive levels of fragments, clean gold, and rare accessories that cannot be farming-farmed elsewhere.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'endgame' && (
          <div className="space-y-8">
            <div className="border-b border-[#285A48]/15 pb-5 mb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono text-[#3ba381] font-bold tracking-widest uppercase block mb-1">SECTION FOUR</span>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">End Game (MAX LEVEL 2450+)</h2>
              </div>
              <div className="bg-[#0c1e1c]/60 px-4 py-2 rounded-xl border border-[#285A48]/20 text-xs text-slate-300">
                <span className="text-slate-400">Main Goal:</span> <strong className="text-white">Become PvP dominant and complete all endgame content</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    id: 'e1',
                    step: 'Step 1',
                    title: 'Master PvP Combos',
                    desc: 'At this advanced phase, raw levels matter less than muscle memory and combo patterns: practice quick stun chains, learn exact dash frames, bait out evasion mechanics, and lock down fights within seconds.'
                  },
                  {
                    id: 'e2',
                    step: 'Step 2',
                    title: 'Bounty and Honor Grinding',
                    desc: 'Enter regular PvP server duels to secure bounty. Slaying players scales your faction rankings, yielding massive statistics bonuses in the competitive arena.'
                  },
                  {
                    id: 'e3',
                    step: 'Step 3',
                    title: 'Perfect Loadout Configuration',
                    desc: 'Assemble the final optimized kit: equip top tier Godhuman fighting style, S-Tier meta fruits (Kitsune, Dough, or Leopard), and high-rank legendary weapons.'
                  },
                  {
                    id: 'e4',
                    step: 'Step 4',
                    title: 'Race V4 Awakening Trials',
                    desc: 'Assemble group alliances to undertake specialized trials under the full moon inside Temple of Time. Complete the puzzles to gain ultimate ancient powers.'
                  },
                  {
                    id: 'e5',
                    step: 'Step 5',
                    title: 'Master the Game Loop',
                    desc: 'The game now consists of engaging in persistent PvP battles, participating in raids to carry novice players, hunting top tier bosses, and updating your combo strategies.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                    className="relative group p-5 bg-[#0c1e1c]/30 rounded-2xl border border-[#285A48]/10 hover:border-[#3ba381]/25 transition-all"
                  >
                    <button 
                      onClick={() => toggleStep(item.id)}
                      className="absolute top-5 right-5 text-[#3ba381] hover:text-[#50cb9f] transition-all cursor-pointer"
                    >
                      {completedSteps.includes(item.id) ? (
                        <CheckSquare size={20} className="text-[#3ba381]" />
                      ) : (
                        <Square size={20} className="text-slate-500 group-hover:text-[#3ba381]" />
                      )}
                    </button>

                    <div className="pr-10">
                      <span className="text-[10px] font-mono text-[#3ba381]/80 font-bold block mb-1 uppercase">{item.step}</span>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-[#0c1e1c]/50 border border-[#285A48]/15 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-4 uppercase flex items-center gap-2">
                    <Target size={16} className="text-[#3ba381]" />
                    <span>Endgame Milestones</span>
                  </h4>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Unlock Tier 4 Race Awakening for ultimate transformations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Reach maximum level capacity of 2450+</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3ba381] rounded-full mt-1.5 flex-shrink-0" />
                      <span>Acquire 30 Million Bounty/Honor stat tiers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#285A48]/10 to-transparent border border-[#285A48]/25 rounded-2xl p-6">
                  <h4 className="text-white text-sm font-bold tracking-tight mb-2 uppercase">Endgame Tip</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Race Awakening V4 completely dictates the PvP meta. Invest time finding helpful trial teammates in the community to complete the puzzles swiftly during the in-game lunar phase.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="space-y-8 animate-fade-in text-slate-300">
            <div className="border-b border-[#285A48]/15 pb-5 mb-5 text-center">
              <span className="text-xs font-mono text-[#3ba381] font-bold tracking-widest uppercase block mb-1">COMPREHENSIVE INDEX</span>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Final Master Summary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: 'Early Game',
                  goals: 'Level 1 to 700 progression',
                  actions: 'Focus on mastering core game mechanics, completing quick island quest loops, and securing a reliable farming fruit like Light or Ice.'
                },
                {
                  phase: 'Mid Game',
                  goals: 'Level 700 to 1500 progression',
                  actions: 'Begin coordinating raids to accumulate fragments, complete fruit awakenings to unlock maximum tier moves, and interact with cafe trading.'
                },
                {
                  phase: 'Late Game',
                  goals: 'Level 1500 to 2450 progression',
                  actions: 'Build optimized combat sets, start paths toward Godhuman, farm high-tier accessories from bosses, and initiate Race Awakening.'
                },
                {
                  phase: 'End Game',
                  goals: 'Level 2450+ Max status progression',
                  actions: 'Achieve absolute PvP dominance, master mechanical stun combos, build a high character bounty ranking, and unlock Race V4 transformations.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0c1e1c]/45 border border-[#285A48]/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#3ba381]/30 transition-all duration-300"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#3ba381] font-black uppercase tracking-wider block mb-1">PHASE 0{index + 1}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{item.phase}</h3>
                    <p className="text-[#3ba381] text-xs font-semibold mb-4">{item.goals}</p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.actions}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#0c1e1c]/65 border border-[#285A48]/15 rounded-3xl p-8 mt-8 text-center max-w-2xl mx-auto">
              <Award className="mx-auto text-[#3ba381] mb-4 shadow-[#3ba381]/25" size={40} />
              <h3 className="text-lg font-bold text-white mb-2 uppercase">Complete Progression Roadmap Verified</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                You possess the full layout to navigate from starter ranks to top tier PvP dominance. Save your progress as you scale the levels to evaluate combat readiness.
              </p>
              <button
                onClick={onBack}
                className="px-8 py-3 bg-[#285A48] hover:bg-[#3ba381] text-white font-bold rounded-2xl shadow-xl transition-all cursor-pointer"
              >
                Back to All Guides
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
