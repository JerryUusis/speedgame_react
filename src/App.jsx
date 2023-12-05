import NewGame from "./components/NewGame"
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import { levels } from "./levels";
import { useRef, useState } from "react";

function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1);

  const timeoutIdRef = useRef(null);

  let pace = 1000;
  let difficultyLevel;

  //randomnumgen
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const gameSetHandler = (difficulty, name) => {
    const levelIndex = levels.findIndex((item) => item.difficulty === difficulty);
    difficultyLevel = levels[levelIndex].circlesAmount;

    // const { circlesAmount } = levels.find((item) => item.name === difficulty);
    // levelsAmount = circlesAmount;

    const circlesArray = Array.from({ length: difficultyLevel }, (_, i) => i);

    setCircles(circlesArray)
    setPlayer({
      name: name,
      difficulty: difficulty
    })

    setGameLaunch((previousLaunch) => !previousLaunch)
    setGameOn(!gameOn)
    randomNumb()
  }

  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = null;
  }

  const closeHandler = () => {
    setGameLaunch(!gameLaunch)
    setGameOver(!gameOver)
    setScore(0)
  }

  const circleClick = (id) => {
    console.log("circle was clicked", id)
    setScore(score + 10)
  }

  //look for next active circle as long as current circle === nextactive
  const randomNumb = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(0, difficultyLevel)
    } while (nextActive === current);

    setCurrent(nextActive)

    timeoutIdRef.current = setTimeout(randomNumb, pace)
    console.log(nextActive);
  };
  //setTimeout from react

  return (
    <div className="main-container">

      {gameLaunch && <NewGame onClick={gameSetHandler} player={player} />}
      {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler} circleClick={circleClick} current={current}/>}
      {gameOver && <GameOver closeHandler={closeHandler} {...player} score={score} />}
    </div>
  )
}

export default App
