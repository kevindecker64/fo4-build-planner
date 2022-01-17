import React from "react";
import PerkBtnMinus from "../PerkBtnMinus/PerkBtnMinus";
import PerkBtnPlus from "../PerkBtnPlus/PerkBtnPlus";

import "./PerkOverlay.css";

export default function PerkOverlay({
  perk,
  rank,
  setRank,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  return (
    <div className="perk-overlay">
      <PerkBtnMinus
        perk={perk}
        rank={rank}
        setRank={setRank}
        characterLevel={characterLevel}
        setCharacterLevel={setCharacterLevel}
        heldPerkPoints={heldPerkPoints}
        setHeldPerkPoints={setHeldPerkPoints}
      />{" "}
      {rank}/{perk.ranks}{" "}
      <PerkBtnPlus
        perk={perk}
        rank={rank}
        setRank={setRank}
        characterLevel={characterLevel}
        setCharacterLevel={setCharacterLevel}
        heldPerkPoints={heldPerkPoints}
        setHeldPerkPoints={setHeldPerkPoints}
      />
    </div>
  );
}
