
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const movies = MovieContextData();
    return (
        <section className="movies-content">
            {movies && movies.slice(0, 4).map((movie, i) => <Movie key={i} movie={movie} />)}
        </section>
    )
}

export default Movies;