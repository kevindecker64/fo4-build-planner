import React from "react";

import "./PerkBtnMinus.css";

export default function PerkBtnMinus({ perk, rank, setRank }) {
  function handleMinus() {
    if (rank === 0) return;
    let newRank = rank - 1;
    setRank(newRank);
  }
  return (
    <button className="perk-button-minus" onClick={handleMinus}>
      −
    </button>
  );
}
