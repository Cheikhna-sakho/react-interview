const Jauge = ({ likes, dislikes }) => {
    return (
        <div className="jauge-content">
            <div className="jauge" style={{ "--likes": likes, "--dislikes": dislikes }}></div>
        </div>
    )
}

export default Jauge