import { Action, ActionApproach, PrismaClient } from "@prisma/client";
import { EncounterDTO, ActionDTO, ObjectiveDTO } from "@/src/dtos/game";
import {
  toEncounterDTO,
  toActionDTO,
  toObjectiveDTO,
} from "@/src/mappers/game";

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

  await createObjectives(encounter.id);
  await createActions(encounter.id);

  return toEncounterDTO(encounter);
}

// createEncounter helper functions ↓

async function createObjectives(encounterId: number) {
  const encounter = await prisma.encounter.findUnique({
    where: { id: encounterId },
  });

  if (encounter === null) {
    throw new Error("Encounter not found");
  }

  const objectiveList: ObjectiveDTO[] = [];
  const objectiveCount = 1;

  for (let i = 0; i < objectiveCount; i++) {
    // generateObjectiveDetails();

    const objectiveInput = {
      encounterId,
      name: `objective ${i + 1}`,
      rewardList: [],
      approachList: [
        ActionApproach.GENERAL,
        ActionApproach.VIOLENCE,
        ActionApproach.DIPLOMACY,
        ActionApproach.SUBTERFUGE,
      ],
      difficulty: 10,
      rollResult: null,
    };

    const objective = await prisma.objective.create({
      data: objectiveInput,
    });

    objectiveList.push(toObjectiveDTO(objective));
  }

  return objectiveList;
}

async function generateObjectiveDetails() {}

async function createActions(encounterId: number): Promise<ActionDTO[]> {
  const encounter = await prisma.encounter.findUnique({
    where: { id: encounterId },
  });

  if (encounter === null) {
    throw new Error("Encounter not found");
  }

  const actionList: ActionDTO[] = [];
  const actionCount = 2;

  for (let i = 0; i < actionCount; i++) {
    // generateActionDetails();

    const actionInput = {
      encounterId,
      name: `action ${i + 1}`,
      effectList: [],
      approach: ActionApproach.GENERAL,
      difficulty: 10,
      rollResult: null,
    };

    const action = await prisma.action.create({
      data: actionInput,
    });

    actionList.push(toActionDTO(action));
  }

  return actionList;
}

async function generateActionDetails() {
  // this one should actually consult the current objectives to determine types of actions
  // the objectives should be determined when the encounter options are spun up, and the
  // action options should be spun up when an encounter is actually chosen (or at least their flavor text)
}

// createEncounter helper functions ↑

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
