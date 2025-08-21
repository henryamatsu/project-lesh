import { PrismaClient } from "@prisma/client";
import { EncounterDTO } from "@/src/dtos/game";
import { toEncounterDTO } from "@/src/mappers/game";

const prisma = new PrismaClient();

export async function createEncounter(questId: number): Promise<EncounterDTO> {
  const quest = await prisma.quest.findUnique({
    where: { id: questId },
  });

  if (quest === null) {
    throw new Error("Quest not found");
  }

  const encounter = await prisma.encounter.create({
    data: {
      questId,
      name: "encounter1",
      promptLimit: 5,
    },
  });

  return toEncounterDTO(encounter);
}

export async function getEncounterById(id: number): Promise<EncounterDTO> {
  const encounter = await prisma.encounter.findUnique({
    where: {
      id,
    },
  });

  if (encounter === null) {
    throw new Error("Encounter not found");
  }

  return toEncounterDTO(encounter);
}
