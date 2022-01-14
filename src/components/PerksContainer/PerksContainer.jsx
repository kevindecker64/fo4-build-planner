import React from "react";
import PerkColumn from "../PerkColumn/PerkColumn.jsx";
import Perks from "../Perks/Perks.jsx";

import "./PerksContainer.css";

export default function PerksContainer() {
  return (
    <div className="perks-container">
      {Perks.map((specialStat, i) => {
        return (
          <div className="perk-column">
            <PerkColumn specialStat={specialStat.perks} key={i} />
          </div>
        );
      })}
    </div>
  );
}
