import React from "react";
import PerkColumn from "../PerkColumn/PerkColumn.jsx";
import Perks from "../Perks/Perks.jsx";

import "./PerksContainer.css";

export default function PerksContainer({
  special,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  return (
    <div className="perks-container">
      {Perks.map((specialStat, i) => {
        return (
          <PerkColumn
            perks={specialStat.perks}
            specialScore={special[i]}
            characterLevel={characterLevel}
            setCharacterLevel={setCharacterLevel}
            heldPerkPoints={heldPerkPoints}
            setHeldPerkPoints={setHeldPerkPoints}
            key={i}
          />
        );
      })}
    </div>
  );
}
