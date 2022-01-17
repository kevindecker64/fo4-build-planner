import React from "react";

import "./PerkBtnMinus.css";

export default function PerkBtnMinus({ test, setTest }) {
  function handleMinus() {
    if (test === 0) return;
    let newTest = test - 1;
    setTest(newTest);
  }
  return (
    <button className="perk-button-minus" onClick={handleMinus}>
      −
    </button>
  );
}
