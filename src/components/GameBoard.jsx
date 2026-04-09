import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
// array to generate game board blocks for entering values

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard); //state for updating game board valuess

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        })

        onSelectSquare();
    } //dealing with object or array update them immutably
    // (instead of directly updating make copy and update that)

    return (
        <>
            {/* returning jsx from map function to render gameboard on UI */}
            <ol id="game-board">
                {gameBoard.map((row, rowIndx) => (
                    <li key={rowIndx}>
                        <ol>
                            {/* using colIndex and rowIndex to get the key value for list element tags */}
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleSelectSquare(rowIndx, colIndex)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );
}