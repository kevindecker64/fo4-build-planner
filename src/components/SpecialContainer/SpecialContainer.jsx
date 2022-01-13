import React from "react";
import SpecialStatCard from "../SpecialStatCard/SpecialStatCard";

import "./SpecialContainer.css";

export default function SpecialContainer({ special, setSpecial }) {
  return (
    <>
      <h2>Special</h2>
      <div className="special-row">
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
              i={i}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}
