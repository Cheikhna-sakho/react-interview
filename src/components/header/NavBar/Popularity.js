
import { RouteContextData } from "../../../contexts/RouteContext.js";
import { MovieContextData, MoviesShowContextData } from "../../../contexts/MoviesContext.js";

const Popularity = () => {
    const { movies } = MovieContextData();
    const { setMoviesShow } = MoviesShowContextData();
    const { setRoute } = RouteContextData();

    const populaireMovies = () => {
        setRoute("Les plus populaire");
        const m = [...movies]
        setMoviesShow(m.sort((a, b) => (a.likes < b.likes) ? 1 : ((b.likes < a.likes) ? -1 : 0)))
    }

    return (
        <div className="nav-item" onClick={populaireMovies}>Populaire</div>
    )
}

export default Popularity