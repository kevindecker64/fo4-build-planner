import React from "react";
import PerkCard from "../PerkCard/PerkCard.jsx";

import "./PerkColumn.css";

export default function PerkColumn({ perks, specialScore }) {
  return (
    <div className="perk-column">
      {perks.map((perk, i) => {
        return <PerkCard perk={perk} specialScore={specialScore} key={i} />;
      })}
    </div>
  );
}
