import React from "react";
import PerkCard from "../PerkCard/PerkCard.jsx";

import "./PerkColumn.css";

export default function PerkColumn({ specialStat }) {
  return specialStat.map((perk, i) => {
    return <PerkCard perk={perk} key={i} />;
  });
}
