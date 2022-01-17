import React from "react";

import "./PerkBtnPlus.css";

export default function PerkBtnPlus({ perk, rank, setRank }) {
  function handlePlus() {
    const maxRank = perk.ranks;
    if (rank === maxRank) return;
    let newRank = rank + 1;
    setRank(newRank);
  }
  return (
    <button className="perk-button-plus" onClick={handlePlus}>
      +
    </button>
  );
}
