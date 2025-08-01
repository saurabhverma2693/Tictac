import Player from "./Components/Player";
import GmaeBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X' ){
        currentPlayer = 'O';
      }
return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, SetActivePlayer]  = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

  // This is called Derive States from Props
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol
      const secondSquareSymbol
      const thirdSquareSymbol
    }


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
          board ={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
