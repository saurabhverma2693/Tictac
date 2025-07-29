import Player from "./Components/Player";
import GmaeBoard from "./Components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GmaeBoard />
      </div>
    </main>
  );
}

export default App;
