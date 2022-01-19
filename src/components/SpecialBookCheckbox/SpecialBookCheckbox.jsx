import React, { useState, useEffect } from "react";

import "./SpecialBookCheckbox.css";

export default function SpecialBookCheckbox({
  special,
  setSpecial,
  score,
  specialBook,
  setSpecialBook,
  i,
}) {
  const [active, setActive] = useState(false);

  const stat =
    i === 0 ? "Str" : "" || 
      i === 1 ? "Per" : "" || 
      i === 2 ? "End" : "" || 
      i === 3 ? "Cha" : "" || 
      i === 4 ? "Int" : "" || 
      i === 5 ? "Agi" : "" || 
      i === 6 ? "Luc" : "";

  useEffect(() => {
    active ? setSpecialBook(stat) : setSpecialBook(false);
  }, [active]);

  function handleCheckbox(e) {
    if (special[i] >= 10) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setActive(e.target.checked);
    const newSpecial = [...special];
    e.target.checked ? newSpecial[i]++ : newSpecial[i]--;
    setSpecial([...newSpecial]);
  }

  return (
    <div className="stat-checkbox" key={i}>
      {`${stat}:`}
      <input
        type="checkbox"
        onChange={handleCheckbox}
        disabled={(active ? false : specialBook) || (special[i] <10 ? false : true)}
      />
    </div>
  );
}
