import React, { useEffect, useState } from "react";
import PerkInfo from "../PerkInfo/PerkInfo.jsx";

import "./PerkTile.css";

export default function PerkTile({ perk, specialScore, i }) {
  const [available, setAvailable] = useState(false);

  function createID(perk) {
    const id = perk.name.toLowerCase().replace(" ", "-");
    return id;
  }

  useEffect(() => {
    if (perk.rank <= specialScore) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  }, [specialScore])

  return (
    <div
      className={`perk-img tooltip ${
        available ? "available" : "unavailable"
      }`}
      id={createID(perk)}
    >
      <img src={perk.img} alt="" />
      <PerkInfo perk={perk} />
    </div>
  );
}
