const GameOver = ({ closeHandler, name, difficulty, score }) => {
    return (

        <div className="page-content-container">
            <h2>Peli päättyi</h2>
            <p>Hei {name}</p>
            <p>Pelasit vaikeusasteella: {difficulty}</p>
            <p>Pisteesi: {score}</p>
            <button onClick={closeHandler}>Sulje</button>
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
        </div>
    )
}

export default GameOver