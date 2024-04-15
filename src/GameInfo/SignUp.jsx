import React from "react";
import "../GameStyle/GameInfo.css";

export default function SignUp({ player, handleNameChange, handleLoadChange }) {
  function homeButton() {
    if (player.name.length > 0) {
      handleLoadChange(false); // Set load state to false
    } else {
      alert("To enter the game, please write your name");
    }
  }

  return (
    <div className="SignUp-Container">
      <div className="SignUp-Wallpaper">
        <h1 className="SignUp-Title">Welcome to the BrianByte Quiz</h1>
        <h2 className="SignUp-Header">
          The aim of the game is to get as many correct answers as possible.
          Let's see how well your knowledge is.
        </h2>
        <h3>Enter your name below once you are ready.</h3>
        <input
          className="PlayerName"
          type="text"
          name="player"
          placeholder="Your Name"
          value={player.name}
          onChange={handleNameChange}
        />
        <button className="StartButton" onClick={homeButton}>
          Start Game
        </button>
      </div>
    </div>
  );
}
