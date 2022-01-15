import React from "react";

import "./SpecialInfoCard.css";

export default function SpecialInfoCard({ stat }) {
  return (
    <div className="tooltiptext">
      {stat === "Strength" ? "Strength is a measure of your raw physical power. It affects how much you can carry, and determines the effectiveness of all melee attacks." : "" ||
      stat === "Perception" ? "Perception is your environmental awareness and 'sixth sense,' and affects weapon accuracy in V.A.T.S." : "" ||
      stat === "Endurance" ? "Endurance is the measure of overall physical fitness. It affects your total health and the action point drain from sprinting." : "" ||
      stat === "Charisma" ? "Charisma is your ability to charm and convince others. It affects your success to persuade others in dialogue and prices when you barter." : "" ||
      stat === "Intelligence" ? "Intelligence is the measure of your overall mental acuity, and affects the number of experience points earned." : "" ||
      stat === "Agility" ? "Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak." : "" ||
      stat === "Luck" ? "Luck is a measure of your general good fortune, and affects the recharge rates of critical hits." : ""}
    </div>
  )
}
