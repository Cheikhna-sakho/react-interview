
import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { RouteContextData } from "../../contexts/RouteContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";
import Pagination from "./Pagination.js";

const Movies = () => {
    const { movies } = MovieContextData();
    const { moviesShow } = MoviesShowContextData();
    const { route } = RouteContextData();
    const data = (moviesShow || movies);
    const [ratio, setRatio] = React.useState(4);
    const { next, back, nav, index, pageIndex } = Pagination(data, { ratio: ratio });
    // React.useEffect(() => {
    //     const ms = (moviesShow || movies);
    //     setData(ms);
    // }, [movies, moviesShow]);

    return (
        <section className="center grid-row content">
            <div className="page">
                {route && <h2>{route}</h2>}
                {!route && <h2>Accueil</h2>}
            </div>
            <div >
                <select className="ratio"  onChange={e => { setRatio(e.target.value); console.log("yes", e.target.value); }}>
                    {[4, 8, 12].map(item => <option key={item} value={item}>Afficher par {item}</option>)}

                </select>
            </div>
            <div className="movies-content grid-row">
                {data && nav.map((movie, i) => movie && <Movie key={i} movie={movie} />)}
            </div>
            {data && !data.length && <p className="not-found">Desolé<span><i className='bx bx-upside-down'></i></span> ! Il n'y a aucun film disponible</p>}
            <div className="pagination grid-col">
                <button onClick={back} className="grid-col"><span><i className='bx bx-arrow-back' ></i></span>précédent</button>
                <div className="index">{`${pageIndex}/${index}`}</div>
                <button onClick={next} className="grid-col">suivant<span><i className='bx bx-arrow-back bx-rotate-180' ></i></span></button>
            </div>
        </section>
    )
}


export default Movies;