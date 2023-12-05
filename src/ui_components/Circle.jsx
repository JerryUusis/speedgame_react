const Circle = ({ circleClick, id, current }) => {
    return (
        <div
            className={`circle ${current ? 'active' : ""}`}
            onClick={() => circleClick(id)}>
        </div>
    )
}

export default Circle