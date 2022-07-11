import { IState as Props } from "../GameContainer/GameContainer";
import './gameResult.scss'

interface IProps {
  setUserSelection: Props['setUserSelection']
  setHouseSelection: Props['setHouseSelection']
  userWin: Props['userWin']
  setUserWin: Props['setUserWin']
  setRenderResult: Props['setRenderResult']
}

export const GameResult: React.FC<IProps> = ({ setUserSelection, setHouseSelection, userWin, setUserWin, setRenderResult }) => {

  const restartGame = () => {
    setUserSelection(null)
    setHouseSelection(null)
    setUserWin(null)
    setRenderResult(false)
  }

  return (
    <div className="result">
      {userWin === true && <>
        <p className="result__text">you win</p>
        <button onClick={restartGame} className="result__playAgainBtn">
          play again
        </button></>}
      {userWin === false && <>
        <p className="result__text">you loose</p>
        <button onClick={restartGame} className="result__playAgainBtn">
          play again
        </button></>}
      {userWin === null && <>
        <p className="result__text">tie</p>
        <button onClick={restartGame} className="result__playAgainBtn">
          play again
        </button></>}
    </div>
  )
}
