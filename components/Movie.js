function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Jauge from "./Jauge.js";
import NoticeItem from "./NoticeItem.js";

var Movie = function Movie(_ref) {
    var movie = _ref.movie;
    var title = movie.title,
        category = movie.category,
        likes = movie.likes,
        dislikes = movie.dislikes;

    var onClicked = function onClicked() {
        // delete movie;
        setMovies(function (movieData) {
            return [].concat(_toConsumableArray(movieData));
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
            React.createElement(
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
                    React.createElement(
                        "span",
                        null,
                        "X delete"
                    ),
                    React.createElement(NoticeItem, { iconClass: "dislike", movie: movie, increment: -1 })
                ),
                React.createElement(Jauge, { likes: likes, dislikes: dislikes })
            )
        )
    );
};

export default Movie;