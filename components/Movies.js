
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

var Movies = function Movies() {
    var movies = MovieContextData();
    return React.createElement(
        "section",
        { className: "movies-content" },
        movies && movies.slice(0, 4).map(function (movie, i) {
            return React.createElement(Movie, { key: i, movie: movie });
        })
    );
};

export default Movies;