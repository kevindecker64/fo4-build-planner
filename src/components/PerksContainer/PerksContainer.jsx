import React from "react";
import PerkColumn from "../PerkColumn/PerkColumn.jsx";
import Perks from "../Perks/Perks.jsx"

export default function PerksContainer() {
  return (
    <>
      <h2>Perks</h2>
      {Perks.map((stat, i) => {
        return <PerkColumn column={stat.perks} key={i} />
        // <div className={stat.special + "-column"} key={i}>{stat.special}</div>
      })}
    </>
  );
}
