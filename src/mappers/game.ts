import { Character } from "@prisma/client";
import { CharacterDTO } from "../dtos/game";

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
