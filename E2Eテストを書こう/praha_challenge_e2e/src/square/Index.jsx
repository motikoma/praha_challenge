import React from "react";
import "./square.css"

export const Square = (props) => (
    <button className="square" onClick={props.onClick} data-e2e={`square-${props.number}`}>
        {props.value}
    </button>
);