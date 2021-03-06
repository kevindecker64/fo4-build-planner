import React from "react";
import PerkTile from "../PerkTile/PerkTile.jsx";

import "./PerkColumn.css";

export default function PerkColumn({
  perks,
  specialScore,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
  columnIdx,
}) {
  return (
    <div className="perk-column">
      {perks.map((perk, i) => {
        return (
          <PerkTile
            perk={perk}
            specialScore={specialScore}
            characterLevel={characterLevel}
            setCharacterLevel={setCharacterLevel}
            heldPerkPoints={heldPerkPoints}
            setHeldPerkPoints={setHeldPerkPoints}
            columnIdx={columnIdx}
            i={i}
            key={i}
          />
        );
      })}
    </div>
  );
}
