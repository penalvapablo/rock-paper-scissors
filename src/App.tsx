import "./App.css";
import { Header } from "./components/Header/Header";
import { GameContainer } from "./components/GameContainer/GameContainer";
import { MyScoreContext } from "./components/ScoreContext/ScoreContext";
import { useState } from "react";
import { Rules } from "./components/Rules/Rules";


function App() {
  // console.log(MyScoreContext);
  const [score, setScore] = useState<number>(0)
  return (
    <MyScoreContext.Provider value={{ score, setScore }}>
      <div className="gradient">
        <Header />
        <GameContainer />
        <Rules />
      </div>
    </MyScoreContext.Provider>
  );
}

export default App;
