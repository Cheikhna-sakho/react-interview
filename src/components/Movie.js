import NoticeItem from "./NoticeItem.js"

const Movie = ({ movie }) => {
    const { title, category, like, dislike } = movie
    return (
        <article className="movie">
            <div className="movie-cover">
                <img src="./assets/images/movieFortest.jpg" alt="movie cover" />
            </div>
            <div className="movie-info">
                <h2 className="movie-title"> nom : {title}</h2>
                <h3>Categorie: {category}</h3>
                <div className="notice grid-col">
                    <NoticeItem itemClass={"like"} iconClass="like" count={like} />
                    <NoticeItem itemClass={"dislike"} iconClass="dislike" count={dislike} />
                </div>
            </div>
        </article>
    )
}

export default Movie