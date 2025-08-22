"use client";

import { useState, useEffect } from "react";
import Objective from "./components/Objective";
import Action from "./components/Action";
import { getEncounterById } from "@/src/services/encounter";
import { EncounterDTO } from "@/src/dtos/game";

export default function Encounter() {
  const [encounter, setEncounter] = useState<EncounterDTO | null>(null);

  // page load
  useEffect(() => {
    (async () => {
      const encounterData = await getEncounterById(1);
      setEncounter(encounterData);
      console.log(encounterData);
    })();
  }, []);

  return (
    <>
      <style>{`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .encounter-page {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 400px;
          border: 3px solid grey;
        }
        
        .objective-option,
        .action-option {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 2px dashed grey;
          padding: 10px;
          cursor: pointer;
        }

      `}</style>
      <div className="encounter-page">
        {encounter?.objectiveList.map((o) => (
          <Objective key={o.id} objective={o} />
        ))}
        {encounter?.actionList.map((a) => (
          <Action key={a.id} action={a} />
        ))}
      </div>
    </>
  );
}
