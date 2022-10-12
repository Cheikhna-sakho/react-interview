import { movies$ } from "../movies.js"
import getMoviesByCategories from "../utils/MoviesByCategories.js";


const MoviesContext = React.createContext(null);
export const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = React.useState(null);
    const [categories, setCategories] = React.useState(null);
    const [moviesShow, setMoviesShow] = React.useState(movies);

    /**
     * Get Movie
     */
    React.useEffect(() => {
        movies$.then(data => setMovies(data))
            .catch(error => console.log(error));
        // setMoviesShow(movies);
    }, [])
    /**
     * Get Movie
     */
    React.useEffect(() => {
        movies && setCategories(getMoviesByCategories(movies));
    }, [movies])

    // ************************************************
    return (
        <MoviesContext.Provider value={{ movies, setMovies, categories, setCategories, moviesShow, setMoviesShow }}>
            {children}
        </MoviesContext.Provider>
    )
}
export const MovieContextData = () => {
    const { movies, setMovies } = React.useContext(MoviesContext);
    return { movies, setMovies };
}
export const CategoriesContextData = () => {
    const { categories, setCategories } = React.useContext(MoviesContext);
    return { categories, setCategories };
}
export const MoviesShowContextData = () => {
    const { moviesShow, setMoviesShow } = React.useContext(MoviesContext);
    return { moviesShow, setMoviesShow };
}
export default MoviesContext;

























    // const data = {
    //     contextMovies: [movies, setMovies],
    //     contextCategories: [categories, setCategories],
    // }