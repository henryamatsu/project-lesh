import { ObjectiveDTO } from "@/src/dtos/game";
import { attemptObjective } from "@/src/services/encounter";

export default function Objective({ objective }: { objective: ObjectiveDTO }) {
  return (
    <div
      className="objective-option"
      onClick={() => attemptObjective(objective.id)}
    >
      <span>{objective.name}</span>
      <span>Approaches: {objective.approachList}</span>
      <span>Difficulty: {objective.difficulty}</span>
      <span>Rewards:</span>
      <ul>
        {objective.rewardList.map((reward, i) => {
          return <li key={i}>{reward}</li>;
        })}
      </ul>
    </div>
  );
}
