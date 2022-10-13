function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { MovieContextData, MoviesShowContextData } from "../../contexts/MoviesContext.js";
import Jauge from "./Jauge.js";
import NoticeItem from "./NoticeItem.js";

var Movie = function Movie(_ref) {
    var movie = _ref.movie;
    var title = movie.title,
        category = movie.category,
        likes = movie.likes,
        dislikes = movie.dislikes;

    var _MovieContextData = MovieContextData(),
        movies = _MovieContextData.movies,
        setMovies = _MovieContextData.setMovies;

    var _MoviesShowContextDat = MoviesShowContextData(),
        moviesShow = _MoviesShowContextDat.moviesShow;

    var movieRef = movies.indexOf(movie);

    var onDetele = function onDetele() {
        delete movies[movieRef];
        setMovies(function (movieData) {
            return [].concat(_toConsumableArray(movieData.filter(function (movie) {
                return movie && movie;
            })));
        });
    };

    return React.createElement(
        "article",
        { className: "movie grid" },
        React.createElement(
            "div",
            { className: "movie-cover" },
            React.createElement("img", { src: "./assets/images/movieFortest.jpg", alt: "movie cover" })
        ),
        React.createElement(
            "div",
            { className: "movie-info grid-row" },
            React.createElement(
                "h2",
                { className: "movie-title" },
                " nom : ",
                title
            ),
            category && React.createElement(
                "h3",
                null,
                "Categorie: ",
                category
            ),
            React.createElement(
                "div",
                { className: "notice" },
                React.createElement(
                    "div",
                    { className: "notice-items grid-col" },
                    React.createElement(NoticeItem, { iconClass: "like", movie: movie, increment: 1 }),
                    !moviesShow && React.createElement(
                        "button",
                        { className: "movie-rm", onClick: onDetele },
                        "supprimer"
                    ),
                    React.createElement(NoticeItem, { iconClass: "dislike", movie: movie, increment: -1 })
                ),
                React.createElement(Jauge, { likes: likes, dislikes: dislikes })
            )
        )
    );
};

export default Movie;