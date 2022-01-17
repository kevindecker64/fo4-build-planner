import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

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
    i === 0
      ? "St"
      : "" || i === 1
      ? "Pe"
      : "" || i === 2
      ? "En"
      : "" || i === 3
      ? "Ch"
      : "" || i === 4
      ? "In"
      : "" || i === 5
      ? "Ag"
      : "" || i === 6
      ? "Lu"
      : "";

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
    <div key={i}>
      {`${stat}:`}
      <input
        type="checkbox"
        onChange={handleCheckbox}
        disabled={(active ? false : specialBook) || (special[i] <10 ? false : true)}
      />
    </div>
  );
}
