import { movies$ } from "../movies.js";

const MoviesContext = React.createContext(null);
export const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = React.useState();
    React.useEffect(() => {
        movies$.then(data => setMovies(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    )
}
export const MovieContextData = () => {
    const { movies } = React.useContext(MoviesContext);
    return movies;
}
export default MoviesContext;