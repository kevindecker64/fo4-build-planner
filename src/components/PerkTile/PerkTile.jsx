import React, { useEffect, useState } from "react";
import PerkInfo from "../PerkInfo/PerkInfo.jsx";
import PerkOverlay from "../PerkOverlay/PerkOverlay.jsx";

import "./PerkTile.css";

export default function PerkTile({
  perk,
  specialScore,
  characterLevel,
  setCharacterLevel,
  heldPerkPoints,
  setHeldPerkPoints,
  columnIdx,
  i,
}) {
  const [available, setAvailable] = useState(false);
  const [rank, setRank] = useState(0);

  function createID(perk) {
    const id = perk.name.toLowerCase().replace(" ", "-");
    return id;
  }

  useEffect(() => {
    if (perk.tier <= specialScore) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, [specialScore]);

  useEffect(() => {
    if (!available) {
      const newHeldPerkPoints = rank;
      const newRank = 0;
      setHeldPerkPoints(newHeldPerkPoints);
      setRank(newRank);
    }
  }, [available]);

  return (
    <div
      className={`tooltip${columnIdx < 3 ? "-left" : ""}${i > 6 ? "-bottom" : ""}`}
      id={createID(perk)}
    >
      <img className={`perk-img ${available ? "available" : "unavailable"}`} src={perk.img} alt="" />

      <PerkInfo perk={perk} rank={rank} characterLevel={characterLevel} />
      
      {available ? (
        <PerkOverlay
          perk={perk}
          rank={rank}
          setRank={setRank}
          characterLevel={characterLevel}
          setCharacterLevel={setCharacterLevel}
          heldPerkPoints={heldPerkPoints}
          setHeldPerkPoints={setHeldPerkPoints}
        />
      ) : ("")}
    </div>
  );
}
