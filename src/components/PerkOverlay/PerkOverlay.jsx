import React from "react";
import PerkBtnMinus from "../PerkBtnMinus/PerkBtnMinus";
import PerkBtnPlus from "../PerkBtnPlus/PerkBtnPlus";

import "./PerkOverlay.css";

export default function PerkOverlay({ test, setTest }) {
  return (
    <div className="perk-overlay">
      <PerkBtnMinus test={test} setTest={setTest} /> {test}{" "}
      <PerkBtnPlus test={test} setTest={setTest} />
    </div>
  );
}
