// This component is responsible for rendering the Tic Tac Toe board UI
// It receives the current board state and a handler function for when a square is clicked
export default function GameBoard({ onSelectSquare, board }) {

    return (
        <>
            {/* 
              Looping through the 2D board array.
              Each 'row' represents one horizontal line in the game board.
            */}
            <ol id="game-board">
                {board.map((row, rowIndx) => (

                    // Rendering each row as a list item
                    <li key={rowIndx}>
                        <ol>
                            {/* 
                              Looping through each cell in the current row.
                              'playerSymbol' holds the value of the cell:
                              either 'X', 'O', or null (if empty).
                            */}
                            {row.map((playerSymbol, colIndex) => (

                                // Each cell is rendered as a list item containing a button
                                <li key={colIndex}>
                                    <button
                                        // When a user clicks a square, we pass its row and column index
                                        // to the parent function so it can update the game state
                                        onClick={() => onSelectSquare(rowIndx, colIndex)}

                                        // Disable the button if the cell already has a value
                                        // This prevents players from overwriting existing moves
                                        disabled={playerSymbol !== null}
                                    >
                                        {/* Display the current value ('X' or 'O') inside the button */}
                                        {playerSymbol}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );
}