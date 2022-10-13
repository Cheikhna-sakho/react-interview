import { MovieContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import Jauge from "./Jauge.js"
import NoticeItem from "./NoticeItem.js"

const Movie = ({ movie }) => {
    const { title, category, likes, dislikes } = movie;
    const { movies, setMovies } = MovieContextData();
    const { moviesShow } = MoviesShowContextData();
    const movieRef = movies.indexOf(movie);

    const onDetele = () => {
        delete movies[movieRef];
        setMovies(movieData => [...movieData.filter(movie => movie && movie)]);
    }

    return (
        <article className="movie grid">
            <div className="movie-cover">
                <img src="./assets/images/movieFortest.jpg" alt="movie cover" />
            </div>
            <div className="movie-info grid-row" >
                <h2 className="movie-title"> nom : {title}</h2>
                {category && <h3>Categorie: {category}</h3>}
                <div className="notice">
                    <div className="notice-items grid-col">
                        <NoticeItem iconClass="like" movie={movie} increment={1} />
                        {!moviesShow && <button className="movie-rm" onClick={onDetele}>supprimer</button>}
                        <NoticeItem iconClass="dislike" movie={movie} increment={-1} />
                    </div>
                    <Jauge likes={likes} dislikes={dislikes} />
                </div>
            </div>
        </article>
    )
}

export default Movie