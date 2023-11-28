import { useState } from "react"
const NewGame = ({ onClick }) => {
    const [name, setName] = useState("");

    const setPlayerName = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Aloita uusi peli  kirjoittamalla nimesi ja valitsemalla vaikeusaste</h2>
            <input type="text" placeholder="Kirjoita nimesi" onChange={setPlayerName} />
            <div className="difficulty-button-container" >
                <button onClick={() => onClick("easy", name)}>Helppo</button>
                <button onClick={() => onClick("medium", name)}>Keskitaso</button>
                <button onClick={() => onClick("hard", name)}>Vaikea</button>
            </div>
        </div>
    )

}

export default NewGame