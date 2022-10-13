var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

    var _React$useState = React.useState(4),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        ratio = _React$useState2[0],
        setRatio = _React$useState2[1];

    var _Pagination = Pagination(data, { ratio: ratio }),
        next = _Pagination.next,
        back = _Pagination.back,
        nav = _Pagination.nav,
        index = _Pagination.index,
        pageIndex = _Pagination.pageIndex;
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
            null,
            React.createElement(
                "select",
                { className: "ratio", onChange: function onChange(e) {
                        setRatio(e.target.value);console.log("yes", e.target.value);
                    } },
                [4, 8, 12].map(function (item) {
                    return React.createElement(
                        "option",
                        { key: item, value: item },
                        "Afficher par ",
                        item
                    );
                })
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
                "div",
                { className: "index" },
                pageIndex + "/" + index
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