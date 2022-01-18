import React from "react";
import SpecialStat from "../SpecialStat/SpecialStat";

import "./SpecialContainer.css";

export default function SpecialContainer({
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
  characterLevel,
  setCharacterLevel,
}) {
  return (
    <div className="special-container">
      {special.map((score, i) => {
        return (
          <SpecialStat
            stat={
              i === 0 ? "Strength" : "" || 
              i === 1 ? "Perception" : "" || 
              i === 2 ? "Endurance" : "" || 
              i === 3 ? "Charisma" : "" || 
              i === 4 ? "Intelligence" : "" || 
              i === 5 ? "Agility" : "" || 
              i === 6 ? "Luck" : ""
            }
            score={score}
            special={special}
            setSpecial={setSpecial}
            specialPoints={specialPoints}
            setSpecialPoints={setSpecialPoints}
            characterLevel={characterLevel}
            setCharacterLevel={setCharacterLevel}
            i={i}
            key={i}
          />
        );
      })}
    </div>
  );
}
