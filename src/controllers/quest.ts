import { PrismaClient, QuestStatus } from "@prisma/client";
import { QuestDTO } from "@/src/dtos/game";
import { toQuestDTO } from "@/src/mappers/game";

const prisma = new PrismaClient();

export async function createQuest(characterId: number): Promise<QuestDTO> {
  if (characterId !== null) {
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (character === null) {
      throw new Error("Character not found");
    }
  }

  const quest = await prisma.quest.create({
    data: {
      characterId,
      name: "quest1",
      status: QuestStatus.ONGOING,
      objective: "Complete the quest",
      difficulty: 1,
      minDifficulty: 0,
      maxDifficulty: 2,
      encounterLimit: 3,
      storyBeats: [],
    },
  });

  const questDTO = toQuestDTO(quest);

  return questDTO;
}

export async function getQuestById(id: number): Promise<QuestDTO> {
  const quest = await prisma.quest.findUnique({
    where: {
      id,
    },
  });

  if (quest === null) {
    throw new Error("Quest not found");
  }

  return toQuestDTO(quest);
}
