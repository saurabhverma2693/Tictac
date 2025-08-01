import Player from "./Components/Player";
import GmaeBoard from "./Components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, SetActivePlayer]  = useState('X');

  function handleSelectPlayer(){
    SetActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X"  isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
        <GmaeBoard onSelectSquare={handleSelectPlayer}  activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
