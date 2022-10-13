function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { RouteContextData } from "../../../contexts/RouteContext.js";
import { MovieContextData, MoviesShowContextData } from "../../../contexts/MoviesContext.js";

var Popularity = function Popularity() {
    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    var _RouteContextData = RouteContextData(),
        setRoute = _RouteContextData.setRoute;

    var populaireMovies = function populaireMovies() {
        setRoute("Les plus populaire");
        var m = [].concat(_toConsumableArray(movies));
        setMoviesShow(m.sort(function (a, b) {
            return a.likes < b.likes ? 1 : b.likes < a.likes ? -1 : 0;
        }));
    };

    return React.createElement(
        "div",
        { className: "nav-item", onClick: populaireMovies },
        "Populaire"
    );
};

export default Popularity;