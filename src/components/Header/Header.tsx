import { useScoreContext } from '../ScoreContext/ScoreContext';
import './header.scss'


export const Header: React.FC = () => {
  const { score } = useScoreContext()
  return (
    <div className="header">
      <h1 className="header__title">ROCK PAPER SCISSORS</h1>
      <div className="header__scoreBox">
        <h2 className="header__scoreBox__title">Score</h2>
        <p className="header__scoreBox__score">{score}</p>
      </div>
    </div>
  );
};
