import React from "react";
import PerkInfo from "../PerkInfo/PerkInfo.jsx";

import "./PerkTile.css";

export default function PerkCard({ perk, specialScore, i }) {
  function createID(perk) {
    const id = perk.name.toLowerCase().replace(" ", "-");
    return id;
  }
  return (
    <div
      className={`perk-tile ${
        perk.rank <= specialScore ? "available" : "unavailable"
      }`}
      id={createID(perk)}
    >
      {perk.rank <= specialScore ? (
        <div className="tooltip">
          <img className="perk-img" src={perk.img} alt="" key={i} />
          <PerkInfo perk={perk} />
        </div>
      ) : (
        <img className="perk-img" src={perk.img} alt="" key={i} />
      )}
    </div>
  );
}
