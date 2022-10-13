
import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { RouteContextData } from "../../contexts/RouteContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";
import Pagination from "./Pagination.js";

var Movies = function Movies() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        moviesShow = _MoviesShowContextDat.moviesShow;

    var _RouteContextData = RouteContextData(),
        route = _RouteContextData.route;

    var data = moviesShow || movies;

    var _Pagination = Pagination(data),
        next = _Pagination.next,
        back = _Pagination.back,
        nav = _Pagination.nav;
    // React.useEffect(() => {
    //     const ms = (moviesShow || movies);
    //     setData(ms);
    // }, [movies, moviesShow]);

    return React.createElement(
        "section",
        { className: "center grid-row content" },
        React.createElement(
            "div",
            { className: "page" },
            route && React.createElement(
                "h2",
                null,
                route
            ),
            !route && React.createElement(
                "h2",
                null,
                "Accueil"
            )
        ),
        React.createElement(
            "div",
            { className: "movies-content grid-row" },
            data && nav.map(function (movie, i) {
                return movie && React.createElement(Movie, { key: i, movie: movie });
            })
        ),
        data && !data.length && React.createElement(
            "p",
            { className: "not-found" },
            "Desol\xE9",
            React.createElement(
                "span",
                null,
                React.createElement("i", { className: "bx bx-upside-down" })
            ),
            " ! Il n'y a aucun film disponible"
        ),
        React.createElement(
            "div",
            { className: "pagination grid-col" },
            React.createElement(
                "button",
                { onClick: back, className: "grid-col" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("i", { className: "bx bx-arrow-back" })
                ),
                "pr\xE9c\xE9dent"
            ),
            React.createElement(
                "button",
                { onClick: next, className: "grid-col" },
                "suivant",
                React.createElement(
                    "span",
                    null,
                    React.createElement("i", { className: "bx bx-arrow-back bx-rotate-180" })
                )
            )
        )
    );
};

export default Movies;