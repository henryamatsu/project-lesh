import { PrismaClient } from "@prisma/client";
import { CharacterDTO } from "@/src/dtos/game";
import { toCharacterDTO } from "@/src/mappers/game";

const prisma = new PrismaClient();

export async function createCharacter(
  userId: number | null
): Promise<CharacterDTO> {
  if (userId !== null) {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (user === null) {
      throw new Error("User not found");
    }
  }

  const character = await prisma.character.create({
    data: {
      userId,
      name: "character1",
      might: 0,
      cunning: 0,
      charm: 0,
      health: 10,
      gold: 0,
      inventory: [],
      powers: [],
    },
  });

  return toCharacterDTO(character);
}

export async function getCharacterById(id: number): Promise<CharacterDTO> {
  const character = await prisma.character.findUnique({
    where: {
      id,
    },
  });

  if (character === null) {
    throw new Error("Character not found");
  }

  return toCharacterDTO(character);
}
