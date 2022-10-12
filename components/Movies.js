var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { CategoriesContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { MovieContextData } from "../contexts/MoviesContext.js";
import Movie from "./Movie.js";

var Movies = function Movies() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        moviesShow = _MoviesShowContextDat.moviesShow;

    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        page = _React$useState2[0],
        setPage = _React$useState2[1];

    var ratio = 8;
    var data = moviesShow || movies;
    var lastValue = function lastValue() {
        var endVal = page + ratio;
        var len = data.length;
        return len > endVal ? endVal - len : null;
    };
    var nav = function nav(end) {
        return end ? data.slice(page, end) : data.slice(page);
    };
    var next = function next() {
        if (data.length >= page + ratio) {
            setPage(page + ratio);
        }
    };
    var back = function back() {
        if (page - ratio >= 0) {
            setPage(page - ratio);
        }
    };

    return React.createElement(
        "section",
        { className: "center grid-row content" },
        React.createElement(
            "div",
            { className: "movies-content grid-row" },
            data && nav(lastValue()).map(function (movie, i) {
                return movie && React.createElement(Movie, { key: i, movie: movie });
            }),
            !data && React.createElement(
                "p",
                null,
                "Desol\xE9",
                React.createElement(
                    "span",
                    null,
                    React.createElement("i", { classN: "bx bx-upside-down" })
                ),
                " ! Il n'y a aucun film disponible"
            )
        ),
        React.createElement(
            "div",
            { className: "pagination grid-col" },
            React.createElement(
                "button",
                { onClick: back },
                "arriere"
            ),
            React.createElement(
                "button",
                { onClick: next },
                "avant"
            )
        )
    );
};

export default Movies;