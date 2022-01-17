import React from "react";
import PerkBtnMinus from "../PerkBtnMinus/PerkBtnMinus";
import PerkBtnPlus from "../PerkBtnPlus/PerkBtnPlus";

import "./PerkOverlay.css";

export default function PerkOverlay({ perk, rank, setRank, characterLevel }) {
  return (
    <div className="perk-overlay">
      <PerkBtnMinus perk={perk} rank={rank} setRank={setRank} /> {rank}/{perk.ranks}{" "}
      <PerkBtnPlus perk={perk} rank={rank} setRank={setRank} characterLevel={characterLevel}/>
    </div>
  );
}
