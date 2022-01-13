import React from "react";

import "./PerkColumn.css"

export default function PerkColumn({column}) {
    return column.map((perk, i) => {
        return <img className="perk-card" src={perk.img} alt=""/>
    })
}