export interface TutorialStep {
  title: string;
  description: string;
}

export interface RichSection {
  title: string;
  description?: string;
  bullets?: string[];
  cards?: { title: string; desc: string }[];
}

export interface RichTutorial {
  steps: RichSection[];
  tips?: string[];
  goalTitle?: string;
  goals?: string[];
}

export interface Game {
  id: string;
  name: string;
  genre: string;
  description: string;
  thumbnail?: string;
  tutorial: TutorialStep[];
  richTutorial?: RichTutorial;
  rating: string;
  visits: string;
  robloxUrl: string;
}

