import { Character, Quest } from "@prisma/client";
import { CharacterDTO, QuestDTO } from "../dtos/game";

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
