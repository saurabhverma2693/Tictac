import Player from "./Components/Player";
import GmaeBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X' ){
        currentPlayer = 'O';
      }
return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, SetActivePlayer]  = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);


  function handleSelectPlayer(rowIndex, colIndex){
    // SetActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns)=>{

const currentPlayer = deriveActivePlayer(prevTurns);


    const updatedTurns = [
  {square : { row : rowIndex, col : colIndex  }, player : currentPlayer },
  ...prevTurns,
];
return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X"  isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
        <GmaeBoard
         onSelectSquare={handleSelectPlayer} 
          turns ={gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
