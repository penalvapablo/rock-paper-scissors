
import triangle from "../../images/bg-triangle.svg";
import { MouseEvent, useRef, useState } from "react";
import { Game } from "../Game/Game";
import { GameResult } from "../GameResult/GameResult";
import { gameLogic } from "../../functions/gameLogic";
import { useScoreContext } from "../ScoreContext/ScoreContext";


export interface IState {
  userSelection: string | null;
  houseSelection: string | null;
  setUserSelection: React.Dispatch<React.SetStateAction<string | null>>
  setHouseSelection: React.Dispatch<React.SetStateAction<string | null>>
  userWin: boolean | null
  setUserWin: React.Dispatch<React.SetStateAction<boolean | null>>
}


export const GameContainer: React.FC = () => {
  const { score, setScore } = useScoreContext()
  const [userSelection, setUserSelection] =
    useState<IState["userSelection"]>(null);
  const [houseSelection, setHouseSelection] =
    useState<IState["houseSelection"]>(null);
  const [userWin, setUserWin] = useState<boolean | null>(null)

  const paper = 'paper'
  const scissors = 'scissors'
  const rock = 'rock'
  const options = [paper, scissors, rock];

  function wait(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const houseSelectionFn = async () => {
    const option = options[Math.floor(Math.random() * 3)];
    // const selection = option.current
    await wait(500)
    setHouseSelection(option);
    return option
  };

  const handleSelection = async (e: MouseEvent<HTMLDivElement>) => {
    const selected = e.currentTarget.id;
    setUserSelection(selected);
    const houseSelection = await houseSelectionFn();
    const result = await gameLogic(selected, houseSelection)
    setScoreFn(result)
    setUserWin(result)
  }

  const setScoreFn = (result: boolean | null) => {
    result === true && setScore(score + 1)
    result === false && setScore(score - 1)
  }

  return (
    <>
      <div className="game">
        {!userSelection && (
          <>
            <div className="game__topTriangle">
              <div id={paper} className="icon icon__paper" onClick={handleSelection}></div>
              <div id={scissors} className="icon icon__scissors" onClick={handleSelection}></div>
            </div>
            <div id={rock} className="icon icon__rock game__bottomTriangle" onClick={handleSelection} ></div>

            <img
              src={triangle}
              alt="triangle"
              className="triangle"
            />
          </>
        )}
        {userSelection && (
          <Game
            userSelection={userSelection}
            houseSelection={houseSelection}
            userWin={userWin}
          />
        )}
        {houseSelection && (
          <GameResult
            setUserSelection={setUserSelection}
            setHouseSelection={setHouseSelection}
            userWin={userWin}
            setUserWin={setUserWin}
          />
        )}

      </div>
    </>
  );
};
