import './game.scss'
import { IState as Props } from "../GameContainer/GameContainer";

interface IProps {
  userSelection: Props["userSelection"];
  houseSelection: Props["houseSelection"];
  userWin: Props["userWin"]
}

export const Game: React.FC<IProps> = ({
  userSelection,
  houseSelection,
  userWin
}) => {


  return (
    <div className="game__topTriangle game__topTriangle__selection__desktop">
      <div className="game__selection">
        <div id={userSelection || undefined} className={`icon icon__${userSelection} ${userWin === true && `winner`}`}
        ></div>
        <div className={`shadow ${userWin === true && 'userShadow'}`}></div>
        <p className="game__selection__title">you picked</p>
      </div>
      <div className="game__selection">
        <div id={userSelection || undefined} className={!houseSelection
          ? "icon emptySpace"
          : `icon fix icon__${houseSelection} ${userWin === false && "winner"}`
        }></div>
        <div className={`shadow  fix ${userWin === false && 'userShadow'}`}></div>

        <p className="game__selection__title">the house picked</p>
      </div>
    </div>
  );
};
