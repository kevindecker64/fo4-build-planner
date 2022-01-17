import React from "react";
import PerkRank from "../PerkRank/PerkRank.jsx";

import "./PerkInfo.css";

export default function PerkInfoCard({ perk }) {
  return (
    <div className="tooltiptext">
      <div className="perk-name">{perk.name}</div>
      <div className="ranks">
        {perk.ranked.map((rank, i) => {
          return (
            <PerkRank rank={rank} key={i} />
          );
        })}
      </div>
    </div>
  );
}
