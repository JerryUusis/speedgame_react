import Circle from "../ui_components/Circle";

const Game = ({score, circles, stopHandler}) => {
    return (
        <>
        <h2>Current score</h2>
        {circles.map((_, i) => <Circle key={i}/>)}
        <p>{score}</p>
        <button onClick={stopHandler}></button>
        </>
    )
}

export default Game;