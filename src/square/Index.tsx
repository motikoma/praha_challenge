import React from "react";
import "./square.css"

export type SquareState = 'O' | 'X' | '▲' | null;

type SquareProps = {
    value: SquareState;
    onClick: () => void;
}

export const Square: React.FC<SquareProps> = (props) => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
);