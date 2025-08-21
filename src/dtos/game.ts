import { QuestStatus, EncounterReward, ActionEffect } from "@prisma/client";

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

export type EncounterDTO = {
  id: number;
  objectiveList: ObjectiveDTO[];
  actionList: ActionDTO[];
  name: string;
  promptLimit: number;
};

export type ObjectiveDTO = {
  id: number;
  name: string;
  rewardList: EncounterReward[];
  difficulty: number;
  rollResult: number | null;
};

export type ActionDTO = {
  id: number;
  name: string;
  effectList: ActionEffect[];
  difficulty: number;
  rollResult: number | null;
};
