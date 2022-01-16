import React from "react";

// import "./PerkInfoCard.css";

export default function PerkInfoCard({ perk }) {
  return (
    <div className="tooltiptext">
      {perk.name}
    </div>
  );
}
