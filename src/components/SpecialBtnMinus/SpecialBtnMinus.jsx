import React from "react";

import "./SpecialBtnMinus.css";

export default function SpecialBtnMinus({
  i,
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
  bobblehead,
}) {
  function handleMinus() {
    if (bobblehead) {
      if (special[i] === 2) return;
    }
    if (special[i] === 1) return;
    let newSpecial = [...special];
    newSpecial[i]--;
    specialPoints++;
    setSpecial([...newSpecial]);
    setSpecialPoints(specialPoints);
  }
  return (
    <button className="special-button-minus" onClick={handleMinus}>
      -
    </button>
  );
}
