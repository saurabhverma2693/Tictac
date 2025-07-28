import { useState } from "react";
export default function Player({name,symbol}){
   const [isEditing, setIsEditing] =  useState(false);

   function handleEditClick(){
    setIsEditing(true);
   }

   let playerName = <span className="player-name">{name}</span>
   
   if(isEditing){
    playerName = <input type="text" required />
   }

    return (
        <li>
            <span id="players">       
                {playerName}     
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
          </li>
    );
} 
