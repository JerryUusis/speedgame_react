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
  const roundsCount = useRef(0);
  const currentInst = useRef(0);
  const paceRef = useRef(1000);
  let difficultyLevel;

  //randomnumgen
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const gameSetHandler = (difficulty, name) => {
    const levelIndex = levels.findIndex((item) => item.difficulty === difficulty);
    difficultyLevel = levels[levelIndex].circlesAmount;

    const circlesArray = Array.from({ length: difficultyLevel }, (_, i) => i);

    setCircles(circlesArray)
    setPlayer({
      name: name,
      difficulty: difficulty
    })

    setGameLaunch((previousLaunch) => !previousLaunch)
    gameStart()
  }

  const gameStart = () => {
    setGameOn(!gameOn)
    randomNumb()
  }

  const circleClick = (id) => {
    if (id === current) {
      setScore(score + 1);
      roundsCount.current--;
      paceRef.current -=5;
    } else {
      stopHandler()
    }
  }

  const stopHandler = () => {
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = null;
    setGameOn(false)
    setGameOver(!gameOver)
    roundsCount.current = null;
    paceRef.current = 1000;
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
  }

  //look for next active circle as long as current circle === nextactive
  const randomNumb = () => {
    if (roundsCount.current >= 3) {
      stopHandler()
      return;
    }
    let nextActive;
    do {
      nextActive = getRndInteger(0, difficultyLevel)
    } while (nextActive === currentInst.current);

    setCurrent(nextActive)
    currentInst.current = nextActive;
    roundsCount.current++;
    timeoutIdRef.current = setTimeout(randomNumb, paceRef.current)
    console.log(nextActive);
  }

  return (
    <div className="main-container">
      {gameLaunch && <NewGame onClick={gameSetHandler} player={player} />}
      {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler} circleClick={circleClick} current={current} />}
      {gameOver && <GameOver closeHandler={closeHandler} {...player} score={score} />}
    </div>
  )
}

export default App
