import React from "react";
import "./square.css"

export const Square = (props) => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
);