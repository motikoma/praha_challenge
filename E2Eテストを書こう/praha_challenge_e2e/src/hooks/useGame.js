// useHooks
import { useState } from 'react';
import {calculateWinner} from './calculateWinner';

export const useGame = () => {

    // 状態の履歴を保持する
    const [state, setState] = useState({
        history: [{
            squares: [null, null, null, null, null, null, null, null, null],
            xIsNext: true
        }],
        stepNumber: 0
    })
    const current = state.history[state.stepNumber]

    // 現在の状態をもとに勝敗判定を実施してstatusを表示する
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

    // クリックしたマス目の状態を更新して、履歴に追加する
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


    // ステップの履歴を移動する
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

    return {
        current,
        status,
        handleClick,
        moves
    }
}