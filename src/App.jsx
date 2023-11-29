import NewGame from "./components/NewGame"
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import { levels } from "./levels";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const gameSetHandler = (difficulty, name) => {
    setPlayer({ name: name, difficulty: difficulty })
    const levelIndex = levels.findIndex((item) => item.difficulty === difficulty);
    const difficultyLevel = levels[levelIndex].circlesAmount;
    const circlesArray = Array.from({ length: difficultyLevel }, (x, i) => i);

    setCircles(circlesArray)

    setGameLaunch(!gameLaunch)
    setGameOn(!gameOn)

  }
  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
  }
  
  const closeHandler = () => {
    setGameLaunch(!gameLaunch)
    setGameOver(!gameOver)
  }

  return (
    <div className="main-container">
      
      {gameLaunch && <NewGame onClick={gameSetHandler} player={player} />}
      {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler}/>}
      {gameOver && <GameOver closeHandler={closeHandler} {...player}/>}
    </div>
  )
}

export default App
