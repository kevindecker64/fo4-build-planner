import React from "react";

import "./SpecialStatInfo.css";

export default function SpecialStatInfo({ stat }) {
  return (
    <div className="tooltiptext">
      <span className="sp-stat-name">{stat}</span>
      {stat === "Strength"
        ? " is a measure of your raw physical power. It affects how much you can carry, and determines the effectiveness of all melee attacks."
        : "" || 
      stat === "Perception"
        ? " is your environmental awareness and 'sixth sense,' and affects weapon accuracy in V.A.T.S."
        : "" || 
      stat === "Endurance"
        ? " is the measure of overall physical fitness. It affects your total health and the action point drain from sprinting."
        : "" || 
      stat === "Charisma"
        ? " is your ability to charm and convince others. It affects your success to persuade others in dialogue and prices when you barter."
        : "" || 
      stat === "Intelligence"
        ? " is the measure of your overall mental acuity, and affects the number of experience points earned."
        : "" || 
      stat === "Agility"
        ? " is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak."
        : "" || 
      stat === "Luck"
        ? " is a measure of your general good fortune, and affects the recharge rates of critical hits."
        : ""}
    </div>
  );
}
