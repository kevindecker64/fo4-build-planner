import React from "react";

import "./SpecialBtnPlus.css";

export default function SpecialBtnPlus({
  i,
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
  additionalSpecialPoints,
  setAdditionalSpecialPoints,
  characterLevel,
  setCharacterLevel,
}) {
  function handlePlus() {
    if (special[i] === 10) return;
    let newSpecial = [...special];
    if (specialPoints === 0) {
      characterLevel++;
      setCharacterLevel(characterLevel);
      additionalSpecialPoints++;
      setAdditionalSpecialPoints(additionalSpecialPoints);
      newSpecial = [...special];
      newSpecial[i]++;
      setSpecial([...newSpecial]);
    } else {
      newSpecial = [...special];
      newSpecial[i]++;
      specialPoints--;
      setSpecial([...newSpecial]);
      setSpecialPoints(specialPoints);
    }
  }

  return (
    <button className="special-button-plus" onClick={handlePlus}>
      +
    </button>
  );
}
