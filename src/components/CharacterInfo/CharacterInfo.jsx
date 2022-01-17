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
      <div>Character Level: {characterLevel}</div>
      <div>S.P.E.C.I.A.L. Points Remaining: {specialPoints}</div>
      <div>S.P.E.C.I.A.L. Book:</div>

      <div className="spec-book-checkboxes">
        &nbsp;&nbsp;
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

      <div className="held-perk-points">
        Held Perk Points: {heldPerkPoints}
        <button className="hold-perk-point-btn" onClick={handleHoldPerkPoint}>
          Hold Perk Point
        </button>
      </div>
      <div>
        Active Perks:
        <div>&nbsp;&nbsp;-- feature coming soon --</div>
      </div>
    </div>
  );
}
