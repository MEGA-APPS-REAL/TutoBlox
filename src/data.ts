import { Game } from './types';
import bloxFruitsThumbnail from './assets/images/blox_fruits_preview_1779442925727.png';
import brookhavenThumbnail from './assets/images/brookhaven_preview_1779443301179.png';
import adoptMeThumbnail from './assets/images/adopt_me_preview_1779443431837.png';
import towerOfHellThumbnail from './assets/images/tower_of_hell_preview_1779443450239.png';
import mm2Thumbnail from './assets/images/murder_mystery_2_preview_1779443478306.png';
import petSim99Thumbnail from './assets/images/pet_simulator_99_preview_1779443495850.png';
import doorsThumbnail from './assets/images/doors_preview_1779443742219.png';
import arsenalThumbnail from './assets/images/arsenal_preview_1779443759252.png';
import piggyThumbnail from './assets/images/piggy_preview_1779443774731.png';
import royaleHighThumbnail from './assets/images/royale_high_preview_1779443790736.png';
import bladeBallThumbnail from './assets/images/blade_ball_preview_1779443808878.png';
import bedwarsThumbnail from './assets/images/bedwars_preview_1779443831545.png';

export const GAMES: Game[] = [
  {
    id: 'blox-fruits',
    name: 'Blox Fruits',
    genre: 'Adventure / Combat',
    description: 'Master the power of mystical fruits and become the strongest pirate or marine.',
    thumbnail: bloxFruitsThumbnail,
    visits: '39.0B+',
    rating: '92%',
    robloxUrl: 'https://www.roblox.com/games/2753915549/Blox-Fruits',
    tutorial: [
      { title: 'Choosing your path', description: 'At the start, you choose between being a Pirate or a Marine. Both have different spawn locations and objectives.' },
      { title: 'Getting your first fruit', description: 'Fruits spawn randomly under trees every hour, or you can buy them from the Blox Fruit Dealer using Beli or Robux.' },
      { title: 'Leveling up', description: 'Complete quests from NPCs found on every island. Focus on stat points in Combat, Defense, and your Fruit/Sword.' },
      { title: 'Mastery', description: 'The more you use a specific move or weapon, the more mastery you gain, unlocking powerful new abilities.' }
    ],
    richTutorial: {
      steps: [
        {
          title: 'Choose Your Path',
          description: 'When you begin your adventure, you’ll choose between becoming a Pirate or a Marine. Both sides have different spawn locations, but you can still explore the same world and fight the same enemies.',
          bullets: [
            'Pirates focus on freedom, bounty hunting, and forming crews.',
            'Marines earn ranks, hunt pirates, and gain unique team benefits.'
          ]
        },
        {
          title: 'Get Your First Fruit',
          description: 'Mystical fruits grant incredible powers such as controlling fire, ice, light, magma, gravity, dragons, and more.',
          bullets: [
            'Finding them under trees when they randomly spawn',
            'Buying them from the Blox Fruit Dealer',
            'Trading with other players',
            'Completing events or raids'
          ],
          cards: [
            { title: 'Natural Fruits', desc: 'Balanced powers with strong attacks' },
            { title: 'Elemental Fruits', desc: 'Allow immunity against weaker enemies' },
            { title: 'Beast Fruits', desc: 'Transform into powerful creatures with massive damage' }
          ]
        },
        {
          title: 'Level Up Faster',
          description: 'The fastest way to grow stronger is by completing quests from NPCs across different islands. As you level up you unlock new islands and seas, gain access to stronger enemies and bosses, and earn Beli, fragments, and rare rewards.',
          cards: [
            { title: 'Melee', desc: 'More energy and fighting power' },
            { title: 'Defense', desc: 'More health and survivability' },
            { title: 'Fruit', desc: 'Stronger fruit abilities' },
            { title: 'Sword', desc: 'Increased sword damage' },
            { title: 'Gun', desc: 'Improved ranged attacks' }
          ]
        },
        {
          title: 'Increase Mastery',
          description: 'Every weapon, fruit, fighting style, and sword has a Mastery Level. The more you use something: the stronger it becomes, new moves unlock, and damage increases. High mastery is essential for unlocking advanced abilities and late-game power.'
        },
        {
          title: 'Explore the Seas',
          description: 'The world is divided into multiple seas, each becoming more difficult and rewarding.',
          cards: [
            { title: 'First Sea', desc: 'Perfect for beginners learning combat and leveling.' },
            { title: 'Second Sea', desc: 'Introduces trading, raids, stronger bosses, and awakened fruits.' },
            { title: 'Third Sea', desc: 'Endgame content with advanced enemies, powerful accessories, rare materials, and difficult PvP battles.' }
          ]
        },
        {
          title: 'Unlock Fighting Styles',
          description: 'Learn powerful martial arts styles from trainers around the map.',
          bullets: [
            'Dark Step',
            'Electric',
            'Water Kung Fu',
            'Dragon Breath',
            'Superhuman',
            'Godhuman'
          ]
        },
        {
          title: 'Awaken Your Fruit',
          description: 'Some fruits can be Awakened through special raids. Awakened fruits gain stronger attacks, better visuals, improved mobility, and massive PvP potential. Awakenings are considered one of the biggest power upgrades in the game.'
        },
        {
          title: 'Defeat Bosses',
          description: 'Bosses spawn around the map and drop rare weapons, accessories, fragments, and huge XP rewards. Some bosses require teamwork and advanced strategies to defeat.'
        },
        {
          title: 'Trading System',
          description: 'Once you reach the Second Sea, you can trade fruits and items with other players. Rare fruits have very high value, and trading becomes an important part of progression.',
          bullets: [
            'Dragon',
            'Leopard',
            'Kitsune',
            'Dough',
            'Spirit'
          ]
        },
        {
          title: 'PvP and Bounty Hunting',
          description: 'At higher levels, players battle each other to earn bounty/honor, titles, reputation, and leaderboard rankings. Mastering movement, combos, dodging, and timing is key to becoming a top PvP player.'
        }
      ],
      tips: [
        'Save strong fruits instead of eating everything immediately',
        'Use codes for free XP boosts and stat resets',
        'Always upgrade Defense to survive longer',
        'Grind bosses whenever possible',
        'Join friends or crews for raids and farming',
        'Learn movement techniques like Flash Step and Air Jump early'
      ],
      goalTitle: 'Goal of the Game',
      goals: [
        'Become the ultimate warrior of the seas by:',
        'Reaching max level',
        'Unlocking legendary fruits',
        'Mastering powerful weapons',
        'Awakening abilities',
        'Defeating raid bosses',
        'Dominating PvP battles',
        'Becoming the strongest Pirate or Marine alive'
      ]
    }
  },
  {
    id: 'brookhaven',
    name: 'Brookhaven RP',
    genre: 'Roleplay',
    description: 'Living a life in a virtual city with friends, houses, and cars.',
    thumbnail: brookhavenThumbnail,
    visits: '52.0B+',
    rating: '85%',
    robloxUrl: 'https://www.roblox.com/games/4924922222/Brookhaven-RP',
    tutorial: [
      { title: 'Getting a house', description: 'Click the house icon on the right menu, select a vacant lot, and pick your dream home style.' },
      { title: 'Vehicles', description: 'Access the vehicle menu to spawn cars, bikes, or skateboards. You can customize their colors and speeds.' },
      { title: 'Job System', description: 'Roleplay as a doctor, police officer, or even a grocery store worker to interact with other players.' },
      { title: 'Personal Styles', description: 'Use the character editor to change your outfit, hair, and accessories without needing Robux.' }
    ],
    richTutorial: {
      steps: [
        {
          title: 'Getting Your Dream House',
          description: 'Start building your life by choosing your very own home. Find an available plot around the city, select a style that matches your personality, and instantly move in and start decorating. You can upgrade to larger homes, luxury mansions, modern villas, apartments, and even themed houses as you progress.',
          bullets: [
            'Click the House icon on the right-side menu',
            'Find an available plot around the city',
            'Select a house style that matches your personality',
            'Instantly move in and start decorating'
          ],
          cards: [
            { title: 'Customizable', desc: 'Fully customizable interiors, floors, and rooms.' },
            { title: 'High-end features', desc: 'Pools, garages, light and furniture controls.' },
            { title: 'Secret spaces', desc: 'Look out for hidden rooms and premium layouts.' },
            { title: 'Roleplay Ready', desc: 'Perfect spaces for friends and family.' }
          ]
        },
        {
          title: 'Vehicles and Transportation',
          description: 'Travel around the city in style using a huge collection of vehicles. Open the Vehicle Menu to spawn.',
          bullets: [
            'Spawn and ride: Sports cars, SUVs, Motorcycles, Skateboards, Scooters, and Luxury vehicles',
            'Upgrade with: Different custom colors, faster speed options, unique designs, and custom neon effects'
          ],
          cards: [
            { title: 'Speed Tuned', desc: 'High-velocity options perfect for long-distance cruising.' },
            { title: 'Roleplay Streets', desc: 'Smaller options are perfect for city exploration.' }
          ]
        },
        {
          title: 'Job & Roleplay System',
          description: 'Take on active roles in society to help other players, unlock job-specific equipment, and earn in-game roleplay standing.',
          bullets: [
            'Popular structures: Police Officer, Doctor, Firefighter, Teacher, Chef, Grocery Worker, Taxi Driver, News Reporter',
            'Switch roles anytime depending on the style of story you want to create'
          ],
          cards: [
            { title: 'In-Game Actions', desc: 'Earn money, rescue citizens, and solve local crises.' },
            { title: 'Special Gear', desc: 'Unlock special tools and matching career vehicles.' }
          ]
        },
        {
          title: 'Personal Styles & Character Customization',
          description: 'Create a fully unique character that matches your style using the robust styling menus. Unlimited custom combinations mean you don’t need Robux to look amazing!',
          bullets: [
            'Hairstyles & clothes matching',
            'Face options, hats, and glasses',
            'Custom animations and stylized emotes'
          ]
        },
        {
          title: 'Explore the City',
          description: 'The city of Brookhaven is filled with interactive landmarks where you can meet up, host events, and find hidden mysteries.',
          bullets: [
            'Local institutions: Schools, hospitals, police offices, cafes, parks, beaches, and shopping areas',
            'Secrets: Look out for hidden locations and locked vaults around the city'
          ]
        },
        {
          title: 'Make Friends & Roleplay Stories',
          description: 'Socializing is the heartbeat of Brookhaven. Every server is an active community sandbox powered by players.',
          bullets: [
            'Create custom families and invite friends',
            'Host high-end parties and luxury events',
            'Run local businesses or form active neighborhoods'
          ]
        },
        {
          title: 'Earn Money & Upgrade Your Lifestyle',
          description: 'Maintain steady employment and engage in city activities to expand your fortunes and unlock luxury commodities.',
          bullets: [
            'Purchase better and larger properties',
            'Acquire the fastest vehicles in the game',
            'Purchase high-tier outfits and rare interior decorations'
          ]
        }
      ],
      tips: [
        'Claim a house early before the best plots around town fill up',
        'Try multiple jobs to find your favorite lifestyle roleplay style',
        'Save money for custom velocity vehicle upgrades',
        'Customize your character’s apparel and colors to stand out in crowds',
        'Explore map corners to find hidden safe pathways and secret doors',
        'Invite and join active friends for highly immersive roleplay experiences'
      ],
      goalTitle: 'Goal of the Game',
      goals: [
        'Build your dream lifestyle, make friends, roleplay exciting stories, customize everything around you, and create unforgettable adventures in a living online world.'
      ]
    }
  },
  {
    id: 'adopt-me',
    name: 'Adopt Me!',
    genre: 'Roleplay / SIM',
    description: 'Adopt pets, decorate your home, and explore the magical world of Adoption Island.',
    thumbnail: adoptMeThumbnail,
    visits: '38.0B+',
    rating: '85%',
    robloxUrl: 'https://www.roblox.com/games/920587237/Adopt-Me',
    tutorial: [
      { title: 'Starting out', description: 'Decide if you want to be a Parent or a Baby. Parents earn more Money (Bucks) but Babies also earn income.' },
      { title: 'Caring for pets', description: 'Keep your pet happy by fulfilling their needs (hunger, thirst, sleep, boredom) which appear as icons.' },
      { title: 'Trading', description: 'You can trade pets and items with other players. Always check the rarity (Common to Legendary) to ensure a fair trade.' },
      { title: 'Decorating', description: 'Enter your house and click "Edit House" to buy furniture and customize layouts using your Bucks.' }
    ],
    richTutorial: {
      steps: [
        {
          title: 'Starting Out',
          description: 'When you first join the game, you choose your role in the world: Parent or Baby. Your choice affects your gameplay style, but both roles can enjoy trading, decorating, and progression.',
          bullets: [
            'Parents: Earn more Bucks and can take care of pets, buy items, and upgrade homes faster',
            'Babies: Still earn Bucks over time and can explore, play, and interact with pets'
          ]
        },
        {
          title: 'Caring for Pets',
          description: 'Pets are the heart of the game, and keeping them happy is key to earning rewards.',
          bullets: [
            'Hunger 🍖 → Feed your pet regularly to keep them energized',
            'Thirst 💧 → Give water or drinks to stay refreshed',
            'Sleep 😴 → Let them rest in beds or sleeping areas when tired',
            'Boredom 🎾 → Play with toys and interact at key locations'
          ],
          cards: [
            { title: 'Happy Pets', desc: 'Keeping needs met keeps your companions thriving and happy!' },
            { title: 'Growth and Evolution', desc: 'Caring for pets regularly allows them to grow and level up.' },
            { title: 'Bucks Multipliers', desc: 'Earn extra in-game money and milestone bonuses.' }
          ]
        },
        {
          title: 'Trading System',
          description: 'Trading lets you exchange pets and items with other players to build your dream collection safely.',
          bullets: [
            'Send trade requests directly to nearby online players',
            'Add pets, customized items, or Bucks into the trade window',
            'Confirm only when both sides are completely happy and agree'
          ],
          cards: [
            { title: 'Common & Uncommon', desc: 'Easy to find, standard collection value.' },
            { title: 'Rare & Ultra Rare', desc: 'Stronger, uniquely themed, and highly sought-after pets.' },
            { title: 'Legendary', desc: 'Extremely rare and powerful. Check values carefully to secure fair trades!' }
          ]
        },
        {
          title: 'Decorating Your House',
          description: 'Your home is your personal space to design, relax, and show off your personal style.',
          bullets: [
            'How to edit: Enter your house, click "Edit House" and browse the catalog',
            'Spend Bucks directly to place blocks, beds, sofas, and beautiful kitchen appliances',
            'Create specialized areas like colorful pet playgrounds or relaxing parent lounges'
          ],
          cards: [
            { title: 'Tailored Interiors', desc: 'Re-theme walls, floors, and lights to match your style.' },
            { title: 'Play and Sleep Zones', desc: 'Add interactive toys and beds to care for pets directly at home.' }
          ]
        },
        {
          title: 'Earning Bucks',
          description: 'Your gateway to premium eggs, larger mansions, and custom items.',
          bullets: [
            'Fulfill the active needs of your pets and your own character',
            'Complete daily tasks and activities around town',
            'Play cooperatively as a Parent to gain active babysitting earnings',
            'Participate in high-energy custom server events'
          ]
        }
      ],
      tips: [
        'Always keep your pet’s needs balanced through the screen indicators',
        'Don’t rush trades—always check item and pet rarity values first',
        'Upgrade your house slowly but smartly; prioritize utility items like food bowls first',
        'Use Bucks wisely on essential starter items and high-tier eggs',
        'Try different styles of pets to find your favorite adventure companions'
      ],
      goalTitle: 'Goal of the Game',
      goals: [
        'Build a happy life by raising pets, earning Bucks, trading wisely, and creating the perfect home for you and your companions in a fun and social world.'
      ]
    }
  },
  {
    id: 'tower-of-hell',
    name: 'Tower of Hell',
    genre: 'Obby / Parkour',
    description: 'A randomly generated obstacle course where you must reach the top before time runs out.',
    thumbnail: towerOfHellThumbnail,
    visits: '22.0B+',
    rating: '73%',
    robloxUrl: 'https://www.roblox.com/games/1962086868/Tower-of-Hell',
    tutorial: [
      { title: 'The Basics', description: 'You have 8 minutes to reach the top. There are no checkpoints; if you fall, you start from the bottom.' },
      { title: 'Using Items', description: 'Spend coins earned from climbing to buy "Coils" or effects that help you jump higher or stay safe.' },
      { title: 'Map Phases', description: 'Learn the patterns of lasers and spinning blocks. Timing your jumps is more important than speed.' },
      { title: 'Pro Mode', description: 'Once you master the basic tower, try the "Pro" towers which are much longer and more difficult.' }
    ]
  },
  {
    id: 'mm2',
    name: 'Murder Mystery 2',
    genre: 'Horror / Strategy',
    description: 'Play as an Innocent, Sheriff, or Murderer in this tense game of cat and mouse.',
    thumbnail: mm2Thumbnail,
    visits: '15.0B+',
    rating: '90%',
    robloxUrl: 'https://www.roblox.com/games/142823291/Murder-Mystery-2',
    tutorial: [
      { title: 'Innocent Role', description: 'Run and hide. Your goal is to survive until the Sheriff shoots the Murderer or the timer runs out.' },
      { title: 'Sheriff Role', description: 'Identify the Murderer and shoot them with your gun. If you shoot an Innocent, you drop your weapon.' },
      { title: 'Murderer Role', description: 'Eliminate everyone while avoiding being seen or shot. Use your knife efficiently and hide it when not in use.' },
      { title: 'Hero Mechanic', description: 'If the Sheriff dies, any Innocent can pick up the gun to become the Hero.' }
    ]
  },
  {
    id: 'pet-sim-99',
    name: 'Pet Simulator 99',
    genre: 'Simulator',
    description: 'Collect coins, unlock new zones, and hatch hundreds of unique pets.',
    thumbnail: petSim99Thumbnail,
    visits: '3.8B+',
    rating: '94%',
    robloxUrl: 'https://www.roblox.com/games/8737899170/Pet-Simulator-99',
    tutorial: [
      { title: 'Farming Coins', description: 'Click on breakable objects like piles of coins or crates to earn currency for new eggs.' },
      { title: 'Hatching Eggs', description: 'Use your coins to buy eggs. Rarer eggs contain stronger pets that help you farm faster.' },
      { title: 'Enchants', description: 'Equip enchant cards to boost your luck, damage, or diamond drops.' },
      { title: 'The Rebirth', description: 'Once you reach a certain zone, you can Rebirth to gain permanent multipliers and unlock new features.' }
    ]
  },
  {
    id: 'doors',
    name: 'Doors',
    genre: 'Horror / Puzzle',
    description: 'Navigate through a mysterious hotel while avoiding terrifying entities.',
    thumbnail: doorsThumbnail,
    visits: '6.2B+',
    rating: '92%',
    robloxUrl: 'https://www.roblox.com/games/6516141723/DOORS',
    tutorial: [
      { title: 'Exploring Rooms', description: 'Open doors to numbered rooms. Be on the lookout for keys, lighters, and flashlight batteries.' },
      { title: 'Sound Cues', description: 'Listen closely. A flicker in the lights means Rush or Ambush is coming; hide in a locker immediately.' },
      { title: 'The Library', description: 'Room 50 requires you to find books to solve a code while avoiding the blind Entity called Figure.' },
      { title: 'Managing Health', description: 'Eat bandages to heal. Avoid staying in closets too long or "Hide" will push you out.' }
    ]
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    genre: 'FPS',
    description: 'A fast-paced arms race style game where every kill gives you a new weapon.',
    thumbnail: arsenalThumbnail,
    visits: '5.5B+',
    rating: '88%',
    robloxUrl: 'https://www.roblox.com/games/286090429/Arsenal',
    tutorial: [
      { title: 'The Weapon Cycle', description: 'Every kill advances you to the next weapon. The final kill must be with the Golden Knife.' },
      { title: 'Movement Tactics', description: 'Keep moving. Standing still makes you an easy target. Master jumping and strafing.' },
      { title: 'Utility', description: 'Use your secondary items or abilities (if active in the mode) to gain tactical advantages over enemies.' },
      { title: 'Map Knowledge', description: 'Learn item spawns and high-ground positions to control the flow of the match.' }
    ]
  },
  {
    id: 'piggy',
    name: 'Piggy',
    genre: 'Survival / Horror',
    description: 'Solve puzzles and escape the map before Piggy catches you.',
    thumbnail: piggyThumbnail,
    visits: '13.0B+',
    rating: '90%',
    robloxUrl: 'https://www.roblox.com/games/4623386862/Piggy',
    tutorial: [
      { title: 'Item Roles', description: 'Keys unlock doors, gears start machines, and wrenches fix panels. Only one item can be held at once.' },
      { title: 'Distractions', description: 'Use items like the Hammer or Gun to temporarily stun Piggy or unlock new paths.' },
      { title: 'Multitasking', description: 'Work with teammates. One person can distract Piggy while others complete the puzzles.' },
      { title: 'Bot vs Player', description: 'Identify if the Piggy is an AI bot (predictable paths) or a real Player (can use traps and strategy).' }
    ]
  },
  {
    id: 'royale-high',
    name: 'Royale High',
    genre: 'Roleplay / Fantasy',
    description: 'Attend a magical school, participate in balls, and dress up in stunning outfits.',
    thumbnail: royaleHighThumbnail,
    visits: '10.5B+',
    rating: '85%',
    robloxUrl: 'https://www.roblox.com/games/735030788/Royale-High',
    tutorial: [
      { title: 'The School Schedule', description: 'Attend classes like Chemistry and Art to earn XP and level up your character.' },
      { title: 'Diamonds', description: 'Collect diamonds around the map or from fountain wishes to buy items in the shop.' },
      { title: 'Dress Up', description: 'Use the character customizer to build intricate outfits using wings, skirts, and heels.' },
      { title: 'The Fountain', description: 'Visit the Fountain of Dreams daily for a chance to win a rare Halo or extra diamonds.' }
    ]
  },
  {
    id: 'blade-ball',
    name: 'Blade Ball',
    genre: 'Action / Sports',
    description: 'Deflect an increasingly fast and unpredictable homing ball using weapon swings and custom combat abilities.',
    thumbnail: bladeBallThumbnail,
    visits: '5.2B+',
    rating: '93%',
    robloxUrl: 'https://www.roblox.com/games/13772394625/Blade-Ball',
    tutorial: [
      { title: 'Perfect Timing', description: 'Watch the color of the ball. When it highlights or approaches your zone, press block at the precise millisecond to deflect it.' },
      { title: 'Selecting Abilities', description: 'Equip powerful active and passive skills like Teleport, Freeze, or Windstorm using accumulated coins.' },
      { title: 'Curve-Balling', description: 'Change your direction immediately after blocking to send the ball to unexpected players at high speed.' },
      { title: 'Stand-off Control', description: 'When down to the final duo, alternate clicks rapidly and use mobility options to force your opponent to miss step.' }
    ]
  },
  {
    id: 'bedwars',
    name: 'BedWars',
    genre: 'Strategy / PvP',
    description: 'Coordinate with your squad to defend your bed while storming enemy bases and dominating generators.',
    thumbnail: bedwarsThumbnail,
    visits: '8.5B+',
    rating: '82%',
    robloxUrl: 'https://www.roblox.com/games/6872265039/BedWars',
    tutorial: [
      { title: 'Fortifying the Bed', description: 'Buy wool, clay, or obsidian blocks early on to safeguard your bed core from stealth attacks.' },
      { title: 'Resource Runs', description: 'Control the center generators to mine iron, gold, emeralds, and diamonds for tier upgrades.' },
      { title: 'Kit Roles', description: 'Pick a specialized character kit that matches your playstyle, whether for team assistance or pure offense.' },
      { title: 'Combat Maneuvers', description: 'Buy high-tier armor and explosive TNT to safely break into opponent structures and destroy beds.' }
    ]
  }
];
