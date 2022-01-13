import React, { useEffect, useState } from "react";
import Strength from "../../images/special/strength.png";
import Perception from "../../images/special/perception.png";
import Endurance from "../../images/special/endurance.png";
import Charisma from "../../images/special/charisma.png";
import Intelligence from "../../images/special/intelligence.png";
import Agility from "../../images/special/agility.png";
import Luck from "../../images/special/luck.png";

import "./SpecialStatCard.css";

export default function SpecialStatCard({ stat, score, special, setSpecial, i }) {
  const [bobblehead, setBobblehead] = useState(false);

  useEffect(() => {
    let newSpecial = [...special]
    bobblehead ? newSpecial[i]++ : newSpecial[i]--;
    setSpecial([...newSpecial])
  }, [bobblehead])

  function handleBobblehead(e){
    setBobblehead(e.target.checked);
  }

  return (
    <div className="special-stat-card">
      <div>
        {stat}: {score}
      </div>
      <div>Bobblehead:<input type="checkbox" onChange={handleBobblehead} /></div>
      {stat === "Strength" ? (
        <img src={Strength} alt="" />
      ) : "" || stat === "Perception" ? (
        <img src={Perception} alt="" />
      ) : "" || stat === "Endurance" ? (
        <img src={Endurance} alt="" />
      ) : "" || stat === "Charisma" ? (
        <img src={Charisma} alt="" />
      ) : "" || stat === "Intelligence" ? (
        <img src={Intelligence} alt="" />
      ) : "" || stat === "Agility" ? (
        <img src={Agility} alt="" />
      ) : "" || stat === "Luck" ? (
        <img src={Luck} alt="" />
      ) : (
        ""
      )}
    </div>
  );
}
