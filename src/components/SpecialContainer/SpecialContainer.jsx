import React, { useState } from "react";
import SpecialStatCard from "../SpecialStatCard/SpecialStatCard";

import "./SpecialContainer.css";

export default function SpecialContainer({ special, setSpecial }) {
  const [specialPoints, setSpecialPoints] = useState(21)

  return (
    <div className="special-container">
      {special.map((score, i) => {
        return (
          <SpecialStatCard
            stat={
              i === 0
                ? "Strength"
                : "" || i === 1
                ? "Perception"
                : "" || i === 2
                ? "Endurance"
                : "" || i === 3
                ? "Charisma"
                : "" || i === 4
                ? "Intelligence"
                : "" || i === 5
                ? "Agility"
                : "" || i === 6
                ? "Luck"
                : ""
            }
            score={score}
            special={special}
            setSpecial={setSpecial}
            specialPoints={specialPoints}
            setSpecialPoints={setSpecialPoints}
            i={i}
            key={i}
          />
        );
      })}
    </div>
  );
}
