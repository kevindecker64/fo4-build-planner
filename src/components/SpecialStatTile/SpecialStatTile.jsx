import React from "react";
import SpecialStatInfo from "../SpecialStatInfo/SpecialStatInfo.jsx";

import "./SpecialStatTile.css";

export default function SpecialStatTile({ stat, i }) {
  return (
    <div className={`tooltip${i < 3 ? " tooltip-left" : ""}`}>
      {stat === "Strength" ? (
        <img className="special-img" src="https://i.imgur.com/fiN1yfT.png" alt="" />) : "" || 
      stat === "Perception" ? (
        <img className="special-img" src="https://i.imgur.com/W2eNMRY.png" alt="" />) : "" || 
      stat === "Endurance" ? (
        <img className="special-img" src="https://i.imgur.com/SQuzMfX.png" alt="" />) : "" || 
      stat === "Charisma" ? (
        <img className="special-img" src="https://i.imgur.com/OOQPo4x.png" alt="" />) : "" || 
      stat === "Intelligence" ? (
        <img className="special-img" src="https://i.imgur.com/bA7UQX8.png" alt="" />) : "" || 
      stat === "Agility" ? (
        <img className="special-img" src="https://i.imgur.com/KEBXktO.png" alt="" />) : "" || 
      stat === "Luck" ? (
        <img className="special-img" src="https://i.imgur.com/R2GsTBU.png" alt="" />) : "" }
      <SpecialStatInfo stat={stat} />
    </div>
  );
}
