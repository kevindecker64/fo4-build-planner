import React from "react";

import "./SpecialBtnMinus.css";

export default function SpecialBtnMinus({
  i,
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
  additionalSpecialPoints,
  setAdditionalSpecialPoints,
  characterLevel,
  setCharacterLevel,
  bobblehead,
}) {
  function handleMinus() {
    let newSpecial = [...special];
    if (additionalSpecialPoints === 0) {
      if (bobblehead) {
        if (special[i] === 2) return;
      }
      if (special[i] === 1) return;
      newSpecial = [...special];
      newSpecial[i]--;
      specialPoints++;
      setSpecial([...newSpecial]);
      setSpecialPoints(specialPoints);
    } else {
      characterLevel--;
      setCharacterLevel(characterLevel);
      additionalSpecialPoints--;
      setAdditionalSpecialPoints(additionalSpecialPoints);
      newSpecial = [...special];
      newSpecial[i]--;
      setSpecial([...newSpecial]);
    }
  }

  return (
    <button className="special-button-minus" onClick={handleMinus}>
      -
    </button>
  );
}
