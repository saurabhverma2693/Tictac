import Player from "./Components/Player";
import GmaeBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combination";
import GameOver from "./Components/GameOver";

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

    let gameBoard = [...initialGameBoard.map(array => [...array])];

  // This is called Derive States from Props
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row] [combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row] [combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row] [combination[2].column];

      if(firstSquareSymbol  && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol;
      }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
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

  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X"  isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GmaeBoard
         onSelectSquare={handleSelectSquare} 
          board ={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
