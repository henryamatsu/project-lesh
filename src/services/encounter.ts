import { ActionDTO, EncounterDTO, ObjectiveDTO } from "../dtos/game";

export async function getEncounterById(
  encounterId: number
): Promise<EncounterDTO> {
  const res = await fetch(`/api/encounter/${encounterId}`);
  const data: EncounterDTO = await res.json();
  if (!res.ok) throw new Error("Failed to load encounter");

  return data;
}

export async function attemptAction(actionId: number): Promise<ActionDTO> {
  const res = await fetch(`/api/action/${actionId}/attempt`);
  const data: ActionDTO = await res.json();
  if (!res.ok) throw new Error("Failed to load action");

  return data;
}

export async function attemptObjective(
  objectiveId: number
): Promise<ObjectiveDTO> {
  const res = await fetch(`/api/objective/${objectiveId}/attempt`);
  const data: ObjectiveDTO = await res.json();
  if (!res.ok) throw new Error("Failed to load objective");

  return data;
}
