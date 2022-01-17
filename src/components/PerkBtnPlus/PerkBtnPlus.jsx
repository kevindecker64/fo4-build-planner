import React from "react";

import "./PerkBtnPlus.css";

export default function PerkBtnPlus({ test, setTest }) {
  function handlePlus() {
    let maxRank = 5;
    if (test === maxRank) return;
    let newTest = test + 1;
    setTest(newTest);
  }
  return (
    <button className="perk-button-plus" onClick={handlePlus}>
      +
    </button>
  );
}
