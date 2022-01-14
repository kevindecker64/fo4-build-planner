import React from "react";

import "./PerkCard.css";

export default function PerkCard({ perk, i }) {
  return (
    <div className="perk-card">
      <img src={perk.img} alt="" key={i} />
    </div>
  );
}
