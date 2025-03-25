import React, { useState } from "react";


function Main() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num) || num < 1 || num > 10) {
      setMessage(" 🤨 Please enter a number between 1 and 10.");
      return;
    }
    setAttempts(attempts + 1);
    
    if (num < targetNumber) {
      setMessage(" 😕 Too low! Try again.");
    } else if (num > targetNumber) {
      setMessage(" 😲 Too high! Try again.");
    } else {
      setMessage(`🤩 Correct! You guessed it in ${attempts + 1} attempts.`);
    }
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="num">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 10</p>
      <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess"/>
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}


export default Main