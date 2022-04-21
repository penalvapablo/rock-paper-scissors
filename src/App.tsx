import React, { useState } from 'react';
import './App.css';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';
import rock from './images/icon-rock.svg';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="gradient">
      {/* Header */}
      <div className="header">
        <h1 className="header__title">ROCK PAPER SCISSORS</h1>
        <div className="haeder__scoreBox">
          <h2 className="header__scoreBox__title">Score</h2>
          <p className="header__scoreBox__score">{score}</p>
        </div>
      </div>
      {/* Game */}
      <div className="game">
        <img src={paper} alt="paper" className="icon icon__paper" />
        <img src={scissors} alt="scissors" className="icon icon__scissors" />
        <img src={rock} alt="rock" className="icon icon__rock" />
      </div>
      <button className="rules__btn">rules</button>
    </div>
  );
}

export default App;
