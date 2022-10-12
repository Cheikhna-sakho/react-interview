import { MovieContextData } from "../../contexts/MoviesContext.js";

const NoticeItem = ({ iconClass, movie, increment }) => {
    const { setMovies } = MovieContextData();
    const count = increment >= 0 ? "likes" : "dislikes";
    const onClicked = () => {
        movie[count]++;
        setMovies(movieData => [...movieData])
    }
    return (
        <button onClick={onClicked} className={`notice-item grid-col`}>
            <i className={`bx bxs-${iconClass}`}></i>
            <span className="like">
                {movie[count]}
            </span>
        </button>
    )
}

export default NoticeItem