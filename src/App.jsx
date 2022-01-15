import React, { useState } from "react";
import SpecialContainer from "./components/SpecialContainer/SpecialContainer";
import PerksContainer from "./components/PerksContainer/PerksContainer";

import "./App.css";

export default function App() {
  const [special, setSpecial] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [specialPoints, setSpecialPoints] = useState(21);
  const [characterLevel, setCharacterLevel] = useState(1);

  return (
    <div className="App">
      <h1>Fo4 Build Planner</h1>
      <p>S.P.E.C.I.A.L. Points Remaining: {specialPoints}</p>
      <p>Character Level: {characterLevel}</p>
      <SpecialContainer
        special={special}
        setSpecial={setSpecial}
        specialPoints={specialPoints}
        setSpecialPoints={setSpecialPoints}
        characterLevel={characterLevel}
        setCharacterLevel={setCharacterLevel}
      />
      <PerksContainer special={special} />
    </div>
  );
}
