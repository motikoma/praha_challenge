import React from "react";
import { Board } from "../board/Index";
import './game.css';

export const Game = (props) => {
    const {current, status, handleClick, moves} = props;

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={handleClick} />
            </div>
            <div className='game-info'>
                <div data-e2e='status'>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}