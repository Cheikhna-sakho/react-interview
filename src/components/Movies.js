
import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const { movies } = MovieContextData();
    const { moviesShow, setMoviesShow } = MoviesShowContextData();
    const [page, setPage] = React.useState(0)

    const ratio = 8;
    const lastValue = () => {
        const endVal = (page + ratio);
        const len = movies.length;
        return len > endVal ? endVal - len : null;
    }
    const nav = (end) => {
        console.log(end, "valend")
        return end ? (
            movies.slice(page, end)
        ) : movies.slice(page);
    }
    const next = () => {
        if (movies.length >= page + ratio) {
            setPage(page + ratio)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            setPage(page - ratio)
        }
    }
    // const len = movies.length
    return (
        <section className="center">
            <div className="movies-content grid-row">
                {movies && nav(lastValue()).map((movie, i) => movie && <Movie key={i} movie={movie} />)}
            </div>
            <div className="pagination">
                <button onClick={back}>arriere</button>
                <button onClick={next}>avant</button>
            </div>
        </section>
    )
}

export default Movies;