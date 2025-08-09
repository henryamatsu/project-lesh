// import { Action } from "../../../generated/prisma";
// this should be ActionDTO, not the Action model
import { ActionDTO } from "@/src/dtos/game";
import { useState, useEffect } from "react";

type ActionOptionProps = {
  action: ActionDTO;
  chosenActionId: number;
  setChosenActionId: React.Dispatch<React.SetStateAction<number>>;
};

export default function ActionOption({
  action,
  chosenActionId,
  setChosenActionId,
}: ActionOptionProps): React.ReactElement {
  const [actionDifficulty, setActionDifficulty] = useState<number>();

  useEffect(() => {
    setActionDifficulty(action.difficulty);
  }, [action]);

  return (
    <>
      <style>{`
      .action-option {
        margin: 20px;  
        border: 2px solid grey;
        padding: 20px;
        width: 500px;
        cursor: pointer;
      } 
      .selected-option {
        box-shadow: 0 0 0 2px lightgrey;
      }
    `}</style>
      <div
        className={`action-option ${
          action.id === chosenActionId ? "selected-option" : ""
        }`}
        onClick={() => setChosenActionId(action.id)}
      >
        <h2>Action {action.id}</h2>
        <p>Difficulty: {actionDifficulty}</p>
      </div>
    </>
  );
}
