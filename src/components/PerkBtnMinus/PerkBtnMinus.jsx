import React from "react";

import "./PerkBtnMinus.css";

export default function PerkBtnMinus({
  perk,
  rank,
  setRank,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  function handleMinus() {
    if (rank === 0) return;
    const newRank = rank - 1;
    setRank(newRank);
    const newHeldPerkPoints = heldPerkPoints + 1;
    setHeldPerkPoints(newHeldPerkPoints);
  }

  return (
    <button className="perk-button-minus" onClick={handleMinus}>
      −
    </button>
  );
}
