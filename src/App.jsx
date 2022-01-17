import React, { useState } from "react";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo.jsx";
import SpecialContainer from "./components/SpecialContainer/SpecialContainer.jsx";
import PerksContainer from "./components/PerksContainer/PerksContainer.jsx";

import PerkOverlay from "./components/PerkOverlay/PerkOverlay.jsx";

import "./App.css";

export default function App() {
  const [test, setTest] = useState(0);

  const [special, setSpecial] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [specialPoints, setSpecialPoints] = useState(21);
  const [characterLevel, setCharacterLevel] = useState(1);
  const [heldPerkPoints, setHeldPerkPoints] = useState(0);

  return (
    <div className="App">
      <h1>Fo4 Build Planner</h1>
      <div className="container">
        <CharacterInfo
          special={special}
          setSpecial={setSpecial}
          specialPoints={specialPoints}
          setSpecialPoints={setSpecialPoints}
          characterLevel={characterLevel}
          setCharacterLevel={setCharacterLevel}
          heldPerkPoints={heldPerkPoints}
          setHeldPerkPoints={setHeldPerkPoints}
        />
        <div className="upgrade-chart">
          <SpecialContainer
            special={special}
            setSpecial={setSpecial}
            specialPoints={specialPoints}
            setSpecialPoints={setSpecialPoints}
            characterLevel={characterLevel}
            setCharacterLevel={setCharacterLevel}
          />
          <PerksContainer
            special={special}
            characterLevel={characterLevel}
            setCharacterLevel={setCharacterLevel}
            heldPerkPoints={heldPerkPoints}
            setHeldPerkPoints={setHeldPerkPoints}
          />
        </div>
      </div>
    </div>
  );
}
