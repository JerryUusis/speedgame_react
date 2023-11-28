const NewGame = ({onClick, setPlayerName}) => {
    return (
        <div>
            <h2>Aloita uusi peli  kirjoittamalla nimesi ja valitsemalla vaikeusaste</h2>
            <input type="text" name="" id="" placeholder="Kirjoita nimesi" onChange={setPlayerName}/>
            <div className="difficulty-button-container" >
                <button onClick={() => onClick("easy")}>Helppo</button>
                <button onClick={() => onClick("medium")}>Keskitaso</button>
                <button onClick={() => onClick("hard")}>Vaikea</button>
            </div>
        </div>
    )

}

export default NewGame