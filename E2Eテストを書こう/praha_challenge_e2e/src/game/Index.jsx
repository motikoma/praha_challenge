import React from "react";
import { useState } from "react"
import { Board } from "../board/Index";
import { calculateWinner } from "./calculateWinner";
import './game.css';

export const Game = () => {
    const [state, setState] = useState({
        history: [{
            squares: [null, null, null, null, null, null, null, null, null],
            xIsNext: true
        }],
        stepNumber: 0
    })

    const current = state.history[state.stepNumber]
    const winner = calculateWinner(current.squares)
    let status

    if(winner){
        status = `Winner: ${winner}`
    } else if(state.stepNumber === 9){
        status = `Draw!`
    }
    else {
        status = `Next player: ${current.xIsNext ? 'X' : 'O'}`
    }

    const handleClick = (i) => {
        if(winner || current.squares[i]){
            return
        }

        const next = (({squares, xIsNext}) => {
            const nextSquares = squares.slice()
            nextSquares[i] = xIsNext ? 'X' : 'O'
            return {
                squares: nextSquares,
                xIsNext: !xIsNext
            }
        })(current)

        setState(({history, stepNumber}) => {
            const newHistory = history.slice(0, stepNumber + 1).concat(next)
            return {
                history: newHistory,
                stepNumber: newHistory.length - 1
            }
        })
    }

    const jumpTo = (step) => {
        setState(state => ({
            ...state,
            stepNumber: step
        }))
    }

    const moves = state.history.map((step, move)=>{
        const desc = move ? `Go to move #${move}` : 'Go to game start'
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })

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