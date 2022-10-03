import { useState } from "react"
import { Board, BoardState } from "./Board"
import { calculateWinner } from "./calculateWinner"

type Step = {
    readonly squares: BoardState,
    readonly xIsNext: boolean
}

type GameState = {
    readonly history: Step[],
    readonly stepNumber: number
}

export const Game = () => {
    const [state, setState] = useState<GameState>({
        history: [{
            squares: [null, null, null, null, null, null, null, null, null],
            xIsNext: true
        }],
        stepNumber: 0
    })

    const current = state.history[state.stepNumber]
    const winner = calculateWinner(current.squares)
    let status: string

    if(winner){
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${current.xIsNext ? 'X' : 'O'}`
    }

    const handleClick = (i: number) => {
        if(winner || current.squares[i]){
            return
        }

        const next: Step = (({squares, xIsNext}) => {
            const nextSquares = squares.slice() as BoardState
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

    const jumpTo = (step: number) => {
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
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}