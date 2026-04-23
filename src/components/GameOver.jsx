// This component is responsible for displaying the game result
// It shows whether there is a winner or if the game ended in a draw
// It also provides a button to restart the game
export default function GameOver({ winner, onRestart }) {
    return (
        // Main container for the game over screen
        <div id="game-over">

            {/* Static heading shown when the game ends */}
            <h2>Game Over!</h2>

            {/* 
              If a winner exists, display the winner's name/symbol.
              The '&&' operator ensures this only renders when 'winner' is truthy.
            */}
            {winner && <p>{winner} won!</p>}

            {/* 
              If there is no winner, it means the game is a draw.
              This condition handles that case.
            */}
            {!winner && <p>It's a draw!</p>}

            <p>
                <button
                    // When clicked, this triggers the restart handler
                    // passed from the parent component to reset the game state
                    onClick={onRestart}
                >
                    Remacth!
                </button>
            </p>
        </div>
    );
}