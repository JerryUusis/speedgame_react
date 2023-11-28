import NewGame from "./components/NewGame"
import Game from "./components/Game";
import { levels } from "./levels";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState()
  const [score, setScore] = useState(0)
  const [circles, setCircles] = useState([])

  const gameSetHandler = (difficulty, name) => {
    setPlayer({ name: name, difficulty: difficulty })
    const levelIndex = levels.findIndex((item) => item.difficulty === difficulty);
    const difficultyLevel = levels[levelIndex].circlesAmount;
    const circlesArray = Array.from({length: difficultyLevel}, (x, i) => i);

    setCircles(circlesArray)
    
    // const stopHandler = () => {
    //   setGameOn(!gameOn)
    //   setGameOver(!gameOver)
    // }
  }

  return (
    <>
      <h1>Nopeustesti</h1>
      <NewGame
        onClick={gameSetHandler}
        player={player}
      />
      <Game 
      score={score}
      circles={circles}
      // stopHandler={stopHandler}
      />
    </>
  )
}

export default App
