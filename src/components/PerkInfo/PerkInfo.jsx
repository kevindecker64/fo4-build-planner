import React from "react";
import PerkRank from "../PerkRank/PerkRank.jsx";

import "./PerkInfo.css";

export default function PerkInfo({ perk, rank, characterLevel }) {
  return (
    <div className="tooltiptext">
      <div className="perk-name">{perk.name}</div>
      <div className="ranks">
        {perk.ranked.map((tier, i) => {
          return (
            <PerkRank tier={tier} rank={rank} characterLevel={characterLevel} key={i} />
          );
        })}
      </div>
    </div>
  );
}
