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
    <div
      className={
        (available ? "rank-available" : "rank-unavailable") +
        (claimed ? "-claimed" : "")
      }
    >
      <div className="lvl-required">Lv:{tier.level}</div>
      <div className="rank-description">{tier.description}</div>
    </div>
  );
}
