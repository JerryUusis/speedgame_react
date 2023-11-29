import Circle from "../ui_components/Circle";

const Game = ({ score, circles, stopHandler }) => {
    return (
        <div className="page-content-container">
            <div className="circle-container">
            {circles.map((_, i) => <Circle key={i} />)}
            </div>
            <h2>Current score</h2>
            <p>{score}</p>
            <button onClick={stopHandler}>Lopeta peli</button>
        </div>
    )
}

export default Game;