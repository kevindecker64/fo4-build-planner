import React from "react";

import "./CharacterInfo.css";

export default function CharacterInfo({
  specialPoints,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
}) {
  function handleHoldPerkPoint() {
    const newHeldPerkPoints = heldPerkPoints + 1;
    setHeldPerkPoints(newHeldPerkPoints);
    const newCharacterLevel = characterLevel + 1;
    setCharacterLevel(newCharacterLevel);
  }
  return (
    <div className="character-info">
      <p>S.P.E.C.I.A.L. Points Remaining: {specialPoints}</p>
      <p>Character Level: {characterLevel}</p>
      <p>Held Perk Points: {heldPerkPoints}</p>
      <button onClick={handleHoldPerkPoint}>
        Click to Hold this level's Perk Point
      </button>
      <p>Active Perks: </p>
    </div>
  );
}
