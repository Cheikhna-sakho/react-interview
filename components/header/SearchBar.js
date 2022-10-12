import { MoviesShowContextData } from "../../../contexts/MoviesContext.js";
import { MovieContextData } from "../../contexts/MoviesContext.js";

var SearchBar = function SearchBar() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    var onSearch = function onSearch(e) {
        var value = e.target.value;

        var moviesData = movies.filter(function (movie) {
            return movie.title.toLowerCase().includes(value.toLowerCase());
        });
        console.log(moviesData, "data filter");
        setMoviesShow(moviesData);
        if (!value) {
            setMoviesShow(null);
        }
    };
    return React.createElement(
        "form",
        null,
        React.createElement(
            "div",
            { className: "searchBar grid-col" },
            React.createElement("input", { type: "search", id: "search", onChange: onSearch }),
            React.createElement(
                "span",
                null,
                React.createElement("i", { className: "bx bx-search" })
            )
        )
    );
};

export default SearchBar;