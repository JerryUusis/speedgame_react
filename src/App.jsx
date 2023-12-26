import NewGame from "./components/NewGame"
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import AlertMessage from "./ui_components/AlertMessage";
import { levels } from "./levels";
import { useRef, useState, useEffect } from "react";

function App() {
  const [player, setPlayer] = useState()
  const [name, setName] = useState("");
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1);
  const [modal, setModal] = useState(true);
  const [scoreMessage, setScoreMessage] = useState("");
  const [results, setResults] = useState([]);
  // Hard code alert states
  const [alertTitle] = useState("Virhe");
  const [alertContent] = useState("Anna nimesi");
  const [alertSeverity] = useState("warning");
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    if (alertOpen) {
      const timeoutId = setTimeout(() => {
        setAlertOpen(false);
      }, 5000); 

      return () => {
        clearTimeout(timeoutId); 
      };
    }
  }, [alertOpen]);

  const timeoutIdRef = useRef(null);
  const roundsCount = useRef(0);
  const currentInst = useRef(0);
  const paceRef = useRef(1000);
  let difficultyLevel;

  const setPlayerName = (event) => {
    setName(event.target.value)
  }

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const gameSetHandler = (difficulty, name) => {
    if (name.trim() === "") {
      setAlertOpen(true);
    }
    else {

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
  }

  const circleClick = (id) => {
    if (id === current) {
      setScore(score + 1);
      roundsCount.current--;
      paceRef.current -= 5;
    } else {
      stopHandler()
    }
  }

  const handleResults = () => {
    setResults((previousResults) => [
      ...previousResults,
      {
        name: player.name,
        difficulty: player.difficulty,
        score: score
      }
    ])
  }

  const stopHandler = () => {
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = null;
    printScore(score);
    handleResults();
    setGameOn(false)
    setGameOver(!gameOver)
    roundsCount.current = null;
    paceRef.current = 1000;
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const printScore = (score) => {
    let resultMessage;

    if (score < 10) {
      resultMessage = "Yritä uudelleen";
    } else if (score > 9 && score < 20) {
      resultMessage = "Harjoittele";
    } else if (score >= 20 && score < 30) {
      resultMessage = "Kehityskelpoinen";
    } else if (score >= 30 && score < 40) {
      resultMessage = "Nopea";
    } else if (score >= 40 && score < 70) {
      resultMessage = "Erittäin nopea";
    } else if (score >= 70 && score < 100) {
      resultMessage = "Ällistyttävä";
    } else {
      resultMessage = "Uskomaton";
    }
    setScoreMessage(resultMessage)
  }

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
  }

  return (
    <div className="main-container">
      {alertOpen && <AlertMessage
        title={alertTitle}
        content={alertContent}
        severity={alertSeverity}
        open={alertOpen}
        onClose={handleCloseAlert}
      />}
      {gameLaunch && <NewGame
        onClick={gameSetHandler}
        player={player}
        setPlayerName={setPlayerName}
        name={name} />}
      {gameOn && <Game
        score={score}
        circles={circles}
        stopHandler={stopHandler}
        circleClick={circleClick}
        current={current} />}
      {gameOver && <GameOver
        modal={modal}
        scoreMessage={scoreMessage}
        closeModal={closeModal}
        closeHandler={closeHandler}
        {...player}
        score={score}
        results={results} />}
    </div>
  )
}

export default App
