const GameOver = ({ closeHandler, name, difficulty }) => {
    return (

        <div className="page-content-container">
            <h2>Peli päättyi</h2>
            <p>Hei {name}</p>
            <p>Pelasit vaikeusasteella {difficulty}</p>
            <button onClick={closeHandler}>Sulje</button>
        </div>
    )
}

export default GameOver