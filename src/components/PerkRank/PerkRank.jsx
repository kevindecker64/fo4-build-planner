import React from "react";

import "./PerkRank.css";

export default function PerkRank({ rank }) {
  return (
    <div className="rank">
      <div className="lvl-required">Lv:{rank.level}</div>
      <div className="rank-description">{rank.description}</div>
    </div>
  );
}
