import React, { useState } from "react";
import SpecialContainer from "./components/SpecialContainer/SpecialContainer";
import PerksContainer from "./components/PerksContainer/PerksContainer";

import "./App.css";

export default function App() {
  const [special, setSpecial] = useState([1, 1, 1, 1, 1, 1, 2]);

  return (
    <div className="App">
      <h1>Fo4 Build Planner</h1>
      <SpecialContainer special={special} setSpecial={setSpecial} />
      <PerksContainer special={special} />
    </div>
  );
}
