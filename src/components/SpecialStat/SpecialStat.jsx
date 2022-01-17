import React, { useEffect, useState } from "react";
import SpecialBtnPlus from "../SpecialBtnPlus/SpecialBtnPlus.jsx";
import SpecialBtnMinus from "../SpecialBtnMinus/SpecialBtnMinus.jsx";
import SpecialStatTile from "../SpecialStatTile/SpecialStatTile.jsx";

import "./SpecialStat.css";

export default function SpecialStat({
  stat,
  score,
  special,
  setSpecial,
  specialPoints,
  setSpecialPoints,
  characterLevel,
  setCharacterLevel,
  i,
}) {
  const [bobblehead, setBobblehead] = useState(false);
  const [additionalSpecialPoints, setAdditionalSpecialPoints] = useState(0);

  useEffect(() => {
    let newSpecial = [...special];
    bobblehead ? newSpecial[i]++ : newSpecial[i]--;
    if (newSpecial[i] < 1) {
      newSpecial[i] = 1;
    }
    setSpecial([...newSpecial]);
  }, [bobblehead]);

  function handleBobblehead(e) {
    setBobblehead(e.target.checked);
  }

  return (
    <div className="special-stat">
      <div className="name">{stat}</div>
      <div className="buttons">
        <SpecialBtnMinus
          i={i}
          special={special}
          setSpecial={setSpecial}
          specialPoints={specialPoints}
          setSpecialPoints={setSpecialPoints}
          additionalSpecialPoints={additionalSpecialPoints}
          setAdditionalSpecialPoints={setAdditionalSpecialPoints}
          characterLevel={characterLevel}
          setCharacterLevel={setCharacterLevel}
          bobblehead={bobblehead}
        />
        <span className="score">{score}</span>
        <SpecialBtnPlus
          i={i}
          special={special}
          setSpecial={setSpecial}
          specialPoints={specialPoints}
          setSpecialPoints={setSpecialPoints}
          additionalSpecialPoints={additionalSpecialPoints}
          setAdditionalSpecialPoints={setAdditionalSpecialPoints}
          characterLevel={characterLevel}
          setCharacterLevel={setCharacterLevel}
        />
      </div>
      <div className="bobblehead">
        Bobblehead:
        <input type="checkbox" onChange={handleBobblehead} />
      </div>
      <SpecialStatTile stat={stat} />
    </div>
  );
}
