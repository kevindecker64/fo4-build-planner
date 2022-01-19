import React, { useEffect, useState } from "react";

import "./PerkRank.css";

export default function PerkRank({ tier, rank, characterLevel }) {
  const [available, setAvailable] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    if (characterLevel >= tier.level) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, [characterLevel]);

  useEffect(() => {
    if (rank >= tier.rank) {
      setClaimed(true);
    } else {
      setClaimed(false);
    }
  }, [rank]);
  
  return (
    <div className={
        (available ? "rank-available" : "rank-unavailable") +
        (claimed ? "-claimed" : "")
      }
    >
      <span className="lvl-required">Lv: {tier.level}</span>
      {/* <span className="format-for-mobile">&nbsp;-&nbsp;</span> */}
      <span className="rank-description">{tier.description}</span>
    </div>
  );
}
