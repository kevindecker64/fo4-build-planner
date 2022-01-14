import React from "react";

import "./PerkCard.css";

export default function PerkCard({ perk, specialScore, i }) {
  function createID(perk) {
    const id = perk.name.toLowerCase().replace(" ", "-");
    return id;
  }
  return (
    <div
      className={`perk-card ${
        perk.rank <= specialScore ? "available" : "unavailable"
      }`}
      id={createID(perk)}
    >
      <img src={perk.img} alt="" key={i} />
    </div>
  );
}
