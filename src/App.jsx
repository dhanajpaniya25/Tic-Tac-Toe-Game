import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

// Initial player names mapped to their symbols
const PLAYERS = {
  'X': 'PLayer 1',
  'O': 'Player 2'
};

// Initial empty 3x3 game board
// Each cell starts as null (no move made yet)
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Function to determine whose turn it is
// Based on the previous moves stored in gameTurns
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  // If at least one move has been made and the last move was by X,
  // then it's O's turn next
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

// Function to rebuild the game board dynamically from the turns array
// This avoids directly mutating the board and keeps state predictable
function deriveGameBoard(gameTurns) {

  // Create a deep copy of the initial board
  // so we don't accidentally modify the original structure
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  // Loop through all turns and fill the board accordingly
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    // Place the player's symbol (X or O) at the correct position
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

// Function to check if there is a winner
// It compares all possible winning combinations
function deriveWinner(gameBoard, players) {
  let winner;

  // Loop through predefined winning patterns
  for (const combination of WINNING_COMBINATIONS) {

    // Get symbols at the three positions of the current combination
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    // Check if all three squares are filled and have the same symbol
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      // Map symbol (X/O) to actual player name
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {

  // State to store player names (can be edited)
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });

  // State to store all moves played in the game
  // Each turn contains player + selected square
  const [gameTurns, setGameTurns] = useState([]);

  // Derive current active player based on turns history
  const activePlayer = deriveActivePlayer(gameTurns);

  // Build the current board UI from turns
  const gameBoard = deriveGameBoard(gameTurns);

  // Check if there is a winner
  const winner = deriveWinner(gameBoard, players);

  // Check for draw (all 9 moves played and no winner)
  const hasDraw = (gameTurns.length === 9 && !winner);

  function handleSelectSquare(rowIndex, colIndex) {

    // Update gameTurns using previous state (important for correctness)
    setGameTurns((prevTurns) => {

      // Determine whose turn it is before adding new move
      const currentPlayer = deriveActivePlayer(prevTurns);

      // Add new move at the beginning of the array
      // (latest move first for easier access)
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    // Reset game by clearing all turns
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {

    // Update player name without affecting the other player
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">

        {/* Player components with active state highlighting */}
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName={PLAYERS.X}
            symbol='X'
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />

          <Player
            initialPlayerName={PLAYERS.O}
            symbol='O'
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {/* Show GameOver screen only if there's a winner or a draw */}
        {(winner || hasDraw) &&
          <GameOver winner={winner} onRestart={handleRestart} />
        }

        {/* Render the game board */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>

      {/* Display move history */}
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;