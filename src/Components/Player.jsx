export default function Player({player,symbol}){
    return (
        <li>
            <span id="players">            <span className="player-name">{player}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
          </li>
    );
}
