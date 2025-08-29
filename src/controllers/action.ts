import {
  Action,
  ActionApproach,
  Objective,
  PrismaClient,
} from "@prisma/client";
import { ActionDTO, ObjectiveDTO } from "@/src/dtos/game";
import { toActionDTO, toObjectiveDTO } from "@/src/mappers/game";

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
      approach: ActionApproach.GENERAL,
      difficulty: 10,
      rollResult: null,
    },
  });

  return toActionDTO(action);
}

export async function getActionById(id: number): Promise<ActionDTO> {
  const action = await checkAction(id);

  return toActionDTO(action);
}

export async function attemptAction(
  actionId: number,
  objectiveId: number
): Promise<{ action: ActionDTO; objective: ObjectiveDTO }> {
  const action = await checkAction(actionId);
  const objective = await checkObjective(objectiveId);
  const actionDTO = toActionDTO(action);
  const objectiveDTO = toObjectiveDTO(objective);

  const updates = actionRoll(actionDTO, objectiveDTO);

  return updates;
}

async function actionRoll(
  action: ActionDTO,
  objective: ObjectiveDTO
): Promise<{ action: ActionDTO; objective: ObjectiveDTO }> {
  //logic incomplete

  const updatedObjective = await adjustObjective(objective);
  const updatedAction = action;

  const updates = {
    action: updatedAction,
    objective: updatedObjective,
  };

  return updates;
}

async function adjustObjective(objective: ObjectiveDTO): Promise<ObjectiveDTO> {
  //logic incomplete
  return objective;
}

async function checkAction(id: number): Promise<Action> {
  const action = await prisma.action.findUnique({
    where: {
      id,
    },
  });

  if (action === null) {
    throw new Error("Action not found");
  }

  return action;
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
