
import { CategoriesContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const {movies} = MovieContextData();
    const categories = CategoriesContextData();
    console.log("categories",categories);
    return (
        <section className="movies-content grid">
            {movies && movies.map((movie, i) => <Movie key={i} movie={movie} />)}
        </section>
    )
}

export default Movies;