import React, { useState } from "react";
import SpecialBookCheckbox from "../SpecialBookCheckbox/SpecialBookCheckbox.jsx";

import "./CharacterInfo.css";

export default function CharacterInfo({
  special,
  setSpecial,
  specialPoints,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  const [specialBook, setSpecialBook] = useState(false);

  function handleHoldPerkPoint() {
    const newHeldPerkPoints = heldPerkPoints + 1;
    setHeldPerkPoints(newHeldPerkPoints);
    const newCharacterLevel = characterLevel + 1;
    setCharacterLevel(newCharacterLevel);
  }

  return (
    <div className="character-info">
      <div>
        <span className="row-title">Character Level: </span>
        {characterLevel}
      </div>
      <div>
        <span className="row-title">S.P.E.C.I.A.L. Points: </span>
        {specialPoints}
      </div>
      <div className="special-book">
        <span className="row-title">S.P.E.C.I.A.L. Book:</span>
        <div className="spec-book-checkboxes">
          &nbsp;&nbsp;&nbsp;
          {special.map((score, i) => {
            return (
              <SpecialBookCheckbox
                special={special}
                setSpecial={setSpecial}
                score={score}
                specialBook={specialBook}
                setSpecialBook={setSpecialBook}
                i={i}
                key={i}
              />
            );
          })}
        </div>
      </div>

      <div className="held-perk-points">
        <div>
          <span className="row-title">Perk Points: </span>
          {heldPerkPoints}
        </div>
        <button className="hold-perk-point-btn" onClick={handleHoldPerkPoint}>
          Hold Perk Point
        </button>
      </div>
    </div>
  );
}
