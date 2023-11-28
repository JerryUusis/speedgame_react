import NewGame from "./components/NewGame"
import { useState } from "react"

function App() {
  const [name, setName] = useState("");

  const gameSetHandler = difficulty => {
    console.log(difficulty)
  }

  const setPlayerName = (event) => {
    return setName(event.target.value, name)
  }

  console.log(name)


  return (
    <>
      <h1>Nopeustesti</h1>
      <NewGame 
      onClick={gameSetHandler}
      setPlayerName={setPlayerName}
       />
    </>
  )
}

export default App
