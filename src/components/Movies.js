
import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const { movies } = MovieContextData();
    const { moviesShow } = MoviesShowContextData();
    const [page, setPage] = React.useState(0)
    const ratio = 8;
    const data = (moviesShow || movies);
    const lastValue = () => {
        const endVal = (page + ratio);
        const len = data.length;
        return len > endVal ? endVal - len : null;
    }
    const nav = (end) => {
        return end ? (
            data.slice(page, end)
        ) : data.slice(page);
    }
    const next = () => {
        if (data.length >= page + ratio) {
            setPage(page + ratio)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            setPage(page - ratio)
        }
    }

    return (
        <section className="center grid-row content">
            <div className="movies-content grid-row">
                {data && nav(lastValue()).map((movie, i) => movie && <Movie key={i} movie={movie} />)}
                {!data && <p>Desolé<span><i classN='bx bx-upside-down'></i></span> ! Il n'y a aucun film disponible</p>}
            </div>
            <div className="pagination grid-col">
                <button onClick={back}>arriere</button>
                <button onClick={next}>avant</button>
            </div>
        </section>
    )
}

export default Movies;