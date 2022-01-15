import React from "react";

import "./SpecialBtnPlus.css";

export default function SpecialBtnPlus({
  i,
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
}) {
  function handlePlus() {
    if (special[i] === 10) return;
    if (specialPoints === 0) return;
    let newSpecial = [...special];
    newSpecial[i]++;
    specialPoints--;
    setSpecial([...newSpecial]);
    setSpecialPoints(specialPoints);
  }
  return (
    <button className="special-button-plus" onClick={handlePlus}>
      +
    </button>
  );
}
