
import { CategoriesContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const {movies} = MovieContextData();
    const categories = CategoriesContextData();
    
    return (
        <section className="movies-content grid">
            {movies && movies.map((movie, i) => movie && <Movie key={i} movie={movie} />)}
        </section>
    )
}

export default Movies;