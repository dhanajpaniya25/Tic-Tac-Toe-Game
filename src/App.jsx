import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayerName='Player 1' symbol='X' /> {/*Player Components*/}
          <Player initialPlayerName='Player 2' symbol='O' />
        </ol>
        Game Board
      </div>
      LOG
    </main>
  )
}

export default App
