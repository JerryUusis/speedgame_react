import NewGame from "./components/NewGame"
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState()

  const gameSetHandler = (difficulty, name) => {
    setPlayer({ name: name, difficulty: difficulty })
  }

  return (
    <>
      <h1>Nopeustesti</h1>
      <NewGame
        onClick={gameSetHandler}
        player={player}
      />
    </>
  )
}

export default App
