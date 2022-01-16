import React from "react";

import "./PerkInfo.css";

export default function PerkInfoCard({ perk }) {
  return (
    <div className="tooltiptext">
      <div className="perk-name">{perk.name}</div>
      <div className="ranks">
        {perk.ranked.map((rank, i) => {
          return (
            <div className="rank-description" key={i}>
              {`${rank.rank} : ${rank.description}`}
            </div>
          );
        })}
      </div>
    </div>
  );
}
