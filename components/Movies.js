
import { CategoriesContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

var Movies = function Movies() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var categories = CategoriesContextData();

    return React.createElement(
        "section",
        { className: "movies-content grid" },
        movies && movies.map(function (movie, i) {
            return movie && React.createElement(Movie, { key: i, movie: movie });
        })
    );
};

export default Movies;