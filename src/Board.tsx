import { Repeat } from 'typescript-tuple'
import { Square, SquareState } from './Square';

export type BoardState = Repeat<SquareState, 9>;

type BoardProps = {
    squares: BoardState
    onClick: (i: number) => void
}

export const Board: React.FC<BoardProps> = (props) => {
    const renderSquare = (i: number) => (
        <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
    )

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}