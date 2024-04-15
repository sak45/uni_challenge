import React from "react";
import "../GameStyle/GameInfo.css";


export default function ScoreBoard({player, score}) {


  return (
    <>
     
        <div className="scoreboard-wrapper">
          <h2 className="scoreboard-title">ScoreBoard</h2>
          <div className="playerScore">
            <h3 className="playerName">{player.name}</h3>
            <img src='https://i.pinimg.com/originals/37/ce/5c/37ce5cbba8852a35113ade2db2e6297c.gif' alt="" className="playerImg"/>
            <h4 className="playerScore">score: {score}</h4>
          </div>
        </div>
      
    </>
  );
}
