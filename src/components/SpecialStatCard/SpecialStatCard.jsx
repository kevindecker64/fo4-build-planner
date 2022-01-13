import React, { useEffect, useState } from "react";

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
        <img src="https://i.imgur.com/fiN1yfT.png" alt="" />
      ) : "" || stat === "Perception" ? (
        <img src="https://i.imgur.com/W2eNMRY.png" alt="" />
      ) : "" || stat === "Endurance" ? (
        <img src="https://i.imgur.com/SQuzMfX.png" alt="" />
      ) : "" || stat === "Charisma" ? (
        <img src="https://i.imgur.com/OOQPo4x.png" alt="" />
      ) : "" || stat === "Intelligence" ? (
        <img src="https://i.imgur.com/bA7UQX8.png" alt="" />
      ) : "" || stat === "Agility" ? (
        <img src="https://i.imgur.com/KEBXktO.png" alt="" />
      ) : "" || stat === "Luck" ? (
        <img src="https://i.imgur.com/R2GsTBU.png" alt="" />
      ) : (
        ""
      )}
    </div>
  );
}
