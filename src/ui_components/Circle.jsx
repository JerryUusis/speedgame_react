const Circle = ({circleClick, id, current}) => {
    return (
        <div className={`circle ${current ? 'active' : ""}`} onClick={() => circleClick(id)}>
            <p></p>
        </div>
    )
}

export default Circle