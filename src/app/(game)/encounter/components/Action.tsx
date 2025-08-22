import { ActionDTO } from "@/src/dtos/game";
import { attemptAction } from "@/src/services/encounter";

export default function Action({ action }: { action: ActionDTO }) {
  return (
    <div className="action-option" onClick={() => attemptAction(action.id)}>
      <span>{action.name}</span>
      <span>Approach: {action.approach}</span>
      <span>Difficulty: {action.difficulty}</span>
      <span>Effects:</span>
      <ul>
        {action.effectList.map((effect, i) => {
          return <li key={i}>{effect}</li>;
        })}
      </ul>
    </div>
  );
}
