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
    <div className="game__topTriangle">
      <div className="game__selection">
        <div id={userSelection || undefined} className={!houseSelection ? "icon emptySpace" : `icon icon__${userSelection} ${userWin === true && "winner"}`}></div>
        {/* <img
          src={!houseSelection ? undefined : userSelection?.src}
          alt={!houseSelection ? undefined : userSelection?.alt}
          className={!houseSelection ? "icon emptySpace" : `icon icon__${userSelection?.alt} ${userWin === true && "winner"}`}
        /> */}
        <p className="game__selection__title">you picked</p>
      </div>
      <div className="game__selection">
        <div id={userSelection || undefined} className={!houseSelection
          ? "icon emptySpace"
          : `icon fix icon__${houseSelection} ${userWin === false && "winner"}`
        }></div>
        {/* <img
          src={houseSelection?.src}
          alt={houseSelection?.alt}
          className={
            !houseSelection
              ? "icon emptySpace"
              : `icon fix icon__${houseSelection?.alt} ${userWin === false && "winner"}`
          }
        /> */}
        <p className="game__selection__title">the house picked</p>
      </div>
    </div>
  );
};
