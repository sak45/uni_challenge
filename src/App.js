import React, { useState } from "react";
import "./App.css";
import GameDetail from "./GameInfo/GameDetail";
import ScoreBoard from "./GameInfo/ScoreBoard";
import Game from "./GameInfo/Game";
import SignUp from "./GameInfo/SignUp";

function App() {
  const [load, setLoad] = useState(true);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [player, setPlayer] = useState({
    name: "",
  });

  function handleNameChange(e) {
    setPlayer({
      ...player,
      name: e.target.value,
    });
  }

  const handleLoadChange = (loadStatus) => {
    setLoad(loadStatus);
  };

  const questions = [
    {
      id: 1,
      question: "Which is the capital of France?",
      options: ["A: Paris", "B: Lyon", "C: Monaco", "D: Marseille", "E: Nice"],
      answer: "A: Paris",
    },
    {
      id: 2,
      question: "Where is Botswana located in Africa?",
      options: [
        "A: Central Africa",
        "B: West Africa",
        "C: South Africa",
        "D: East Africa",
        "E: North Africa",
      ],
      answer: "C: South Africa",
    },
    {
      id: 3,
      question: "What is the capital city of England?",
      options: [
        "A: Manchester",
        "B: London",
        "C: Birmingham",
        "D: Glassgow",
        "E: Cardiff",
      ],
      answer: "B: London",
    },
    {
      id: 4,
      question: "In computer science, what does the acronym SQL stand for?",
      options: [
        "A: Simple Query Language",
        "B: Structured Question Language",
        "C: Structured Query Language",
        "D: Structured Question Literature",
        "E: Simplify Query Language",
      ],
      answer: "C: Structured Query Language",
    },
    {
      id: 5,
      question:
        "In physics, which subatomic particle is responsible for carrying the electromagnetic force?",
      options: [
        "A: Electron",
        "B: Photon",
        "C: Neutrino",
        "D: Proton",
        "E: Magnito",
      ],
      answer: "D: Proton",
    },
    {
      id: 6,
      question: "Which is the rarest blood type among humans?",
      options: ["A: D-", "B: B+", "C: 0-", "D: A+", "E: AB-"],
      answer: "E: AB-",
    },
    {
      id: 7,
      question: "Which country won the World Cup in 2002?",
      options: [
        "A: England",
        "B: Spain",
        "C: Argentina",
        "D: Brazil",
        "E: Germany",
      ],
      answer: "D: Brazil",
    },
    {
      id: 8,
      question: "How many letters are there in the alphabet?",
      options: ["A: 26", "B: 25", "C: 29", "D: 22", "E: 27"],
      answer: "A: 26",
    },
    {
      id: 9,
      question: "What is the capital city of Somalia?",
      options: [
        "A: Somaliland",
        "B: Nairobi",
        "C: Mogadishu",
        "D: Cape Town",
        "E: Djibouti",
      ],
      answer: "C: Mogadishu",
    },
    {
      id: 10,
      question: "How many states are there in America?",
      options: ["A: 52", "B: 49", "C: 45", "D: 50", "E: 47"],
      answer: "D: 50",
    },
    {
      id: 11,
      question: "How many countries are there in South America",
      options: ["A: 11", "B: 12", "C: 13", "D: 10", "E: 9"],
      answer: "B: 12",
    },
    {
      id: 13,
      question: "Which coutry has the highest population?",
      options: ["A: India", "B: America", "C: China", "D: Brazil", "E: Russia"],
      answer: "C: China",
    },
    {
      id: 14,
      question: "Which country has the most Olympic Gold Medals?",
      options: [
        "A: United Kingdom",
        "B: Jamica",
        "C: China",
        "D: America",
        "E: Japan",
      ],
      answer: "D: America",
    },
    {
      id: 15,
      question: "Which Country has won the most FIFA World Cup titles?",
      options: [
        "A: Brazil",
        "B: Uruguay",
        "C: Italy",
        "D: France",
        "E: Germany",
      ],
      answer: "A: Brazil",
    },
    {
      id: 16,
      question: "What is the longest nonstop flight in the world?",
      options: [
        "A: Doha to Auckland",
        "B: Perth to London",
        "C: Singapore to New York",
        "D: Singapore to Los Angeles",
        "E: Houston to Sydney",
      ],
      answer: "C: Singapore to New York",
    },
    {
      id: 17,
      question: "Which is the most visited country in the world?",
      options: [
        "A: Thailand",
        "B: America",
        "C: France",
        "D: United Kingdom",
        "E: Turkey",
      ],
      answer: "C: France",
    },
    {
      id: 18,
      question: "Which is the largest brand in the world?",
      options: [
        "A: Apple",
        "B: Microsoft",
        "C: Playstation",
        "D: Mercedez",
        "E: Amazon",
      ],
      answer: "A: Apple",
    },
    {
      id: 19,
      question: "Who is the highest-grossing actor at the box office?",
      options: [
        "A: Samuel L.Jackson",
        "B: Scarlet Johansson",
        "C: Robert Downy Jr.",
        "D: Chris Pratt",
        "E: Tom Hanks",
      ],
      answer: "A: Samuel L.Jackson",
    },
    {
      id: 20,
      question: "What is the highest-grossing film at the box office?",
      options: [
        "A: Titanic",
        "B: Avengers: Endgame",
        "C: Star Wars: Episode VII - The Force Awakens",
        "D: Avatar 2009",
        "E: Jurassic World",
      ],
      answer: "D: Avatar 2009",
    },
    {
      id: 21,
      question: "What is the most expensive movie ever made?",
      options: [
        "A: Pirates of the Caribbean: At the world's End",
        "B: Avengers: Age of Ultron",
        "C: Star Wars: The Rise of Skywalker",
        "D: Avatar 2009",
        "E: Star Wars: Episode VII - The Force Awakens",
      ],
      answer: "E: Star Wars: Episode VII - The Force Awakens",
    },
  ];

  return (
    <>
      {load ? (
        <SignUp
          player={player}
          handleNameChange={handleNameChange}
          handleLoadChange={handleLoadChange}
        />
      ) : (
        <div className="App">
          <GameDetail />
          <div className="pageDivide">
            <ScoreBoard player={player} score={score} />
            <Game
              quizComplete={quizComplete}
              score={score}
              questionIndex={questionIndex}
              setScore={setScore}
              setQuestionIndex={setQuestionIndex}
              setQuizComplete={setQuizComplete}
              questions={questions}
              handleLoadChange={handleLoadChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
