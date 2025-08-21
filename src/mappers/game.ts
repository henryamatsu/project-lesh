import { Character, Quest, Encounter, Objective, Action } from "@prisma/client";
import {
  ActionDTO,
  CharacterDTO,
  EncounterDTO,
  ObjectiveDTO,
  QuestDTO,
} from "../dtos/game";

// import actionModifierList from "@/src/data/actionModifiers.json";

export function toCharacterDTO(character: Character): CharacterDTO {
  const characterDTO: CharacterDTO = {
    id: character.id,
    name: character.name,
    might: character.might,
    cunning: character.cunning,
    charm: character.charm,
    health: character.health,
    gold: character.gold,
    inventory: [], //character.inventory,
    powers: [], //character.powers
  };

  return characterDTO;
}

export function toQuestDTO(quest: Quest): QuestDTO {
  const questDTO: QuestDTO = {
    id: quest.id,
    name: quest.name,
    status: quest.status,
    objective: quest.objective,
    difficulty: quest.difficulty,
    minDifficulty: quest.minDifficulty,
    maxDifficulty: quest.maxDifficulty,
    encounterLimit: quest.encounterLimit,
    storyBeats: [], //quest.storyBeats
  };

  return questDTO;
}

export function toEncounterDTO(encounter: Encounter): EncounterDTO {
  const encounterDTO: EncounterDTO = {
    id: encounter.id,
    objectiveList: [],
    actionList: [],
    name: encounter.name,
    promptLimit: encounter.promptLimit,
  };

  return encounterDTO;
}

export function toObjectiveDTO(objective: Objective): ObjectiveDTO {
  const objectiveDTO: ObjectiveDTO = {
    id: objective.id,
    name: objective.name,
    rewardList: [],
    approachList: [],
    difficulty: objective.difficulty,
    rollResult: objective.rollResult,
  };

  return objectiveDTO;
}

export function toActionDTO(action: Action): ActionDTO {
  const actionDTO: ActionDTO = {
    id: action.id,
    name: action.name,
    effectList: [],
    approach: action.approach,
    difficulty: action.difficulty,
    rollResult: action.rollResult,
  };

  return actionDTO;
}
