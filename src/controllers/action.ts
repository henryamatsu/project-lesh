import { PrismaClient } from "@prisma/client";
import { ActionDTO } from "@/src/dtos/game";
import { toActionDTO } from "@/src/mappers/game";

const prisma = new PrismaClient();

export async function createAction(encounterId: number): Promise<ActionDTO> {
  const encounter = await prisma.encounter.findUnique({
    where: { id: encounterId },
  });

  if (encounter === null) {
    throw new Error("Encounter not found");
  }

  const action = await prisma.action.create({
    data: {
      encounterId,
      name: "action1",
      effectList: [],
      difficulty: 10,
      rollResult: null,
    },
  });

  return toActionDTO(action);
}

export async function getActionById(id: number): Promise<ActionDTO> {
  const action = await prisma.action.findUnique({
    where: {
      id,
    },
  });

  if (action === null) {
    throw new Error("Action not found");
  }

  return toActionDTO(action);
}
