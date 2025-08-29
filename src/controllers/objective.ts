import { Objective, PrismaClient } from "@prisma/client";
import { ObjectiveDTO } from "@/src/dtos/game";
import { toObjectiveDTO } from "@/src/mappers/game";

const prisma = new PrismaClient();

export async function createObjective(
  encounterId: number
): Promise<ObjectiveDTO> {
  const encounter = await prisma.encounter.findUnique({
    where: { id: encounterId },
  });

  if (encounter === null) {
    throw new Error("Encounter not found");
  }

  const objective = await prisma.objective.create({
    data: {
      encounterId,
      name: "objective1",
      rewardList: [],
      approachList: [],
      difficulty: 20,
      rollResult: null,
    },
  });

  return toObjectiveDTO(objective);
}

export async function getObjectiveById(id: number): Promise<ObjectiveDTO> {
  const objective = await checkObjective(id);

  return toObjectiveDTO(objective);
}

export async function attemptObjective(
  objectiveId: number
): Promise<ObjectiveDTO> {
  const objective = await checkObjective(objectiveId);
  const objectiveDTO = toObjectiveDTO(objective);

  const updatedObjective = objectiveRoll(objectiveDTO);

  return updatedObjective;
}

async function objectiveRoll(objective: ObjectiveDTO): Promise<ObjectiveDTO> {
  //logic incomplete

  const updatedObjective = objective;

  return updatedObjective;
}

async function checkObjective(id: number): Promise<Objective> {
  const objective = await prisma.objective.findUnique({
    where: {
      id,
    },
  });

  if (objective === null) {
    throw new Error("Objective not found");
  }

  return objective;
}
