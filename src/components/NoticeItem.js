import { MovieContextData } from "../../contexts/MoviesContext.js";
import toggleBtn from "../utils/toggleBtn.js";

const NoticeItem = ({ iconClass, movie, increment }) => {
    const { setMovies } = MovieContextData();
    const count = increment >= 0 ? "likes" : "dislikes";
    const btn = React.useRef();
    const onClicked = (e) => {
        movie[count] += toggleBtn(btn) ? 1 : -1;
        setMovies(movieData => [...movieData])
    }
    return (
        <button ref={btn} onClick={onClicked} className={`notice-item grid-col`}>
            <i className={`bx bxs-${iconClass}`}></i>
            <span className="like">
                {movie[count]}
            </span>
        </button>
    )
}

export default NoticeItem