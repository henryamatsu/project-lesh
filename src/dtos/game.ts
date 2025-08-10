import { QuestStatus } from "@prisma/client";

export type CharacterDTO = {
  id: number;
  name: string;
  might: number;
  cunning: number;
  charm: number;
  health: number;
  gold: number;
  inventory: string[];
  powers: string[];
};

export type QuestDTO = {
  id: number;
  name: string;
  status: QuestStatus;
  objective: string;
  difficulty: number;
  minDifficulty: number;
  maxDifficulty: number;
  encounterLimit: number;
  storyBeats: string[];
};
