import React from "react";
import { useState } from "react";
import "../GameStyle/GameInfo.css";



export default function Game({
  score,
  setScore,
  questionIndex,
  setQuestionIndex,
  quizComplete,
  setQuizComplete,
  questions, 
  handleLoadChange
}) 

{
  const checkAnswer = (selectedAnswer) => {
    const correctAnswer = questions[questionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (questionIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuestionIndex(0);
    setQuizComplete(false);
  };

  const existQuiz = () => {
    handleLoadChange(true)
  }

  if (quizComplete) {
    return (
      <div>
        <h1>Quiz Complete!</h1>
        <p>
          You scored {score} out of {questions.length}.
        </p>
        <button onClick={resetQuiz}>Restart Quiz</button>
        <button onClick={existQuiz}>Exit Quiz</button>
      </div>
    );
  }

  console.log('did we get questions in here', questions)

  return (
    <div className="gameWrapper">
      <div className="innerGameWrapper">
      <div className="gameScore">
       
        <p>Question: {questionIndex + 1}</p>
      </div>
        <h1 className="gameQuestion">{questions[questionIndex].question}</h1>
        <div>
          {questions[questionIndex].options.map((option, index) => (
          <button  className='option' key={index} onClick={() => checkAnswer(option)}>
            {option}
          </button>
        ))}
        </div>
        </div>
    </div>
  );
}
