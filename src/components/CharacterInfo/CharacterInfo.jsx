import React from "react";

import "./CharacterInfo.css";

export default function CharacterInfo({ specialPoints, characterLevel }) {
  return (
    <div className="character-info">
      <p>S.P.E.C.I.A.L. Points Remaining: {specialPoints}</p>
      <p>Character Level: {characterLevel}</p>
      <p>Active Perks: </p>
    </div>
  );
}
