const GameOver = ({ modal, closeModal, scoreMessage, closeHandler, name, difficulty, score }) => {

    return (

        <div className="page-content-container">
            {modal &&
                <div className="modal">
                    <div className="stats-container">
                        <h1>Peli päättyi</h1>
                        <p>Nimesi: {name}</p>
                        <p>Pelasit vaikeusasteella: {difficulty}</p>
                        <p>Pisteesi: {score}</p>
                        <p className="score-message">{scoreMessage}</p>
                        <button onClick={() => closeModal()}>Sulje</button>
                    </div>
                </div>
            }

            <table>
                <tbody>
                    <tr>
                        <th>Nimi</th>
                        <th>Pisteet</th>
                        <th>Vaikeusaste</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{score}</td>
                        <td>{difficulty}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={closeHandler}>Sulje</button>
        </div>
    )
}

export default GameOver