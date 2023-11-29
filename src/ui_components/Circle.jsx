const Circle = ({circleClick, id}) => {
    return (
        <div className="circle" onClick={() => circleClick(id)}>
            <p></p>
        </div>
    )
}

export default Circle