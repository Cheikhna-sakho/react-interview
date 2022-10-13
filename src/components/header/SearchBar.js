import { MoviesShowContextData } from "../../../contexts/MoviesContext.js";
import { MovieContextData } from "../../contexts/MoviesContext.js"
import { RouteContextData } from "../../contexts/RouteContext.js";


const SearchBar = () => {
    const { movies } = MovieContextData();
    const { setMoviesShow } = MoviesShowContextData();
    const { setRoute } = RouteContextData();
    
    const onSearch = (e) => {
        const { value } = e.target;
        const moviesData = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));

        setMoviesShow(moviesData)
        setRoute("Recheche/" + value);
        if (!value) {
            setRoute(null);
            setMoviesShow(null);
        }
    }
    return (
        <form onSubmit={e=> e.preventDefault()}>
            <div className="searchBar grid-col">
                <input type="search" id="search" onChange={onSearch} placeholder="recherche par titre" />
                <span>
                    <i className='bx bx-search'></i>
                </span>
            </div>
        </form>
    )
}

export default SearchBar