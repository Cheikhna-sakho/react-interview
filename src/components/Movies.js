
import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { RouteContextData } from "../../contexts/RouteContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

const Movies = () => {
    const { movies } = MovieContextData();
    const { moviesShow } = MoviesShowContextData();
    const {route} = RouteContextData();
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
    //  console.log(route, "route");
    return (
        <section className="center grid-row content">
            <div className="page">
                {route && <h2>{route}</h2>}
                {!route && <h2>Accueil</h2>}
            </div>
            <div className="movies-content grid-row">
                {data && nav(lastValue()).map((movie, i) => movie && <Movie key={i} movie={movie} />)}
            </div>
            {data && !data.length && <p className="not-found">Desolé<span><i className='bx bx-upside-down'></i></span> ! Il n'y a aucun film disponible</p>}
            <div className="pagination grid-col">
                <button onClick={back} className="grid-col"><span><i className='bx bx-arrow-back' ></i></span>précédent</button>
                <button onClick={next} className="grid-col">suivant<span><i className='bx bx-arrow-back bx-rotate-180' ></i></span></button>
            </div>
        </section>
    )
}

export default Movies;