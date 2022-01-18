import React from "react";
import SpecialStatInfo from "../SpecialStatInfo/SpecialStatInfo.jsx";

import "./SpecialStatTile.css";

export default function SpecialStatTile({ stat }) {
  return (
    <div className="tooltip special-img">
      {stat === "Strength" ? (
        <img src="https://i.imgur.com/fiN1yfT.png" alt="" />) : "" || 
      stat === "Perception" ? (
        <img src="https://i.imgur.com/W2eNMRY.png" alt="" />) : "" || 
      stat === "Endurance" ? (
        <img src="https://i.imgur.com/SQuzMfX.png" alt="" />) : "" || 
      stat === "Charisma" ? (
        <img src="https://i.imgur.com/OOQPo4x.png" alt="" />) : "" || 
      stat === "Intelligence" ? (
        <img src="https://i.imgur.com/bA7UQX8.png" alt="" />) : "" || 
      stat === "Agility" ? (
        <img src="https://i.imgur.com/KEBXktO.png" alt="" />) : "" || 
      stat === "Luck" ? (
        <img src="https://i.imgur.com/R2GsTBU.png" alt="" />) : "" }
      <SpecialStatInfo stat={stat} />
    </div>
  );
}
