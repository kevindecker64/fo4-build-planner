import React from "react";

import "./PerkBtnPlus.css";

export default function PerkBtnPlus({
  perk,
  rank,
  setRank,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  function handlePlus() {
    const nextRankIdx = rank;
    if (perk.ranked[nextRankIdx].level > characterLevel) return;
    const maxRank = perk.ranks;
    if (rank === maxRank) return;
    const newRank = rank + 1;
    setRank(newRank);
    if (heldPerkPoints) {
      const newHeldPerkPoints = heldPerkPoints - 1;
      setHeldPerkPoints(newHeldPerkPoints);
    } else {
      const newCharacterLevel = characterLevel + 1;
      setCharacterLevel(newCharacterLevel);
    }
  }
  
  return (
    <button className="perk-button-plus" onClick={handlePlus}>
      +
    </button>
  );
}
