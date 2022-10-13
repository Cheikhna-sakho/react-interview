import { MoviesShowContextData } from "../../../contexts/MoviesContext.js";
import { MovieContextData } from "../../contexts/MoviesContext.js";
import { RouteContextData } from "../../contexts/RouteContext.js";

var SearchBar = function SearchBar() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    var _RouteContextData = RouteContextData(),
        setRoute = _RouteContextData.setRoute;

    var onSearch = function onSearch(e) {
        var value = e.target.value;

        var moviesData = movies.filter(function (movie) {
            return movie.title.toLowerCase().includes(value.toLowerCase());
        });

        setMoviesShow(moviesData);
        setRoute("Recheche/" + value);
        if (!value) {
            setRoute(null);
            setMoviesShow(null);
        }
    };
    return React.createElement(
        "form",
        { onSubmit: function onSubmit(e) {
                return e.preventDefault();
            } },
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